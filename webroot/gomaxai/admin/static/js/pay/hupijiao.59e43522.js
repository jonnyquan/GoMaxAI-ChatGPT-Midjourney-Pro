
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,G as l,r as p,x as t,j as u,o as i,c as r,b as o,f as d,g as s,h as n,Q as y,P as c,p as f,k as m,_ as g,q as H}from"../main-7fe883cc.js";const x=e=>(f("data-v-35faa761"),e=e(),m(),e),b=x((()=>o("div",{style:{"font-size":"15px",color:"#20295A","font-weight":"500","margin-top":"32px"}}," 支付参数设置 ",-1))),_={style:{display:"flex","align-items":"center","margin-top":"16px","margin-bottom":"24px"}},U=x((()=>o("div",{style:{color:"#9FA3B8","font-size":"15px"}},"启用当前支付",-1))),v={style:{"margin-top":"3px","margin-left":"12px"}},V={style:{"margin-top":"16px"}},h={style:{"margin-top":"16px"}},w=e({__name:"hupijiao",setup(e){const f=a(),m=l({payHupiStatus:"",payHupiAppId:"",payHupiSecret:"",payHupiGatewayUrl:"",payHupiNotifyUrl:"",payHupiReturnUrl:""}),g=p({payHupiStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payHupiSecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payHupiGatewayUrl:[{required:!0,trigger:"blur",message:"请填写网关"}],payHupiAppId:[{required:!0,trigger:"blur",message:"请填写Appid"}],payHupiNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}]}),H=p();async function x(){const e=await y.queryConfig({keys:["payHupiSecret","payHupiNotifyUrl","payHupiGatewayUrl","payHupiReturnUrl","payHupiAppId","payHupiStatus"]});Object.assign(m,e.data)}function w(){var e;null==(e=H.value)||e.validate((async e=>{if(e){if(0==f.isUserModifyPermissions())return c.error("非超级管理员无权限操作！");try{await y.setConfig({settings:(a=m,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),c.success("变更配置信息成功")}catch(l){}x()}else c.error("请填写完整信息");var a}))}return t((()=>{x()})),(e,a)=>{const l=u("el-alert"),p=u("el-switch"),t=u("el-input"),y=u("el-form-item"),c=u("el-col"),f=u("el-row"),x=u("el-form"),S=u("el-button");return i(),r("div",null,[o("div",null,[d(l,{closable:!1,"show-icon":"",title:"虎皮椒支付参数说明",description:"虎皮椒支付为三方支付、接入请购买微信渠道、详细参数参照 https://www.xunhupay.com/ 目前优先开通微信支付渠道、同时开启开启多种支付、我们将优先按照菜单顺序调用、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"warning"})]),o("div",null,[o("div",null,[b,o("div",_,[U,o("div",v,[d(p,{modelValue:m.payHupiStatus,"onUpdate:modelValue":a[0]||(a[0]=e=>m.payHupiStatus=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])])])])]),o("div",V,[d(x,{ref_key:"formRef",ref:H,rules:g.value,model:m,"label-width":"120px","label-position":"top"},{default:s((()=>[d(f,null,{default:s((()=>[d(c,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(y,{label:"支付AppId",prop:"payHupiAppId"},{default:s((()=>[d(t,{size:"large",modelValue:m.payHupiAppId,"onUpdate:modelValue":a[1]||(a[1]=e=>m.payHupiAppId=e),placeholder:"请填写AppId",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(f,null,{default:s((()=>[d(c,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(y,{label:"支付网关地址",prop:"payHupiGatewayUrl"},{default:s((()=>[d(t,{size:"large",modelValue:m.payHupiGatewayUrl,"onUpdate:modelValue":a[2]||(a[2]=e=>m.payHupiGatewayUrl=e),placeholder:"请填写支付网关地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(f,null,{default:s((()=>[d(c,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(y,{label:"Secret秘钥",prop:"payHupiSecret"},{default:s((()=>[d(t,{size:"large",modelValue:m.payHupiSecret,"onUpdate:modelValue":a[3]||(a[3]=e=>m.payHupiSecret=e),placeholder:"请填写支付秘钥",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(f,null,{default:s((()=>[d(c,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(y,{label:"支付通知地址",prop:"payHupiSecret"},{default:s((()=>[d(t,{size:"large",modelValue:m.payHupiNotifyUrl,"onUpdate:modelValue":a[4]||(a[4]=e=>m.payHupiNotifyUrl=e),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(f,null,{default:s((()=>[d(c,{xs:24,md:20,lg:15,xl:8},{default:s((()=>[d(y,{label:"支付回调地址",prop:"payHupiSecret"},{default:s((()=>[d(t,{size:"large",modelValue:m.payHupiReturnUrl,"onUpdate:modelValue":a[5]||(a[5]=e=>m.payHupiReturnUrl=e),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])]),o("div",h,[d(S,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:w},{default:s((()=>[n("保存设置")])),_:1})])])}}});"function"==typeof H&&H(w);const S=g(w,[["__scopeId","data-v-35faa761"]]);export{S as default};
