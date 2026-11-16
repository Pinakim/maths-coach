
/*GAPS-START*/
(function(){
/* ---------- gaps memory: the real reasons behind mistakes, kept across sessions ---------- */
window.gpList=function(){S.gaps=S.gaps||[];return S.gaps};
function gpKey(t,g){return(String(t||'')+'|'+String(g||'')).toLowerCase().replace(/[^a-z0-9|]+/g,' ').trim()}
window.gpAdd=function(e){var L=gpList(),k=gpKey(e.topic,e.g),now=Date.now(),x=L.filter(function(m){return m.k===k})[0];
  if(x){x.n++;x.ts=now;x.why=e.why||x.why;x.fix=e.fix||x.fix;x.q=e.q||x.q;x.ok=0}
  else{x={id:'g'+now.toString(36)+Math.floor(Math.random()*1e4),k:k,g:e.g,why:e.why||'',fix:e.fix||'',topic:e.topic||'',q:e.q||'',n:1,t0:now,ts:now,ok:0};L.push(x)}
  if(L.length>150)S.gaps=L.sort(function(a,b){return a.ok-b.ok||b.ts-a.ts}).slice(0,150);return x};
function gpOpen(){return gpList().filter(function(g){return!g.ok}).sort(function(a,b){return b.n-a.n||b.ts-a.ts})}
function gpNames(topic){return gpOpen().filter(function(g){return!topic||g.topic===topic}).slice(0,15).map(function(g){return g.g})}

/* ---------- the abstracted ladder from the built-in theory: problem → template → principle → root ---------- */
function ladData(){try{var c=eCtx();if(!c||c.kind!=='q'||!TH[c.ch])return null;
  var pid=c.c&&c.c[0],sure=c.conf&&pid,r=sure?stFind(pid):null,p=r&&r.p,pr=sure?(PR[pid]||['',[],0]):['',[],ePrin(c.ch,c.q+' '+(c.m||''))],P=TH[c.ch].P[pr[2]]||TH[c.ch].P[0],fs=[];
  pr[1].concat(P[3]||[]).forEach(function(f){if(fs.indexOf(f)<0&&FBY[f])fs.push(f)});
  return{tpl:p?p[1]:'',spot:p?p[2]:'',sure:!!sure,prin:P[0],ps:P[1],why:pr[0],roots:fs.slice(0,2).map(function(f){return FBY[f]})}}catch(e){return null}}
function ladHtml(d,ai){if(!d&&!ai)return'';var a=ai||{};
  var h='<div class="lad">';
  h+='<div class="erung e1"><small>This problem</small><div>'+esc(a.p||cur.h)+'</div></div><div class="eup" aria-hidden="true">↑ step back</div>';
  if(a.t||d&&d.tpl)h+='<div class="erung e2"><small>The template'+(d&&!d.sure&&!a.t?' (closest fit)':'')+'</small><b>'+esc(a.t||d.tpl)+'</b>'+(d&&d.spot&&!a.t?'<div class="sub">Spot it: '+esc(d.spot)+'</div>':'')+'</div><div class="eup" aria-hidden="true">↑ step back</div>';
  if(a.r||d)h+='<div class="erung e3"><small>The principle</small>'+(d?'<b>'+esc(d.prin)+'</b>':'')+'<div>'+esc(a.r||d.ps)+'</div></div><div class="eup" aria-hidden="true">↑ step back</div>';
  if(a.f||d&&d.roots.length)h+='<div class="erung e4"><small>The root it stands on</small>'+(d&&d.roots.length?'<b>'+d.roots.map(function(f){return esc(f.n)}).join(' · ')+'</b>':'')+'<div>'+esc(a.f||d.roots[0].s)+'</div></div>';
  return h+'</div>'}

/* ---------- per-question state ---------- */
var PQ=null;
var _show0=show;show=function(){PQ={wrong:[],first:null,logged:false,done:false,ai:null};_show0()};
function hintsUsed(){return(HK['q:'+cur.q]||{l:0}).l||0}
function hintTexts(){return((HK['q:'+cur.q]||{h:[]}).h||[]).filter(Boolean)}
function bookFirstWrong(k){
  var tag=cur.t[k]||'Careless slip';PQ.first=tag;PQ.logged=true;
  log.push({p:cur.p,ok:false,tag:tag});
  S.ev.push({k:'q',p:cur.p,l:cur.l,ok:false,tag:tag,q:cur.q.slice(0,90),pick:cur.o[k],ts:Date.now(),g:GEN?1:0});
  if(S.l[cur.p]!=null)S.l[cur.p]=Math.max(1,S.l[cur.p]-1);
  mkAdd({src:GEN?'Claude’s set':'Practise',topic:NM[cur.p]||cur.p,q:cur.q,o:cur.o,a:cur.a,pick:k,habit:tg(tag)[0],h:cur.h,ref:'q:'+cur.q});
  S.w[tag]=(S.w[tag]||0)+2;save()}
function nextBtns(){return'<button class="btn" onclick="nxt()">'+(n+1<N?'Next question':'See my report')+'</button><button class="btn alt chatb" onclick="chatQ()">'+CHAT_ICON+'Discuss in Claude chat</button>'}
function setLast(k,ok){LASTQ={topic:NM[cur.p]||cur.p,q:cur.q,o:cur.o,pick:cur.o[k],ans:cur.o[cur.a],ok:ok,h:cur.h,habit:ok?'':(PQ.first?tg(PQ.first)[0]:'')}}

pickA=function(k){
  if(!PQ)PQ={wrong:[],first:null,logged:false,done:false,ai:null};
  if(PQ.done||locked||PQ.wrong.indexOf(k)>=0)return;
  var ok=k===cur.a,hl=hintsUsed(),fb=document.getElementById('fb');
  if(ok){
    PQ.done=true;locked=true;document.getElementById('o'+k).classList.add('ok');
    if(!PQ.wrong.length&&!hl){
      /* solved alone first time: the usual credit plus a short ladder */
      log.push({p:cur.p,ok:true,tag:''});
      S.ev.push({k:'q',p:cur.p,l:cur.l,ok:true,tag:'',q:cur.q.slice(0,90),pick:'',ts:Date.now(),g:GEN?1:0});
      if(S.l[cur.p]!=null)S.l[cur.p]=Math.min(3,S.l[cur.p]+1);mkFix('q:'+cur.q);
      cur.t.forEach(function(t){if(t&&S.w[t])S.w[t]--});save();setLast(k,true);
      fb.innerHTML='<div class="fb ok"><b>'+CHEER[Math.floor(Math.random()*CHEER.length)]+'</b> '+esc(cur.h)+'</div><div class="ganal"><h3>Why it works: the ladder</h3>'+(ladHtml(ladData())||'<p>'+esc(cur.h)+'</p>')+'<button class="link" style="margin-top:8px" onclick="eOpen()">Climb the full ladder ›</button></div>'+nextBtns();
      return}
    /* got there after a slip or a hint: full explanation and the reason behind the struggle */
    if(!PQ.logged){PQ.logged=true;PQ.first='Needed a hint';log.push({p:cur.p,ok:false,tag:'Needed a hint'});S.ev.push({k:'q',p:cur.p,l:cur.l,ok:false,tag:'Needed a hint',q:cur.q.slice(0,90),pick:'',ts:Date.now(),g:GEN?1:0})}
    mkFix('q:'+cur.q);save();setLast(k,true);
    fb.innerHTML='<div class="fb mid"><b>You got there'+(hl?' with '+hl+' hint'+(hl>1?'s':''):' on the next try')+'.</b> Here is the full picture, and why it was tricky.</div><div id="pAn"></div>'+nextBtns();
    analyse2('solved');return}
  /* wrong pick: keep the answer hidden, offer Hint or Explain */
  PQ.wrong.push(k);var o=document.getElementById('o'+k);o.classList.add('bad','tried');o.setAttribute('aria-disabled','true');
  if(!PQ.logged)bookFirstWrong(k);else{var m=mkList().filter(function(x){return x.ref==='q:'+cur.q&&!x.fx})[0];if(m){m.n++;m.ts=Date.now();save()}}
  var left=cur.o.length-1-PQ.wrong.length;
  if(left<=0){explainNow();return}
  var g=tg(PQ.first);
  fb.innerHTML='<div class="pchoose" role="group" aria-label="Choose your next step"><p><b>Not this one.</b> '+(PQ.wrong.length>1?'Still not it. ':'')+'Take a hint and try again, or see the full explanation.</p>'+(PQ.wrong.length===1&&g[1]?'<p class="sub" style="margin:0">Check for this: '+esc(g[0])+'.</p>':'')+
    '<div class="row2"><button class="btn" onclick="pHint()">💡 Hint</button><button class="btn alt" onclick="explainNow()">📖 Explain</button></div>'+(hintsUsed()?'<p class="sub" style="margin:8px 0 0;font-size:.82rem">Hints used: '+hintsUsed()+' of 3.</p>':'')+'</div>';
  locked=false;try{hFab()}catch(e){}
};
window.pHint=function(){if(hintsUsed()>=3){showToast('All 3 hints are out. Try again, or tap Explain.');hintOpen();return}locked=false;hintOpen()};
window.explainNow=function(){if(!PQ||PQ.done)return;PQ.done=true;locked=true;
  document.getElementById('o'+cur.a).classList.add('ok');setLast(PQ.wrong.length?PQ.wrong[PQ.wrong.length-1]:cur.a,false);
  if(!PQ.logged){PQ.logged=true;PQ.first='Needed the explanation';log.push({p:cur.p,ok:false,tag:'Needed the explanation'});S.ev.push({k:'q',p:cur.p,l:cur.l,ok:false,tag:'Needed the explanation',q:cur.q.slice(0,90),pick:'',ts:Date.now(),g:GEN?1:0});
    mkAdd({src:GEN?'Claude’s set':'Practise',topic:NM[cur.p]||cur.p,q:cur.q,o:cur.o,a:cur.a,pick:null,habit:'Needed the explanation',h:cur.h,ref:'q:'+cur.q});save()}
  document.getElementById('fb').innerHTML='<div class="fb bad"><b>The answer is '+esc(cur.o[cur.a])+'.</b> Here is the full explanation, and the real reason it went wrong.</div><div id="pAn"></div>'+nextBtns();
  analyse2('explain');try{hFab()}catch(e){}};

/* ---------- detailed explanation + mistake analysis ---------- */
function anOffline(){var d=ladData(),g=PQ.first?tg(PQ.first):['',''];
  return'<div class="ganal"><div class="ansb"><small>Answer</small><div>'+esc(cur.o[cur.a])+'</div></div><h3>The method</h3><p>'+esc(cur.h)+'</p>'+
    (PQ.wrong.length?'<h3>What your pick shows</h3><p>You chose '+PQ.wrong.map(function(i){return'<b>'+esc(cur.o[i])+'</b>'}).join(' then ')+'.'+(g[0]?' That usually comes from: <b>'+esc(g[0])+'</b>.':'')+(g[1]?' '+esc(g[1]):'')+'</p>':'')+
    '<h3>The ladder</h3>'+ladHtml(d)+'</div>'}
function anHtml2(a){var d=ladData();
  var h='<div class="ganal"><div class="ansb"><small>Answer</small><div>'+esc(cur.o[cur.a])+'</div></div>';
  h+='<h3>Step by step</h3><ol class="steps">'+(a.steps||[]).map(function(s){return'<li>'+esc(s)+'</li>'}).join('')+'</ol>';
  if(a.mistake)h+='<h3>'+(PQ.wrong.length?'Where your answer went wrong':'What the hint had to show you')+'</h3><p>'+esc(a.mistake)+'</p>';
  h+='<h3>The real reason</h3><div class="groot"><b>'+esc(a.gap)+'</b>'+esc(a.reason)+'</div>';
  if(a.fix)h+='<p><b>How to fix it:</b> '+esc(a.fix)+'</p>';
  if(a.check)h+='<p><b>Quick self-check:</b> '+esc(a.check)+'</p>';
  h+='<h3>The ladder</h3>'+ladHtml(d,a.lad||null);
  h+='<p class="gsaved">✓ Saved to your gaps memory'+(a.n>1?' (seen '+a.n+' times now)':'')+'. Find it under Progress and My mistakes.</p>';
  h+='<button class="link" onclick="eOpen()">Climb the full ladder ›</button></div>';return h}
async function analyse2(how){var box=document.getElementById('pAn');if(!box)return;var q=cur,P=PQ;
  box.innerHTML=anOffline()+'<p class="pload" aria-live="polite">Claude is finding the real reason behind this one…</p>';
  try{var s=await getS();if(!s){box.innerHTML=anOffline()+'<p class="pload">Open the app while signed in to claude.ai to get Claude’s mistake analysis. This slip is still saved in My mistakes.</p>';return}
    var c=eCtx(),lt='';try{lt=c&&c.kind==='q'?eLadText(c):''}catch(e){}
    var known=gpNames(NM[q.p]||q.p),ht=hintTexts();
    var p='You are an expert, kind maths tutor. A student just finished ONE multiple-choice practice question in a study app. Diagnose the REAL reason they struggled (the underlying concept gap, not just the surface slip), then explain the solution fully.\n'+
      'Chapter: '+(NM[q.p]||q.p)+'\nQuestion: '+q.q+'\nOptions: '+q.o.map(function(o,i){return'('+'abcd'[i]+') '+o}).join(' | ')+'\nCorrect option: '+q.o[q.a]+'\nReference method: '+q.h+
      '\nWrong options the student picked, in order: '+(P.wrong.length?P.wrong.map(function(i){return q.o[i]+(q.t[i]?' [typical cause: '+tg(q.t[i])[0]+']':'')}).join(' ; then '):'none')+
      '\nHints used: '+ht.length+(ht.length?' ('+ht.join(' / ')+')':'')+'\nOutcome: '+(how==='solved'?'the student reached the right answer after this':'the student asked for the explanation')+
      (lt?'\nTheory ladder for this problem:\n'+lt:'')+(known.length?'\nGaps already recorded for this student in this chapter (reuse the exact name if the root cause is the same): '+known.join('; '):'')+intLine()+
      '\n\nWork out what each wrong option reveals (what calculation or belief produces it). Find the deepest concept gap that explains it: a missing definition, a misread rule, a wrong mental model. Plain text only, plain-text maths (², √, π, °, /). Speak to the student as "you", warmly and briefly.\n'+
      'Return JSON only:\n{"steps":["3 to 6 short solution steps"],"mistake":"what the wrong pick (or the need for a hint) shows they did or thought, under 45 words","gap":"short name of the concept gap, 2 to 6 words","reason":"the real underlying reason, under 45 words","fix":"one concrete way to fix this gap, under 35 words","check":"one quick self-check question on the same idea, without the answer","kind":"concept, method, calculation or careless: the kind of slip this was","lad":{"p":"what this problem really asks, one sentence","t":"the template in one line","r":"the principle that makes it work, one sentence","f":"the axiom or definition at the root, one sentence"}}';
    var d=await s.json(p,{cache:false,modelTier:'default'});if(!d||!d.gap||!d.reason)throw new Error('shape');
    var g=gpAdd({g:String(d.gap),why:String(d.reason),fix:d.fix?String(d.fix):'',topic:NM[q.p]||q.p,q:q.q.slice(0,160)});
    var mk=mkList().filter(function(m){return m.ref==='q:'+q.q})[0];if(mk){mk.gap=g.g;mk.gid=g.id;try{var kk=window.kdNorm?kdNorm(d.kind):'';if(kk&&!mk.kd){mk.kd=kk;mk.kds='ai'}}catch(e){}}
    S.ev.push({k:'gap',topic:g.topic,habit:g.g,ok:false,type:'gap',ts:Date.now()});save();
    d.n=g.n;P.ai=d;if(cur!==q)return;box=document.getElementById('pAn');if(box)box.innerHTML=anHtml2(d);
  }catch(err){box=document.getElementById('pAn');if(box&&cur===q)box.innerHTML=anOffline()+'<p class="pload">'+(err&&err.code?sampleErr(err):'Claude’s analysis came back in the wrong shape.')+' <button class="link" onclick="analyse2Again(\''+how+'\')">Try again</button></p>'}}
window.analyse2Again=function(h){analyse2(h)};

/* hints can only be asked while the question is open */
var _hCtx0=hCtx;hCtx=function(){if(view==='practice'&&mode&&cur&&PQ&&PQ.done)return null;return _hCtx0()};

/* round report: list the gaps found this round */
var _rep0=report;report=function(){var t0=PRT||0;_rep0();try{var G=gpList().filter(function(g){return g.ts>=t0});if(!G.length)return;
  var c=document.createElement('div');c.className='card gcard';c.innerHTML='<b>Gaps found this round</b><p class="sub" style="margin:4px 0 6px">The real reasons behind the slips. They stay in your gaps memory until you mark them understood.</p>'+G.map(gpItem).join('');
  var first=app.querySelector('.card');app.insertBefore(c,first?first.nextSibling:null)}catch(e){}};
var PRT=0;var _start0=start;start=function(m){PRT=Date.now();_start0(m)};
var _gen0=genSet;genSet=function(){PRT=Date.now();return _gen0.apply(this,arguments)};

/* ---------- the gaps memory card (Progress and My mistakes) ---------- */
function gpItem(g){return'<div class="gi"><div class="gh"><b>'+esc(g.g)+'</b><span class="gn'+(g.ok?' ok':'')+'">'+(g.ok?'understood':g.n+'×')+'</span></div><small>'+esc(g.topic)+' · last seen '+mkWhen(g.ts)+'</small><p style="margin:4px 0 0">'+esc(g.why)+'</p>'+(g.fix?'<p class="sub" style="margin:4px 0 0">Fix: '+esc(g.fix)+'</p>':'')+
  '<div class="gbtns">'+(g.ok?'<button class="chipb" onclick="gpMark(\''+g.id+'\',0)">Still unsure</button>':'<button class="chipb" onclick="gpMark(\''+g.id+'\',1)">I understand this now</button>')+'<button class="chipb" onclick="gpChat(\''+g.id+'\')">Work on it in chat</button></div></div>'}
window.gpMark=function(id,v){var g=gpList().filter(function(x){return x.id===id})[0];if(!g)return;g.ok=v?Date.now():0;save();render();showToast(v?'Marked as understood. It comes back if the same gap shows up again.':'Back on the list.')};
window.gpChat=function(id){var g=gpList().filter(function(x){return x.id===id})[0];if(!g)return;
  openChat(chatHead()+'In my Study Buddy app this concept gap keeps showing up in '+g.topic+':\n"'+g.g+'": '+g.why+(g.q?'\nExample question where it happened: '+g.q:'')+'\n\nHelp me fix this gap. Start from the basic definition or axiom, show why it matters with one small example, then give me three short practice questions one at a time and check my answers.')};
function gpCard(){var L=gpOpen(),done=gpList().filter(function(g){return g.ok}).length;
  var h='<div class="card gcard"><b>Gaps memory</b><p class="sub" style="margin:4px 0 6px">'+(L.length?L.length+' open gap'+(L.length>1?'s':'')+(done?' · '+done+' understood':'')+'. The real reasons behind past mistakes, most frequent first.':'When a practice question goes wrong, Claude finds the real reason behind it and keeps it here.')+'</p>';
  h+=L.slice(0,6).map(gpItem).join('');
  if(L.length>6)h+='<details><summary>Show '+(L.length-6)+' more</summary>'+L.slice(6).map(gpItem).join('')+'</details>';
  if(done)h+='<details><summary>Understood ('+done+')</summary>'+gpList().filter(function(g){return g.ok}).map(gpItem).join('')+'</details>';
  return h+'</div>'}
function gpInsert(){try{var c=document.createElement('div');c.innerHTML=gpCard();var el=c.firstChild,h1=app.querySelector('h1'),sub=h1&&h1.nextElementSibling;
  app.insertBefore(el,sub&&sub.nextSibling||app.firstChild)}catch(e){}}
var _sv0=spotsView;spotsView=function(){_sv0();gpInsert()};
var _mk0=mkView;mkView=function(){_mk0();if(!MKR&&gpList().length)gpInsert()};

/* weekly report to the tutor also lists the open gaps */
if(typeof tutorText==='function'){var _tt0=tutorText;tutorText=function(){var t=_tt0.apply(this,arguments);try{var L=gpOpen().slice(0,5);if(L.length&&typeof t==='string')t+='\n\nConcept gaps found (most frequent first):\n'+L.map(function(g){return'• '+g.g+' ('+g.topic+', '+g.n+'×)'}).join('\n')}catch(e){}return t}}
})();
/*GAPS-END*/
