/* PUBLIC merchant information, shared by the website and payment server.
 * This file ships to browsers. NEVER enter API keys, tokens, private keys,
 * customer details or other secrets here.
 * The following bilingual wording is a DRAFT prepared from owner-selected
 * product settings. Keep approval='draft' until the owner reviews both
 * languages, applicable consumer/tax requirements and the final effective
 * date. Draft text must not open checkout.
 */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.DiplomaOneMerchantPolicy=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  // BEGIN PUBLIC MERCHANT CONFIGURATION
  const configuration={
    schema:1,
    approval:'draft',
    revision:'draft-2026-11',
    effectiveDate:'',
    merchantName:'DiplomaOne',
    supportEmail:'sunilparmar45716@gmail.com',
    supportPhone:'',
    accessModel:'no-scheduled-expiry',
    accessTerms:{
      en:'A successful purchase is for one selected examination paper/product, not for an entire subject, semester or course. One purchase unlocks both the English and Gujarati versions of that same paper for the purchasing account; changing the language does not require another payment. Access has no scheduled expiry while DiplomaOne continues to make the purchased content and service available, subject to these terms, account security and any applicable legal requirements. This is not a promise of lifetime or uninterrupted availability. The purchase grants access through the DiplomaOne website; it does not transfer copyright or ownership of the material. The free/ad-supported Android edition and materials that may previously have been publicly available are separate from this website purchase. Do not share account access or redistribute purchased material.',
      gu:'સફળ ખરીદી એક પસંદ કરેલા પરીક્ષાના પેપર/ઉત્પાદન માટે છે; તે આખા વિષય, સેમેસ્ટર અથવા કોર્સની ખરીદી નથી. એક ખરીદીથી ખરીદી કરનારના ખાતામાં તે જ પેપરની અંગ્રેજી અને ગુજરાતી બંને આવૃત્તિઓ ખુલશે; ભાષા બદલવા માટે ફરીથી ચુકવણી કરવાની જરૂર નથી. DiplomaOne ખરીદેલી સામગ્રી અને સેવા ઉપલબ્ધ રાખે ત્યાં સુધી આ ઍક્સેસ માટે કોઈ નક્કી કરેલી સમાપ્તિ તારીખ નથી; આ શરતો, ખાતાની સુરક્ષા અને લાગુ કાનૂની જોગવાઈઓ પણ લાગુ પડશે. આ જીવનભર અથવા અવિરત ઉપલબ્ધતાની ખાતરી નથી. ખરીદીથી DiplomaOne વેબસાઇટ મારફતે ઍક્સેસ મળે છે; સામગ્રીના કૉપિરાઇટ અથવા માલિકી હકો હસ્તાંતરિત થતા નથી. મફત/જાહેરાત આધારિત Android આવૃત્તિ અને અગાઉ જાહેરમાં ઉપલબ્ધ રહી શકેલી સામગ્રી આ વેબસાઇટની ખરીદીથી અલગ છે. ખાતાની ઍક્સેસ અન્ય સાથે વહેંચશો નહીં અને ખરીદેલી સામગ્રીનું પુનર્વિતરણ કરશો નહીં.'
    },
    refundCancellation:{
      en:'If a payment is debited but the purchased paper is not unlocked, contact support at sunilparmar45716@gmail.com with the order details available in your account. Please do not make a second payment while the first transaction is pending or being checked. DiplomaOne will review the payment status and access records and take appropriate steps to resolve a confirmed failed or duplicate transaction, including arranging a refund where applicable. Requests for cancellation or refunds after successful digital delivery will be reviewed individually in light of the circumstances, the information shown before purchase and applicable consumer-protection law. A refund is not automatic merely because a digital paper has been opened or downloaded. Any approved refund will be processed through the payment provider and subject to its processing timelines. Nothing in this policy limits rights that cannot lawfully be excluded.',
      gu:'જો રકમ કપાઈ ગઈ હોય પરંતુ ખરીદેલું પેપર ખુલ્યું ન હોય, તો તમારા ખાતામાં ઉપલબ્ધ ઓર્ડરની વિગતો સાથે sunilparmar45716@gmail.com પર સપોર્ટનો સંપર્ક કરો. પ્રથમ વ્યવહાર પેન્ડિંગ હોય અથવા તેની તપાસ ચાલી રહી હોય ત્યારે બીજી ચુકવણી ન કરો. DiplomaOne ચુકવણીની સ્થિતિ અને ઍક્સેસના રેકોર્ડની તપાસ કરશે અને પુષ્ટિ થયેલા નિષ્ફળ અથવા ડુપ્લિકેટ વ્યવહારનો યોગ્ય ઉકેલ લેશે; લાગુ પડે ત્યાં રિફંડની વ્યવસ્થા પણ કરવામાં આવશે. ડિજિટલ સામગ્રી સફળતાપૂર્વક મળ્યા પછી રદ કરવાની અથવા રિફંડની વિનંતીઓ પરિસ્થિતિ, ખરીદી પહેલાં દર્શાવેલી માહિતી અને લાગુ ગ્રાહક-સંરક્ષણ કાયદાને ધ્યાનમાં રાખીને વ્યક્તિગત રીતે સમીક્ષા કરવામાં આવશે. ડિજિટલ પેપર ખોલ્યું અથવા ડાઉનલોડ કર્યું હોય એટલા માટે રિફંડ આપમેળે મળતું નથી. મંજૂર થયેલું રિફંડ પેમેન્ટ પ્રોવાઇડર મારફતે અને તેની પ્રક્રિયાના સમય મુજબ કરવામાં આવશે. આ નીતિ કાયદા હેઠળ બાકાત ન કરી શકાય તેવા તમારા અધિકારોને મર્યાદિત કરતી નથી.'
    },
    deliveryTerms:{
      en:'After the payment provider confirms successful payment and the DiplomaOne server verifies it, the purchased paper should become available in the same signed-in account, normally immediately. Both English and Gujarati versions of that paper are included in the same purchase. Access may take longer during provider, network or service delays. If the payment is debited but access does not appear, do not pay again; contact sunilparmar45716@gmail.com so the order can be checked and reconciled. A payment screenshot, browser message or payment attempt alone does not confirm a purchase; the verified transaction recorded by the server determines access.',
      gu:'પેમેન્ટ પ્રોવાઇડર સફળ ચુકવણીની પુષ્ટિ કરે અને DiplomaOne સર્વર તેની ચકાસણી કરે ત્યારબાદ ખરીદેલું પેપર એ જ સાઇન-ઇન ખાતામાં સામાન્ય રીતે તરત ઉપલબ્ધ થવું જોઈએ. તે જ ખરીદીમાં પેપરની અંગ્રેજી અને ગુજરાતી બંને આવૃત્તિઓ સામેલ છે. પેમેન્ટ પ્રોવાઇડર, નેટવર્ક અથવા સેવામાં વિલંબ થાય તો ઍક્સેસ મળવામાં વધુ સમય લાગી શકે છે. રકમ કપાઈ ગઈ હોય પરંતુ ઍક્સેસ ન દેખાતી હોય, તો ફરીથી ચુકવણી ન કરો; ઓર્ડરની તપાસ અને સમાધાન માટે sunilparmar45716@gmail.com પર સંપર્ક કરો. માત્ર ચુકવણીનો સ્ક્રીનશૉટ, બ્રાઉઝરનો સંદેશ અથવા ચુકવણીનો પ્રયાસ ખરીદીની પુષ્ટિ નથી; સર્વર દ્વારા ચકાસાયેલ વ્યવહારના આધારે જ ઍક્સેસ આપવામાં આવશે.'
    }
  };
  // END PUBLIC MERCHANT CONFIGURATION

  const fields=['schema','approval','revision','effectiveDate','merchantName','supportEmail','supportPhone',
    'accessModel','accessTerms','refundCancellation','deliveryTerms'];
  const object=value=>!!value&&typeof value==='object'&&!Array.isArray(value);
  const exact=(value,keys)=>object(value)&&Object.keys(value).length===keys.length&&keys.every(key=>Object.hasOwn(value,key));
  const text=(value,max)=>typeof value==='string'&&value.trim().length>0&&value.length<=max&&
    !/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(value)&&!/^\s*(?:todo|tbd|replace me|fill me)\b/i.test(value);
  const normalized=value=>value.replace(/\r\n?/g,'\n').trim();
  const freeze=value=>{
    if(value&&typeof value==='object'&&!Object.isFrozen(value)){
      Object.values(value).forEach(freeze);Object.freeze(value);
    }
    return value;
  };
  const full=(pattern,value)=>typeof value==='string'&&pattern.exec(value)?.[0]===value;
  function inspect(value=configuration,{now=Date.now()}={}){
    const issues=[];
    if(!exact(value,fields))return freeze({ready:false,issues:['policy_schema'],policy:null});
    if(value.schema!==1)issues.push('policy_schema');
    if(value.approval!=='approved')issues.push('owner_approval');
    if(!full(/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/,value.revision))issues.push('policy_revision');
    const date=full(/^\d{4}-\d\d-\d\d$/,value.effectiveDate)?new Date(value.effectiveDate+'T00:00:00Z'):null;
    if(!date||!Number.isFinite(date.getTime())||date.toISOString().slice(0,10)!==value.effectiveDate)issues.push('effective_date');
    else if(!Number.isFinite(now)||date.getTime()>now)issues.push('effective_date_not_started');
    if(!text(value.merchantName,160)||/[\r\n]/.test(value.merchantName))issues.push('merchant_name');
    if(typeof value.supportEmail!=='string'||value.supportEmail.length>254||
      !full(/^[A-Za-z0-9.!#$%&'*+\-/=?^_`{|}~]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,63}$/,value.supportEmail)||
      value.supportEmail.includes('..'))issues.push('support_email');
    if(typeof value.supportPhone!=='string'||value.supportPhone!==''&&
      (!full(/^\+?[0-9 ()-]{6,36}$/,value.supportPhone)||value.supportPhone.replace(/\D/g,'').length<6))issues.push('support_phone');
    if(value.accessModel!=='no-scheduled-expiry')issues.push('supported_access_model');
    for(const field of ['accessTerms','refundCancellation','deliveryTerms']){
      if(!exact(value[field],['en','gu'])){issues.push(field+'_languages');continue;}
      for(const language of ['en','gu']){
        if(!text(value[field][language],2400)||(language==='gu'&&!/[\u0a80-\u0aff]/.test(value[field][language])))issues.push(field+'_'+language);
      }
    }
    if(issues.length)return freeze({ready:false,issues,policy:null});
    const bilingual=value=>({en:normalized(value.en),gu:normalized(value.gu)});
    return freeze({ready:true,issues:[],policy:{schema:1,revision:value.revision,effectiveDate:value.effectiveDate,
      merchantName:normalized(value.merchantName),supportEmail:value.supportEmail,supportPhone:value.supportPhone,
      accessModel:value.accessModel,accessTerms:bilingual(value.accessTerms),
      refundCancellation:bilingual(value.refundCancellation),deliveryTerms:bilingual(value.deliveryTerms)}});
  }
  freeze(configuration);
  return Object.freeze({configuration,inspect,published:()=>inspect().policy});
});
