
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as t,a as i,G as o,C as a,r as n,x as s,j as l,o as c,c as r,b as p,f as u,g as d,h as f,Q as g,P as m,p as y,k as x,_ as b,q as v}from"../main-2d3d97e8.js";/* empty css                     */const h=e=>(y("data-v-1f76abeb"),e=e(),x(),e),A={style:{"margin-top":"16px"}},I=h((()=>p("div",{style:{color:"#20295A","font-size":"15px","margin-top":"24px","margin-bottom":"12px"}}," 公告内容 ",-1))),O={style:{display:"flex","align-items":"center",margin:"16px 0"}},V=h((()=>p("div",{style:{color:"#9FA3B8","font-size":"15px","margin-right":"12px"}}," 自动打开公告 ",-1))),w=e({__name:"notice",setup(e){const y=t(),x=i(),b=o({isAutoOpenNotice:"",noticeInfo:"",noticeTitle:""});async function v(){const e=await g.queryConfig({keys:["noticeInfo","noticeTitle","isAutoOpenNotice"]}),{noticeInfo:t,noticeTitle:i,isAutoOpenNotice:o}=e.data;t&&Object.assign(b,{noticeInfo:t,noticeTitle:i,isAutoOpenNotice:o})}async function h(){if(0==y.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");if(null!=b.noticeInfo){try{await g.setConfig({settings:(e=b,Object.keys(e).map((t=>({configKey:t,configVal:e[t]}))))}),m.success("变更配置信息成功")}catch(t){}var e;v()}else m.error("请填写公告具体信息")}return a((()=>x.settings.app.colorScheme)),n({noticeInfo:[{required:!0,trigger:"blur",message:"请填写公告具体信息"}]}),n(),n("/api/file/upload"),s((()=>{v()})),(e,t)=>{const i=l("el-alert"),o=l("el-input"),a=l("el-switch"),n=l("el-button");return c(),r("div",null,[p("div",A,[u(i,{closable:!1,"show-icon":"",title:"公告设置说明",description:"这里的公告设置是对应用户端的公告页面的、你可以使用MD语法或直接使用Html标签进行发布、您也可以直接粘贴上传图片、作为图床使用、其他地方比如上传商品等地方的图片也可以暂时在此作为临时方案。",type:"warning"})]),p("div",null,[I,u(o,{style:{width:"100%",height:"55vh"},type:"textarea",modelValue:b.noticeInfo,"onUpdate:modelValue":t[0]||(t[0]=e=>b.noticeInfo=e),placeholder:"请输入公告内容",clearable:""},null,8,["modelValue"])]),p("div",null,[p("div",O,[V,u(a,{modelValue:b.isAutoOpenNotice,"onUpdate:modelValue":t[1]||(t[1]=e=>b.isAutoOpenNotice=e),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),u(n,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:h},{default:d((()=>[f("保存设置 ")])),_:1})])])}}});"function"==typeof v&&v(w);const F=b(w,[["__scopeId","data-v-1f76abeb"]]);export{F as default};
