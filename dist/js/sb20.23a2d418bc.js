
/*MPLUS2-START*/
/*MPLUS2: four more additions to the maths section.
  1. Timed tests: 10 questions in 15 minutes (or 12 mixed in 20), no feedback until the end, then time per question and a pace verdict.
  2. Sure or not sure: one tap before the result in Chapters practice. Sure-but-wrong is flagged; right-but-unsure comes back as a check-back.
  3. Why it works: after an example's explanation, one why-question answered in the student's own words and checked by Claude.
  4. Play with it: sliders for lines, circles, parabolas, ellipses, the unit circle and the complex plane, each with five challenges. */
(function(){
function stu(){return window.ROLE==='student'||window.ROLE==='guest'}
function mmss(ms){var s=Math.max(0,Math.round(ms/1000));return Math.floor(s/60)+':'+('0'+s%60).slice(-2)}

/* ---------- 1. timed tests ---------- */
var TT=null,TTI=null;
function tst(){S.tt=S.tt||{hist:[]};S.tt.hist=S.tt.hist||[];return S.tt}
function ttStop(){if(TTI){clearInterval(TTI);TTI=null}}
function ttName(p){return p==='*'?'Mixed':(NM[p]||p)}
window.ttStart=function(p){var n=p==='*'?12:10,L=Q.filter(function(q){return p==='*'||q.p===p}).map(function(q){return[Math.random()-(wt8(q)>0?.3:0),q]}).sort(function(a,b){return a[0]-b[0]}).slice(0,n).map(function(x){return x[1]});
  if(L.length<4){showToast('Not enough questions in that chapter yet.');return}var mins=Math.round(L.length*1.5),t=Date.now();
  TT={p:p,qs:L,i:0,ans:[],tm:[],t0:t,end:t+mins*6e4,qt:t,sel:null,mins:mins};view='tt';render();window.scrollTo(0,0)};
window.ttSel=function(k){if(!TT||TT.done)return;TT.sel=k;app.querySelectorAll('.opt').forEach(function(b){b.classList.toggle('sel',b.getAttribute('data-k')===String(k))});var n=document.getElementById('ttNx');if(n)n.disabled=false};
window.ttNext=function(skip){if(!TT||TT.done)return;var t=Date.now();TT.ans[TT.i]=skip?null:TT.sel;TT.tm[TT.i]=t-TT.qt;TT.i++;TT.sel=null;TT.qt=t;if(TT.i>=TT.qs.length)ttFinish();else{ttView();window.scrollTo(0,0)}};
window.ttQuit=function(){if(TT&&!TT.done){TT.quit=1;ttFinish()}};
window.ttHome=function(){ttStop();TT=null;view='tt';render();window.scrollTo(0,0)};
function ttFinish(){ttStop();var t=Math.min(Date.now(),TT.end),ok=0;TT.used=t-TT.t0;TT.reach=TT.i;
  TT.qs.forEach(function(q,i){var a=i<TT.reach?TT.ans[i]:null,right=a===q.a,ts=Date.now();if(TT.tm[i]==null)TT.tm[i]=0;if(a===undefined)TT.ans[i]=a=null;
    if(right){ok++;S.ev.push({k:'q',p:q.p,l:q.l,ok:true,tag:'',q:q.q.slice(0,90),pick:'',ts:ts,g:0});mkFix('q:'+q.q);q.t.forEach(function(x){if(x&&S.w[x])S.w[x]--})}
    else{var tag=a!=null?(q.t[a]||'Careless slip'):(i<TT.reach?'Skipped in a timed test':'Ran out of time');
      S.ev.push({k:'q',p:q.p,l:q.l,ok:false,tag:tag,q:q.q.slice(0,90),pick:a!=null?q.o[a]:'',ts:ts,g:0});
      mkAdd({src:'Timed test',topic:NM[q.p]||q.p,q:q.q,o:q.o,a:q.a,pick:a,habit:a!=null?tg(tag)[0]:'',note:a!=null?'':(i<TT.reach?'Skipped in a timed test.':'Not reached in a timed test.'),h:q.h,ref:'q:'+q.q});
      if(a!=null)S.w[tag]=(S.w[tag]||0)+2}});
  TT.ok=ok;TT.done=1;var H=tst().hist;H.push({ts:Date.now(),p:ttName(TT.p),n:TT.qs.length,ok:ok,used:TT.used,mins:TT.mins});if(H.length>20)S.tt.hist=H.slice(-20);
  save();if(view==='tt'){ttView();window.scrollTo(0,0)}}
function ttTick(){if(!TT||TT.done){ttStop();return}var left=TT.end-Date.now(),c=document.getElementById('ttClk');if(left<=0){ttFinish();return}if(c){c.textContent=mmss(left);c.classList.toggle('low',left<12e4)}}
function ttHomeView(){var H=tst().hist;
  var h='<h1>Timed tests</h1><p class="sub">Exam pace is a skill of its own. Answer against the clock with no hints and no feedback until the end, then see where the time went.</p>';
  h+='<div class="card hi"><b>Mixed test</b><p class="sub" style="margin:4px 0 0">12 questions from every chapter in 18 minutes, leaning towards your weak spots.</p><button class="btn" onclick="ttStart(\'*\')">Start the mixed test</button></div>';
  h+='<div class="card"><b>One chapter</b><p class="sub" style="margin:4px 0 0">10 questions in 15 minutes.</p><div class="chgrid" style="margin-top:8px">'+Object.keys(NM).map(function(p){return'<button class="chtile" onclick="ttStart(\''+p+'\')"><b>'+esc(NM[p])+'</b></button>'}).join('')+'</div></div>';
  if(H.length)h+='<div class="card"><b>Recent tests</b>'+H.slice(-6).reverse().map(function(r){return'<div class="tbar"><span>'+esc(r.p)+'</span><div class="tr"><i style="width:'+Math.round(r.ok/r.n*100)+'%;background:var(--accent)"></i></div><em>'+r.ok+'/'+r.n+' · '+mmss(r.used)+'</em></div>'}).join('')+'</div>';
  app.innerHTML=h}
function ttRun(){var q=TT.qs[TT.i],n=TT.qs.length,left=TT.end-Date.now();
  var h='<div class="meta"><span>Timed · '+esc(NM[q.p]||q.p)+' · '+(TT.i+1)+' / '+n+'</span><span id="ttClk" class="ttclk'+(left<12e4?' low':'')+'" aria-label="Time left">'+mmss(left)+'</span></div><div class="bar"><i style="width:'+(TT.i/n*100)+'%"></i></div><div class="card"><div class="q">'+esc(q.q)+'</div>';
  optPm('tt:'+q.q,q.o).forEach(function(k){h+='<button class="opt'+(TT.sel===k?' sel':'')+'" data-k="'+k+'" onclick="ttSel('+k+')">'+esc(q.o[k])+'</button>'});
  h+='</div><div class="row2"><button class="btn alt" onclick="ttNext(1)">Skip</button><button class="btn" id="ttNx" onclick="ttNext()"'+(TT.sel==null?' disabled':'')+'>'+(TT.i+1<n?'Next':'Finish')+'</button></div><p style="text-align:center;margin:14px 0 0"><button class="link" onclick="ttQuit()">End the test now</button></p>';
  app.innerHTML=h;if(!TTI)TTI=setInterval(ttTick,500)}
function ttResult(){var n=TT.qs.length,ok=TT.ok,per=TT.mins*60/n,left=TT.mins*6e4-TT.used,un=n-TT.reach,fast=0,slow=0;
  TT.qs.forEach(function(q,i){if(i>=TT.reach)return;var s=TT.tm[i]/1000;if(TT.ans[i]!=null&&TT.ans[i]!==q.a&&s<per*.4)fast++;if(s>per*1.6)slow++});
  var v=un?['bad',(TT.quit?'You ended the test with ':'Time ran out with ')+un+' question'+(un>1?'s':'')+' not reached.','In the exam, give a question about '+Math.round(per)+' seconds. If it is not moving, mark it, move on, and come back at the end.']:
    ok/n<.7&&left>TT.mins*6e4*.3?['mid','You finished with '+mmss(left)+' to spare, and lost '+(n-ok)+' marks.','That spare time is worth marks. Use it to re-check each answer before moving on.']:
    ok/n>=.8?['ok','Good pace and good accuracy.','This is exam speed. Keep it warm with one timed test a week.']:
    ['mid','The pace was fine. The marks went on method, not on time.','Open the ones marked ✗ below, then retry them from My mistakes.'];
  var h='<h1>Timed test finished</h1><p class="sub">'+esc(ttName(TT.p))+' · '+n+' questions in '+TT.mins+' minutes.</p>';
  h+='<div class="stats"><div class="stat"><b>'+ok+'/'+n+'</b><span>correct</span></div><div class="stat"><b>'+mmss(TT.used)+'</b><span>time used</span></div><div class="stat"><b>'+Math.round(TT.used/1000/Math.max(1,TT.reach))+'s</b><span>per question</span></div></div>';
  h+='<div class="fb '+v[0]+'" style="margin:0 0 14px"><b>'+v[1]+'</b> '+v[2]+(fast?' '+fast+' wrong answer'+(fast>1?'s':'')+' took under '+Math.round(per*.4)+' seconds: that is rushing.':'')+(slow&&!un?' '+slow+' question'+(slow>1?'s':'')+' took well over the '+Math.round(per)+' seconds each one gets.':'')+'</div>';
  h+='<div class="card"><b>Question by question</b>';
  TT.qs.forEach(function(q,i){var a=TT.ans[i],r=a===q.a,s=Math.round(TT.tm[i]/1000),nr=i>=TT.reach;
    h+='<div class="ttrow"><div class="hd"><b class="mk'+(r?'':' x')+'">'+(r?'✓':nr?'–':'✗')+'</b><span>'+esc(q.q)+'</span><em class="'+(s>per*1.6?'slow':'')+'">'+(nr?'not reached':s+'s')+'</em></div>'+(r?'':'<small>'+(a!=null?'You chose '+esc(q.o[a])+'. ':nr?'':'Skipped. ')+'Answer: '+esc(q.o[q.a])+'. '+esc(q.h||'')+'</small>')+'</div>'});
  h+='</div><button class="btn" onclick="ttHome()">Another timed test</button>'+(ok<n?'<button class="btn alt" onclick="goView(\'mk\');mkStart()">Retry what went wrong</button>':'');
  app.innerHTML=h}
function ttView(){if(!TT)return ttHomeView();if(!TT.done&&Date.now()>=TT.end){ttFinish();return}if(TT.done)return ttResult();ttRun()}

/* ---------- 2. sure or not sure ---------- */
var CF={q:null,c:null,k:null};
function cst(){S.cf=S.cf||{s:[0,0],u:[0,0]};return S.cf}
var _pa=pickA;pickA=function(k){try{if(S.cfoff||!stu()||!cur||!document.getElementById('fb'))return _pa(k);
    if(CF.q!==cur)CF={q:cur,c:null,k:null};if(CF.c!=null)return _pa(k);
    CF.k=k;app.querySelectorAll('.opt').forEach(function(b){b.classList.toggle('sel',b.id==='o'+k)});
    document.getElementById('fb').innerHTML='<div class="cfask" role="group" aria-label="How sure are you?"><p><b>Before the result: how sure are you?</b></p><div class="row2"><button class="btn" onclick="cfGo(1)">Sure</button><button class="btn alt" onclick="cfGo(0)">Not sure</button></div><p style="margin-top:10px"><button class="link" onclick="cfNever()">Don’t ask me this</button></p></div>';
  }catch(e){return _pa(k)}};
window.cfNever=function(){S.cfoff=1;save();var k=CF.k;CF.c='x';app.querySelectorAll('.opt.sel').forEach(function(b){b.classList.remove('sel')});showToast('Turned off. You can turn it back on from Progress.');if(k!=null)_pa(k)};
window.cfOn=function(){delete S.cfoff;save();render()};
window.cfGo=function(v){if(!cur||CF.q!==cur||CF.c!=null||CF.k==null)return;var q=cur,k=CF.k,ok=k===q.a,c=cst(),key=v?'s':'u',ref='q:'+q.q,msg='';CF.c=key;
  app.querySelectorAll('.opt.sel').forEach(function(b){b.classList.remove('sel')});_pa(k);
  try{c[key][0]++;if(ok)c[key][1]++;var e=S.ev[S.ev.length-1];if(e&&e.k==='q')e.cf=key;
    if(v&&!ok){var m=mkList().filter(function(x){return x.ref===ref&&!x.fx})[0];if(m)m.cf='s';msg='You were sure, and it was wrong. That makes this the most useful kind of mistake to fix: it is flagged in My mistakes.'}
    else if(!v&&ok){var L=mkList(),has=L.filter(function(x){return x.ref===ref&&!x.fx})[0],t=Date.now();
      if(!has){var old=L.filter(function(x){return x.ref===ref&&x.fx&&!x.ms})[0];
        if(old){old.sr=0;old.due=t+3*864e5}else L.push({src:'Practise',topic:NM[q.p]||q.p,q:q.q,o:q.o,a:q.a,pick:null,habit:'',note:'Right, but you were not sure.',h:q.h,ref:ref,id:'m'+t.toString(36)+Math.floor(Math.random()*1e4),n:0,t0:t,ts:t,fx:t,shaky:1})}
      msg='Right, though you were not sure. It comes back in 3 days as a check-back, to make it certain.'}
    else if(!v&&!ok)msg='Good instinct to doubt it. Knowing what you do not know yet is half the work.';
    save();var fb=document.getElementById('fb');if(msg&&fb&&cur===q)fb.insertAdjacentHTML('beforeend','<p class="sub cfnote">'+msg+'</p>')}catch(e){}};
function cfCard(){var c=cst(),s=c.s,u=c.u;if(S.cfoff)return'<div class="card"><b>Sure or not sure</b><p class="sub" style="margin:4px 0 0">The quick “how sure are you?” tap in Chapters practice is turned off.</p><button class="btn alt" onclick="cfOn()">Turn it back on</button></div>';
  if(s[0]+u[0]<1)return'';var ps=s[0]?Math.round(s[1]/s[0]*100):0,pu=u[0]?Math.round(u[1]/u[0]*100):0;
  var h='<div class="card"><b>Do you know what you know?</b><p class="sub" style="margin:4px 0 6px">From the “how sure are you?” tap in Chapters practice.</p>';
  h+='<div class="tbar"><span>When sure</span><div class="tr"><i style="width:'+ps+'%;background:var(--ok)"></i></div><em>'+s[1]+'/'+s[0]+'</em></div><div class="tbar"><span>When not sure</span><div class="tr"><i style="width:'+pu+'%;background:var(--c4)"></i></div><em>'+u[1]+'/'+u[0]+'</em></div>';
  if(s[0]>=5&&ps<80)h+='<p style="margin:8px 0 0">About 1 in '+Math.max(2,Math.round(s[0]/(s[0]-s[1])))+' of your “sure” answers was wrong. In the exam, give every sure answer one more look.</p>';
  else if(u[0]>=5&&pu>=70)h+='<p style="margin:8px 0 0">You are right more often than you think when unsure. Trust your method, and let the check-backs make it certain.</p>';
  else if(s[0]>=5)h+='<p style="margin:8px 0 0">When you feel sure, you usually are. That is a strength in an exam.</p>';
  return h+'</div>'}
var _sv=spotsView;spotsView=function(){_sv();try{if(view!=='spots')return;var h=cfCard();if(h)app.insertAdjacentHTML('beforeend',h)}catch(e){}};

/* ---------- 3. why it works ---------- */
function wyCache(){S.wy=S.wy||{};return S.wy}
function wyStat(){S.wyn=S.wyn||[0,0];return S.wyn}
function wyEx(e){return'Chapter: '+(BXN[e.c]||e.c)+'\nExample type: '+e.t+'\nProblem: '+e.q+'\nAnswer: '+e.a+'\nSolution notes: '+JSON.stringify(e.s||'').slice(0,1500)}
var WYB=false;
async function wyAsk(e){if(WYB)return;var W=EX.wy,msg=document.getElementById('wyMsg'),X0=EX;WYB=true;if(msg)msg.textContent='Claude is choosing the step that matters most…';
  try{var s=await getS();if(!s){W.q='Which step in this solution is the key one, and why does it work?';W.off=1}
    else{var d=await s.json('You are a maths tutor. Below is a worked example a student has just read.\n'+wyEx(e)+'\n\nWrite ONE short "why" question about the single most important step: the step where the key idea is used. It must test understanding, not recall, and be answerable in one or two sentences without doing any calculation. Plain text, plain-text maths (², √, π, °, /).\nReturn JSON only: {"q":"the question, under 30 words","core":"the ideal answer in one sentence"}',{cache:false,modelTier:'default'});
      if(!d||!d.q)throw new Error('shape');W.q=String(d.q);W.core=String(d.core||'');var C=wyCache();C[e.id]={q:W.q,core:W.core};var ks=Object.keys(C);if(ks.length>80)delete C[ks[0]];save()}
    if(EX===X0&&EXI===e.id)exOne(e)
  }catch(err){var m=document.getElementById('wyMsg');if(m)m.textContent=err&&err.code?sampleErr(err):'Claude’s question came back in the wrong shape. Tap again to retry.'}
  finally{WYB=false}}
async function wyGo(e){if(WYB)return;var W=EX.wy,X0=EX,t=document.getElementById('wyTxt'),msg=document.getElementById('wyMsg');W.txt=t?t.value.trim():'';
  if(W.txt.length<8){if(msg)msg.textContent='Write a sentence or two first.';return}
  WYB=true;if(msg)msg.textContent='Claude is reading your reasoning…';
  try{var s=await getS();if(!s){if(msg)msg.textContent='Claude is not available here. Open the app while signed in to claude.ai. Meanwhile, compare your answer with the explanation above.';return}
    var d=await s.json('You are a kind, exact maths tutor checking whether a student understands WHY a step works.\n'+wyEx(e)+'\n\nQuestion asked: '+W.q+(W.core?'\nIdeal answer: '+W.core:'')+'\nThe student wrote:\n"""\n'+W.txt.slice(0,900)+'\n"""\n\nJudge the reasoning, not the wording or spelling. "yes" = the key reason is there; "partly" = on the right track but a link is missing or vague; "no" = the reason is wrong or it only restates the step. Speak to the student as "you". Plain text, plain-text maths.\nReturn JSON only: {"verdict":"yes"|"partly"|"no","feedback":"what is right and what is missing, under 45 words","better":"a clear answer in one or two sentences"}',{cache:false,modelTier:'default'});
    if(!d||!d.verdict)throw new Error('shape');W.res={v:String(d.verdict),f:String(d.feedback||''),b:String(d.better||'')};var n=wyStat();n[0]++;if(W.res.v==='yes')n[1]++;
    S.ev.push({k:'why',topic:BXN[e.c]||e.c,ok:W.res.v==='yes',habit:W.res.v==='yes'?'':'Could not yet say why: '+e.t,type:'why it works',ts:Date.now()});save();
    if(EX===X0&&EXI===e.id)exOne(e)
  }catch(err){var m=document.getElementById('wyMsg');if(m)m.textContent=err&&err.code?sampleErr(err):'Claude’s answer came back in the wrong shape. Tap again to retry.'}
  finally{WYB=false}}
var _ex=exOne;exOne=function(e){_ex(e);try{if(!stu()||!EX||EX.stage==='ask'||!EX.exp)return;var nav=app.querySelector('.navx');if(!nav)return;
  var W=EX.wy;if(!W){W=EX.wy={};var c=wyCache()[e.id];if(c){W.q=c.q;W.core=c.core}}
  var h='<div class="card" id="wyCard"><b>Say why it works</b>';
  if(!W.q)h+='<p class="sub" style="margin:4px 0 0">Following the steps is one thing. Explaining one of them in your own words is what makes it stay.</p><button class="btn alt" id="wyAsk">Ask me a why-question</button>';
  else{h+='<p style="margin:6px 0 4px"><b>'+esc(W.q)+'</b></p><textarea id="wyTxt" rows="3" placeholder="One or two sentences, in your own words">'+esc(W.txt||'')+'</textarea>';
    if(W.res){var v=W.res.v;h+='<div class="fb '+(v==='yes'?'ok':v==='partly'?'mid':'bad')+'"><b>'+(v==='yes'?'Yes. You have the reason.':v==='partly'?'Partly there.':'Not yet.')+'</b> '+esc(W.res.f)+(W.res.b?'<div style="margin-top:6px"><b>A clear way to say it:</b> '+esc(W.res.b)+'</div>':'')+'</div>'}
    h+='<button class="btn'+(W.res?' alt':'')+'" id="wyGo">'+(W.res?'Check again':'Check my reasoning')+'</button>'}
  nav.insertAdjacentHTML('beforebegin',h+'<div id="wyMsg" class="sub" style="margin:8px 0 0" aria-live="polite"></div></div>');
  var a=document.getElementById('wyAsk'),g=document.getElementById('wyGo'),t=document.getElementById('wyTxt');
  if(a)a.onclick=function(){wyAsk(e)};if(g)g.onclick=function(){wyGo(e)};if(t)t.oninput=function(){W.txt=t.value}}catch(err){}};

/* ---------- 4. play with it ---------- */
function nf(x){x=Math.round(x*100)/100;return String(x).replace('-','−')}
function sg(x){return(x<0?' − ':' + ')+nf(Math.abs(x))}
function sq(n){var r=Math.sqrt(n);return Math.abs(r-Math.round(r))<1e-9?String(Math.round(r)):'√'+nf(n)}
function gcd(a,b){return b?gcd(b,a%b):Math.abs(a)}
var R=8,U=20;function PX(x){return 160+x*U}function PY(y){return 160-y*U}
function plane(r){var s='',i,n=Math.floor(r);U=160/r;for(i=-n;i<=n;i++){if(!i)continue;s+='<path d="M'+PX(i)+' 0V320M0 '+PY(i)+'H320" stroke="var(--line)" stroke-width="'+(r>3?.6:.4)+'"/>'}
  s+='<path d="M160 0V320M0 160H320" stroke="var(--muted)" stroke-width="1.2"/><text x="312" y="154" font-size="11" fill="var(--muted)">x</text><text x="166" y="11" font-size="11" fill="var(--muted)">y</text>';
  if(r>3){var m=r>6?4:2;[-m,m].forEach(function(v){s+='<text x="'+PX(v)+'" y="173" font-size="10" text-anchor="middle" fill="var(--muted)">'+nf(v)+'</text><text x="150" y="'+(PY(v)+4)+'" font-size="10" text-anchor="end" fill="var(--muted)">'+nf(v)+'</text>'})}return s}
function dot(x,y,c,l){return'<circle cx="'+PX(x)+'" cy="'+PY(y)+'" r="4.5" fill="'+c+'"/>'+(l?'<text x="'+(PX(x)+8)+'" y="'+(PY(y)-8)+'" font-size="11" font-weight="600" fill="'+c+'">'+l+'</text>':'')}
function cx(h){return h===0?'x²':'(x'+sg(-h)+')²'}function cy(k){return k===0?'y²':'(y'+sg(-k)+')²'}
var TS={0:'0',30:'1/2',45:'√2/2',60:'√3/2',90:'1'},TT2={0:'0',30:'1/√3',45:'1',60:'√3'};
function refA(d){var a=((d%180)+180)%180;return a<=90?a:180-a}
function trig(f,d){var r=d*Math.PI/180,v=f==='s'?Math.sin(r):f==='c'?Math.cos(r):Math.tan(r),a=refA(d),t;
  if(f==='t'){if(a===90)return'not defined';t=TT2[a]}else t=TS[f==='s'?a:90-a];
  if(t==null)return nf(Math.round(v*1000)/1000);return(v<-1e-9&&t!=='0'?'−':'')+t}
function rad(d){if(!d)return'0';var g=gcd(d,180),n=d/g,m=180/g;return(n===1?'':n)+'π'+(m===1?'':'/'+m)}
var PLD={
 line:{n:'Straight line',ch:'Straight Lines',r:8,s:[['m','slope m',-4,4,.5,1],['c','y-intercept c',-6,6,1,2]],
  eq:function(v){return'y = '+(v.m===0?'':(v.m===1?'':v.m===-1?'−':nf(v.m))+'x')+(v.c===0?(v.m===0?'0':''):(v.m===0?nf(v.c):sg(v.c)))},
  draw:function(v){return'<path d="M'+PX(-9)+' '+PY(-9*v.m+v.c)+'L'+PX(9)+' '+PY(9*v.m+v.c)+'" stroke="var(--accent)" stroke-width="2.5"/>'+dot(0,v.c,'var(--c2)','(0, '+nf(v.c)+')')+(v.m?dot(-v.c/v.m,0,'var(--c3)',''):'')},
  facts:function(v){var a=Math.atan(v.m)*180/Math.PI;return[['Slope',nf(v.m)+(v.m>0?' (rises to the right)':v.m<0?' (falls to the right)':' (flat)')],['Cuts the y-axis at','(0, '+nf(v.c)+')'],['Cuts the x-axis at',v.m?'('+nf(-v.c/v.m)+', 0)':v.c?'nowhere':'everywhere'],['Angle with the x-axis',nf(Math.round(a*10)/10)+'°'],['A perpendicular line has slope',v.m?nf(-1/v.m):'not defined (vertical)']]},
  tasks:[['Make the line with slope −2 that cuts the y-axis at 3.',{m:-2,c:3},'In y = mx + c, m is the slope and c is where the line cuts the y-axis.'],
   ['Make the line through (0, −1) and (2, 3).',{m:2,c:-1},'Slope = (3 − (−1))/(2 − 0) = 2, and (0, −1) gives c = −1.'],
   ['Make the line 2x + y − 4 = 0.',{m:-2,c:4},'Rearrange to y = −2x + 4, then read off m and c.'],
   ['Make the line through the origin that is perpendicular to y = 2x + 1.',{m:-.5,c:0},'Perpendicular slopes multiply to −1, so m = −1/2. Through the origin means c = 0.'],
   ['Make the line parallel to y = 0.5x − 3 that cuts the x-axis at −4.',{m:.5,c:2},'Parallel lines share a slope. Then 0 = 0.5(−4) + c gives c = 2.']]},
 circle:{n:'Circle',ch:'Circles',r:8,s:[['h','centre x: h',-5,5,1,1],['k','centre y: k',-5,5,1,1],['r','radius r',1,6,1,3]],
  eq:function(v){return cx(v.h)+' + '+cy(v.k)+' = '+nf(v.r*v.r)},
  draw:function(v){return'<circle cx="'+PX(v.h)+'" cy="'+PY(v.k)+'" r="'+v.r*U+'" fill="var(--accent)" fill-opacity=".1" stroke="var(--accent)" stroke-width="2.5"/><path d="M'+PX(v.h)+' '+PY(v.k)+'L'+PX(v.h+v.r)+' '+PY(v.k)+'" stroke="var(--c2)" stroke-width="1.6" stroke-dasharray="4 3"/>'+dot(v.h,v.k,'var(--c2)','('+nf(v.h)+', '+nf(v.k)+')')},
  facts:function(v){var c=v.h*v.h+v.k*v.k-v.r*v.r;return[['General form','x² + y²'+(v.h?sg(-2*v.h)+'x':'')+(v.k?sg(-2*v.k)+'y':'')+(c?sg(c):'')+' = 0'],['g, f, c','g = '+nf(-v.h)+', f = '+nf(-v.k)+', c = '+nf(c)],['Centre (−g, −f)','('+nf(v.h)+', '+nf(v.k)+')'],['r² = g² + f² − c',nf(v.r*v.r)],['Touches the x-axis?',Math.abs(v.k)===v.r?'Yes: |k| = r':'No'],['Touches the y-axis?',Math.abs(v.h)===v.r?'Yes: |h| = r':'No'],['Through the origin?',c===0?'Yes: c = 0':'No']]},
  tasks:[['Make the circle x² + y² − 6x + 4y − 3 = 0.',{h:3,k:-2,r:4},'2g = −6 and 2f = 4, so the centre (−g, −f) is (3, −2). r² = 9 + 4 + 3 = 16.'],
   ['Make a circle with centre (2, 3) that touches the x-axis.',{h:2,k:3,r:3},'Touching the x-axis means the radius equals the height of the centre: r = |k| = 3.'],
   ['Make the circle x² + y² + 4x − 2y − 4 = 0.',{h:-2,k:1,r:3},'Centre (−2, 1). r² = 4 + 1 + 4 = 9, so r = 3.'],
   ['Make a circle of radius 5 through the origin, with its centre on the positive x-axis.',{h:5,k:0,r:5},'The centre is 5 away from the origin along the x-axis: (5, 0). Then c = 0.'],
   ['Make a circle with centre (−3, 4) that touches the y-axis.',{h:-3,k:4,r:3},'Touching the y-axis means r = |h| = 3.']]},
 par:{n:'Parabola',ch:'Conic Sections',r:8,s:[['a','a',-4,4,.5,1]],
  eq:function(v){return'y² = '+nf(4*v.a)+'x'},
  draw:function(v){if(!v.a)return'<path d="M0 160H320" stroke="var(--accent)" stroke-width="2.5"/>';var d='',y;for(y=-9;y<=9;y+=.25)d+=(d?'L':'M')+PX(y*y/(4*v.a))+' '+PY(y);
   return'<path d="'+d+'" fill="none" stroke="var(--accent)" stroke-width="2.5"/><path d="M'+PX(-v.a)+' 0V320" stroke="var(--c3)" stroke-width="1.6" stroke-dasharray="5 4"/><path d="M'+PX(v.a)+' '+PY(2*v.a)+'V'+PY(-2*v.a)+'" stroke="var(--c2)" stroke-width="1.6"/>'+dot(v.a,0,'var(--c2)','focus')},
  facts:function(v){if(!v.a)return[['a = 0','The curve collapses onto the x-axis. Move a away from 0.']];return[['Opens',v.a>0?'to the right':'to the left'],['Focus','('+nf(v.a)+', 0)'],['Directrix','x = '+nf(-v.a)],['Latus rectum length',nf(Math.abs(4*v.a))+' (that is |4a|)'],['Ends of the latus rectum','('+nf(v.a)+', ±'+nf(Math.abs(2*v.a))+')'],['Vertex','(0, 0)']]},
  tasks:[['Make the parabola y² = 8x.',{a:2},'Compare with y² = 4ax: 4a = 8, so a = 2.'],
   ['Make the parabola with focus (−2, 0) and vertex at the origin.',{a:-2},'The focus is (a, 0), so a = −2 and the curve opens left.'],
   ['Make a parabola opening right whose latus rectum is 12.',{a:3},'Latus rectum = 4a = 12, so a = 3.'],
   ['Make the parabola whose directrix is x = 1.5.',{a:-1.5},'The directrix is x = −a, so a = −1.5.'],
   ['Make the parabola y² = −10x.',{a:-2.5},'4a = −10, so a = −2.5: focus (−2.5, 0), directrix x = 2.5.']]},
 ell:{n:'Ellipse',ch:'Conic Sections',r:8,s:[['a','a (along x)',1,7,1,4],['b','b (along y)',1,7,1,2]],
  eq:function(v){return'x²/'+v.a*v.a+' + y²/'+v.b*v.b+' = 1'},
  draw:function(v){var c=Math.sqrt(Math.abs(v.a*v.a-v.b*v.b)),hx=v.a>=v.b;return'<ellipse cx="160" cy="160" rx="'+v.a*U+'" ry="'+v.b*U+'" fill="var(--accent)" fill-opacity=".1" stroke="var(--accent)" stroke-width="2.5"/>'+(c?dot(hx?c:0,hx?0:c,'var(--c2)','F')+dot(hx?-c:0,hx?0:-c,'var(--c2)','F′'):dot(0,0,'var(--c2)','centre'))},
  facts:function(v){var M=Math.max(v.a,v.b),m=Math.min(v.a,v.b),c2=M*M-m*m,hx=v.a>=v.b;if(!c2)return[['a = b','This is a circle of radius '+v.a+'. Its eccentricity is 0.']];
   return[['Major axis','along the '+(hx?'x':'y')+'-axis, length '+2*M],['Minor axis','length '+2*m],['c² = '+M*M+' − '+m*m,c2+', so c = '+sq(c2)],['Foci',hx?'(±'+sq(c2)+', 0)':'(0, ±'+sq(c2)+')'],['Eccentricity e = c/a',sq(c2)+'/'+M+' ≈ '+nf(Math.sqrt(c2)/M)],['Latus rectum 2b²/a',nf(2*m*m/M)],['Sum of distances to the foci',String(2*M)]]},
  tasks:[['Make the ellipse x²/25 + y²/9 = 1.',{a:5,b:3},'a² = 25 and b² = 9, so a = 5 and b = 3.'],
   ['Make an ellipse with foci (±3, 0) and major axis of length 10.',{a:5,b:4},'2a = 10 gives a = 5. c = 3, so b² = 25 − 9 = 16.'],
   ['Make the ellipse with foci (0, ±4) and minor axis of length 6.',{a:3,b:5},'The foci are on the y-axis, so the larger number goes under y². The minor semi-axis is 3 and 9 + 16 = 25.'],
   ['Make an ellipse along the x-axis with a = 5 and eccentricity 4/5.',{a:5,b:3},'c = ae = 4, so b² = 25 − 16 = 9.'],
   ['Make an ellipse whose points all have distances to the foci adding to 12, with foci (±√20, 0).',{a:6,b:4},'The sum of distances is 2a = 12, so a = 6. Then b² = 36 − 20 = 16.']]},
 unit:{n:'Unit circle',ch:'Trigonometric Functions',r:1.4,s:[['t','angle θ (degrees)',0,360,15,30]],
  eq:function(v){return'θ = '+v.t+'° = '+rad(v.t)+(v.t?' rad':'')},
  draw:function(v){var r=v.t*Math.PI/180,x=Math.cos(r),y=Math.sin(r),big=v.t>180?1:0;
   return'<circle cx="160" cy="160" r="'+U+'" fill="none" stroke="var(--muted)" stroke-width="1.4"/>'+(v.t?'<path d="M'+PX(.25)+' 160A'+.25*U+' '+.25*U+' 0 '+big+' 0 '+PX(.25*x)+' '+PY(.25*y)+'" fill="none" stroke="var(--c5)" stroke-width="2"/>':'')+
    '<path d="M160 160L'+PX(x)+' '+PY(y)+'" stroke="var(--accent)" stroke-width="2.5"/><path d="M'+PX(x)+' '+PY(y)+'V160" stroke="var(--c2)" stroke-width="2.5"/><path d="M160 160H'+PX(x)+'" stroke="var(--c3)" stroke-width="2.5"/>'+dot(x,y,'var(--accent)','')+
    '<text x="'+(PX(x/2))+'" y="'+(y>=0?176:150)+'" font-size="11" font-weight="600" text-anchor="middle" fill="var(--c3)">cos</text><text x="'+(PX(x)+(x>=0?8:-8))+'" y="'+(PY(y/2)+4)+'" font-size="11" font-weight="600" text-anchor="'+(x>=0?'start':'end')+'" fill="var(--c2)">sin</text>'},
  facts:function(v){var t=v.t%360,q=t%90===0?0:Math.floor(t/90)+1;return[['sin θ (height of the point)',trig('s',v.t)],['cos θ (how far across)',trig('c',v.t)],['tan θ = sin θ / cos θ',trig('t',v.t)],['Where',q?'Quadrant '+q+': '+['all three are positive','only sin is positive','only tan is positive','only cos is positive'][q-1]:'on an axis'],['Reference angle',refA(v.t)+'°'],['In radians',rad(v.t)]]},
  tasks:[['Find the angle in the second quadrant where sin θ = 1/2.',{t:150},'The reference angle is 30°. In Q2 the angle is 180° − 30° = 150°, and sin stays positive there.'],
   ['Find the angle in the third quadrant where tan θ = 1.',{t:225},'Reference angle 45°. In Q3 the angle is 180° + 45°, and tan is positive there.'],
   ['Find the angle where cos θ = −1/2 and sin θ is negative.',{t:240},'cos and sin both negative means Q3. Reference angle 60°, so 180° + 60°.'],
   ['Set θ to 7π/4.',{t:315},'Multiply by 180/π: 7 × 180/4 = 315°.'],
   ['Find the angle in the fourth quadrant where sin θ = −√3/2.',{t:300},'Reference angle 60°. In Q4 the angle is 360° − 60°.']]},
 cplx:{n:'Complex plane',ch:'Complex Numbers',r:8,s:[['a','real part a',-6,6,1,3],['b','imaginary part b',-6,6,1,2]],
  eq:function(v){var im=(Math.abs(v.b)===1?'':nf(Math.abs(v.b)))+'i';return'z = '+(!v.b?nf(v.a):!v.a?(v.b<0?'−':'')+im:nf(v.a)+(v.b<0?' − ':' + ')+im)},
  draw:function(v){return'<text x="300" y="154" font-size="10" fill="var(--muted)" text-anchor="end">Re</text><text x="184" y="11" font-size="10" fill="var(--muted)">Im</text><path d="M160 160L'+PX(v.a)+' '+PY(v.b)+'" stroke="var(--accent)" stroke-width="2.5"/><path d="M160 160L'+PX(-v.b)+' '+PY(v.a)+'" stroke="var(--c3)" stroke-width="1.4" stroke-dasharray="4 3"/>'+dot(v.a,-v.b,'var(--c5)','z̄')+dot(-v.b,v.a,'var(--c3)','iz')+dot(v.a,v.b,'var(--accent)','z')},
  facts:function(v){var n=v.a*v.a+v.b*v.b,ar=Math.atan2(v.b,v.a)*180/Math.PI,q=v.a>0&&v.b>0?1:v.a<0&&v.b>0?2:v.a<0&&v.b<0?3:v.a>0&&v.b<0?4:0;
   return[['Modulus |z| = √(a² + b²)','√('+v.a*v.a+' + '+v.b*v.b+') = '+sq(n)],['Principal argument',n?nf(Math.round(ar*10)/10)+'°'+(q?' (quadrant '+q+')':' (on an axis)'):'not defined for 0'],['Conjugate z̄','reflect in the real axis: ('+nf(v.a)+', '+nf(-v.b)+')'],['i × z','a quarter turn anticlockwise: ('+nf(-v.b)+', '+nf(v.a)+')'],['z × z̄','|z|² = '+n]]},
  tasks:[['Place z = −3 + 4i.',{a:-3,b:4},'The real part goes across and the imaginary part goes up: (−3, 4).'],
   ['Place the z in the fourth quadrant with |z| = 5 and real part 3.',{a:3,b:-4},'9 + b² = 25 gives b = ±4, and the fourth quadrant needs b negative.'],
   ['Place the conjugate of 2 + 5i.',{a:2,b:-5},'The conjugate changes the sign of the imaginary part only.'],
   ['Place the z with principal argument 135° and real part −2.',{a:-2,b:2},'135° is in Q2 with reference angle 45°, so the two parts are equal in size: (−2, 2).'],
   ['Place i × (4 + i).',{a:-1,b:4},'i(4 + i) = 4i + i² = −1 + 4i. On the plane that is a quarter turn of (4, 1).']]}
};
var PLO=['line','circle','par','ell','unit','cplx'],PL={k:'line',v:null,fb:null};
function pst(){S.pl=S.pl||{};return S.pl}
function plInit(k){var d=PLD[k];PL={k:k,v:{},fb:null};d.s.forEach(function(s){PL.v[s[0]]=s[5]})}
function plSvg(){var d=PLD[PL.k];return plane(d.r)+d.draw(PL.v)}
function plFacts(){return PLD[PL.k].facts(PL.v).map(function(f){return'<li><span>'+esc(f[0])+':</span> <b>'+esc(f[1])+'</b></li>'}).join('')}
function plTask(){var d=PLD[PL.k],n=Math.min(pst()[PL.k]||0,d.tasks.length);if(PL.ti==null||PL.ti>=d.tasks.length)PL.ti=n>=d.tasks.length?0:n;return d.tasks[PL.ti]}
window.plOpen=function(k){if(!PLD[k])return;plInit(k);PL.ti=null;plView();window.scrollTo(0,0)};
window.plSet=function(key,val){PL.v[key]=+val;var d=PLD[PL.k],b=document.getElementById('plv_'+key),s=document.getElementById('plSvg'),f=document.getElementById('plFacts'),e=document.getElementById('plEq');
  if(b)b.textContent=nf(+val);if(s)s.innerHTML=plSvg();if(f)f.innerHTML=plFacts();if(e)e.textContent=d.eq(PL.v);
  if(PL.fb&&PL.fb!=='ok'){PL.fb=null;var x=document.getElementById('plFb');if(x)x.innerHTML=''}};
window.plCheck=function(){var d=PLD[PL.k],t=plTask(),ok=Object.keys(t[1]).every(function(k){return Math.abs(PL.v[k]-t[1][k])<1e-9}),x=document.getElementById('plFb');
  if(ok){PL.fb='ok';var P=pst();if((P[PL.k]||0)<PL.ti+1){P[PL.k]=PL.ti+1;S.ev.push({k:'pl',topic:d.ch,ok:true,habit:'',type:'play',ts:Date.now()});save()}plView()}
  else{PL.fb='no';if(x)x.innerHTML='<div class="fb bad"><b>Not yet.</b> Read the facts under the picture, change one slider at a time, and watch what moves.</div><button class="link" style="margin-top:8px" onclick="plShow()">Show me how to work it out</button>'}};
window.plShow=function(){var x=document.getElementById('plFb');if(x)x.innerHTML='<div class="fb mid"><b>How to work it out:</b> '+esc(plTask()[2])+' Now set the sliders to match.</div>'};
window.plNextTask=function(){PL.ti=(PL.ti+1)%PLD[PL.k].tasks.length;PL.fb=null;plView()};
function plView(){if(!PL.v)plInit(PL.k);var d=PLD[PL.k],P=pst(),t=plTask(),dn=Math.min(P[PL.k]||0,d.tasks.length),all=dn>=d.tasks.length;
  var h='<h1>Play with it</h1><p class="sub">Move a slider and watch the picture, the equation and the facts change together. Then try the challenges: each one is an exam idea in disguise.</p>';
  h+='<div class="chaps" aria-label="Choose what to explore">'+PLO.map(function(k){var n=Math.min(P[k]||0,PLD[k].tasks.length);return'<button class="chap'+(k===PL.k?' on':'')+'" onclick="plOpen(\''+k+'\')">'+PLD[k].n+(n?' <small>'+n+'/'+PLD[k].tasks.length+'</small>':'')+'</button>'}).join('')+'</div>';
  h+='<div class="card"><div class="eyebrow">'+esc(d.ch)+'</div><div class="pleq" id="plEq">'+esc(d.eq(PL.v))+'</div><svg id="plSvg" class="plsvg" viewBox="0 0 320 320" role="img" aria-label="'+esc(d.n)+' picture">'+plSvg()+'</svg><div class="plsl">';
  d.s.forEach(function(s){h+='<label for="pls_'+s[0]+'">'+esc(s[1])+' = <b id="plv_'+s[0]+'">'+nf(PL.v[s[0]])+'</b></label><input type="range" id="pls_'+s[0]+'" min="'+s[2]+'" max="'+s[3]+'" step="'+s[4]+'" value="'+PL.v[s[0]]+'" oninput="plSet(\''+s[0]+'\',this.value)">'});
  h+='</div><ul class="plfacts" id="plFacts">'+plFacts()+'</ul></div>';
  h+='<div class="card hi"><div class="eyebrow">Challenge '+(PL.ti+1)+' of '+d.tasks.length+(all?' · all five done ✓':'')+'</div><p style="margin:6px 0 0"><b>'+esc(t[0])+'</b></p>';
  if(PL.fb==='ok')h+='<div class="fb ok"><b>That’s it.</b> '+esc(t[2])+'</div><button class="btn" onclick="plNextTask()">'+(PL.ti+1<d.tasks.length?'Next challenge':'Back to the first challenge')+'</button>';
  else h+='<button class="btn" onclick="plCheck()">Check my sliders</button><div id="plFb"></div>';
  h+='</div>';app.innerHTML=h}

/* ---------- hooks ---------- */
try{var G=GRP.maths;if(G){if(!G.some(function(t){return t[0]==='tt'}))G.push(['tt','Timed']);if(!G.some(function(t){return t[0]==='pl'}))G.push(['pl','Play'])}
  if(window.MSEC)MSEC.forEach(function(s){if(s[0]==='prac'&&s[2].indexOf('tt')<0)s[2].push('tt');if(s[0]==='learn'&&s[2].indexOf('pl')<0)s[2].push('pl')});
  if(typeof SECN!=='undefined'){SECN.tt='Timed tests';SECN.pl='Play with it'}}catch(e){}
var _vt=viewTop;viewTop=function(v){_vt(v);if(v==='tt'&&TT&&TT.done)TT=null};
var _sb=subBar;subBar=function(){_sb();try{document.querySelectorAll('#sub .segs2 button').forEach(function(b){var o=b.getAttribute('onclick')||'',n=o.indexOf("goView('tt')")>=0?'Timed':o.indexOf("goView('pl')")>=0?'Play':'';if(n&&b.firstChild&&b.firstChild.nodeType===3)b.firstChild.nodeValue=n})}catch(e){}};
var _r=render;render=function(){_r();if(view==='tt')ttView();else{ttStop();if(view==='pl')plView()}};
try{var _cx=ctxNow;ctxNow=function(){try{if(view==='tt'&&TT&&!TT.done)return['Timed test','Section: Timed test, in progress.\n(I am in the middle of a timed test. Please do not give me the answer or a hint for the current question. Encourage me to finish it first.)\n'];
  if(view==='pl'){var d=PLD[PL.k];return['Play with it · '+d.n,'Section: Play with it (sliders that show how an equation and its picture change together)\nChapter: '+d.ch+'\nOn screen: '+d.eq(PL.v)+'\n'+d.facts(PL.v).map(function(f){return f[0]+': '+f[1]}).join('\n')+'\nCurrent challenge: '+plTask()[0]+'\n(Please guide me towards the challenge without just giving the slider values.)\n']}}catch(e){}return _cx.apply(this,arguments)}}catch(e){}
try{if(typeof tutorText==='function'){var _tt=tutorText;tutorText=function(){var t=_tt.apply(this,arguments);try{if(typeof t!=='string')return t;var wk=Date.now()-7*864e5;
  var H=(S.tt&&S.tt.hist||[]).filter(function(r){return r.ts>=wk});if(H.length)t+='\nTimed tests this week: '+H.map(function(r){return r.p+' '+r.ok+'/'+r.n+' in '+mmss(r.used)}).join('; ')+'.';
  var c=S.cf;if(c&&c.s[0]+c.u[0]>=5)t+='\nConfidence: right '+c.s[1]+' of '+c.s[0]+' when sure, '+c.u[1]+' of '+c.u[0]+' when not sure.'}catch(e){}return t}}}catch(e){}
})();
/*MPLUS2-END*/
