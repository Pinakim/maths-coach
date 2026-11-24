
/*NOTES2: Notes moves to its own tab and covers every subject. Each note is a key idea, an insight, a plain note or a write-up.
  A note is private until the student shares it: the Tutor view lists shared notes only. */
(function(){
var SUBJ=['Maths','Economics','Political Science','Sociology','History','Psychology','Philosophy','English','Other'];
var VSJ={sj_eco:'Economics',sj_pol:'Political Science',sj_soc:'Sociology',sj_his:'History',sj_psy:'Psychology',sj_phi:'Philosophy',sj_en1:'English',sj_en2:'English'};
var TY={idea:['Key idea','Key ideas'],insight:['Insight','Insights'],note:['Note','Notes'],wu:['Write-up','Write-ups']};
var LOCK='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
var OPEN='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9.5" r="2.3"/><path d="M16 14.5c2.8.2 5 2.5 5 5.5"/></svg>';
var PEN='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>';
function RO(){return window.ROLE==='tutor'}
function sjOf(n){return SUBJ.indexOf(n.sj)>=0?n.sj:'Maths'}
function tyOf(n){return TY[n.ty]?n.ty:'note'}
function txt(n){return((n.b||'')+(n.tx?(n.b?'\n':'')+n.tx:'')).trim()}
function viewSj(){return VSJ[view]||(grpOf(view)==='maths'?'Maths':'Other')}
/* everything the current viewer may see: a tutor sees no notes at all */
window.ntShown=function(){var L=ntList();return RO()?[]:L};
ntGet=function(id){return ntShown().filter(function(n){return n.id===id})[0]};
NTV.sj='All';NTV.ty='All';NTV.shf=0;NTV.wu=null;NTV.last='Maths';

/* ---------- navigation: Notes becomes a top-level tab ---------- */
GRP.maths=GRP.maths.filter(function(t){return t[0]!=='nt'});
if(window.MSEC)MSEC.forEach(function(s){s[2]=s[2].filter(function(v){return v!=='nt'})});
var ng={};Object.keys(GRP).forEach(function(k){if(k==='set')ng.notes=[['nt','Notes']];ng[k]=GRP[k]});if(!ng.notes)ng.notes=[['nt','Notes']];GRP=ng;
TABN.notes='Notes';SECN.nt='Notes';
var nav=document.getElementById('topnav'),setTab=nav.querySelector('[data-g="set"]'),tb=document.createElement('button');
tb.className='tab';tb.setAttribute('data-g','notes');
tb.innerHTML='<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h5"/></svg>Notes';
tb.onclick=function(){goView('nt')};nav.insertBefore(tb,setTab);
try{document.documentElement.style.setProperty('--navh',nav.offsetHeight+'px')}catch(e){}
var _vt=viewTop;viewTop=function(v){_vt(v);if(v==='nt')NTV.wu=null};

/* a tutor never meets memory cards made from private notes */
var _mc=mcAll;mcAll=function(){var a=_mc();if(!RO())return a;return a.filter(function(m){return String(m.id).indexOf('n:')!==0})};

/* ---------- list ---------- */
function filt(skipTy){var q=NTV.q.toLowerCase();
  return ntShown().filter(function(n){return(NTV.sj==='All'||sjOf(n)===NTV.sj)&&(skipTy||NTV.ty==='All'||tyOf(n)===NTV.ty)&&(NTV.sj!=='Maths'||NTV.ch==='All'||n.ch===NTV.ch)&&(!NTV.st||n.st)&&(!NTV.shf||n.sh)&&(!q||(n.t+' '+txt(n)+' '+(n.ch||'')).toLowerCase().indexOf(q)>=0)})}
function lockPill(n){return n.sh?'<span class="nt2lock sh">'+OPEN+'Shared</span>':'<span class="nt2lock">'+LOCK+'Private</span>'}
function chip(on,js,lbl,n){return'<button class="chipb'+(on?' on':'')+'" aria-pressed="'+!!on+'" onclick="'+js+'">'+lbl+(n!=null?'<small>'+n+'</small>':'')+'</button>'}
ntView=function(){if(NTV.wu)return wuView();if(NTV.ed&&!RO())return ntEdit();NTV.ed=null;if(NTV.open){var n=ntGet(NTV.open);if(n)return ntOne(n);NTV.open=null}ntHome()};
ntHome=function(){var L=ntShown(),ro=RO(),shown=filt().sort(function(a,b){return(b.st?1:0)-(a.st?1:0)||b.up-a.up});
  var h='<h1>'+'Notes'+'</h1><p class="sub">'+(ro?'Notes belong to the student. They are not shown in Tutor view.':'Key ideas and insights from every subject, kept as your own write-up. Your tutor never sees your notes.')+'</p>';
  if(!ro){h+='<div class="nt2new"><button class="btn" onclick="ntNew(\'text\',\'idea\')">Key idea<small>A rule, definition or method worth keeping</small></button><button class="btn in" onclick="ntNew(\'text\',\'insight\')">Insight<small>Something that finally clicked, in your words</small></button></div>';
    h+='<div class="nt2more">'+chip(0,"ntNew('text','note')",'Aa Plain note')+chip(0,"ntNew('ink','note')",'✎ Handwrite')+chip(0,"ntNew('photo','note')",'◉ Photo')+'</div>'}
  if(L.length){var sj={},ty={},nsh=0;L.forEach(function(n){sj[sjOf(n)]=(sj[sjOf(n)]||0)+1;if(n.sh)nsh++});
    filt(1).forEach(function(n){ty[tyOf(n)]=(ty[tyOf(n)]||0)+1});
    h+='<div class="ntfil"><input class="field" id="ntQ" type="search" placeholder="Search notes" value="'+esc(NTV.q)+'" aria-label="Search notes">'+chip(NTV.st,'NTV.st=NTV.st?0:1;ntHome()','★ Starred')+'</div>';
    h+='<div class="nt2chips" role="group" aria-label="Subject">'+chip(NTV.sj==='All',"NTV.sj='All';ntHome()",'All subjects',L.length)+SUBJ.filter(function(s){return sj[s]}).map(function(s){return chip(NTV.sj===s,"NTV.sj='"+s+"';NTV.ch='All';ntHome()",s,sj[s])}).join('')+'</div>';
    h+='<div class="nt2chips" role="group" aria-label="Kind of note">'+chip(NTV.ty==='All',"NTV.ty='All';ntHome()",'All kinds')+Object.keys(TY).filter(function(k){return ty[k]||NTV.ty===k}).map(function(k){return chip(NTV.ty===k,"NTV.ty='"+k+"';ntHome()",TY[k][1],ty[k]||0)}).join('')+(!ro&&nsh?chip(NTV.shf,'NTV.shf=NTV.shf?0:1;ntHome()','Shared',nsh):'')+'</div>';
    if(NTV.sj==='Maths'){var chs={};L.forEach(function(n){if(sjOf(n)==='Maths')chs[n.ch]=(chs[n.ch]||0)+1});
      h+='<select aria-label="Chapter" onchange="NTV.ch=this.value;ntHome()"><option value="All">All maths chapters</option>'+Object.keys(chs).sort().map(function(c){return'<option value="'+esc(c)+'"'+(c===NTV.ch?' selected':'')+'>'+esc(c)+' ('+chs[c]+')</option>'}).join('')+'</select>'}}
  if(!L.length)h+='<div class="card"><b>'+(ro?'Nothing shared yet':'No notes yet')+'</b><p class="sub" style="margin:4px 0 0">'+(ro?'When the student shares a note, it appears here.':'Good first notes: the one idea a chapter turns on, a step that finally made sense, or a link you noticed between two subjects. The pencil button on any screen saves one without leaving the page.')+'</p></div>';
  else if(!shown.length)h+='<div class="card"><p class="sub" style="margin:0">No notes match.</p></div>';
  var nw=shown.filter(function(n){return tyOf(n)!=='wu'}).length;
  if(nw)h+='<button class="btn alt nt2wu" style="text-align:center" onclick="wuOpen()">Read '+(nw===1?'this note':'these '+nw+' notes')+' as one write-up</button>';
  h+='<div class="ntgrid">'+shown.map(function(n){var src=ntSrc(n),t=tyOf(n),p=txt(n);
    return'<button class="ntc '+t+'" onclick="NTV.open=\''+n.id+'\';ntView();window.scrollTo(0,0)">'+(src?'<img src="'+esc(src)+'" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement(\'div\'),{className:\'ntph\',textContent:\'Image not available here\'}))">':'')+
      '<span class="ntm"><span class="nt2top"><span><span class="nt2tag '+t+'">'+TY[t][0]+'</span></span>'+lockPill(n)+'</span><b>'+(n.st?'★ ':'')+esc(n.t||'Untitled')+'</b><small>'+esc(sjOf(n))+(n.ch&&n.ch!=='General'?' · '+esc(n.ch):'')+' · '+ntWhen(n.up)+'</small>'+(p?'<span class="ntp">'+esc(p.slice(0,140))+'</span>':'')+'</span></button>'}).join('')+'</div>';
  app.innerHTML=h;var qi=document.getElementById('ntQ');if(qi){qi.oninput=function(){NTV.q=this.value;var p=this.selectionStart;ntHome();var x=document.getElementById('ntQ');x.focus();try{x.setSelectionRange(p,p)}catch(e){}}}};

/* ---------- new / edit ---------- */
ntNew=function(k,ty,pre){if(RO())return;pre=pre||{};var sj=pre.sj||(NTV.sj!=='All'?NTV.sj:NTV.last);
  var ch=sj==='Maths'?(NTV.ch!=='All'&&NCH.indexOf(NTV.ch)>=0?NTV.ch:'General'):'';
  NTV.ed={id:null,k:k||'text',t:'',ch:pre.ch||ch,b:'',img:null,blob:null,prev:null,ty:TY[ty]?ty:'note',sj:sj,src:pre.src||''};NTV.open=null;NTV.wu=null;
  if(view!=='nt'){view='nt';render()}else ntEdit();window.scrollTo(0,0)};
var _ed=ntEdit;
ntEdit=function(){var e=NTV.ed;if(!e.ty)e.ty='note';if(!e.sj)e.sj='Maths';
  var keep=e.ch;if(e.sj!=='Maths'&&NCH.indexOf(e.ch)<0)e.ch='General';_ed();e.ch=keep;
  var card=app.querySelector('.card'),T=document.getElementById('ntT'),C=document.getElementById('ntCh');if(!card||!T||!C)return;card.classList.add('nt2ed');
  var h1=app.querySelector('h1');if(h1&&!e.id&&e.k==='text')h1.textContent='New '+TY[e.ty][0].toLowerCase();
  T.insertAdjacentHTML('beforebegin','<div class="seg seg3" role="tablist" aria-label="Kind of note" id="ntTy">'+['idea','insight','note'].concat(e.ty==='wu'?['wu']:[]).map(function(k){return'<button type="button" role="tab" data-ty="'+k+'" aria-selected="'+(e.ty===k)+'">'+TY[k][0]+'</button>'}).join('')+'</div>');
  C.insertAdjacentHTML('beforebegin','<label for="ntSj">Subject</label><select id="ntSj">'+SUBJ.map(function(s){return'<option'+(s===e.sj?' selected':'')+'>'+s+'</option>'}).join('')+'</select><label for="ntCh" id="ntChL">Chapter</label>');
  C.insertAdjacentHTML('afterend','<label for="ntTp" id="ntTpL">Chapter or topic (optional)</label><input class="field" id="ntTp" value="'+esc(e.sj!=='Maths'&&e.ch&&e.ch!=='General'?e.ch:'')+'" placeholder="e.g. Social contract">');
  var sv=document.getElementById('ntSave');if(sv)sv.insertAdjacentHTML('beforebegin','<p class="nt2priv">'+LOCK+(e.id&&(ntGet(e.id)||{}).sh?'This note is shared. You can make it private again from the note.':'Private. Nobody else sees this until you choose to share it.')+'</p>');
  function sync(){var m=document.getElementById('ntSj').value==='Maths';C.hidden=!m;document.getElementById('ntChL').hidden=!m;document.getElementById('ntTp').hidden=m;document.getElementById('ntTpL').hidden=m;
    var B=document.getElementById('ntB');T.placeholder=e.ty==='idea'?'The idea in a few words':e.ty==='insight'?'What clicked?':'Title';
    if(B)B.placeholder=e.ty==='idea'?'State the idea, then why it matters or where it is used.':e.ty==='insight'?'Write it the way you would explain it to a friend. What did you think before, and what do you see now?':e.ty==='wu'?'Your write-up…':'Write your note…'}
  document.getElementById('ntSj').onchange=sync;
  document.querySelectorAll('#ntTy button').forEach(function(b){b.onclick=function(){e.ty=b.dataset.ty;document.querySelectorAll('#ntTy button').forEach(function(o){o.setAttribute('aria-selected',o===b)});sync()}});sync()};
var _gr=ntGrab;
ntGrab=function(){_gr();var e=NTV.ed,s=document.getElementById('ntSj'),tp=document.getElementById('ntTp');if(s){e.sj=s.value;if(e.sj!=='Maths')e.ch=(tp&&tp.value.trim().slice(0,60))||'General';else if(NCH.indexOf(e.ch)<0)e.ch='General'}};
var _sv=ntSave;
ntSave=async function(){var e=NTV.ed;if(!e||RO())return;await _sv();if(NTV.ed)return;/* still editing: nothing was saved */
  var n=ntGet(e.id||NTV.open);if(!n)return;n.sj=e.sj;n.ty=e.ty;if(e.src)n.src=e.src;if(n.sh==null)n.sh=0;NTV.last=e.sj;save();ntView()};
ntEditOpen=function(id){var n=ntGet(id);if(!n||RO())return;NTV.ed={id:n.id,k:n.k,t:n.t,ch:n.ch,b:n.b||'',img:n.img,blob:null,prev:null,ty:tyOf(n),sj:sjOf(n),src:n.src||''};ntEdit();window.scrollTo(0,0)};

/* ---------- one note ---------- */
function noteText(n){var p=txt(n),t=TY[tyOf(n)][0]+' · '+sjOf(n)+(n.ch&&n.ch!=='General'?' · '+n.ch:'')+'\n'+n.t+'\n';
  if(p&&p!==n.t)t+='\n'+p+'\n';else if(!p)t+='\n(A handwritten or photo note. Open it in the app to see the page.)\n';return t.slice(0,3500)}
window.ntNoteText=noteText;
ntOne=function(n){var src=ntSrc(n),ro=RO(),t=tyOf(n),id=n.id;
  var h='<p class="back"><button class="link" onclick="NTV.open=null;ntView()">← All notes</button></p><div class="nt2top"><span><span class="nt2tag '+t+'">'+TY[t][0]+'</span></span>'+lockPill(n)+'</div><div class="eyebrow">'+esc(sjOf(n))+(n.ch&&n.ch!=='General'?' · '+esc(n.ch):'')+' · '+ntKind(n)+' · '+ntWhen(n.up)+'</div><h1>'+esc(n.t)+'</h1>';
  h+='<div class="card ntbody">'+(src?'<img class="ntimg" src="'+esc(src)+'" alt="'+esc(n.t)+'" onerror="this.outerHTML=\'<div class=ntph>Image not available on this device</div>\'">':'')+(n.b?'<div class="ctext">'+esc(n.b)+'</div>':'')+
    (n.tx?'<div class="nttx"><small>Claude’s reading of the handwriting</small><div class="ctext">'+esc(n.tx)+'</div></div>':'')+(n.src?'<div class="nt2src">Noted while on: '+esc(n.src)+'</div>':'')+'</div>';
  if(ro){app.innerHTML=h+'<p class="sub">Shared by the student. Notes can’t be changed in Tutor view.</p>';return}
  h+='<div class="card nt2share"><div class="nt2row"><div><b>'+(n.sh?OPEN+'Shared':LOCK+'Private')+'</b><small>'+(n.sh?'Marked as shared, so it is included in a shared-only write-up. Your tutor never sees notes.':'Only you can see this. Switch on to include it in a shared-only write-up. Your tutor never sees notes.')+'</small></div><button class="nt2sw" role="switch" aria-checked="'+!!n.sh+'" aria-label="Share this note" onclick="ntShare(\''+id+'\')"><i></i></button></div>';
  h+='<div class="nt2send"><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/'+(S.tw||'')+'?text='+encodeURIComponent(noteText(n))+'">'+WAI+'Send a copy</a><button class="btn alt" onclick="cpText(ntNoteText(ntGet(\''+id+'\')),\'Note copied.\')">Copy text</button></div></div>';
  h+='<div class="row2"><button class="btn alt" onclick="ntStar(\''+id+'\')">'+(n.st?'★ Starred':'☆ Star')+'</button><button class="btn alt" onclick="ntEditOpen(\''+id+'\')">Edit</button></div>';
  if(src)h+='<button class="btn alt" id="ntRead" onclick="ntRead(\''+id+'\')">'+(n.tx?'Read the handwriting again':'Turn handwriting into text (Claude)')+'</button><div id="ntRm" class="sub" style="margin:6px 0 0"></div>';
  if(sjOf(n)==='Maths')h+='<button class="btn alt" onclick="ntCard(\''+id+'\')"'+(txt(n)?'':' disabled')+'>Make a memory card from this</button>';
  h+='<button class="btn alt chatb" onclick="askOpen()">'+CHAT_ICON+'Ask Claude about this note</button>';
  h+='<button class="btn alt ntdel" onclick="ntDel(\''+id+'\')">Delete note</button>';
  app.innerHTML=h};
window.ntShare=function(id){var n=ntGet(id);if(!n||RO())return;n.sh=n.sh?0:1;save();ntOne(n);showToast(n.sh?'Marked as shared for write-ups. Your tutor still cannot see notes.':'Private again. Only you can see it.')};
var _st=ntStar;ntStar=function(id){if(!RO())_st(id)};
var _dl=ntDel;ntDel=async function(id){if(!RO())return _dl(id)};

/* ---------- write-up: the filtered notes read as one page ---------- */
function wuNotes(){var W=NTV.wu;return filt().filter(function(n){return tyOf(n)!=='wu'&&(W.scope!=='sh'||n.sh)}).sort(function(a,b){return a.ts-b.ts})}
function wuTree(L){var T=[];SUBJ.forEach(function(s){var a=L.filter(function(n){return sjOf(n)===s});if(!a.length)return;var ch={},ord=[];
    a.forEach(function(n){var c=n.ch||'General';if(!ch[c]){ch[c]=[];ord.push(c)}ch[c].push(n)});
    ord.sort(function(x,y){return x==='General'?-1:y==='General'?1:x<y?-1:1});T.push([s,ord.map(function(c){return[c,ch[c]]})])});return T}
function wuTitle(){return(NTV.sj==='All'?'My notes':NTV.sj)+(NTV.sj==='Maths'&&NTV.ch!=='All'?': '+NTV.ch:'')}
function wuBody(n){var p=txt(n);return!p||p===n.t?'':p.indexOf(n.t+'\n')===0?p.slice(n.t.length).trim():p}
function wuText(L){var t=wuTitle()+': key ideas and insights\n'+new Date().toLocaleDateString()+'\n';
  wuTree(L).forEach(function(s){t+='\n'+s[0].toUpperCase()+'\n';s[1].forEach(function(c){if(c[0]!=='General'||s[1].length>1)t+='\n'+c[0]+'\n';
    ['idea','insight','note'].forEach(function(k){var a=c[1].filter(function(n){return tyOf(n)===k});if(!a.length)return;t+=TY[k][1]+':\n';
      a.forEach(function(n){var b=wuBody(n);t+='• '+n.t+(b?'\n  '+b.replace(/\n/g,'\n  '):(n.img&&!txt(n)?' (handwritten page)':''))+'\n'})})})});return t}
window.wuOpen=function(){NTV.wu={scope:'all',ai:null,busy:false};ntView();window.scrollTo(0,0)};
window.wuClose=function(){NTV.wu=null;ntView();window.scrollTo(0,0)};
window.wuScope=function(s){NTV.wu.scope=s;NTV.wu.ai=null;wuView()};
function wuView(){var W=NTV.wu,ro=RO(),L=wuNotes(),nsh=filt().filter(function(n){return n.sh&&tyOf(n)!=='wu'}).length;
  var h='<p class="back"><button class="link" onclick="wuClose()">← All notes</button></p><h1>Write-up</h1><p class="sub">'+(ro?'The notes the student has shared, read as one page.':'Your notes in this view, set out as one page by subject and chapter. Change the filters on the notes list to change what is included.')+'</p>';
  if(!ro&&nsh)h+='<div class="seg" role="tablist" aria-label="Which notes"><button role="tab" aria-selected="'+(W.scope==='all')+'" onclick="wuScope(\'all\')">All in this view</button><button role="tab" aria-selected="'+(W.scope==='sh')+'" onclick="wuScope(\'sh\')">Shared only ('+nsh+')</button></div>';
  if(!L.length){app.innerHTML=h+'<div class="card"><p class="sub" style="margin:0">No notes to put together here.</p></div>';return}
  var d='<article class="wu"><h2>'+esc(wuTitle())+'</h2><p class="wud">'+L.length+(L.length===1?' note':' notes')+' · '+new Date().toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})+'</p>';
  wuTree(L).forEach(function(s){d+='<h3>'+esc(s[0])+'</h3>';s[1].forEach(function(c){if(c[0]!=='General'||s[1].length>1)d+='<h4>'+esc(c[0])+'</h4>';
    ['idea','insight','note'].forEach(function(k){var a=c[1].filter(function(n){return tyOf(n)===k});if(!a.length)return;d+='<h5>'+TY[k][1]+'</h5>';
      a.forEach(function(n){var b=wuBody(n),src=ntSrc(n);d+='<div class="wui '+k+'"><p><b>'+esc(n.t)+'</b></p>'+(b?'<p>'+esc(b)+'</p>':'')+(src&&!n.tx?'<img class="ntimg" src="'+esc(src)+'" alt="'+esc(n.t)+'" loading="lazy" style="margin:0">':'')+'</div>'})})})});
  h+=d+'</article>';
  if(!ro){h+='<div class="card"><b>Send or keep</b><p class="sub" style="margin:4px 0 0">'+(W.scope==='sh'?'Only your shared notes are in this copy.':'This copy includes private notes. Sending it is your choice to share them.')+'</p><div class="nt2send"><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/'+(S.tw||'')+'?text='+encodeURIComponent(wuText(L).slice(0,3500))+'">'+WAI+'Send write-up</a><button class="btn alt" onclick="wuCopy()">Copy text</button></div></div>';
    h+='<div class="card"><b>Turn it into flowing prose</b><p class="sub" style="margin:4px 0 0">Claude joins these notes into a short write-up using only what you wrote, and lists anything worth double-checking.</p><button class="btn" id="wuAiB" style="text-align:center" onclick="wuAi()"'+(W.busy?' disabled':'')+'>'+(W.busy?'Claude is writing…':W.ai?'Write it again':'Write it up with Claude')+'</button><div id="wuAiO">'+wuAiHtml()+'</div></div>'}
  else h+='<button class="btn alt" style="text-align:center" onclick="wuCopy()">Copy text</button>';
  app.innerHTML=h}
function wuAiHtml(){var W=NTV.wu;if(W.err)return'<p class="sub" style="margin:8px 0 0">'+esc(W.err)+'</p>';if(!W.ai)return'';
  return'<div class="claude wuai" style="margin-top:10px">'+esc(W.ai)+'</div><div class="nt2send"><button class="btn" onclick="wuKeep()">Save as a note</button><button class="btn alt" onclick="cpText(NTV.wu.ai,\'Write-up copied.\')">Copy</button></div>'}
window.wuCopy=function(){cpText(wuText(wuNotes()),'Write-up copied.')};
window.wuAi=async function(){var W=NTV.wu;if(!W||W.busy||RO())return;W.busy=true;W.err='';var L=wuNotes(),b=document.getElementById('wuAiB');if(b){b.disabled=true;b.textContent='Claude is writing…'}
  try{var s=await getS();if(!s)throw{msg:'Claude is not available here. Open the app while signed in to claude.ai.'};
    var r=await s('Below are a student’s own study notes: key ideas and insights, grouped by subject and chapter. Join them into one clear write-up the student can revise from.\nRules: use only what is in the notes and keep the student’s meaning and voice; do not add new facts or examples. Where two notes connect, say how. Plain text only: short heading lines, no markdown symbols, no bullet characters other than "•". Write maths with Unicode symbols. Under 450 words. If something in a note looks mistaken or unclear, do not correct it silently: end with a short section headed "Worth checking" that names it. If nothing needs checking, leave that section out.\n\nNOTES\n'+wuText(L).slice(0,6000));
    if(NTV.wu!==W)return;W.ai=(r.text||'').trim();if(!W.ai)throw{msg:'Claude returned nothing. Try again.'}}
  catch(e){W.err=e&&e.msg?e.msg:sampleErr(e)}
  W.busy=false;if(NTV.wu===W&&view==='nt')wuView()};
window.wuKeep=function(){var W=NTV.wu;if(!W||!W.ai||RO())return;var L=wuNotes(),sj={},ch={};L.forEach(function(n){sj[sjOf(n)]=1;ch[n.ch||'General']=1});
  var one=Object.keys(sj).length===1?Object.keys(sj)[0]:'Other',c=Object.keys(ch).length===1?Object.keys(ch)[0]:'General',now=Date.now();
  var n={id:'n'+now.toString(36)+Math.floor(Math.random()*1e3),k:'text',ts:now,up:now,st:0,sh:0,ty:'wu',sj:one,ch:c,t:'Write-up: '+wuTitle().replace(/^My notes$/,'all subjects'),b:W.ai,img:null};
  ntList().push(n);if(ntList().length>300)S.nt=ntList().slice(-300);save();NTV.wu=null;NTV.ty='All';NTV.open=n.id;ntView();window.scrollTo(0,0);showToast('Saved as a private write-up note.')};

/* ---------- quick note from any screen ---------- */
var fab=document.createElement('button');fab.id='noteFab';fab.className='notefab';fab.setAttribute('aria-label','Save a note about this screen');fab.title='Quick note';fab.innerHTML=PEN;fab.onclick=qnOpen;document.body.appendChild(fab);
function nfab(){fab.hidden=!(window.ROLE==='student'||window.ROLE==='guest')||view==='nt'}
var _r=render;render=function(){_r();nfab()};nfab();
function qnOpen(){if(document.getElementById('qnSheet'))return qnClose();var c=['',''];try{c=ctxNow()}catch(e){}var sj=viewSj();
  var d=document.createElement('div');d.id='qnSheet';d.className='askwrap qn';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label','Quick note');d._src=c[0]||'';d._ty='idea';
  d.innerHTML='<div class="askbg" onclick="qnClose()"></div><div class="asksh"><div class="askhd">'+PEN.replace('<svg','<svg style="width:22px;height:22px;fill:none;stroke:var(--accent);stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round"')+'<div><b>Quick note</b><small>'+esc(c[0]||'Study Buddy')+'</small></div><button class="askx" onclick="qnClose()" aria-label="Close">✕</button></div>'+
    '<div class="seg" role="tablist" aria-label="Kind of note" id="qnTy"><button role="tab" data-ty="idea" aria-selected="true">Key idea</button><button role="tab" data-ty="insight" aria-selected="false">Insight</button></div>'+
    '<textarea id="qnB" placeholder="What is worth keeping from this?" aria-label="Your note"></textarea>'+
    '<select id="qnSj" aria-label="Subject">'+SUBJ.map(function(s){return'<option'+(s===sj?' selected':'')+'>'+s+'</option>'}).join('')+'</select>'+
    '<p class="nt2priv" style="margin:6px 0 4px">'+LOCK+'Saved to Notes as private.</p><div id="qnM" class="sub" style="margin:0"></div><button class="btn" style="text-align:center" onclick="qnSave()">Save note</button></div>';
  document.body.appendChild(d);
  d.querySelectorAll('#qnTy button').forEach(function(b){b.onclick=function(){d._ty=b.dataset.ty;d.querySelectorAll('#qnTy button').forEach(function(o){o.setAttribute('aria-selected',o===b)})}});
  var i=document.getElementById('qnB');if(i)i.focus()}
function qnTitle(b){var l=b.split('\n')[0].trim();if(l.length<=60)return l;var c=l.slice(0,58),i=c.lastIndexOf(' ');return(i>25?c.slice(0,i):c)+'…'}
window.qnClose=function(){var d=document.getElementById('qnSheet');if(d)d.remove();fab.focus()};
window.qnSave=function(){var d=document.getElementById('qnSheet'),b=document.getElementById('qnB').value.trim();if(!b){document.getElementById('qnM').textContent='Write something first.';return}
  var sj=document.getElementById('qnSj').value,src=d._src,ch='General',now=Date.now();
  if(sj==='Maths')NCH.forEach(function(c){if(c!=='General'&&src.indexOf(c)>=0&&c.length>ch.length)ch=c});
  else if(src.indexOf(' · ')>0)ch=src.split(' · ').slice(1).join(' · ').slice(0,60)||'General';
  ntList().push({id:'n'+now.toString(36)+Math.floor(Math.random()*1e3),k:'text',ts:now,up:now,st:0,sh:0,ty:d._ty,sj:sj,ch:ch,t:qnTitle(b),b:b,img:null,src:src});
  if(ntList().length>300)S.nt=ntList().slice(-300);NTV.last=sj;save();qnClose();showToast('Saved to Notes. Private until you share it.')};
document.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&document.getElementById('qnSheet'))qnClose()});
if(view==='nt'||typeof view!=='undefined')try{render()}catch(e){}
})();
/*NOTES2-END*/
