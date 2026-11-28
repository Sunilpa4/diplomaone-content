(function(){
'use strict';
var D=document;
/* ===== DATA ===== */
var BRANCHES={
'computer':{en:'Computer Engineering',gu:'કમ્પ્યુટર એન્જિનિયરિંગ',code:'07',s:{'1':['DI01000131','DI01000151','DI01000021'],'2':['DI02000101'],'3':['DI03000021','DI03000011','DI03000031','DI03000041','DI03000051'],'4':['DI04000021','DI04000011']}},
'mechanical':{en:'Mechanical Engineering',gu:'મિકેનિકલ એન્જિનિયરિંગ',code:'19',s:{'1':['DI01000021','DI01000191','DI01000181'],'2':['DI01000121'],'3':['DI03000141','DI03000161','DI03000171','DI03019011','DI03000151','DI03000201'],'4':['DI04019011','DI04000241','DI04000251']}},
'civil':{en:'Civil Engineering',gu:'સિવિલ એન્જિનિયરિંગ',code:'06',s:{'1':['DI01000021','DI01000121','DI01006021']}},
'electrical':{en:'Electrical Engineering',gu:'ઇલેક્ટ્રિકલ એન્જિનિયરિંગ',code:'09',s:{'1':['DI01000021','DI01000081','DI01009011'],'2':['DI02000161','DI02000171'],'3':['DI03000081','DI03000091','DI03000101','DI03009011','DI03009021'],'4':['DI04000171','DI04000321','DI04009011']}},
'chemical':{en:'Chemical Engineering',gu:'કેમિકલ એન્જિનિયરિંગ',code:'05',s:{'1':['DI01000021','DI01005011','DI01005021'],'2':['DI02005021','DI02005011','DI01000121'],'3':['DI03005031','DI03005021','DI03005061','DI03005011'],'4':['DI04005021','DI04005041','DI04005071']}},
};
var NEN={
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
var NGU={
'DI01000021':'ગણિત - I',
'DI01000081':'ડી.સી. સર્કિટ',
'DI01000121':'એપ્લાઇડ ફિઝિક્સ',
'DI01000131':'કમ્પ્યુટર પ્રોગ્રામિંગ ફંડામેન્ટલ્સ (C)',
'DI01000151':'બેઝિક્સ ઓફ ઇલેક્ટ્રોનિક્સ',
'DI01000181':'ઇજનેરી સામગ્રી વિજ્ઞાન',
'DI01000191':'મેકેનિકલ એન્જિનિયરિંગના મૂળતત્ત્વો',
'DI01005011':'પ્લાન્ટ યુટિલિટીઝ',
'DI01005021':'મટીરિયલ સાયન્સ અને ટેક્નોલોજી',
'DI01006021':'કન્સ્ટ્રક્શન મટીરિયલ',
'DI01009011':'ઇલેક્ટ્રોનિક્સ Devices અને Circuits',
'DI02000101':'સ્ક્રિપ્ટિંગ લેંગ્વેજ (Python)',
'DI02000161':'ડિજિટલ ઇલેક્ટ્રોનિક્સના પાયા',
'DI02000171':'એસી ફંડામેન્ટલ',
'DI02005011':'બેઝિક કેમિકલ એન્જિનિયરિંગ કેલ્ક્યુલેશન્સ',
'DI02005021':'મેકેનિકલ ઓપરેશન',
'DI03000011':'ડિજિટલ ઇલેક્ટ્રોનિક્સ ફંડામેન્ટલ્સ',
'DI03000021':'ડેટા સ્ટ્રક્ચર્સ',
'DI03000031':'રિલેશનલ ડેટાબેઝ મેનેજમેન્ટ સિસ્ટમ',
'DI03000041':'ફંડામેન્ટલ્સ ઓફ ઓપરેટિંગ સિસ્ટમ',
'DI03000051':'કમ્પ્યુટર નેટવર્ક્સ',
'DI03000081':'ઇલેક્ટ્રિકલ મશીન્સ - I',
'DI03000091':'ઇલેક્ટ્રિકલ ઇન્સ્ટ્રુમેન્ટેશન',
'DI03000101':'વિદ્યુત શક્તિ પ્રસારણ અને વિતરણ',
'DI03000141':'યંત્રો અને મિકેનિઝમ્સનો સિદ્ધાંત',
'DI03000151':'માપન અને માપવિજ્ઞાન',
'DI03000161':'ઉત્પાદન ઇજનેરી-I',
'DI03000171':'પ્રવાહી યાંત્રિકી અને હાઇડ્રોલિક મશીનરી',
'DI03000201':'પ્રાયોગિક યાંત્રિકીના પાયાના સિદ્ધાંતો',
'DI03005011':'બેઝિક્સ ઑફ પ્રોસેસ ઇન્સ્ટ્રુમેન્ટેશન્સ',
'DI03005021':'ફ્લુઇડ ફ્લો ઓપરેશન',
'DI03005031':'પ્રોસેસ હીટ ટ્રાન્સફર',
'DI03005061':'પ્રોસેસ કેલ્ક્યુલેશન',
'DI03009011':'ઇલેક્ટ્રિકલ વાયરિંગ અંદાજ તથા કોન્ટ્રાક્ટિંગ',
'DI03009021':'વિદ્યુત શક્તિ ઉત્પાદન',
'DI03019011':'ઇજનેરી ઉષ્માગતિશાસ્ત્ર',
'DI04000011':'સોફ્ટવેર એન્જિનિયરિંગ',
'DI04000021':'ઓબ્જેક્ટ ઓરિએન્ટેડ પ્રોગ્રામિંગ - જાવા',
'DI04000171':'માઇક્રોકન્ટ્રોલર તથા તેની એપ્લિકેશન્સ',
'DI04000241':'મેન્યુફેક્ચરિંગ ઇજનેરી - II',
'DI04000251':'મશીન એલિમેન્ટ્સની ડિઝાઇન',
'DI04000321':'ઇલેક્ટ્રિકલ મશીન્સ - II',
'DI04005021':'માસ ટ્રાન્સફર-I',
'DI04005041':'કેમિકલ એન્જિનિયરિંગ થર્મોડાયનેમિક્સ',
'DI04005071':'પેટ્રોલિયમ રિફાઇનિંગ તથા પેટ્રોલિયમ ટેકનોલોજી',
'DI04009011':'સબસ્ટેશન એન્જિનિયરિંગ',
'DI04019011':'થર્મલ ઇજનેરી - I',
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
var PLANG={
'DI01000021--summer-2026':'en',
'DI01000021--winter-2025':'en',
'DI01000081--summer-2026':'bilingual',
'DI01000121--summer-2026':'bilingual',
'DI01000121--winter-2025':'bilingual',
'DI01000131--summer-2026':'en',
'DI01000151--summer-2026':'bilingual',
'DI01000181--summer-2025':'bilingual',
'DI01000181--summer-2026':'bilingual',
'DI01000181--winter-2025':'bilingual',
'DI01000191--summer-2025':'en',
'DI01000191--summer-2026':'bilingual',
'DI01000191--winter-2025':'en',
'DI01005011--summer-2026':'bilingual',
'DI01005011--winter-2025':'bilingual',
'DI01005021--summer-2026':'bilingual',
'DI01005021--winter-2025':'bilingual',
'DI01006021--summer-2026':'bilingual',
'DI01006021--winter-2025':'bilingual',
'DI01009011--summer-2026':'bilingual',
'DI02000101--summer-2026':'en',
'DI02000161--summer-2026':'bilingual',
'DI02000171--summer-2026':'bilingual',
'DI02005011--summer-2026':'bilingual',
'DI02005011--winter-2025':'bilingual',
'DI02005021--summer-2026':'bilingual',
'DI02005021--winter-2025':'bilingual',
'DI03000011--summer-2026':'en',
'DI03000021--summer-2026':'en',
'DI03000031--summer-2026':'en',
'DI03000041--summer-2026':'en',
'DI03000051--summer-2026':'en',
'DI03000081--summer-2026':'bilingual',
'DI03000091--summer-2026':'bilingual',
'DI03000101--summer-2026':'bilingual',
'DI03000141--summer-2026':'bilingual',
'DI03000151--summer-2026':'bilingual',
'DI03000161--summer-2026':'bilingual',
'DI03000161--winter-2025':'bilingual',
'DI03000171--summer-2026':'bilingual',
'DI03000171--winter-2025':'bilingual',
'DI03000201--summer-2026':'bilingual',
'DI03000201--winter-2025':'bilingual',
'DI03005011--summer-2026':'bilingual',
'DI03005011--winter-2025':'bilingual',
'DI03005021--summer-2026':'bilingual',
'DI03005021--winter-2025':'bilingual',
'DI03005031--summer-2026':'bilingual',
'DI03005031--winter-2025':'bilingual',
'DI03005061--summer-2026':'bilingual',
'DI03005061--winter-2025':'bilingual',
'DI03009011--summer-2026':'bilingual',
'DI03009021--summer-2026':'bilingual',
'DI03019011--summer-2026':'bilingual',
'DI03019011--winter-2025':'bilingual',
'DI04000011--summer-2026':'en',
'DI04000021--summer-2026':'en',
'DI04000171--summer-2026':'bilingual',
'DI04000241--summer-2026':'bilingual',
'DI04000251--summer-2026':'bilingual',
'DI04000321--summer-2026':'bilingual',
'DI04005021--summer-2026':'bilingual',
'DI04005041--summer-2026':'bilingual',
'DI04005071--summer-2026':'bilingual',
'DI04009011--summer-2026':'bilingual',
'DI04019011--summer-2026':'bilingual',
};
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

var COMMIT='4ecbd88';
var GHI='https://cdn.jsdelivr.net/gh/Sunilpa4/diplomaone-content@'+COMMIT;
/* ===== I18N ===== */
var T={
  en:{
    title:'Solved Papers',
    intro:'Choose your branch, semester and subject to browse solved exam papers. Free papers open instantly. Paid papers require a one-time purchase of ₹29.',
    branch:'Branch',sem:'Semester',subj:'Subject',papers:'papers',open:'Open →',view:'View →',read:'Read →',
    back:'Back',backBranches:'All branches',chooseSem:'Choose a semester to see solved papers.',
    chooseSub:'Select a subject to see available solved papers.',chooseSess:'Choose an exam session to read the solved paper.',
    code:'Code',cat:'Category',loading:'Loading paper…',checking:'Checking access…',loadErr:'Failed to load paper',
    paid:'PAID PAPER',paidFor:'This solved paper is available for a one-time payment of ₹29.',
    buyNow:'Buy & Read Now — ₹29',buyNote:'You will be asked for your email during checkout.',
    feat1:'Pay ₹29 once — read instantly in your browser',feat2:'Unlimited reads after purchase',feat3:'Print / Save as PDF supported',
    print:'Print / Save PDF',free:'Free',allPapers:'All Papers',langToggle:'ગુજરાતી',
    verifying:'Payment successful! Verifying access…',
  },
  gu:{
    title:'ઉકેલેલા પેપર',
    intro:'તમારી બ્રાન્ચ, સેમેસ્ટર અને વિષય પસંદ કરીને ઉકેલેલા પરીક્ષા પેપર જુઓ. મફત પેપર તુરંત ખુલે છે. પેઇડ પેપર માટે ₹29 ની એક-વખતની ચુકવણી જરૂરી છે.',
    branch:'બ્રાન્ચ',sem:'સેમેસ્ટર',subj:'વિષય',papers:'પેપર',open:'ખોલો →',view:'જુઓ →',read:'વાંચો →',
    back:'પાછા',backBranches:'બધી બ્રાન્ચ',chooseSem:'સેમેસ્ટર પસંદ કરો.',
    chooseSub:'વિષય પસંદ કરો.',chooseSess:'પેપર વાંચવા માટે પરીક્ષા સત્ર પસંદ કરો.',
    code:'કોડ',cat:'શ્રેણી',loading:'પેપર લોડ થઈ રહ્યું છે…',checking:'ઍક્સેસ ચકાસી રહ્યા છીએ…',loadErr:'પેપર લોડ થઈ શક્યું નહીં',
    paid:'પેઇડ પેપર',paidFor:'આ ઉકેલેલું પેપર ₹29 ની એક-વખતની ચુકવણી પર ઉપલબ્ધ છે.',
    buyNow:'ખરીદો અને વાંચો — ₹29',buyNote:'ચેકઆઉટ દરમિયાન તમારો ઇમેઇલ પૂછવામાં આવશે.',
    feat1:'₹29 ચૂકવો — બ્રાઉઝરમાં તુરંત વાંચો',feat2:'ખરીદી પછી અમર્યાદિત વાંચન',feat3:'પ્રિન્ટ / PDF સેવ કરવાની સુવિધા',
    print:'પ્રિન્ટ / PDF સેવ કરો',free:'મફત',allPapers:'બધા પેપર',langToggle:'English',
    verifying:'ચુકવણી સફળ! ઍક્સેસ ચકાસી રહ્યા છીએ…',
  }
};
var LANG='en';
function t(k){return(T[LANG]&&T[LANG][k])||T.en[k]||k;}
function N(c){return(LANG==='gu'&&NGU[c])?NGU[c]:NEN[c];}
function BNAME(b){var br=BRANCHES[b];if(!br)return b;return(LANG==='gu'&&br.gu)?br.gu:br.en;}
/* ===== STATE / ROUTE ===== */
var R={v:'branches',b:null,s:null,c:null,sess:null};
function parseHash(){
  var h=window.location.hash.replace(/^#/,'');
  var p=h.split('/');
  var view=p[0]||'branches';
  R={v:view,b:null,s:null,c:null,sess:null};
  if(view==='branch'){R.b=p[1]||null;}
  else if(view==='sem'){R.b=p[1]||null;R.s=p[2]||null;}
  else if(view==='subj'){R.b=p[1]||null;R.s=p[2]||null;R.c=p[3]||null;}
  else if(view==='paper'){
    if(p.length>=5){R.b=p[1];R.s=p[2];R.c=p[3];R.sess=p[4];}
    else{R.c=p[1]||null;R.sess=p[2]||null;}
  }
}
/* ===== UTILITY ===== */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function $(s,p){return(p||D).querySelector(s);}
function app(){return $('#paper-app');}
function vw(){var e=app();if(!e){var m=document.getElementById('main')||D.querySelector('main')||D.body;e=D.createElement('div');e.id='paper-app';m.appendChild(e);}return e;}
function isFree(s){return s==='winter-2025'||s==='summer-2025';}
function pkey(c,s){return PID[c]?PID[c]+'-'+s:null;}
function purl(c,s){return GHI+'/papers/'+c+'/'+s+'.html';}
function plang(c,s){return PLANG[c+'--'+s]||'en';}
function curl(c,s){
  var pk=pkey(c,s);if(!pk)return null;
  var h=(R.b&&R.s)?('#paper/'+R.b+'/'+R.s+'/'+c+'/'+s):('#paper/'+c+'/'+s);
  return'https://diplomaone.in/checkout/?add-to-cart='+encodeURIComponent(pk)+'&return='+encodeURIComponent(window.location.pathname+'?p=1'+h);
}
function findCode(c){var keys=Object.keys(BRANCHES);for(var i=0;i<keys.length;i++){var b=BRANCHES[keys[i]];for(var s in b.s){if((b.s[s]||[]).indexOf(c)>=0)return{branch:keys[i],sem:s};}}return null;}
/* ===== CARD RENDERING ===== */
var CSS='<style id="__ps-css">'+
'#paper-app{font-family:inherit;color:#1e1e1e;}'+
'#paper-app .ps-card{display:block;text-decoration:none;color:inherit;background:#fff;border:1px solid #d9d9d9;border-radius:6px;padding:16px 20px;margin-bottom:10px;transition:border-color .15s,box-shadow .15s;box-sizing:border-box;}'+
'#paper-app .ps-card:hover{border-color:#145c8b;box-shadow:0 2px 8px rgba(20,92,139,.1);}'+
'#paper-app .ps-card-inner{display:flex;justify-content:space-between;align-items:center;gap:12px;}'+
'#paper-app .ps-card-title{font-size:15px;font-weight:600;color:#1e1e1e;margin:0;}'+
'#paper-app .ps-card-meta{font-size:13px;color:#666;margin-top:3px;}'+
'#paper-app .ps-card-arrow{color:#145c8b;font-weight:600;white-space:nowrap;font-size:14px;}'+
'#paper-app .ps-back{font-size:14px;margin:0 0 8px;}'+
'#paper-app .ps-back a{color:#145c8b;text-decoration:none;}'+
'#paper-app .ps-intro{color:#555;line-height:1.6;}'+
'#paper-app .ps-lang{text-align:right;margin-bottom:12px;}'+
'#paper-app .ps-lang button{background:none;border:1px solid #ccc;border-radius:4px;padding:4px 10px;cursor:pointer;font-size:13px;}'+
'#paper-app .ps-paper-wrap{background:#fff;border:1px solid #ddd;border-radius:6px;padding:24px;margin:16px 0;}'+
'#paper-app .ps-paper-wrap img{max-width:100%;height:auto;}'+
'#paper-app .ps-paper-toolbar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #eee;align-items:center;}'+
'#paper-app .ps-paywall{padding:24px;border:1px solid #e8b84d;border-radius:6px;background:#fff9e8;margin:16px 0;}'+
'#paper-app .ps-paywall h3{margin:0 0 8px;}'+
'#paper-app .ps-paywall ul{margin:8px 0 16px 20px;}'+
'#paper-app .ps-paywall ul li{margin-bottom:4px;}'+
'#paper-app .ps-btn{display:inline-block;padding:10px 20px;background:#145c8b;color:#fff;text-decoration:none;border-radius:4px;font-weight:600;border:none;cursor:pointer;font-size:14px;}'+
'#paper-app .ps-btn-outline{display:inline-block;padding:6px 14px;background:#fff;color:#1e1e1e;border:1px solid #ccc;border-radius:4px;cursor:pointer;font-size:14px;text-decoration:none;}'+
'#paper-app .ps-loading{padding:20px;background:#f7f9fb;border:1px solid #d9e1e7;border-radius:6px;margin:12px 0;color:#555;}'+
'#paper-app .ps-error{padding:16px;border:1px solid #d66;border-radius:6px;background:#fee;color:#800;margin:12px 0;}'+
'#paper-app .ps-free-badge{display:inline-block;background:#e8f5e9;color:#2e7d32;padding:2px 8px;border-radius:4px;font-size:12px;margin-left:8px;font-weight:600;}'+
'@media print{body *{visibility:hidden!important;}#paper-app,#paper-app *{visibility:visible!important;}#paper-app{position:absolute;left:0;top:0;width:100%;}.ps-paper-toolbar a,.ps-paper-toolbar button,.ps-back,.ps-lang{display:none!important;}}'+
'</style>';
function card(href,title,meta,arrow){
  return '<a class="ps-card" href="'+esc(href)+'"><div class="ps-card-inner">'+
    '<div style="flex:1;min-width:0;">'+
    '<div class="ps-card-title">'+esc(title)+'</div>'+
    (meta?'<div class="ps-card-meta">'+esc(meta)+'</div>':'')+
    '</div>'+
    '<span class="ps-card-arrow">'+esc(arrow||t('open'))+'</span>'+
    '</div></a>';
}
function back(href,txt){return '<p class="ps-back"><a href="'+esc(href)+'">← '+esc(txt)+'</a></p>';}
/* ===== OWNERSHIP / ACCESS ===== */
var OKEY='__dpo_v2';
function getOwned(){try{var v=localStorage.getItem(OKEY);return v?JSON.parse(v):{};}catch(e){return{};}}
function setOwned(pk){var o=getOwned();o[pk]=Date.now();try{localStorage.setItem(OKEY,JSON.stringify(o));}catch(e){}}
function hasLocal(c,s){if(isFree(s))return true;var pk=pkey(c,s);return!!getOwned()[pk];}
var RURL='https://diplomaone.in/wp-json/diplomaone/v1';
var RN=window.DiplomaOneAccess&&window.DiplomaOneAccess.nonce?window.DiplomaOneAccess.nonce:'';
function checkAccess(c,s,cb){
  if(isFree(s))return cb(true);
  if(hasLocal(c,s))return cb(true);
  var pk=pkey(c,s);if(!pk)return cb(false);
  var hdrs={'Accept':'application/json'};
  if(RN)hdrs['X-WP-Nonce']=RN;
  fetch(RURL+'/has-access?product_id='+encodeURIComponent(pk),{credentials:'include',headers:hdrs})
    .then(function(r){return r.json().catch(function(){return{};});})
    .then(function(j){if(j&&j.access){setOwned(pk);cb(true);}else{cb(false);}})
    .catch(function(){cb(false);});
}
/* ===== FONT LOADING (for Gujarati papers) ===== */
var gujFontLoaded=false;
function ensureGujFont(){
  if(gujFontLoaded)return;
  gujFontLoaded=true;
  var l=D.createElement('link');l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati:wght@400;600;700&display=swap';
  D.head.appendChild(l);
}
/* ===== VIEWS ===== */
function viewBranches(){
  var v=vw();
  var keys=Object.keys(BRANCHES);
  var cards='';
  for(var i=0;i<keys.length;i++){
    var b=BRANCHES[keys[i]],cnt=0;
    for(var s in b.s){cnt+=(b.s[s]||[]).filter(function(c){return SESS[c]&&SESS[c].length;}).length;}
    cards+=card('#branch/'+keys[i],BNAME(keys[i]),t('branch')+' '+b.code+' · '+cnt+' '+t('papers'),t('view'));
  }
  v.innerHTML=CSS+langToggle()+
    '<h2 style="margin:0 0 8px;">'+t('title')+'</h2>'+
    '<p class="ps-intro">'+t('intro')+'</p>'+
    '<div style="margin-top:20px;">'+cards+'</div>';
  bindLang();
}
function viewSems(){
  var b=BRANCHES[R.b];if(!b){go('');return;}
  var v=vw();
  var sems=Object.keys(b.s).filter(function(s){return(b.s[s]||[]).filter(function(c){return SESS[c]&&SESS[c].length;}).length;}).sort();
  var cards='';
  for(var i=0;i<sems.length;i++){
    var s=sems[i],cnt=(b.s[s]||[]).filter(function(c){return SESS[c]&&SESS[c].length;}).length;
    cards+=card('#sem/'+R.b+'/'+s,t('sem')+' '+s,cnt+' '+t('papers'),t('view'));
  }
  v.innerHTML=CSS+langToggle()+back('#',t('backBranches'))+
    '<h2 style="margin:4px 0 8px;">'+esc(BNAME(R.b))+'</h2>'+
    '<p class="ps-intro">'+t('chooseSem')+'</p>'+
    '<div style="margin-top:16px;">'+cards+'</div>';
  bindLang();
}
function viewSubs(){
  var b=BRANCHES[R.b];if(!b||!b.s[R.s]){go('#branch/'+R.b);return;}
  var v=vw();
  var codes=(b.s[R.s]||[]).filter(function(c){return SESS[c]&&SESS[c].length;});
  var cards='';
  for(var i=0;i<codes.length;i++){
    var c=codes[i],nm=N(c),m=META[c]||{cat:'',cr:0};
    var pc=(SESS[c]||[]).length;
    cards+=card('#subj/'+R.b+'/'+R.s+'/'+c,nm,c+' · '+(m.cat||'')+' · '+pc+' '+t('papers'),t('view'));
  }
  v.innerHTML=CSS+langToggle()+back('#branch/'+R.b,BNAME(R.b))+
    '<h2 style="margin:4px 0 8px;">'+esc(BNAME(R.b))+' — '+t('sem')+' '+esc(R.s)+'</h2>'+
    '<p class="ps-intro">'+t('chooseSub')+'</p>'+
    '<div style="margin-top:16px;">'+cards+'</div>';
  bindLang();
}
function viewSess(){
  var b=BRANCHES[R.b];if(!b){go('');return;}
  var c=R.c,nm=N(c),ss=SESS[c]||[];
  var v=vw();
  var bk='#sem/'+R.b+'/'+R.s;
  var cards='';
  for(var i=0;i<ss.length;i++){
    var s=ss[i],label=sessionLabel(s);
    var badge=isFree(s)?'<span class="ps-free-badge">'+t('free')+'</span>':'';
    cards+=card('#paper/'+R.b+'/'+R.s+'/'+c+'/'+s,label+badge,'',t('read'));
  }
  v.innerHTML=CSS+langToggle()+back(bk,BNAME(R.b)+' — '+t('sem')+' '+R.s)+
    '<div style="font-size:13px;color:#888;text-transform:uppercase;letter-spacing:1px;margin:12px 0 4px;">'+esc(c)+'</div>'+
    '<h2 style="margin:0 0 8px;">'+esc(nm)+'</h2>'+
    '<p class="ps-intro">'+t('chooseSess')+'</p>'+
    '<div style="margin-top:16px;">'+cards+'</div>';
  bindLang();
}
function sessionLabel(s){
  var labels={
    'winter-2025':{en:'Winter 2025',gu:'વિન્ટર 2025'},
    'summer-2025':{en:'Summer 2025',gu:'સમર 2025'},
    'summer-2026':{en:'Summer 2026',gu:'સમર 2026'},
  };
  return(labels[s]&&labels[s][LANG])||s;
}
function viewPaper(){
  var c=R.c,s=R.sess;
  var v=vw();
  var nm=N(c),loc=findCode(c);
  var bk;
  if(R.b&&R.s){bk='#subj/'+R.b+'/'+R.s+'/'+c;}
  else if(loc){bk='#subj/'+loc.branch+'/'+loc.sem+'/'+c;R.b=loc.branch;R.s=loc.sem;}
  else{bk='#';}
  v.innerHTML=CSS+langToggle()+back(bk,'← '+nm)+
    '<div class="ps-loading">'+t('checking')+'</div>';
  bindLang();
  checkAccess(c,s,function(ok){
    if(ok){loadPaper(c,s,bk,nm);}
    else{showPay(c,s,bk,nm);}
  });
}
function loadPaper(c,s,bk,nm){
  var v=vw();
  v.innerHTML=CSS+langToggle()+back(bk,'← '+nm)+
    '<div class="ps-loading">'+t('loading')+'</div>';
  bindLang();
  // Load Gujarati font if needed
  if(plang(c,s)==='bilingual')ensureGujFont();
  fetch(purl(c,s),{cache:'no-cache'}).then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.text();}).then(function(html){
    var tmp=D.createElement('div');tmp.innerHTML=html;
    var body=tmp.querySelector('main,article,.page,#content,body')||tmp;
    var fontStyle=plang(c,s)==='bilingual'?'#paper-app,.ps-paper-wrap *{font-family:"Noto Sans Gujarati","Noto Sans",system-ui,sans-serif!important;}':'';
    v.innerHTML=CSS+langToggle()+back(bk,'← '+nm)+
      '<div class="ps-paper-wrap">'+
      '<div class="ps-paper-toolbar">'+
      '<strong>'+esc(nm)+' — '+esc(sessionLabel(s))+'</strong>'+
      '<span style="flex:1"></span>'+
      '<button class="ps-btn-outline" onclick="window.print()">'+t('print')+'</button>'+
      '</div>'+
      '<div id="ps-body"></div>'+
      '</div>'+
      '<style>'+fontStyle+'</style>';
    bindLang();
    $('#ps-body',v).innerHTML=body.innerHTML;
    if(window.MathJax&&window.MathJax.typesetPromise){try{window.MathJax.typesetPromise([$('.ps-paper-wrap',v)]);}catch(e){}}
  }).catch(function(e){
    v.innerHTML=CSS+langToggle()+back(bk,'← '+nm)+
      '<div class="ps-error">'+t('loadErr')+': '+esc(e.message)+'</div>';
    bindLang();
  });
}
function showPay(c,s,bk,nm){
  var v=vw();
  var cu=curl(c,s);
  v.innerHTML=CSS+langToggle()+back(bk,'← '+nm)+
    '<div class="ps-paywall">'+
    '<div style="color:#a07000;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px;font-weight:600;">'+t('paid')+'</div>'+
    '<h3>'+esc(nm)+' — '+esc(sessionLabel(s))+'</h3>'+
    '<p>'+t('paidFor')+'</p>'+
    '<ul><li>'+t('feat1')+'</li><li>'+t('feat2')+'</li><li>'+t('feat3')+'</li></ul>'+
    '<a class="ps-btn" href="'+esc(cu)+'">'+t('buyNow')+'</a>'+
    '<p style="font-size:13px;color:#666;margin-top:12px;">'+t('buyNote')+'</p>'+
    '</div>';
  bindLang();
}
/* ===== LANGUAGE TOGGLE ===== */
function langToggle(){
  return '<div class="ps-lang"><button type="button" id="ps-lang-btn">'+t('langToggle')+'</button></div>';
}
function bindLang(){
  var btn=$('#ps-lang-btn');
  if(btn){btn.onclick=function(){LANG=(LANG==='en')?'gu':'en';try{localStorage.setItem('__ps_lang',LANG);}catch(e){}render();};}
}
/* ===== POST-PURCHASE POLL ===== */
function pollPay(){
  var sp=new URLSearchParams(window.location.search);
  if(sp.get('p')!=='1')return;
  parseHash();
  if(R.v==='paper'&&R.c&&R.sess){
    var pk=pkey(R.c,R.sess);if(pk)setOwned(pk);
    var tries=0;
    function chk(){checkAccess(R.c,R.sess,function(ok){if(ok){render();}else if(tries++<40)setTimeout(chk,1500);});}
    setTimeout(chk,1000);
  }
}
/* ===== NAVIGATION ===== */
function go(hash){window.location.hash=hash;}
/* ===== RENDER ===== */
function render(){
  try{
    parseHash();
    var vv=R.v;
    if(vv==='branches')viewBranches();
    else if(vv==='branch'&&R.b)viewSems();
    else if(vv==='sem'&&R.b&&R.s)viewSubs();
    else if(vv==='subj'&&R.b&&R.s&&R.c)viewSess();
    else if(vv==='paper'&&R.c&&R.sess)viewPaper();
    else{R.v='branches';viewBranches();}
  }catch(e){
    vw().innerHTML='<div class="ps-error">Error: '+esc(e.message)+' — <a href="'+esc(window.location.pathname)+'">Refresh</a></div>';
    if(window.console&&console.error)console.error('PaperSolutions error:',e);
  }
}
/* ===== INIT ===== */
function init(){
  try{var ll=localStorage.getItem('__ps_lang');if(ll==='gu'||ll==='en')LANG=ll;}catch(e){}
  vw();
  window.addEventListener('hashchange',render);
  render();
  setTimeout(pollPay,500);
}
if(D.readyState==='loading'){D.addEventListener('DOMContentLoaded',init);}else{init();}
})();
