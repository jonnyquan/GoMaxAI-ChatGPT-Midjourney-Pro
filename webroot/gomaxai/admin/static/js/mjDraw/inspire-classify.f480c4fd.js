
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import e from"../components/mjInspireClassify.22e9319f.js";import a from"../components/mjDetail.1ed9edb2.js";import{A as t}from"../mj/mj.b05f9cba.js";import{u as l}from"../utcformatTime/utcformatTime.f6db2c52.js";import{d as s,u as r,r as i,F as o,o as n,l as p,V as u,b as d,e as c,h as f,f as m,i as g,j as y,w as v,J as _,t as b,g as h,P as j,_ as w,q as x}from"../main-fe71c3b2.js";const z={style:{"text-align":"right","margin-bottom":"12px"}},C=s({__name:"inspire-classify",setup(s){const w=r(),x=i(),C=i(),k=i(!1),A=i([]),F=i(0),I=o({page:1,size:20});i();const M=async()=>{try{k.value=!0;const e=await t.queryMjInspireClassify(I),{rows:a,count:l}=e.data;k.value=!1,F.value=l,A.value=a}catch(e){k.value=!1}},P=async()=>{C.value.open()};return n((()=>{M()})),(s,r)=>{const i=p("el-alert"),o=p("el-button"),n=p("el-table-column"),U=p("el-popconfirm"),q=p("el-table"),B=p("el-pagination"),D=p("el-row"),R=u("loading");return d(),c("div",null,[f(e,{ref_key:"mjManagerRef",ref:C,onFresh:M},null,512),f(a,{ref_key:"mjDetailRef",ref:x},null,512),m("div",null,[f(i,{"show-icon":"",title:"广场分类说明",closable:!1,description:"此处的广场分类是为了给广场广场的图片分成各个不同类型！",type:"warning"})]),m("div",z,[m("div",null,[f(o,{style:{"border-radius":"8px",border:"1px solid #3B82F6",color:"#3B82F6","font-size":"15px",height:"32px","margin-top":"25px"},onClick:P},{default:g((()=>r[2]||(r[2]=[y(" 添加分类 ")]))),_:1})])]),v((d(),_(q,{border:"",data:A.value,height:"64vh",width:"100%"},{default:g((()=>[f(n,{prop:"name",label:"分类名称"}),f(n,{prop:"value",label:"分类值"}),f(n,{prop:"createdAt",label:"创建时间"},{default:g((e=>[m("p",null,b(h(l)(e.row.createdAt)),1)])),_:1}),f(n,{prop:"updatedAt",label:"更新时间"},{default:g((e=>[m("p",null,b(h(l)(e.row.updatedAt)),1)])),_:1}),f(n,{fixed:"right",label:"操作",width:"280",align:"center"},{default:g((e=>[f(o,{link:"",type:"primary",size:"small",onClick:a=>(async e=>{C.value.open(e.id)})(e.row)},{default:g((()=>r[3]||(r[3]=[y(" 编辑 ")]))),_:2},1032,["onClick"]),f(U,{width:"300px",title:"删除后不可找回，确定删除?","confirm-button-text":"确认",onConfirm:a=>(async e=>{if(0==w.isUserModifyPermissions())return j.error("非超级管理员无权限操作！");await t.removeMjInspireClassify({id:e.id}),j.success("删除广场分类成功！"),await M()})(e.row)},{reference:g((()=>[f(o,{link:"",type:"danger",size:"small"},{default:g((()=>r[4]||(r[4]=[y(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[R,k.value]]),f(D,{class:"flex justify-end mt-5 pb-5"},{default:g((()=>[f(B,{"current-page":I.page,"onUpdate:currentPage":r[0]||(r[0]=e=>I.page=e),"page-size":I.size,"onUpdate:pageSize":r[1]||(r[1]=e=>I.size=e),class:"mr-5","page-sizes":[15,30,50,100],layout:"total, sizes, prev, pager, next, jumper",total:F.value,onSizeChange:M,onCurrentChange:M},null,8,["current-page","page-size","total"])])),_:1})])}}});"function"==typeof x&&x(C);const k=w(C,[["__scopeId","data-v-ea39f9c1"]]);export{k as default};
