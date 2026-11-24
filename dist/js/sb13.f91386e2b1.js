
/*SRCH: one search across the app. Each result opens the exact page; anything unanswered goes to Claude inside the app. */
(function(){
var CFL=[["econ", "Economics and economic research", "Study how people, firms and governments make choices about money and resources, and test ideas with data."], ["fin", "Finance and investment", "Decide where money should go: valuing companies, managing risk and building portfolios."], ["data", "Data science and analytics", "Turn raw data into answers: what happened, why, and what is likely next."], ["act", "Actuarial science", "Price risk for insurance and pensions: how likely an event is, and what it will cost."], ["pol", "Public policy and civil services", "Design, run and judge the rules and schemes that shape daily life."], ["law", "Law", "Argue, interpret and draft the rules societies live by."], ["ir", "International relations and diplomacy", "Understand and shape how countries deal with each other on trade, security and climate."], ["jour", "Journalism and media", "Find out what is true and tell it clearly in print, audio, video or data."], ["psy", "Psychology and behavioural science", "Study how people think, feel and decide, and use it to help them."], ["dev", "Development sector and social research", "Work on poverty, education, health and gender with NGOs, foundations and government."], ["mgmt", "Management and business", "Lead teams and businesses: strategy, operations and people."], ["ppe", "Philosophy, PPE and academia", "Ask big questions about justice, knowledge and the good life, and argue them rigorously."], ["music", "Music industry and music technology", "Make, record, curate and sell music, or build the technology behind it."], ["sport", "Sports analytics and management", "Use data and business skills to help teams win and leagues grow."], ["mkt", "Marketing and market research", "Understand what people want and how to reach them."]];
var ICO='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>';
/* words people type, mapped to the words the app uses */
var SYN={trig:'trigonometry trigonometric',trigo:'trigonometry trigonometric',pnc:'permutations combinations',perm:'permutations',comb:'combinations',bino:'binomial',ap:'sequences series progression',gp:'sequences series progression',seq:'sequences series',coord:'coordinate straight lines circles points locus',cg:'coordinate straight lines circles',
  '3d':'3d three dimensional',stats:'statistics dispersion correlation',stat:'statistics dispersion',sd:'standard deviation dispersion',mean:'central tendency dispersion statistics',prob:'probability',calc:'calculus derivatives integrals limits',diff:'derivatives differentiability differential',integ:'integrals integration',integration:'integrals',
  differentiation:'derivatives differentiability',mat:'matrices matrix',matrix:'matrices',det:'determinants',lpp:'linear programming',vector:'vectors',complex:'complex numbers',iota:'complex numbers',quad:'quadratic',conic:'conic sections parabola ellipse hyperbola',parabola:'conic',ellipse:'conic',hyperbola:'conic',
  eco:'economics',econ:'economics',economy:'economics',micro:'consumer demand production market',macro:'national income money banking budget',pol:'political',polsci:'political science',politics:'political',civics:'political',soc:'sociology',socio:'sociology',hist:'history',eng:'english',lit:'literature english',
  shakespeare:'macbeth',orwell:'animal farm',wilde:'earnest',poems:'poetry poem rhapsody fireflies',poem:'poetry rhapsody fireflies',grammar:'grammar prepositions transformation',essay:'composition essay ashoka',comprehension:'comprehension reading',
  mock:'paper mock test timed',test:'paper mock exam',exam:'paper exam',papers:'paper',mistake:'mistakes',error:'mistakes',errors:'mistakes',wrong:'mistakes',note:'notes',flash:'cards',flashcards:'cards',flashcard:'cards',revise:'cards mistakes revise',revision:'cards mistakes revise',
  mood:'check-in mood feel',relax:'check-in calm',calm:'check-in',stress:'check-in calm',theme:'settings',dark:'settings theme',light:'settings theme',whatsapp:'report tutor settings',tutor:'report tutor settings',teacher:'report tutor',career:'career fields',job:'career fields jobs',jobs:'career fields',
  uni:'university ashoka cuet sat',college:'university cuet ashoka sat',university:'ashoka cuet sat',entrance:'cuet sat ashoka',score:'points marks',marks:'points',target:'points target',goal:'points target',streak:'points today',gk:'current affairs',news:'news current affairs',help:'guide',how:'guide',
  formula:'theory templates',formulas:'theory templates',method:'templates strategy',proof:'theory templates induction',photo:'check notebook notes',camera:'check notebook notes',handwriting:'check notebook notes',stylus:'check notebook notes',maths:'mathematics maths',math:'mathematics maths'};
var STOP={the:1,a:1,an:1,of:1,to:1,in:1,on:1,for:1,me:1,my:1,i:1,and:1,is:1,show:1,open:1,go:1,page:1,please:1,want:1,with:1,where:1,find:1,section:1};
function nrm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[’'`]/g,'').replace(/[^a-z0-9Ͱ-Ͽ]+/g,' ').trim()}
function toks(s){return nrm(s).split(' ').filter(function(t){return t&&!STOP[t]})}
function lev1(a,b){if(Math.abs(a.length-b.length)>1)return false;var i=0,j=0,e=0;while(i<a.length&&j<b.length){if(a[i]===b[j]){i++;j++;continue}if(++e>1)return false;if(a.length>b.length)i++;else if(b.length>a.length)j++;else{i++;j++}}return e+(a.length-i)+(b.length-j)<=1}

/* ---------- the index ---------- */
var PGK={today:'home today plan dashboard start begin',base:'cover the base syllabus chapters examples progress',spots:'progress weak spots weakness analysis diagnosis',th:'theory concepts axioms roots learn ideas',tl:'templates answer format method steps',st:'strategy patterns spot method which template',ex:'examples book solved worked textbook',story:'stories history of maths mathematicians',
  practice:'chapters practice questions quiz mcq drill exam set',lz:'lazy mode tap steps easy tired',cb:'concept builder concepts adaptive',pp:'sample papers mock exam timed full test maths',check:'check notebook photo handwriting stylus mistakes marking',mc:'memory cards flashcards revise heat',mk:'mistakes errors wrong retry fix',
  nt:'notes key ideas insights write up private share',sj_eco:'economics',sj_pol:'political science',sj_soc:'sociology thinkers',sj_his:'history stories timeline big questions thinking past',sj_psy:'psychology mind behaviour experiments thinking bias memory',sj_phi:'philosophy ethics logic thought experiments thinking knowledge justice',sj_en1:'english language paper grammar composition',sj_en2:'english literature paper macbeth prism rhapsody',sj_ele:'elective english animal farm earnest fireflies',
  pts:'points target score marks forecast session goal streak exam dates',cu:'cuet entrance mcq mock past papers',isc:'board exam specimen papers',sat:'sat college board digital bluebook',ash:'ashoka university admission essay interview aptitude',
  cf:'career fields jobs future courses',cn:'career news',ca:'current affairs gk general knowledge quiz',cl:'career links resources',set:'settings theme dark mode light mode night tutor whatsapp number interests colours',log:'usage log time spent activity'};
var PGT={pp:'Sample papers',practice:'Chapter practice',check:'Check my notebook',mc:'Memory cards'};
var IDX=[],BYK={},built=0;
function add(o){o.n=nrm(o.t);o.tw=o.n.split(' ');o.kw=nrm((o.k||'')+' '+(o.w||'')).split(' ').filter(Boolean);IDX.push(o);BYK[o.key]=o}
function deep(o){var t=[];(function w(x,d){if(t.length>400||d>4||x==null)return;if(typeof x==='string')t.push(x);else if(typeof x==='object')Object.keys(x).forEach(function(k){w(x[k],d+1)})})(o,0);return t.join(' ').slice(0,2500)}
function where(v){var g=grpOf(v);if(g==='maths'&&window.MSEC){var s=MSEC.filter(function(s){return s[2].indexOf(v)>=0})[0];return'Maths'+(s?' · '+s[1]:'')}return TABN[g]||{set:'Settings',notes:'Notes'}[g]||''}
function build(){IDX=[];BYK={};var seen={};
  /* pages */
  Object.keys(GRP).forEach(function(g){GRP[g].forEach(function(t){var v=t[0];if(seen[v])return;seen[v]=1;add({key:'pg:'+v,ty:'Pages',t:(PGT[v]||SECN[v]||t[1]),w:where(v),k:(PGK[v]||'')+' '+t[1],run:function(){goView(v)}})})});
  add({key:'ac:ci',ty:'Pages',t:'How I feel today',w:'Daily check-in',k:'mood feel check in relax calm plan today',run:function(){if(window.ciOpen)ciOpen()}});
  add({key:'ac:nt',ty:'Pages',t:'Quick note',w:'Save a key idea or insight',k:'write note idea insight jot',run:function(){goView('nt');if(window.ntNew)ntNew('text','idea')}});
  (window.TQD||[]).forEach(function(x){add({key:'tq:'+x.id,ty:'Big questions',t:x.t,w:TQN[x.s]+' · '+x.k,k:x.h+' '+x.tool[0]+' '+x.q+' '+x.x,p:x.h,run:function(){tqOpen(x.id)}})});
  add({key:'ac:gd',ty:'Pages',t:'User guide',w:'How everything in the app works',k:'help guide manual how to instructions',run:function(){window.open(GUIDE,'_blank','noopener')}});
  if(window.qtShow)add({key:'ac:qt',ty:'Pages',t:'A thoughtful quote',w:'Something to think about',k:'quote inspiration motivation',run:function(){goView('today');qtShow()}});
  /* maths chapters: one result, with the chapter's sections as chips */
  var BXM={tr:'tg',ld:'lm',st:'md'},NMK={cx:'x',pc:'p',bt:'b',ss:'s',sl:'g',ci:'c',tr:'t'},bxIn={};
  ST.forEach(function(c){var bx=BXC.some(function(b){return b[0]===(BXM[c.id]||c.id)})?(BXM[c.id]||c.id):null;if(bx)bxIn[bx]=1;if(c.id==='ld')bxIn.dv=1;
    var ch=[['Templates',function(){tlOpen(c.id)}],['Strategy',function(){stGo(c.id)}]];
    if(bx)ch.push(['Examples',function(){EXC=bx;EXI=null;goView('ex')}]);
    if(NMK[c.id])ch.push(['Practise',function(){goView('practice');start(NMK[c.id])}]);
    if(CB.some(function(x){return x.id===c.id}))ch.push(['Concepts',function(){cbOpen(c.id)}]);
    add({key:'mc:'+c.id,ty:'Maths chapters',t:c.n,w:'Maths · Theory, templates, strategy, examples',k:'maths mathematics chapter '+(c.g||'')+' '+(window.TH?deep(TH[c.id]):''),run:function(){thOpen(c.id)},chips:ch})});
  BXC.forEach(function(b){if(bxIn[b[0]])return;add({key:'bc:'+b[0],ty:'Maths chapters',t:b[1],w:'Maths · Book examples',k:'maths mathematics chapter examples',run:function(){EXC=b[0];EXI=null;goView('ex')}})});
  /* subject chapters */
  SCB.forEach(function(c){var s=(SJ.filter(function(x){return x.id===c.sub})[0]||{}).n||'',sid=c.sub;
    var ch=[['Practise',function(){sxGoSet(sid,sid+'_c_'+c.id)}],['Memory map',function(){sjMmOpen(sid,c.id)}]];
    if(window.HXS&&HXS[sid]&&window.EC&&EC[c.id])ch.push(['Everyday cases',function(){ecOpen(sid,c.id)}]);
    add({key:'sc:'+c.id,ty:'Subject chapters',t:c.n,w:s+' · Theory and practice',k:s+' '+(c.k||[]).map(function(k){return k.n+' '+(k.s||'')}).join(' ')+' '+(window.SXC?deep(SXC[c.id]):''),run:function(){sxThOpen(sid,c.id)},chips:ch})});
  HIS.forEach(function(h){add({key:'hi:'+h.id,ty:'History stories',t:h.t,w:'History'+(h.a?' · '+h.a[0]+'–'+h.a[1]:''),k:'history story '+(h.h||''),run:function(){view='sj_his';hisOpen(h.id)}})});
  if(window.TA)TA.forEach(function(a){add({key:'ta:'+a.id,ty:'Sociology debates',t:a.t,w:'Sociology · Thinkers argue',k:'thinkers argue debate marx durkheim weber srinivas sociology',run:function(){view='sj_soc';taOpen(a.id)}})});
  BX.forEach(function(e){var c=(BXC.filter(function(b){return b[0]===e.c})[0]||[])[1]||'';add({key:'ex:'+e.id,ty:'Worked examples',t:e.t,w:'Example · '+c,k:c+' example worked',p:e.q,run:function(){view='ex';EXC=e.c;openEx(e.id);render();window.scrollTo(0,0)}})});
  PP.forEach(function(p){add({key:'pp:'+p.id,ty:'Papers',t:p.t||p.n||p.id,w:'Maths · Sample paper',k:'paper mock exam timed sample maths',run:function(){goView('pp');ppOpen(p.id)}})});
  Object.keys(CU).forEach(function(sid){['a','b'].forEach(function(st){var tps={};(CU[sid][st]||[]).forEach(function(q){tps[q.tp]=(tps[q.tp]||0)+1});
    var sl=CUSET&&CUSET[st]&&CUSET[st].t?CUSET[st].t:'Set '+st.toUpperCase();
    Object.keys(tps).forEach(function(tp,i){add({key:'cu:'+sid+'.'+st+'.'+i,ty:'CUET topics',t:tp,w:'CUET · '+CUM[sid].n+' · '+sl+' · '+tps[tp]+' questions',k:'cuet entrance mcq '+CUM[sid].n,run:function(){goView('cu');cuStart(sid,st,'tp',tp)}})})})});
  Object.keys(SAT).forEach(function(sec){['a','b'].forEach(function(st){var tps={};(SAT[sec][st]||[]).forEach(function(q){tps[q.tp]=(tps[q.tp]||0)+1});
    var sl=window.SATSET&&SATSET[st]&&SATSET[st].t?SATSET[st].t:'Set '+st.toUpperCase();
    Object.keys(tps).forEach(function(tp,i){add({key:'sa:'+sec+'.'+st+'.'+i,ty:'SAT topics',t:tp,w:'SAT · '+SATM[sec].n+' · '+sl+' · '+tps[tp]+' questions',k:'sat college board '+SATM[sec].n,run:function(){goView('sat');satStart(sec,st,'tp',tp)}})})})});
  CFL.forEach(function(f){add({key:'cf:'+f[0],ty:'Career fields',t:f[1],w:'Career',k:'career field job '+f[2],run:function(){goView('cf');if(!S.car||S.car.open!==f[0])cfOpen(f[0]);setTimeout(function(){var b=document.querySelector('.fld button[aria-expanded="true"]');if(b)b.scrollIntoView({block:'start'})},60)}})});
  (window.ntShown?ntShown():[]).forEach(function(n){var b=((n.b||'')+' '+(n.tx||'')).trim();add({key:'nt:'+n.id,ty:'Your notes',t:n.t||'Untitled',w:'Notes · '+(n.sj||'Maths')+(n.ch&&n.ch!=='General'?' · '+n.ch:''),k:'note '+b.slice(0,400),p:b.slice(0,140),run:function(){goView('nt');NTV.open=n.id;ntView()}})});
  built=Date.now()}
var ORDER=['Pages','Maths chapters','Subject chapters','Your notes','Big questions','History stories','Worked examples','Sociology debates','Papers','CUET topics','SAT topics','Career fields'];
var TYB={'Pages':1.2,'Maths chapters':1,'Subject chapters':.9,'Your notes':.9,'History stories':.6,'Big questions':.6,'Sociology debates':.5,'Worked examples':.3,'Papers':.4,'CUET topics':.2,'SAT topics':.1,'Career fields':.3};
function tokScore(t,o){var al=[t].concat(SYN[t]?SYN[t].split(' '):[]),best=0;
  al.forEach(function(a,ai){var f=ai?.8:1;
    o.tw.forEach(function(w){if(w===a)best=Math.max(best,4*f);else if(w.indexOf(a)===0)best=Math.max(best,(a.length>=3?3:2)*f);else if(a.length>=4&&(lev1(a,w.slice(0,a.length))||lev1(a,w)))best=Math.max(best,1.8*f)});
    if(best<1.5)o.kw.forEach(function(w){if(w===a||(a.length>=3&&w.indexOf(a)===0))best=Math.max(best,1.5*f);else if(a.length>=5&&lev1(a,w.slice(0,a.length)))best=Math.max(best,.9*f)})});
  return best}
function search(q){var T=toks(q),qn=nrm(q);if(!T.length)return[];if(!built||Date.now()-built>60000)build();
  var R=[];IDX.forEach(function(o){var s=0,hit=0;T.forEach(function(t){var x=tokScore(t,o);if(x>0)hit++;s+=x});
    if(hit<T.length&&!(T.length>=3&&hit>=T.length-1&&s>=6))return;if(!s)return;
    var tb=TYB[o.ty]>=.5?1:.4;if(o.n===qn)s+=6*tb;else if(o.n.indexOf(qn)===0)s+=3*tb;else if(qn.length>=4&&o.n.indexOf(qn)>=0)s+=1.5;
    s=s/Math.sqrt(T.length)+TYB[o.ty]-(hit<T.length?2:0);R.push({o:o,s:s})});
  R.sort(function(a,b){return b.s-a.s});return R}
function isQ(q){var n=nrm(q),w=n.split(' ').filter(Boolean);return/\?\s*$/.test(q)||/^(what|why|how|when|who|which|explain|define|tell|can|could|should|is|are|does|do|help|teach|solve|find the|prove|give me|i dont|i do not|im|i am)\b/.test(n)||w.length>=6}

/* ---------- sheet ---------- */
var SR={q:'',sel:0,mode:'s',chat:[],busy:false,ctx:null,R:[],flat:[]};
function hl(t,q){var T=toks(q).filter(function(x){return x.length>=2});var s=esc(t);if(!T.length)return s;
  var low=nrm(t);/* mark word starts that match a query word */
  return esc(t).replace(/[A-Za-z0-9À-ɏ]+/g,function(w){var n=nrm(w);return T.some(function(x){return n.indexOf(x)===0})?'<mark>'+w+'</mark>':w})}
window.srOpen=function(q,chat){if(document.getElementById('srSheet'))return;try{var c=ctxNow();SR.ctx=c&&c[1]?c:null}catch(e){SR.ctx=null}
  SR.q=q||'';SR.sel=0;SR.mode=chat?'c':'s';
  var d=document.createElement('div');d.id='srSheet';d.className='srwrap';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label','Search Study Buddy');
  d.innerHTML='<div class="srhd"><div id="srHd"></div></div><div class="srbody" id="srBody"></div><div class="srin" id="srIn" hidden></div>';
  document.body.appendChild(d);document.documentElement.style.overflow='hidden';build();draw(true)};
window.srClose=function(){var d=document.getElementById('srSheet');if(d)d.remove();document.documentElement.style.overflow=''};
function draw(focus){if(SR.mode==='c')return drawChat(focus);
  var hd=document.getElementById('srHd');hd.innerHTML='<label class="srbox">'+ICO+'<input id="srQ" type="search" enterkeyhint="go" autocomplete="off" placeholder="Search pages, chapters, notes… or ask" aria-label="Search Study Buddy" value="'+esc(SR.q)+'"><button class="srclr" id="srClr" aria-label="Clear"'+(SR.q?'':' hidden')+'>✕</button></label><button class="srx" onclick="srClose()">Close</button>';
  document.getElementById('srIn').hidden=true;
  var i=document.getElementById('srQ');i.oninput=function(){SR.q=this.value;SR.sel=0;document.getElementById('srClr').hidden=!SR.q;results()};
  i.onkeydown=function(e){if(e.key==='ArrowDown'){e.preventDefault();move(1)}else if(e.key==='ArrowUp'){e.preventDefault();move(-1)}else if(e.key==='Enter'){e.preventDefault();act(SR.sel)}else if(e.key==='Escape'){srClose()}};
  document.getElementById('srClr').onclick=function(){SR.q='';i.value='';this.hidden=true;results();i.focus()};
  results();if(focus)setTimeout(function(){i.focus()},30)}
function results(){var b=document.getElementById('srBody'),q=SR.q.trim(),h='',F=[];
  if(!q){var C=SR.ctx?SR.ctx[0]:null;
    h+='<div><div class="srgrp">Try</div><div class="srsug">'+['Trigonometry','Probability','Mistakes','Sample paper','Points','Macbeth','Social contract','Notes'].map(function(s){return'<button class="chipb" onclick="srSet(\''+s+'\')">'+s+'</button>'}).join('')+'</div>';
    h+='<div class="srgrp">Or ask Claude here</div>';
    var A=[];if(C)A.push('Explain what is on my screen: '+C);A.push('What should I study now?','Give me one quick question to warm up');
    A.forEach(function(a){F.push({ask:a});h+='<button class="sri ai" data-i="'+(F.length-1)+'"><b>'+ASKI+esc(a)+'</b></button>'});
    if(SR.chat.length){F.push({cont:1});h+='<button class="sri" data-i="'+(F.length-1)+'"><b>Continue the conversation</b><small>'+SR.chat.filter(function(m){return m.r==='me'}).length+' questions so far</small></button>'}
    h+='<p class="srfoot">Tip: press <b>/</b> on a keyboard to search from any screen.</p></div>'}
  else{var R=search(q).slice(0,40),qq=isQ(q),best=!qq&&R.length&&R[0].s>=3.2;
    var askRow=function(first){F.push({ask:q});return'<button class="sri ai'+(first?' first':'')+'" data-i="'+(F.length-1)+'"><b>'+ASKI+'Ask Claude: “'+esc(q.length>70?q.slice(0,68)+'…':q)+'”</b><small>Answered right here in the app, with links to the pages that help</small></button>'};
    h+='<div>';if(qq||!R.length)h+=askRow(true);
    if(!R.length)h+='<p class="srempty">No page in the app matches that. Claude can still help.</p>';
    var by={};R.forEach(function(r){(by[r.o.ty]=by[r.o.ty]||[]).push(r)});var shown=0;
    if(best){var o=R[0].o;F.push({o:o});h+='<button class="sri best" data-i="'+(F.length-1)+'"><b>'+hl(o.t,q)+'</b><small>'+esc(o.w)+'</small>'+(o.p?'<span class="srp">'+esc(o.p)+'</span>':'')+'</button>'+chips(o);shown=1}
    ORDER.forEach(function(ty){var L=(by[ty]||[]).filter(function(r){return!(best&&r===R[0])});if(!L.length)return;var lim=ty==='Pages'||ty==='Maths chapters'||ty==='Subject chapters'?6:4;
      h+='<div class="srgrp">'+esc(ty)+'</div>';L.slice(0,lim).forEach(function(r){var o=r.o;F.push({o:o});h+='<button class="sri" data-i="'+(F.length-1)+'"><b>'+hl(o.t,q)+'</b><small>'+esc(o.w)+'</small>'+(o.p?'<span class="srp">'+esc(o.p)+'</span>':'')+'</button>'+chips(o)});
      if(L.length>lim)h+='<p class="srempty" style="margin-top:-2px">and '+(L.length-lim)+' more. Add a word to narrow it down.</p>'});
    if(R.length&&!qq){h+='<div class="srgrp">Not what you wanted?</div>'+askRow(false)}
    h+='</div>'}
  SR.flat=F;b.innerHTML=h;if(SR.sel>=F.length)SR.sel=0;mark();
  b.querySelectorAll('.sri').forEach(function(x){x.onclick=function(){act(+x.dataset.i)}});
  b.querySelectorAll('.srch .chipb').forEach(function(x){x.onclick=function(){var o=BYK[x.dataset.k];if(o){srClose();o.chips[+x.dataset.c][1]()}}})}
function chips(o){if(!o.chips)return'';return'<div class="srch">'+o.chips.map(function(c,i){return'<button class="chipb" data-k="'+esc(o.key)+'" data-c="'+i+'">'+esc(c[0])+'</button>'}).join('')+'</div>'}
function mark(){var b=document.getElementById('srBody');if(!b)return;b.querySelectorAll('.sri').forEach(function(x){x.classList.toggle('sel',+x.dataset.i===SR.sel&&!!SR.q.trim())})}
function move(d){if(!SR.flat.length)return;SR.sel=(SR.sel+d+SR.flat.length)%SR.flat.length;mark();var x=document.querySelector('.sri.sel');if(x)x.scrollIntoView({block:'nearest'})}
function act(i){var f=SR.flat[i];if(!f){if(SR.q.trim())ask(SR.q.trim());return}
  if(f.o){srClose();try{f.o.run()}catch(e){goView('today')}return}
  if(f.cont){SR.mode='c';draw(true);return}
  if(f.ask)ask(f.ask)}
window.srSet=function(s){SR.q=s;var i=document.getElementById('srQ');if(i){i.value=s;document.getElementById('srClr').hidden=false}results()};

/* ---------- Claude, inside the app ---------- */
function catalogue(text){var L=[],seen={};function put(o){if(!o||seen[o.key])return;seen[o.key]=1;L.push(o.key+' | '+o.t+' | '+o.w)}
  IDX.forEach(function(o){if(o.ty==='Pages'||o.ty==='Maths chapters'||o.ty==='Subject chapters')put(o)});
  search(text).slice(0,25).forEach(function(r){put(r.o)});return L.join('\n')}
function ask(q){SR.mode='c';SR.chat.push({r:'me',t:q});if(SR.chat.length>40)SR.chat=SR.chat.slice(-40);SR.q='';draw(false);reply()}
async function reply(){if(SR.busy)return;SR.busy=true;var w={r:'cl',t:'',wait:1};SR.chat.push(w);drawChat();
  try{var s=await getS();if(!s)throw{off:1};
    var last=SR.chat.filter(function(m){return m.r==='me'}).slice(-1)[0].t,conv=SR.chat.filter(function(m){return!m.wait}).slice(-10).map(function(m){return(m.r==='me'?'STUDENT: ':'YOU: ')+String(m.t).slice(0,1200)}).join('\n');
    var p='You are Claude, the tutor built into Study Buddy, a study app used by one senior-school student preparing for school and board exams, CUET, the SAT and university admissions, in maths, economics, political science, sociology, history and English.'+
      (S.int?' The student enjoys '+S.int+'; use those for examples when it helps.':'')+
      '\nAnswer the student’s latest message directly and warmly. Teach rather than lecture: short paragraphs, and for a problem, guide with the first step and a question back unless they ask for the full working. Under 180 words unless they ask for more. Plain text only: no markdown symbols, no headings, maths in Unicode (x², √, π, θ, ≤, →). If you are unsure of a fact, say so.'+
      '\nThe app has these pages. If one or more would help with what they asked, list up to 3 of their keys in "go", most useful first; otherwise leave "go" empty. Never invent keys.\n'+catalogue(conv)+
      (SR.ctx?'\n\nWHAT THE STUDENT HAD OPEN WHEN THEY SEARCHED\n'+SR.ctx[1].slice(0,1500):'')+
      '\n\nCONVERSATION\n'+conv+'\n\nReturn JSON only: {"answer": "your reply", "go": ["key", ...]}';
    var d=await s.json(p,{cache:false,modelTier:'default'});
    w.t=String(d&&d.answer||'').trim()||'I couldn’t put an answer together just then. Try asking another way.';
    w.go=(d&&Array.isArray(d.go)?d.go:[]).filter(function(k){return BYK[k]}).slice(0,3)}
  catch(e){w.err=1;w.t=e&&e.off?'Claude isn’t available inside the app here. Open Study Buddy while signed in to claude.ai, or carry on in a full Claude chat.':(e&&e.code?sampleErr(e):'Claude couldn’t answer just now. Try again in a moment.')}
  delete w.wait;SR.busy=false;if(document.getElementById('srSheet')&&SR.mode==='c')drawChat()}
window.gfxChatDraw=function(i){var m=SR.chat[i];if(!m||!window.gfxDraw)return;var q='';for(var j=i;j>=0;j--)if(SR.chat[j].r==='me'){q=SR.chat[j].t;break}
  window.gfxDraw('The student asked: '+String(q).slice(0,500)+'\nThe tutor answered: '+String(m.t).slice(0,900)+'\nDraw the key idea of this answer as a clear diagram.','Draw it')};
function drawChat(focus){var hd=document.getElementById('srHd'),b=document.getElementById('srBody'),inp=document.getElementById('srIn');if(!hd)return;
  if(!document.getElementById('srAskHd')){hd.innerHTML='<button class="srx" id="srAskHd" onclick="srBack()">← Search</button><div style="flex:1;min-width:0;text-align:center"><b>Ask Claude</b></div><button class="srx" onclick="srClose()">Close</button>'}
  var h='<div class="srchat" aria-live="polite">';
  if(!SR.chat.length)h+='<div class="srm cl"><small>Claude</small>Ask anything about your subjects, a problem you are stuck on, or how to use the app.</div>';
  SR.chat.forEach(function(m){if(m.r==='me'){h+='<div class="srm me">'+esc(m.t)+'</div>';return}
    if(m.wait){h+='<div class="srm cl wait"><small>Claude</small>Thinking…</div>';return}
    h+='<div class="srm cl"><small>Claude</small>'+esc(m.t)+(m.err?'':'<button class="link gfxchatb" onclick="gfxChatDraw('+SR.chat.indexOf(m)+')">\uD83C\uDFA8 Draw it</button>')+(m.go&&m.go.length?'<div class="srgo">'+m.go.map(function(k){var o=BYK[k];return'<button onclick="srRun(\''+esc(k)+'\')">Open: '+esc(o.t)+'<small>'+esc(o.w)+'</small></button>'}).join('')+'</div>':'')+'</div>'});
  h+='</div><p class="srfoot">This conversation stays on this screen until the app closes. <button class="link" onclick="srFull()">Continue in a full Claude chat</button>'+(SR.chat.length?' · <button class="link" onclick="srNew()">Start over</button>':'')+'</p>';
  b.innerHTML='<div>'+h+'</div>';
  if(inp.hidden||!document.getElementById('srA')){inp.hidden=false;inp.innerHTML='<div><textarea id="srA" rows="1" placeholder="Ask a follow-up…" aria-label="Message to Claude"></textarea><button class="btn" id="srSend">Send</button></div>';
    var a=document.getElementById('srA');a.oninput=function(){a.style.height='auto';a.style.height=Math.min(120,a.scrollHeight)+'px'};
    a.onkeydown=function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();srSend()}else if(e.key==='Escape')srClose()};
    document.getElementById('srSend').onclick=srSend}
  document.getElementById('srSend').disabled=SR.busy;
  b.scrollTop=b.scrollHeight;if(focus)setTimeout(function(){var a=document.getElementById('srA');if(a)a.focus()},30)}
window.srSend=function(){var a=document.getElementById('srA');if(!a||SR.busy)return;var t=a.value.trim();if(!t)return;a.value='';a.style.height='auto';SR.chat.push({r:'me',t:t});drawChat();reply()};
window.srBack=function(){SR.mode='s';var hd=document.getElementById('srHd');if(hd)hd.innerHTML='';draw(true)};
window.srNew=function(){SR.chat=[];drawChat(true)};
window.srRun=function(k){var o=BYK[k];if(!o)return;srClose();try{o.run()}catch(e){}};
window.srFull=function(){var t='I’m studying with my Study Buddy app.'+(SR.ctx?' On screen: '+SR.ctx[0]+'.':'')+'\n\n'+SR.chat.filter(function(m){return!m.wait&&!m.err}).map(function(m){return(m.r==='me'?'Me: ':'Claude: ')+m.t}).join('\n\n');openChat(t)};

/* ---------- entry points: a Search tab, a field on Today, and the / key ---------- */
var nav=document.getElementById('topnav'),tb=document.createElement('button');tb.className='tab srtab';tb.setAttribute('aria-label','Search');
tb.innerHTML='<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>Search';tb.onclick=function(){srOpen()};nav.appendChild(tb);
try{document.documentElement.style.setProperty('--navh',nav.offsetHeight+'px')}catch(e){}
var _tv=todayView;todayView=function(){_tv();var a=app.querySelector('.tdhd');if(a)a.insertAdjacentHTML('afterend','<button class="srtoday" onclick="srOpen()" aria-label="Search Study Buddy or ask Claude">'+ICO+'<span>Search the app or ask Claude…</span><kbd>/</kbd></button>')};
document.addEventListener('keydown',function(e){if(document.getElementById('srSheet'))return;var t=e.target,typing=t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable);
  if((e.key==='/'&&!typing)||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k')){e.preventDefault();srOpen()}});
try{if(view==='today')render()}catch(e){}
})();
/*SRCH-END*/
