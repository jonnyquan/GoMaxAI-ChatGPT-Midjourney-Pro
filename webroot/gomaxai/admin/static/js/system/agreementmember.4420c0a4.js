
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as t,a,G as s,C as r,r as n,x as i,j as o,o as m,c as l,b as p,f as c,g,h as d,Q as u,P as b,p as y,k as f,_ as x,q as h}from"../main-7fe883cc.js";/* empty css                     */const A={style:{"margin-top":"16px"}},v=(e=>(y("data-v-5baab91d"),e=e(),f(),e))((()=>p("div",{style:{color:"#20295A","font-size":"15px","margin-top":"24px","margin-bottom":"12px"}}," 会员协议内容 ",-1))),_={style:{"margin-top":"50px"}},j=e({__name:"agreementmember",setup(e){const y=t(),f=a(),x=s({memberAgreement:""});async function h(){const e=await u.queryConfig({keys:["memberAgreement"]}),{memberAgreement:t}=e.data;Object.assign(x,{memberAgreement:t})}async function j(){if(0==y.isUserModifyPermissions())return b.error("非超级管理员无权限操作！");if(""!=x.memberAgreement){try{await u.setConfig({settings:(e=x,Object.keys(e).map((t=>({configKey:t,configVal:e[t]}))))}),b.success("变更配置信息成功")}catch(t){}var e;h()}else b.error("请填写完整信息")}return r((()=>f.settings.app.colorScheme)),n({memberAgreement:[{required:!0,trigger:"blur",message:"请填写会员协议内容"}]}),n(),n("/api/file/upload"),i((()=>{h()})),(e,t)=>{const a=o("el-alert"),s=o("el-input"),r=o("el-button");return m(),l("div",null,[p("div",A,[c(a,{closable:!1,"show-icon":"",title:"会员协议设置说明",description:"这里的会员协议设置是对应用户端的会员协议链接、可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"warning"})]),p("div",null,[v,c(s,{style:{width:"100%",height:"50vh"},type:"textarea",modelValue:x.memberAgreement,"onUpdate:modelValue":t[0]||(t[0]=e=>x.memberAgreement=e),placeholder:"请输入会员协议内容",clearable:""},null,8,["modelValue"])]),p("div",_,[c(r,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:j},{default:g((()=>[d("保存设置 ")])),_:1})])])}}});"function"==typeof h&&h(j);const k=x(j,[["__scopeId","data-v-5baab91d"]]);export{k as default};
