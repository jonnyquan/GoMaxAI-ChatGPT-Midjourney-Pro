
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,G as t,r as l,x as o,j as s,o as n,c as r,b as i,f as d,g as u,h as m,Q as p,P as f,p as c,k as g,_ as x,q as b}from"../main-2d3d97e8.js";const y=(e=>(c("data-v-e37c80ab"),e=e(),g(),e))((()=>i("div",{style:{color:"#20295A","font-size":"15px","font-weight":"bold","margin-top":"32px","margin-bottom":"10px"}}," 思维导图设置 ",-1))),_={style:{"margin-top":"16px"}},v=e({__name:"mind",setup(e){const c=a(),g=t({mindDefaultData:"",mindCustomPrompt:""}),x=l({}),b=l();async function v(){const e=await p.queryConfig({keys:["mindDefaultData","mindCustomPrompt"]});Object.assign(g,e.data)}function w(){var e;null==(e=b.value)||e.validate((async e=>{if(e){if(0==c.isUserModifyPermissions())return f.error("非超级管理员无权限操作！");try{await p.setConfig({settings:(a=g,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),f.success("变更配置信息成功")}catch(t){}v()}else f.error("请填写完整信息");var a}))}return o((()=>{v()})),(e,a)=>{const t=s("el-alert"),l=s("el-input"),o=s("el-form-item"),p=s("el-col"),f=s("el-row"),c=s("el-form"),v=s("el-button");return n(),r("div",null,[i("div",null,[d(t,{closable:!1,"show-icon":"",title:"系统基础设置配置说明",description:"默认配置数据会在页面加载后初次展示给用户、预设信息系统有内置提示词、如果您想覆盖掉他、则在此处设置您的专属提示词！",type:"warning"})]),y,i("div",null,[d(c,{ref_key:"formRef",ref:b,rules:x.value,model:g,"label-width":"150px","label-position":"top"},{default:u((()=>[d(f,null,{default:u((()=>[d(p,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[d(o,{label:"思维导图默认数据",prop:"mindDefaultData"},{default:u((()=>[d(l,{modelValue:g.mindDefaultData,"onUpdate:modelValue":a[0]||(a[0]=e=>g.mindDefaultData=e),type:"textarea",rows:10,placeholder:"思维导图的默认展示数据Markdown格式",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(f,null,{default:u((()=>[d(p,{xs:24,md:20,lg:15,xl:12},{default:u((()=>[d(o,{label:"导图自定义提示词",prop:"mindCustomPrompt"},{default:u((()=>[d(l,{modelValue:g.mindCustomPrompt,"onUpdate:modelValue":a[1]||(a[1]=e=>g.mindCustomPrompt=e),type:"textarea",rows:10,placeholder:"自定义提示词、系统有默认提示词、如果您想覆盖 、请在此处自定义",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])]),i("div",_,[d(v,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:w},{default:u((()=>[m("保存设置")])),_:1})])])}}});"function"==typeof b&&b(v);const w=x(v,[["__scopeId","data-v-e37c80ab"]]);export{w as default};
