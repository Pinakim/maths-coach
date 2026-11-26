/*KNOW-START*/
/*KNOW: "Know yourself" check-ins in Plan & progress, taken in order: 1) maths nerves (adapted Abbreviated Math Anxiety
  Scale, Hopko et al. 2003), 2) mindset (Dweck's 3-item implicit theory of intelligence scale, plus 3 maths items written
  for this app), 3) personality (Mini-IPIP, Donnellan et al. 2006, public-domain IPIP items). Self-report only, never a
  diagnosis. Answers live in S.ky and sync like the rest of the app (student only). A short study-profile note is added
  to Claude prompts so tone and pacing fit. Also: share links (#name) that open any page or item directly, and a
  "Share a link" page. Neutral wording only. */
(function(){
'use strict';
var BASE='https://claude.ai/artifact/Mg1ofXxuYQaYbqB14ZzXqQ';
function E(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function role(){try{return window.ROLE||ROLE}catch(e){return'student'}}
function kst(){if(!S.ky||typeof S.ky!=='object')S.ky={};return S.ky}
function toast(t){try{showToast(t)}catch(e){}}
function avg(a){var s=0;a.forEach(function(x){s+=x});return a.length?s/a.length:0}
function r1(x){return Math.round(x*10)/10}
function fdt(t){try{return new Date(t).toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})}catch(e){return''}}

/* ---------- the three check-ins ---------- */
var AGREE6=['Strongly agree','Agree','Mostly agree','Mostly disagree','Disagree','Strongly disagree'];
var T=[
{id:'anx',n:'Maths nerves',m:'about 2 minutes · 9 questions',
 lead:'How anxious would you feel…',
 sc:['Not at all','A little','Somewhat','Quite a lot','Very much'],
 q:[['Looking up a formula or table in a maths book',0],['Thinking about a maths test the day before it',1],['Watching the teacher work out a problem on the board',0],
    ['Sitting a maths exam',1],['Being given many hard problems to finish by the next class',1],['Listening to the teacher explain a new maths topic',0],
    ['Listening to a classmate explain how to solve a problem',0],['Finding out there is a surprise maths test today',1],['Starting a new chapter in maths',0]],
 src:'Adapted from the Abbreviated Math Anxiety Scale (Hopko and others, 2003).'},
{id:'mind',n:'Mindset',m:'about 1 minute · 6 statements',
 lead:'How much do you agree?',sc:AGREE6,
 q:[['You have a certain amount of intelligence, and you can’t really do much to change it.','g',0],['Your intelligence is something about you that you can’t change very much.','g',0],
    ['You can learn new things, but you can’t really change your basic intelligence.','g',0],['Some people are just not “maths people”, and practice can’t change that much.','m',0],
    ['If a chapter feels hard, it means I am not good at maths.','m',0],['With the right method and enough practice, I can get much better at maths.','m',1]],
 src:'Statements 1–3: Dweck’s mindset scale (2000). Statements 4–6: maths version written for Study Buddy.'},
{id:'pers',n:'Personality',m:'about 4 minutes · 20 statements',
 lead:'How well does this describe you?',
 sc:['Very inaccurate','Inaccurate','Neither','Accurate','Very accurate'],
 q:[['I am the life of the party.','E',0],['I feel what others are feeling, and care about it.','A',0],['I get jobs done right away.','C',0],['I have frequent mood swings.','N',0],['I have a vivid imagination.','O',0],
    ['I don’t talk a lot.','E',1],['I am not interested in other people’s problems.','A',1],['I often forget to put things back in their place.','C',1],['I am relaxed most of the time.','N',1],['I am not interested in abstract ideas.','O',1],
    ['I talk to a lot of different people at gatherings.','E',0],['I feel others’ emotions.','A',0],['I like order.','C',0],['I get upset easily.','N',0],['I have difficulty understanding abstract ideas.','O',1],
    ['I keep in the background.','E',1],['I am not really interested in others.','A',1],['I make a mess of things.','C',1],['I seldom feel low.','N',1],['I do not have a good imagination.','O',1]],
 src:'Mini-IPIP (Donnellan and others, 2006), from the public-domain International Personality Item Pool.'}];
function tOf(id){return T.filter(function(t){return t.id===id})[0]}

/* ---------- scoring ---------- */
function scAnx(a){var t=tOf('anx'),L=[],V=[];a.forEach(function(v,i){(t.q[i][1]?V:L).push(v+1)});
  var all=avg(a.map(function(v){return v+1}));
  return{all:all,learn:avg(L),eval:avg(V),band:all<2?'low':all<=3.2?'mid':'high',
    top:a.map(function(v,i){return[v,i]}).filter(function(x){return x[0]>=3}).sort(function(x,y){return y[0]-x[0]}).slice(0,3).map(function(x){return t.q[x[1]][0]})}}
function scMind(a){var t=tOf('mind'),G=[],M=[];a.forEach(function(v,i){var s=t.q[i][2]?6-v:v+1;(t.q[i][1]==='g'?G:M).push(s)});
  var g=avg(G),m=avg(M);function b(x){return x>=4?'growth':x>=3?'mixed':'fixed'}return{g:g,m:m,gb:b(g),mb:b(m)}}
function scPers(a){var t=tOf('pers'),K={E:[],A:[],C:[],N:[],O:[]};a.forEach(function(v,i){var s=v+1;if(t.q[i][2])s=6-s;K[t.q[i][1]].push(s)});
  var r={};Object.keys(K).forEach(function(k){r[k]=avg(K[k])});r.S=6-r.N;return r}
function lvl(x){return x<2.6?'lower':x<=3.5?'middle':'higher'}
function res(id){var k=kst()[id];if(!k||!Array.isArray(k.a))return null;var t=tOf(id);if(k.a.length!==t.q.length)return null;
  return id==='anx'?scAnx(k.a):id==='mind'?scMind(k.a):scPers(k.a)}

var TR=[['C','Organised and steady with work','Conscientiousness',
   ['Short, concrete steps and a visible checklist help most. Start each session with one small, easy win.','A clear plan helps. Keep sessions short and regular, with one target each.','A structured plan suits you. Use it to stretch: one harder question each session.']],
  ['O','Curious about ideas','Openness',
   ['Start from a worked example, then the idea behind it. Practical uses make it stick.','Mix worked examples with the “why” behind them.','Lead with the big idea and why it is true. Links to your interests keep it alive.']],
  ['S','Calm under pressure','Emotional stability',
   ['Gentle, steady practice and small wins. Timed work is framed as practice, never as a verdict.','Most days are steady. On tense days, pick the lighter option.','A steady base. Timed papers are a good way to train speed.']],
  ['E','Outgoing and talkative','Extraversion',
   ['Quiet thinking time first, then a short check with Claude.','Mix quiet solving with talking it through.','Explaining out loud helps: tell Claude your method before solving.']],
  ['A','Warm and considerate','Agreeableness',
   ['Direct, to-the-point feedback suits you.','Balanced feedback: what worked, then one fix.','Kind, encouraging feedback, with honest fixes.']]];

/* ---------- note for Claude ---------- */
var TAG='[Study profile]';
function note(){var a=res('anx'),m=res('mind'),p=res('pers'),L=[];if(!a&&!m&&!p)return'';
  if(a){L.push('Nerves about number work: '+(a.band==='high'?'high':a.band==='mid'?'moderate':'low')+(a.band!=='low'?(a.eval>a.learn+.3?', mostly around tests and being marked':a.learn>a.eval+.3?', mostly while learning new work':''):'')+'.');
    if(a.band!=='low')L.push('Keep a calm, unhurried tone; praise method, not speed; treat every slip as a clue; break work into small steps; never call anything easy or quick.')}
  if(m){L.push('Belief that ability grows with effort: '+m.gb+' in general, '+m.mb+' for number work.');
    if(m.gb!=='growth'||m.mb!=='growth')L.push('Credit effort and strategy, say “not yet” rather than “wrong”, and show how each mistake is fixable.')}
  if(p){var P=[];TR.forEach(function(t){P.push(t[1].toLowerCase()+' '+lvl(p[t[0]]))});L.push('Self-rated personality: '+P.join('; ')+'.');
    if(lvl(p.C)==='lower')L.push('Give one concrete next step at a time.');
    if(lvl(p.O)==='higher')L.push('Open with the big idea and why it matters.');else if(lvl(p.O)==='lower')L.push('Lead with a concrete worked example before the idea.');
    if(lvl(p.S)==='lower')L.push('Keep feedback gentle and specific.')}
  return TAG+' From short self-report check-ins the student chose to take (not a diagnosis). Use only to adjust tone, pacing and encouragement. Never mention scores, labels or this note. '+L.join(' ')}
function add(p){try{if(typeof p!=='string'||p.indexOf(TAG)>=0)return p;if(role()==='guest')return p;var n=note();return n?n+'\n\n'+p:p}catch(e){return p}}
(function(){var g0=window.getS;if(typeof g0!=='function'||g0.__ky)return;var base=null,wrapped=null,FN={json:1,text:1,stream:1,complete:1};
  async function g(){var s=await g0.apply(this,arguments);if(!s)return s;if(s===base&&wrapped)return wrapped;base=s;
    wrapped=new Proxy(s,{apply:function(t,th,a){a=[].slice.call(a);if(a.length)a[0]=add(a[0]);return Reflect.apply(t,th,a)},
      get:function(t,k){var v=Reflect.get(t,k);if(typeof v!=='function')return v;if(FN[k])return function(){var a=[].slice.call(arguments);if(a.length)a[0]=add(a[0]);return v.apply(t,a)};return v.bind(t)}});
    return wrapped}
  g.__ky=1;g.__wk=g0.__wk;window.getS=g;try{getS=g}catch(e){}})();
window.SB_KYNOTE=note;

/* ---------- Know yourself page ---------- */
var KY={t:null,i:0,a:[],show:null};
function bar(x,max,lab){var w=Math.max(4,Math.min(100,(x-1)/(max-1)*100));return'<div class="kybar"><span>'+E(lab)+'</span><div><i style="width:'+w+'%"></i></div><b>'+r1(x)+'</b></div>'}
function nextId(){for(var i=0;i<T.length;i++)if(!res(T[i].id))return T[i].id;return null}
function kyHome(){var nx=nextId(),h='<h1>Know yourself</h1><p class="sub">Three short check-ins, best taken in this order. There are no right or wrong answers. Study Buddy uses them to fit its tone, pace and explanations to you.</p>';
  if(role()!=='student')h+='<div class="note">Only the student’s answers are saved. In this view you can try the check-ins, but nothing is kept.</div>';
  h+='<div class="card">';T.forEach(function(t,i){var r=res(t.id),k=kst()[t.id];
    h+='<div class="kyrow"><span class="kyn'+(r?' ok':'')+'">'+(r?'✓':(i+1))+'</span><span class="kyt"><b>'+E(t.n)+'</b><small>'+(r?'Done '+E(fdt(k.at)):E(t.m))+'</small></span>'+
      (r?'<button class="btn alt kyb" onclick="kyShow(\''+t.id+'\')">Results</button>':'<button class="btn kyb'+(t.id===nx?'':' alt')+'" onclick="kyStart(\''+t.id+'\')">Start</button>')+'</div>'});
  h+='</div>';
  if(!nx)h+='<div class="card hi"><b>What Study Buddy now does differently</b><ul class="kyul">'+doList().map(function(x){return'<li>'+E(x)+'</li>'}).join('')+'</ul></div>';
  h+='<div class="card"><b>Good to know</b><ul class="kyul"><li>These are self-reports, not tests of ability and not a diagnosis.</li><li>Answer for how things usually are, not for today only.</li><li>Feelings and habits change. Take them again in about two months to see the change.</li></ul></div>';
  app.innerHTML=h}
function doList(){var a=res('anx'),m=res('mind'),p=res('pers'),L=[];
  if(a)L.push(a.band==='low'?'Keeps the usual pace, with timed practice when useful.':'Calmer pace: small steps, method praised over speed, slips treated as clues.');
  if(m)L.push(m.mb==='growth'&&m.gb==='growth'?'Sets stretch questions, since effort is already seen as the way to improve.':'Shows how each mistake is fixable and credits effort and strategy.');
  if(p){if(lvl(p.C)==='lower')L.push('Gives one concrete next step at a time.');if(lvl(p.O)==='higher')L.push('Opens with the big idea and why it is true.');else if(lvl(p.O)==='lower')L.push('Starts from a worked example before the idea.');if(lvl(p.S)==='lower')L.push('Keeps feedback gentle and specific.')}
  return L}
function kyQ(){var t=tOf(KY.t),q=t.q[KY.i],n=t.q.length,h='<button class="link back" onclick="kyQuit()">← Know yourself</button>';
  h+='<div class="card kyq"><div class="kyhd"><b>'+E(t.n)+'</b><span>'+(KY.i+1)+' of '+n+'</span></div><div class="kyprog"><i style="width:'+(KY.i/n*100)+'%"></i></div>'+
    '<p class="kylead">'+E(t.lead)+'</p><p class="kyitem">'+E(q[0])+'</p>'+
    t.sc.map(function(s,j){return'<button class="opt'+(KY.a[KY.i]===j?' sel':'')+'" onclick="kyPick('+j+')">'+E(s)+'</button>'}).join('')+
    (KY.i?'<div class="kynav"><button class="link" onclick="kyBack()">‹ Previous</button></div>':'')+'<p class="kysrc">'+E(t.src)+'</p></div>';
  app.innerHTML=h}
function anxHtml(r){var t={low:'Calm about maths most of the time.',mid:'Some nerves in a few situations. That is very common.',high:'Maths feels quite tense at times. That is common, and it changes with the right kind of practice. Nerves take up working memory, so calmer practice usually lifts marks too.'}[r.band];
  var h='<p><b>'+t+'</b></p>'+bar(r.all,5,'Overall')+bar(r.learn,5,'While learning')+bar(r.eval,5,'Tests and marks');
  if(r.band!=='low'&&Math.abs(r.eval-r.learn)>.3)h+='<p class="sub">Nerves are strongest '+(r.eval>r.learn?'around tests and being marked.':'while learning new work.')+'</p>';
  if(r.top.length)h+='<p class="sub" style="margin-bottom:4px">Most tense:</p><ul class="kyul">'+r.top.map(function(x){return'<li>'+E(x)+'</li>'}).join('')+'</ul>';
  if(r.band!=='low')h+='<p class="kytip"><b>Try:</b> before a test, write the worry down for two minutes, then start with the question you are surest of.</p>';
  return h}
function mindHtml(r){var w={growth:'Ability grows with effort and good methods.',mixed:'Partly fixed, partly grows.',fixed:'Ability feels mostly fixed.'};
  var h=bar(r.g,6,'In general')+bar(r.m,6,'For maths')+'<p><b>In general:</b> '+w[r.gb]+'<br><b>For maths:</b> '+w[r.mb]+'</p>';
  h+='<p class="kytip">'+(r.mb==='growth'?'<b>Keep it up:</b> treat hard chapters as the ones that grow you fastest.':'<b>Worth knowing:</b> the brain strengthens with practice, just like a muscle. A hard chapter means “not yet”, not “never”.')+'</p>';
  return h}
function persHtml(r){var h='';TR.forEach(function(t){var l=lvl(r[t[0]]),i=l==='lower'?0:l==='middle'?1:2;h+=bar(r[t[0]],5,t[1])+'<p class="kysm"><span class="pill">'+l+'</span> '+E(t[3][i])+'</p>'});
  return h+'<p class="sub">Every trait has its strengths; none is better than another. Scale names: '+TR.map(function(t){return t[2]}).join(', ')+'.</p>'}
function kyRes(id){var t=tOf(id),r=res(id),k=kst()[id];if(!r)return kyHome();
  var h='<button class="link back" onclick="kyShow(null)">← Know yourself</button><h1>'+E(t.n)+'</h1><p class="sub">Taken '+E(fdt(k.at))+'. A guide to how you study, not a verdict.</p><div class="card">'+
    (id==='anx'?anxHtml(r):id==='mind'?mindHtml(r):persHtml(r))+'</div>';
  var nx=nextId();if(nx)h+='<button class="btn" onclick="kyStart(\''+nx+'\')">Next: '+E(tOf(nx).n)+'</button>';
  h+='<button class="btn alt" onclick="kyStart(\''+id+'\')">Take it again</button><p class="sub" style="margin-top:10px">'+E(t.src)+'</p>';
  app.innerHTML=h}
function kyView(){if(KY.t)return kyQ();if(KY.show)return kyRes(KY.show);kyHome()}
window.kyStart=function(id){if(!tOf(id))return;KY.t=id;KY.i=0;KY.a=[];KY.show=null;if(view!=='ky')goView('ky');else{render();window.scrollTo(0,0)}};
window.kyShow=function(id){KY.t=null;KY.show=id;if(view!=='ky')goView('ky');else{render();window.scrollTo(0,0)}};
window.kyQuit=function(){KY.t=null;KY.show=null;render();window.scrollTo(0,0)};
window.kyBack=function(){if(KY.i>0)KY.i--;render()};
window.kyPick=function(j){var t=tOf(KY.t);if(!t)return;KY.a[KY.i]=j;
  if(KY.i<t.q.length-1){KY.i++;render();return}
  var id=KY.t;kst()[id]={a:KY.a.slice(),at:Date.now()};try{save()}catch(e){}
  KY.t=null;KY.show=id;render();window.scrollTo(0,0);toast(role()==='student'?'Saved. Study Buddy will use this from now on.':'Done. Not saved in this view.')};

/* ---------- share links ---------- */
function slug(s){return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}
var PG=[['Practise',[['practise','pr','Practise (Fix my mistakes)'],['quick-round','practice','Quick round: all chapters'],['method','st','Which method fits?'],['cards','mc','Memory cards'],['written','wr','Written answers'],['timed','tt','Timed test'],['paper','pp','Full paper'],['mistakes','mk','My mistakes'],['stuck','stk','I got stuck'],['notebook','check','Check notebook'],['weak-spots','ws','My weak spots']]],
  ['Learn',[['learn','cd','Learn (start page)'],['cover-base','base','Cover the base'],['examples','ex','Worked examples'],['concept-map','th','Concept map'],['templates','tl','Templates'],['concepts','cb','Concept Builder'],['play','pl','Play with it'],['lazy','lz','Lazy mode'],['stories','story','Stories'],['calculus','tz','Calculus dialogues'],['picture','vz','Picture it']]],
  ['Plan & progress',[['plan','pg','Plan & progress (start page)'],['prep','prep','Exam prep tracker'],['daily-plan','today','Daily plan'],['levels','spots','Levels and history'],['pace','pace','Pace and patterns'],['tutor-pack','tp','Tutor pack'],['rewards','fx','Rewards'],['know-yourself','ky','Know yourself'],['share','lk','Share a link']]]];
function otherPages(){var L=[];try{['subj','exam','career'].forEach(function(g){(GRP[g]||[]).forEach(function(t){if(!L.some(function(x){return x[1]===t[0]}))L.push(['open-'+slug(t[0]),t[0],t[1]])})})}catch(e){}return L}
function chName(p){try{return NM[p]}catch(e){return null}}
function cbList(){try{return CB.map(function(c){return[c.id,c.n]})}catch(e){return[]}}
function tzList(){try{return TZ.D.map(function(d,i){return[i+1,d.t]})}catch(e){return[]}}
function bxList(){try{return BX.map(function(x){return[x.id,x.t,x.c]})}catch(e){return[]}}
function bxcName(c){try{var r=BXC.filter(function(x){return x[0]===c})[0];return r?r[1]:c}catch(e){return c}}
function allPages(){var L=[];PG.forEach(function(g){g[1].forEach(function(x){L.push(x)})});return L.concat(otherPages())}
/* what a #name does; returns false when it names nothing in this version */
function act(h){h=String(h||'').toLowerCase();if(!/^[a-z0-9-]{1,60}$/.test(h))return false;var m;
  var pg=allPages().filter(function(x){return x[0]===h})[0];
  if(pg){var v=pg[1];if(v==='stk'&&typeof stkOpen==='function'){goView('pr');stkOpen();return true}
    if(v==='today'&&typeof ux3Plan==='function'){ux3Plan();return true}
    if(v==='prep'&&typeof prepOpen==='function'){prepOpen();return true}
    if(v==='ky'){KY.t=null;KY.show=null}goView(v);return true}
  if(m=/^round-(.+)$/.exec(h)){var R={exam:'e',mixed:'a',weak:'w'},p=R[m[1]]||m[1];if(!R[m[1]]&&!chName(p))return false;goView('practice');try{start(p)}catch(e){}return true}
  if(m=/^concept-(.+)$/.exec(h)){if(!cbList().some(function(c){return c[0]===m[1]}))return false;goView('cb');cbOpen(m[1]);return true}
  if(m=/^dialogue-(\d+)$/.exec(h)){var i=+m[1];if(i<1||i>tzList().length)return false;goView('tz');tzOpen(i-1);return true}
  if(m=/^example-(.+)$/.exec(h)){if(!bxList().some(function(x){return x[0]===m[1]}))return false;goView('ex');openEx(m[1]);return true}
  if(m=/^check-(anx|mind|pers)$/.exec(h)){kyStart(m[1]);return true}
  if(h==='check-next'){var nx=nextId();if(nx)kyStart(nx);else kyShow(null);return true}
  return false}
function ready(){try{return role()!=='pending'&&!document.getElementById('whoScr')&&!window.__boot}catch(e){return false}}
var PEND=null;
function go(h){if(!h)return;if(ready()){PEND=null;setTimeout(function(){try{if(!act(h))toast('That link points to something this version of Study Buddy does not have.')}catch(e){console.error(e)}},60)}else{PEND=h;poll()}}
var PT=null,PN=0;function poll(){if(PT)return;PN=0;PT=setInterval(function(){PN++;if(!PEND||PN>1000){clearInterval(PT);PT=null;return}if(ready()){var h=PEND;clearInterval(PT);PT=null;go(h)}},300)}
function hashNow(){try{return decodeURIComponent((location.hash||'').replace(/^#/,''))}catch(e){return''}}
window.addEventListener('hashchange',function(){go(hashNow())});
window.sbLink=function(h){return BASE+'#'+h};

/* Share a link page */
var LK={t:'page',i:null};
function opts(){var o=[];
  if(LK.t==='page'){PG.forEach(function(g){o.push(['',g[0],1]);g[1].forEach(function(x){o.push([x[0],x[2]])})});var op=otherPages();if(op.length){o.push(['','Other subjects and sections',1]);op.forEach(function(x){o.push([x[0],x[2]])})}}
  else if(LK.t==='round'){o.push(['round-exam','Exam set (12 exam-style questions)']);o.push(['round-mixed','Mixed: all chapters']);o.push(['round-weak','My weak spots']);try{Object.keys(NM).forEach(function(p){o.push(['round-'+p,NM[p]])})}catch(e){}}
  else if(LK.t==='concept')cbList().forEach(function(c){o.push(['concept-'+c[0],c[1]])});
  else if(LK.t==='dialogue')tzList().forEach(function(d){o.push(['dialogue-'+d[0],d[0]+'. '+d[1]])});
  else if(LK.t==='example'){var last=null;bxList().forEach(function(x){if(x[2]!==last){last=x[2];o.push(['',bxcName(x[2]),1])}o.push(['example-'+x[0],x[1]])})}
  else if(LK.t==='check'){o.push(['check-next','The next check-in not yet done']);T.forEach(function(t,i){o.push(['check-'+t.id,(i+1)+'. '+t.n])})}
  return o}
function lkView(){var TY=[['page','A page'],['round','Quick round on a chapter'],['concept','Concept Builder chapter'],['dialogue','Calculus dialogue'],['example','Worked example'],['check','Know yourself check-in']];
  var O=opts(),sel=O.filter(function(x){return x[0]&&!x[2]});if(!LK.i||!sel.some(function(x){return x[0]===LK.i}))LK.i=sel.length?sel[0][0]:null;
  var url=LK.i?BASE+'#'+LK.i:'',h='<h1>Share a link</h1><p class="sub">Pick what the student should open. The link opens Study Buddy straight on that page or item.</p><div class="card">';
  h+='<label class="kylab" for="lkT">What to open</label><select id="lkT" onchange="lkSet(this.value,null)">'+TY.map(function(t){return'<option value="'+t[0]+'"'+(t[0]===LK.t?' selected':'')+'>'+E(t[1])+'</option>'}).join('')+'</select>';
  var grp=false,oh='';O.forEach(function(x){if(x[2]){oh+=(grp?'</optgroup>':'')+'<optgroup label="'+E(x[1])+'">';grp=true}else oh+='<option value="'+E(x[0])+'"'+(x[0]===LK.i?' selected':'')+'>'+E(x[1])+'</option>'});if(grp)oh+='</optgroup>';
  h+='<label class="kylab" for="lkI">Which one</label><select id="lkI" onchange="lkSet(null,this.value)">'+oh+'</select>';
  if(url){h+='<label class="kylab" for="lkU">Link</label><input id="lkU" class="kyurl" readonly value="'+E(url)+'" onclick="this.select()">'+
    '<div class="row2"><button class="btn" onclick="lkCopy()">Copy link</button><a class="btn alt kya" href="https://wa.me/?text='+encodeURIComponent('Open this in Study Buddy: '+url)+'" target="_blank" rel="noopener">Send on WhatsApp</a></div>'+
    '<button class="btn alt" onclick="lkTry()">Open it here</button>'}
  else h+='<p class="sub">Nothing to pick here yet.</p>';
  h+='</div><div class="card"><b>Good to know</b><ul class="kyul"><li>The student’s device must be signed in to the same Claude account.</li><li>If a link opens the start page instead, open it in a web browser (Chrome or Safari) rather than inside the Claude app.</li><li>Links stay valid when Study Buddy is updated.</li></ul></div>';
  app.innerHTML=h}
window.lkSet=function(t,i){if(t){LK.t=t;LK.i=null}if(i)LK.i=i;render()};
window.lkCopy=function(){var u=document.getElementById('lkU');if(!u)return;var v=u.value;
  try{navigator.clipboard.writeText(v).then(function(){toast('Link copied.')},function(){u.select();toast('Select the link and copy it.')})}catch(e){u.select();toast('Select the link and copy it.')}};
window.lkTry=function(){if(LK.i&&!act(LK.i))toast('Not available in this version.')};

/* ---------- wiring ---------- */
try{var G=GRP.maths;if(G){if(!G.some(function(t){return t[0]==='ky'}))G.push(['ky','Know yourself']);if(!G.some(function(t){return t[0]==='lk'}))G.push(['lk','Share a link'])}
  if(typeof SECN!=='undefined'){SECN.ky='Know yourself';SECN.lk='Share a link'}}catch(e){}
var MINE={ky:kyView,lk:lkView};
function pgCard(){if(!app||app.querySelector('.kypg'))return;var c=document.createElement('div');c.className='card kypg';
  var nx=nextId();
  c.innerHTML='<button class="trow" onclick="goView(\'ky\')"><span class="tn">☺</span><span class="tt"><b>Know yourself</b><small>'+(nx?'Three short check-ins: nerves, mindset, personality':'All three done · see results')+'</small></span>'+(nx?'<span class="pill">new</span>':'')+'</button>'+
    '<button class="trow" onclick="goView(\'lk\')"><span class="tn">🔗</span><span class="tt"><b>Share a link</b><small>Send the student straight to any page or item</small></span></button>';
  var first=app.querySelector('.card');if(first&&first.nextSibling)app.insertBefore(c,first.nextSibling);else app.appendChild(c)}
var _sb=subBar;subBar=function(){_sb();try{if(!MINE[view])return;var el=document.getElementById('sub');if(!el)return;
  el.querySelectorAll('[role=tab]').forEach(function(b){var o=b.getAttribute('onclick')||'';b.setAttribute('aria-selected',String(o.indexOf("'pg'")>=0))});
  var cb=el.querySelector('.smcrumb');if(cb)cb.innerHTML='<button class="link" onclick="goView(\'pg\')">← Plan &amp; progress</button><span>'+(view==='ky'?'Know yourself':'Share a link')+'</span>'}catch(e){}};
var _vt=viewTop;viewTop=function(v){if(v==='ky'){KY.t=null;KY.show=null}return _vt(v)};
var _r=render;render=function(){if(window.__boot)return;var req=view;
  if(MINE[req]){view='pg';_r();view=req;try{MINE[req]();subBar()}catch(e){console.error(e)}return}
  _r();if(view==='pg')try{pgCard()}catch(e){}};

var css=document.createElement('style');css.textContent=
'.kyrow{display:flex;align-items:center;gap:10px;padding:10px 0;border-top:1px solid var(--line)}.kyrow:first-child{border-top:0}'+
'.kyn{flex:0 0 32px;height:32px;border-radius:50%;display:grid;place-items:center;font-weight:700;background:var(--accent-soft);color:var(--accent)}.kyn.ok{background:var(--okbg);color:var(--ok)}'+
'.kyt{flex:1;min-width:0}.kyt b{display:block}.kyt small{color:var(--muted)}.kyb{width:auto!important;margin:0!important;padding:8px 14px!important;flex:0 0 auto}'+
'.kyul{margin:6px 0 0;padding-left:20px}.kyul li{margin:0 0 4px}'+
'.kyhd{display:flex;justify-content:space-between;color:var(--muted);font-size:.9rem}.kyhd b{color:var(--fg)}'+
'.kyprog{height:6px;background:var(--line);border-radius:4px;overflow:hidden;margin:8px 0 14px}.kyprog i{display:block;height:100%;background:var(--accent);transition:width .25s}'+
'.kylead{color:var(--muted);margin:0 0 4px}.kyitem{font-size:1.12rem;font-weight:600;margin:0 0 10px;text-wrap:balance}'+
'.kyq .opt.sel{border-color:var(--accent);background:var(--accent-soft)}.kyq .opt{min-height:44px}'+
'.kynav{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:10px}.kysrc{color:var(--muted);font-size:.75rem;margin:10px 0 0}'+
'.kybar{display:grid;grid-template-columns:minmax(0,9.5em) minmax(0,1fr) 2.2em;gap:8px;align-items:center;margin:6px 0}.kybar span{font-size:.88rem}.kybar div{height:10px;background:var(--line);border-radius:6px;overflow:hidden}.kybar i{display:block;height:100%;background:var(--accent);border-radius:6px}.kybar b{font-size:.85rem;text-align:right;font-variant-numeric:tabular-nums}'+
'.kysm{margin:0 0 10px;font-size:.88rem;color:var(--muted)}.kysm .pill{margin-right:4px}'+
'.kytip{background:var(--accent-soft);border-radius:10px;padding:8px 12px;margin:10px 0 0;font-size:.9rem}'+
'.kylab{display:block;font-weight:600;font-size:.9rem;margin-top:8px}.kyurl{width:100%;box-sizing:border-box;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:10px;margin:6px 0;font-size:16px}'+
'.kya{text-decoration:none;text-align:center}'+
'@media (prefers-reduced-motion:reduce){.kyprog i{transition:none}}';
document.head.appendChild(css);

/* open the link the app was started with */
var H0=hashNow();if(H0)go(H0);
try{render()}catch(e){}
})();
/*KNOW-END*/
