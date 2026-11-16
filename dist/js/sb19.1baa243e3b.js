
/*MPLUS-START*/
/*MPLUS: three additions to the maths section.
  1. Check-backs: a fixed mistake returns after 3, 7 and 21 days. Three clean passes and it is mastered; a miss puts it back on the open list.
  2. Slip types: every mistake can be sorted as concept, method, calculation or careless, by the student or by Claude, so the pattern of lost marks shows.
  3. Written answers: one question written out in full, marked step by step like an exam script. */
(function(){
var DAY=864e5,DAYS=[3,7,21];
function stu(){return window.ROLE==='student'||window.ROLE==='guest'}
function byId(id){return mkList().filter(function(m){return m.id===id})[0]}

/* ---------- 1. check-backs ---------- */
function srSync(){if(!stu())return;mkList().forEach(function(m){
  if(m.fx){if(m.o&&!m.ms&&m.due==null){var s=m.sr||0;if(s<DAYS.length)m.due=m.fx+DAYS[s]*DAY}}
  else{if(m.due!=null)delete m.due;if(m.sr)m.sr=0;if(m.ms)delete m.ms}})}
function srDue(){var t=Date.now();return mkList().filter(function(m){return m.fx&&m.o&&!m.ms&&m.due&&m.due<=t}).sort(function(a,b){return a.due-b.due})}
function srDays(m){return Math.max(1,Math.ceil((m.due-Date.now())/DAY))}
var _save=save;save=function(){try{srSync()}catch(e){}return _save.apply(this,arguments)};
window.srStart=function(){try{srSync()}catch(e){}var q=srDue().slice(0,6);if(!q.length){showToast('No check-backs are due today.');return}
  MKR={q:q.map(function(m){return m.id}),i:0,pick:null,ok:0,sr:1,back:0};view='mk';render();window.scrollTo(0,0)};
var _pick=mkPick;mkPick=function(k){if(!MKR||!MKR.sr)return _pick(k);if(MKR.pick!=null)return;var m=byId(MKR.q[MKR.i]);if(!m)return;
  MKR.pick=k;var t=Date.now(),ok=k===m.a;
  if(ok&&MKR.hu){m.due=t+DAY}
  else if(ok){m.sr=(m.sr||0)+1;MKR.ok++;if(m.sr>=DAYS.length){m.ms=t;delete m.due}else m.due=t+DAYS[m.sr]*DAY}
  else{m.fx=0;m.sr=0;delete m.due;m.n++;m.ts=t;MKR.back++}
  S.ev.push({k:'mk',topic:m.topic,ok:ok,habit:ok?'':(m.habit||m.concept||'Repeated mistake'),type:'check-back',ts:t});save();mkRetry()};
var _retry=mkRetry;mkRetry=function(){_retry();try{if(!MKR||!MKR.sr)return;var m=byId(MKR.q[MKR.i]);if(!m)return;
  var sp=app.querySelector('.meta span');if(sp)sp.textContent='Check-back · '+m.topic;
  if(MKR.pick!=null){var ok=MKR.pick===m.a,b=app.querySelector('.fb b');
    if(b)b.textContent=ok&&MKR.hu?'Right, with a hint. It comes back tomorrow for a clean try.':ok?(m.ms?'Mastered. Three check-backs passed, so this one is yours.':'Still solid. It comes back in '+srDays(m)+' days to make sure.'):'It slipped this time. It is back on your open list for another go.';
    var nb=app.querySelector('.card .btn');if(nb&&/Next mistake/.test(nb.textContent))nb.textContent='Next check-back'}
  else{var c=app.querySelector('.card');if(c)c.insertAdjacentHTML('afterbegin','<div class="eyebrow">You fixed this '+mkWhen(m.fx)+'. Is it still yours?</div>')}}catch(e){}};
var _next=mkNext;mkNext=function(){if(MKR&&MKR.sr&&MKR.i+1>=MKR.q.length){var ok=MKR.ok,n=MKR.q.length,bk=MKR.back;MKR=null;mkView();
  showToast(ok+' of '+n+' still solid.'+(bk?' '+bk+' went back to your open list.':''));window.scrollTo(0,0);return}_next()};
function srCard(){var d=srDue().length;if(!d||!stu())return'';
  return'<div class="card hi"><b>Check-backs due: '+d+'</b><p class="sub" style="margin:4px 0 0">You fixed '+(d>1?'these':'this one')+' a while ago. A quick retry after 3, 7 and 21 days makes the fix last until the exam.</p><button class="btn" onclick="srStart()">Start check-back'+(d>6?' (6 of '+d+')':' ('+d+')')+'</button></div>'}

/* ---------- 2. slip types ---------- */
var KD={c:['Concept','The idea itself was not clear','Go back to the idea first: read its example under Learn, then retry the question.'],
  m:['Method','Knew the idea, picked the wrong method or formula','Practise choosing the method: Templates and the Pattern spotter under Learn are built for this.'],
  a:['Calculation','Right method, then a slip in arithmetic, algebra or a sign','Write one change per line and check each sign before moving on. Lazy mode shows exactly which step slips.'],
  k:['Careless','Misread the question or copied something wrong','Underline what is asked before you start, and re-read the question before you commit to an answer.']};
var KO=['c','m','a','k'];
window.kdNorm=function(v){v=String(v||'').toLowerCase();return v.indexOf('concept')===0?'c':v.indexOf('method')===0?'m':/^(calc|slip|arith|algebra|sign)/.test(v)?'a':/^(careless|misread|present|incomplete)/.test(v)?'k':''};
function kdOf(m){return m.kd==='x'?'':m.kd&&KD[m.kd]?m.kd:(m.habit==='Careless slip'?'k':'')}
function kdPool(){var t=Date.now()-60*DAY;return mkList().filter(function(m){return!m.shaky&&(m.ts||m.t0||0)>=t})}
function kdCount(){var c={c:0,m:0,a:0,k:0,u:0};kdPool().forEach(function(m){c[kdOf(m)||'u']++});return c}
window.kdSet=function(id,k){if(!stu())return;var m=byId(id);if(!m)return;if(kdOf(m)===k){m.kd='';if(m.habit==='Careless slip')m.kd='x'}else m.kd=k;m.kds='me';save();mkView()};
window.kdFilter=function(k){MKF.kd=MKF.kd===k?'':k;mkView()};
var _item=mkItem;mkItem=function(m){var h=_item(m),k=kdOf(m),x='';
  if(m.shaky)x='<div class="kdrow"><span class="kdstat">Right, but you were not sure. No slip to sort.</span></div>';
  else if(stu())x='<div class="kdrow"><small>'+(m.cf==='s'?'You were sure of this one. ':'')+'What kind of slip was it?'+(m.kds==='ai'&&k?' Claude’s guess is marked. Change it if you disagree.':'')+'</small>'+KO.map(function(o){return'<button class="chipb'+(k===o?' on':'')+'" aria-pressed="'+(k===o)+'" title="'+esc(KD[o][1])+'" onclick="kdSet(\''+m.id+'\',\''+o+'\')">'+KD[o][0]+'</button>'}).join('')+'</div>';
  else if(k)x='<div class="kdrow"><span class="kdstat">Slip type: '+KD[k][0]+'</span></div>';
  if(m.fx&&m.o){if(m.ms)x+='<p class="srline ok">★ Mastered: passed all three check-backs.</p>';else if(m.due)x+='<p class="srline">Check-back '+((m.sr||0)+1)+' of 3 '+(m.due<=Date.now()?'is due now.':'in '+srDays(m)+' day'+(srDays(m)>1?'s':'')+'.')+'</p>'}
  var i=h.lastIndexOf('<div class="row2">');if(i<0)i=h.lastIndexOf('</div>');
  return(h.slice(0,i)+x+h.slice(i)).replace('<div class="card mki','<div data-kd="'+(k||'u')+'" class="card mki')};
function leakCard(){var c=kdCount(),tot=c.c+c.m+c.a+c.k,all=tot+c.u;if(!all)return'';
  var top=KO.slice().sort(function(a,b){return c[b]-c[a]})[0],mx=Math.max(1,c[top]);
  var h='<div class="card leak"><b>Where the marks leak</b><p class="sub" style="margin:4px 0 6px">'+(tot?'Your slips from the last two months, sorted by kind. Tap a kind to see only those.':'Sort your slips by kind to see what costs you the most marks. Tap a kind on any mistake below'+(c.u?', or let Claude sort them.':'.'))+'</p>';
  if(tot){KO.forEach(function(o){h+='<button class="tbar'+(MKF.kd===o?' on':'')+'" aria-pressed="'+(MKF.kd===o)+'" onclick="kdFilter(\''+o+'\')"><span>'+KD[o][0]+'</span><div class="tr"><i style="width:'+Math.round(c[o]/mx*100)+'%"></i></div><em>'+c[o]+'</em></button>'});
    if(c[top]>=2&&KO.every(function(o){return o===top||c[o]<c[top]}))h+='<div class="ladv"><b>Mostly '+KD[top][0].toLowerCase()+' slips.</b> '+KD[top][2]+'</div>'}
  if(c.u&&stu())h+='<button class="btn alt" id="kdSort" onclick="kdSort(this)">Let Claude sort '+c.u+' unsorted slip'+(c.u>1?'s':'')+'</button><div id="kdMsg" class="sub" style="margin:8px 0 0" aria-live="polite"></div>';
  return h+'</div>'}
var KB=false;
window.kdSort=async function(b){if(KB)return;var msg=document.getElementById('kdMsg'),L=kdPool().filter(function(m){return!kdOf(m)&&m.q}).sort(function(a,b){return(a.fx?1:0)-(b.fx?1:0)||b.ts-a.ts}).slice(0,20);if(!L.length)return;
  KB=true;if(b)b.disabled=true;if(msg)msg.textContent='Claude is reading your slips…';
  try{var s=await getS();if(!s){if(msg)msg.textContent='Claude is not available here. Open the app while signed in to claude.ai, or tap a kind on each mistake yourself.';return}
    var p='You are a maths tutor sorting a student’s past mistakes by the KIND of slip, so they can see what costs them marks.\nKinds:\n- concept: the underlying idea or definition was not understood\n- method: the idea was known but the wrong method, formula or approach was chosen\n- calculation: the method was right but arithmetic, algebra or a sign went wrong\n- careless: the question was misread, or something was copied or read off wrongly\n\nMistakes:\n'+
      L.map(function(m,i){return(i+1)+'. ['+m.topic+'] Q: '+String(m.q).slice(0,260)+(m.o&&m.pick!=null?' | Student answered: '+m.o[m.pick]:m.mine?' | Student: '+String(m.mine).slice(0,120):'')+(m.o?' | Right answer: '+m.o[m.a]:m.ans?' | Right answer: '+String(m.ans).slice(0,120):'')+(m.habit?' | App note: '+m.habit:'')+(m.gap?' | Gap found: '+m.gap:'')+(m.note?' | Note: '+String(m.note).slice(0,160):'')}).join('\n')+
      '\n\nFor each one, work out what would produce the student’s answer and choose the single most likely kind. Return JSON only: [{"i":1,"kind":"concept"|"method"|"calculation"|"careless"}]';
    var r=await s.json(p,{cache:false,modelTier:'default'});if(!Array.isArray(r))throw new Error('shape');var n=0;
    r.forEach(function(x){var m=L[(+x.i||0)-1],k=kdNorm(x&&x.kind);if(m&&k&&!kdOf(m)){m.kd=k;m.kds='ai';n++}});
    if(!n)throw new Error('shape');save();if(view==='mk'&&!MKR)mkView();showToast(n+' slip'+(n>1?'s':'')+' sorted. Change any you disagree with.')
  }catch(e){var mm=document.getElementById('kdMsg');if(mm)mm.textContent=e&&e.code?sampleErr(e):'Claude’s answer came back in the wrong shape. Tap again to retry.'}
  finally{KB=false;if(b&&document.body.contains(b))b.disabled=false}};
var _mkv=mkView;mkView=function(){try{srSync()}catch(e){}_mkv();if(MKR)return;try{
  var st=app.querySelector('.stats');if(st)st.insertAdjacentHTML('afterend',srCard()+leakCard());
  if(MKF.kd&&KD[MKF.kd]){var n=0;app.querySelectorAll('.mki').forEach(function(c){var on=c.getAttribute('data-kd')===MKF.kd;c.hidden=!on;if(on)n++});
    var lk=app.querySelector('.leak');if(lk)lk.insertAdjacentHTML('afterend','<p class="sub" style="margin:0 0 10px">Showing '+n+' '+KD[MKF.kd][0].toLowerCase()+' slip'+(n===1?'':'s')+' in this list. <button class="link" onclick="kdFilter(\''+MKF.kd+'\')">Show all</button></p>')}}catch(e){}};

/* ---------- 3. written answers ---------- */
var WR={};
function wst(){S.wr=S.wr||{n:0,hist:[],done:[]};S.wr.hist=S.wr.hist||[];S.wr.done=S.wr.done||[];return S.wr}
function fm(x){x=Math.round(x*2)/2;return x%1?(Math.floor(x)||'')+'½':String(x)}
function wrOK(q){return q&&q.q&&q.o&&q.a!=null&&q.q.length<420&&!/which of|following|statements?\b|assertion|is true|is false|is correct|is not\b|are correct/i.test(q.q)}
function wrMarks(q){return q.l>=3?(q.isc?4:3):q.l===2?3:2}
function wrFrom(q){var ans=String(q.o[q.a]),eq=/=/.test(ans)&&/[xy]/.test(ans)&&!/equation|=|\?/i.test(q.q);return{topic:NM[q.p]||q.p,q:q.q,ask:q.q+(eq?' (give its equation)':''),ans:ans,h:q.h||'',m:wrMarks(q),o:q.o,a:q.a}}
function wrChs(){return Object.keys(NM).filter(function(p){return Q.some(function(q){return q.p===p&&wrOK(q)})})}
function wrPick(p){var done=wst().done,open={};mkList().forEach(function(m){if(!m.fx&&m.ref)open[m.ref]=1});
  var L=Q.filter(function(q){return q.p===p&&wrOK(q)});if(!L.length)return null;var best=-99,pk=[];
  L.forEach(function(q){var s=(open['q:'+q.q]?3:0)-(done.indexOf(q.q.slice(0,60))>=0?4:0)+(q.isc?1:0)-Math.abs(q.l-Math.max(2,S.l[p]||1))+Math.random();if(s>best){best=s;pk=[q]}});
  return wrFrom(pk[0])}
function wrAuto(){var cnt={},ch=wrChs(),inv={};ch.forEach(function(p){inv[NM[p]]=p});
  mkList().forEach(function(m){if(!m.fx&&inv[m.topic])cnt[inv[m.topic]]=(cnt[inv[m.topic]]||0)+1});
  var ks=Object.keys(cnt).sort(function(a,b){return cnt[b]-cnt[a]});if(ks.length)return ks[0];
  return ch.slice().sort(function(a,b){return(S.l[a]||1)-(S.l[b]||1)})[0]}
window.wrOpen=function(p){var q=wrPick(p||wrAuto());if(!q){showToast('No written question is ready for that chapter yet.');return}WR={q:q,mode:'photo'};view='wr';render();window.scrollTo(0,0)};
window.wrUse=function(i){var q=WR.pool&&WR.pool[i];if(!q)return;WR={q:q,mode:'photo'};view='wr';render();window.scrollTo(0,0)};
window.wrHome=function(){WR={};view='wr';render();window.scrollTo(0,0)};
window.wrCustom=function(q){WR={q:q,mode:'photo'};view='wr';render();window.scrollTo(0,0)};
window.wrMode=function(k){WR.mode=k;var t=document.getElementById('wrText');if(t)WR.typed=t.value;wrView()};
function wrHead(q){return'<div class="wrhd"><span class="eyebrow">'+esc(q.topic)+'</span><span class="wrmk">'+q.m+' marks</span></div><div class="sub" style="margin:8px 0 0">Work out, with full working:</div><div class="wrq">'+esc(q.ask||q.q)+'</div>'}
function wrHomeView(){var w=wst(),H=w.hist,ch=wrChs();
  var h='<h1>Written answers</h1><p class="sub">The exam gives marks for the working, not only the final answer. Write one question out in full and Claude marks it step by step, the way an examiner would.</p>';
  if(H.length){var g=0,m=0;H.forEach(function(r){g+=r.g;m+=r.m});h+='<div class="stats"><div class="stat"><b>'+w.n+'</b><span>marked</span></div><div class="stat"><b>'+Math.round(g/m*100)+'%</b><span>of marks earned</span></div><div class="stat"><b>'+H.filter(function(r){return r.g>=r.m}).length+'</b><span>full marks</span></div></div>'}
  h+='<div class="card hi"><b>One question, written out</b><p class="sub" style="margin:4px 0 0">About five minutes. It is picked from your open mistakes first, so the marks you win here are ones you were losing.</p><button class="btn" onclick="wrOpen()">Pick one for me</button></div>';
  h+='<div class="card"><b>Or choose a chapter</b><div class="chgrid" style="margin-top:8px">'+ch.map(function(p){return'<button class="chtile" onclick="wrOpen(\''+p+'\')"><b>'+esc(NM[p])+'</b></button>'}).join('')+'</div></div>';
  if(H.length)h+='<div class="card"><b>Recent marks</b>'+H.slice(-6).reverse().map(function(r){return'<div class="tbar"><span>'+esc(r.t)+'</span><div class="tr"><i style="width:'+Math.round(r.g/r.m*100)+'%;background:var(--accent)"></i></div><em>'+fm(r.g)+'/'+r.m+'</em></div>'}).join('')+'</div>';
  h+='<div class="note">For stylus writing, or a problem from your own book, use Check notebook.</div>';app.innerHTML=h}
function wrView(){if(!WR.q)return wrHomeView();var q=WR.q,h='<button class="link" onclick="wrHome()" style="margin-bottom:8px">‹ Written answers</button>';
  if(WR.res)return wrResult(h);
  h+='<div class="card">'+wrHead(q)+'<p class="sub" style="margin:8px 0 0">Write it on paper as you would in the exam: state the formula or rule, show every step on its own line, and finish with a clear final answer.</p></div>';
  if(WR.off){h+='<div class="card"><div class="ansb"><small>Answer</small><div>'+esc(q.ans)+'</div></div>'+(q.h?'<p style="margin:10px 0 0"><b>Method:</b> '+esc(q.h)+'</p>':'')+'<p class="sub" style="margin:10px 0 0"><b>Claude is not available here, so mark yourself honestly.</b> One mark for each step you wrote correctly, and one for the final answer.</p><div class="wrself">';
    for(var i=0;i<=q.m;i++)h+='<button onclick="wrSelf('+i+')" aria-label="'+i+' marks">'+i+'</button>';
    app.innerHTML=h+'</div></div>';return}
  h+='<div class="card"><div class="seg" role="tablist"><button role="tab" aria-selected="'+(WR.mode!=='type')+'" onclick="wrMode(\'photo\')">Photo of my answer</button><button role="tab" aria-selected="'+(WR.mode==='type')+'" onclick="wrMode(\'type\')">Type my steps</button></div>';
  if(WR.mode==='type')h+='<textarea id="wrText" class="wrta" rows="6" placeholder="One step per line, ending with the final answer">'+esc(WR.typed||'')+'</textarea>';
  else h+=pickBtns('wr','Take photo of my answer')+'<img id="wrPv" class="pv" '+(WR.url?'src="'+WR.url+'"':'hidden')+' alt="Preview of your written answer">';
  h+='<button class="btn" id="wrGo" onclick="wrMark(this)">Mark my answer</button><div id="wrMsg" class="sub" style="margin:8px 0 0" aria-live="polite"></div></div>';
  h+='<button class="btn alt" onclick="wrOpen(wrKey())">Give me a different question</button>';
  app.innerHTML=h;
  if(WR.mode!=='type')onPick('wr',function(f){WR.photo=f;try{WR.url=URL.createObjectURL(f)}catch(e){}var p=document.getElementById('wrPv');if(p&&WR.url){p.src=WR.url;p.hidden=false}})}
window.wrKey=function(){var q=WR.q,k='';if(q)Object.keys(NM).forEach(function(p){if(NM[p]===q.topic)k=p});return k||undefined};
function wrLog(g,d){var q=WR.q,w=wst(),full=g>=q.m,kd=d?kdNorm(d.kind):'',lab=d&&d.label?String(d.label):'';
  w.n++;w.hist.push({ts:Date.now(),t:q.topic,g:g,m:q.m});if(w.hist.length>30)w.hist=w.hist.slice(-30);
  w.done.push(q.q.slice(0,60));if(w.done.length>80)w.done=w.done.slice(-80);
  S.ev.push({k:'wr',topic:q.topic,ok:full,habit:full?'':(lab||'Lost marks in the working'),type:'written answer',sc:g,m:q.m,ts:Date.now()});
  var ref='q:'+q.q;
  if(full)mkFix(ref);else{mkAdd({src:'Written answer',topic:q.topic,q:q.q,o:q.o,a:q.a,pick:null,mine:'Written answer: '+fm(g)+' of '+q.m+' marks',habit:lab,note:d&&d.first_wrong?String(d.first_wrong):'',h:q.h,ref:ref});
    var m=mkList().filter(function(x){return x.ref===ref&&!x.fx})[0];if(m){m.mine='Written answer: '+fm(g)+' of '+q.m+' marks';if(kd){m.kd=kd;m.kds='ai'}}
    if(lab){if(!TG[lab])S.tg[lab]=S.tg[lab]||[lab,d&&d.tip?String(d.tip):''];S.w[lab]=(S.w[lab]||0)+2}}
  save()}
window.wrSelf=function(i){if(WR.res)return;WR.res={self:1,g:i};wrLog(i,null);wrView();window.scrollTo(0,0)};
var WB=false;
window.wrMark=async function(b){if(WB)return;var q=WR.q,msg=document.getElementById('wrMsg'),typed=WR.mode==='type',tx='';
  if(typed){tx=(document.getElementById('wrText').value||'').trim();WR.typed=tx;if(tx.length<3){msg.textContent='Type your working first, one step per line.';return}}
  else if(!WR.photo){msg.textContent='Take or choose a photo of your answer first.';return}
  WB=true;b.disabled=true;msg.textContent=typed?'Claude is marking your working…':'Claude is reading your answer…';
  try{var s=await getS();if(!s){WR.off=1;wrView();return}
    var opt={cache:false,modelTier:'default'};
    if(!typed){var lim=await s.limits();if(!lim.images){msg.textContent='Photo reading is not available on this account. Use “Type my steps” instead.';return}opt.images=[await shrink(WR.photo)]}
    var p='You are an experienced school maths examiner. Mark ONE written answer the way an exam script is marked: a mark for each correct step of working (method) and a mark for the correct final answer (accuracy).\nChapter: '+q.topic+'\nQuestion ('+q.m+' marks): Work out, with full working: '+(q.ask||q.q)+'\nCorrect final answer: '+q.ans+(q.h?'\nReference method: '+q.h:'')+'\n'+
      (typed?'The student typed this working:\n"""\n'+tx.slice(0,2500)+'\n"""':'The image is a photo of the student’s handwritten answer. Read it line by line. Never invent lines you cannot read.')+
      '\n\nBuild a marking scheme of exactly '+q.m+' steps worth one mark each; the last step is the final answer. For each step decide what the student earned: 1, 0.5 or 0. Use follow-through: if one line is wrong but later lines apply a correct method to the wrong value, give those method marks. A bare final answer with no working earns only the answer mark. A different valid method earns full marks. Then find the first line that is wrong or missing and name the kind of slip. Speak to the student as "you", kindly and briefly. Plain text only, plain-text maths (², √, π, °, /).\n'+
      'Return JSON only:\n{"readable":"high"|"medium"|"low","scheme":[{"step":"what this mark is for, under 14 words","got":1,"seen":"what the student wrote for it, or the word missing","note":"why marks were lost, under 22 words; empty if full"}],"first_wrong":"the first wrong or missing line and what it should be, under 40 words; empty if all correct","kind":"concept"|"method"|"calculation"|"careless"|"presentation"|"none","label":"2 to 5 word name for the slip; empty if none","tip":"one exam-writing tip that would save marks here, under 30 words","model":["the full model answer, one line per step"]}\nIf the writing cannot be read, set readable to low.';
    var d=await s.json(p,opt);if(!d||!Array.isArray(d.scheme)||!d.scheme.length)throw new Error('shape');
    if(!typed&&d.readable==='low'){msg.textContent='The photo was hard to read, so nothing was marked. Try a brighter, closer photo, or type your steps.';return}
    var sum=0;d.scheme=d.scheme.slice(0,8).map(function(x){var g=+x.got;g=g>=1?1:g>=.5?.5:0;sum+=g;return{step:String(x.step||''),got:g,seen:String(x.seen||''),note:String(x.note||'')}});
    var g=Math.round(sum/d.scheme.length*q.m*2)/2;WR.res={d:d,g:g};wrLog(g,d);if(WR.q===q&&view==='wr'){wrView();window.scrollTo(0,0)}
  }catch(e){var mm=document.getElementById('wrMsg');if(mm)mm.textContent=e&&e.code?sampleErr(e):'Claude’s marking came back in the wrong shape. Tap again to retry.'}
  finally{WB=false;if(document.body.contains(b))b.disabled=false}};
function wrResult(h){var q=WR.q,r=WR.res,d=r.d,full=r.g>=q.m;
  h+='<div class="card">'+wrHead(q)+'<div class="wrbig" style="margin-top:10px">'+fm(r.g)+' <small>of '+q.m+' marks</small></div><div class="fb '+(full?'ok':r.g>0?'mid':'bad')+'" style="margin-top:8px"><b>'+(full?'Full marks. This is how to write it in the exam.':r.g>0?'Some marks banked, some left on the table.':'No marks yet. The model answer below shows the path.')+'</b>'+(d&&d.first_wrong&&!full?' '+esc(d.first_wrong):'')+'</div></div>';
  if(d){h+='<div class="card"><b>Mark by mark</b>'+(d.readable==='medium'?' <span class="chip">some lines were hard to read</span>':'');
    d.scheme.forEach(function(x){h+='<div class="wrstep '+(x.got>=1?'ok':x.got>0?'half':'bad')+'"><span class="g">'+fm(x.got)+' / 1</span><span><b>'+esc(x.step)+'</b>'+(x.seen?'<small>You wrote: '+esc(x.seen)+'</small>':'')+(x.note?'<small>'+esc(x.note)+'</small>':'')+'</span></div>'});
    var k=kdNorm(d.kind);if(!full&&(k||d.label))h+='<div class="chips">'+(k?'<span class="chip">'+KD[k][0]+' slip</span>':'')+(d.label?'<span class="chip">'+esc(d.label)+'</span>':'')+'</div>';
    if(d.tip)h+='<p style="margin:10px 0 0"><b>Exam tip:</b> '+esc(d.tip)+'</p>';
    if(Array.isArray(d.model)&&d.model.length)h+='<details style="margin-top:10px"><summary>Show the model answer</summary><ol class="steps">'+d.model.map(function(x){return'<li>'+esc(x)+'</li>'}).join('')+'</ol></details>';
    h+='</div>'}
  else h+='<div class="card"><div class="ansb"><small>Answer</small><div>'+esc(q.ans)+'</div></div>'+(q.h?'<p style="margin:10px 0 0"><b>Method:</b> '+esc(q.h)+'</p>':'')+'</div>';
  if(!full)h+='<p class="sub">Saved to My mistakes, so it comes back until you can write it for full marks.</p>';
  h+='<button class="btn" onclick="wrOpen(wrKey())">Another written question</button><button class="btn alt chatb" onclick="wrChat()">'+CHAT_ICON+'Discuss in Claude chat</button><button class="btn alt" onclick="goView(\'practice\')">Back to chapters</button>';
  app.innerHTML=h}
window.wrChat=function(){var q=WR.q,r=WR.res;if(!q)return;var d=r&&r.d;
  openChat(chatHead()+'I wrote out a full answer to this question in my Study Buddy app and it was marked '+(r?fm(r.g):'?')+' of '+q.m+'.\nChapter: '+q.topic+'\nQuestion: '+q.q+'\nRight answer: '+q.ans+(d?'\nMarking:\n'+d.scheme.map(function(x){return'- '+x.step+': '+x.got+'/1'+(x.note?' ('+x.note+')':'')}).join('\n'):'')+'\n\nHelp me see how to write this answer so it earns every mark, then give me one similar question to write out.')};

/* ---------- hooks: navigation, round report, Today, Ask, tutor report ---------- */
try{var G=GRP.maths||GRP.prac;if(G&&!G.some(function(t){return t[0]==='wr'}))G.push(['wr','Written']);if(window.MSEC){var ps=MSEC.filter(function(s){return s[0]==='prac'})[0];if(ps&&ps[2].indexOf('wr')<0)ps[2].push('wr')}if(typeof SECN!=='undefined')SECN.wr='Written answers'}catch(e){}
var _vt=viewTop;viewTop=function(v){_vt(v);if(v==='wr')WR={}};
var _sb=subBar;subBar=function(){_sb();try{document.querySelectorAll('#sub .segs2 button').forEach(function(b){if((b.getAttribute('onclick')||'').indexOf("goView('wr')")>=0&&b.firstChild&&b.firstChild.nodeType===3)b.firstChild.nodeValue='Written'})}catch(e){}};
var _r=render;render=function(){try{srSync()}catch(e){}_r();if(view==='wr')wrView()};
var _rep=report;report=function(){var pool=[],lg=[];try{pool=(GEN?GEN:seen).slice();lg=log.slice()}catch(e){}_rep();try{if(!stu())return;
  var c=[];pool.forEach(function(q,i){if(wrOK(q)&&lg[i]&&!lg[i].ok)c.push(q)});if(!c.length)pool.forEach(function(q){if(wrOK(q))c.push(q)});if(!c.length)return;
  var q=c[0],w=wrFrom(q);WR.pool=[w];
  var el=document.createElement('div');el.className='card hi';el.innerHTML='<b>Finish with one written answer</b><p class="sub" style="margin:4px 0 0">'+(lg.some(function(x){return!x.ok})?'Take a question that slipped this round':'Take one question from this round')+' and write it out in full for '+w.m+' marks. Claude marks each step, as the examiner will.</p><button class="btn" onclick="wrUse(0)">Write it out · '+w.m+' marks</button>';
  var a=app.querySelector('a.btn.wa');if(a)app.insertBefore(el,a);else app.appendChild(el)}catch(e){}};
var _tv=todayView;todayView=function(){_tv();try{if(!stu())return;var rows=app.querySelectorAll('.trow'),at=null;rows.forEach(function(b){if(/^goView\('mk'\)/.test(b.getAttribute('onclick')||''))at=b});if(!at)return;
  var d=srDue().length,h='';
  if(d)h+='<button class="trow" onclick="srStart()"><span class="tn">⟳</span><span class="tt"><b>Check-backs</b><small>'+d+' fixed mistake'+(d>1?'s are':' is')+' due for a quick retry</small></span><span class="pill st">'+d+'</span></button>';
  h+='<button class="trow" onclick="goView(\'wr\')"><span class="tn">✒</span><span class="tt"><b>Write one out</b><small>A full written answer, marked step by step</small></span></button>';
  at.insertAdjacentHTML('afterend',h)}catch(e){}};
try{var _cx=ctxNow;ctxNow=function(){try{if(view==='wr'&&WR.q){var q=WR.q,r=WR.res;return['Written answer · '+q.topic,'Section: Written answers (a full written solution, marked step by step)\nChapter: '+q.topic+'\nQuestion ('+q.m+' marks): '+q.q+(r?'\nAnswer: '+q.ans+(q.h?'\nMethod: '+q.h:'')+'\nMy mark: '+fm(r.g)+' of '+q.m:'\n(I am still writing my answer. Please guide me without giving it away.)')+'\n']}}catch(e){}return _cx.apply(this,arguments)}}catch(e){}
try{if(typeof tutorText==='function'){var _tt=tutorText;tutorText=function(){var t=_tt.apply(this,arguments);try{if(typeof t!=='string')return t;var c=kdCount(),tot=c.c+c.m+c.a+c.k;
  if(tot)t+='\n\nKinds of slip (last two months): '+KO.map(function(o){return KD[o][0]+' '+c[o]}).join(', ')+'.';
  var L=mkList(),ms=L.filter(function(m){return m.ms}).length,du=srDue().length;if(ms||du)t+='\nCheck-backs: '+ms+' mastered, '+du+' due.';
  var H=(S.wr&&S.wr.hist||[]).filter(function(r){return r.ts>=Date.now()-7*DAY});if(H.length){var g=0,m=0;H.forEach(function(r){g+=r.g;m+=r.m});t+='\nWritten answers this week: '+H.length+' marked, '+fm(g)+' of '+m+' marks.'}}catch(e){}return t}}}catch(e){}
})();
/*MPLUS-END*/
