
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as l,G as t,x as o,j as s,o as r,c as i,f as u,g as d,J as n,b as c,h as p,Q as f,P as m,p as b,k as v,_ as g,q as x}from"../main-2d3d97e8.js";const y=e=>(b("data-v-62357d52"),e=e(),v(),e),h=y((()=>c("div",null," 网站图标 ",-1))),_=["src"],w=y((()=>c("div",{style:{"font-size":"13px",color:"#737897","margin-left":"12px","margin-top":"65px"}},"建议尺寸：64*64像素，支持ico格式",-1))),A=y((()=>c("div",null," 网站LOGO ",-1))),N=["src"],P=y((()=>c("div",null," 机器人头像 ",-1))),k=["src"],V=y((()=>c("div",{style:{"font-size":"13px",color:"#737897","margin-left":"12px","margin-top":"65px"}},"建议尺寸：64*64像素，支持ico格式",-1))),D=y((()=>c("div",null," 用户默认头像 ",-1))),F=["src"],z={style:{"margin-top":"50px"}},I=e({__name:"siteBase",setup(e){const b=a(),v=l("/api/file/upload"),g=t({siteName:"",clientLogoPath:"",clientFavoIconPath:"",siteDescribtion:"",siteKeyword:"",qqNumber:"",vxNumber:"",robotAvatar:"",userDefautlAvatar:"",buyCramiAddress:"",siteRobotName:"",isShowAppCatIcon:""}),x=l({siteName:[{required:!0,trigger:"blur",message:"请填写网站名称"}]}),y=l();async function I(){const e=await f.queryConfig({keys:["siteName","clientLogoPath","clientFavoIconPath","siteDescribtion","siteKeyword","qqNumber","vxNumber","robotAvatar","userDefautlAvatar","buyCramiAddress","siteRobotName","isShowAppCatIcon"]});Object.assign(g,e.data)}function q(){var e;null==(e=y.value)||e.validate((async e=>{if(e){if(0==b.isUserModifyPermissions())return m.error("非超级管理员无权限操作！");try{await f.setConfig({settings:(a=g,Object.keys(a).map((e=>({configKey:e,configVal:a[e]}))))}),m.success("变更配置信息成功")}catch(l){}I()}else m.error("请填写完整信息");var a}))}const C=e=>["image/png","image/jpeg","image/gif","image/webp"].includes(e.type)?e.size/1024>300?(m.error("当前限制文件最大不超过 300KB!"),!1):void 0:(m.error("当前系统仅支持 PNG、JPEG、GIF、和 WebP 格式的图片!"),!1),K=(e,a)=>{g.clientFavoIconPath=e.data},R=(e,a)=>{g.clientLogoPath=e.data},L=(e,a)=>{g.robotAvatar=e.data},j=(e,a)=>{g.userDefautlAvatar=e.data};return o((()=>{I()})),(e,a)=>{const l=s("el-input"),t=s("el-form-item"),o=s("el-col"),f=s("el-row"),m=s("Plus"),b=s("el-icon"),I=s("el-upload"),G=s("el-form"),U=s("el-button");return r(),i("div",null,[u(G,{ref_key:"formRef",ref:y,rules:x.value,model:g,"label-width":"150px","label-position":"top"},{default:d((()=>[u(f,null,{default:d((()=>[u(o,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(t,{label:"网站名称",prop:"siteName"},{default:d((()=>[u(l,{size:"large",modelValue:g.siteName,"onUpdate:modelValue":a[0]||(a[0]=e=>g.siteName=e),placeholder:"请输入网站名称网站名称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(t,null,{default:d((()=>[h,u(I,{class:"avatar-uploader",style:{"margin-left":"33px"},action:v.value,"show-file-list":!1,"on-success":K,"before-upload":C},{default:d((()=>[g.clientFavoIconPath?(r(),i("img",{key:0,src:g.clientFavoIconPath,style:{width:"84px",height:"84px","border-radius":"12px"},class:"avatar"},null,8,_)):(r(),n(b,{key:1,class:"avatar-uploader-icon"},{default:d((()=>[u(m)])),_:1}))])),_:1},8,["action"]),w])),_:1}),u(t,null,{default:d((()=>[A,u(I,{class:"avatar-uploader",action:v.value,"show-file-list":!1,"on-success":R,"before-upload":C},{default:d((()=>[g.clientLogoPath?(r(),i("img",{key:0,src:g.clientLogoPath,style:{width:"84px",height:"84px","border-radius":"12px"},class:"avatar"},null,8,N)):(r(),n(b,{key:1,class:"avatar-uploader-icon"},{default:d((()=>[u(m)])),_:1}))])),_:1},8,["action"])])),_:1}),u(f,null,{default:d((()=>[u(o,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(t,{label:"网站描述",prop:"siteDescribtion"},{default:d((()=>[u(l,{size:"large",modelValue:g.siteDescribtion,"onUpdate:modelValue":a[1]||(a[1]=e=>g.siteDescribtion=e),placeholder:"请输入网站描述",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(f,null,{default:d((()=>[u(o,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(t,{label:"网站关键词",prop:"siteKeyword"},{default:d((()=>[u(l,{size:"large",modelValue:g.siteKeyword,"onUpdate:modelValue":a[2]||(a[2]=e=>g.siteKeyword=e),placeholder:"请输入网站关键词",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(f,null,{default:d((()=>[u(o,{xs:24,md:20,lg:15,xl:8},{default:d((()=>[u(t,{label:"机器人名称",prop:"siteRobotName"},{default:d((()=>[u(l,{size:"large",modelValue:g.siteRobotName,"onUpdate:modelValue":a[3]||(a[3]=e=>g.siteRobotName=e),placeholder:"默认[Ai Robot]、首页默认展示状态下的名称",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(t,{prop:"robotAvatar"},{default:d((()=>[P,u(I,{class:"avatar-uploader",style:{"margin-left":"34px"},action:v.value,"show-file-list":!1,"on-success":L,"before-upload":C},{default:d((()=>[g.robotAvatar?(r(),i("img",{key:0,src:g.robotAvatar,style:{width:"84px",height:"84px","border-radius":"12px"},class:"avatar"},null,8,k)):(r(),n(b,{key:1,class:"avatar-uploader-icon"},{default:d((()=>[u(m)])),_:1}))])),_:1},8,["action"]),V])),_:1}),u(t,{prop:"userDefautlAvatar"},{default:d((()=>[D,u(I,{class:"avatar-uploader",action:v.value,"show-file-list":!1,"on-success":j,"before-upload":C},{default:d((()=>[g.userDefautlAvatar?(r(),i("img",{key:0,src:g.userDefautlAvatar,style:{width:"84px",height:"84px","border-radius":"12px"},class:"avatar"},null,8,F)):(r(),n(b,{key:1,class:"avatar-uploader-icon"},{default:d((()=>[u(m)])),_:1}))])),_:1},8,["action"])])),_:1})])),_:1},8,["rules","model"]),c("div",z,[u(U,{bg:"",text:"",type:"primary",size:"large",style:{"font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"8px",padding:"8px 100px"},onClick:q},{default:d((()=>[p("保存设置 ")])),_:1})])])}}});"function"==typeof x&&x(I);const q=g(I,[["__scopeId","data-v-62357d52"]]);export{q as default};