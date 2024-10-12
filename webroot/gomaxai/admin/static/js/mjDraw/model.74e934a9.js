
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.1b608cdf.js";import{d as l,G as a,r as o,F as t,o as d,l as r,V as i,b as s,e as n,f as u,h as p,g as c,i as m,Y as g,X as f,j as v,w as y,J as b,O as x,P as h,x as _,_ as w}from"../main-46c178e9.js";import{A as k}from"../mj/mj.5884f3e3.js";const V={class:"dialogue_model_box"},F={class:"search_condition"},z={style:{display:"flex","align-items":"center"}},C={style:{"margin-left":"20px"}},U={style:{"margin-left":"20px"}},j={style:{"margin-left":"20px"}},A={style:{"margin-top":"22px","margin-left":"12px"}},N={style:{"margin-top":"12px"}},B={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},E={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},O={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},R=w(l({__name:"model",setup(l){const w=a(!1),R=a(!1),T=o(),q=o({}),M=o([]),P=a(0),S=t({keyword:"",type:"",version:"",style:"",page:1,size:10,disabled:0}),W=o({name:"",cover:"",description:"",disabled:1}),I=t({name:[{required:!0,message:"请输入模型名称",trigger:"blur"}],cover:[{required:!0,message:"请上传模型封面",trigger:"blur"}],description:[{required:!0,message:"请输入模型描述",trigger:"blur"}]});function L(){S.keyword="",S.type="",S.version="",S.style="",S.disabled=0,X()}function X(){S.page=1,G()}async function D(){await k.saveWorkflowModel(W.value),h.success("修改成功"),w.value=!1}async function G(){R.value=!0;const{data:e}=await k.getWorkflowModels(S);M.value=e.rows,P.value=e.count,R.value=!1}function H(e){W.value.cover=e.data}return d((()=>{G(),async function(){const{data:e}=await k.getWorkflowDicts({});q.value=e}()})),(l,a)=>{const o=r("el-input"),t=r("el-option"),d=r("el-select"),h=r("el-button"),k=r("RefreshRight"),J=r("el-icon"),K=r("el-image"),Y=r("el-table-column"),$=r("el-tag"),Q=r("el-table"),Z=r("el-pagination"),ee=r("el-row"),le=_,ae=r("el-form-item"),oe=e,te=r("el-switch"),de=r("el-form"),re=r("el-dialog"),ie=i("loading");return s(),n("div",V,[u("div",F,[u("div",z,[u("div",null,[a[13]||(a[13]=u("div",{class:"search_title"}," 模型关键字 ",-1)),u("div",null,[p(o,{modelValue:c(S).keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>c(S).keyword=e),placeholder:"请输入模型模型关键字",style:{width:"150px"}},null,8,["modelValue"])])]),u("div",C,[a[14]||(a[14]=u("div",{class:"search_title"}," 模型类型 ",-1)),u("div",null,[p(d,{modelValue:c(S).type,"onUpdate:modelValue":a[1]||(a[1]=e=>c(S).type=e),placeholder:"请选择模型类型",style:{width:"150px"}},{default:m((()=>[p(t,{label:"大模型（CHECKPOINT）",value:"1"}),p(t,{label:"-lora模型（LORA）",value:"2"})])),_:1},8,["modelValue"])])]),u("div",U,[a[15]||(a[15]=u("div",{class:"search_title"}," 模型版本 ",-1)),u("div",null,[p(d,{modelValue:c(S).version,"onUpdate:modelValue":a[2]||(a[2]=e=>c(S).version=e),placeholder:"请选择模型版本",style:{width:"150px"}},{default:m((()=>[p(t,{label:"1.5",value:"1"}),p(t,{label:"XL",value:"2"})])),_:1},8,["modelValue"])])]),u("div",j,[a[16]||(a[16]=u("div",{class:"search_title"}," 风格画风 ",-1)),u("div",null,[p(d,{modelValue:c(S).style,"onUpdate:modelValue":a[3]||(a[3]=e=>c(S).style=e),placeholder:"请选择模型风格画风",style:{width:"150px"}},{default:m((()=>[(s(!0),n(g,null,f(c(q).style,(e=>(s(),b(t,{key:e.id,label:e.dictName,value:e.dictValue},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),u("div",A,[p(h,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:X},{default:m((()=>a[17]||(a[17]=[v(" 查询 ")]))),_:1})]),u("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:L},[p(J,{color:"#3B82F6",size:"20"},{default:m((()=>[p(k)])),_:1})])])]),u("div",N,[y((s(),b(Q,{border:"",data:c(M),style:{"font-size":"13px",width:"100%"},"max-height":"75vh"},{default:m((()=>[p(Y,{prop:"cover",label:"封面地址"},{default:m((({row:e})=>[p(K,{src:e.cover,style:{width:"80px",height:"80px"}},null,8,["src"])])),_:1}),p(Y,{prop:"name",label:"模型名称"}),p(Y,{prop:"styleName",label:"风格画风"}),p(Y,{prop:"effectCategoryName",label:"作用类别"}),p(Y,{prop:"effectMainBodyName",label:"作用主体"}),p(Y,{prop:"version",label:"模型版本"}),p(Y,{prop:"description",label:"模型描述",width:"300"}),p(Y,{prop:"disabled",label:"是否禁用",width:"100"},{default:m((({row:e})=>[0===e.disabled?(s(),b($,{key:0,type:"success"},{default:m((()=>a[18]||(a[18]=[v(" 启用 ")]))),_:1})):(s(),b($,{key:1,type:"danger"},{default:m((()=>a[19]||(a[19]=[v(" 禁用 ")]))),_:1}))])),_:1}),p(Y,{label:"操作",fixed:"right",width:"160"},{default:m((e=>[p(h,{style:{border:"none",color:"#3B82F6","font-size":"13px","background-color":"transparent"},onClick:l=>{return a=e.row,W.value=a,void(w.value=!0);var a}},{default:m((()=>a[20]||(a[20]=[v(" 编辑 ")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[ie,c(R)]]),p(ee,{class:"flex justify-end mt-5"},{default:m((()=>[p(Z,{"current-page":c(S).page,"onUpdate:currentPage":a[4]||(a[4]=e=>c(S).page=e),"page-size":c(S).size,"onUpdate:pageSize":a[5]||(a[5]=e=>c(S).size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:c(P),onSizeChange:G,onCurrentChange:G},null,8,["current-page","page-size","total"])])),_:1})]),p(re,{modelValue:c(w),"onUpdate:modelValue":a[12]||(a[12]=e=>x(w)?w.value=e:null),width:"750","show-close":!1,"destroy-on-close":""},{header:m((()=>[u("div",B,[a[21]||(a[21]=u("div",null," 修改模型 ",-1)),u("div",{style:{cursor:"pointer"},onClick:a[6]||(a[6]=e=>w.value=!1)},[p(J,null,{default:m((()=>[p(le,{name:"close"})])),_:1})])])])),default:m((()=>[u("div",E,[p(de,{ref_key:"formRef",ref:T,rules:c(I),model:c(W),"label-width":"auto",style:{"max-width":"750px"}},{default:m((()=>[p(ae,{label:"模型名称",prop:"keyType"},{default:m((()=>[p(o,{modelValue:c(W).name,"onUpdate:modelValue":a[7]||(a[7]=e=>c(W).name=e),size:"large",placeholder:"请输入模型名称"},null,8,["modelValue"])])),_:1}),p(ae,{label:"模型封面",prop:"cover"},{default:m((()=>[p(oe,{url:c(W).cover,"onUpdate:url":a[8]||(a[8]=e=>c(W).cover=e),action:"/api/file/upload",notip:!0,onOnSuccess:H},null,8,["url"])])),_:1}),p(ae,{label:"模型描述",prop:"keyType"},{default:m((()=>[p(o,{modelValue:c(W).description,"onUpdate:modelValue":a[9]||(a[9]=e=>c(W).description=e),type:"textarea",size:"large",placeholder:"请输入模型描述"},null,8,["modelValue"])])),_:1}),p(ae,{label:"模型描述",prop:"keyType"},{default:m((()=>[p(te,{modelValue:c(W).disabled,"onUpdate:modelValue":a[10]||(a[10]=e=>c(W).disabled=e),"active-value":0,"inactive-value":1},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])]),u("div",O,[p(h,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[11]||(a[11]=e=>w.value=!1)},{default:m((()=>a[22]||(a[22]=[v(" 取消 ")]))),_:1}),p(h,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:D},{default:m((()=>a[23]||(a[23]=[v(" 确定修改 ")]))),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-d29b2e05"]]);export{R as default};
