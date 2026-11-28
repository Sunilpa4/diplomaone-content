(function(){
'use strict';
var D=document;
/* ===== Data ===== */
var BRANCHES=[
 {n:'Computer Engineering',s:{'1':['DI01000001','DI01000002','DI01000003'],'2':['DI01000011','DI01000012','DI01000013'],'3':['DI01000021','DI01000022','DI01000023'],'4':['DI01000031','DI01000032','DI01000033'],'5':['DI01000041','DI01000042','DI01000043'],'6':['DI01000051','DI01000052']}},
 {n:'Mechanical Engineering',s:{'1':['DI01000061','DI01000062','DI01000063'],'2':['DI01000071','DI01000072','DI01000073'],'3':['DI01000081','DI01000082','DI01000083'],'4':['DI01000091','DI01000092','DI01000093'],'5':['DI01000101','DI01000102','DI01000103'],'6':['DI01000111','DI01000112','DI01000113']}},
 {n:'Civil Engineering',s:{'1':['DI01000121','DI01000122'],'2':['DI01000131','DI01000132'],'3':['DI01000141','DI01000142'],'4':['DI01000151','DI01000152']}},
 {n:'Electrical Engineering',s:{'1':['DI01000161','DI01000162','DI01000163'],'2':['DI01000171','DI01000172','DI01000173'],'3':['DI01000181','DI01000182','DI01000183'],'4':['DI01000191','DI01000192','DI01000193'],'5':['DI01000201','DI01000202']}},
 {n:'Chemical Engineering',s:{'1':['DI01000211','DI01000212','DI01000213'],'2':['DI01000221','DI01000222','DI01000223'],'3':['DI01000231','DI01000232','DI01000233'],'4':['DI01000241','DI01000242','DI01000243'],'5':['DI01000251','DI01000252','DI01000253']}}
];
/* Subjects: each DI code maps to display name. Sessions array is ordered by upload date. */
var NAMES={'DI01000001':'English','DI01000002':'Mathematics-1','DI01000003':'Physics','DI01000011':'Mathematics-2','DI01000012':'Chemistry','DI01000013':'Engineering Graphics','DI01000021':'Digital Fundamentals','DI01000022':'Programming in C','DI01000023':'Basic Electrical Engg.','DI01000031':'Data Structures','DI01000032':'DBMS','DI01000033':'Computer Networks','DI01000041':'Operating Systems','DI01000042':'Web Technology','DI01000043':'Software Engineering','DI01000051':'Java Programming','DI01000052':'Mobile Computing','DI01000061':'Mathematics-1','DI01000062':'Engineering Drawing','DI01000063':'Workshop Practice','DI01000071':'Engineering Mechanics','DI01000072':'Thermodynamics','DI01000073':'Material Science','DI01000081':'Machine Design (Guj)','DI01000082':'Manufacturing Process','DI01000083':'Fluid Mechanics','DI01000091':'Strength of Materials','DI01000092':'Thermal Engineering','DI01000093':'Theory of Machines','DI01000101':'Production Tech.','DI01000102':'Industrial Engg.','DI01000103':'Power Engineering','DI01000111':'Automobile Engg.','DI01000112':'Refrigeration & AC','DI01000113':'CAD/CAM','DI01000121':'Surveying','DI01000122':'Engineering Mechanics','DI01000131':'Building Materials','DI01000132':'Concrete Technology','DI01000141':'Hydraulics','DI01000142':'Transportation Engg.','DI01000151':'Irrigation Engg. (Guj)','DI01000152':'Structural Analysis','DI01000161':'Mathematics-1','DI01000162':'Basic Electrical','DI01000163':'Engineering Drawing','DI01000171':'Electrical Circuits','DI01000172':'Electronics Devices','DI01000173':'Electrical Measurements','DI01000181':'DC Machines & Transf.','DI01000182':'AC Machines','DI01000183':'Power Systems','DI01000191':'Switchgear & Protection','DI01000192':'Electrical Estimation','DI01000193':'Utilization of Power','DI01000201':'Industrial Drives','DI01000202':'Energy Management','DI01000211':'Mathematics-1','DI01000212':'Engineering Chemistry','DI01000213':'Engineering Drawing','DI01000221':'Fluid Flow','DI01000222':'Heat Transfer','DI01000223':'Mass Transfer','DI01000231':'Chemical Process Calcs','DI01000232':'Process Equipment Design','DI01000233':'Chemical Technology','DI01000241':'Plant Design & Economics','DI01000242':'Chemical Reaction Engg.','DI01000243':'Process Instrumentation','DI01000251':'Petroleum Refining','DI01000252':'Polymer Technology','DI01000253':'Environmental Engg.'};
var SESSIONS={};
function addS(c,ss){if(!SESSIONS[c])SESSIONS[c]=[];for(var i=0;i<ss.length;i++){if(SESSIONS[c].indexOf(ss[i])<0)SESSIONS[c].push(ss[i]);}}
addS('DI01000021',['winter-2025']);addS('DI01000022',['summer-2026','winter-2025']);addS('DI01000042',['summer-2026']);addS('DI01000052',['winter-2025']);addS('DI01000081',['summer-2026','winter-2025']);addS('DI01000082',['summer-2026']);addS('DI01000083',['winter-2025']);addS('DI01000091',['winter-2025']);addS('DI01000102',['winter-2025']);addS('DI01000111',['summer-2026']);addS('DI01000121',['winter-2025']);addS('DI01000151',['summer-2026','winter-2025']);addS('DI01000152',['winter-2025']);addS('DI01000171',['winter-2025']);addS('DI01000181',['summer-2026']);addS('DI01000191',['summer-2026','winter-2025']);addS('DI01000192',['summer-2026']);addS('DI01000212',['winter-2025']);addS('DI01000223',['winter-2025']);addS('DI01000231',['summer-2026']);addS('DI01000243',['winter-2025']);addS('DI01000252',['summer-2026']);
var FREE={'winter-2025':true}; /* winter-2025 = free sample, summer-2026 = paid */
var SKU_BASE={'DI01000021':'DI01000021','DI01000022':'DI01000022','DI01000042':'DI01000042','DI01000052':'DI01000052','DI01000081':'DI01000081','DI01000082':'DI01000082','DI01000083':'DI01000083','DI01000091':'DI01000091','DI01000102':'DI01000102','DI01000111':'DI01000111','DI01000121':'DI01000121','DI01000151':'DI01000151','DI01000152':'DI01000152','DI01000171':'DI01000171','DI01000181':'DI01000181','DI01000191':'DI01000191','DI01000192':'DI01000192','DI01000212':'DI01000212','DI01000223':'DI01000223','DI01000231':'DI01000231','DI01000243':'DI01000243','DI01000252':'DI01000252'};
var SESSION_LABEL={'winter-2025':'Winter 2025 (Free Sample)','summer-2026':'Summer 2026 (Paid ₹29)'};
var B=BRANCHES,N=NAMES,S=SESSIONS,F=FREE,PID=SKU_BASE,SL=SESSION_LABEL;
var COMMIT='ebba2c7'; /* updated on each deploy; files served from this CDN ref */
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
/* Price per paper = ₹29 */
function priceFor(sess){if(isFree(sess))return 0;return 29;}
function productId(c,sess){return PID[c]?PID[c]+'-'+sess:null;}
function checkoutUrl(c,sess){var pid=productId(c,sess);if(!pid)return null;return 'https://diplomaone.in/checkout/?add-to-cart='+encodeURIComponent(pid)+'&return='+encodeURIComponent(window.location.pathname+'?purchased=1&code='+c+'&sess='+sess);}
function paperUrl(c,sess){return GHI+'/papers/'+c+'/'+sess+'.html';}
function ensureGujaratiFont(){
  if(D.getElementById('__diploma_guj_font'))return;
  /* Load Noto Sans Gujarati regardless of whether the page HTML has it */
  var l=D.createElement('link');
  l.id='__diploma_guj_font';
  l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati:wght@400;600;700&display=swap';
  D.head.appendChild(l);
}
/* ===== Ownership cache (mirrors server so the reader can load paid papers) ===== */
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
  /* Quick local cache (set after successful checkout return) */
  if(isOwnedLocally(c,sess))return cb(true);
  /* Use WP REST with nonce if available (logged in / completed order) */
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
  /* Extract body content */
  var tmp=D.createElement('div');tmp.innerHTML=html;
  var body=tmp.querySelector('main,article,.page,#content,body')||tmp;
  /* Inject reader CSS with Gujarati font priority */
  var css='<style id="__paper_reader_css">#paper-app #vw{max-width:100%;}#paper-app #vw *{font-family:"Noto Sans Gujarati","Noto Sans",system-ui,-apple-system,"Segoe UI",Arial,sans-serif !important;}#paper-app .qc{page-break-after:always;}@media print{body *{visibility:hidden;}#paper-app,#paper-app *{visibility:visible;}#paper-app{position:absolute;left:0;top:0;width:100%;}.nav-bar,.back-btn{display:none!important;}}</style>';
  v.innerHTML=css+'<div class="paper-content" style="background:#fff;border-radius:8px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">'+body.innerHTML+'</div>';
  /* Add navigation */
  var nav=D.createElement('div');nav.className='nav-bar';nav.style.cssText='display:flex;gap:8px;margin:12px 0;flex-wrap:wrap;align-items:center;';
  var back=D.createElement('button');back.textContent='← Back to '+esc(N[c]||c);back.className='back-btn';back.style.cssText='padding:8px 14px;background:#145c8b;color:#fff;border:none;border-radius:4px;cursor:pointer;';back.onclick=function(){renderSessions(c);};nav.appendChild(back);
  var print=D.createElement('button');print.textContent='🖨️ Print / Save PDF';print.style.cssText='padding:8px 14px;background:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;';print.onclick=function(){window.print();};nav.appendChild(print);
  v.insertBefore(nav,v.firstChild);
  /* Override any inline font-family in the loaded content to include Gujarati */
  v.querySelectorAll('[style*="font-family"]').forEach(function(el){
    el.style.fontFamily='"Noto Sans Gujarati","Noto Sans",system-ui,-apple-system,"Segoe UI",Arial,sans-serif';
  });
  /* Re-run MathJax if present */
  if(window.MathJax && window.MathJax.typesetPromise){try{window.MathJax.typesetPromise([v]);}catch(e){}}
  v.scrollTop=0;window.scrollTo({top:(v.getBoundingClientRect().top+window.scrollY-20),behavior:'smooth'});
}
function renderPaywall(c,sess){
  var v=D.getElementById('vw')||vw();
  var pid=productId(c,sess);
  var cu=checkoutUrl(c,sess);
  var cur=window.DiplomaOneAccess && window.DiplomaOneAccess.current_user ? window.DiplomaOneAccess.current_user : 0;
  var signin='';if(!cur){signin='<p class="muted" style="margin-top:8px;">You\'ll be asked to sign in during checkout (email) to track your purchase. Free Winter 2025 papers do not require sign-in.</p>';}
  v.innerHTML='<div class="state" style="border-color:#e8b84d;background:#fff9e8;padding:20px;"><h3 style="margin-top:0">🔒 Paid Paper — ₹29 (one-time)</h3>'+
    '<p>This paper is part of the <b>'+esc(SL[sess]||sess)+'</b> set for <b>'+esc(N[c]||c)+'</b>.</p>'+
    '<ul style="margin:8px 0 12px 20px;"><li>Pay ₹29 once — read instantly in your browser</li><li>Unlimited reads after purchase (bookmark this page)</li><li>Print / Save as PDF supported</li></ul>'+
    '<a href="'+esc(cu)+'" class="buy-btn" style="display:inline-block;padding:12px 24px;background:#145c8b;color:#fff;text-decoration:none;border-radius:6px;font-weight:600;">Buy & Read Now — ₹29</a>'+signin+'</div>';
  var nav=D.createElement('div');nav.style.cssText='display:flex;gap:8px;margin:12px 0;flex-wrap:wrap;';
  var back=D.createElement('button');back.textContent='← Back to '+esc(N[c]||c);back.style.cssText='padding:8px 14px;background:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;';back.onclick=function(){renderSessions(c);};nav.appendChild(back);
  v.insertBefore(nav,v.firstChild);
}
/* ===== Event delegation fallback (in case onclick is stripped by a plugin) ===== */
D.addEventListener('click',function(e){
  var btn=e.target.closest && e.target.closest('button.card');
  if(!btn || !btn.closest('#paper-app'))return;
  /* If onclick already handled it, the default runs. This is just a safety net. */
  if(btn.onclick)return;
  e.preventDefault();
  if(btn.hasAttribute('data-bi')){renderSems(Number(btn.getAttribute('data-bi')));}
  else if(btn.hasAttribute('data-sem')){renderSubs(typeof st.b==='number'?st.b:0,btn.getAttribute('data-sem'));}
  else if(btn.hasAttribute('data-code')){renderSessions(btn.getAttribute('data-code'));}
  else if(btn.hasAttribute('data-sess')){openPaper(st.c,btn.getAttribute('data-sess'));}
});

/* ===== Post-purchase: check for purchased=1 return ===== */
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
/* ===== Init ===== */
function injectStyles(){
  if(D.getElementById('__paper_app_styles'))return;
  var s=D.createElement('style');s.id='__paper_app_styles';
  s.textContent='.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin:16px 0;}.card{background:#fff;border:1px solid #d9e1e7;border-radius:8px;padding:16px;text-align:left;cursor:pointer;transition:all .15s;display:flex;flex-direction:column;gap:6px;position:relative;}.card:hover{border-color:#145c8b;box-shadow:0 2px 8px rgba(20,92,139,.12);transform:translateY(-1px);}.card b{font-size:15px;color:#20252d;}.card small{color:#65717d;font-size:13px;}.tag{display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;align-self:flex-start;background:#e8f5e9;color:#2e7d32;}.tag.locked{background:#fff3e0;color:#e65100;}.state{padding:16px;border:1px solid #d9e1e7;border-radius:8px;background:#f7f9fb;color:#20252d;margin:12px 0;}.muted{color:#65717d;font-size:14px;}#paper-app h2{color:#145c8b;margin:16px 0 8px;}#paper-app button{font-family:inherit;}#paper-app .paper-content img{max-width:100%;height:auto;}';
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