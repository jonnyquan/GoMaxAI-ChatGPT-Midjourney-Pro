
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{r as e,$ as l,d as a,G as o,C as t,x as d,j as u,V as s,o as r,c as n,f as i,g as p,W as c,X as m,e as f,h as g,b as v,w as h,J as y,t as _,O as b,ac as k,P as V,ab as w,aa as x,y as C,p as I,k as U,K as T,_ as M,q as z}from"../main-4d5ea9bc.js";import{_ as N}from"../index/index.705b6dd2.js";import{A as P}from"./gpts.9203e932.js";import{u as G}from"../utcformatTime/utcformatTime.f6db2c52.js";import{Q as j,b as q}from"../index/index.21f4f4e7.js";import{a as A}from"../system/system.9aa95def.js";const S=e=>(I("data-v-07e33fc8"),e=e(),U(),e),D={style:{float:"right"}},B={key:0,style:{height:"70vh",width:"100%"}},R={key:1,style:{height:"68vh","overflow-y":"auto","overflow-x":"hidden"}},E=["onClick"],F={class:"flex-1"},Y={class:"left-text"},H={class:"model-name"},L={class:"flex items-center"},$={class:"line-clamp-2"},K={class:"gpt-image"},O={class:"download-svg"},Q={key:0,class:"checked"},J={class:"rotate"},W=S((()=>v("div",{style:{width:"250px"}}," 当前应用会使用当前模型类型下关联模型可用模型key，目前仅仅支持通用模型类型 ",-1))),X=["src"],Z=S((()=>v("div",{style:{width:"250px"}}," 推荐应用,前端将会推荐显示 ",-1))),ee=S((()=>v("div",{style:{width:"250px"}}," 启用上传,前端将具备上传文件的操作，请注意模型模型支持的情况启用才有效 ",-1))),le=S((()=>v("div",{style:{width:"250px"}}," 应用启用状态、一旦锁定当前key将停止工作！ ",-1))),ae={class:"flex justify-end mr-5"},oe=a({__name:"model",setup(a){const{scrollToBottomIfAtBottom:I}=function(){const a=e(null);return{scrollRef:a,scrollToBottom:async()=>{await l(),a.value&&(a.value.scrollTop=a.value.scrollHeight)},scrollToTop:async()=>{await l(),a.value&&(a.value.scrollTop=0)},scrollToBottomIfAtBottom:async()=>{if(await l(),a.value){const e=150;a.value.scrollHeight-a.value.scrollTop-a.value.clientHeight<=e&&(a.value.scrollTop=a.value.scrollHeight)}}}}(),U=e(),M=e(),z=e(0),S=e(!1),oe=e(!1),te=e(!1),de=e(!1),ue=o({modelName:"",status:null,back:1,page:1,size:20}),se=o({title:"发现GPT"}),re=e(),ne=e(0),ie=e([]),pe=o({sortId:1,groupId:"",modelId:"",modelName:"",desc:"",logo:"",demoData:"",status:!0,isDraw:!1,canAudio:!1,canUpload:!1,gptsApp:!1,recommend:!1,useCount:0,collectCount:0,remark:"",relModel:""}),ce=e([]),me=o({groupId:[{required:!0,message:"请选择应用类别",trigger:"blur"}],relModel:[{required:!0,message:"请选择关联模型",trigger:"blur"}],gptsApp:[{required:!0,message:"请选择是否GPTS应用",trigger:"blur"},{validator(e,l,a){if(l){const e=ce.value.find((e=>e.id===pe.groupId));e?e.key||a("当前应用类别未配置GPTS key，请先配置应用类别GPTS key 或者使用其他类别"):a("请先选择应用类别")}return a()}}],modelName:[{required:!0,message:"请填写您的应用名称",trigger:"blur"}],desc:[{required:!0,message:"请填写您的调用应用描述",trigger:"blur"}],logo:[{required:!0,message:"请选择logo",trigger:"blur"}],modelId:[{required:!0,message:"请填写您的调用模型的Id(官网产生的id)",trigger:"blur"}],status:[{required:!0,message:"请选择key的启用状态",trigger:"change"}],isDraw:[{required:!1,message:"请选择当前key是否作为基础绘画key",trigger:"change"}]});const fe=t((()=>ne.value?"更新应用":"新增应用")),ge=t((()=>ne.value?"确认更新":"确认新增")),ve=e([]);async function he(){try{oe.value=!0;const e=await P.queryModels(ue);oe.value=!1;const{rows:l,count:a}=e.data;z.value=a,ve.value=l}catch(e){oe.value=!1}}const ye=e=>"image/jpeg"!==e.type&&"image/png"!==e.type?(V.error("只支持jpg和png格式"),!1):!(e.size/1024/1024>2)||(V.error("图片不能大于2M!"),!1);!async function(){try{const e=await P.queryGptsGroup({page:1,size:20}).then((e=>e.data)),{rows:l}=e;return ce.value=l,!0}catch(e){oe.value=!1}}(),d((async()=>{await he()}));const _e=async()=>{te.value=!0;const e=`https://gpts.ddaiai.com/open/gptsapi/list/${ie.value.length}`,l=await x.get(e).then((e=>e.data)).then((e=>e.data.list)).then((e=>e.map((e=>({modelName:e.name,logo:e.logo,useCount:+e.use_cnt,modelId:e.gid,desc:e.info,checked:!1})))));ie.value=ie.value.concat(l),I(),te.value=!1},be=()=>{ie.value.every((e=>e.checked))?ie.value.forEach((e=>e.checked=!1)):ie.value.forEach((e=>e.checked=!0))},ke=()=>{ie.value.some((e=>e.checked))?ie.value.forEach((e=>e.checked=!1)):ie.value.forEach((e=>e.checked=!0))},Ve=async()=>{var e;const l=ie.value.filter((e=>e.checked));0!==l.length?null==(e=M.value)||e.validate((async e=>{if(e){const{groupId:e,relModel:a}=pe,o=l.map((l=>({groupId:e,relModel:a,...l})));await P.insertModelsBatch(o).then((e=>e.data))&&V.success("批量添加成功"),ne.value=0,he()}})):V.warning("未勾选GDP模型")},we=()=>{_e()};return(e,l)=>{const a=u("el-input"),o=u("el-form-item"),t=u("el-option"),d=u("el-select"),x=u("el-button"),I=u("Plus"),xe=u("el-icon"),Ce=u("el-form"),Ie=N,Ue=u("el-alert"),Te=u("el-table-column"),Me=u("el-tag"),ze=u("el-image"),Ne=u("el-popconfirm"),Pe=u("el-table"),Ge=u("el-pagination"),je=u("el-row"),qe=C,Ae=C,Se=u("el-col"),De=u("el-dialog"),Be=u("QuestionFilled"),Re=u("el-tooltip"),Ee=u("el-switch"),Fe=s("loading");return r(),n("div",null,[i(Ie,null,{default:p((()=>[i(Ce,{ref_key:"formRef",ref:U,inline:!0,model:ue},{default:p((()=>[i(o,{label:"应用名称",prop:"modelName"},{default:p((()=>[i(a,{modelValue:ue.modelName,"onUpdate:modelValue":l[0]||(l[0]=e=>ue.modelName=e),placeholder:"应用名称",clearable:""},null,8,["modelValue"])])),_:1}),i(o,{label:"应用分类",prop:"groupId"},{default:p((()=>[i(d,{modelValue:ue.groupId,"onUpdate:modelValue":l[1]||(l[1]=e=>ue.groupId=e),placeholder:"应用分类",clearable:"",style:{width:"192px"}},{default:p((()=>[(r(!0),n(c,null,m(f(ce),(e=>(r(),y(t,{key:e.id,label:e.groupName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(o,{label:"启用状态",prop:"status"},{default:p((()=>[i(d,{modelValue:ue.status,"onUpdate:modelValue":l[2]||(l[2]=e=>ue.status=e),placeholder:"请选择启用状态",clearable:"",style:{width:"192px"}},{default:p((()=>[(r(!0),n(c,null,m(f(j),(e=>(r(),y(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(o,null,{default:p((()=>[i(x,{type:"primary",onClick:he},{default:p((()=>[g(" 查询 ")])),_:1}),i(x,{onClick:l[3]||(l[3]=e=>{return null==(l=f(U))||l.resetFields(),void he();var l})},{default:p((()=>[g(" 重置 ")])),_:1}),i(x,{onClick:l[4]||(l[4]=e=>de.value=!0),type:"success"},{default:p((()=>[g(" 发现GPTS应用 ")])),_:1})])),_:1}),v("span",D,[i(x,{type:"success",onClick:l[5]||(l[5]=e=>S.value=!0)},{default:p((()=>[g(" 手动添加应用 "),i(xe,{class:"ml-3"},{default:p((()=>[i(I)])),_:1})])),_:1})])])),_:1},8,["model"])])),_:1}),i(Ie,{bottomPadding:"20px"},{default:p((()=>[i(Ue,{"show-icon":"",closable:!1,title:"KEY池说明",description:"所有key会根据你所选的应用自动分类、会以第一个加入的key为标准、建议所有同模型的key参数配置相同、否则可能特殊场景会有迷惑性。不同模型可以设置不同的扣费类型以及单次调用扣除的额度、额度不再以次为单位、改为(积分)概念！你可以设置模型最大上限和回复上限、以及最大轮次用以限制用户的最大上下文、当限制token后、用户端可选范围受其影响、轮次同理、到达轮次之后会移除掉更靠前的上下文！",type:"success"})])),_:1}),i(Ie,{bottomPadding:"20px",bottomMargin:"0px"},{default:p((()=>[h((r(),y(Pe,{height:"52vh",border:"",data:f(ve),style:{width:"100%"},size:"large"},{default:p((()=>[i(Te,{prop:"modelName",label:"应用名称"}),i(Te,{prop:"groupName",label:"应用分类"}),i(Te,{prop:"modelId",label:"GPTSId"}),i(Te,{prop:"status",align:"center",label:"启用状态",width:"90"},{default:p((e=>[i(Me,{type:e.row.status?"success":"danger"},{default:p((()=>[g(_(e.row.status?"使用中":"已暂停"),1)])),_:2},1032,["type"])])),_:1}),i(Te,{prop:"desc",label:"描述",align:"center"}),i(Te,{prop:"logo",label:"Logo",align:"center"},{default:p((e=>[i(ze,{lazy:"",src:e.row.logo,style:{width:"80px",height:"80px","border-radius":"50%"}},null,8,["src"])])),_:1}),i(Te,{prop:"remark",align:"center",label:"备注"},{default:p((e=>[g(_(e.row.remark||"-"),1)])),_:1}),i(Te,{prop:"createdAt",align:"center",label:"添加时间"},{default:p((e=>[g(_(f(G)(e.row.createdAt,"YYYY-MM-DD")),1)])),_:1}),i(Te,{fixed:"right",label:"操作",width:"200"},{default:p((e=>[i(x,{link:"",type:"primary",size:"small",onClick:l=>function(e){ne.value=e.id;for(let l in pe)pe[l]=e[l];S.value=!0}(e.row)},{default:p((()=>[g(" 变更 ")])),_:2},1032,["onClick"]),i(Ne,{title:"确认删除此应用么?",width:"180","icon-color":"red",onConfirm:l=>async function(e){const{id:l}=e;await P.delModels({id:l}),V({type:"success",message:"操作完成！"}),he()}(e.row)},{reference:p((()=>[i(x,{link:"",type:"danger",size:"small"},{default:p((()=>[g(" 删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Fe,f(oe)]]),i(je,{class:"flex justify-end mt-5"},{default:p((()=>[i(Ge,{"current-page":ue.page,"onUpdate:currentPage":l[6]||(l[6]=e=>ue.page=e),"page-size":ue.size,"onUpdate:pageSize":l[7]||(l[7]=e=>ue.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:f(z),onSizeChange:he,onCurrentChange:he},null,8,["current-page","page-size","total"])])),_:1})])),_:1}),i(De,{modelValue:f(de),"onUpdate:modelValue":l[10]||(l[10]=e=>b(de)?de.value=e:null),"lock-scroll":"",top:"30px",style:{height:"90vh"},"close-on-click-modal":!1,title:se.title,width:"1500",onOpen:_e,onClose:l[11]||(l[11]=e=>de.value=!1)},{default:p((()=>[i(Ce,{ref_key:"formGptsModelRef",ref:M,"label-position":"right",inline:"",model:pe,rules:me},{default:p((()=>[i(o,null,{default:p((()=>[i(x,{type:"primary",onClick:be},{default:p((()=>[g("全选")])),_:1}),i(x,{type:"primary",onClick:ke},{default:p((()=>[g("反选")])),_:1})])),_:1}),i(o,{label:"添加到",prop:"groupId"},{default:p((()=>[i(d,{modelValue:pe.groupId,"onUpdate:modelValue":l[8]||(l[8]=e=>pe.groupId=e),placeholder:"请选择应用分类",clearable:"","fit-input-width":"",style:{width:"192px"}},{default:p((()=>[(r(!0),n(c,null,m(f(ce),(e=>(r(),y(t,{key:e.id,label:e.groupName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(o,{label:"应用关联模型",prop:"relModel"},{default:p((()=>[i(d,{modelValue:pe.relModel,"onUpdate:modelValue":l[9]||(l[9]=e=>pe.relModel=e),filterable:"",clearable:"",placeholder:"请选用绑定的模型",style:{width:"192px"}},{default:p((()=>[(r(!0),n(c,null,m(f(q),(e=>(r(),y(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(o,null,{default:p((()=>[i(x,{type:"primary",onClick:Ve},{default:p((()=>[g("确认添加到分类")])),_:1})])),_:1})])),_:1},8,["model","rules"]),f(te)?h((r(),n("div",B,null,512)),[[Fe,f(te)]]):(r(),n("div",R,[i(je,{gutter:10},{default:p((()=>[(r(!0),n(c,null,m(f(ie),(e=>(r(),y(Se,{xs:8,sm:6,md:4,lg:4,xl:6,ref_for:!0,ref:"scrollRef"},{default:p((()=>[v("div",{class:"group cursor-pointer",onClick:l=>{var a;(a=e).checked=!a.checked}},[v("div",F,[v("div",Y,[v("h3",H,_(e.modelName),1),e.useCount&&+e.useCount>0?(r(),y(Me,{key:0,type:"success",size:"small",round:""},{default:p((()=>[v("div",L,[i(qe,{name:"hot",class:"hot-icon"}),g(" "+_(e.useCount),1)])])),_:2},1024)):T("",!0)]),v("div",$,_(e.desc),1)]),v("div",K,[i(ze,{src:e.logo,"preview-disabled":!0,lazy:"",class:"image-icon"},{placeholder:p((()=>[v("div",O,[i(qe,{name:"downloading-loop",class:"download"})])])),_:2},1032,["src"])]),e.checked?(r(),n("div",Q,[v("div",J,[i(Ae,{class:"correct-icon",name:"correct"})])])):T("",!0)],8,E)])),_:2},1536)))),256))])),_:1}),v("div",{class:"center cursor-pointer",onClick:we},[i(Ae,{name:"down-round",style:{width:"40px",height:"40px"}})])]))])),_:1},8,["modelValue","title"]),i(De,{modelValue:f(S),"onUpdate:modelValue":l[30]||(l[30]=e=>b(S)?S.value=e:null),"close-on-click-modal":!1,title:fe.value,width:"1000",onClose:l[31]||(l[31]=e=>{return l=f(re),ne.value=0,void(null==l||l.resetFields());var l})},{footer:p((()=>[v("span",ae,[i(x,{onClick:l[28]||(l[28]=e=>S.value=!1)},{default:p((()=>[g("取消")])),_:1}),i(x,{type:"primary",onClick:l[29]||(l[29]=e=>async function(e){null==e||e.validate((async e=>{if(e){const e=w(pe);delete e.id,ne.value&&(e.id=ne.value),await P.setModels(e),V({type:"success",message:"操作成功！"}),ne.value=0,S.value=!1,he()}}))}(f(re)))},{default:p((()=>[g(_(ge.value),1)])),_:1})])])),default:p((()=>[h((r(),y(Ce,{ref_key:"formPackageRef",ref:re,"label-position":"right","label-width":"120px",model:pe,rules:me},{default:p((()=>[i(je,null,{default:p((()=>[i(Se,{span:12},{default:p((()=>[i(o,{label:"所属分类",prop:"groupId"},{default:p((()=>[i(d,{modelValue:pe.groupId,"onUpdate:modelValue":l[12]||(l[12]=e=>pe.groupId=e),placeholder:"请选择应用所属分类",clearable:"","fit-input-width":"",style:{width:"100%"}},{default:p((()=>[(r(!0),n(c,null,m(f(ce),(e=>(r(),y(t,{key:e.id,label:e.groupName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(Se,{span:12},{default:p((()=>[i(o,{label:"应用名称",prop:"modelName"},{default:p((()=>[i(a,{modelValue:pe.modelName,"onUpdate:modelValue":l[13]||(l[13]=e=>pe.modelName=e),placeholder:"请填写应用中文名称（用户选择的）"},null,8,["modelValue"])])),_:1})])),_:1}),i(Se,{span:12},{default:p((()=>[i(o,{label:"应用描述",prop:"desc"},{default:p((()=>[i(a,{modelValue:pe.desc,"onUpdate:modelValue":l[14]||(l[14]=e=>pe.desc=e),placeholder:"请填写应用描述"},null,8,["modelValue"])])),_:1})])),_:1}),i(Se,{span:12},{default:p((()=>[i(o,{label:"备注说明",prop:"remark"},{default:p((()=>[i(a,{modelValue:pe.remark,"onUpdate:modelValue":l[15]||(l[15]=e=>pe.remark=e),placeholder:"请填写应用备注"},null,8,["modelValue"])])),_:1})])),_:1}),i(Se,{span:12},{default:p((()=>[i(o,{label:"是否GPTS应用",prop:"gptsApp"},{default:p((()=>[i(d,{modelValue:pe.gptsApp,"onUpdate:modelValue":l[16]||(l[16]=e=>pe.gptsApp=e),placeholder:"请选择应用类型","fit-input-width":"",style:{width:"100%"},disabled:Boolean(f(ne))},{default:p((()=>[(r(),y(t,{key:1,label:"是",value:!0})),(r(),y(t,{key:2,label:"否",value:!1}))])),_:1},8,["modelValue","disabled"])])),_:1})])),_:1}),pe.gptsApp?(r(),y(Se,{key:0,span:12},{default:p((()=>[i(o,{label:"GPTS模型Id",prop:"modelId"},{default:p((()=>[i(a,{modelValue:pe.modelId,"onUpdate:modelValue":l[17]||(l[17]=e=>pe.modelId=e),placeholder:"请填写GPTS模型Id号（官网创建后产生的Id）"},null,8,["modelValue"])])),_:1})])),_:1})):(r(),y(Se,{key:1,span:12},{default:p((()=>[i(o,{label:"应用关联模型",prop:"relModel"},{default:p((()=>[i(d,{modelValue:pe.relModel,"onUpdate:modelValue":l[18]||(l[18]=e=>pe.relModel=e),filterable:"","allow-create":"",clearable:"",placeholder:"请选用绑定的模型",style:{width:"90%"}},{default:p((()=>[(r(!0),n(c,null,m(f(q),(e=>(r(),y(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:p((()=>[W])),default:p((()=>[i(xe,{class:"ml-3 cursor-pointer"},{default:p((()=>[i(Be)])),_:1})])),_:1})])),_:1})])),_:1})),i(Se,{span:24}),i(Se,{span:12},{default:p((()=>[i(o,{label:"应用Logo",prop:"logo"},{default:p((()=>[i(f(k),{class:"logo-uploader",action:"","auto-upload":!1,"show-file-list":!1,onChange:l[19]||(l[19]=e=>(e=>{const l=e.name.split(".")[1],a=new FormData;a.append("filename",e.raw.uid+"."+l),a.append("file",e.raw),a.append("dir","gpts-logo"),A.uploadFile(a).then((e=>{pe.logo=e.data}))})(e)),"before-upload":ye},{default:p((()=>[pe.logo?(r(),n("img",{key:0,src:pe.logo,class:"avatar"},null,8,X)):(r(),y(xe,{key:1,class:"logo-uploader-icon"},{default:p((()=>[i(I)])),_:1}))])),_:1}),i(a,{style:{"margin-top":"10px"},modelValue:pe.logo,"onUpdate:modelValue":l[20]||(l[20]=e=>pe.logo=e),placeholder:"应用Logo网络地址"},null,8,["modelValue"])])),_:1})])),_:1}),i(Se,{span:12},{default:p((()=>[i(o,{label:"示例内容",prop:"demoData"},{default:p((()=>[i(a,{modelValue:pe.demoData,"onUpdate:modelValue":l[21]||(l[21]=e=>pe.demoData=e),type:"textarea",placeholder:"请填写应用的demo示例数据、每换行一次表示一个新的示例...",rows:4},null,8,["modelValue"])])),_:1}),i(Se,{span:24},{default:p((()=>[i(o,{label:"排序权重",prop:"sortId"},{default:p((()=>[i(a,{modelValue:pe.sortId,"onUpdate:modelValue":l[22]||(l[22]=e=>pe.sortId=e),placeholder:"请填写排序权重（越大越靠前，默认1）"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(Se,{span:12},{default:p((()=>[i(o,{label:"预设热度",prop:"useCount"},{default:p((()=>[i(a,{modelValue:pe.useCount,"onUpdate:modelValue":l[23]||(l[23]=e=>pe.useCount=e),placeholder:"请填写预设热度"},null,8,["modelValue"])])),_:1})])),_:1}),i(Se,{span:12},{default:p((()=>[i(o,{label:"预设收藏",prop:"collectCount"},{default:p((()=>[i(a,{modelValue:pe.collectCount,"onUpdate:modelValue":l[24]||(l[24]=e=>pe.collectCount=e),placeholder:"请填写预设收藏"},null,8,["modelValue"])])),_:1})])),_:1}),i(Se,{span:24}),i(Se,{span:8},{default:p((()=>[i(o,{label:"是否推荐",prop:"recommend"},{default:p((()=>[i(Ee,{modelValue:pe.recommend,"onUpdate:modelValue":l[25]||(l[25]=e=>pe.recommend=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:p((()=>[Z])),default:p((()=>[i(xe,{class:"ml-3 cursor-pointer"},{default:p((()=>[i(Be)])),_:1})])),_:1})])),_:1})])),_:1}),i(Se,{span:8},{default:p((()=>[i(o,{label:"启用上传",prop:"canUpload"},{default:p((()=>[i(Ee,{modelValue:pe.canUpload,"onUpdate:modelValue":l[26]||(l[26]=e=>pe.canUpload=e),"active-value":!0,"inactive-value":!1},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:p((()=>[ee])),default:p((()=>[i(xe,{class:"ml-3 cursor-pointer"},{default:p((()=>[i(Be)])),_:1})])),_:1})])),_:1})])),_:1}),i(Se,{span:8},{default:p((()=>[i(o,{label:"启用状态",prop:"status"},{default:p((()=>[i(Ee,{"active-value":1,"inactive-value":0,modelValue:pe.status,"onUpdate:modelValue":l[27]||(l[27]=e=>pe.status=e)},null,8,["modelValue"]),i(Re,{class:"box-item",effect:"dark",placement:"right"},{content:p((()=>[le])),default:p((()=>[i(xe,{class:"ml-3 cursor-pointer"},{default:p((()=>[i(Be)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])),[[Fe,f(te)]])])),_:1},8,["modelValue","title"])])}}});"function"==typeof z&&z(oe);const te=M(oe,[["__scopeId","data-v-07e33fc8"]]);export{te as default};
