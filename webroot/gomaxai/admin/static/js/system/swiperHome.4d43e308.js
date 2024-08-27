
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,a8 as a,G as l,r as t,x as o,j as d,o as s,c as u,b as i,W as r,X as n,f as c,g as p,h as m,t as v,e as g,J as f,aB as y,O as b,P as _,y as w,_ as h}from"../main-043c96ab.js";import{A as x}from"../aiMusic/aiMusic.35c2301d.js";import{a as V}from"./system.d7e90e9b.js";import k from"./dict.4f80ceb0.js";import"../utcformatTime/utcformatTime.f6db2c52.js";const C={class:"flex items-center justify-between"},I={class:"flex",style:{gap:"10px"}},U={class:"dialog-title"},j={class:"dialog-body"},z=["src"],q={class:"dialog-footer"},N="home",R=h(e({__name:"swiperHome",setup(e){const h=a(!1),R=a(!1),T=l({title:"添加推荐",btn:"添加"}),P=t("/api/file/upload"),S=t(),D=t({tagId:0,cover:"",name:"",type:N,target:"",sort:0,description:""}),M={cover:[{required:!0,message:"请上传封面图",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],tagId:[{required:!0,message:"请选择所属标签",trigger:"blur"}],target:[{required:!0,message:"请输入跳转链接或参数",trigger:"blur"}]},A=a(0),B=l({size:20,page:1,type:"home"}),G=t([]);o((()=>{O(),W()}));const H=a(!1),J=t([]);async function O(){const e=await x.page({dictType:"index-tag",page:1,size:100});J.value=[{id:0,dictName:"全部"}],J.value.push(...e.data.rows)}async function W(){const e=await V.indexRecPage(B);A.value=parseInt(e.data.count),G.value=e.data.rows}function X(){D.value={type:N},T.title="添加推荐",T.btn="添加",R.value=!0}function E(e){200===e.code?D.value.cover=e.data:_.error(e.message)}return(e,a)=>{const l=d("el-check-tag"),t=d("el-button"),o=d("el-image"),x=d("el-table-column"),N=d("el-tag"),F=d("el-table"),K=d("el-pagination"),L=w,Q=d("el-icon"),Y=d("el-upload"),Z=d("el-form-item"),$=d("el-input"),ee=d("el-option"),ae=d("el-select"),le=d("el-input-number"),te=d("el-form"),oe=d("el-dialog");return s(),u(r,null,[i("div",C,[i("div",I,[(s(!0),u(r,null,n(J.value,(e=>(s(),f(l,{type:"success",checked:g(B).tagId===e.id,onChange:a=>{return l=e.id,delete B.tagId,l>0&&(B.tagId=l),void W();var l}},{default:p((()=>[m(v(null==e?void 0:e.dictName),1)])),_:2},1032,["checked","onChange"])))),256))]),i("div",null,[c(t,{class:"btn-add",onClick:X},{default:p((()=>[m(" 添加推荐 ")])),_:1}),c(t,{onClick:a[0]||(a[0]=e=>H.value=!0)},{default:p((()=>[m(" 管理标签 ")])),_:1})])]),c(F,{class:"mt-2",data:G.value,border:""},{default:p((()=>[c(x,{prop:"cover",label:"封面图"},{default:p((({row:e})=>[c(o,{style:{width:"100px",height:"100px"},src:e.cover,"preview-src-list":[e.cover],"preview-teleported":!0},null,8,["src","preview-src-list"])])),_:1}),c(x,{prop:"tagId",label:"标签"},{default:p((({row:e})=>[c(N,{type:"info"},{default:p((()=>{var a;return[m(v(null==(a=J.value.filter((a=>a.id===e.tagId))[0])?void 0:a.dictName),1)]})),_:2},1024)])),_:1}),c(x,{prop:"name",label:"名称"}),c(x,{prop:"description",label:"描述"}),c(x,{prop:"target",label:"跳转路径"}),c(x,{prop:"sort",label:"排序ID"}),c(x,{label:"操作"},{default:p((({row:e})=>[c(t,{link:"",type:"primary",onClick:a=>function(e){T.title="修改推荐",T.btn="修改",R.value=!0,D.value=e}(e)},{default:p((()=>[m(" 编辑 ")])),_:2},1032,["onClick"]),c(t,{link:"",onClick:a=>async function(e){await V.indexRecDelete({ids:[e.id]}),_.success("删除成功"),W()}(e)},{default:p((()=>[m(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),c(K,{"page-size":g(B).size,"onUpdate:pageSize":a[1]||(a[1]=e=>g(B).size=e),"current-page":g(B).page,"onUpdate:currentPage":a[2]||(a[2]=e=>g(B).page=e),class:"mt-2 justify-end",background:"",layout:"total, prev, pager, next, sizes",total:g(A),onChange:W},null,8,["page-size","current-page","total"]),c(oe,{modelValue:g(R),"onUpdate:modelValue":a[11]||(a[11]=e=>b(R)?R.value=e:null),width:"600","show-close":!1,"destroy-on-close":""},{header:p((()=>[i("div",U,[i("div",null,v(g(T).title),1),i("div",{style:{cursor:"pointer"},onClick:a[3]||(a[3]=e=>R.value=!1)},[c(Q,null,{default:p((()=>[c(L,{name:"close"})])),_:1})])])])),default:p((()=>[i("div",j,[c(te,{ref_key:"formRef",ref:S,"label-width":"140",model:D.value,rules:M},{default:p((()=>[c(Z,{label:"封面图",prop:"cover"},{default:p((()=>[c(Y,{class:"cover-uploader",accept:"image/*",action:P.value,"show-file-list":!1,"on-success":E},{default:p((()=>[D.value.cover?(s(),u("img",{key:0,src:D.value.cover,class:"cover",alt:""},null,8,z)):(s(),f(Q,{key:1,class:"cover-uploader-icon"},{default:p((()=>[c(g(y))])),_:1}))])),_:1},8,["action"])])),_:1}),c(Z,{label:"名称",prop:"name"},{default:p((()=>[c($,{modelValue:D.value.name,"onUpdate:modelValue":a[4]||(a[4]=e=>D.value.name=e),style:{width:"300px"}},null,8,["modelValue"])])),_:1}),c(Z,{label:"标签",prop:"tagId"},{default:p((()=>[c(ae,{modelValue:D.value.tagId,"onUpdate:modelValue":a[5]||(a[5]=e=>D.value.tagId=e),style:{width:"300px"}},{default:p((()=>[(s(!0),u(r,null,n(J.value,(e=>(s(),f(ee,{key:e.id,label:null==e?void 0:e.dictName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(Z,{label:"跳转链接（参数）",prop:"target"},{default:p((()=>[c($,{modelValue:D.value.target,"onUpdate:modelValue":a[6]||(a[6]=e=>D.value.target=e),style:{width:"300px"}},null,8,["modelValue"])])),_:1}),c(Z,{label:"排序",prop:"sort"},{default:p((()=>[c(le,{modelValue:D.value.sort,"onUpdate:modelValue":a[7]||(a[7]=e=>D.value.sort=e),style:{width:"300px"}},null,8,["modelValue"])])),_:1}),c(Z,{label:"描述",prop:"description"},{default:p((()=>[c($,{modelValue:D.value.description,"onUpdate:modelValue":a[8]||(a[8]=e=>D.value.description=e),type:"textarea",style:{width:"300px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])]),i("div",q,[c(t,{bg:"",text:"",class:"dialog-cancel",onClick:a[9]||(a[9]=e=>R.value=!1)},{default:p((()=>[m(" 取消 ")])),_:1}),c(t,{bg:"",text:"",class:"dialog-confirm",type:"primary",loading:g(h),onClick:a[10]||(a[10]=e=>{S.value.validate((async e=>{if(e){h.value=!0;try{await V.indexRecSave(D.value),_.success("操作成功"),R.value=!1,await W()}catch(a){h.value=!1}h.value=!1}}))})},{default:p((()=>[m(v(g(T).btn),1)])),_:1},8,["loading"])])])),_:1},8,["modelValue"]),c(oe,{modelValue:g(H),"onUpdate:modelValue":a[12]||(a[12]=e=>b(H)?H.value=e:null),width:"60%","show-close":!1,"destroy-on-close":""},{default:p((()=>[c(k,{type:"index-tag",style:{padding:"24px"},onSuccess:O})])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-c24e71c9"]]);export{R as default};
