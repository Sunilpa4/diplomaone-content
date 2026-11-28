(function(){
var D=document;
var GH='https://raw.githubusercontent.com/Sunilpa4/diplomaone-content/main/papers/';
var B=[{"k":"computer","n":"Computer Engineering","s":{"1":["DI01000131","DI01000151","DI01000021"],"2":["DI02000101"],"3":["DI03000021","DI03000011","DI03000031","DI03000041","DI03000051"],"4":["DI04000021","DI04000011"]}},{"k":"mechanical","n":"Mechanical Engineering","s":{"1":["DI01000021","DI01000191","DI01000181"],"2":["DI01000121"],"3":["DI03000141","DI03000161","DI03000171","DI03019011","DI03000151","DI03000201"],"4":["DI04019011","DI04000241","DI04000251"],"5":["4351902","4351903"]}},{"k":"civil","n":"Civil Engineering","s":{"1":["DI01000021","DI01000121","DI01006021"],"3":["DI03006011","DI03006021","DI03006031","DI03006041","DI03006051"]}},{"k":"electrical","n":"Electrical Engineering","s":{"1":["DI01000021","DI01000081","DI01009011"],"2":["DI02000161","DI02000171"],"3":["DI03000081","DI03000091","DI03000101","DI03009011","DI03009021"],"4":["DI04000171","DI04000321","DI04009011"]}},{"k":"chemical","n":"Chemical Engineering","s":{"1":["DI01000021","DI01005011","DI01005021"],"2":["DI02005021","DI02005011","DI01000121"],"3":["DI03005031","DI03005021","DI03005061","DI03005011"],"4":["DI04005021","DI04005041","DI04005071"],"5":["4350501"],"6":["4360501"]}}];
var S={"4350501":["summer-2026","winter-2025"],"4351902":["summer-2026"],"4351903":["summer-2026"],"4360501":["summer-2026","winter-2025"],"DI01000021":["summer-2026","winter-2025"],"DI01000081":["summer-2026"],"DI01000121":["summer-2026","winter-2025"],"DI01000131":["summer-2026"],"DI01000151":["summer-2026"],"DI01000181":["summer-2026","winter-2025","summer-2025"],"DI01000191":["summer-2026","winter-2025","summer-2025"],"DI01005011":["summer-2026","winter-2025"],"DI01005021":["summer-2026","winter-2025"],"DI01006021":["summer-2026","winter-2025"],"DI01009011":["summer-2026"],"DI02000101":["summer-2026"],"DI02000161":["summer-2026"],"DI02000171":["summer-2026"],"DI02005011":["summer-2026","winter-2025"],"DI02005021":["summer-2026","winter-2025"],"DI03000011":["summer-2026"],"DI03000021":["summer-2026"],"DI03000031":["summer-2026"],"DI03000041":["summer-2026"],"DI03000051":["summer-2026"],"DI03000081":["summer-2026"],"DI03000091":["summer-2026"],"DI03000101":["summer-2026"],"DI03000141":["summer-2026"],"DI03000151":["summer-2026"],"DI03000161":["summer-2026","winter-2025"],"DI03000171":["summer-2026","winter-2025"],"DI03000201":["summer-2026","winter-2025"],"DI03005011":["summer-2026","winter-2025"],"DI03005021":["summer-2026","winter-2025"],"DI03005031":["summer-2026","winter-2025"],"DI03005061":["summer-2026","winter-2025"],"DI03006011":["winter-2025"],"DI03006021":["winter-2025"],"DI03006031":["summer-2026","winter-2025"],"DI03006041":["summer-2026","winter-2025"],"DI03006051":["summer-2026","winter-2025"],"DI03009011":["summer-2026"],"DI03009021":["summer-2026"],"DI03019011":["summer-2026","winter-2025"],"DI04000011":["summer-2026"],"DI04000021":["summer-2026"],"DI04000171":["summer-2026"],"DI04000241":["summer-2026"],"DI04000251":["summer-2026"],"DI04000321":["summer-2026"],"DI04005021":["summer-2026"],"DI04005041":["summer-2026"],"DI04005071":["summer-2026"],"DI04009011":["summer-2026"],"DI04019011":["summer-2026"]};
var N={"DI01000021":"Mathematics - I","DI01000031":"Communication Skills in English","DI01000061":"Modern Physics","DI01000131":"Computer Programming Fundamentals (C)","DI01000141":"Computer Basics and Static Web Page Designing","DI01000151":"Basics of Electronics","DI02000101":"Scripting Language (Python)","DI02000091":"Electronics Workshop and Practice","DI02000011":"Applied Mathematics","DI01000071":"Engineering Chemistry","DI02000051":"Environmental Sustainability","DI01000111":"Engineering Graphics","DI02000061":"Indian Constitution","DI02000131":"Contributor Personality Development","DI02000141":"Integrated Personality Development Course","DI02000151":"Essence of Indian Knowledge and Tradition","DI03000011":"Digital Electronics Fundamentals","DI03000021":"Data Structures","DI03000031":"Relational Database Management System","DI03000041":"Fundamentals of Operating System","DI03000051":"Computer Networks","DI03000061":"Responsive Web Page Design","DI04000011":"Software Engineering","DI04000021":"Object Oriented Programming - Java","DI04000031":"Introduction to NoSQL","DI04007011":"Introduction to Web Development","DI04000041":"Cloud Computing","DI05007011":"Computer Hardware Architecture and System Maintenance","DI05007021":"Information Security","DI01000191":"Elements of Mechanical Engineering","DI03000141":"Theory of Machines and Mechanisms","DI03000161":"Manufacturing Engineering-I","DI03000171":"Fluid Mechanics and Hydraulic Machinery","DI03019011":"Engineering Thermodynamics","DI03000151":"Measurements and Metrology","DI03000201":"Basics of Applied Mechanics","DI04019011":"Thermal Engineering - I","DI04000241":"Manufacturing Engineering - II","DI04000251":"Design of Machine Elements","DI05019021":"Thermal Engineering - II","DI05019011":"Manufacturing Engineering - III","DI01000081":"DC Circuit","DI01009011":"Electronics Devices & Circuits","DI01000091":"Fundamentals of Information and Communication Technology (FICT)","DI02000161":"Fundamental of Digital Electronics","DI02000171":"AC Fundamental","DI03000081":"Electrical Machines I","DI03000091":"Electrical Instrumentation","DI03000101":"Electrical Power Transmission & Distribution","DI03009011":"Electrical Wiring Estimating & Contracting","DI03009021":"Electrical Power Generation","DI04000171":"Microcontroller & its Applications","DI04000321":"Electrical Machines – II","DI04009011":"Substation Engineering","DI05000171":"Power Electronics Converters","DI05009011":"Switchgear and Protection","DI01005011":"Plant Utilities","DI01005021":"Material Science and Technology","DI02005021":"Mechanical Operation","DI02005011":"Basic Chemical Engineering Calculations","DI03005041":"Chemical Process Technology – I","DI04005011":"Chemical Process Technology – II","DI05005051":"Fertilizer Technology","DI05005031":"Chemical Reaction Engineering","DI03005031":"Process Heat Transfer","DI03005021":"Fluid Flow Operation","DI03005061":"Process Calculation","DI03005011":"Basics of Process Instrumentations","DI04005021":"Mass Transfer-I","DI04005041":"Chemical Engineering Thermodynamics","DI04005071":"Petroleum Refining and Petroleum Technology","DI05005011":"Mass Transfer - II","DI05005021":"Chemical Engineering Plant Economics","DI02000121":"Mechanical Drafting","DI01006021":"Construction Material","DI01006011":"Civil Engineering Drawing","DI02000071":"Engineering Mechanics","DI02006011":"Basic Surveying","DI01000161":"Basic Chemistry","DI02000021":"Engineering Mathematics","DI01000121":"Applied Physics","DI04000081":"Entrepreneurship & Start-up","DI01000181":"Engineering Materials Science","DI04006011":"Concrete Technology","DI04006021":"Estimation and Costing","DI04006031":"Design of Steel Structures","DI05006011":"Design of Reinforced Concrete Structures","DI05006021":"Water Supply & Sanitary Engineering","DI03006011":"Construction Technology","DI03006021":"Advance Surveying","DI03006031":"Basic Transportation Engineering","DI03006041":"Mechanics of Structures-I","DI03006051":"Soil Engineering","DI04000151":"Hydraulics","4350501":"Mass Transfer - II","4351902":"Manufacturing Engineering - III","4351903":"Thermal Engineering - II","4360501":"Chemical Reaction Engineering"};
var F=new Set(["DI01000021","DI01000121"]);
var P={"4350501/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=322","4350501/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=323","4351902/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=324","4351903/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=325","4360501/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=326","4360501/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=327","DI01000081/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=261","DI01000131/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=234","DI01000151/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=262","DI01000181/summer-2025":"https://diplomaone.in/checkout/?add-to-cart=263","DI01000181/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=264","DI01000181/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=265","DI01000191/summer-2025":"https://diplomaone.in/checkout/?add-to-cart=266","DI01000191/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=267","DI01000191/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=268","DI01005011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=269","DI01005011/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=270","DI01005021/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=271","DI01005021/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=272","DI01006021/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=273","DI01006021/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=274","DI01009011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=275","DI02000101/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=276","DI02000161/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=277","DI02000171/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=278","DI02005011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=279","DI02005011/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=280","DI02005021/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=281","DI02005021/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=282","DI03000011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=283","DI03000021/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=284","DI03000031/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=285","DI03000041/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=286","DI03000051/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=287","DI03000081/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=288","DI03000091/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=289","DI03000101/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=290","DI03000141/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=291","DI03000151/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=292","DI03000161/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=293","DI03000161/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=294","DI03000171/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=295","DI03000171/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=296","DI03000201/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=297","DI03000201/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=298","DI03005011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=299","DI03005011/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=300","DI03005021/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=301","DI03005021/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=302","DI03005031/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=303","DI03005031/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=304","DI03005061/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=305","DI03005061/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=306","DI03006011/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=328","DI03006021/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=329","DI03006031/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=330","DI03006031/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=331","DI03006041/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=332","DI03006041/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=333","DI03006051/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=334","DI03006051/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=335","DI03009011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=307","DI03009021/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=308","DI03019011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=309","DI03019011/winter-2025":"https://diplomaone.in/checkout/?add-to-cart=310","DI04000011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=311","DI04000021/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=312","DI04000171/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=313","DI04000241/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=314","DI04000251/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=315","DI04000321/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=316","DI04005021/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=317","DI04005041/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=318","DI04005071/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=319","DI04009011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=320","DI04019011/summer-2026":"https://diplomaone.in/checkout/?add-to-cart=321"};
var PR={"computer":19,"mechanical":29,"civil":29,"electrical":29,"chemical":39};
function root(){var r=D.getElementById('d1p')||D.getElementById('paper-app');if(r&&r.id!=='d1p')r.id='d1p';return r;}
var st={b:null,s:null,c:null};
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function vw(){return root().querySelector('#vw');}
function err(msg){root().innerHTML='<div class="err">'+esc(msg)+'</div>';}
function navBtns(buttons){
 var r=D.createElement('div');r.className='navrow';
 buttons.forEach(function(b){var btn=D.createElement('button');btn.className='btn';btn.textContent=b.l;btn.onclick=b.fn;r.appendChild(btn);});
 return r;
}
function clearNav(){var old=root().querySelector('.navrow');if(old)old.remove();}

function ensureDesign(){
 if(D.getElementById('d1p-paper-design'))return;
 var st=D.createElement('style');st.id='d1p-paper-design';
 st.textContent=`
 #d1p{max-width:1120px;margin:0 auto;padding:clamp(12px,2.4vw,28px);color:#172033;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
 #d1p h1{font-size:clamp(27px,4vw,38px);line-height:1.15;letter-spacing:-.035em;margin:0 0 10px;color:#111827}
 #d1p h2{font-size:clamp(20px,3vw,26px);letter-spacing:-.025em;color:#172033;margin:26px 0 14px}
 #d1p .lead{color:#64748b;line-height:1.65;margin:0 0 22px;max-width:760px}
 #d1p .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:14px;margin:16px 0 24px}
 #d1p .card{position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:8px;min-height:112px;padding:20px;text-align:left;border:1px solid #e2e8f0;border-radius:18px;background:linear-gradient(145deg,#fff 0%,#f8faff 100%);box-shadow:0 4px 18px rgba(15,23,42,.045);color:#172033;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
 #d1p .card:hover{transform:translateY(-2px);border-color:#a5b4fc;box-shadow:0 12px 28px rgba(59,72,160,.11)}
 #d1p .card b{font-size:16px;line-height:1.4}
 #d1p .card small{font-size:12px;color:#64748b}
 #d1p .tag{display:inline-flex;align-items:center;border-radius:999px;padding:5px 10px;font-size:10px;font-weight:800;letter-spacing:.08em;background:#e8f8ef;color:#137447}
 #d1p .tag.locked{background:#fff2df;color:#a45a08}
 #d1p .navrow{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 18px}
 #d1p .btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;border:1px solid #d8e0ee;border-radius:12px;padding:10px 15px;background:#fff;color:#26344f;font-weight:700;font-size:13px;text-decoration:none;cursor:pointer;transition:all .16s ease}
 #d1p .btn:hover{border-color:#818cf8;background:#f5f6ff}
 #d1p .btn.buy{border-color:#263b91;background:#263b91;color:#fff}
 #d1p .btn.buy:hover{background:#1d2d72}
 #d1p .sessions{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px}
 #d1p .ses{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:16px;border:1px solid #e2e8f0;border-radius:16px;background:#fff;box-shadow:0 3px 12px rgba(15,23,42,.035)}
 #d1p .ses>b{flex:1 1 130px;font-size:14px}
 #d1p .ses .act{flex:0 0 auto}
 #d1p .note{font-size:12px;color:#64748b}
 #d1p .rd{margin:24px 0 40px;border:1px solid #e2e8f0;border-radius:22px;background:#fff;box-shadow:0 14px 40px rgba(15,23,42,.07);overflow:hidden}
 #d1p .rd-h{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:22px;background:linear-gradient(125deg,#111c45,#283b86 62%,#5868b5);color:#fff}
 #d1p .rd-h h2{margin:6px 0;color:#fff;font-size:clamp(19px,3vw,27px)}
 #d1p .rd-h p{margin:0;color:#dbe4ff;font-size:13px;text-transform:capitalize}
 #d1p .rd-h .eyebrow{font-size:10px;letter-spacing:.16em;font-weight:800;color:#c7d2fe}
 #d1p .rd-h .btn{background:#fff;border-color:#fff;color:#1e2b60}
 #d1p .rd-t{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:13px 18px;border-bottom:1px solid #edf0f5;background:#fafbff;color:#64748b;font-size:12px}
 #d1p .rd-b{display:flex;gap:7px;flex-wrap:wrap}
 #d1p .d1-language-switch{margin:0!important;padding:14px 18px!important;border:0!important;border-bottom:1px solid #e8edf5!important;border-radius:0!important;background:#f7f8ff!important;box-shadow:none!important}
 #d1p .rd-c{padding:clamp(12px,2vw,24px)}
 #d1p .rd-c details{margin:0 0 12px;border:1px solid #e4e9f2;border-radius:15px;background:#fff;overflow:hidden}
 #d1p .rd-c details>summary{padding:15px 18px;font-weight:750;line-height:1.5;cursor:pointer;background:#f8faff;color:#1e293b}
 #d1p .rd-c details[open]>summary{border-bottom:1px solid #e8edf5;background:#f2f5ff}
 #d1p .rd-c details>*:not(summary){padding-left:16px;padding-right:16px}
 #d1p .rd-c p{line-height:1.75;color:#334155}
 #d1p .rd-c img{max-width:100%;height:auto;border-radius:10px}
 #d1p .rd-c table{display:block;max-width:100%;overflow-x:auto;border-collapse:collapse}
 #d1p .rd-c th,#d1p .rd-c td{padding:8px;border:1px solid #dbe2ee}
 #d1p .rd-c pre{max-width:100%;overflow:auto;padding:14px;border-radius:12px;background:#101827;color:#e5e7eb}
 #d1p .err,#d1p .state,#d1p .ld{padding:16px;border-radius:14px;border:1px solid #e2e8f0;background:#f8fafc;color:#334155}
 @media(max-width:600px){#d1p{padding:12px}#d1p .card{min-height:94px;padding:16px}#d1p .ses{align-items:flex-start}#d1p .ses .act{width:100%}#d1p .ses .act .btn{width:100%}#d1p .rd-h{padding:18px}#d1p .rd-h #bk{width:100%}#d1p .rd-b .btn{padding:8px 10px}}
 `;
 D.head.appendChild(st);
}
function renderBranches(){
 st.b=null;st.s=null;st.c=null;
 var h='<h1>Paper Solutions</h1><p class="lead">Choose your branch, semester and subject to browse free and premium solved papers. Premium papers require purchase and sign-in.</p><h2>Choose branch</h2><div class="grid">';
 B.forEach(function(b,i){
  var cnt=0;Object.values(b.s||{}).forEach(function(cs){cnt+=cs.length;});
  h+='<button class="card" data-bi="'+i+'"><b>'+esc(b.n)+'</b><small>'+cnt+' subjects with papers</small></button>';
 });
 h+='</div><div id="vw"></div>';
 root().innerHTML=h;
 root().querySelectorAll('[data-bi]').forEach(function(btn){btn.onclick=function(){renderSems(B[Number(btn.getAttribute('data-bi'))]);};});
}
function renderSems(b){
 st.b=b;st.s=null;st.c=null;
 var sems=Object.keys(b.s||{}).filter(function(s){return(b.s[s]||[]).length;}).sort();
 var v=vw();if(!v)return;
 v.innerHTML='<h2>'+esc(b.n)+'</h2><div class="grid">'+sems.map(function(s){
  var cnt=(b.s[s]||[]).filter(function(c){return S[c]&&S[c].length;}).length;
  return '<button class="card" data-sem="'+esc(s)+'"><b>Semester '+esc(s)+'</b><small>'+cnt+' subjects with papers</small></button>';
 }).join('')+'</div><div id="vw"></div>';
 clearNav();root().insertBefore(navBtns([{l:'← Branches',fn:renderBranches}]),v);
 v.querySelectorAll('[data-sem]').forEach(function(btn){btn.onclick=function(){renderSubs(b,btn.getAttribute('data-sem'));};});
}
function renderSubs(b,sem){
 st.b=b;st.s=sem;st.c=null;
 var codes=(b.s[sem]||[]).filter(function(c){return S[c]&&S[c].length;});
 var v=vw();if(!v)return;
 v.innerHTML='<h2>'+esc(b.n)+' · Semester '+esc(sem)+'</h2><div class="grid">'+codes.map(function(c){
  var fr=F.has(c);var nm=N[c]||c;
  return '<button class="card" data-code="'+esc(c)+'"><span class="tag '+(fr?'':'locked')+'">'+(fr?'FREE':'PAID')+'</span><b>'+esc(nm)+'</b><small>'+(S[c]||[]).length+' paper sessions</small></button>';
 }).join('')+'</div><div id="vw"></div>';
 clearNav();root().insertBefore(navBtns([{l:'← Branches',fn:renderBranches},{l:'← Semesters',fn:function(){renderSems(b);}}]),v);
 v.querySelectorAll('[data-code]').forEach(function(btn){btn.onclick=function(){renderSessions(btn.getAttribute('data-code'));};});
}
function renderSessions(code){
 st.c=code;var b=st.b;
 var fr=F.has(code);var nm=N[code]||code;
 var sess=(S[code]||[]).slice().sort().reverse();
 var v=vw();if(!v)return;
 v.innerHTML='<h2>'+esc(nm)+'</h2><p class="lead">'+(fr?'Free solved papers are listed below.':'Premium papers require purchase. Sign in, buy, then read online.')+'</p><div class="sessions">'+sess.map(function(s){
  var key=code+'/'+s;var lbl=s.replace(/-/g,' ').replace(/^./,function(c){return c.toUpperCase();});
  var act='';var pu=P[key];var pr=PR[b.k]||29;
  if(fr)act='<button class="btn" data-read="'+esc(s)+'">Read online</button>';
  else if(pu)act='<span data-ps="'+esc(s)+'" class="note">Checking purchase…</span>';
  else act='<span class="note">Purchase link coming soon</span>';
  return '<div class="ses"><b>'+esc(lbl)+'</b><span class="tag '+(fr?'':'locked')+'">'+(fr?'FREE':'PAID')+'</span><div class="act">'+act+'</div></div>';
 }).join('')+'</div><div id="rdr"></div>';
 clearNav();root().insertBefore(navBtns([{l:'← Branches',fn:renderBranches},{l:'← Semesters',fn:function(){renderSems(b);}},{l:'← Subjects',fn:function(){renderSubs(b,st.s);}}]),v);
 v.querySelectorAll('[data-read]').forEach(function(btn){btn.onclick=function(){openReader(code,btn.getAttribute('data-read'),true);};});
 v.querySelectorAll('[data-ps]').forEach(function(el){
  var s=el.getAttribute('data-ps');var key=code+'/'+s;var pu=P[key];var pr=PR[b.k]||29;
  checkAccess(code,s).then(function(stt){
   if(stt==='owned'){el.innerHTML='<button class="btn" data-or="'+esc(s)+'">Read purchased paper</button>';var b2=el.querySelector('[data-or]');b2.onclick=function(){openReader(code,s,false);};}
   else if(stt==='guest'){el.innerHTML='<a class="btn" href="/my-account/">Sign in with Google</a>';}
   else{el.innerHTML='<button class="btn buy" data-buy="'+esc(s)+'">Buy now · ₹'+pr+'</button>';var bb=el.querySelector('[data-buy]');bb.onclick=function(){startBuy(code,s);};}
  }).catch(function(){el.innerHTML='<button class="btn buy" data-buy2="'+esc(s)+'">Buy now · ₹'+pr+'</button>';var bb3=el.querySelector('[data-buy2]');bb3.onclick=function(){startBuy(code,s);};});
 });
}
function _lsGet(k){try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}}
function _lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function _ownKey(code,sess){return code+'/'+sess;}
function isLocallyOwned(code,sess){var o=_lsGet('d1p_owned')||{};return !!o[_ownKey(code,sess)];}
function markOwned(code,sess){var o=_lsGet('d1p_owned')||{};o[_ownKey(code,sess)]=Date.now();_lsSet('d1p_owned',o);}
function setPending(code,sess){_lsSet('d1p_pending',{key:_ownKey(code,sess),code:code,sess:sess,time:Date.now()});}
function getPending(){return _lsGet('d1p_pending');}
function clearPending(){_lsSet('d1p_pending',null);}
function startBuy(code,sess){setPending(code,sess);window.location.href=P[_ownKey(code,sess)];}
function pollOwnership(code,sess,maxTries,cb){
 var tries=0;
 function attempt(){checkAccessServer(code,sess).then(function(stt){
  if(stt==='owned'){markOwned(code,sess);clearPending();cb('owned');return;}
  tries++;
  if(tries>=maxTries){cb(stt);return;}
  setTimeout(attempt,3000);
 }).catch(function(){
  tries++;
  if(tries>=maxTries){cb('error');return;}
  setTimeout(attempt,3000);
 });
 }
 attempt();
}
function refreshReaderNonce(){
 var cfg=window.DiplomaOneAccess||{};
 var ajax=String(cfg.ajax||'/wp-admin/admin-ajax.php');
 if(cfg._d1NoncePromise)return cfg._d1NoncePromise;
 cfg._d1NoncePromise=fetch(ajax+'?action=d1_reader_nonce&_='+Date.now(),{cache:'no-store',credentials:'same-origin'}).then(function(r){
  if(r.status===401)return null;
  if(!r.ok)throw new Error('Login check failed (HTTP '+r.status+').');
  return r.json();
 }).then(function(d){
  if(!d||!d.success||!d.data||!d.data.nonce)return null;
  cfg.nonce=d.data.nonce;return cfg.nonce;
 }).finally(function(){cfg._d1NoncePromise=null;});
 return cfg._d1NoncePromise;
}
function checkAccessServer(code,sess){
 var cfg=window.DiplomaOneAccess||{};
 var rest=String(cfg.rest||'/wp-json/diplomaone/v1/');
 return refreshReaderNonce().then(function(nonce){
  if(!nonce)return'guest';
  var url=rest+'access?code='+encodeURIComponent(code)+'&session='+encodeURIComponent(sess);
  var hd={'X-WP-Nonce':nonce};
  return fetch(url,{cache:'no-store',credentials:'same-origin',headers:hd}).then(function(r){
   if(r.status===401)return'guest';
   if(!r.ok)throw new Error('HTTP '+r.status);
   return r.json().then(function(d){return d.owned?'owned':'locked';});
  });
 });
}
function checkAccess(code,sess){
 // First check local ownership (persistent, works even if server SKU mapping fails)
 if(isLocallyOwned(code,sess))return Promise.resolve('owned');
 // Then check server
 return checkAccessServer(code,sess).then(function(stt){
  if(stt==='owned'){markOwned(code,sess);return'owned';}
  return stt;
 });
}
function openReader(code,sess,free){
 var tgt=D.getElementById('rdr');if(!tgt)return;
 tgt.innerHTML='<div class="ld">Loading the solved paper…</div>';
 tgt.scrollIntoView({behavior:'smooth',block:'start'});
 function doFetch(){
  var cfg=window.DiplomaOneAccess||{};
  var url=free
   ? GH+encodeURIComponent(code)+'/'+encodeURIComponent(sess)+'.html'
   : String(cfg.rest||'/wp-json/diplomaone/v1/')+'paper/'+encodeURIComponent(code)+'/'+encodeURIComponent(sess);
  var headers={};
  var ready=free?Promise.resolve(true):refreshReaderNonce().then(function(nonce){if(!nonce)throw new Error('Please sign in with the account used for purchase.');headers['X-WP-Nonce']=nonce;return true;});
  ready.then(function(){return fetch(url,{cache:'no-store',credentials:'same-origin',headers:headers});}).then(function(r){
   if(!r.ok)throw new Error('Paper file not available (HTTP '+r.status+').');
   return r.text();
  }).then(function(src){renderPaper(tgt,src,url,sess,code);}).catch(function(e){tgt.innerHTML='<div class="err">'+esc(e.message||'Could not load paper.')+'</div>';});
 }
 if(free){doFetch();return;}
 checkAccess(code,sess).then(function(stt){
  if(stt==='guest'){tgt.innerHTML='<div class="err">Please <a href="/my-account/">sign in</a> with the account used for purchase, then try again.</div>';return;}
  if(stt!=='owned'){tgt.innerHTML='<div class="err">This paper is locked. <button class="btn buy" data-lockbuy style="margin-top:8px">Buy now · ₹'+(PR[st.b.k]||29)+'</button></div>';var lb=tgt.querySelector('[data-lockbuy]');lb.onclick=function(){startBuy(code,sess);};return;}
  doFetch();
 }).catch(function(e){tgt.innerHTML='<div class="err">'+esc(e.message||'Access check failed. Refresh and try again.')+'</div>';});
}
function renderPaper(tgt,src,url,sess,code){
 // Paid REST responses can be returned as a JSON-wrapped HTML string by some
 // WordPress/proxy layers. Normalize those formats before parsing every paper.
 src=String(src==null?'':src).replace(/^\uFEFF/,'').trim();
 try{
  var wrapped=JSON.parse(src);
  if(typeof wrapped==='string')src=wrapped;
  else if(wrapped&&typeof wrapped==='object'){
   var candidate=wrapped.html||wrapped.body||wrapped.content||wrapped.data;
   if(typeof candidate==='string')src=candidate;
   else if(candidate&&typeof candidate==='object'&&typeof candidate.rendered==='string')src=candidate.rendered;
  }
 }catch(ignore){}
 if(new RegExp('&lt;/?(?:!doctype|html|head|body|details|summary|section|div)\\b','i').test(src)){
  var decoder=D.createElement('textarea');decoder.innerHTML=src;src=decoder.value;
 }
 var dp=new DOMParser();var doc=dp.parseFromString(src,'text/html');
 doc.querySelectorAll('script,base,style').forEach(function(e){e.remove();});
 var tEl=doc.querySelector('.hero h1,.paper-summary h3,h1');var title=tEl?tEl.textContent.trim():(doc.querySelector('title')?.textContent.trim()||'Solved paper');
 var mEl=doc.querySelector('.meta,.paper-meta,.paper-summary .paper-kicker');var meta=mEl?mEl.textContent.replace(/\s+/g,' ').trim():sess.replace(/-/g,' ');
 var h=D.createElement('div');h.innerHTML=doc.body.innerHTML;
 h.querySelectorAll('img[src]').forEach(function(img){var s=img.getAttribute('src');if(s&&!/^(https?:|data:|blob:|#)/i.test(s))img.src=new URL(s,url).href;});
 h.querySelectorAll('a[href]').forEach(function(a){var hr=a.getAttribute('href');if(hr&&!/^(https?:|mailto:|tel:|#)/i.test(hr))a.href=new URL(hr,url).href;});
 var cards=h.querySelectorAll('details.card,details.question-card');
 if(!cards.length)cards=h.querySelectorAll('details');
 if(!cards.length)cards=h.querySelectorAll('[class~="question-card"]');
 // Support older paper templates that use a card wrapper rather than <details>.
 if(!cards.length)cards=h.querySelectorAll('.card');
 if(!cards.length)cards=h.querySelectorAll('[class*="question"]');
 if(!cards.length){
  var summaries=h.querySelectorAll('summary');
  if(summaries.length){
   cards=Array.from(summaries).map(function(x){return x.closest('details')||x.parentElement;}).filter(Boolean);
  }
 }
 if(!cards.length){tgt.innerHTML='<div class="err">This paper source has no readable question cards. The source file needs repair; please try again later.</div>';return;}
 tgt.innerHTML='<div class="rd"><div class="rd-h"><div><div class="eyebrow">DIPLOMA ONE · ONLINE SOLUTION</div><h2>'+esc(title)+'</h2><p>'+esc(meta)+'</p></div><button class="btn" id="bk">← Back to papers</button></div><div class="rd-t"><span>'+cards.length+' question cards</span><div class="rd-b"><button class="btn" id="exp">Expand all</button><button class="btn" id="col">Collapse all</button></div></div><div class="rd-c"></div></div>';
 tgt.querySelector('.rd-c').appendChild(h);
 // Switch using the original Gujarati answer blocks or the separately stored Gujarati paper.
 // Never machine-translate: papers without an authored Gujarati source remain English-only.
 var langBar=D.createElement('section');
 langBar.className='d1-language-switch';
 langBar.style.cssText='display:flex;position:relative;z-index:2147483000;pointer-events:auto;isolation:isolate;touch-action:manipulation;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:14px 16px;margin:14px 0;border:1px solid #cbd5e1;border-radius:16px;background:linear-gradient(135deg,#f8fafc,#eef2ff);box-shadow:0 4px 14px rgba(15,23,42,.06);';
 langBar.innerHTML='<div><strong style="display:block;font-size:14px;color:#172554">Choose content language</strong><small style="color:#64748b">મૂળ ગુજરાતી જવાબો ઉપલબ્ધ હોય ત્યાં</small></div><div role="group" aria-label="Reader language" style="display:flex;padding:4px;border-radius:12px;background:#e2e8f0;gap:4px"><button type="button" data-lang="en" aria-pressed="true" style="border:0;border-radius:9px;padding:10px 16px;font-weight:700;background:#fff;color:#1e293b;box-shadow:0 1px 4px #0002;cursor:pointer">English</button><button type="button" data-lang="gu" aria-pressed="false" style="border:0;border-radius:9px;padding:10px 16px;font-weight:700;background:transparent;color:#334155;cursor:pointer">ગુજરાતી</button></div><small id="d1-lang-status" role="status" aria-live="polite" style="flex-basis:100%;color:#64748b;font-size:12px"></small>';
 var rdHead=tgt.querySelector('.rd-h');
 var readerToolbar=tgt.querySelector('.rd-t');if(readerToolbar)readerToolbar.insertAdjacentElement('afterend',langBar);else if(rdHead)rdHead.insertAdjacentElement('afterend',langBar);else tgt.querySelector('.rd').insertBefore(langBar,tgt.querySelector('.rd-c'));
 var languageSelect=langBar.querySelectorAll('button[data-lang]');
 languageSelect.forEach(function(btn){btn.style.cssText+=';position:relative;z-index:21;pointer-events:auto;touch-action:manipulation;';});
 var langStatus=langBar.querySelector('#d1-lang-status');
 var paperKey=code+'/'+sess;
 var separateGujarati={
  'DI01000081/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI01000081/summer-2026.bilingual.html',
  'DI01000151/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI01000151/gujarati.html',
  'DI01009011/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI01009011/summer-2026.gu.html',
  'DI02000161/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI02000161/summer-2026.bilingual.html',
  'DI02000171/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI02000171/summer-2026.bilingual.html',
  'DI03000081/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI03000081/summer-2026.bilingual.html',
  'DI03000091/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI03000091/summer-2026.bilingual.html',
  'DI03000101/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI03000101/summer-2026.bilingual.html',
  'DI03000161/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI03000161/previous-summer-2026.html',
  'DI03000171/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI03000171/previous-summer-2026.html',
  'DI03000201/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI03000201/previous-summer-2026.html',
  'DI03009011/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI03009011/summer-2026.bilingual.html',
  'DI03009021/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI03009021/summer-2026.bilingual.html',
  'DI03019011/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI03019011/previous-summer-2026.html',
  'DI04000171/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI04000171/summer-2026.bilingual.html',
  'DI04000321/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI04000321/summer-2026.bilingual.html',
  'DI04009011/summer-2026':'https://raw.githubusercontent.com/Sunilpa4/diplomaone-app/main/papers-upload/originals/DI04009011/summer-2026.bilingual.html'
 };
 var englishMarkup=h.innerHTML,gujaratiMarkup=null,gujaratiPromise=null;
 function updateLanguageButtons(lang){
  languageSelect.forEach(function(btn){
   var active=btn.getAttribute('data-lang')===lang;
   btn.setAttribute('aria-pressed',active?'true':'false');
   btn.style.background=active?'#fff':'transparent';
   btn.style.color=active?'#1e293b':'#334155';
   btn.style.boxShadow=active?'0 1px 4px #0002':'none';
  });
 }
 function setLanguageVisibility(lang){
  var gu=lang==='gu';
  var guNodes=h.querySelectorAll('.gu,[lang="gu"],.gu-text,.qgu,.group-gu');
  var enNodes=h.querySelectorAll('.en,[lang="en"],.en-text');
  if(!guNodes.length)return false;
  enNodes.forEach(function(el){el.hidden=gu;el.style.setProperty('display',gu?'none':'','important');});
  guNodes.forEach(function(el){el.hidden=!gu;el.style.setProperty('display',gu?'':'none','important');});
  return true;
 }
 function loadSeparateGujarati(){
  if(gujaratiMarkup)return Promise.resolve(gujaratiMarkup);
  if(gujaratiPromise)return gujaratiPromise;
  var source=separateGujarati[paperKey];
  if(!source)return Promise.resolve(null);
  gujaratiPromise=fetch(source,{cache:'no-store'}).then(function(r){
   if(!r.ok)throw new Error('Gujarati source HTTP '+r.status);
   return r.text();
  }).then(function(markup){
   var gd=new DOMParser().parseFromString(markup,'text/html');
   gd.querySelectorAll('script,base,style,iframe,object,embed').forEach(function(el){el.remove();});
   var gh=D.createElement('div');gh.innerHTML=gd.body.innerHTML;
   var guNodes=gh.querySelectorAll('.gu,[lang="gu"],.gu-text,.qgu,.group-gu');
   var enNodes=gh.querySelectorAll('.en,[lang="en"],.en-text');
   var pureGujarati=(gd.documentElement.getAttribute('lang')||'').toLowerCase()==='gu';
   if(guNodes.length){
    enNodes.forEach(function(el){el.hidden=true;el.style.setProperty('display','none','important');});
    guNodes.forEach(function(el){el.hidden=false;el.style.setProperty('display','','important');});
   }else if(!pureGujarati){
    throw new Error('No original Gujarati answer blocks were found');
   }
   var gc=gh.querySelectorAll('details');
   if(!gc.length)throw new Error('Gujarati source has no question cards');
   gh.querySelectorAll('img[src]').forEach(function(img){
    var path=img.getAttribute('src');
    if(path&&!/^(https?:|data:|blob:|#)/i.test(path))img.src=new URL(path,source).href;
   });
   gujaratiMarkup=gh.innerHTML;
   return gujaratiMarkup;
  }).catch(function(err){gujaratiPromise=null;throw err;});
  return gujaratiPromise;
 }
 function setPaperLanguage(lang){
  var gu=lang==='gu';
  if(!gu){
   h.innerHTML=englishMarkup;
   setLanguageVisibility('en');
   updateLanguageButtons('en');
   langStatus.textContent='Showing English answers.';
   return;
  }
  // First use original Gujarati text already embedded alongside English answers.
  h.innerHTML=englishMarkup;
  if(setLanguageVisibility('gu')){
   updateLanguageButtons('gu');
   langStatus.textContent='ગુજરાતી મૂળ જવાબો બતાવી રહ્યા છીએ.';
   return;
  }
  // Otherwise load the paper's separate Gujarati source, where one exists.
  var separateUrl=separateGujarati[paperKey];
  if(!separateUrl){
   updateLanguageButtons('en');
   langStatus.textContent='આ પેપર માટે મૂળ ગુજરાતી જવાબો ઉપલબ્ધ નથી. English આવૃત્તિ બતાવવામાં આવી છે.';
   return;
  }
  updateLanguageButtons('gu');
  langStatus.textContent='ગુજરાતી જવાબો લોડ થઈ રહ્યા છે…';
  loadSeparateGujarati().then(function(markup){
   if(!markup)throw new Error('Gujarati source is unavailable');
   h.innerHTML=markup;
   setLanguageVisibility('gu');
   var count=h.querySelectorAll('details').length;
   var countLabel=tgt.querySelector('.rd-t>span');
   if(countLabel)countLabel.textContent=count+' question cards';
   langStatus.textContent='ગુજરાતી મૂળ જવાબો બતાવી રહ્યા છીએ.';
  }).catch(function(){
   h.innerHTML=englishMarkup;
   updateLanguageButtons('en');
   langStatus.textContent='ગુજરાતી ફાઇલ લોડ થઈ શકી નથી. English આવૃત્તિ બતાવવામાં આવી છે.';
  });
 }
 // Default language is English. Original .gu/.en blocks are now correctly recognized.
 setPaperLanguage('en');
 languageSelect.forEach(function(btn){btn.onclick=function(ev){ev.preventDefault();ev.stopPropagation();if(ev.stopImmediatePropagation)ev.stopImmediatePropagation();setPaperLanguage(btn.getAttribute('data-lang'));return false;};});
 tgt.querySelector('#bk').onclick=function(){tgt.innerHTML='';var v=vw();if(v)v.scrollIntoView({behavior:'smooth',block:'start'});};
 tgt.querySelector('#exp').onclick=function(){h.querySelectorAll('details.card,details.question-card').forEach(function(e){e.open=true;});};
 tgt.querySelector('#col').onclick=function(){h.querySelectorAll('details.card,details.question-card').forEach(function(e){e.open=false;});};
 tgt.scrollIntoView({behavior:'smooth',block:'start'});
}
function checkPendingAfterInit(){
 var p=getPending();
 if(!p)return;
 var mins=Math.floor((Date.now()-p.time)/60000);
 if(mins>30){clearPending();return;}
 var rootEl=root();
 var note=null;
 if(rootEl){
  note=D.createElement('div');
  note.className='state';
  note.id='d1p-pending-note';
  note.style.cssText='border-color:#c7b8dd;background:#faf8ff;color:var(--pd);margin-bottom:12px;';
  note.innerHTML='Verifying your purchase, please wait…';
  rootEl.insertBefore(note,rootEl.firstChild);
 }
 pollOwnership(p.code,p.sess,40,function(stt){
  if(note)note.remove();
  if(stt==='owned'){
   for(var bi=0;bi<B.length;bi++){
    var br=B[bi];
    var found=false;
    Object.keys(br.s).forEach(function(sem){if(br.s[sem].indexOf(p.code)>=0)found=sem;});
    if(found){st.b=br;st.s=found;st.c=p.code;renderSessions(p.code);break;}
   }
  }
 });
}
function showPurchaseVerified(){
 var r=root();if(!r)return;
 var note=D.createElement('div');
 note.className='state';
 note.style.cssText='border-color:#a8d5a8;background:#f0faf0;color:#2a6b2a;margin-bottom:12px;';
 note.innerHTML='Payment successful! Verifying your paper access…';
 r.insertBefore(note,r.firstChild);
 return note;
}
function init(){
 try{
  ensureDesign();
  renderBranches();
  // Check for ?purchased=1 (return from checkout thank-you page)
  if(window.location.search.indexOf('purchased=1')>=0){
   // Clear the URL parameter without reloading
   var url=new URL(window.location);url.searchParams.delete('purchased');
   window.history.replaceState({},'',url.pathname+url.search);
   // Also set a pending flag for any recent purchase
   var note=showPurchaseVerified();
   setTimeout(function(){if(note)note.remove();},5000);
  }
  setTimeout(checkPendingAfterInit,500);
 }catch(e){err(e.message||'Failed to load.');}
}if(D.readyState==='loading'){D.addEventListener('DOMContentLoaded',init);}else{init();}
})();