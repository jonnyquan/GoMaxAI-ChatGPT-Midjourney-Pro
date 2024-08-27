
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.705b6dd2.js";import{d as a,a as l,r as s,G as t,C as o,x as u,j as d,V as n,o as r,c as i,f as c,g as f,e as m,ax as p,m as y,n as w,W as v,X as _,h as b,w as x,J as h,O as V,$ as g,P as k,t as W,q as C}from"../main-4d5ea9bc.js";import{A as j}from"../badWords/badWords.f38c2c22.js";import{q as B}from"../index/index.21f4f4e7.js";const q=a({__name:"custom",setup(a){const C=l(),q=s(),z=s(0),K=s(!1),P=t({word:"",status:"",page:1,size:500}),U=o((()=>C.settings.app.colorScheme)),R=s([]);async function $(){try{K.value=!0;const e=await j.queryBadWords(P),{rows:a,count:l}=e.data;K.value=!1,z.value=l,R.value=a}catch(e){K.value=!1}}u((()=>{$()}));const A=s(""),F=s(!1),G=s();function I(){F.value=!0,g((()=>{G.value.input.focus()}))}async function J(){A.value&&(await j.addBadWords({word:A.value}),k.success("添加敏感词成功"),P.status="",await $()),F.value=!1,A.value=""}return(a,l)=>{const s=d("el-alert"),t=e,o=d("el-form-item"),u=d("el-option"),g=d("el-select"),C=d("el-button"),z=d("el-form"),M=d("el-tag"),N=n("loading");return r(),i("div",null,[c(t,{bottomPadding:"20px"},{default:f((()=>[c(s,{closable:!1,"show-icon":"",title:"敏感词说明",description:"当前为自定义敏感词、触发敏感词将自动拦截、如配置过三方平台、自定义检测将在三方平台通过后最后进行检测！",type:"success"})])),_:1}),c(t,null,{default:f((()=>[c(z,{ref_key:"formRef",ref:q,inline:!0,model:P},{default:f((()=>[c(o,{label:"敏感词",prop:"word"},{default:f((()=>[c(m(p),{modelValue:P.word,"onUpdate:modelValue":l[0]||(l[0]=e=>P.word=e),placeholder:"敏感词[模糊搜索]",onKeydown:y(w($,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])])),_:1}),c(o,{label:"敏感词状态",prop:"status"},{default:f((()=>[c(g,{modelValue:P.status,"onUpdate:modelValue":l[1]||(l[1]=e=>P.status=e),placeholder:"请选择敏感词状态",clearable:"",style:{width:"192px"}},{default:f((()=>[(r(!0),i(v,null,_(m(B),(e=>(r(),h(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(o,null,{default:f((()=>[c(C,{type:"primary",onClick:$},{default:f((()=>[b(" 查询 ")])),_:1}),c(C,{onClick:l[2]||(l[2]=e=>{return null==(a=m(q))||a.resetFields(),void $();var a})},{default:f((()=>[b(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),x((r(),h(t,{style:{width:"100%"},bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[(r(!0),i(v,null,_(m(R),(e=>(r(),h(M,{key:e.id,type:"warning",class:"mr-3 mb-3",closable:"",hit:"",effect:m(U),"disable-transitions":!0,onClose:a=>async function(e){await j.delBadWords({id:e}),k.success("删除敏感词成功"),await $()}(e.id)},{default:f((()=>[b(W(e.word),1)])),_:2},1032,["effect","onClose"])))),128)),m(F)?(r(),h(m(p),{key:0,ref_key:"InputRef",ref:G,modelValue:m(A),"onUpdate:modelValue":l[3]||(l[3]=e=>V(A)?A.value=e:null),class:"ml-1",style:{width:"80px"},size:"small",onKeyup:y(J,["enter"]),onBlur:J},null,8,["modelValue"])):(r(),h(C,{key:1,class:"ml-1",size:"small",onClick:I},{default:f((()=>[b(" + New Word ")])),_:1}))])),_:1})),[[N,m(K)]])])}}});"function"==typeof C&&C(q);export{q as default};
