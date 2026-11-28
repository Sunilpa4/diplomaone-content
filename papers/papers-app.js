(function(){
'use strict';
var D=document;
/* ===== Data (auto-generated from catalog.json) ===== */
var BRANCHES={
'computer':{n:'Computer Engineering',code:'07',s:{'1':['DI01000131','DI01000151','DI01000021'],'2':['DI02000101'],'3':['DI03000021','DI03000011','DI03000031','DI03000041','DI03000051'],'4':['DI04000021','DI04000011']}},
'mechanical':{n:'Mechanical Engineering',code:'19',s:{'1':['DI01000021','DI01000191','DI01000181'],'2':['DI01000121'],'3':['DI03000141','DI03000161','DI03000171','DI03019011','DI03000151','DI03000201'],'4':['DI04019011','DI04000241','DI04000251']}},
'civil':{n:'Civil Engineering',code:'06',s:{'1':['DI01000021','DI01000121','DI01006021']}},
'electrical':{n:'Electrical Engineering',code:'09',s:{'1':['DI01000021','DI01000081','DI01009011'],'2':['DI02000161','DI02000171'],'3':['DI03000081','DI03000091','DI03000101','DI03009011','DI03009021'],'4':['DI04000171','DI04000321','DI04009011']}},
'chemical':{n:'Chemical Engineering',code:'05',s:{'1':['DI01000021','DI01005011','DI01005021'],'2':['DI02005021','DI02005011','DI01000121'],'3':['DI03005031','DI03005021','DI03005061','DI03005011'],'4':['DI04005021','DI04005041','DI04005071']}},
};
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
'DI04000321':'Electrical Machines – II',
'DI04005021':'Mass Transfer-I',
'DI04005041':'Chemical Engineering Thermodynamics',
'DI04005071':'Petroleum Refining and Petroleum Technology',
'DI04009011':'Substation Engineering',
'DI04019011':'Thermal Engineering - I',
};
var META={
'DI01000021':{cat:'Basic Science',cr:4},
'DI01000081':{cat:'Professional Core',cr:4},
'DI01000121':{cat:'Basic Science',cr:4},
'DI01000131':{cat:'Professional Core',cr:4},
'DI01000151':{cat:'Engineering Science',cr:3},
'DI01000181':{cat:'Engineering Science',cr:4},
'DI01000191':{cat:'Professional Core',cr:4},
'DI01005011':{cat:'Professional Core',cr:1},
'DI01005021':{cat:'Engineering Science',cr:1},
'DI01006021':{cat:'Engineering Science',cr:3},
'DI01009011':{cat:'Engineering Science',cr:3},
'DI02000101':{cat:'Professional Core',cr:4},
'DI02000161':{cat:'Engineering Science',cr:3},
'DI02000171':{cat:'Professional Core',cr:4},
'DI02005011':{cat:'Engineering Science',cr:2},
'DI02005021':{cat:'Chemical Engineering',cr:2},
'DI03000011':{cat:'Engineering Science',cr:3},
'DI03000021':{cat:'Professional Core',cr:4},
'DI03000031':{cat:'Professional Core',cr:4},
'DI03000041':{cat:'Professional Core',cr:4},
'DI03000051':{cat:'Professional Core',cr:4},
'DI03000081':{cat:'Professional Core',cr:4},
'DI03000091':{cat:'Professional Core',cr:4},
'DI03000101':{cat:'Professional Core',cr:4},
'DI03000141':{cat:'Professional Core',cr:4},
'DI03000151':{cat:'Professional Core',cr:4},
'DI03000161':{cat:'Professional Core',cr:4},
'DI03000171':{cat:'Professional Core',cr:4},
'DI03000201':{cat:'Engineering Science',cr:3},
'DI03005011':{cat:'Core',cr:3},
'DI03005021':{cat:'Core',cr:3},
'DI03005031':{cat:'Core',cr:3},
'DI03005061':{cat:'Core',cr:3},
'DI03009011':{cat:'Professional Core',cr:4},
'DI03009021':{cat:'Professional Core',cr:3},
'DI03019011':{cat:'Professional Core',cr:3},
'DI04000011':{cat:'Professional Core',cr:4},
'DI04000021':{cat:'Professional Core',cr:4},
'DI04000171':{cat:'Professional Core',cr:4},
'DI04000241':{cat:'Professional Core',cr:4},
'DI04000251':{cat:'Professional Core',cr:4},
'DI04000321':{cat:'Professional Core',cr:4},
'DI04005021':{cat:'Core',cr:4},
'DI04005041':{cat:'Core',cr:4},
'DI04005071':{cat:'Professional Elective',cr:4},
'DI04009011':{cat:'Professional Core',cr:4},
'DI04019011':{cat:'Professional Core',cr:4},
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
var SKU={
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

var FREE={'winter-2025':true,'summer-2025':true};
var SESSLABEL={'winter-2025':'Winter 2025','summer-2025':'Summer 2025','summer-2026':'Summer 2026'};
var COMMIT='ea5aa41';
var GHI='https://cdn.jsdelivr.net/gh/Sunilpa4/diplomaone-content@'+COMMIT;
/* ===== Utility ===== */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function $(sel,p){return (p||D).querySelector(sel);}
function app(){return $('#paper-app');}
function vw(){var e=app();if(!e){var m=$('#main')||D.querySelector('main')||D.body;e=D.createElement('div');e.id='paper-app';m.appendChild(e);}return e;}
function err(m){vw().innerHTML='<p style="color:#800">Error: '+esc(m)+' — <a href="'+esc(window.location.pathname)+'">Refresh</a></p>';}
function isFree(s){return !!FREE[s];}
function productId(c,s){return SKU[c]?SKU[c]+'-'+s:null;}
function checkoutUrl(c,s){
  var pid=productId(c,s);if(!pid)return null;
  var ret=window.location.pathname+'?purchased=1#'+'paper/'+c+'/'+s;
  return 'https://diplomaone.in/checkout/?add-to-cart='+encodeURIComponent(pid)+'&return='+encodeURIComponent(ret);
}
function paperUrl(c,s){return GHI+'/papers/'+c+'/'+s+'.html';}
function findCodeLoc(c){
  var bkeys=Object.keys(BRANCHES);
  for(var i=0;i<bkeys.length;i++){
    var b=BRANCHES[bkeys[i]];
    for(var s in b.s){if((b.s[s]||[]).indexOf(c)>=0)return{branch:bkeys[i],sem:s,name:b.n};}
  }
  return null;
}
function wpBtn(href,html,extra){
  return '<div class="wp-block-button is-style-outline" style="margin-bottom:8px;">'+
    '<a class="wp-block-button__link wp-element-button" href="'+esc(href)+'" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;width:100%;text-align:left;'+(extra||'')+'">'+html+'</a></div>';
}
function backLink(href,txt){return '<p class="has-small-font-size"><a href="'+esc(href)+'">← '+esc(txt)+'</a></p>';}
/* ===== Ownership ===== */
var OWNKEY='__diplomaone_owned';
function getOwned(){try{var v=localStorage.getItem(OWNKEY);return v?JSON.parse(v):{};}catch(e){return{};}}
function setOwned(pid){var o=getOwned();o[pid]=Date.now();try{localStorage.setItem(OWNKEY,JSON.stringify(o));}catch(e){}}
function hasLocal(c,s){if(isFree(s))return true;var pid=productId(c,s);return !!getOwned()[pid];}
var restUrl='https://diplomaone.in/wp-json/diplomaone/v1';
var restNonce=window.DiplomaOneAccess&&window.DiplomaOneAccess.nonce?window.DiplomaOneAccess.nonce:'';
function hasAccess(c,s,cb){
  if(isFree(s))return cb(true);
  if(hasLocal(c,s))return cb(true);
  var pid=productId(c,s);if(!pid)return cb(false);
  var hdrs={'Accept':'application/json'};
  if(restNonce)hdrs['X-WP-Nonce']=restNonce;
  fetch(restUrl+'/has-access?product_id='+encodeURIComponent(pid),{credentials:'include',headers:hdrs})
    .then(function(r){return r.json();})
    .then(function(j){if(j&&j.access){setOwned(pid);cb(true);}else{cb(false);}})
    .catch(function(){cb(false);});
}
/* ===== Routing (hash-based) ===== */
var R={view:'branches',b:null,s:null,c:null,sess:null};
function parseHash(){
  var h=window.location.hash.replace(/^#/,'');
  var p=h.split('/');
  R={view:p[0]||'branches',b:p[1]||null,s:p[2]||null,c:p[3]||null,sess:p[4]||null};
}
function nav(hash){window.location.hash=hash;}
/* ===== Views matching notes page style ===== */
function renderBranches(){
  var v=vw();
  var h='<h2>Solved Papers</h2>'+
    '<p>Choose your branch, semester and subject to browse solved exam papers. Winter 2025 papers are free samples. Summer 2026 papers are ₹29 each (one-time purchase, instant access).</p>';
  var bkeys=Object.keys(BRANCHES);
  for(var i=0;i<bkeys.length;i++){
    var b=BRANCHES[bkeys[i]];
    var cnt=0;
    for(var s in b.s){cnt+=(b.s[s]||[]).filter(function(c){return SESSIONS[c]&&SESSIONS[c].length;}).length;}
    h+=wpBtn('#branch/'+bkeys[i],
      '<span><strong>'+esc(b.n)+'</strong><br><small style="opacity:0.7;font-weight:400">Branch '+esc(b.code)+' · '+cnt+' subjects</small></span><span>View →</span>');
  }
  v.innerHTML=h;
}
function renderSems(){
  var b=BRANCHES[R.b];if(!b){nav('');return;}
  var v=vw();
  var h=backLink('#','All branches')+
    '<h2 style="margin-top:4px;">'+esc(b.n)+'</h2>'+
    '<p>Choose a semester to see solved papers.</p>';
  var sems=Object.keys(b.s).filter(function(s){return(b.s[s]||[]).filter(function(c){return SESSIONS[c]&&SESSIONS[c].length;}).length;}).sort();
  for(var i=0;i<sems.length;i++){
    var s=sems[i];
    var cnt=(b.s[s]||[]).filter(function(c){return SESSIONS[c]&&SESSIONS[c].length;}).length;
    h+=wpBtn('#sem/'+R.b+'/'+s,
      '<span><strong>Semester '+esc(s)+'</strong><br><small style="opacity:0.7;font-weight:400">'+cnt+' subjects with papers</small></span><span>View →</span>');
  }
  v.innerHTML=h;
}
function renderSubs(){
  var b=BRANCHES[R.b];if(!b||!b.s[R.s]){nav('#branch/'+R.b);return;}
  var v=vw();
  var codes=(b.s[R.s]||[]).filter(function(c){return SESSIONS[c]&&SESSIONS[c].length;});
  var h=backLink('#branch/'+R.b,esc(b.n))+
    '<h2 style="margin-top:4px;">'+esc(b.n)+' — Semester '+esc(R.s)+'</h2>'+
    '<p>Select a subject to see available solved papers.</p>';
  for(var i=0;i<codes.length;i++){
    var c=codes[i],nm=N[c]||c,m=META[c]||{cat:'',cr:0};
    var pcnt=(SESSIONS[c]||[]).length;
    h+=wpBtn('#subj/'+R.b+'/'+R.s+'/'+c,
      '<span><strong>'+esc(nm)+'</strong><br><small style="opacity:0.7;font-weight:400">'+esc(c)+' · '+(m.cat||'')+' · '+pcnt+' papers</small></span><span>View →</span>');
  }
  v.innerHTML=h;
}
function renderSessView(){
  var b=BRANCHES[R.b];if(!b){nav('');return;}
  var c=R.c,nm=N[c]||c,ss=SESSIONS[c]||[];
  var v=vw();
  var back='#sem/'+R.b+'/'+R.s;
  var h=backLink(back,esc(b.n)+' — Semester '+esc(R.s))+
    '<p class="has-small-font-size" style="opacity:0.7;text-transform:uppercase;letter-spacing:1px;margin:16px 0 4px;">'+esc(c)+'</p>'+
    '<h2 style="margin-top:0;">'+esc(nm)+'</h2>'+
    '<p>Choose an exam session. Free papers open immediately; paid papers require a one-time ₹29 purchase.</p>';
  for(var i=0;i<ss.length;i++){
    var s=ss[i],fr=isFree(s);
    var label=SESSLABEL[s]||s;
    var tag=fr?'<span style="background:#e8f5e9;color:#2e7d32;padding:2px 8px;border-radius:4px;font-size:12px;margin-left:8px;">FREE</span>':'<span style="background:#fff3e0;color:#e65100;padding:2px 8px;border-radius:4px;font-size:12px;margin-left:8px;">₹29</span>';
    h+=wpBtn('#paper/'+c+'/'+s,
      '<span><strong>'+esc(label)+'</strong>'+tag+'</span><span>'+(fr?'Read →':'Buy & Read →')+'</span>');
  }
  v.innerHTML=h;
}
function renderPaperView(){
  var c=R.c,s=R.sess;
  var v=vw();
  var nm=N[c]||c,loc=findCodeLoc(c);
  var backTo;
  if(R.b&&R.s){backTo='#subj/'+R.b+'/'+R.s+'/'+c;}
  else if(loc){backTo='#subj/'+loc.branch+'/'+loc.sem+'/'+c;R.b=loc.branch;R.s=loc.sem;}
  else{backTo='#';}
  if(!isFree(s)){
    v.innerHTML=backLink(backTo,'← '+esc(nm))+
      '<div style="padding:16px;border:1px solid #d9e1e7;border-radius:4px;background:#f7f9fb;margin:16px 0;">Checking access…</div>';
    hasAccess(c,s,function(ok){
      if(ok){showPaper(c,s,backTo,nm);}
      else{showPay(c,s,backTo,nm);}
    });
    return;
  }
  showPaper(c,s,backTo,nm);
}
function showPaper(c,s,back,nm){
  var v=vw();
  v.innerHTML=backLink(back,'← '+esc(nm))+
    '<div style="padding:16px;border:1px solid #d9e1e7;border-radius:4px;background:#f7f9fb;margin:16px 0;">Loading paper…</div>';
  fetch(paperUrl(c,s),{cache:'no-cache'}).then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.text();}).then(function(html){
    var tmp=D.createElement('div');tmp.innerHTML=html;
    var body=tmp.querySelector('main,article,.page,#content,body')||tmp;
    var css='<style>'+
      '#paper-app .pw{background:#fff;border:1px solid #ddd;border-radius:4px;padding:24px;margin:16px 0;}'+
      '#paper-app .pw img{max-width:100%;height:auto;}'+
      '#paper-app .pt{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #eee;align-items:center;}'+
      '@media print{body *{visibility:hidden;}#paper-app,#paper-app *{visibility:visible;}#paper-app{position:absolute;left:0;top:0;width:100%;}.pt{display:none!important;}}'+
      '</style>';
    v.innerHTML=css+backLink(back,'← '+esc(nm))+
      '<div class="pw"><div class="pt"><strong>'+esc(nm)+' — '+esc(SESSLABEL[s]||s)+'</strong><span style="flex:1"></span></div><div id="pbody"></div></div>';
    var pb=D.createElement('button');
    pb.className='wp-block-button__link wp-element-button';
    pb.style.cssText='background:#fff;color:#1e1e1e;border:1px solid #ccc;cursor:pointer;';
    pb.textContent='Print / Save PDF';
    pb.onclick=function(){window.print();};
    $('.pt',v).appendChild(pb);
    $('#pbody',v).innerHTML=body.innerHTML;
    if(window.MathJax&&window.MathJax.typesetPromise){try{window.MathJax.typesetPromise([$('.pw',v)]);}catch(e){}}
  }).catch(function(e){
    v.innerHTML=backLink(back,'← '+esc(nm))+
      '<div style="padding:16px;border:1px solid #d66;border-radius:4px;background:#fee;color:#800;margin:16px 0;">Failed to load paper: '+esc(e.message)+'</div>';
  });
}
function showPay(c,s,back,nm){
  var v=vw();
  var cu=checkoutUrl(c,s);
  v.innerHTML=backLink(back,'← '+esc(nm))+
    '<div style="padding:24px;border:1px solid #e8b84d;border-radius:4px;background:#fff9e8;margin:16px 0;">'+
    '<p class="has-small-font-size" style="margin:0 0 4px;opacity:0.7;text-transform:uppercase;letter-spacing:1px;">PAID PAPER</p>'+
    '<h3 style="margin:0 0 8px;">'+esc(nm)+' — '+esc(SESSLABEL[s]||s)+'</h3>'+
    '<p>This solved paper is available for a one-time payment of <strong>₹29</strong>.</p>'+
    '<ul style="margin:8px 0 16px 20px;"><li>Pay ₹29 once — read instantly in your browser</li><li>Unlimited reads after purchase</li><li>Print / Save as PDF supported</li></ul>'+
    '<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="'+esc(cu)+'">Buy &amp; Read Now — ₹29</a></div>'+
    '<p class="has-small-font-size" style="margin-top:12px;opacity:0.8;">You will be asked for your email during checkout. Free papers do not require sign-in.</p>'+
    '</div>';
}
/* ===== Post-purchase polling ===== */
function pollPurchase(){
  var sp=new URLSearchParams(window.location.search);
  if(sp.get('purchased')!=='1')return;
  var h=window.location.hash.replace(/^#/,'');
  var p=h.split('/');
  if(p[0]==='paper'&&p[1]&&p[2]){
    var c=p[1],s=p[2],pid=productId(c,s);
    if(pid)setOwned(pid);
    var tries=0;
    function check(){
      hasAccess(c,s,function(ok){if(ok){render();}else if(tries++<40)setTimeout(check,1500);});
    }
    setTimeout(check,1000);
  }
}
/* ===== Main ===== */
function render(){
  try{
    parseHash();
    var v=R.view;
    if(v==='branches')renderBranches();
    else if(v==='branch'&&R.b)renderSems();
    else if(v==='sem'&&R.b&&R.s)renderSubs();
    else if(v==='subj'&&R.b&&R.s&&R.c)renderSessView();
    else if(v==='paper'&&R.c&&R.sess)renderPaperView();
    else{R.view='branches';renderBranches();}
  }catch(e){err(e.message||'Failed to load');}
}
function init(){
  vw();
  window.addEventListener('hashchange',render);
  render();
  setTimeout(pollPurchase,500);
}
if(D.readyState==='loading'){D.addEventListener('DOMContentLoaded',init);}else{init();}
})();
