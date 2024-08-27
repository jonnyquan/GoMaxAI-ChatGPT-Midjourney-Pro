
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,a8 as l,G as a,r as t,x as o,j as d,o as s,c as u,b as i,W as r,X as c,f as n,g as p,h as m,t as v,e as f,J as g,aB as b,O as y,P as _,y as w,_ as h}from"../main-4d5ea9bc.js";import{A as x}from"../aiMusic/aiMusic.e66ff1ff.js";import{a as V}from"./system.9aa95def.js";import k from"./dict.c7d17ce7.js";import"../utcformatTime/utcformatTime.f6db2c52.js";const C={class:"flex items-center justify-between"},I={class:"flex",style:{gap:"10px"}},j={class:"dialog-title"},U={class:"dialog-body"},q=["src"],N={class:"dialog-footer"},R=h(e({__name:"swiperHome",setup(e){const h=l(!1),R=l(!1),S=a({title:"添加推荐",btn:"添加"}),T=t("/api/file/upload"),z=t(),D=t({tagId:0,cover:"",name:"",type:"home",target:"",sort:0,description:""}),M={cover:[{required:!0,message:"请上传封面图",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],tagId:[{required:!0,message:"请选择所属标签",trigger:"blur"}],target:[{required:!0,message:"请输入跳转链接或参数",trigger:"blur"}]},P=l(0),A=a({size:20,page:1}),B=t([]);o((()=>{J(),O()}));const G=l(!1),H=t([]);async function J(){const e=await x.page({dictType:"index-tag",page:1,size:100});H.value=[{id:0,dictName:"全部"}],H.value.push(...e.data.rows)}async function O(){const e=await V.indexRecPage(A);P.value=e.data.count,B.value=e.data.rows}function W(){D.value={},S.title="添加推荐",S.btn="添加",R.value=!0}function X(e){200===e.code?D.value.cover=e.data:_.error(e.message)}return(e,l)=>{const a=d("el-check-tag"),t=d("el-button"),o=d("el-image"),x=d("el-table-column"),P=d("el-tag"),E=d("el-table"),F=w,K=d("el-icon"),L=d("el-upload"),Q=d("el-form-item"),Y=d("el-input"),Z=d("el-option"),$=d("el-select"),ee=d("el-input-number"),le=d("el-form"),ae=d("el-dialog");return s(),u(r,null,[i("div",C,[i("div",I,[(s(!0),u(r,null,c(H.value,(e=>(s(),g(a,{type:"success",checked:f(A).tagId===e.id,onChange:l=>{return a=e.id,delete A.tagId,a>0&&(A.tagId=a),void O();var a}},{default:p((()=>[m(v(e.dictName),1)])),_:2},1032,["checked","onChange"])))),256))]),i("div",null,[n(t,{class:"btn-add",onClick:W},{default:p((()=>[m(" 添加推荐 ")])),_:1}),n(t,{onClick:l[0]||(l[0]=e=>G.value=!0)},{default:p((()=>[m(" 管理标签 ")])),_:1})])]),n(E,{class:"mt-2",data:B.value,border:""},{default:p((()=>[n(x,{prop:"cover",label:"封面图"},{default:p((({row:e})=>[n(o,{style:{width:"100px",height:"100px"},src:e.cover,"preview-src-list":[e.cover],"preview-teleported":!0},null,8,["src","preview-src-list"])])),_:1}),n(x,{prop:"tagId",label:"标签"},{default:p((({row:e})=>[n(P,{type:"info"},{default:p((()=>[m(v(H.value.filter((l=>l.id===e.tagId))[0].dictName),1)])),_:2},1024)])),_:1}),n(x,{prop:"name",label:"名称"}),n(x,{prop:"description",label:"描述"}),n(x,{prop:"target",label:"跳转路径"}),n(x,{prop:"sort",label:"排序ID"}),n(x,{label:"操作"},{default:p((({row:e})=>[n(t,{link:"",type:"primary",onClick:l=>function(e){S.title="修改推荐",S.btn="修改",R.value=!0,D.value=e}(e)},{default:p((()=>[m(" 编辑 ")])),_:2},1032,["onClick"]),n(t,{link:"",onClick:l=>async function(e){await V.indexRecDelete({ids:[e.id]}),_.success("删除成功"),O()}(e)},{default:p((()=>[m(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),n(ae,{modelValue:f(R),"onUpdate:modelValue":l[9]||(l[9]=e=>y(R)?R.value=e:null),width:"600","show-close":!1,"destroy-on-close":""},{header:p((()=>[i("div",j,[i("div",null,v(f(S).title),1),i("div",{style:{cursor:"pointer"},onClick:l[1]||(l[1]=e=>R.value=!1)},[n(K,null,{default:p((()=>[n(F,{name:"close"})])),_:1})])])])),default:p((()=>[i("div",U,[n(le,{ref_key:"formRef",ref:z,"label-width":"140",model:D.value,rules:M},{default:p((()=>[n(Q,{label:"封面图",prop:"cover"},{default:p((()=>[n(L,{class:"cover-uploader",accept:"image/*",action:T.value,"show-file-list":!1,"on-success":X},{default:p((()=>[D.value.cover?(s(),u("img",{key:0,src:D.value.cover,class:"cover",alt:""},null,8,q)):(s(),g(K,{key:1,class:"cover-uploader-icon"},{default:p((()=>[n(f(b))])),_:1}))])),_:1},8,["action"])])),_:1}),n(Q,{label:"名称",prop:"name"},{default:p((()=>[n(Y,{modelValue:D.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>D.value.name=e),style:{width:"300px"}},null,8,["modelValue"])])),_:1}),n(Q,{label:"标签",prop:"tagId"},{default:p((()=>[n($,{modelValue:D.value.tagId,"onUpdate:modelValue":l[3]||(l[3]=e=>D.value.tagId=e),style:{width:"300px"}},{default:p((()=>[(s(!0),u(r,null,c(H.value,(e=>(s(),g(Z,{key:e.id,label:e.dictName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(Q,{label:"跳转链接（参数）",prop:"target"},{default:p((()=>[n(Y,{modelValue:D.value.target,"onUpdate:modelValue":l[4]||(l[4]=e=>D.value.target=e),style:{width:"300px"}},null,8,["modelValue"])])),_:1}),n(Q,{label:"排序",prop:"sort"},{default:p((()=>[n(ee,{modelValue:D.value.sort,"onUpdate:modelValue":l[5]||(l[5]=e=>D.value.sort=e),style:{width:"300px"}},null,8,["modelValue"])])),_:1}),n(Q,{label:"描述",prop:"description"},{default:p((()=>[n(Y,{modelValue:D.value.description,"onUpdate:modelValue":l[6]||(l[6]=e=>D.value.description=e),type:"textarea",style:{width:"300px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])]),i("div",N,[n(t,{bg:"",text:"",class:"dialog-cancel",onClick:l[7]||(l[7]=e=>R.value=!1)},{default:p((()=>[m(" 取消 ")])),_:1}),n(t,{bg:"",text:"",class:"dialog-confirm",type:"primary",loading:f(h),onClick:l[8]||(l[8]=e=>{z.value.validate((async e=>{if(e){h.value=!0;try{await V.indexRecSave(D.value),_.success("操作成功"),R.value=!1,await O()}catch(l){h.value=!1}h.value=!1}}))})},{default:p((()=>[m(v(f(S).btn),1)])),_:1},8,["loading"])])])),_:1},8,["modelValue"]),n(ae,{modelValue:f(G),"onUpdate:modelValue":l[10]||(l[10]=e=>y(G)?G.value=e:null),width:"60%","show-close":!1,"destroy-on-close":""},{default:p((()=>[n(k,{type:"index-tag",style:{padding:"24px"},onSuccess:J})])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-38ebf079"]]);export{R as default};