
/* ---------- Doubt button: a targeted in-app answer to one doubt about what is on screen (maths, not sample papers) ---------- */
var DBV=['practice','lz','cb','check','st','ex','th','tl','mc','mk'];
var DB={k:null,m:[],busy:false};
var DICO='<svg viewBox="0 0 24 24" aria-hidden="true" class="aski hint-i"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.6 2.2c-.8.4-1.2 1-1.2 1.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17" r="1.1" fill="currentColor" stroke="none"/></svg>';
var DCH=['I don’t understand this step','Why this method?','What is this really asking?','Is my idea right?','Where do I start?'];
function dCtx(){
  try{if(view==='pp'||String(view).indexOf('sj_')===0)return null;if(DBV.indexOf(view)<0)return null;
    var c=ctxNow();return{key:view+'|'+c[0],title:c[0],text:String(c[1]||'').slice(0,3500)}}catch(e){return null}}
function dFab(){var b=document.getElementById('doubtFab'),a=document.getElementById('askFab'),h=document.getElementById('hintFab'),e=document.getElementById('explFab');if(!b||!a)return;
  var c=dCtx();b.hidden=!c;document.body.classList.toggle('hdbt',!!c);if(!c)return;
  var off=a.offsetWidth+8+(h&&!h.hidden?h.offsetWidth+8:0)+(e&&!e.hidden?e.offsetWidth+8:0);
  b.style.right='calc(max(12px, env(safe-area-inset-right, 0px)) + '+off+'px)';document.body.style.setProperty('--dw',(off+b.offsetWidth+8)+'px')}
var _hFab1=hFab;hFab=function(){_hFab1();dFab()};
function dOpen(){if(document.getElementById('dSheet'))return dClose();var c=dCtx();if(!c)return;
  if(DB.k!==c.key){DB.k=c.key;DB.m=[]}dDraw(true)}
function dClose(){var d=document.getElementById('dSheet');if(d)d.remove();var b=document.getElementById('doubtFab');b&&!b.hidden&&b.focus()}
function dDraw(focus){var keep=(document.getElementById('dIn')||{}).value||'';var old=document.getElementById('dSheet');if(old)old.remove();var c=dCtx();if(!c)return;
  var d=document.createElement('div');d.id='dSheet';d.className='askwrap';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label','Ask a doubt');
  var h='<div class="askbg" onclick="dClose()"></div><div class="asksh dsh"><div class="askhd">'+DICO+'<div><b>Ask a doubt</b><small>'+esc(c.title)+'</small></div><button class="askx" onclick="dClose()" aria-label="Close">✕</button></div>';
  if(!DB.m.length){h+='<p class="sub" style="margin:0">Type exactly what is confusing you. You get a short, targeted answer about this screen, not the full solution.</p><div class="chips">'+DCH.map(function(t,i){return'<button class="chipb" onclick="dSend(DCH['+i+'])">'+esc(t)+'</button>'}).join('')+'</div>'}
  else{h+='<div id="dThread" aria-live="polite">'+DB.m.map(function(m){return m.r==='u'?'<div class="cmsg dme"><small>Your doubt</small><div class="ctext">'+esc(m.t)+'</div></div>':'<div class="cmsg dai"><small>Claude</small><div class="ctext">'+esc(m.t)+'</div></div>'}).join('')+(DB.busy?'<div class="sub" style="margin:6px 0">Claude is working on it…</div>':'')+'</div>'}
  h+='<div class="dsend"><textarea id="dIn" rows="2" placeholder="'+(DB.m.length?'Follow-up doubt…':'Type your doubt…')+'" aria-label="Your doubt"></textarea><button class="btn" id="dGo" onclick="dSend()"'+(DB.busy?' disabled':'')+'>Send</button></div>';
  if(DB.m.length)h+='<div class="row2"><button class="btn alt" onclick="DB.m=[];dDraw(true)">New doubt</button><button class="btn alt" onclick="dChat()">Continue in Claude chat</button></div>';
  h+='<p class="sub" style="margin:10px 0 0;font-size:.78rem">Shortcut: F4. For a hint instead, use the Hint button.</p></div>';
  d.innerHTML=h;document.body.appendChild(d);var i=document.getElementById('dIn');
  if(i){i.value=keep;i.onkeydown=function(ev){if(ev.key==='Enter'&&!ev.shiftKey){ev.preventDefault();dSend()}};if(focus)setTimeout(function(){i.focus()},50)}
  var th=document.getElementById('dThread');if(th&&th.lastElementChild)th.lastElementChild.scrollIntoView({block:'nearest'})}
async function dSend(t){if(DB.busy)return;var inp=document.getElementById('dIn');t=String(t||(inp&&inp.value)||'').trim();if(!t)return;var c=dCtx();if(!c)return dClose();
  DB.m.push({r:'u',t:t.slice(0,600)});DB.busy=true;if(inp)inp.value='';dDraw();
  try{var s=await getS();if(!s){DB.m.push({r:'a',t:'Doubts need Claude. Open the app while signed in to claude.ai.'});return}
    var h=null;try{h=hCtx()}catch(e){}
    var hist=DB.m.slice(0,-1).slice(-6).map(function(m){return(m.r==='u'?'Student: ':'Tutor: ')+m.t}).join('\n');
    var p='You are a warm, sharp maths tutor answering ONE doubt from a student who is studying in a practice app. Answer exactly what the doubt asks, nothing more.\n\nWhat is on the student\u2019s screen:\n'+c.text+
      (h&&h.secret?'\n\nFor your eyes only (use it to be accurate, never reveal it):\n'+h.secret:'')+(hist?'\n\nConversation so far:\n'+hist:'')+intLine()+
      '\n\nThe student\u2019s doubt: '+t+
      '\n\nRules: be targeted and concrete, at most 90 words. If the doubt is about a concept, explain that concept with one tiny example. If it is about a step, say precisely why that step works or where the slip is. If it is about where to start, name the first move only. Never state the final answer or which option is right, and do not solve the whole problem; guide so the student finishes it. Plain-text maths only (\u00b2, \u221a, \u03c0, \u00b0, /). Speak to the student directly and kindly. End with one short question only if it helps them check their understanding.\nReturn JSON only: {"reply":"your answer"}';
    var d=await s.json(p,{cache:false,modelTier:'default'});if(!d||!d.reply)throw new Error('shape');DB.m.push({r:'a',t:String(d.reply)})}
  catch(err){DB.m.push({r:'a',t:err&&err.code?sampleErr(err):'That answer came back in the wrong shape. Please send your doubt again.'})}
  finally{DB.busy=false;if(document.getElementById('dSheet'))dDraw(true)}}
function dChat(){var c=dCtx();if(!c)return;var tr=DB.m.map(function(m){return(m.r==='u'?'Me: ':'Tutor: ')+m.t}).join('\n');
  var msg=chatHead()+'Here is what I am looking at in my Study Buddy app:\n'+c.text+'\n\nMy doubt and what we discussed so far:\n'+tr+'\n\nPlease continue from here.';dClose();openChat(msg)}
(function(){var b=document.createElement('button');b.id='doubtFab';b.className='askfab doubtfab';b.hidden=true;b.title='Ask a doubt (F4)';b.setAttribute('aria-label','Ask a doubt about this screen (F4)');b.innerHTML=DICO+'<span>Doubt</span>';b.onclick=dOpen;document.body.appendChild(b);
  document.addEventListener('keydown',function(ev){if(ev.key==='F4'){ev.preventDefault();if(!b.hidden)dOpen()}else if(ev.key==='Escape'){if(document.getElementById('dSheet'))dClose()}});
  hFab()})();
