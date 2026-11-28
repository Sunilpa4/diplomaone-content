(function(){
'use strict';
var D=document;
/* ===== Data ===== */
var BRANCHES={
'computer':{n:'Computer Engineering',code:'07',s:{'1':['DI01000131','DI01000151','DI01000021'],'2':['DI02000101'],'3':['DI03000021','DI03000011','DI03000031','DI03000041','DI03000051'],'4':['DI04000021','DI04000011']}},
'mechanical':{n:'Mechanical Engineering',code:'19',s:{'1':['DI01000021','DI01000191','DI01000181'],'2':['DI01000121'],'3':['DI03000141','DI03000161','DI03000171','DI03019011','DI03000151','DI03000201'],'4':['DI04019011','DI04000241','DI04000251']}},
'civil':{n:'Civil Engineering',code:'06',s:{'1':['DI01000021','DI01000121','DI01006021']}},
'electrical':{n:'Electrical Engineering',code:'09',s:{'1':['DI01000021','DI01000081','DI01009011'],'2':['DI02000161','DI02000171'],'3':['DI03000081','DI03000091','DI03000101','DI03009011','DI03009021'],'4':['DI04000171','DI04000321','DI04009011']}},
'chemical':{n:'Chemical Engineering',code:'05',s:{'1':['DI01000021','DI01005011','DI01005021'],'2':['DI02005021','DI02005011','DI01000121'],'3':['DI03005031','DI03005021','DI03005061','DI03005011'],'4':['DI04005021','DI04005041','DI04005071']}},
};
var N={
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
var SESS={};
function addS(c,ss){if(!SESS[c])SESS[c]=[];for(var i=0;i<ss.length;i++){if(SESS[c].indexOf(ss[i])<0)SESS[c].push(ss[i]);}}
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
var PID={
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

var COMMIT='fd08cf1';
var GHI='https://cdn.jsdelivr.net/gh/Sunilpa4/diplomaone-content@'+COMMIT;
var FREE={'winter-2025':true,'summer-2025':true};
var SLABEL={'winter-2025':'Winter 2025','summer-2025':'Summer 2025','summer-2026':'Summer 2026'};
var R={v:'branches',b:null,s:null,c:null,sess:null};
/* ===== Utility ===== */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function $(s,p){return(p||D).querySelector(s);}
function app(){return $('#paper-app');}
function vw(){var e=app();if(!e){var m=$('#main')||D.querySelector('main')||D.body;e=D.createElement('div');e.id='paper-app';m.appendChild(e);}return e;}
function isFree(s){return !!FREE[s];}
function pid(c,s){return PID[c]?PID[c]+'-'+s:null;}
function curl(c,s){var p=pid(c,s);if(!p)return null;var ret=window.location.pathname+'?p=1#paper/'+c+'/'+s;return'https://diplomaone.in/checkout/?add-to-cart='+encodeURIComponent(p)+'&return='+encodeURIComponent(ret);}
function purl(c,s){return GHI+'/papers/'+c+'/'+s+'.html';}
function findCode(c){var bk=Object.keys(BRANCHES);for(var i=0;i<bk.length;i++){var b=BRANCHES[bk[i]];for(var s in b.s){if((b.s[s]||[]).indexOf(c)>=0)return{branch:bk[i],sem:s,name:b.n};}}return null;}
/* Card style - rectangular cards matching site design */
var CARD_STYLE='display:block;text-decoration:none;color:inherit;background:#fff;border:1px solid #d9d9d9;border-radius:6px;padding:16px 20px;margin-bottom:10px;transition:border-color .15s,box-shadow .15s;';
var CARD_HOVER='this.style.borderColor="#145c8b";this.style.boxShadow="0 2px 8px rgba(20,92,139,.1)"';
var CARD_OUT='this.style.borderColor="#d9d9d9";this.style.boxShadow="none"';
function card(href,heading,meta,arrow){
  return '<a href="'+esc(href)+'" style="'+CARD_STYLE+'" onmouseover="'+CARD_HOVER+'" onmouseout="'+CARD_OUT+'">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">'+
    '<div style="flex:1;min-width:0;">'+
    '<strong style="font-size:15px;color:#1e1e1e;display:block;">'+esc(heading)+'</strong>'+
    (meta?'<small style="color:#666;font-size:13px;display:block;margin-top:3px;">'+esc(meta)+'</small>':'')+
    '</div>'+
    '<span style="color:#145c8b;font-weight:600;white-space:nowrap;font-size:14px;">'+esc(arrow||'Open →')+'</span>'+
    '</div></a>';
}
function backLink(href,txt){return'<p style="margin:0 0 8px;font-size:14px;"><a href="'+esc(href)+'" style="color:#145c8b;text-decoration:none;">← '+esc(txt)+'</a></p>';}
/* ===== Ownership ===== */
var OK='__dpo';
function getOK(){try{var v=localStorage.getItem(OK);return v?JSON.parse(v):{};}catch(e){return{};}}
function setOK(p){var o=getOK();o[p]=Date.now();try{localStorage.setItem(OK,JSON.stringify(o));}catch(e){}}
function hasLocal(c,s){if(isFree(s))return true;var p=pid(c,s);return!!getOK()[p];}
var RURL='https://diplomaone.in/wp-json/diplomaone/v1';
var RN=window.DiplomaOneAccess&&window.DiplomaOneAccess.nonce?window.DiplomaOneAccess.nonce:'';
function checkAccess(c,s,cb){
  if(isFree(s))return cb(true);
  if(hasLocal(c,s))return cb(true);
  var p=pid(c,s);if(!p)return cb(false);
  var h={'Accept':'application/json'};
  if(RN)h['X-WP-Nonce']=RN;
  fetch(RURL+'/has-access?product_id='+encodeURIComponent(p),{credentials:'include',headers:h})
    .then(function(r){return r.json();})
    .then(function(j){if(j&&j.access){setOK(p);cb(true);}else{cb(false);}})
    .catch(function(){cb(false);});
}
/* ===== Routing ===== */
function parseHash(){
  var h=window.location.hash.replace(/^#/,'');
  var p=h.split('/');
  R={v:p[0]||'branches',b:p[1]||null,s:p[2]||null,c:p[3]||null,sess:p[4]||null};
}
function go(hash){window.location.hash=hash;}
/* ===== Views ===== */
function viewBranches(){
  var v=vw();
  var h='<h2 style="margin-top:0;">Solved Papers</h2>'+
    '<p style="color:#555;">Choose your branch, semester and subject to browse solved exam papers. Papers are available for reading online or saving as PDF. Paid papers require a one-time purchase.</p>'+
    '<div style="margin-top:20px;">';
  var keys=Object.keys(BRANCHES);
  for(var i=0;i<keys.length;i++){
    var b=BRANCHES[keys[i]],cnt=0;
    for(var s in b.s){cnt+=(b.s[s]||[]).filter(function(c){return SESS[c]&&SESS[c].length;}).length;}
    h+=card('#branch/'+keys[i],b.n,'Branch '+b.code+' · '+cnt+' subjects','View →');
  }
  h+='</div>';
  v.innerHTML=h;
}
function viewSems(){
  var b=BRANCHES[R.b];if(!b){go('');return;}
  var v=vw();
  var h=backLink('#','All branches')+
    '<h2 style="margin:4px 0 8px;">'+esc(b.n)+'</h2>'+
    '<p style="color:#555;">Choose a semester to see solved papers.</p>'+
    '<div style="margin-top:16px;">';
  var sems=Object.keys(b.s).filter(function(s){return(b.s[s]||[]).filter(function(c){return SESS[c]&&SESS[c].length;}).length;}).sort();
  for(var i=0;i<sems.length;i++){
    var s=sems[i],cnt=(b.s[s]||[]).filter(function(c){return SESS[c]&&SESS[c].length;}).length;
    h+=card('#sem/'+R.b+'/'+s,'Semester '+s,cnt+' subjects with papers','View →');
  }
  h+='</div>';
  v.innerHTML=h;
}
function viewSubs(){
  var b=BRANCHES[R.b];if(!b||!b.s[R.s]){go('#branch/'+R.b);return;}
  var v=vw();
  var codes=(b.s[R.s]||[]).filter(function(c){return SESS[c]&&SESS[c].length;});
  var h=backLink('#branch/'+R.b,b.n)+
    '<h2 style="margin:4px 0 8px;">'+esc(b.n)+' — Semester '+esc(R.s)+'</h2>'+
    '<p style="color:#555;">Select a subject to see available solved papers.</p>'+
    '<div style="margin-top:16px;">';
  for(var i=0;i<codes.length;i++){
    var c=codes[i],nm=N[c]||c,m=META[c]||{cat:'',cr:0};
    var pc=(SESS[c]||[]).length;
    h+=card('#subj/'+R.b+'/'+R.s+'/'+c,nm,c+' · '+(m.cat||'')+' · '+pc+' papers','View →');
  }
  h+='</div>';
  v.innerHTML=h;
}
function viewSessPg(){
  var b=BRANCHES[R.b];if(!b){go('');return;}
  var c=R.c,nm=N[c]||c,ss=SESS[c]||[];
  var v=vw();
  var back='#sem/'+R.b+'/'+R.s;
  var h=backLink(back,b.n+' — Semester '+R.s)+
    '<p style="color:#888;font-size:13px;text-transform:uppercase;letter-spacing:1px;margin:12px 0 4px;">'+esc(c)+'</p>'+
    '<h2 style="margin:0 0 8px;">'+esc(nm)+'</h2>'+
    '<p style="color:#555;">Choose an exam session to read the solved paper.</p>'+
    '<div style="margin-top:16px;">';
  for(var i=0;i<ss.length;i++){
    var s=ss[i];
    h+=card('#paper/'+c+'/'+s,SLABEL[s]||s,'','Read →');
  }
  h+='</div>';
  v.innerHTML=h;
}
function viewPaper(){
  var c=R.c,s=R.sess;
  var v=vw();
  var nm=N[c]||c,loc=findCode(c);
  var backTo;
  if(R.b&&R.s){backTo='#subj/'+R.b+'/'+R.s+'/'+c;}
  else if(loc){backTo='#subj/'+loc.branch+'/'+loc.sem+'/'+c;R.b=loc.branch;R.s=loc.sem;}
  else{backTo='#';}
  v.innerHTML=backLink(backTo,'← '+nm)+
    '<div style="padding:20px;background:#f7f9fb;border:1px solid #d9e1e7;border-radius:6px;margin:12px 0;">Loading paper…</div>';
  checkAccess(c,s,function(ok){
    if(ok){showPaper(c,s,backTo,nm);}
    else{showPaywall(c,s,backTo,nm);}
  });
}
function showPaper(c,s,back,nm){
  var v=vw();
  v.innerHTML=backLink(back,'← '+nm)+
    '<div style="padding:20px;background:#f7f9fb;border:1px solid #d9e1e7;border-radius:6px;margin:12px 0;">Loading paper…</div>';
  fetch(purl(c,s),{cache:'no-cache'}).then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.text();}).then(function(html){
    var tmp=D.createElement('div');tmp.innerHTML=html;
    var body=tmp.querySelector('main,article,.page,#content,body')||tmp;
    var css='<style>'+
      '#paper-app .pw{background:#fff;border:1px solid #ddd;border-radius:6px;padding:24px;margin:16px 0;}'+
      '#paper-app .pw img{max-width:100%;height:auto;}'+
      '#paper-app .ptb{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #eee;align-items:center;}'+
      '@media print{body *{visibility:hidden;}#paper-app,#paper-app *{visibility:visible;}#paper-app{position:absolute;left:0;top:0;width:100%;}.ptb a,.ptb button{display:none!important;}}'+
      '</style>';
    v.innerHTML=css+backLink(back,'← '+nm)+
      '<div class="pw"><div class="ptb"><strong>'+esc(nm)+' — '+esc(SLABEL[s]||s)+'</strong><span style="flex:1"></span></div><div id="pb"></div></div>';
    var pb=D.createElement('button');
    pb.textContent='Print / Save PDF';
    pb.style.cssText='padding:6px 14px;background:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;font-size:14px;';
    pb.onclick=function(){window.print();};
    $('.ptb',v).appendChild(pb);
    $('#pb',v).innerHTML=body.innerHTML;
    if(window.MathJax&&window.MathJax.typesetPromise){try{window.MathJax.typesetPromise([$('.pw',v)]);}catch(e){}}
  }).catch(function(e){
    v.innerHTML=backLink(back,'← '+nm)+
      '<div style="padding:16px;border:1px solid #d66;border-radius:6px;background:#fee;color:#800;margin:12px 0;">Failed to load paper: '+esc(e.message)+'</div>';
  });
}
function showPaywall(c,s,back,nm){
  var v=vw();
  var cu=curl(c,s);
  v.innerHTML=backLink(back,'← '+nm)+
    '<div style="padding:24px;border:1px solid #e8b84d;border-radius:6px;background:#fff9e8;margin:16px 0;">'+
    '<p style="color:#a07000;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px;font-weight:600;">PAID PAPER</p>'+
    '<h3 style="margin:0 0 8px;">'+esc(nm)+' — '+esc(SLABEL[s]||s)+'</h3>'+
    '<p>This solved paper is available for a one-time payment of <strong>₹29</strong>.</p>'+
    '<ul style="margin:8px 0 16px 20px;padding:0;"><li style="margin-bottom:4px;">Pay ₹29 once — read instantly in your browser</li><li style="margin-bottom:4px;">Unlimited reads after purchase</li><li>Print / Save as PDF supported</li></ul>'+
    '<div style="margin-top:12px;"><a href="'+esc(cu)+'" style="display:inline-block;padding:10px 20px;background:#145c8b;color:#fff;text-decoration:none;border-radius:4px;font-weight:600;">Buy &amp; Read Now — ₹29</a></div>'+
    '<p style="font-size:13px;color:#666;margin-top:12px;">You will be asked for your email during checkout.</p>'+
    '</div>';
}
/* ===== Poll after purchase ===== */
function pollPay(){
  var sp=new URLSearchParams(window.location.search);
  if(sp.get('p')!=='1')return;
  var h=window.location.hash.replace(/^#/,'');
  var p=h.split('/');
  if(p[0]==='paper'&&p[1]&&p[2]){
    var c=p[1],s=p[2],p_=pid(c,s);
    if(p_)setOK(p_);
    var t=0;
    function chk(){checkAccess(c,s,function(ok){if(ok){render();}else if(t++<40)setTimeout(chk,1500);});}
    setTimeout(chk,1000);
  }
}
/* ===== Render ===== */
function render(){
  try{
    parseHash();
    var vv=R.v;
    if(vv==='branches')viewBranches();
    else if(vv==='branch'&&R.b)viewSems();
    else if(vv==='sem'&&R.b&&R.s)viewSubs();
    else if(vv==='subj'&&R.b&&R.s&&R.c)viewSessPg();
    else if(vv==='paper'&&R.c&&R.sess)viewPaper();
    else{R.v='branches';viewBranches();}
  }catch(e){
    vw().innerHTML='<p style="color:#c00">Error: '+esc(e.message)+' — <a href="'+esc(window.location.pathname)+'">Refresh</a></p>';
  }
}
function init(){
  vw();
  window.addEventListener('hashchange',render);
  render();
  setTimeout(pollPay,500);
}
if(D.readyState==='loading'){D.addEventListener('DOMContentLoaded',init);}else{init();}
})();
