
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,G as s,x as i,j as t,o as r,c as l,b as o,f as n,g as c,h as d,Q as p,P as m,p as u,k as g,_ as y}from"../main-043c96ab.js";const f={style:{"margin-top":"16px"}},x=(e=>(u("data-v-1ea814b3"),e=e(),g(),e))((()=>o("div",{style:{color:"#20295A","font-size":"15px","margin-top":"24px","margin-bottom":"12px"}}," 免责声明内容 ",-1))),b={style:{"margin-top":"50px"}},h=y(e({__name:"disclaimer",setup(e){const u=a(),g=s({disclaimer:""});async function y(){const e=await p.queryConfig({keys:["disclaimer"]}),{disclaimer:a}=e.data;Object.assign(g,{disclaimer:a})}async function h(){if(0==u.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");if(""!=g.disclaimer){try{await p.setConfig({settings:(e=g,Object.keys(e).map((a=>({configKey:a,configVal:e[a]}))))}),m.success("变更配置信息成功")}catch(a){}var e;y()}else m.error("请填写用免责声明内容")}return i((()=>{y()})),(e,a)=>{const s=t("el-alert"),i=t("el-input"),p=t("el-button");return r(),l("div",null,[o("div",f,[n(s,{closable:!1,"show-icon":"",title:"免责审明设置说明",description:"这里的免责审明设置是对应用户端的免责审明链接、可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"warning"})]),o("div",null,[x,n(i,{style:{width:"100%",height:"50vh"},type:"textarea",modelValue:g.disclaimer,"onUpdate:modelValue":a[0]||(a[0]=e=>g.disclaimer=e),placeholder:"请输入免责声明内容",clearable:""},null,8,["modelValue"])]),o("div",b,[n(p,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:h},{default:c((()=>[d("保存设置 ")])),_:1})])])}}}),[["__scopeId","data-v-1ea814b3"]]);export{h as default};
