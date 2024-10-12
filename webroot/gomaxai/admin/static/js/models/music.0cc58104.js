
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r as a,B as t,F as o,o as d,l as r,V as i,b as s,e as u,f as p,h as n,i as m,Y as y,X as c,g,j as f,w as v,J as b,t as x,K as h,O as k,P as w,Q as V,a9 as _,x as F,_ as U}from"../main-46c178e9.js";import{h as z,i as N,b as T,Q as C}from"../index/index.1baeddf5.js";import{A as j}from"./models.ad8f8a8d.js";import{u as W}from"../utcformatTime/utcformatTime.f6db2c52.js";const A={class:"dialogue_model_box"},B={style:{"margin-bottom":"32px"}},S={class:"search_condition"},q={style:{display:"flex","align-items":"center"}},M={style:{"margin-left":"12px"}},P={style:{"margin-left":"12px"}},Y={style:{"margin-top":"22px","margin-left":"12px"}},K={style:{"margin-top":"22px"}},E={style:{"margin-top":"12px"}},I={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},R={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},D={style:{display:"flex","align-items":"center","justify-content":"space-between"}},O={style:{display:"flex","align-items":"center","justify-content":"space-between"}},Q={style:{display:"flex","align-items":"center","justify-content":"space-between"}},J={style:{"margin-left":"61px",width:"100%",display:"flex","align-items":"center"}},X={style:{display:"flex","align-items":"center"}},G={style:{display:"flex","align-items":"center","margin-left":"20px"}},H={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},L=U(e({__name:"music",setup(e){const U=l(),L=a(),Z=a([]),$=a(0),ee=a(!1),le=a(!1),ae=a(!1),te=a(0),oe=t((()=>te.value?"更新秘钥":"新增秘钥")),de=t((()=>te.value?"确认更新":"确认新增")),re=o({status:null,modelType:z[3].value,page:1,size:10}),ie=o({modelName:"",model:"model",keyType:1,deduct:1,displaySort:0,keyWeight:0,vipFreeNum:0,proxyUrl:"",key:"",status:!1,modelType:"music"}),se=o({keyType:[{required:!0,message:"请选择您的调用模型类型",trigger:"blur"}],vipFreeNum:[{required:!0,message:"请填写会员每日可用的最大次数",trigger:"blur"}],model:[{required:!0,message:"请选择您需要使用的模型",trigger:"blur"}],modelName:[{required:!0,message:"为您的模型取一个名字吧",trigger:"blur"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],keyWeight:[{required:!0,message:"请填写key的权重值",trigger:"blur"}],key:[{required:!0,message:"请填写您的调用模型key",trigger:"blur"}]});async function ue(){try{ee.value=!0;const e=await j.queryModels(re);ee.value=!1;const{rows:l,count:a}=e.data;$.value=a,Z.value=l}catch(e){ee.value=!1}}function pe(){re.page=1,re.size=10,re.keyType="",re.model="",re.status=null,ue()}function ne(){te.value=0,ie.modelName="",ie.model="model",ie.keyType=1,ie.deduct=1,ie.keyWeight=0,ie.vipFreeNum=0,ie.displaySort=0,ie.proxyUrl="",ie.key="",ie.status=!1,ie.modelType="music",le.value=!0}function me(e){ie.vipFreeNum=1==e?-1:0}function ye(){L.value.validate((async e=>{if(!e)return;if(0==U.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");if(0==ae.value&&ie.vipFreeNum<0)return void w({type:"error",message:"会员每日可用次数不能小于零"});const l=_(ie);if(delete l.id,te.value&&(l.id=te.value),1===Number(ie.keyType)){const e=_(ie.key);l.key=e.split("\n")}const a=await j.setModels(l);200==a.code?(w({type:"success",message:"操作成功"}),le.value=!1,ue()):w({type:"error",message:a.data})}))}return d((()=>{ue()})),(e,l)=>{const a=r("el-alert"),t=r("el-option"),o=r("el-select"),d=r("el-input"),_=r("el-button"),z=r("RefreshRight"),ce=r("el-icon"),ge=r("el-table-column"),fe=r("el-tag"),ve=r("el-popconfirm"),be=r("el-table"),xe=r("el-pagination"),he=r("el-row"),ke=F,we=r("el-form-item"),Ve=r("el-switch"),_e=r("el-form"),Fe=r("el-dialog"),Ue=i("loading");return s(),u("div",A,[p("div",B,[n(a,{closable:!1,"show-icon":"",title:"说明",description:"这里配置的是suno音乐模型，key启动就会调用，未启动则不会调用",type:"warning"})]),p("div",S,[p("div",q,[p("div",null,[l[19]||(l[19]=p("div",{class:"search_title"},"模型类型",-1)),p("div",null,[n(o,{modelValue:re.keyType,"onUpdate:modelValue":l[0]||(l[0]=e=>re.keyType=e),placeholder:"请选择模型类型",style:{width:"150px"}},{default:m((()=>[(s(!0),u(y,null,c(g(N),(e=>(s(),b(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),p("div",M,[l[20]||(l[20]=p("div",{class:"search_title"},"使用模型",-1)),p("div",null,[n(d,{modelValue:re.model,"onUpdate:modelValue":l[2]||(l[2]=e=>re.model=e),style:{width:"150px"},placeholder:"请选择使用模型",class:"input-with-select"},{suffix:m((()=>[n(o,{modelValue:re.model,"onUpdate:modelValue":l[1]||(l[1]=e=>re.model=e),style:{width:"30px",border:"none"}},{default:m((()=>[(s(!0),u(y,null,c(g(T),(e=>(s(),b(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])]),p("div",P,[l[21]||(l[21]=p("div",{class:"search_title"},"启用状态",-1)),p("div",null,[n(o,{modelValue:re.status,"onUpdate:modelValue":l[3]||(l[3]=e=>re.status=e),placeholder:"请选择启用状态",style:{width:"120px"}},{default:m((()=>[(s(!0),u(y,null,c(g(C),(e=>(s(),b(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),p("div",Y,[n(_,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:ue},{default:m((()=>l[22]||(l[22]=[f("查询 ")]))),_:1})]),p("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:pe},[n(ce,{color:"#3B82F6",size:"20"},{default:m((()=>[n(z)])),_:1})])]),p("div",K,[n(_,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:ne},{default:m((()=>l[23]||(l[23]=[f("添加key ")]))),_:1})])]),p("div",E,[v((s(),b(be,{border:"",data:g(Z),style:{"font-size":"13px",width:"100%"},"max-height":"65vh"},{default:m((()=>[n(ge,{prop:"displaySort",label:"排序id",width:"100"}),n(ge,{prop:"modelName",label:"自定义模型名称"}),n(ge,{prop:"status",label:"是否启用",width:"100"},{default:m((e=>[1==e.row.status?(s(),b(fe,{key:0,type:"primary"},{default:m((()=>l[24]||(l[24]=[f("启用")]))),_:1})):(s(),b(fe,{key:1,type:"info"},{default:m((()=>l[25]||(l[25]=[f("禁用")]))),_:1}))])),_:1}),n(ge,{prop:"key",label:"模型key",width:"300"}),n(ge,{prop:"proxyUrl",label:"代理地址",width:"200"},{default:m((e=>[f(x(""==e.row.proxyUrl?"——":e.row.proxyUrl),1)])),_:1}),n(ge,{prop:"keyWeight",label:"模型权重",width:"100"}),n(ge,{prop:"deduct",label:"单次扣除",width:"100"}),n(ge,{prop:"useCount",label:"调用次数"}),n(ge,{prop:"useToken",label:"已使用token"}),n(ge,{prop:"createdAt",label:"添加时间",width:"200"},{default:m((e=>[f(x(g(W)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),n(ge,{label:"操作",fixed:"right",width:"160"},{default:m((e=>[n(_,{style:{border:"none",color:"#3B82F6","font-size":"13px","background-color":"transparent"},onClick:l=>{return a=e.row,te.value=a.id,a.vipFreeNum,ae.value,V((()=>{const{modelName:e,model:l,keyType:t,deduct:o,keyWeight:d,vipFreeNum:r,displaySort:i,proxyUrl:s,key:u,status:p,modelType:n}=a;Object.assign(ie,{modelName:e,model:l,keyType:t,deduct:o,keyWeight:d,vipFreeNum:r,displaySort:i,proxyUrl:s,key:u,status:p,modelType:n})})),void(le.value=!0);var a}},{default:m((()=>l[26]||(l[26]=[f("编辑 ")]))),_:2},1032,["onClick"]),n(ve,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:l=>async function(e){if(0==U.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");const{id:l}=e;await j.delModels({id:l}),w({type:"success",message:"操作完成！"}),ue()}(e.row)},{reference:m((()=>[n(_,{style:{border:"none",color:"#FF3B30","font-size":"13px","background-color":"transparent"}},{default:m((()=>l[27]||(l[27]=[f("删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Ue,g(ee)]]),n(he,{class:"flex justify-end mt-5"},{default:m((()=>[n(xe,{"current-page":re.page,"onUpdate:currentPage":l[4]||(l[4]=e=>re.page=e),"page-size":re.size,"onUpdate:pageSize":l[5]||(l[5]=e=>re.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:g($),onSizeChange:ue,onCurrentChange:ue},null,8,["current-page","page-size","total"])])),_:1})]),n(Fe,{modelValue:g(le),"onUpdate:modelValue":l[18]||(l[18]=e=>k(le)?le.value=e:null),width:"750","show-close":!1,"destroy-on-close":""},{header:m((({close:e,titleId:a,titleClass:t})=>[p("div",I,[p("div",null,x(oe.value),1),p("div",{onClick:l[6]||(l[6]=e=>le.value=!1),style:{cursor:"pointer"}},[n(ce,null,{default:m((()=>[n(ke,{name:"close"})])),_:1})])])])),default:m((()=>[p("div",R,[n(_e,{ref_key:"addModelKeyFormRef",ref:L,rules:se,model:ie,"label-width":"auto",style:{"max-width":"750px"}},{default:m((()=>[p("div",D,[n(we,{label:"自定义模型名称",prop:"modelName"},{default:m((()=>[n(d,{modelValue:ie.modelName,"onUpdate:modelValue":l[7]||(l[7]=e=>ie.modelName=e),size:"large",style:{width:"200px"}},null,8,["modelValue"])])),_:1}),n(we,{label:"单次消耗积分",prop:"deduct"},{default:m((()=>[n(d,{modelValue:ie.deduct,"onUpdate:modelValue":l[8]||(l[8]=e=>ie.deduct=e),size:"large",style:{width:"200px"},placeholder:"请填写单次消耗的积分量",type:"number"},null,8,["modelValue"])])),_:1})]),p("div",O,[n(we,{label:"指定代理地址"},{default:m((()=>[n(d,{modelValue:ie.proxyUrl,"onUpdate:modelValue":l[9]||(l[9]=e=>ie.proxyUrl=e),size:"large",style:{width:"200px"},placeholder:"请填写模型代理地址"},null,8,["modelValue"])])),_:1}),1==g(ae)?(s(),b(we,{key:0,label:"调用轮询权重",prop:"keyWeight"},{default:m((()=>[n(d,{modelValue:ie.keyWeight,"onUpdate:modelValue":l[10]||(l[10]=e=>ie.keyWeight=e),size:"large",style:{width:"200px"},placeholder:"请填写轮询权重",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0),1!=g(ae)?(s(),b(we,{key:1,label:"会员每日可用次数",prop:"vipFreeNum"},{default:m((()=>[n(d,{modelValue:ie.vipFreeNum,"onUpdate:modelValue":l[11]||(l[11]=e=>ie.vipFreeNum=e),size:"large",style:{width:"200px"},placeholder:"请填写会员单日可用的次数",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0)]),p("div",Q,[n(we,{label:"模型显示排序"},{default:m((()=>[n(d,{modelValue:ie.displaySort,"onUpdate:modelValue":l[12]||(l[12]=e=>ie.displaySort=e),size:"large",style:{width:"200px"},type:"number",placeholder:"请填写模型的排序"},null,8,["modelValue"])])),_:1}),1!=g(ae)?(s(),b(we,{key:0,label:"调用轮询权重",prop:"keyWeight"},{default:m((()=>[n(d,{modelValue:ie.keyWeight,"onUpdate:modelValue":l[13]||(l[13]=e=>ie.keyWeight=e),size:"large",style:{width:"200px"},placeholder:"请填写轮询权重",type:"number"},null,8,["modelValue"])])),_:1})):h("",!0)]),n(we,{label:"API Key",prop:"key"},{default:m((()=>[n(d,{modelValue:ie.key,"onUpdate:modelValue":l[14]||(l[14]=e=>ie.key=e),size:"large",placeholder:"请填写模型Key l clientld l Appld"},null,8,["modelValue"])])),_:1}),n(we,null,{default:m((()=>[p("div",J,[p("div",X,[l[28]||(l[28]=p("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"启用状态",-1)),p("div",null,[n(Ve,{modelValue:ie.status,"onUpdate:modelValue":l[15]||(l[15]=e=>ie.status=e)},null,8,["modelValue"])])]),p("div",G,[l[29]||(l[29]=p("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"会员免费",-1)),p("div",null,[n(Ve,{modelValue:g(ae),"onUpdate:modelValue":l[16]||(l[16]=e=>k(ae)?ae.value=e:null),onChange:me},null,8,["modelValue"])])])])])),_:1})])),_:1},8,["rules","model"])]),p("div",H,[n(_,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[17]||(l[17]=e=>le.value=!1)},{default:m((()=>l[30]||(l[30]=[f("取消 ")]))),_:1}),n(_,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:ye},{default:m((()=>[f(x(de.value),1)])),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-df52397f"]]);export{L as default};