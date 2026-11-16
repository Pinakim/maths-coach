
/*ROLE: Student · Tutor · Guest. Only the student's use is recorded. */
(function(){
var K='sb_role',ROLES={student:'Student',tutor:'Tutor',guest:'Guest'};
function rget(){try{var r=localStorage.getItem(K);return ROLES[r]?r:null}catch(e){return null}}
/* only Student is remembered; a tutor or guest session ends when the app closes, so the next launch asks again */
function rset(r){try{if(r==='student')localStorage.setItem(K,r);else localStorage.removeItem(K)}catch(e){}}
window.ROLE=rget()||'pending';
var BASE=null;window.sbSetBase=function(v){BASE=v};/* the student's saved state, kept while a tutor looks around */
/* no write to the student's device copy unless the student is using the app */
var _ls=Storage.prototype.setItem,_lsRaw=_ls;Storage.prototype.setItem=function(k,v){if(k==='coach1'&&ROLE!=='student')return;return _ls.call(this,k,v)};
var _save0=save;
save=function(){if(ROLE==='student')return _save0();
  /* a tutor may still change Settings (interests, report number, theme): only those plain values reach the student's copy */
  if(ROLE==='tutor'&&view==='set'&&BASE){var b=JSON.parse(BASE),chg={},n=0;Object.keys(S).forEach(function(k){var v=S[k];if((v==null||typeof v!=='object')&&b[k]!==v){chg[k]=v;b[k]=v;n++}});
    if(!n)return;BASE=JSON.stringify(b);tPersist(chg)}};
async function tPersist(chg){var st=studentS();
  if(DOC){try{var sn=await DOC.get();if(sn.exists){var r=JSON.parse(sn.data().s||'{}');if(r.ev&&svNewer(r,st))st=_fix0(r)}}catch(e){}}
  Object.keys(chg).forEach(function(k){st[k]=chg[k]});st.sv=Date.now();
  try{_ls.call(localStorage,'coach1',JSON.stringify(st))}catch(e){}
  if(DOC){try{await DOC.set({s:JSON.stringify(st),at:Date.now()})}catch(e){}}}
/* a guest never takes on the student's data, even when the cloud copy arrives late */
var _fix0=fix;fix=function(s){if(ROLE==='guest')return S;var r=_fix0(s);if(ROLE==='tutor')BASE=JSON.stringify(r);return r};
function studentS(){var s=null;try{s=JSON.parse(localStorage.getItem('coach1'))}catch(e){}return s&&s.ev?_fix0(s):EMPTY()}
function flush(){if(ROLE==='student'&&DOC){try{clearTimeout(wt);push()}catch(e){}}}
async function cloud(){if(!DOC||ROLE==='guest')return;var D0=DOC;try{var sn=await DOC.get();if(D0!==DOC)return;if(sn.exists&&ROLE!=='guest'){var r=JSON.parse(sn.data().s||'{}');if(r.ev&&svNewer(r,S)){S=_fix0(r);if(ROLE==='student'){try{_lsRaw.call(localStorage,'coach1',JSON.stringify(S))}catch(e){}}else BASE=JSON.stringify(S);render()}}}catch(e){}}
window.useAs=function(r){flush();var was=ROLE;ROLE=r;rset(r);
  if(r==='guest'){S=EMPTY();try{S=_fix0(S)}catch(e){}S.int='';BASE=null}
  else{S=studentS();BASE=r==='tutor'?JSON.stringify(S):null;if(was==='guest'||was==='pending')cloud()}
  if(typeof mode!=='undefined'){mode=null;GEN=null}
  var w=document.getElementById('whoScr');if(w)w.remove();
  try{applyPrefs()}catch(e){}view='today';render();window.scrollTo(0,0);
  showToast(r==='student'?'Signed in as the student. Progress is saved.':r==='tutor'?(window.sbTutorMsg?sbTutorMsg():'Tutor view. Nothing you do is recorded.'):'Guest. Nothing is saved.')};
var IC={student:'<path d="M3 9l9-4 9 4-9 4z"/><path d="M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4"/>',tutor:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M15 6h6M15 10h6M17 14h4"/>',guest:'<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/>'};
window.whoScreen=function(){if(document.getElementById('whoScr'))return;var d=document.createElement('div');d.className='who';d.id='whoScr';d.setAttribute('role','dialog');d.setAttribute('aria-label','Who is using Study Buddy?');
  d.innerHTML='<div><div class="eyebrow">Study Buddy</div><h1>Who is using the app?</h1><p class="sub">Student is remembered on this device; tutor and guest are asked again next time. Switch any time from Settings.</p>'+
   '<button class="wrole st" onclick="useAs(\'student\')"><span class="wi"><svg viewBox="0 0 24 24">'+IC.student+'</svg></span><span><b>Student</b><small>Practise and learn. Your progress, streak, mistakes and usage log are saved and shared with your tutor’s reports.</small></span></button>'+
   '<button class="wrole" onclick="useAs(\'tutor\')"><span class="wi"><svg viewBox="0 0 24 24">'+IC.tutor+'</svg></span><span><b>Tutor</b><small>See the student’s progress and try any section. Nothing you answer or open is recorded. Settings you change are kept.</small></span></button>'+
   '<button class="wrole" onclick="useAs(\'guest\')"><span class="wi"><svg viewBox="0 0 24 24">'+IC.guest+'</svg></span><span><b>Guest</b><small>Try the app from a blank start. The student’s data is not shown and nothing is saved.</small></span></button></div>';
  document.body.appendChild(d);var f=d.querySelector('button');if(f)f.focus()};
/* banner for tutor and guest, and a switch card at the top of Settings */
function bar(){if(ROLE==='student'||ROLE==='pending')return;var a=document.getElementById('app');if(!a||a.querySelector('.rbar'))return;var e=document.createElement('div');e.className='rbar';
  e.innerHTML='<b>'+ROLES[ROLE]+'</b><span>'+(ROLE==='tutor'?(view==='set'?'Settings you change here are kept. Nothing else is recorded.':(window.sbViewing?sbViewing():'Viewing the student’s progress. Nothing here is recorded.')):'Blank start. Nothing is saved.')+'</span><button class="link" onclick="whoScreen()">Switch</button>';a.insertBefore(e,a.firstChild)}
function setCard(){var a=document.getElementById('app');if(!a||document.getElementById('roleCard'))return;var c=document.createElement('div');c.className='card';c.id='roleCard';
  c.innerHTML='<h2>Who is using the app</h2><p class="sub" style="margin:2px 0 8px">Now: <b>'+(ROLES[ROLE]||'Not chosen')+'</b>. Only the student’s practice is tracked; tutor and guest sessions leave the student’s progress, mistakes and usage log untouched.</p><button class="btn alt" onclick="whoScreen()">Switch user</button>';
  var h1=a.querySelector('h1'),sub=h1&&h1.nextElementSibling;a.insertBefore(c,sub&&sub.nextSibling||a.firstChild)}
var _rR0=render;render=function(){_rR0();try{if(view==='set')setCard();bar()}catch(e){}};
render();
})();
/*ROLE-END*/
