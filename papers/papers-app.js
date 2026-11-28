(function(){
'use strict';
var D=document;
/* ===== Data (auto-generated from catalog.json) ===== */
var BRANCHES=[
 {n:'Computer Engineering',s:{'1':['DI01000131','DI01000151','DI01000021'],'2':['DI02000101'],'3':['DI03000021','DI03000011','DI03000031','DI03000041','DI03000051'],'4':['DI04000021','DI04000011']}},
 {n:'Mechanical Engineering',s:{'1':['DI01000021','DI01000191','DI01000181'],'2':['DI01000121'],'3':['DI03000141','DI03000161','DI03000171','DI03019011','DI03000151','DI03000201'],'4':['DI04019011','DI04000241','DI04000251']}},
 {n:'Civil Engineering',s:{'1':['DI01000021','DI01000121','DI01006021']}},
 {n:'Electrical Engineering',s:{'1':['DI01000021','DI01000081','DI01009011'],'2':['DI02000161','DI02000171'],'3':['DI03000081','DI03000091','DI03000101','DI03009011','DI03009021'],'4':['DI04000171','DI04000321','DI04009011']}},
 {n:'Chemical Engineering',s:{'1':['DI01000021','DI01005011','DI01005021'],'2':['DI02005021','DI02005011','DI01000121'],'3':['DI03005031','DI03005021','DI03005061','DI03005011'],'4':['DI04005021','DI04005041','DI04005071']}},
];
var NAMES={
'DI01000021':'Mathematics - I',
'DI01000081':'DC Circuit',
'DI01000121':'Applied Physics',
'DI01000131':'Computer Programming Fundamentals (C)',
'DI01000151':'Basics of Electronics',
'DI01000181':'Engineering Materials Science',
'DI01000191':'Elements of Mechanical Engineering',
'DI01005011':'Plant Utilities',
'DI01005021':'Material Science and Technology',
'DI01006021':'Construction Material',
'DI01009011':'Electronics Devices & Circuits',
'DI02000101':'Scripting Language (Python)',
'DI02000161':'Fundamental of Digital Electronics',
'DI02000171':'AC Fundamental',
'DI02005011':'Basic Chemical Engineering Calculations',
'DI02005021':'Mechanical Operation',
'DI03000011':'Digital Electronics Fundamentals',
'DI03000021':'Data Structures',
'DI03000031':'Relational Database Management System',
'DI03000041':'Fundamentals of Operating System',
'DI03000051':'Computer Networks',
'DI03000081':'Electrical Machines I',
'DI03000091':'Electrical Instrumentation',
'DI03000101':'Electrical Power Transmission & Distribution',
'DI03000141':'Theory of Machines and Mechanisms',
'DI03000151':'Measurements and Metrology',
'DI03000161':'Manufacturing Engineering-I',
'DI03000171':'Fluid Mechanics and Hydraulic Machinery',
'DI03000201':'Basics of Applied Mechanics',
'DI03005011':'Basics of Process Instrumentations',
'DI03005021':'Fluid Flow Operation',
'DI03005031':'Process Heat Transfer',
'DI03005061':'Process Calculation',
'DI03009011':'Electrical Wiring Estimating & Contracting',
'DI03009021':'Electrical Power Generation',
'DI03019011':'Engineering Thermodynamics',
'DI04000011':'Software Engineering',
'DI04000021':'Object Oriented Programming - Java',
'DI04000171':'Microcontroller & its Applications',
'DI04000241':'Manufacturing Engineering - II',
'DI04000251':'Design of Machine Elements',
'DI04000321':'Electrical Machines - II',
'DI04005021':'Mass Transfer-I',
'DI04005041':'Chemical Engineering Thermodynamics',
'DI04005071':'Petroleum Refining and Petroleum Technology',
'DI04009011':'Substation Engineering',
'DI04019011':'Thermal Engineering - I',
};
var SESSIONS={};
function addS(c,ss){if(!SESSIONS[c])SESSIONS[c]=[];for(var i=0;i<ss.length;i++){if(SESSIONS[c].indexOf(ss[i])<0)SESSIONS[c].push(ss[i]);}}
addS('DI01000021',['summer-2026','winter-2025']);
addS('DI01000081',['summer-2026']);
addS('DI01000121',['summer-2026','winter-2025']);
addS('DI01000131',['summer-2026']);
addS('DI01000151',['summer-2026']);
addS('DI01000181',['summer-2025','summer-2026','winter-2025']);
addS('DI01000191',['summer-2025','summer-2026','winter-2025']);
addS('DI01005011',['summer-2026','winter-2025']);
addS('DI01005021',['summer-2026','winter-2025']);
addS('DI01006021',['summer-2026','winter-2025']);
addS('DI01009011',['summer-2026']);
addS('DI02000101',['summer-2026']);
addS('DI02000161',['summer-2026']);
addS('DI02000171',['summer-2026']);
addS('DI02005011',['summer-2026','winter-2025']);
addS('DI02005021',['summer-2026','winter-2025']);
addS('DI03000011',['summer-2026']);
addS('DI03000021',['summer-2026']);
addS('DI03000031',['summer-2026']);
addS('DI03000041',['summer-2026']);
addS('DI03000051',['summer-2026']);
addS('DI03000081',['summer-2026']);
addS('DI03000091',['summer-2026']);
addS('DI03000101',['summer-2026']);
addS('DI03000141',['summer-2026']);
addS('DI03000151',['summer-2026']);
addS('DI03000161',['summer-2026','winter-2025']);
addS('DI03000171',['summer-2026','winter-2025']);
addS('DI03000201',['summer-2026','winter-2025']);
addS('DI03005011',['summer-2026','winter-2025']);
addS('DI03005021',['summer-2026','winter-2025']);
addS('DI03005031',['summer-2026','winter-2025']);
addS('DI03005061',['summer-2026','winter-2025']);
addS('DI03009011',['summer-2026']);
addS('DI03009021',['summer-2026']);
addS('DI03019011',['summer-2026','winter-2025']);
addS('DI04000011',['summer-2026']);
addS('DI04000021',['summer-2026']);
addS('DI04000171',['summer-2026']);
addS('DI04000241',['summer-2026']);
addS('DI04000251',['summer-2026']);
addS('DI04000321',['summer-2026']);
addS('DI04005021',['summer-2026']);
addS('DI04005041',['summer-2026']);
addS('DI04005071',['summer-2026']);
addS('DI04009011',['summer-2026']);
addS('DI04019011',['summer-2026']);
var SKU_BASE={
'DI01000021':'DI01000021',
'DI01000081':'DI01000081',
'DI01000121':'DI01000121',
'DI01000131':'DI01000131',
'DI01000151':'DI01000151',
'DI01000181':'DI01000181',
'DI01000191':'DI01000191',
'DI01005011':'DI01005011',
'DI01005021':'DI01005021',
'DI01006021':'DI01006021',
'DI01009011':'DI01009011',
'DI02000101':'DI02000101',
'DI02000161':'DI02000161',
'DI02000171':'DI02000171',
'DI02005011':'DI02005011',
'DI02005021':'DI02005021',
'DI03000011':'DI03000011',
'DI03000021':'DI03000021',
'DI03000031':'DI03000031',
'DI03000041':'DI03000041',
'DI03000051':'DI03000051',
'DI03000081':'DI03000081',
'DI03000091':'DI03000091',
'DI03000101':'DI03000101',
'DI03000141':'DI03000141',
'DI03000151':'DI03000151',
'DI03000161':'DI03000161',
'DI03000171':'DI03000171',
'DI03000201':'DI03000201',
'DI03005011':'DI03005011',
'DI03005021':'DI03005021',
'DI03005031':'DI03005031',
'DI03005061':'DI03005061',
'DI03009011':'DI03009011',
'DI03009021':'DI03009021',
'DI03019011':'DI03019011',
'DI04000011':'DI04000011',
'DI04000021':'DI04000021',
'DI04000171':'DI04000171',
'DI04000241':'DI04000241',
'DI04000251':'DI04000251',
'DI04000321':'DI04000321',
'DI04005021':'DI04005021',
'DI04005041':'DI04005041',
'DI04005071':'DI04005071',
'DI04009011':'DI04009011',
'DI04019011':'DI04019011',
};
var FREE={'winter-2025':true}; /* winter-2025 = free sample, others = paid */
var SESSION_LABEL={'winter-2025':'Winter 2025 (Free Sample)','summer-2025':'Summer 2025 (Free Sample)','summer-2026':'Summer 2026 (Paid ₹29)'};
var B=BRANCHES,N=NAMES,S=SESSIONS,F=FREE,PID=SKU_BASE,SL=SESSION_LABEL;
var COMMIT='9cfa495'; /* updated on deploy */
var GHI='https://cdn.jsdelivr.net/gh/Sunilpa4/diplomaone-content@'+COMMIT;
var st={b:null,s:null,c:null};
/* ===== Utility ===== */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function vw(){var e=D.getElementById('paper-app');if(!e){var m=D.getElementById('main')||D.querySelector('main')||D.body;e=D.createElement('div');e.id='paper-app';m.appendChild(e);}return e;}
function err(m){var v=vw();v.innerHTML='<div class="state" style="border-color:#d66;background:#fee;color:#800">Error: '+esc(m)+'<br><small>Refresh the page. If the problem persists contact DiplomaOne support.</small></div>';}
function root(){return D.getElementById('paper-app')||vw();}
function navBtns(btns){var d=D.createElement('div');d.style.cssText='display:flex;gap:8px;margin:8px 0;flex-wrap:wrap;';for(var i=0;i<btns.length;i++){(function(b){var x=D.createElement('button');x.textContent=b.l;x.style.cssText='padding:6px 12px;background:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;';x.onclick=b.fn;d.appendChild(x);})(btns[i]);}return d;}
function clearNav(){var ex=root().querySelectorAll('div[style*="flex"]');for(var i=0;i<ex.length;i++){if(ex[i].querySelector('button'))ex[i].remove();}}
function isFree(sess){return !!FREE[sess];}
function priceFor(sess){if(isFree(sess))return 0;return 29;}
function productId(c,sess){return PID[c]?PID[c]+'-'+sess:null;}
function checkoutUrl(c,sess){var pid=productId(c,sess);if(!pid)return null;return 'https://diplomaone.in/checkout/?add-to-cart='+encodeURIComponent(pid)+'&return='+encodeURIComponent(window.location.pathname+'?purchased=1&code='+c+'&sess='+sess);}
function paperUrl(c,sess){return GHI+'/papers/'+c+'/'+sess+'.html';}
function ensureGujaratiFont(){
  if(D.getElementById('__diploma_guj_font'))return;
  var l=D.createElement('link');
  l.id='__diploma_guj_font';
  l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati:wght@400;600;700&display=swap';
  D.head.appendChild(l);
}
/* ===== Ownership cache ===== */
var OWNERSHIP_KEY='__diplomaone_owned';
function getOwnedCache(){try{var v=localStorage.getItem(OWNERSHIP_KEY);return v?JSON.parse(v):{};}catch(e){return{};}}
function setOwned(pid){var o=getOwnedCache();o[pid]=Date.now();try{localStorage.setItem(OWNERSHIP_KEY,JSON.stringify(o));}catch(e){}}
function isOwnedLocally(c,sess){var pid=productId(c,sess);if(!pid)return false;var o=getOwnedCache();return !!o[pid];}
function markOwned(c,sess){var pid=productId(c,sess);if(pid)setOwned(pid);}
/* ===== Async ownership check ===== */
var restUrl='https://diplomaone.in/wp-json/diplomaone/v1';
var restNonce=window.DiplomaOneAccess && window.DiplomaOneAccess.nonce ? window.DiplomaOneAccess.nonce : '';
function hasAccess(c,sess,cb){
  if(isFree(sess))return cb(true);
  if(isOwnedLocally(c,sess))return cb(true);
  var pid=productId(c,sess);if(!pid)return cb(false);
  var url=restUrl+'/has-access?product_id='+encodeURIComponent(pid);
  var headers={'Accept':'application/json'};
  if(restNonce)headers['X-WP-Nonce']=restNonce;
  fetch(url,{credentials:'include',headers:headers}).then(function(r){return r.json();}).then(function(j){
    if(j && j.access){setOwned(pid);cb(true);}else{cb(false);}
  }).catch(function(){cb(false);});
}
function pollOwnership(c,sess,retries,cb){
  hasAccess(c,sess,function(ok){
    if(ok)return cb('owned');
    if(retries<=0)return cb('timeout');
    setTimeout(function(){pollOwnership(c,sess,retries-1,cb);},1500);
  });
}
/* ===== Views ===== */
function renderBranches(){
 st.b=null;st.s=null;st.c=null;
 var v=vw();if(!v)return;
 v.innerHTML='<h2>Choose branch</h2><div class="grid">'+B.map(function(br,i){
  var cnt=Object.keys(br.s).reduce(function(t,s){return t+(br.s[s]||[]).filter(function(c){return S[c]&&S[c].length;}).length;},0);
  return '<button class="card" data-bi="'+i+'"><b>'+esc(br.n)+'</b><small>'+cnt+' subjects with papers</small></button>';
 }).join('')+'</div><div id="vw"></div>';
 clearNav();
 v.querySelectorAll('button.card[data-bi]').forEach(function(btn){btn.onclick=function(){renderSems(Number(btn.getAttribute('data-bi')));};});
}
function renderSems(bi){
 st.b=bi;st.s=null;st.c=null;
 var b=B[bi];
 var v=vw();if(!v)return;
 var sems=Object.keys(b.s||{}).filter(function(s){return(b.s[s]||[]).filter(function(c){return S[c]&&S[c].length;}).length;}).sort();
 v.innerHTML='<h2>'+esc(b.n)+'</h2><div class="grid">'+sems.map(function(s){
  var cnt=(b.s[s]||[]).filter(function(c){return S[c]&&S[c].length;}).length;
  return '<button class="card" data-sem="'+esc(s)+'"><b>Semester '+esc(s)+'</b><small>'+cnt+' subjects with papers</small></button>';
 }).join('')+'</div><div id="vw"></div>';
 clearNav();var nav=navBtns([{l:'← Branches',fn:renderBranches}]);v.parentNode.insertBefore(nav,v);
 v.querySelectorAll('button.card[data-sem]').forEach(function(btn){btn.onclick=function(){renderSubs(bi,btn.getAttribute('data-sem'));};});
}
function renderSubs(bi,sem){
 st.b=bi;st.s=sem;st.c=null;
 var b=B[bi];var codes=(b.s[sem]||[]).filter(function(c){return S[c]&&S[c].length;});
 var v=vw();if(!v)return;
 v.innerHTML='<h2>'+esc(b.n)+' · Semester '+esc(sem)+'</h2><div class="grid">'+codes.map(function(c){
  var fr=Object.keys(SESSIONS[c]||{}).some(isFree);var nm=N[c]||c;
  return '<button class="card" data-code="'+esc(c)+'"><span class="tag '+(fr?'':'locked')+'">'+(fr?'FREE':'PAID')+'</span><b>'+esc(nm)+'</b><small>'+(S[c]||[]).length+' paper sessions</small></button>';
 }).join('')+'</div><div id="vw"></div>';
 clearNav();var nav=navBtns([{l:'← Branches',fn:renderBranches},{l:'← Semesters',fn:function(){renderSems(bi);}}]);v.parentNode.insertBefore(nav,v);
 v.querySelectorAll('button.card[data-code]').forEach(function(btn){btn.onclick=function(){renderSessions(btn.getAttribute('data-code'));};});
}
function renderSessions(code){
 st.c=code;st.b=typeof st.b==='number'?st.b:findBranchIndex(code);
 var v=vw();if(!v)return;
 var nm=N[code]||code;var ss=S[code]||[];
 v.innerHTML='<h2>'+esc(nm)+'</h2><p class="muted">Tap a session to read. Paid papers cost ₹29 (one-time, instant access). Winter 2025 papers are free samples.</p><div class="grid">'+ss.map(function(sess){
  var fr=isFree(sess);
  return '<button class="card" data-sess="'+esc(sess)+'"><span class="tag '+(fr?'':'locked')+'">'+(fr?'FREE':'PAID ₹29')+'</span><b>'+esc(SL[sess]||sess)+'</b><small>Tap to '+(fr?'read':'buy or open')+'</small></button>';
 }).join('')+'</div><div id="vw"></div>';
 clearNav();
 var btns=[{l:'← Branches',fn:renderBranches}];
 if(st.s){btns.push({l:'← Semesters',fn:function(){renderSubs(st.b,st.s);}});}
 v.parentNode.insertBefore(navBtns(btns),v);
 v.querySelectorAll('button.card[data-sess]').forEach(function(btn){btn.onclick=function(){openPaper(code,btn.getAttribute('data-sess'));};});
}
function findBranchIndex(code){for(var i=0;i<B.length;i++){for(var s in B[i].s){if(B[i].s[s].indexOf(code)>=0)return i;}}return 0;}
/* ===== Paper reader ===== */
function showPaperLoading(c,sess,msg){var v=D.getElementById('vw')||vw();v.innerHTML='<div class="state">'+esc(msg||'Loading paper…')+'</div>';}
function showPaperError(c,sess,msg){var v=D.getElementById('vw')||vw();v.innerHTML='<div class="state" style="border-color:#d66;background:#fee;color:#800">'+esc(msg)+'<br><button onclick="window.__diplomaBack()">← Back to papers</button></div>';}
window.__diplomaBack=function(){if(st.c){renderSessions(st.c);}else{renderBranches();}};
function openPaper(c,sess){
  if(!isFree(sess)){
    showPaperLoading(c,sess,'Checking access…');
    hasAccess(c,sess,function(ok){
      if(ok){fetchAndRenderPaper(c,sess);}
      else{renderPaywall(c,sess);}
    });
  }else{fetchAndRenderPaper(c,sess);}
}
function fetchAndRenderPaper(c,sess){
  showPaperLoading(c,sess,'Loading paper…');
  fetch(paperUrl(c,sess),{cache:'no-cache'}).then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.text();}).then(function(html){renderPaper(html,c,sess);}).catch(function(e){showPaperError(c,sess,'Failed to load paper: '+e.message);});
}
function renderPaper(html,c,sess){
  ensureGujaratiFont();
  var v=D.getElementById('vw')||vw();
  var tmp=D.createElement('div');tmp.innerHTML=html;
  var body=tmp.querySelector('main,article,.page,#content,body')||tmp;
  var css='<style id="__paper_reader_css">#paper-app #vw{max-width:100%;}#paper-app #vw *{font-family:"Noto Sans Gujarati","Noto Sans",system-ui,-apple-system,"Segoe UI",Arial,sans-serif !important;}#paper-app .qc{page-break-after:always;}@media print{body *{visibility:hidden;}#paper-app,#paper-app *{visibility:visible;}#paper-app{position:absolute;left:0;top:0;width:100%;}.nav-bar,.back-btn{display:none!important;}}</style>';
  v.innerHTML=css+'<div class="paper-content" style="background:#fff;border-radius:8px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">'+body.innerHTML+'</div>';
  var nav=D.createElement('div');nav.className='nav-bar';nav.style.cssText='display:flex;gap:8px;margin:12px 0;flex-wrap:wrap;align-items:center;';
  var back=D.createElement('button');back.textContent='← Back to '+esc(N[c]||c);back.className='back-btn';back.style.cssText='padding:8px 14px;background:#145c8b;color:#fff;border:none;border-radius:4px;cursor:pointer;';back.onclick=function(){renderSessions(c);};nav.appendChild(back);
  var print=D.createElement('button');print.textContent='Print / Save PDF';print.style.cssText='padding:8px 14px;background:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;';print.onclick=function(){window.print();};nav.appendChild(print);
  v.insertBefore(nav,v.firstChild);
  v.querySelectorAll('[style*="font-family"]').forEach(function(el){
    el.style.fontFamily='"Noto Sans Gujarati","Noto Sans",system-ui,-apple-system,"Segoe UI",Arial,sans-serif';
  });
  if(window.MathJax && window.MathJax.typesetPromise){try{window.MathJax.typesetPromise([v]);}catch(e){}}
  window.scrollTo({top:(v.getBoundingClientRect().top+window.scrollY-20),behavior:'smooth'});
}
function renderPaywall(c,sess){
  var v=D.getElementById('vw')||vw();
  var cu=checkoutUrl(c,sess);
  var cur=window.DiplomaOneAccess && window.DiplomaOneAccess.current_user ? window.DiplomaOneAccess.current_user : 0;
  var signin='';if(!cur){signin='<p class="muted" style="margin-top:8px;">You will be asked to sign in during checkout (email) to track your purchase. Free papers do not require sign-in.</p>';}
  v.innerHTML='<div class="state" style="border-color:#e8b84d;background:#fff9e8;padding:20px;"><h3 style="margin-top:0">Paid Paper — ₹29 (one-time)</h3>'+
    '<p>This paper is part of the <b>'+esc(SL[sess]||sess)+'</b> set for <b>'+esc(N[c]||c)+'</b>.</p>'+
    '<ul style="margin:8px 0 12px 20px;"><li>Pay ₹29 once — read instantly in your browser</li><li>Unlimited reads after purchase (bookmark this page)</li><li>Print / Save as PDF supported</li></ul>'+
    '<a href="'+esc(cu)+'" class="buy-btn" style="display:inline-block;padding:12px 24px;background:#145c8b;color:#fff;text-decoration:none;border-radius:6px;font-weight:600;">Buy & Read Now — ₹29</a>'+signin+'</div>';
  var nav=D.createElement('div');nav.style.cssText='display:flex;gap:8px;margin:12px 0;flex-wrap:wrap;';
  var back=D.createElement('button');back.textContent='← Back to '+esc(N[c]||c);back.style.cssText='padding:8px 14px;background:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;';back.onclick=function(){renderSessions(c);};nav.appendChild(back);
  v.insertBefore(nav,v.firstChild);
}
/* ===== Event delegation fallback ===== */
D.addEventListener('click',function(e){
  var btn=e.target.closest && e.target.closest('button.card');
  if(!btn || !btn.closest('#paper-app'))return;
  if(btn.onclick)return;
  e.preventDefault();
  if(btn.hasAttribute('data-bi')){renderSems(Number(btn.getAttribute('data-bi')));}
  else if(btn.hasAttribute('data-sem')){renderSubs(typeof st.b==='number'?st.b:0,btn.getAttribute('data-sem'));}
  else if(btn.hasAttribute('data-code')){renderSessions(btn.getAttribute('data-code'));}
  else if(btn.hasAttribute('data-sess')){openPaper(st.c,btn.getAttribute('data-sess'));}
});
/* ===== Post-purchase ===== */
function checkPendingAfterInit(){
  var params=new URLSearchParams(window.location.search);
  var purchased=params.get('purchased');
  var code=params.get('code');var sess=params.get('sess');
  if(purchased==='1' && code && sess){
    markOwned(code,sess);
    var r=root();
    var note=D.createElement('div');
    note.className='state';
    note.style.cssText='border-color:#a8d5a8;background:#f0faf0;color:#2a6b2a;margin-bottom:12px;';
    note.textContent='Payment successful! Loading your paper…';
    if(r)r.insertBefore(note,r.firstChild);
    pollOwnership(code,sess,40,function(stt){
      if(note)note.remove();
      if(stt==='owned'){
        for(var bi=0;bi<B.length;bi++){
          var br=B[bi];var found=false;
          Object.keys(br.s).forEach(function(s){if(br.s[s].indexOf(code)>=0)found=s;});
          if(found){st.b=bi;st.s=found;st.c=code;renderSessions(code);break;}
        }
      }
    });
  }
}
/* ===== Styles ===== */
function injectStyles(){
  if(D.getElementById('__paper_app_styles'))return;
  var s=D.createElement('style');s.id='__paper_app_styles';
  s.textContent='.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin:16px 0;}.card{background:#fff;border:1px solid #d9e1e7;border-radius:8px;padding:16px;text-align:left;cursor:pointer;transition:all .15s;display:flex;flex-direction:column;gap:6px;position:relative;font-family:inherit;}.card:hover{border-color:#145c8b;box-shadow:0 2px 8px rgba(20,92,139,.12);transform:translateY(-1px);}.card b{font-size:15px;color:#20252d;}.card small{color:#65717d;font-size:13px;}.tag{display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;align-self:flex-start;background:#e8f5e9;color:#2e7d32;}.tag.locked{background:#fff3e0;color:#e65100;}.state{padding:16px;border:1px solid #d9e1e7;border-radius:8px;background:#f7f9fb;color:#20252d;margin:12px 0;}.muted{color:#65717d;font-size:14px;}#paper-app h2{color:#145c8b;margin:16px 0 8px;}#paper-app button{font-family:inherit;}#paper-app .paper-content img{max-width:100%;height:auto;}';
  D.head.appendChild(s);
}
function showPurchaseVerified(){var r=root();if(!r)return;var note=D.createElement('div');note.className='state';note.style.cssText='border-color:#a8d5a8;background:#f0faf0;color:#2a6b2a;margin-bottom:12px;';note.innerHTML='Payment successful! Verifying your paper access…';r.insertBefore(note,r.firstChild);return note;}
function init(){
  try{
    injectStyles();
    ensureGujaratiFont();
    renderBranches();
    if(window.location.search.indexOf('purchased=1')>=0){
      var url=new URL(window.location);url.searchParams.delete('purchased');
      window.history.replaceState({},'',url.pathname+url.search);
      var note=showPurchaseVerified();
      setTimeout(function(){if(note)note.remove();},5000);
    }
    setTimeout(checkPendingAfterInit,500);
  }catch(e){err(e.message||'Failed to load.');}
}
if(D.readyState==='loading'){D.addEventListener('DOMContentLoaded',init);}else{init();}
})();
