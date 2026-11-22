/* PUBLIC merchant information, shared by the website and payment server.
 * This entire file ships to browsers. NEVER enter API keys, tokens, private
 * keys, customer details or other secrets here. Blank/draft is intentional:
 * the owner has not yet supplied or approved commercial terms.
 * After completing both languages, review backend/FINAL-RELEASE.md.
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
    revision:'',
    effectiveDate:'',
    merchantName:'',
    supportEmail:'',
    supportPhone:'',
    accessModel:'undecided',
    accessTerms:{en:'',gu:''},
    refundCancellation:{en:'',gu:''},
    deliveryTerms:{en:'',gu:''}
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
    // Current entitlements have no scheduled expiry. A finite-day promise
    // needs real expiry enforcement first; a label must never pretend it does.
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
