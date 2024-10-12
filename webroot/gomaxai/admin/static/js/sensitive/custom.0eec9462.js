
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.c1d0f7a6.js";import{d as a,a as l,r as s,F as t,B as o,o as u,l as d,V as n,b as r,e as i,h as c,i as f,g as m,aB as p,n as y,p as w,Y as v,X as b,j as _,w as h,J as x,O as V,Q as g,P as k,t as B,q as W}from"../main-fe71c3b2.js";import{A as j}from"../badWords/badWords.7968c7af.js";import{o as C}from"../index/index.1baeddf5.js";const z=a({__name:"custom",setup(a){const W=l(),z=s(),K=s(0),P=s(!1),U=t({word:"",status:"",page:1,size:500}),q=o((()=>W.settings.app.colorScheme)),F=s([]);async function R(){try{P.value=!0;const e=await j.queryBadWords(U),{rows:a,count:l}=e.data;P.value=!1,K.value=l,F.value=a}catch(e){P.value=!1}}u((()=>{R()}));const A=s(""),I=s(!1),J=s();function M(){I.value=!0,g((()=>{J.value.input.focus()}))}async function N(){A.value&&(await j.addBadWords({word:A.value}),k.success("添加敏感词成功"),U.status="",await R()),I.value=!1,A.value=""}return(a,l)=>{const s=d("el-alert"),t=e,o=d("el-form-item"),u=d("el-option"),g=d("el-select"),W=d("el-button"),K=d("el-form"),O=d("el-tag"),Q=n("loading");return r(),i("div",null,[c(t,{bottomPadding:"20px"},{default:f((()=>[c(s,{closable:!1,"show-icon":"",title:"敏感词说明",description:"当前为自定义敏感词、触发敏感词将自动拦截、如配置过三方平台、自定义检测将在三方平台通过后最后进行检测！",type:"success"})])),_:1}),c(t,null,{default:f((()=>[c(K,{ref_key:"formRef",ref:z,inline:!0,model:U},{default:f((()=>[c(o,{label:"敏感词",prop:"word"},{default:f((()=>[c(m(p),{modelValue:U.word,"onUpdate:modelValue":l[0]||(l[0]=e=>U.word=e),placeholder:"敏感词[模糊搜索]",onKeydown:y(w(R,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])),_:1}),c(o,{label:"敏感词状态",prop:"status"},{default:f((()=>[c(g,{modelValue:U.status,"onUpdate:modelValue":l[1]||(l[1]=e=>U.status=e),placeholder:"请选择敏感词状态",clearable:"",style:{width:"192px"}},{default:f((()=>[(r(!0),i(v,null,b(m(C),(e=>(r(),x(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(o,null,{default:f((()=>[c(W,{type:"primary",onClick:R},{default:f((()=>l[4]||(l[4]=[_(" 查询 ")]))),_:1}),c(W,{onClick:l[2]||(l[2]=e=>{return null==(a=m(z))||a.resetFields(),void R();var a})},{default:f((()=>l[5]||(l[5]=[_(" 重置 ")]))),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),h((r(),x(t,{style:{width:"100%"},bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[(r(!0),i(v,null,b(m(F),(e=>(r(),x(O,{key:e.id,type:"warning",class:"mr-3 mb-3",closable:"",hit:"",effect:m(q),"disable-transitions":!0,onClose:a=>async function(e){await j.delBadWords({id:e}),k.success("删除敏感词成功"),await R()}(e.id)},{default:f((()=>[_(B(e.word),1)])),_:2},1032,["effect","onClose"])))),128)),m(I)?(r(),x(m(p),{key:0,ref_key:"InputRef",ref:J,modelValue:m(A),"onUpdate:modelValue":l[3]||(l[3]=e=>V(A)?A.value=e:null),class:"ml-1",style:{width:"80px"},size:"small",onKeyup:y(N,["enter"]),onBlur:N},null,8,["modelValue"])):(r(),x(W,{key:1,class:"ml-1",size:"small",onClick:M},{default:f((()=>l[6]||(l[6]=[_(" + New Word ")]))),_:1}))])),_:1})),[[Q,m(P)]])])}}});"function"==typeof W&&W(z);export{z as default};
