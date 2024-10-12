
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.2a1afca6.js";import{A as a}from"./sales.fc38cd91.js";import{O as l,n as t}from"../index/index.1baeddf5.js";import{d as r,r as n,F as o,o as d,l as s,V as i,b as u,e as p,h as c,i as f,Y as w,X as m,g as h,j as g,w as v,J as b,f as _,t as y,q as C}from"../main-46c178e9.js";const x=["src"],S=r({__name:"order",setup(r){const C=n(),S=n(0),z=n(!1),k=o({orderStatus:0,withdrawalChannels:null,page:1,size:10}),j=n([]);async function V(){try{z.value=!0;const e=await a.querySalesOrder(k);z.value=!1;const{rows:l,count:t}=e.data;S.value=t,j.value=l}catch(e){z.value=!1}}async function I(e,l){const{id:t}=e,r={id:t,status:l};await a.salesAuditOrder(r),V()}return d((()=>{V()})),(a,r)=>{const n=s("el-option"),o=s("el-select"),d=s("el-form-item"),U=s("el-button"),A=s("el-form"),O=e,P=s("el-alert"),q=s("el-table-column"),F=s("el-tag"),J=s("el-popconfirm"),M=s("el-table"),R=s("el-pagination"),X=s("el-row"),Y=i("loading");return u(),p("div",null,[c(O,null,{default:f((()=>[c(A,{ref_key:"formRef",ref:C,inline:!0,model:k},{default:f((()=>[c(d,{label:"工单状态",prop:"orderStatus"},{default:f((()=>[c(o,{modelValue:k.orderStatus,"onUpdate:modelValue":r[0]||(r[0]=e=>k.orderStatus=e),placeholder:"请选择工单状态",clearable:"",style:{width:"192px"}},{default:f((()=>[(u(!0),p(w,null,m(h(l),(e=>(u(),b(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(d,{label:"提现渠道",prop:"withdrawalChannels"},{default:f((()=>[c(o,{modelValue:k.withdrawalChannels,"onUpdate:modelValue":r[1]||(r[1]=e=>k.withdrawalChannels=e),placeholder:"请选择提现渠道",clearable:"",style:{width:"192px"}},{default:f((()=>[(u(!0),p(w,null,m(h(t),(e=>(u(),b(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(d,null,{default:f((()=>[c(U,{type:"primary",onClick:V},{default:f((()=>r[5]||(r[5]=[g(" 查询 ")]))),_:1}),c(U,{onClick:r[2]||(r[2]=e=>{return null==(a=h(C))||a.resetFields(),void V();var a})},{default:f((()=>r[6]||(r[6]=[g(" 重置 ")]))),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),c(O,{bottomPadding:"20px"},{default:f((()=>[c(P,{"show-icon":"",title:"提现审核说明",description:"所有工单只可审核一次、请准确操作、打款请人工打款、确定打款后点击审核通过即可！",type:"success"})])),_:1}),c(O,{bottomPadding:"20px",bottomMargin:"0px"},{default:f((()=>[v((u(),b(M,{border:"",data:h(j),height:"54vh",style:{width:"100%"},size:"large"},{default:f((()=>[c(q,{prop:"userInfo.avatar",label:"头像",width:"120"},{default:f((e=>{var a,l;return[_("img",{src:null==(l=null==(a=e.row)?void 0:a.userInfo)?void 0:l.avatar,style:{height:"50px"}},null,8,x)]})),_:1}),c(q,{prop:"withdrawalChannels",align:"center",label:"提现渠道"},{default:f((e=>{var a;return[c(F,{type:1===(null==(a=e.row)?void 0:a.withdrawalChannels)?"":"success"},{default:f((()=>{var a;return[g(y(1===(null==(a=e.row)?void 0:a.withdrawalChannels)?"支付宝":"微信"),1)]})),_:2},1032,["type"])]})),_:1}),c(q,{prop:"userInfo.email",label:"邮箱",width:"200"}),c(q,{prop:"withdrawalAmount",align:"center",label:"提现金额"}),c(q,{prop:"contactInformation",align:"center",label:"提现备注",width:"340"}),c(q,{prop:"remark",align:"center",label:"提现留言",width:"340"}),c(q,{prop:"orderStatus",align:"center",label:"工单状态",width:"140"},{default:f((e=>{var a,l;return[c(F,{type:0===(null==(a=e.row)?void 0:a.orderStatus)?"":1===(null==(l=e.row)?void 0:l.orderStatus)?"success":"danger"},{default:f((()=>{var a,l;return[g(y(0===(null==(a=e.row)?void 0:a.orderStatus)?"待审核":1===(null==(l=e.row)?void 0:l.orderStatus)?"已通过":"已拒绝"),1)]})),_:2},1032,["type"])]})),_:1}),c(q,{fixed:"right",label:"审核",width:"200",align:"center"},{default:f((e=>[c(J,{title:"确认通过审核吗、请您先手动打款后通过！",width:"260","icon-color":"red",onConfirm:a=>I(e.row,1)},{reference:f((()=>[c(U,{link:"",type:"primary",size:"small",disabled:0!==e.row.orderStatus},{default:f((()=>r[7]||(r[7]=[g(" 通过审核 ")]))),_:2},1032,["disabled"])])),_:2},1032,["onConfirm"]),c(J,{title:"确认拒绝审核么、拒绝后此次提交将作废！",width:"260","icon-color":"red",onConfirm:a=>I(e.row,-1)},{reference:f((()=>[c(U,{link:"",type:"danger",size:"small",disabled:0!==e.row.orderStatus},{default:f((()=>r[8]||(r[8]=[g(" 拒绝审核 ")]))),_:2},1032,["disabled"])])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[Y,h(z)]]),c(X,{class:"flex justify-end mt-5"},{default:f((()=>[c(R,{"current-page":k.page,"onUpdate:currentPage":r[3]||(r[3]=e=>k.page=e),"page-size":k.size,"onUpdate:pageSize":r[4]||(r[4]=e=>k.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:h(S),onSizeChange:V,onCurrentChange:V},null,8,["current-page","page-size","total"])])),_:1})])),_:1})])}}});"function"==typeof C&&C(S);export{S as default};
