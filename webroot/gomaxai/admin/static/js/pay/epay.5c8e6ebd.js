
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as a,u as e,F as l,r as p,o as t,l as r,b as y,e as i,f as o,h as u,i as d,Y as n,X as s,j as m,c,P as f,t as g,_ as E,q as x}from"../main-46c178e9.js";const b={style:{display:"flex","align-items":"center","margin-top":"16px","margin-bottom":"24px"}},v={style:{"margin-top":"3px","margin-left":"12px"}},_={style:{"margin-top":"16px"}},U={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},h={style:{"margin-top":"3px","margin-left":"12px"}},V={style:{"margin-top":"3px"}},A={style:{"margin-top":"16px"}},P=a({__name:"epay",setup(a){const E=e(),x=l({payEpayStatus:"",payEpayPid:"",payEpaySecret:"",payEpayNotifyUrl:"",payEpayReturnUrl:"",payEpayApiPayUrl:"",payEpayApiQueryUrl:"",payEpayRedirect:"",payEpayChannel:[]}),P=p({payEpayStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payEpaySecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payEpayPid:[{required:!0,trigger:"blur",message:"请填写商户PID"}],payEpayNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}],payEpayApiPayUrl:[{required:!0,trigger:"blur",message:"请填写平台支付API请求地址"}],payEpayApiQueryUrl:[{required:!0,trigger:"blur",message:"请填写平台API商户查询地址"}]}),S=p(),z=[{label:"微信支付",value:"wxpay"},{label:"支付宝支付",value:"alipay"}];async function C(){const a=await c.queryConfig({keys:["payEpaySecret","payEpayNotifyUrl","payEpayReturnUrl","payEpayPid","payEpayStatus","payEpayApiPayUrl","payEpayApiQueryUrl","payEpayRedirect","payEpayChannel"]}),e=a.data.payEpayChannel?JSON.parse(a.data.payEpayChannel):[];Object.assign(x,a.data,{payEpayChannel:e})}function R(){var a;null==(a=S.value)||a.validate((async a=>{if(a){if(0==E.isUserModifyPermissions())return f.error("非超级管理员无权限操作！");try{await c.setConfig({settings:(e=x,Object.keys(e).map((a=>({configKey:a,configVal:k(a,e[a])}))))}),f.success("变更配置信息成功")}catch(l){}C()}else f.error("请填写完整信息");var e}))}function k(a,e){return["payEpayChannel"].includes(a)?e?e?JSON.stringify(e):void 0:[]:e}return t((()=>{C()})),(a,e)=>{const l=r("el-alert"),p=r("el-switch"),t=r("el-input"),c=r("el-form-item"),f=r("el-col"),E=r("el-row"),C=r("el-tooltip"),k=r("el-checkbox"),F=r("el-checkbox-group"),q=r("el-form"),w=r("el-button");return y(),i("div",null,[o("div",null,[u(l,{closable:!1,"show-icon":"",title:"易支付参数说明",description:"通用易支付渠道、请按文档配置即可、同时开启多种支付、我们会以菜单顺序为优先级使用、仅mpay支持非跳转支付、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"warning"})]),o("div",null,[o("div",null,[e[10]||(e[10]=o("div",{style:{"font-size":"15px",color:"#20295A","font-weight":"500","margin-top":"32px"}}," 支付参数设置 ",-1)),o("div",b,[e[9]||(e[9]=o("div",{style:{color:"#9FA3B8","font-size":"15px"}},"启用当前支付",-1)),o("div",v,[u(p,{modelValue:x.payEpayStatus,"onUpdate:modelValue":e[0]||(e[0]=a=>x.payEpayStatus=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])])])]),o("div",_,[u(q,{ref_key:"formRef",ref:S,rules:P.value,model:x,"label-position":"top"},{default:d((()=>[u(E,null,{default:d((()=>[u(f,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(c,{label:"商户PID",prop:"payEpayPid"},{default:d((()=>[u(t,{size:"large",modelValue:x.payEpayPid,"onUpdate:modelValue":e[1]||(e[1]=a=>x.payEpayPid=a),placeholder:"请填写商户PID",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(E,null,{default:d((()=>[u(f,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(c,{label:"商户秘钥",prop:"payEpaySecret"},{default:d((()=>[u(t,{size:"large",modelValue:x.payEpaySecret,"onUpdate:modelValue":e[2]||(e[2]=a=>x.payEpaySecret=a),placeholder:"请填写商户秘钥",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(E,null,{default:d((()=>[u(f,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(c,{label:"支付通知地址",prop:"payEpaySecret"},{default:d((()=>[u(t,{size:"large",modelValue:x.payEpayNotifyUrl,"onUpdate:modelValue":e[3]||(e[3]=a=>x.payEpayNotifyUrl=a),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(E,null,{default:d((()=>[u(f,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(c,{label:"支付回调地址",prop:"payEpaySecret"},{default:d((()=>[u(t,{size:"large",modelValue:x.payEpayReturnUrl,"onUpdate:modelValue":e[4]||(e[4]=a=>x.payEpayReturnUrl=a),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(E,null,{default:d((()=>[u(f,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(c,{label:"支付请求地址",prop:"payEpayApiPayUrl"},{default:d((()=>[u(t,{size:"large",modelValue:x.payEpayApiPayUrl,"onUpdate:modelValue":e[5]||(e[5]=a=>x.payEpayApiPayUrl=a),placeholder:"请填写平台支付请求地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(E,null,{default:d((()=>[u(f,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(c,{label:"商户查询地址",prop:"payEpayApiQueryUrl"},{default:d((()=>[u(t,{size:"large",modelValue:x.payEpayApiQueryUrl,"onUpdate:modelValue":e[6]||(e[6]=a=>x.payEpayApiQueryUrl=a),placeholder:"请填写平台查询商户地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(c,{prop:"payEpayRedirect",style:{"margin-bottom":"0"}},{default:d((()=>[o("div",U,[e[11]||(e[11]=o("div",{style:{color:"#9FA3B8","font-size":"15px"}},"跳转支付",-1)),o("div",h,[u(C,{class:"box-item",effect:"dark",content:"请注意、仅mapi支持不跳转支付、其他都需要为跳转支付、不开启跳转支付表示购买页面显示二维码直接扫码购买、跳转支付表示前往新页面！",placement:"right"},{default:d((()=>[u(p,{modelValue:x.payEpayRedirect,"onUpdate:modelValue":e[7]||(e[7]=a=>x.payEpayRedirect=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])),_:1})])])])),_:1}),u(E,null,{default:d((()=>[u(f,{xs:24,md:24,lg:24,xl:24},{default:d((()=>[u(c,{prop:"payEpayChannel"},{default:d((()=>[e[12]||(e[12]=o("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"20px"}}," 开启支付渠道 ",-1)),o("div",V,[u(F,{modelValue:x.payEpayChannel,"onUpdate:modelValue":e[8]||(e[8]=a=>x.payEpayChannel=a),size:"small"},{default:d((()=>[(y(),i(n,null,s(z,(a=>u(k,{key:a.value,value:a.value},{default:d((()=>[m(g(a.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue"])])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])]),o("div",A,[u(w,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:R},{default:d((()=>e[13]||(e[13]=[m("保存设置")]))),_:1})])])}}});"function"==typeof x&&x(P);const S=E(P,[["__scopeId","data-v-6620db41"]]);export{S as default};
