
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r as a,F as t,B as o,o as d,l as s,V as r,b as p,e as u,f as i,h as n,n as c,p as m,i as g,Y as f,X as y,g as b,j as v,w as x,J as h,t as w,K as V,O as _,Z as I,Q as A,P as k,x as U,_ as C,q as F}from"../main-46c178e9.js";import{u as z}from"../utcformatTime/utcformatTime.f6db2c52.js";import{b as D}from"../index/index.1baeddf5.js";const N={class:"search_condition"},j={style:{display:"flex","align-items":"center"}},M={style:{"margin-left":"12px"}},P={style:{"margin-left":"12px"}},q={style:{"margin-top":"22px","margin-left":"12px"}},G={style:{"margin-top":"22px"}},S={key:0},B={key:1},T={style:{maxWidth:"350px"}},Y={style:{maxHeight:"50px",cursor:"pointer"}},E={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},K={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},O={style:{display:"flex","align-items":"center","justify-content":"space-between"}},R={style:{display:"flex","align-items":"center","justify-content":"space-between"}},J=["src"],W={style:{display:"flex","align-items":"center","justify-content":"space-between"}},H={style:{display:"flex","align-items":"center","justify-content":"space-between"}},Q={style:{display:"flex","align-items":"center","justify-content":"space-between"}},X={style:{display:"flex","align-items":"center"}},Z={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},L=e({__name:"application",setup(e){const C=l();a();const F=a(0),L=a(!1),$=a(!1),ee=t({modelName:"",groupId:"",status:null,page:1,size:10}),le=a("/api/file/upload"),ae=a(),te=a(0),oe=a(!1),de=a(0),se=t({id:"",groupId:"",modelName:"",modelId:"",sortId:"",desc:"",logo:"",status:0,preset:"",demoData:"",canUpload:!1,gptsApp:!1,recommend:!1,useCount:0,collectCount:0,relModel:""}),re=t({groupId:[{required:!0,message:"请选择App分类",trigger:"change"}],modelName:[{required:!0,message:"请填写App名称",trigger:"blur"}],desc:[{required:!0,message:"请填写App描述",trigger:"blur"}],logo:[{required:!0,message:"请填写App封面图片地址",trigger:"blur"}],demoData:[{required:!0,message:"请填写App演示数据",trigger:"blur"}],sortId:[{required:!0,message:"请填写排序ID",trigger:"blur"}]}),pe=a([]),ue=a([]),ie=o((()=>te.value?"更新应用":"新增应用"));async function ne(){try{$.value=!0;const e=await I.queryApp(ee),{rows:l,count:a}=e.data;$.value=!1,F.value=a,pe.value=l.sort(((e,l)=>l.order-e.order))}catch(e){$.value=!1}}function ce(){te.value=0,se.id="",se.groupId="",se.modelName="",se.modelId="",se.sortId="",se.desc="",se.logo="",se.status=0,se.preset="",se.demoData="",se.canUpload=!1,se.gptsApp=!1,se.recommend=!1,se.useCount=0,se.collectCount=0,se.relModel="",L.value=!0}function me(e){te.value=0,L.value=!1,null==e||e.resetFields()}function ge(){ee.modelName="",ee.groupId="",ee.status=null,ee.page=1,ee.size=10,ne()}o((()=>te.value?"确认更新":"确认新增"));const fe=(e,l)=>{se.logo=e.data},ye=e=>["image/png","image/jpeg","image/gif","image/webp"].includes(e.type)?e.size/1024>300?(k.error("当前限制文件最大不超过 300KB!"),!1):void 0:(k.error("当前系统仅支持 PNG、JPEG、GIF、和 WebP 格式的图片!"),!1);return d((()=>{ne(),async function(){const e=await I.queryCats({size:100}),{rows:l}=e.data;ue.value=l}()})),(e,l)=>{const a=s("el-alert"),t=s("el-input"),o=s("el-option"),d=s("el-select"),be=s("el-button"),ve=s("RefreshRight"),xe=s("el-icon"),he=s("el-table-column"),we=s("el-image"),Ve=s("el-tag"),_e=s("el-tooltip"),Ie=s("el-popconfirm"),Ae=s("el-table"),ke=s("el-pagination"),Ue=s("el-row"),Ce=U,Fe=s("el-form-item"),ze=s("Plus"),De=s("el-upload"),Ne=s("el-switch"),je=s("el-form"),Me=s("el-dialog"),Pe=r("loading");return p(),u("div",null,[i("div",null,[n(a,{closable:!1,"show-icon":"",title:"应用说明",description:"[由于各模型的使用不同、暂时关闭其他模型的应用使用、仅仅支持使用OpenAi的key使用、请配置了openAi的key之后再进行使用、如果没有配置将不能使用此功能、但用户可以自定义选择模型]  ====     应用一旦创建、可能会被多处使用后续将限制删除、请保持良好习惯、规范命名分类、后续尽量变更而不是删除。用户创建的应用我们不允许删除、但是可以做一定的变更和修改、审核通过的应用也将限制用户更改、一旦通过或者拒绝、将不允许再次对其状态进行变更、请知悉！",type:"warning"})]),i("div",N,[i("div",j,[i("div",null,[l[24]||(l[24]=i("div",{class:"search_title"},"应用名称",-1)),i("div",null,[n(t,{modelValue:ee.modelName,"onUpdate:modelValue":l[0]||(l[0]=e=>ee.modelName=e),placeholder:"App名称[模糊搜索]",clearable:"",onKeydown:c(m(ne,["prevent"]),["enter"]),style:{width:"200px"}},null,8,["modelValue","onKeydown"])])]),i("div",M,[l[25]||(l[25]=i("div",{class:"search_title"},"应用分类",-1)),i("div",null,[n(d,{modelValue:ee.groupId,"onUpdate:modelValue":l[1]||(l[1]=e=>ee.groupId=e),placeholder:"请选择App分类",clearable:"",style:{width:"150px"}},{default:g((()=>[(p(!0),u(f,null,y(b(ue),(e=>(p(),h(o,{key:e.id,label:e.groupName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),i("div",P,[l[26]||(l[26]=i("div",{class:"search_title"},"启用状态",-1)),i("div",null,[n(d,{modelValue:ee.status,"onUpdate:modelValue":l[2]||(l[2]=e=>ee.status=e),placeholder:"请选择App状态",clearable:"",style:{width:"150px"}},{default:g((()=>[n(o,{label:"启用",value:1}),n(o,{label:"禁用",value:0})])),_:1},8,["modelValue"])])]),i("div",q,[n(be,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:ne},{default:g((()=>l[27]||(l[27]=[v("查询 ")]))),_:1})]),i("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:ge},[n(xe,{color:"#3B82F6",size:"20"},{default:g((()=>[n(ve)])),_:1})])]),i("div",G,[n(be,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:ce},{default:g((()=>l[28]||(l[28]=[v("添加应用 ")]))),_:1})])]),i("div",null,[x((p(),h(Ae,{border:"",data:b(pe),height:"60vh",style:{width:"100%"}},{default:g((()=>[n(he,{prop:"sortId",label:"排序ID",width:"100"}),n(he,{prop:"logo",label:"图标",width:"100"},{default:g((e=>[n(we,{style:{height:"50px"},src:e.row.logo,fit:"fill"},null,8,["src"])])),_:1}),n(he,{prop:"modelName",label:"名称",width:"150"}),n(he,{prop:"groupName",label:"分类",width:"100"}),n(he,{prop:"",label:"GPTS应用ID/使用模型",width:"200"},{default:g((e=>[1==e.row.gptsApp?(p(),u("div",S,w(null==e.row.modelId?"--":e.row.modelId),1)):(p(),u("div",B,w(null==e.row.relModel?"--":e.row.relModel),1))])),_:1}),n(he,{prop:"status",label:"应用状态",width:"100"},{default:g((e=>[n(Ve,{type:1===e.row.status?"primary":"danger"},{default:g((()=>[v(w(1===e.row.status?"启用":"禁用"),1)])),_:2},1032,["type"])])),_:1}),n(he,{prop:"desc",label:"应用描述"},{default:g((e=>[n(_e,{class:"box-item",effect:"dark",placement:"top-start"},{content:g((()=>[i("div",T,w(e.row.desc),1)])),default:g((()=>[i("div",Y,w(e.row.desc),1)])),_:2},1024)])),_:1}),n(he,{prop:"createdAt",label:"创建时间",width:"120"},{default:g((e=>[v(w(b(z)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),n(he,{label:"操作",width:"120",fixed:"right"},{default:g((e=>[n(be,{link:"",type:"primary",size:"small",onClick:l=>function(e){te.value=e.id,oe.value="user"===e.role,de.value=e.status;const{id:l,groupId:a,modelName:t,modelId:o,sortId:d,desc:s,logo:r,status:p,preset:u,demoData:i,canUpload:n,gptsApp:c,recommend:m,useCount:g,collectCount:f,relModel:y}=e;A((()=>{Object.assign(se,{id:l,groupId:a,modelName:t,modelId:o,sortId:d,desc:s,logo:r,status:p,preset:u,demoData:i,canUpload:n,gptsApp:c,recommend:m,useCount:g,collectCount:f,relModel:y})})),L.value=!0}(e.row)},{default:g((()=>l[29]||(l[29]=[v(" 编辑 ")]))),_:2},1032,["onClick"]),n(Ie,{title:"确认删除此应用么?",width:"200","icon-color":"red",onConfirm:l=>async function(e){if(0==C.isUserModifyPermissions())return k.error("非超级管理员无权限操作！");await I.deleteApp({id:e.id}),k.success("删除应用成功"),ne()}(e.row)},{reference:g((()=>[n(be,{link:"",type:"danger",size:"small"},{default:g((()=>l[30]||(l[30]=[v(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Pe,b($)]]),n(Ue,{class:"flex justify-end mt-5"},{default:g((()=>[n(ke,{"current-page":ee.page,"onUpdate:currentPage":l[3]||(l[3]=e=>ee.page=e),"page-size":ee.size,"onUpdate:pageSize":l[4]||(l[4]=e=>ee.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:b(F),onSizeChange:ne,onCurrentChange:ne},null,8,["current-page","page-size","total"])])),_:1})]),n(Me,{modelValue:b(L),"onUpdate:modelValue":l[23]||(l[23]=e=>_(L)?L.value=e:null),width:"800","show-close":!1,"destroy-on-close":""},{header:g((({close:e,titleId:a,titleClass:t})=>[i("div",E,[i("div",null,w(b(ie)),1),i("div",{onClick:l[5]||(l[5]=e=>me(b(ae))),style:{cursor:"pointer"}},[n(xe,null,{default:g((()=>[n(Ce,{name:"close"})])),_:1})])])])),default:g((()=>[i("div",K,[n(je,{ref_key:"formPackageRef",ref:ae,"label-position":"right","label-width":"110px",model:se,rules:re},{default:g((()=>[i("div",O,[n(Fe,{label:"所属分类",prop:"groupId"},{default:g((()=>[n(d,{size:"large",modelValue:se.groupId,"onUpdate:modelValue":l[6]||(l[6]=e=>se.groupId=e),placeholder:"请选择应用分类",clearable:"",style:{width:"240px"}},{default:g((()=>[(p(!0),u(f,null,y(b(ue),(e=>(p(),h(o,{key:e.id,label:e.groupName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(Fe,{label:"应用名称",prop:"modelName"},{default:g((()=>[n(t,{size:"large",modelValue:se.modelName,"onUpdate:modelValue":l[7]||(l[7]=e=>se.modelName=e),placeholder:"请填写应用名称",style:{width:"240px"}},null,8,["modelValue"])])),_:1})]),i("div",R,[n(Fe,{label:"应用图标",prop:"logo"},{default:g((()=>[n(De,{class:"avatar-uploader",action:b(le),"show-file-list":!1,"on-success":fe,"before-upload":ye},{default:g((()=>[se.logo?(p(),u("img",{key:0,src:se.logo,style:{width:"100px"},class:"avatar"},null,8,J)):(p(),h(xe,{key:1,class:"avatar-uploader-icon"},{default:g((()=>[n(ze)])),_:1}))])),_:1},8,["action"])])),_:1}),n(Fe,{label:"应用描述",prop:"desc"},{default:g((()=>[n(t,{modelValue:se.desc,"onUpdate:modelValue":l[8]||(l[8]=e=>se.desc=e),type:"textarea",placeholder:"请填写App介绍信息、用于场景内置信息...",rows:4,style:{width:"240px"}},null,8,["modelValue"])])),_:1})]),i("div",W,[n(Fe,{label:"排序ID",prop:"sortId"},{default:g((()=>[n(t,{size:"large",modelValue:se.sortId,"onUpdate:modelValue":l[9]||(l[9]=e=>se.sortId=e),modelModifiers:{number:!0},placeholder:"请填写排序ID[数字越大越靠前]",style:{width:"240px"}},null,8,["modelValue"])])),_:1}),n(Fe,{label:"示例提问",prop:"demoData"},{default:g((()=>[n(t,{modelValue:se.demoData,"onUpdate:modelValue":l[10]||(l[10]=e=>se.demoData=e),type:"textarea",placeholder:"请填写App的demo示例数据、每换行一次表示一个新的示例...",rows:4,style:{width:"240px"}},null,8,["modelValue"])])),_:1})]),i("div",H,[n(Fe,{label:"预设热度",prop:"useCount"},{default:g((()=>[n(t,{size:"large",modelValue:se.useCount,"onUpdate:modelValue":l[11]||(l[11]=e=>se.useCount=e),modelModifiers:{number:!0},placeholder:"请填写预设热度",style:{width:"240px"}},null,8,["modelValue"])])),_:1}),n(Fe,{label:"预设收藏",prop:"collectCount"},{default:g((()=>[n(t,{size:"large",modelValue:se.collectCount,"onUpdate:modelValue":l[12]||(l[12]=e=>se.collectCount=e),placeholder:"请填写预设收藏",style:{width:"240px"}},null,8,["modelValue"])])),_:1})]),i("div",Q,[n(Fe,{label:"是否GPTS应用",prop:"gptsApp"},{default:g((()=>[n(Ne,{modelValue:se.gptsApp,"onUpdate:modelValue":l[13]||(l[13]=e=>se.gptsApp=e)},null,8,["modelValue"])])),_:1}),1!=se.gptsApp?(p(),h(Fe,{key:0,label:"使用模型"},{default:g((()=>[n(t,{size:"large",modelValue:se.relModel,"onUpdate:modelValue":l[15]||(l[15]=e=>se.relModel=e),style:{"max-width":"600px",width:"240px"},placeholder:"请选择/输入你要使用的模型",class:"input-with-select"},{suffix:g((()=>[n(d,{modelValue:se.relModel,"onUpdate:modelValue":l[14]||(l[14]=e=>se.relModel=e),placeholder:"Select",style:{width:"30px",border:"none"}},{default:g((()=>[(p(!0),u(f,null,y(b(D),(e=>(p(),h(o,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})):(p(),h(Fe,{key:1,label:"GPTS应用ID",prop:"modelId"},{default:g((()=>[n(t,{modelValue:se.modelId,"onUpdate:modelValue":l[16]||(l[16]=e=>se.modelId=e),placeholder:"请填写GPTS应用ID",style:{width:"240px"}},null,8,["modelValue"])])),_:1}))]),1!=se.gptsApp?(p(),h(Fe,{key:0,label:"应用预设",prop:"preset"},{default:g((()=>[n(t,{size:"large",type:"textarea",modelValue:se.preset,"onUpdate:modelValue":l[17]||(l[17]=e=>se.preset=e),placeholder:"请填写应用预设信息"},null,8,["modelValue"])])),_:1})):V("",!0),i("div",X,[n(Fe,{label:"启用状态",prop:"status"},{default:g((()=>[n(Ne,{modelValue:se.status,"onUpdate:modelValue":l[18]||(l[18]=e=>se.status=e),"active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1}),n(Fe,{label:"启用上传",prop:"canUpload"},{default:g((()=>[n(Ne,{modelValue:se.canUpload,"onUpdate:modelValue":l[19]||(l[19]=e=>se.canUpload=e)},null,8,["modelValue"])])),_:1}),n(Fe,{label:"推荐应用",prop:"recommend"},{default:g((()=>[n(Ne,{modelValue:se.recommend,"onUpdate:modelValue":l[20]||(l[20]=e=>se.recommend=e)},null,8,["modelValue"])])),_:1})])])),_:1},8,["model","rules"])]),i("div",Z,[n(be,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[21]||(l[21]=e=>me(b(ae)))},{default:g((()=>l[31]||(l[31]=[v("取消 ")]))),_:1}),n(be,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:l[22]||(l[22]=e=>{var l;null==(l=b(ae))||l.validate((async e=>{if(e){if(0==C.isUserModifyPermissions())return k.error("非超级管理员无权限操作！");if(te.value){const e={id:te.value,...se};oe.value&&Object.assign(e,{status:de.value}),await I.updateApp(e),k({type:"success",message:"更新应用成功！"})}else delete se.id,await I.createApp(se),k({type:"success",message:"创建应用成功！"});L.value=!1,ne()}}))})},{default:g((()=>l[32]||(l[32]=[v(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])])}}});"function"==typeof F&&F(L);const $=C(L,[["__scopeId","data-v-9c5716d0"]]);export{$ as default};
