
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{z as e,d as a,i as s,l as o,u as l,a as t,A as d,B as r,C as i,D as n,x as u,E as p,F as m,r as g,G as w,j as c,o as b,c as f,b as v,f as x,H as y,e as h,I as P,J as k,K as j,g as _,T as M,w as C,v as F,L as V,M as S,N as z,h as D,O as N,P as A,y as I,p as L,k as B,_ as H}from"../main-7fe883cc.js";import{_ as T}from"../index/index.6d0f2f0c.js";import U from"../views/link.0b6a34e7.js";import q from"../Header/index.eedf9318.js";import E from"../MainSidebar/index.f5ed236d.js";import R from"../SubSidebar/index.6a421f65.js";import $ from"../Topbar/index.8ff71c1b.js";import G from"../Search/index.db62df1b.js";import J from"../HotkeysIntro/index.cb18858f.js";import K from"../AppSetting/index.5dcaac31.js";import{u as O}from"../useMenu/useMenu.f0d1de08.js";import"../index/index.94f3c65d.js";import"../Logo/index.d68207eb.js";import"../Tools/index.412e546b.js";import"../index/index.340ffc18.js";import"../SidebarItem/index.9b81ddf8.js";const W={class:"layout"},X={id:"app-main"},Y={class:"wrapper"},Z={class:"main"},Q={key:0},ee={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},ae=(e=>(L("data-v-228599c5"),e=e(),B(),e))((()=>v("div",null," 修改密码 ",-1))),se={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},oe={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},le=a({name:"Layout"}),te=H(a({...le,setup(a){const L=s(),B=o(),H=l(),le=t(),te=d(),de=r(),re=i((()=>H.getModifyPasswordDialog())),ie=i((()=>!!L.meta.link));n((()=>le.settings.menu.subMenuCollapse),(e=>{"mobile"===le.mode&&(e?document.body.classList.remove("overflow-hidden"):document.body.classList.add("overflow-hidden"))})),n((()=>L.path),(()=>{"mobile"===le.mode&&le.$patch((e=>{e.settings.menu.subMenuCollapse=!0}))})),u((()=>{p("f5",(a=>{le.settings.toolbar.enablePageReload&&(a.preventDefault(),e.push({name:"reload"}))})),p("alt+`",(e=>{le.settings.menu.enableHotkeys&&(e.preventDefault(),O().switchTo(de.actived+1<de.allMenus.length?de.actived+1:0))}))})),m((()=>{p.unbind("f5"),p.unbind("alt+`")}));const ne=g(),ue=g({oldPassword:"",newPassword:"",repeatNewPassword:""}),pe=w({oldPassword:[{required:!0,message:"原密码不能为空",trigger:"blur"},{min:6,message:"长度不能少于6位",trigger:"blur"}],newPassword:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,message:"长度不能少于6位",trigger:"blur"}],repeatNewPassword:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,message:"长度不能少于6位",trigger:"blur"}]});function me(){ne.value.validate((async e=>{var a,s,o,l;if(!e)return;if((null==(a=ue.value)?void 0:a.newPassword)!=(null==(s=ue.value)?void 0:s.repeatNewPassword))return void A.error("两次输入的密码不一致");const t=await H.editPassword({password:null==(o=ue.value)?void 0:o.newPassword,oldPassword:null==(l=ue.value)?void 0:l.oldPassword});200==t.code?(A.success(t.data),H.updateModifyPasswordDialog(!1),H.logout().then((()=>{B.push({name:"login"})}))):A.error(t.data)}))}return(e,a)=>{const s=c("router-view"),o=T,l=c("el-backtop"),t=I,d=c("el-icon"),r=c("el-input"),i=c("el-form-item"),n=c("el-form"),u=c("el-button"),p=c("el-dialog");return b(),f("div",W,[v("div",X,[x(q),v("div",Y,[v("div",{class:y(["sidebar-container",{show:"mobile"===h(le).mode&&!h(le).settings.menu.subMenuCollapse}])},[x(E),x(R)],2),v("div",{class:y(["sidebar-mask",{show:"mobile"===h(le).mode&&!h(le).settings.menu.subMenuCollapse}]),onClick:a[0]||(a[0]=e=>h(le).toggleSidebarCollapse())},null,2),v("div",{class:"main-container",style:P({"padding-bottom":e.$route.meta.paddingBottom})},["head"!==h(le).settings.menu.menuMode||h(le).settings.menu.enableSubMenuCollapseButton||h(le).settings.breadcrumb.enable?(b(),k($,{key:0})):j("",!0),v("div",Z,[x(s,null,{default:_((({Component:e,route:a})=>[x(M,{name:"main",mode:"out-in",appear:""},{default:_((()=>[(b(),k(S,{include:h(te).list},[C((b(),k(V(e),{key:a.fullPath})),[[F,!h(ie)]])],1032,["include"]))])),_:2},1024)])),_:1}),h(ie)?(b(),k(U,{key:0})):j("",!0)]),x(o)],4)]),x(l,{right:20,bottom:20,title:"回到顶部"})]),x(G),x(J),h(le).settings.app.enableAppSetting?(b(),f("div",Q,[x(d,{class:"app-setting",onClick:a[1]||(a[1]=e=>h(z).emit("global-app-setting-toggle"))},{default:_((()=>[x(t,{name:"ep:setting"})])),_:1}),x(K)])):j("",!0),x(p,{modelValue:h(re),"onUpdate:modelValue":a[7]||(a[7]=e=>N(re)?re.value=e:null),width:"400","show-close":!1,"destroy-on-close":""},{header:_((({close:e,titleId:s,titleClass:o})=>[v("div",ee,[ae,v("div",{onClick:a[2]||(a[2]=e=>h(H).updateModifyPasswordDialog(!1)),style:{cursor:"pointer"}},[x(d,null,{default:_((()=>[x(t,{name:"close"})])),_:1})])])])),default:_((()=>[v("div",se,[x(n,{ref_key:"modifyPasswordFormRef",ref:ne,rules:h(pe),model:h(ue),"label-width":"auto",style:{"max-width":"400px"}},{default:_((()=>[x(i,{label:"原密码",prop:"oldPassword",size:"large"},{default:_((()=>[x(r,{size:"large",placeholder:"请输入原密码",modelValue:h(ue).oldPassword,"onUpdate:modelValue":a[3]||(a[3]=e=>h(ue).oldPassword=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1}),x(i,{label:"新密码",prop:"newPassword",size:"large"},{default:_((()=>[x(r,{size:"large",placeholder:"请输入新密码",modelValue:h(ue).newPassword,"onUpdate:modelValue":a[4]||(a[4]=e=>h(ue).newPassword=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1}),x(i,{label:"重复新密码",prop:"repeatNewPassword",size:"large"},{default:_((()=>[x(r,{size:"large",placeholder:"请重复输入新密码",modelValue:h(ue).repeatNewPassword,"onUpdate:modelValue":a[5]||(a[5]=e=>h(ue).repeatNewPassword=e),type:"password","show-password":""},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])]),v("div",oe,[x(u,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[6]||(a[6]=e=>h(H).updateModifyPasswordDialog(!1))},{default:_((()=>[D("取消 ")])),_:1}),x(u,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:me},{default:_((()=>[D(" 确定 ")])),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-228599c5"]]);export{te as default};
