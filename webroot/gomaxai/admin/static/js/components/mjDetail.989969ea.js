
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{A as e}from"../mj/mj.1531a3c1.js";import{d as a,r as n,G as t,j as l,V as s,o as i,J as d,g as o,b as u,f as r,h as c,t as p,w as m,e as g,c as v,W as f,X as h,K as y,O as b,p as I,k as _,_ as w}from"../main-043c96ab.js";const j=e=>(I("data-v-30e4b1f9"),e=e(),_(),e),x={style:{height:"auto","overflow-y":"auto","overflow-x":"hidden"}},k=j((()=>u("div",{class:"card-header"},[u("span",null,"账号信息")],-1))),T=j((()=>u("div",{class:"card-header"},[u("span",null,"设置")],-1))),D={class:"setting-content"},O={class:"setting-content-line1"},V={class:"setting-content-line2"},z={style:{"margin-right":"2px"}},A=w(a({__name:"mjDetail",emits:["fresh"],setup(a,{expose:I,emit:_}){const w=n(!1),j=n(!1),A=n(""),J=n(0),P=t({id:0,setting:{},account:"",channelId:"",guildId:"",authorization:"",applicationId:"",version:"",sessionId:"",usedTime:"",totalTime:"",fastRemainTime:"",relaxRemainTime:"",renewDate:"",orderPlan:0,createdAt:"",updatedAt:"",type:1,enable:1,concurrency:3,timeout:5,awaitQueue:10,remark:""});const R=async a=>await e.getMjParamById(a).then((e=>e.data));return I({open:function(e){j.value=!0,J.value=e||0,A.value="查看详情",P.id=e,e&&e>0&&R({id:e}).then((e=>{const a=JSON.parse(e.setting);Object.assign(P,{...e,setting:e.setting?a:{}})}))}}),(a,n)=>{const t=l("el-col"),I=l("el-row"),_=l("el-card"),J=l("el-button"),S=l("el-dialog"),C=s("loading");return i(),d(S,{modelValue:g(j),"onUpdate:modelValue":n[0]||(n[0]=e=>b(j)?j.value=e:null),"append-to-body":!0,"close-on-click-modal":!1,title:g(A),top:"80px",fullscreen:!1,width:"1200px","z-index":2e3},{default:o((()=>[u("div",x,[u("div",null,[r(_,{class:"box-card",shadow:"never"},{header:o((()=>[k])),default:o((()=>[r(I,{gutter:20},{default:o((()=>[r(t,{span:12},{default:o((()=>[u("p",null,[c("账户名: "),u("span",null,p(P.account),1)]),u("p",null,[c("频道ID: "),u("span",null,p(P.channelId),1)]),u("p",null,[c("服务器ID: "),u("span",null,p(P.guildId),1)]),u("p",null,[c("授权令牌: "),u("span",null,p(P.authorization),1)])])),_:1}),r(t,{span:12},{default:o((()=>[u("p",null,[c("状态: "),u("span",null,p(1===P.enable?"启用":"停用"),1)]),u("p",null,[c("出图模式: "),u("span",null,p(1===P.type?"快速":2===P.type?"休闲":3===P.type?"Turbo":""),1)]),u("p",null,[c("快速时间剩余: "),u("span",null,p(P.fastRemainTime),1)]),u("p",null,[c("订阅计划: "),u("span",null,p(1===P.orderPlan?"标准":"其他"),1)]),u("p",null,[c("续订时间: "),u("span",null,p(P.renewDate),1)])])),_:1})])),_:1})])),_:1}),"{}"!==P.setting?(i(),d(_,{key:0,class:"box-card",shadow:"never"},{header:o((()=>[T])),default:o((()=>{var a;return[m((i(),v("div",D,[(i(!0),v(f,null,h(null==(a=P.setting)?void 0:a.components,(a=>(i(),v("div",O,[(i(!0),v(f,null,h(a.components,(a=>{return i(),v("div",V,[r(J,{style:{margin:"4px"},type:(n=a.style,1===n?"primary":3===n?"success":4===n?"danger":"info"),onClick:n=>{var t,l;return(async a=>{w.value=!0;const n=P.id;await e.updateMjSetting({...a,mode:P.type,accountId:n}).then((e=>{R({id:n}).then((e=>{const a=JSON.parse(e.setting);Object.assign(P,{...e,setting:e.setting?a:{}})}))})),w.value=!1})({messageId:null==(t=null==P?void 0:P.setting)?void 0:t.id,customId:null==a?void 0:a.custom_id,flags:null==(l=null==P?void 0:P.setting)?void 0:l.flags})}},{default:o((()=>{var e;return[u("span",z,p(null==(e=a.emoji)?void 0:e.name),1),c(p(a.label),1)]})),_:2},1032,["type","onClick"])]);var n})),256))])))),256))])),[[C,g(w)]])]})),_:1})):y("",!0)])])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-30e4b1f9"]]);export{A as default};
