
/*PTS: points = 10 x the marks the student is likely to score, estimated from which questions she now gets right. Never a promise. */
(function(){
var RF=0.8;/* practice here is tap-the-answer; a written paper asks more, so only this share of a chapter's marks counts as banked */
var EX={sch:{n:'School exam',set:'a',tot:80},brd:{n:'Board exam',set:'b',tot:80},cuet:{n:'CUET',set:'b',tot:250},sat:{n:'SAT',tot:1600,floor:400},ash:{n:'Ashoka',tot:40,u:40}};
var M11=[['Sets and functions',18,['Sets','Relations and Functions','Trigonometry']],['Algebra',26,['Complex Numbers','Quadratic Equations','Linear Inequalities','Permutations and Combinations','Binomial Theorem','Sequences and Series']],['Coordinate geometry',20,['Straight Lines','Circles','Conic Sections','3D Geometry']],['Calculus',8,['Limits and Derivatives']],['Statistics and probability',8,['Statistics','Probability']]];
var M12=[['Relations and functions',10,['Relations and Functions','Inverse Trigonometric Functions']],['Algebra',10,['Matrices','Determinants']],['Calculus',32,['Continuity and Differentiability','Applications of Derivatives','Integrals','Differential Equations']],['Probability',13,['Probability']],['Vectors',5,['Vectors']],['Three-dimensional geometry',6,['Three Dimensional Geometry']],['Application of integrals',4,['Application of Integrals']]];
var QM={x:'Complex Numbers',p:'Permutations and Combinations',b:'Binomial Theorem',s:'Sequences and Series',g:'Straight Lines',c:'Circles',t:'Trigonometry'};
function P(){if(!S.pt)S.pt={};var p=S.pt;['d','log','ms','dates','sub','goal','miss'].forEach(function(k){if(!p[k])p[k]={}});if(!EX[p.ex])p.ex='sch';return p}
/* a question missed today has just had its answer shown, so it opens again only tomorrow */
function missedToday(id){return P().miss[id]===dkey()}
function dkey(t){var d=new Date(t||Date.now());return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
function keyOf(ex){var p=P();return ex==='sat'||ex==='ash'?ex:ex+':'+(CU[p.sub[ex]]?p.sub[ex]:'math')}
function curKey(){return keyOf(P().ex)}
function nice(v){var e=Math.pow(10,Math.floor(Math.log10(v))),m=v/e;return(m<1.5?1:m<3.5?2:m<7.5?5:10)*e}
function r0(v){return Math.round(v)}
var MC={};
function model(k){if(MC[k])return MC[k];var ex=k.split(':')[0],sub=k.split(':')[1],E=EX[ex],ch={},order=[];
  function addq(tp,o){if(!ch[tp]){ch[tp]={n:tp,q:[],w:0};order.push(tp)}ch[tp].q.push(o)}
  if(ex==='ash'){(window.ASHQ||[]).forEach(function(a,i){addq(a[0]==='ps'?'Problem solving':'Critical thinking',{id:'ash:'+i,kind:'ash',ix:i,src:{q:a[1],o:a[2],a:a[3],k:a[4],fx:1}})});order.forEach(function(t){ch[t].w=E.tot/order.length})}
  else if(ex==='sat'){['math','rw'].forEach(function(sec){['a','b'].forEach(function(st){(SAT[sec][st]||[]).forEach(function(q){if(q.ty==='m')addq(SATM[sec].n+' · '+q.tp,{id:q.id,kind:'sat',src:q,sec:sec})})});
      var L=order.filter(function(t){return ch[t].q[0].sec===sec});L.forEach(function(t){ch[t].w=600/L.length})})}
  else{CU[sub][E.set].forEach(function(q){addq(q.tp,{id:q.id,kind:'cu',src:q})});
    if(sub==='math'&&ex==='sch')Q.forEach(function(q,i){addq(QM[q.p],{id:'q:'+i,kind:'q',src:q})});
    if(sub==='math'&&ex!=='cuet'){(ex==='sch'?M11:M12).forEach(function(u){var L=u[2].filter(function(t){return ch[t]});L.forEach(function(t){ch[t].w=u[1]/L.length;ch[t].u=u[0]})});order=order.filter(function(t){return ch[t].w>0})}
    else order.forEach(function(t){ch[t].w=E.tot/order.length})}
  order.forEach(function(t){ch[t].need=Math.max(4,Math.min(ch[t].q.length,8))});
  return MC[k]={k:k,ex:ex,sub:sub,E:E,ch:ch,order:order,name:E.n+(sub?' · '+CUM[sub].n:'')}}
function lastOk(o){var d=P().d;if(d[o.id]!=null)return d[o.id]===1;
  if(o.kind==='cu'){var D=cuD(),r=D.st[o.id];return!!(r&&r[0]>0&&!D.mk[o.id])}
  if(o.kind==='ash'){var as=S.ash&&S.ash.st;return!!(as&&as[o.ix]===1)}
  if(o.kind==='sat'){var D2=satD(),r2=D2.st[o.id];return!!(r2&&r2[0]>0&&!D2.mk[o.id])}return false}
function stat(c){var ok=c.q.filter(lastOk).length,cap=Math.min(c.q.length,c.need);return{ok:ok,m:Math.min(1,ok/c.need),per:10*c.w*RF/c.need,left:Math.max(0,cap-ok),cap:cap}}
function score(M){var f=(M.E.floor||0)*10,now=f,max=f;M.order.forEach(function(t){var c=M.ch[t],s=stat(c);now+=10*c.w*RF*s.m;max+=10*c.w*RF*s.cap/c.need});
  return{now:now,max:max,floor:f,full:M.E.tot*10,good:f+(now-f)*.75}}
function acc(){var q=S.ev.filter(function(e){return e.k==='q'}).slice(-30);if(q.length<8)return.65;return Math.max(.4,Math.min(.95,q.filter(function(e){return e.ok}).length/q.length))}
function open(M,focus){return M.order.map(function(t){return{c:M.ch[t],s:stat(M.ch[t])}}).filter(function(x){return x.s.left>0&&(!focus||x.c.n===focus)}).sort(function(a,b){return b.s.per-a.s.per})}
/* how many problems for a target, and what a given number of problems is likely to bring */
function plan(M,target,focus){var L=open(M,focus),k=0,p=0;for(var i=0;i<L.length&&p<target;i++)for(var j=0;j<L[i].s.left&&p<target;j++){k++;p+=L[i].s.per}
  var a=acc();return{k:k,n:Math.ceil(k/a),fair:Math.min(p,target),good:Math.min(p,target)*Math.max(.3,a-.15)/a,avail:L.reduce(function(s,x){return s+x.s.left*x.s.per},0)}}
function ptsFor(M,n){var L=open(M),k=Math.floor(n*acc()),p=0;for(var i=0;i<L.length&&k>0;i++)for(var j=0;j<L[i].s.left&&k>0;j++){k--;p+=L[i].s.per}return p}
function unit(M){return M.E.u||nice(M.E.tot*10/40)}
/* ---------- the climb: a chosen target, cut into equal small steps ---------- */
function goalOf(M){var g=P().goal[M.k];return g>0?g:null}
function climb(M){var sc=score(M),u=unit(M),g=goalOf(M),d=daysTo(M.ex),reach=g?Math.min(g,sc.max):0,left=g?Math.max(0,reach-sc.now):0;
  var steps=left>.01?Math.ceil((left-.01)/u):0,total=g?Math.max(steps,Math.ceil((reach-sc.floor-.01)/u)):0;
  return{sc:sc,u:u,g:g,d:d,left:left,steps:steps,total:total,done:total-steps,capped:!!g&&g>sc.max+.01,perDay:steps&&d!=null?Math.ceil(steps/Math.max(1,d)):null}}
function dayGoal(M){var c=climb(M);return c.perDay?Math.min(4,c.perDay)*c.u:c.u*1.5}
function goalChips(M){var sc=score(M),f=sc.floor,g=goalOf(M),o=[.4,.5,.6,.7,.8,.9].map(function(x){return r0((f+(sc.full-f)*x)/10)*10}).filter(function(v){return v>sc.now+.01});
  if(!o.length)return'<p class="sub">You are already past nine-tenths of the paper here. Timed papers are the next step.</p>';
  return'<div class="ptchips" role="group" aria-label="Target marks">'+o.map(function(v){return'<button class="chipb'+(v===g?' on':'')+'" aria-pressed="'+(v===g)+'" onclick="ptGoal(\''+M.k+'\','+v+')">'+r0(v/10)+'</button>'}).join('')+(g?'<button class="chipb" onclick="ptGoal(\''+M.k+'\',0)">No target</button>':'')+'</div>'}
function pips(c){var lb=c.done+' of '+c.total+' steps done';if(c.total>36)return'<div class="ptgoal" style="margin:8px 0" role="img" aria-label="'+lb+'"><i style="width:'+(c.done/c.total*100)+'%"></i></div>';
  var h='<div class="pips" role="img" aria-label="'+lb+'">';for(var i=0;i<c.total;i++)h+='<i class="'+(i<c.done?'on':i===c.done?'cur':'')+'"></i>';return h+'</div>'}
function climbHtml(M){var c=climb(M),k=M.k,T=M.E.tot,mk=function(v){return r0(v/10)},h='<div class="card clm"><div class="eyebrow">Step by step · '+esc(M.name)+'</div>';
  if(!c.g||PV.ge===k)return h+'<b class="clmh">'+(c.g?'Change the target':'Choose where you want to get to')+'</b><p class="sub">You are at about '+mk(c.sc.now)+' marks out of '+T+' now. Pick the marks to aim for. The app cuts the way there into small steps of +'+c.u+' points, and you only ever work on the next one.</p>'+goalChips(M)+'</div>';
  var tg='<p class="sub">About '+mk(c.sc.now)+' marks now, aiming for '+mk(c.g)+' out of '+T+'.</p>';
  if(!c.steps)h+='<b class="clmh">'+(c.capped?'Every step the app can offer is done':'Target reached')+'</b>'+tg+pips(c)+'<p class="sub">'+(c.capped?'Tap-the-answer practice has taken you as far as it can. The rest of the way to '+mk(c.g)+' comes from timed papers and written work.':'You are where you set out to be. Set the next target when you are ready.')+'</p>';
  else{var st=Math.max(1,r0(Math.min(c.u,c.left))),pl=plan(M,st);
    h+='<b class="clmh">Step '+(c.done+1)+' of '+c.total+'</b>'+tg+pips(c);
    if(c.perDay)h+='<p class="sub">'+EX[M.ex].n+' is '+dTxt(c.d)+'. '+(c.perDay<=4?c.perDay+' step'+(c.perDay>1?'s':'')+' a day gets you there.':'Getting there would need '+c.perDay+' steps a day, which is a lot. Take what you can each day; a nearer target is fine too.')+'</p>';
    else h+='<p class="sub">'+c.steps+' step'+(c.steps>1?'s':'')+' to go. Add the exam date under Exams → Points to see how many a day you need.</p>';
    if(c.capped)h+='<p class="sub">These steps reach about '+mk(c.sc.max)+' marks. The last stretch to '+mk(c.g)+' comes from timed papers and written work.</p>';
    h+='<button class="btn" style="text-align:center" onclick="ptStart(\''+k+'\','+st+')">Take the next step: +'+st+' points · about '+pl.n+' problems</button>'}
  return h+'<p style="margin:8px 0 0"><button class="link" onclick="ptGoalEdit(\''+k+'\')">Change target</button></p></div>'}
/* the same card on each exam's own page, so the next step is always one tap away */
function climbInject(){var h1=app.querySelector('h1');if(!h1||app.querySelector('.clm'))return;var t=h1.textContent,k=null,s=window.CUV&&CUV.sub;
  if(view==='cu'){if(t==='CUET practice')k=keyOf('cuet');else if(s&&CU[s]&&t===CUM[s].ic+' '+CUM[s].n)k='cuet:'+s}
  else if(view==='sat'&&t==='SAT practice')k='sat';else if(view==='isc'&&t==='ISC board exam')k=keyOf('brd');else if(view==='ash'&&t==='Ashoka University')k='ash';
  if(!k)return;var a=h1.nextElementSibling;(a&&a.classList.contains('sub')?a:h1).insertAdjacentHTML('afterend',climbHtml(model(k)))}
function today(k){var l=P().log[dkey()]||{};return l[k]||{p:0,n:0,ok:0}}
function best(k){var b=0,L=P().log;Object.keys(L).forEach(function(d){if(L[d][k]&&L[d][k].p>b)b=L[d][k].p});return b}
function daysTo(ex){var d=P().dates[ex];if(!d)return null;var n=Math.round((new Date(d+'T00:00:00')-new Date(dkey()+'T00:00:00'))/864e5);return isNaN(n)||n<0?null:n}
function nearest(){var b=null;Object.keys(EX).forEach(function(ex){var d=daysTo(ex);if(d!=null&&(!b||d<b.d))b={ex:ex,d:d}});return b}
function dTxt(d){return d===0?'today':d===1?'tomorrow':'in '+d+' days'}
window.ptApi={P:P,model:model,score:score,plan:plan,curKey:curKey,nearest:nearest};

/* ---------- navigation ---------- */
GRP.exam=[['pts','Points']].concat(GRP.exam.filter(function(t){return t[0]!=='pts'}));SECN.pts='Points';
var TS=null,PV={tg:null,ge:null};
var _vt=viewTop;viewTop=function(v){_vt(v);if(v==='pts')TS=null};
var _r=render;render=function(){_r();if(view==='pts')ptsView();if(view!=='pts')TS=TS&&TS.done?null:TS;try{climbInject()}catch(e){}ciAuto()};
var _cx=ctxNow;ctxNow=function(){if(view==='pts'&&TS&&TS.cur&&!TS.done&&TS.pick==null)return['Target session · '+TS.cur.tp,'Section: Target session ('+model(TS.k).name+'), chapter '+TS.cur.tp+'. I am in the middle of a question that counts for points, so please do not solve it or tell me which option is right. Help me only with the idea behind this chapter.\n'];
  if(view==='pts'&&TS&&TS.cur&&!TS.done){var q=TS.cur.src,o=TS.cur.kind==='q'?q.o:q.o;return['Target session · '+TS.cur.tp,'Section: Target session ('+model(TS.k).name+')\nChapter: '+TS.cur.tp+'\nQuestion: '+(window.cuPlain?cuPlain(q.q):q.q)+'\nOptions: '+o.join(' | ')+'\n']}if(view==='pts')return['Points','Section: Points and target sessions\n'];return _cx()};

/* ---------- points home ---------- */
function ring(sc,lbl){var p=sc.full>sc.floor?Math.max(0,Math.min(100,(sc.now-sc.floor)/(sc.full-sc.floor)*100)):0;return'<div class="ptring" style="--p:'+p.toFixed(1)+'%"><b>'+r0(sc.now)+'<small>'+(lbl||'points')+'</small></b></div>'}
function ptsView(){if(TS)return TS.done?endView():qView();var p=P(),k=curKey(),M=model(k),sc=score(M),u=unit(M),td=today(k),w=wins(),d=daysTo(p.ex);
  var h='<h1>Points</h1><p class="sub">One exam mark is worth 10 points. Your points are the marks you are likely to score, worked out from the questions you now get right here. They are an estimate, never a promise.</p>';
  h+='<div class="seg seg3" role="tablist" aria-label="Exam">'+Object.keys(EX).map(function(e){return'<button role="tab" aria-selected="'+(p.ex===e)+'" onclick="ptEx(\''+e+'\')">'+EX[e].n+'</button>'}).join('')+'</div>';
  if(M.sub)h+='<select aria-label="Subject" onchange="ptSub(this.value)">'+Object.keys(CU).map(function(s){return'<option value="'+s+'"'+(M.sub===s?' selected':'')+'>'+esc(CUM[s].n)+'</option>'}).join('')+'</select>';
  h+='<div class="card ptcard"><div class="pthd">'+ring(sc)+'<div class="ptx"><div class="eyebrow">'+esc(M.name)+'</div><div class="big">'+r0(sc.now)+' of '+sc.full+' points</div><p>'+(d!=null?'Exam '+dTxt(d)+'. ':'')+'That is about '+r0(sc.now/10)+' marks out of '+M.E.tot+'.</p></div></div>';
  h+='<div style="margin-top:10px"><div class="ptline"><span>Fair chance of</span><b>'+r0(sc.now)+' points</b></div><div class="ptline"><span>Good chance of at least</span><b>'+r0(sc.good)+' points</b></div><div class="ptline"><span>Practice here can take you to</span><b>'+r0(sc.max)+' points</b></div></div></div>';
  h+=climbHtml(M);
  /* target */
  var av=plan(M,1e9).avail,opts=[1,2,3,5].map(function(m){return m*u}).filter(function(v){return v<=av+1});if(!opts.length&&av>1)opts=[r0(av)];
  if(PV.tg==null||opts.indexOf(PV.tg)<0)PV.tg=opts[Math.min(1,opts.length-1)]||0;
  h+='<div class="card hi"><b>Target session</b>';
  if(!opts.length)h+='<p class="sub" style="margin:4px 0 0">Every question the app has for this exam is already banked. Sample papers and written practice are the way to more marks now.</p>';
  else{var pl=plan(M,PV.tg);h+='<p class="sub" style="margin:4px 0 0">Pick how many points to add in this sitting. The session keeps going, cheapest points first, until you get there.</p><div class="ptchips" role="group" aria-label="Target">'+opts.map(function(v){return'<button class="chipb'+(v===PV.tg?' on':'')+'" aria-pressed="'+(v===PV.tg)+'" onclick="ptTg('+v+')">+'+v+'</button>'}).join('')+'</div>';
    h+='<div class="ptest">About <b>'+pl.n+' problems</b>. Fair chance of <b>+'+r0(pl.fair)+' points</b>, good chance of at least <b>+'+r0(pl.good)+'</b>.</div><button class="btn" style="text-align:center" onclick="ptStart(\''+k+'\','+PV.tg+')">Start: add '+PV.tg+' points</button>';
    h+='<p class="sub" style="margin:10px 0 0">Or go by the clock:</p><div class="ptchips">'+[10,25,45].map(function(t){var n=Math.max(3,Math.round(t/2.5)),g=Math.max(1,r0(ptsFor(M,n)));return'<button class="chipb" onclick="ptStart(\''+k+'\','+g+')">'+t+' min · about +'+g+'</button>'}).join('')+'</div>'}
  h+='</div>';
  /* cheapest points */
  var L=open(M).slice(0,4);
  if(L.length){h+='<div class="card"><b>Cheapest points right now</b><p class="sub" style="margin:4px 0 6px">Chapters where one right answer is worth the most.</p>';
    L.forEach(function(x){h+='<button class="ptrow" onclick="ptStart(\''+k+'\','+Math.max(1,r0(x.s.left*x.s.per))+',\''+esc(x.c.n).replace(/'/g,"\\'")+'\')"><b>'+esc(x.c.n)+'</b><em>+'+(x.s.per>=10?r0(x.s.per):x.s.per.toFixed(1))+' each</em><small>'+x.s.left+' right answer'+(x.s.left>1?'s':'')+' left to bank · up to +'+r0(x.s.left*x.s.per)+' points</small></button>'});h+='</div>'}
  /* today */
  var goal=dayGoal(M),gp=Math.min(100,td.p/goal*100),b=best(k);
  h+='<div class="card"><b>Today</b><div class="ptmeta" style="margin-top:6px"><span>'+(td.p>=goal?'Daily goal reached':'Daily goal: +'+goal+' points')+'</span><b>+'+r0(td.p)+'</b></div><div class="ptgoal" style="margin-bottom:8px"><i style="width:'+gp+'%"></i></div><div class="wins"><div class="wrow"><div><b>'+w.streak+'</b><span>day streak</span></div><div><b>'+td.n+'</b><span>target problems</span></div><div><b>+'+r0(b)+'</b><span>best day</span></div></div></div></div>';
  /* dates */
  h+='<div class="card"><b>Exam dates</b><p class="sub" style="margin:4px 0 8px">Add the dates you know. The plan at the start of each day changes as an exam gets close.</p><div class="ptdates">'+Object.keys(EX).map(function(e){var dd=daysTo(e);return'<label>'+EX[e].n+(dd!=null?' · '+dTxt(dd):'')+'<input type="date" value="'+esc(p.dates[e]||'')+'" onchange="ptDate(\''+e+'\',this.value)" aria-label="'+EX[e].n+' date"></label>'}).join('')+'</div></div>';
  /* all chapters + method */
  h+='<details class="card"><summary>All chapters</summary><table class="pttab">'+M.order.map(function(t){var c=M.ch[t],s=stat(c);return'<tr><td>'+esc(c.n)+'<div class="ptbar" style="margin-top:4px"><i style="width:'+(s.m*100)+'%"></i></div></td><td>'+r0(10*c.w*RF*s.m)+' / '+r0(10*c.w)+'</td></tr>'}).join('')+'</table></details>';
  h+='<details class="card"><summary>How points are worked out</summary><p class="sub" style="margin:8px 0 0">Each chapter carries a share of the paper’s marks'+(M.sub==='math'&&M.ex!=='cuet'&&M.ex!=='sat'?', following the published unit weightage (approximate for the school exam, since school papers vary)':', spread evenly because no chapter weightage is published for this paper')+'. A chapter counts as banked when '+'you have answered enough different questions in it correctly (up to 8). A question you later get wrong stops counting until you get it right again.</p><p class="sub" style="margin:8px 0 0">Only '+Math.round(RF*100)+'% of a chapter’s marks can be banked here, because tapping an answer is easier than writing a full solution. The rest comes from sample papers, notebook checks and school work. “Fair chance” is the estimate itself; “good chance” is a cautious three-quarters of it.'+(M.ex==='sat'?' The SAT figure starts from the 400 that every paper scores.':'')+'</p></details>';
  app.innerHTML=h}
window.ptEx=function(e){P().ex=e;PV.tg=null;save();render()};
window.ptSub=function(s){var p=P();p.sub[p.ex]=s;PV.tg=null;save();render()};
window.ptTg=function(v){PV.tg=v;ptsView()};
window.ptDate=function(e,v){P().dates[e]=v||'';save();render()};
window.ptGoal=function(k,v){P().goal[k]=v||0;PV.ge=null;save();render()};
window.ptGoalEdit=function(k){PV.ge=PV.ge===k?null:k;render()};

/* ---------- target session ---------- */
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
window.ptStart=function(k,target,focus){var p=P(),M=model(k);p.ex=M.ex;if(M.sub)p.sub[M.ex]=M.sub;
  TS={k:k,target:target,focus:focus||null,got:0,n:0,ok:0,seen:{},by:{},cur:null,pick:null,gain:0,ms:null,done:false,base:score(M).now,planN:plan(M,target,focus).n};
  if(!nextQ()){TS=null;showToast(Object.keys(P().miss).some(missedToday)?'The questions left there were missed today. They open again tomorrow.':'Nothing left to bank there. Pick another chapter or exam.');if(view==='pts')render();return}
  if(view!=='pts')goView('pts');else render();window.scrollTo(0,0)};
function nextQ(){var M=model(TS.k),L=open(M,TS.focus).slice(0,TS.focus?1:3);if(!L.length)return false;
  L.sort(function(a,b){return(TS.by[a.c.n]||0)-(TS.by[b.c.n]||0)||b.s.per-a.s.per});
  for(var i=0;i<L.length;i++){var c=L[i].c,pool=c.q.filter(function(o){return!TS.seen[o.id]&&!lastOk(o)&&!missedToday(o.id)});if(!pool.length)continue;
    var fresh=pool.filter(function(o){return P().d[o.id]==null}),o=shuf(fresh.length?fresh:pool)[0];
    TS.cur={id:o.id,kind:o.kind,ix:o.ix,src:o.src,tp:c.n,per:L[i].s.per,pm:o.src.fx?[0,1,2,3]:shuf([0,1,2,3])};TS.pick=null;TS.seen[o.id]=1;TS.by[c.n]=(TS.by[c.n]||0)+1;return true}
  /* every open question in the top chapters was already shown this session: allow repeats of missed ones */
  var any=open(M,TS.focus);for(var j=0;j<any.length;j++){var pl=any[j].c.q.filter(function(o){return!lastOk(o)&&!missedToday(o.id)&&(!TS.cur||o.id!==TS.cur.id)});if(pl.length){var o2=shuf(pl)[0];TS.cur={id:o2.id,kind:o2.kind,ix:o2.ix,src:o2.src,tp:any[j].c.n,per:any[j].s.per,pm:o2.src.fx?[0,1,2,3]:shuf([0,1,2,3])};TS.pick=null;return true}}
  return false}
function qView(){var M=model(TS.k),c=TS.cur,q=c.src,done=TS.pick!=null,ok=done&&c.pm[TS.pick]===q.a,pc=Math.min(100,TS.got/TS.target*100);
  var h='<p class="back"><button class="link" onclick="ptStop()">← Stop here</button></p><div class="ptmeta"><span>'+esc(M.name)+' · '+esc(c.tp)+'</span><b>+'+r0(TS.got)+' / '+TS.target+'</b></div><div class="ptgoal"><i style="width:'+pc+'%"></i></div>';
  if(c.kind==='cu'&&q.ps)h+=cuPasBox(q,1);
  h+='<div class="card"><div class="ptmeta"><span>Problem '+(TS.n+(done?0:1))+'</span><span>Worth <b>+'+(c.per>=10?r0(c.per):c.per.toFixed(1))+'</b> if right</span></div><div class="q cuq">'+(c.kind==='q'||c.kind==='ash'?esc(q.q):cuTxt(q.q))+'</div>';
  c.pm.forEach(function(oi,i){var cl='';if(done){if(oi===q.a)cl=' ok';else if(i===TS.pick)cl=' bad'}h+='<button class="opt'+cl+'" onclick="ptAns('+i+')"'+(done?' disabled':'')+'>'+esc(q.o[oi])+'</button>'});
  if(done){var ex=c.kind==='q'?q.h:q.k,fin=TS.got>=TS.target-.01;
    h+='<div class="fb '+(ok?'ok':'bad')+'"><b>'+(ok?'<span class="ptwin">+'+(TS.gain>=10?r0(TS.gain):TS.gain.toFixed(1))+' points banked.</span>':'Not this time. Nothing lost: it opens again tomorrow, to bank from memory.')+'</b> '+esc(ex)+'</div>';
    if(TS.ms)h+='<div class="ptms">Milestone: '+TS.ms+' points in '+esc(M.name)+'</div>';
    h+='<button class="btn" onclick="ptNext()">'+(fin?'See what you banked':'Next problem')+'</button><button class="btn alt chatb" onclick="askOpen()">'+CHAT_ICON+'Ask Claude about this</button>'}
  app.innerHTML=h+'</div>'}
window.ptAns=function(i){if(!TS||TS.pick!=null)return;var M=model(TS.k),c=TS.cur,q=c.src,oi=c.pm[i],ok=oi===q.a,p=P(),before=score(M).now;TS.pick=i;TS.n++;
  p.d[c.id]=ok?1:0;
  if(ok)delete p.miss[c.id];else{var dk0=dkey();Object.keys(p.miss).forEach(function(k){if(p.miss[k]!==dk0)delete p.miss[k]});p.miss[c.id]=dk0}
  try{if(c.kind==='cu'){cuMark(q,ok);if(!ok)cuMk(q,oi,'Target session');S.ev.push({k:'q',topic:M.name+' · '+q.tp,ok:ok,habit:'',type:'target',ts:Date.now()})}
    else if(c.kind==='sat'){satMark(q,ok,q.o[oi]);S.ev.push({k:'q',topic:'SAT '+SATM[q.sec].n+' · '+q.tp,ok:ok,habit:'',type:'target',ts:Date.now()})}
    else if(c.kind==='ash'){if(!S.ash)S.ash={st:{},es:[],mocks:[]};if(!S.ash.st)S.ash.st={};S.ash.st[c.ix]=ok?1:0;S.ev.push({k:'q',topic:'Ashoka · '+c.tp,ok:ok,habit:'',type:'target',ts:Date.now()})}
    else{var tag=ok?'':(q.t[oi]||'Careless slip');S.ev.push({k:'q',p:q.p,l:q.l,ok:ok,tag:tag,q:q.q.slice(0,90),pick:ok?'':q.o[oi],ts:Date.now(),g:0});
      if(ok)mkFix('q:'+q.q);else{S.w[tag]=(S.w[tag]||0)+2;mkAdd({src:'Target session',topic:NM[q.p]||q.p,q:q.q,o:q.o,a:q.a,pick:oi,habit:tg(tag)[0],h:q.h,ref:'q:'+q.q})}}}catch(e){}
  var after=score(M).now;TS.gain=Math.max(0,after-before);TS.got+=TS.gain;if(ok)TS.ok++;
  var dk=dkey(),lg=p.log[dk]||(p.log[dk]={}),t=lg[TS.k]||(lg[TS.k]={p:0,n:0,ok:0});t.p+=TS.gain;t.n++;if(ok)t.ok++;
  var ks=Object.keys(p.log).sort();while(ks.length>60)delete p.log[ks.shift()];
  var step=unit(M)*2.5,f=(M.E.floor||0)*10,m0=Math.floor((before-f)/step),m1=Math.floor((after-f)/step);TS.ms=m1>m0?r0(f+m1*step):null;
  save();qView()};
window.ptNext=function(){if(!TS)return;if(TS.got>=TS.target-.01||!nextQ()){TS.done=true;TS.out=TS.got<TS.target-.01}render();window.scrollTo(0,0)};
window.ptStop=function(){if(!TS)return;if(!TS.n){TS=null;render();return}TS.done=true;TS.stopped=true;render();window.scrollTo(0,0)};
function sumText(){var M=model(TS.k),sc=score(M);return'Study Buddy target session ('+new Date().toLocaleDateString()+')\n'+M.name+': +'+r0(TS.got)+' points from '+TS.n+' problems ('+TS.ok+' right).\nForecast now: '+r0(sc.now)+' of '+sc.full+' points, about '+r0(sc.now/10)+' marks out of '+M.E.tot+'. This is an estimate from practice in the app.'+(function(){var c=climb(M);return c.g?'\n'+c.done+' of '+c.total+' steps done towards '+r0(c.g/10)+' marks.':''})()}
window.ptSum=sumText;
function endView(){var M=model(TS.k),sc=score(M),hit=TS.got>=TS.target-.01,td=today(TS.k),goal=dayGoal(M),nx=open(M)[0];
  var waitN=Object.keys(P().miss).filter(missedToday).length;
  var h='<h1>'+(hit?'Target reached':TS.out?(waitN?'That is all for today':'Everything here is banked'):'Session stopped')+'</h1><div class="card ptcard ptend"><div class="n">+'+r0(TS.got)+'</div><div>points banked'+(hit?'':' of the '+TS.target+' you aimed for')+'</div><p class="sub" style="margin:8px 0 0">'+TS.n+' problems, '+TS.ok+' right'+(TS.n>TS.ok?'. The '+(TS.n-TS.ok)+(M.ex==='sat'||M.ex==='ash'?' missed are still open to bank':' missed are saved in Mistakes, and still open to bank'):'')+'.'+(waitN?' Questions missed today open again tomorrow.':'')+'</p></div>';
  h+='<div class="card"><div class="ptmini">'+ring(sc)+'<div class="ptx"><div class="eyebrow">'+esc(M.name)+'</div><div class="big">'+r0(TS.base)+' → '+r0(sc.now)+' points</div><p>About '+r0(sc.now/10)+' marks out of '+M.E.tot+'. '+(td.p>=goal?'Daily goal reached.':'Today: +'+r0(td.p)+' of '+goal+'.')+'</p></div></div></div>';
  if(goalOf(M))h+=climbHtml(M);else if(nx)h+='<button class="btn" style="text-align:center" onclick="ptStart(\''+TS.k+'\','+unit(M)+')">Another +'+unit(M)+' points</button>';
  h+='<div class="row2"><a class="btn wa" style="text-decoration:none;display:flex;align-items:center;justify-content:center;gap:6px;box-sizing:border-box" target="_blank" rel="noopener" href="https://wa.me/'+(S.tw||'')+'?text='+encodeURIComponent(sumText())+'">'+WAI+'Send to tutor</a><button class="btn alt" onclick="ptDone()">Done</button></div>';
  app.innerHTML=h}
window.ptDone=function(){TS=null;render();window.scrollTo(0,0)};

/* ---------- calm cards: short pieces in the app's own words ---------- */
var SP='https://open.spotify.com/search/',WK='https://commons.wikimedia.org/w/index.php?search=';
var CALM=[
['Painting','Impression, Sunrise · Claude Monet, 1872','A harbour at dawn, almost nothing but blue-grey mist. Two small boats are dark strokes on the water, and one orange sun, no bigger than a coin, lays a broken orange path towards you. Critics mocked the title, and the mockery gave Impressionism its name.','See the painting',WK+'Impression+Sunrise+Monet'],
['Painting','The Great Wave off Kanagawa · Hokusai, about 1831','A wave rears up like a claw, its foam breaking into small fingers above three low boats. Far behind, tiny and perfectly still, sits Mount Fuji. Everything in the print is moving except the one thing that matters most.','See the print',WK+'Great+Wave+off+Kanagawa'],
['Painting','The Starry Night · Vincent van Gogh, 1889','A village sleeps under a sky that will not keep still. The stars are whirlpools of yellow, a dark cypress climbs like a flame, and one church spire stands thin and quiet. He painted it from memory, from the view out of his window.','See the painting',WK+'Starry+Night+van+Gogh'],
['Painting','The Milkmaid · Johannes Vermeer, about 1658','A woman pours milk from a jug into a bowl. That is all. Light comes in from the window on the left and rests on bread, a blue apron and a white wall. Nothing hurries; the thin stream of milk is the only thing in motion.','See the painting',WK+'The+Milkmaid+Vermeer'],
['Painting','Bharat Mata · Abanindranath Tagore, 1905','A calm figure in saffron stands against a soft, washed sky. In her four hands she holds a book, sheaves of paddy, a piece of white cloth and a string of beads: learning, food, clothing and faith. It is painted so gently that it feels more like a blessing than a banner.','See the painting',WK+'Bharat+Mata+Abanindranath+Tagore'],
['From a novel','Swami and Friends · R. K. Narayan, 1935','It is Monday morning in Malgudi, and Swaminathan does not want to open his eyes. Monday means school after the long freedom of the weekend. The whole small town, its river, its streets and its one cricket-mad group of friends, begins from that very ordinary reluctance.','',''],
['From a novel','The Wind in the Willows · Kenneth Grahame, 1908','Mole has been spring-cleaning his little home all morning. Suddenly he throws down his brush, scrabbles up through the earth into sunlight, and wanders until he meets a river for the first time in his life. He sits on the bank, simply watching it go by.','',''],
['From a novel','Pride and Prejudice · Jane Austen, 1813','Her sister is ill at a house three miles away, and there is no carriage to spare. So Elizabeth Bennet walks, alone, across wet fields, jumping stiles and puddles. She arrives with muddy skirts and a face bright from the exercise, and does not much care who disapproves.','',''],
['From a story','Kabuliwala · Rabindranath Tagore, 1892','Five-year-old Mini cannot stop talking, and the tall fruit-seller from Kabul is the one grown-up who always has time to listen. Every day they share the same small joke and laugh as if it were new. The story is about how a stranger can carry a child’s memory across years and borders.','',''],
['Film scene','Pather Panchali · Satyajit Ray, 1955','A brother and sister wander far from home into a field of tall white kaash flowers. They hear a hum in the wires, then a rumble. They run, and through the swaying white plumes a train appears, pouring black smoke across the sky. It is the first train they have ever seen.','',''],
['Film scene','My Neighbour Totoro · Hayao Miyazaki, 1988','Two sisters wait at a country bus stop in the rain, at night. A huge furry creature comes to stand beside them with only a leaf on his head. The older girl lends him an umbrella. He discovers the sound of raindrops drumming on it, and his delight shakes the whole tree.','',''],
['Film scene','The Sound of Music · 1965','The camera drifts over snow peaks, lakes and green valleys, with only wind for sound. It comes lower and lower until it finds one small figure on an open hilltop. She spreads her arms, spins, and the music arrives all at once.','',''],
['Film scene','Lagaan · 2001','The village has waited for rain through a cruel summer. One afternoon dark clouds roll in over the dry fields. Everyone runs outside, drums start, and the whole village dances under the sky, faces turned up, sure that this time it will pour.','',''],
['Music','Clair de lune · Claude Debussy','A piano piece that sounds like moonlight on still water. It begins so softly that you lean in, opens out into rippling notes in the middle, and then returns to the hush it started with. About five minutes.','Play on Spotify',SP+encodeURIComponent('Debussy Clair de lune')],
['Music','Gymnopédie No. 1 · Erik Satie, 1888','Three slow beats in the left hand, over and over, like a calm walk. Above them a melody takes its time and never raises its voice. It is the musical version of sitting by a window with nothing to do.','Play on Spotify',SP+encodeURIComponent('Satie Gymnopedie No 1')],
['Music','Prelude in C major · J. S. Bach','No tune at all, only one pattern of rising notes repeated in every bar while the chord beneath it changes. It is a sequence set to music: the same rule each time, and yet you want to know what comes next.','Play on Spotify',SP+encodeURIComponent('Bach Prelude in C major BWV 846')],
['Music','Raga Yaman','An evening raga, usually among the first that students of Hindustani music learn. It moves slowly and openly, and its one raised note gives it a feeling of quiet hope, like the sky just after sunset.','Play on Spotify',SP+encodeURIComponent('Raga Yaman')]];
var MOODS=[['fresh','Fresh','<circle cx="12" cy="12" r="9"/><path d="M8 14c1 2 7 2 8 0M9 9.5v.5M15 9.5v.5"/>'],['ok','Okay','<circle cx="12" cy="12" r="9"/><path d="M9 15h6M9 9.5v.5M15 9.5v.5"/>'],['tired','Tired','<circle cx="12" cy="12" r="9"/><path d="M8 10h3M13 10h3M10 15.5h4"/>'],['anx','Worried','<circle cx="12" cy="12" r="9"/><path d="M8.5 16c1-1.6 6-1.6 7 0M8 9l2.5 1M16 9l-2.5 1"/>'],['bored','Bored','<circle cx="12" cy="12" r="9"/><path d="M8 15l8-1M8 10h3M13 10h3"/>']];
var PREF={fresh:['From a novel','From a story','Film scene','Painting','Music'],ok:['Painting','From a novel','From a story','Film scene','Music'],tired:['Music','Film scene','Painting'],anx:['Painting','Music','Film scene'],bored:['Film scene','From a novel','From a story','Painting']};
function calmPick(m,skip){var d=new Date(),seed=d.getDate()+d.getMonth()*31+(skip||0),ty=PREF[m]||PREF.ok,t=ty[seed%ty.length],L=CALM.filter(function(c){return c[0]===t});return L[(seed+Math.floor(seed/ty.length))%L.length]}
function calmHtml(c,extra){return'<div class="calm"><small>'+esc(c[0])+'</small><b>'+esc(c[1])+'</b><p>'+esc(c[2])+'</p>'+(c[4]?'<div class="qtr"><a href="'+esc(c[4])+'" target="_blank" rel="noopener">'+esc(c[3])+' →</a></div>':'')+(extra||'')+'</div>'}

/* ---------- today's plan: mood + time + how close the next exam is ---------- */
function planFor(){var p=P(),md=p.mood&&p.mood.day===dkey()?p.mood:null,m=md?md.m:'ok',t=md&&md.t?md.t:25,nx=nearest(),d=nx?nx.d:null,hr=new Date().getHours();
  var ex=nx?nx.ex:p.ex,k=keyOf(ex),M=model(k),n=Math.max(3,Math.round(t/2.5)),openMk=mkList().filter(function(x){return!x.fx}).length,A=[];
  function tgt(nn,lbl){var g=Math.max(1,r0(ptsFor(M,nn)));if(ptsFor(M,nn)>0)A.push([lbl||('Target session: about +'+g+' points'),nn+' problems in '+M.name+', cheapest points first',"ciClose();ptStart('"+k+"',"+g+")"])}
  var mk=['Retry my mistakes',openMk+' still open. Fixing one is the surest mark there is',"ciClose();goView('mk');mkStart()"],cards=['Memory cards','Flip through the red-hot ones, no writing needed',"ciClose();goView('mc');mcRevStart('hot')"],lazy=['Lazy mode','Lie back and tap each next step; the app does the sums',"ciClose();goView('lz')"],paper=['A timed sample paper','The closest thing to the real day',"ciClose();goView('pp')"],base=['Cover the base','One new chapter idea, with worked examples',"ciClose();goView('base')"],fun=['Everyday cases','Spot the idea hiding in a scene from daily life',"ciClose();goView('sj_eco')"],story=['A history story','Read, do not revise',"ciClose();goView('sj_his')"];
  var head,why;
  if(m==='tired'){head='Keep it light today';why='Tired minds learn little from hard problems. A short, easy sitting keeps the habit alive.';A.push(lazy);tgt(Math.min(n,5),'A five-problem sprint');A.push(cards)}
  else if(m==='anx'){head='Start with what you already know';why='A few quick right answers settle the nerves better than any pep talk. Then fix one old mistake.';tgt(Math.min(n,6),'Six problems for quick points');if(openMk)A.push(mk);A.push(cards)}
  else if(m==='bored'){head='Change the flavour first';why='Begin with something that is not a drill, then come back for a short burst of points.';A.push(fun);A.push(story);tgt(Math.min(n,8))}
  else if(d!=null&&d<=2){head='Revise, do not learn new things';why=EX[nx.ex].n+' is '+dTxt(d)+'. What you know now is what you will take in, so polish it.';if(openMk)A.push(mk);A.push(cards);tgt(Math.min(n,8),'A short top-up session')}
  else if(d!=null&&d<=10){head='Bank the cheapest points';why=EX[nx.ex].n+' is '+dTxt(d)+'. The chapters where one right answer is worth most come first.';tgt(n);if(openMk)A.push(mk);if(m==='fresh'&&t>=45)A.push(paper)}
  else{head=m==='fresh'?'A good day to build':'Steady progress';why=(d!=null?EX[nx.ex].n+' is '+dTxt(d)+', so there is time to learn properly. ':'')+'One new idea, then points while it is warm.';if(m==='fresh')A.push(base);tgt(n);if(openMk)A.push(mk)}
  if(hr>=22||hr<5)why+=' It is late, so the short option is the wise one.';
  return{head:head,why:why,acts:A.slice(0,3),nx:nx,mood:md}}
function cdHtml(){var h='';Object.keys(EX).forEach(function(e){var d=daysTo(e);if(d!=null)h+='<span class="cd'+(d<=7?' hot':'')+'">'+EX[e].n+' '+dTxt(d)+'</span>'});return h}
function actsHtml(pl){return pl.acts.map(function(a){return'<button class="trow" onclick="'+a[2]+'"><span class="tn">→</span><span class="tt"><b>'+esc(a[0])+'</b><small>'+esc(a[1])+'</small></span></button>'}).join('')}
/* cards on Today */
var _tv=todayView;todayView=function(){_tv();var a=app.querySelector('.sub');if(!a)return;var p=P(),pl=planFor(),M=model(curKey()),sc=score(M),td=today(curKey()),cl=climb(M),u=cl.g&&cl.steps?Math.max(1,r0(Math.min(cl.u,cl.left))):unit(M),g=plan(M,u);
  var h='<div class="card plan"><div class="eyebrow">Plan for today</div>'+cdHtml()+'<h2>'+esc(pl.head)+'</h2><p class="sub" style="margin:0 0 4px">'+esc(pl.why)+'</p>'+actsHtml(pl)+'<p style="margin:8px 0 0"><button class="link" onclick="ciOpen()">'+(pl.mood?'Change how I feel or how long I have':'Tell the app how you feel today')+'</button></p></div>';
  h+='<div class="card ptcard"><div class="ptmini">'+ring(sc)+'<div class="ptx"><div class="eyebrow">Points · '+esc(M.name)+'</div><div class="big">'+r0(sc.now)+' of '+sc.full+'</div><p>'+(g.n?'About '+g.n+' problems for a fair chance of +'+r0(g.fair)+'.':'All banked here.')+(td.p?' Today +'+r0(td.p)+'.':'')+'</p></div></div><div class="row2"><button class="btn" onclick="'+(g.n?"ptStart('"+curKey()+"',"+u+")":"goView('pts')")+'">'+(g.n?(cl.g&&cl.steps?'Step '+(cl.done+1)+' of '+cl.total+' · +'+u:'Add '+u+' points'):'Open Points')+'</button><button class="btn alt" onclick="goView(\'pts\')">Targets</button></div></div>';
  a.insertAdjacentHTML('afterend',h)};

/* ---------- check-in sheet ---------- */
var CI={m:null,t:25,skip:0,ai:null,busy:false,auto:false};
window.ciOpen=function(){if(document.getElementById('ciSheet'))return;var p=P();if(p.mood&&p.mood.day===dkey()){CI.m=p.mood.m;CI.t=p.mood.t||25}else CI.m=null;CI.ai=null;CI.skip=0;
  var d=document.createElement('div');d.id='ciSheet';d.className='askwrap';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label','Daily check-in');
  d.innerHTML='<div class="askbg" onclick="ciClose()"></div><div class="asksh" id="ciBody"></div>';document.body.appendChild(d);ciDraw()};
window.ciClose=function(){var d=document.getElementById('ciSheet');if(d)d.remove()};
function ciDraw(){var b=document.getElementById('ciBody');if(!b)return;var hr=new Date().getHours(),hi=hr<5?'Still up':hr<12?'Good morning':hr<17?'Good afternoon':'Good evening';
  var h='<div class="askhd"><div><b>'+hi+'</b><small>'+(cdHtml()?'':'Add exam dates under Exams → Points to get a countdown here.')+'</small></div><button class="askx" onclick="ciClose()" aria-label="Close">✕</button></div>'+cdHtml();
  h+='<p style="margin:6px 0 0;font-weight:600">How are you feeling right now?</p><div class="moods" role="group" aria-label="Mood">'+MOODS.map(function(m){return'<button class="mood" aria-pressed="'+(CI.m===m[0])+'" onclick="ciMood(\''+m[0]+'\')"><svg viewBox="0 0 24 24" aria-hidden="true">'+m[2]+'</svg>'+m[1]+'</button>'}).join('')+'</div>';
  h+='<p style="margin:10px 0 0;font-weight:600">How long do you have?</p><div class="seg" role="tablist" aria-label="Time">'+[10,25,45].map(function(t){return'<button role="tab" aria-selected="'+(CI.t===t)+'" onclick="ciTime('+t+')">'+t+' min</button>'}).join('')+'</div>';
  if(CI.m){var c=CI.ai||calmPick(CI.m,CI.skip),pl=planFor();
    h+='<p style="margin:12px 0 0;font-weight:600">First, a minute for your mind</p>'+calmHtml(c,'<div class="qtr"><button class="link" onclick="ciMore()">Show another</button><button class="link" id="ciAiB" onclick="ciAi()">A fresh one from Claude</button></div><div id="ciAiM" class="sub" style="margin:4px 0 0"></div>');
    h+='<div class="plan" style="margin-top:12px"><div class="eyebrow">Then</div><h2>'+esc(pl.head)+'</h2><p class="sub" style="margin:0 0 4px">'+esc(pl.why)+'</p>'+actsHtml(pl)+'</div>'}
  else h+='<p class="sub" style="margin:12px 0 0">Your answer shapes today’s plan. Nobody else sees it.</p>';
  h+='<p style="margin:12px 0 0;display:flex;justify-content:space-between;gap:10px"><button class="link" onclick="ciClose()">'+(CI.m?'Close':'Skip for today')+'</button><button class="link" onclick="ciOff()">'+(P().noask?'Ask me each day':'Don’t ask at the start')+'</button></p>';
  b.innerHTML=h}
function ciKeep(){var p=P();p.mood={day:dkey(),m:CI.m,t:CI.t};save();if(view==='today')try{render()}catch(e){}}
window.ciMood=function(m){CI.m=m;CI.ai=null;ciKeep();ciDraw()};
window.ciTime=function(t){CI.t=t;if(CI.m)ciKeep();ciDraw()};
window.ciMore=function(){CI.skip++;CI.ai=null;ciDraw()};
window.ciOff=function(){var p=P();p.noask=p.noask?0:1;save();ciDraw();showToast(p.noask?'The check-in will wait until you open it from Today.':'The check-in will open once each day.')};
window.ciAi=async function(){if(CI.busy)return;CI.busy=true;var b=document.getElementById('ciAiB'),m=document.getElementById('ciAiM');if(b)b.disabled=true;if(m)m.textContent='Claude is choosing something…';
  try{var s=await getS();if(!s)throw{msg:'Claude is not available here. Open the app while signed in to claude.ai.'};
    var mood={fresh:'fresh and ready',ok:'fine',tired:'tired',anx:'worried about exams',bored:'bored'}[CI.m]||'fine';
    var d=await s.json('A senior-school student is about to study and feels '+mood+'. Give one short piece to rest the mind for a minute before work: describe, in your own words, EITHER a well-known painting, OR a moment from a classic novel or short story, OR a famous film scene, OR a piece of instrumental music. Choose something real, well documented and gentle'+(S.int?'; the student enjoys '+S.int:'')+'. Rules: 45 to 70 words, vivid and calm, present tense. Do not quote any text, dialogue or lyrics from the work; describe it. Do not mention exams, marks or studying. Be accurate about the creator and year, and leave the year out if unsure. Return JSON only: {"kind": "Painting" or "From a novel" or "Film scene" or "Music", "title": "Work · creator, year", "text": "the piece"}',{cache:false});
    if(!d||!d.text)throw{};CI.ai=[d.kind||'A thought',String(d.title||'').slice(0,90),String(d.text).slice(0,600),'','']}
  catch(e){CI.busy=false;if(b)b.disabled=false;if(m)m.textContent=e&&e.msg?e.msg:sampleErr(e);return}
  CI.busy=false;ciDraw()};
function ciAuto(){if(CI.auto||window.ROLE!=='student'||view!=='today')return;var p=P();if(p.noask||(p.mood&&p.mood.day===dkey())||document.getElementById('whoScr')||document.querySelector('.askwrap'))return;CI.auto=true;setTimeout(function(){if(view==='today'&&window.ROLE==='student'&&!document.querySelector('.askwrap')&&!document.getElementById('whoScr'))ciOpen()},600)}
document.addEventListener('keydown',function(ev){if(ev.key==='Escape')ciClose()});
try{render()}catch(e){}
})();
/*PTS-END*/
