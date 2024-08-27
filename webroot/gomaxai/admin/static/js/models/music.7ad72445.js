
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as l,r as a,C as t,G as o,x as d,j as r,V as i,o as s,c as u,b as p,f as n,g as m,W as y,X as c,e as g,h as f,w as v,J as b,t as h,K as x,O as k,P as w,$ as V,ab as _,y as F,p as U,k as z,_ as T}from"../main-4d5ea9bc.js";import{h as C,i as N,b as W,Q as j}from"../index/index.21f4f4e7.js";import{A}from"./models.c98ee9f9.js";import{u as S}from"../utcformatTime/utcformatTime.f6db2c52.js";const q=e=>(U("data-v-8d97272e"),e=e(),z(),e),B={class:"dialogue_model_box"},M={style:{"margin-bottom":"32px"}},P={class:"search_condition"},D={style:{display:"flex","align-items":"center"}},K=q((()=>p("div",{class:"search_title"},"模型类型",-1))),Y={style:{"margin-left":"12px"}},E=q((()=>p("div",{class:"search_title"},"使用模型",-1))),I={style:{"margin-left":"12px"}},R=q((()=>p("div",{class:"search_title"},"启用状态",-1))),O={style:{"margin-top":"22px","margin-left":"12px"}},G={style:{"margin-top":"22px"}},J={style:{"margin-top":"12px"}},Q={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},X={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},$={style:{display:"flex","align-items":"center","justify-content":"space-between"}},H={style:{display:"flex","align-items":"center","justify-content":"space-between"}},L={style:{"margin-left":"61px",width:"100%",display:"flex","align-items":"center"}},Z={style:{display:"flex","align-items":"center"}},ee=q((()=>p("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"启用状态",-1))),le={style:{display:"flex","align-items":"center","margin-left":"20px"}},ae=q((()=>p("div",{style:{"white-space":"nowrap","margin-right":"10px",color:"#9FA3B8"}},"会员免费",-1))),te={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},oe=T(e({__name:"music",setup(e){const U=l(),z=a(),T=a([]),q=a(0),oe=a(!1),de=a(!1),re=a(!1),ie=a(0),se=t((()=>ie.value?"更新秘钥":"新增秘钥")),ue=t((()=>ie.value?"确认更新":"确认新增")),pe=o({status:null,modelType:C[3].value,page:1,size:10}),ne=o({modelName:(new Date).getTime(),model:"model",keyType:1,deduct:1,displaySort:0,keyWeight:0,vipFreeNum:0,proxyUrl:"",key:"",status:!1,modelType:"music"}),me=o({keyType:[{required:!0,message:"请选择您的调用模型类型",trigger:"blur"}],vipFreeNum:[{required:!0,message:"请填写会员每日可用的最大次数",trigger:"blur"}],model:[{required:!0,message:"请选择您需要使用的模型",trigger:"blur"}],modelName:[{required:!0,message:"为您的模型取一个名字吧",trigger:"blur"}],deduct:[{required:!0,message:"请填写当前模型扣费金额（需要是正整数）",trigger:"blur"}],keyWeight:[{required:!0,message:"请填写key的权重值",trigger:"blur"}],key:[{required:!0,message:"请填写您的调用模型key",trigger:"blur"}]});async function ye(){try{oe.value=!0;const e=await A.queryModels(pe);oe.value=!1;const{rows:l,count:a}=e.data;q.value=a,T.value=l}catch(e){oe.value=!1}}function ce(){pe.page=1,pe.size=10,pe.keyType="",pe.model="",pe.status=null,ye()}function ge(){ie.value=0,ne.modelName=(new Date).getTime(),ne.model="model",ne.keyType=1,ne.deduct=1,ne.keyWeight=0,ne.vipFreeNum=0,ne.displaySort=0,ne.proxyUrl="",ne.key="",ne.status=!1,ne.modelType="music",de.value=!0}function fe(e){ne.vipFreeNum=1==e?-1:0}function ve(){z.value.validate((async e=>{if(!e)return;if(0==U.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");if(0==re.value&&ne.vipFreeNum<0)return void w({type:"error",message:"会员每日可用次数不能小于零"});const l=_(ne);if(delete l.id,ie.value&&(l.id=ie.value),1===Number(ne.keyType)){const e=_(ne.key);l.key=e.split("\n")}const a=await A.setModels(l);200==a.code?(w({type:"success",message:"操作成功"}),de.value=!1,ye()):w({type:"error",message:a.data})}))}return d((()=>{ye()})),(e,l)=>{const a=r("el-alert"),t=r("el-option"),o=r("el-select"),d=r("el-input"),_=r("el-button"),C=r("RefreshRight"),be=r("el-icon"),he=r("el-table-column"),xe=r("el-tag"),ke=r("el-popconfirm"),we=r("el-table"),Ve=r("el-pagination"),_e=r("el-row"),Fe=F,Ue=r("el-form-item"),ze=r("el-switch"),Te=r("el-form"),Ce=r("el-dialog"),Ne=i("loading");return s(),u("div",B,[p("div",M,[n(a,{closable:!1,"show-icon":"",title:"说明",description:"这里配置的是suno音乐模型，key启动就会调用，未启动则不会调用",type:"warning"})]),p("div",P,[p("div",D,[p("div",null,[K,p("div",null,[n(o,{modelValue:pe.keyType,"onUpdate:modelValue":l[0]||(l[0]=e=>pe.keyType=e),placeholder:"请选择模型类型",style:{width:"150px"}},{default:m((()=>[(s(!0),u(y,null,c(g(N),(e=>(s(),b(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),p("div",Y,[E,p("div",null,[n(d,{modelValue:pe.model,"onUpdate:modelValue":l[2]||(l[2]=e=>pe.model=e),style:{width:"150px"},placeholder:"请选择使用模型",class:"input-with-select"},{suffix:m((()=>[n(o,{modelValue:pe.model,"onUpdate:modelValue":l[1]||(l[1]=e=>pe.model=e),style:{width:"30px",border:"none"}},{default:m((()=>[(s(!0),u(y,null,c(g(W),(e=>(s(),b(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])]),p("div",I,[R,p("div",null,[n(o,{modelValue:pe.status,"onUpdate:modelValue":l[3]||(l[3]=e=>pe.status=e),placeholder:"请选择启用状态",style:{width:"120px"}},{default:m((()=>[(s(!0),u(y,null,c(g(j),(e=>(s(),b(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),p("div",O,[n(_,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:ye},{default:m((()=>[f("查询 ")])),_:1})]),p("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:ce},[n(be,{color:"#3B82F6",size:"20"},{default:m((()=>[n(C)])),_:1})])]),p("div",G,[n(_,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:ge},{default:m((()=>[f("添加key ")])),_:1})])]),p("div",J,[v((s(),b(we,{border:"",data:g(T),style:{"font-size":"13px",width:"100%"},"max-height":"65vh"},{default:m((()=>[n(he,{prop:"displaySort",label:"排序id",width:"100"}),n(he,{prop:"status",label:"是否启用",width:"100"},{default:m((e=>[1==e.row.status?(s(),b(xe,{key:0,type:"primary"},{default:m((()=>[f("启用")])),_:1})):(s(),b(xe,{key:1,type:"info"},{default:m((()=>[f("禁用")])),_:1}))])),_:1}),n(he,{prop:"key",label:"模型key",width:"300"}),n(he,{prop:"proxyUrl",label:"代理地址",width:"200"},{default:m((e=>[f(h(""==e.row.proxyUrl?"——":e.row.proxyUrl),1)])),_:1}),n(he,{prop:"keyWeight",label:"模型权重",width:"100"}),n(he,{prop:"deduct",label:"单次扣除",width:"100"}),n(he,{prop:"useCount",label:"调用次数"}),n(he,{prop:"useToken",label:"已使用token"}),n(he,{prop:"createdAt",label:"添加时间",width:"200"},{default:m((e=>[f(h(g(S)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),n(he,{label:"操作",fixed:"right",width:"160"},{default:m((e=>[n(_,{style:{border:"none",color:"#3B82F6","font-size":"13px","background-color":"transparent"},onClick:l=>{return a=e.row,ie.value=a.id,a.vipFreeNum,re.value,V((()=>{const{modelName:e,model:l,keyType:t,deduct:o,keyWeight:d,vipFreeNum:r,displaySort:i,proxyUrl:s,key:u,status:p,modelType:n}=a;Object.assign(ne,{modelName:e,model:l,keyType:t,deduct:o,keyWeight:d,vipFreeNum:r,displaySort:i,proxyUrl:s,key:u,status:p,modelType:n})})),void(de.value=!0);var a}},{default:m((()=>[f("编辑 ")])),_:2},1032,["onClick"]),n(ke,{title:"确认删除此秘钥么?",width:"180","icon-color":"red",onConfirm:l=>async function(e){if(0==U.isUserModifyPermissions())return w.error("非超级管理员无权限操作！");const{id:l}=e;await A.delModels({id:l}),w({type:"success",message:"操作完成！"}),ye()}(e.row)},{reference:m((()=>[n(_,{style:{border:"none",color:"#FF3B30","font-size":"13px","background-color":"transparent"}},{default:m((()=>[f("删除 ")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Ne,g(oe)]]),n(_e,{class:"flex justify-end mt-5"},{default:m((()=>[n(Ve,{"current-page":pe.page,"onUpdate:currentPage":l[4]||(l[4]=e=>pe.page=e),"page-size":pe.size,"onUpdate:pageSize":l[5]||(l[5]=e=>pe.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:g(q),onSizeChange:ye,onCurrentChange:ye},null,8,["current-page","page-size","total"])])),_:1})]),n(Ce,{modelValue:g(de),"onUpdate:modelValue":l[17]||(l[17]=e=>k(de)?de.value=e:null),width:"750","show-close":!1,"destroy-on-close":""},{header:m((({close:e,titleId:a,titleClass:t})=>[p("div",Q,[p("div",null,h(se.value),1),p("div",{onClick:l[6]||(l[6]=e=>de.value=!1),style:{cursor:"pointer"}},[n(be,null,{default:m((()=>[n(Fe,{name:"close"})])),_:1})])])])),default:m((()=>[p("div",X,[n(Te,{ref_key:"addModelKeyFormRef",ref:z,rules:me,model:ne,"label-width":"auto",style:{"max-width":"750px"}},{default:m((()=>[p("div",$,[n(Ue,{label:"单次消耗积分",prop:"deduct"},{default:m((()=>[n(d,{modelValue:ne.deduct,"onUpdate:modelValue":l[7]||(l[7]=e=>ne.deduct=e),size:"large",style:{width:"200px"},placeholder:"请填写单次消耗的积分量",type:"number"},null,8,["modelValue"])])),_:1}),n(Ue,{label:"指定代理地址"},{default:m((()=>[n(d,{modelValue:ne.proxyUrl,"onUpdate:modelValue":l[8]||(l[8]=e=>ne.proxyUrl=e),size:"large",style:{width:"200px"},placeholder:"请填写模型代理地址"},null,8,["modelValue"])])),_:1})]),p("div",H,[1==g(re)?(s(),b(Ue,{key:0,label:"调用轮询权重",prop:"keyWeight"},{default:m((()=>[n(d,{modelValue:ne.keyWeight,"onUpdate:modelValue":l[9]||(l[9]=e=>ne.keyWeight=e),size:"large",style:{width:"200px"},placeholder:"请填写轮询权重",type:"number"},null,8,["modelValue"])])),_:1})):x("",!0),1!=g(re)?(s(),b(Ue,{key:1,label:"会员每日可用次数",prop:"vipFreeNum"},{default:m((()=>[n(d,{modelValue:ne.vipFreeNum,"onUpdate:modelValue":l[10]||(l[10]=e=>ne.vipFreeNum=e),size:"large",style:{width:"200px"},placeholder:"请填写会员单日可用的次数",type:"number"},null,8,["modelValue"])])),_:1})):x("",!0),n(Ue,{label:"模型显示排序"},{default:m((()=>[n(d,{modelValue:ne.displaySort,"onUpdate:modelValue":l[11]||(l[11]=e=>ne.displaySort=e),size:"large",style:{width:"200px"},type:"number",placeholder:"请填写模型的排序"},null,8,["modelValue"])])),_:1})]),1!=g(re)?(s(),b(Ue,{key:0,label:"调用轮询权重",prop:"keyWeight"},{default:m((()=>[n(d,{modelValue:ne.keyWeight,"onUpdate:modelValue":l[12]||(l[12]=e=>ne.keyWeight=e),size:"large",style:{width:"200px"},placeholder:"请填写轮询权重",type:"number"},null,8,["modelValue"])])),_:1})):x("",!0),n(Ue,{label:"API Key",prop:"key"},{default:m((()=>[n(d,{modelValue:ne.key,"onUpdate:modelValue":l[13]||(l[13]=e=>ne.key=e),size:"large",placeholder:"请填写模型Key l clientld l Appld"},null,8,["modelValue"])])),_:1}),n(Ue,null,{default:m((()=>[p("div",L,[p("div",Z,[ee,p("div",null,[n(ze,{modelValue:ne.status,"onUpdate:modelValue":l[14]||(l[14]=e=>ne.status=e)},null,8,["modelValue"])])]),p("div",le,[ae,p("div",null,[n(ze,{modelValue:g(re),"onUpdate:modelValue":l[15]||(l[15]=e=>k(re)?re.value=e:null),onChange:fe},null,8,["modelValue"])])])])])),_:1})])),_:1},8,["rules","model"])]),p("div",te,[n(_,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:l[16]||(l[16]=e=>de.value=!1)},{default:m((()=>[f("取消 ")])),_:1}),n(_,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:ve},{default:m((()=>[f(h(ue.value),1)])),_:1})])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-8d97272e"]]);export{oe as default};
