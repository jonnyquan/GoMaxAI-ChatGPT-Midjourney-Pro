
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,u as a,r as l,F as t,o as i,l as o,V as r,b as d,e as s,f as n,h as c,i as u,j as p,g as m,w as g,J as f,t as y,P as b,x,_ as v,q as h}from"../main-46c178e9.js";import{u as w}from"../utcformatTime/utcformatTime.f6db2c52.js";import{T as _,A as F}from"../aiMusic/aiMusic.57ade686.js";const V={class:"search_condition"},k={style:{display:"flex","align-items":"center"}},z={style:{"margin-top":"22px","margin-left":"12px"}},C={style:{"margin-top":"22px"}},N={style:{"margin-top":"12px"}},j={key:0},T={key:1},U={key:2},A={style:{color:"#20295A","font-size":"15px","font-weight":"bold","background-color":"#EFF6FF",padding:"15px 20px","border-top":"15px",display:"flex","align-items":"center","justify-content":"space-between","border-top-right-radius":"15px","border-top-left-radius":"15px"}},M={style:{padding:"0 20px","border-bottom":"1px solid var(--el-border-color-lighter)"}},B={style:{padding:"20px",display:"flex","align-items":"center","justify-content":"space-between"}},P=e({__name:"lyric",setup(e){const v=a();l();const h=l(0);l(!1);const P=l(!1),Y=l(!1),q=t({id:0,ids:[],dictType:"music-lyrics",dictName:"",dictValue:""}),D=t({dictType:"music-lyrics",dictName:"",page:1,size:15}),E=l([]);async function I(){try{P.value=!0;const e=await F.page(D),{rows:a,count:l}=e.data;h.value=l,P.value=!1,E.value=a}catch(e){P.value=!1}}function R(e){D.dictName="",I()}const S=t({dictName:[{required:!0,message:"名称不能为空",trigger:"blur"}],dictValue:[{required:!0,message:"内容不能为空",trigger:"blur"}]});function J(e){Y.value=!0,q.id=e.id,q.dictName=e.dictName,q.dictValue=e.dictValue}async function G(){if(0==v.isUserModifyPermissions())return b.error("非超级管理员无权限操作！");(await F.save(q)).data&&b({type:"success",message:"操作成功！"}),Y.value=!1,I()}return i((()=>I())),(e,a)=>{const l=o("el-input"),t=o("el-button"),i=o("RefreshRight"),H=o("el-icon"),K=o("el-table-column"),L=o("el-popconfirm"),O=o("el-table"),Q=o("el-pagination"),W=o("el-row"),X=x,Z=o("el-form-item"),$=o("el-form"),ee=o("el-dialog"),ae=r("loading");return d(),s("div",null,[n("div",V,[n("div",k,[n("div",null,[a[9]||(a[9]=n("div",{class:"search_title"},"搜索关键字",-1)),n("div",null,[c(l,{modelValue:D.dictName,"onUpdate:modelValue":a[0]||(a[0]=e=>D.dictName=e),placeholder:"请输入字典关键字",clearable:"",style:{width:"192px"}},null,8,["modelValue"])])]),n("div",z,[c(t,{text:"",bg:"",style:{"font-size":"15px",color:"#60A5FA","background-color":"#EFF6FF","border-radius":"8px"},onClick:I},{default:u((()=>a[10]||(a[10]=[p("查询 ")]))),_:1})]),n("div",{style:{"margin-left":"12px","background-color":"#EFF6FF",padding:"4px 16px","border-radius":"8px","margin-top":"22px",cursor:"pointer"},onClick:R},[c(H,{color:"#3B82F6",size:"20"},{default:u((()=>[c(i)])),_:1})])]),n("div",C,[c(t,{style:{"background-color":"transparent",border:"1px solid #3B82F6","border-radius":"8px",color:"#3B82F6"},onClick:a[1]||(a[1]=e=>J(new(m(_))))},{default:u((()=>a[11]||(a[11]=[p("添加内容 ")]))),_:1})])]),n("div",N,[g((d(),f(O,{border:"",height:"66vh",data:E.value,style:{width:"100%"},size:"large"},{default:u((()=>[c(K,{fixed:"",prop:"id",label:"ID",width:"80"}),c(K,{prop:"dictType",label:"类型",width:"150"},{default:u((e=>["music-style"===e.row.dictType?(d(),s("span",j,"音乐风格")):"music-lyrics"===e.row.dictType?(d(),s("span",T,"音乐歌词")):(d(),s("span",U,"--"))])),_:1}),c(K,{prop:"dictName",label:"名称",width:"150"}),c(K,{prop:"dictValue",label:"内容",align:"center"}),c(K,{prop:"createdAt",label:"创建时间",width:"200",align:"center"},{default:u((e=>[p(y(m(w)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)])),_:1}),c(K,{fixed:"right",label:"操作",width:"250",align:"center"},{default:u((e=>[c(t,{link:"",type:"primary",size:"small",onClick:a=>J(e.row)},{default:u((()=>a[12]||(a[12]=[p(" 编辑 ")]))),_:2},1032,["onClick"]),c(L,{title:"确认删除?","confirm-button-text":"确认删除",onConfirm:a=>async function(e){if(0==v.isUserModifyPermissions())return b.error("非超级管理员无权限操作！");q.ids.push(e.id),(await F.delete(q)).data&&b({type:"success",message:"操作成功！"}),I()}(e.row)},{reference:u((()=>[c(t,{link:"",type:"danger"},{default:u((()=>a[13]||(a[13]=[p(" 删除 ")]))),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"])),[[ae,P.value]]),c(W,{class:"flex justify-end mt-5"},{default:u((()=>[c(Q,{class:"mr-5",total:h.value,onSizeChange:I,"page-sizes":[15,30,50,100],onCurrentChange:I,"page-size":D.size,"onUpdate:pageSize":a[2]||(a[2]=e=>D.size=e),"current-page":D.page,"onUpdate:currentPage":a[3]||(a[3]=e=>D.page=e),layout:"total, sizes, prev, pager, next, jumper"},null,8,["total","page-size","current-page"])])),_:1})]),c(ee,{modelValue:Y.value,"onUpdate:modelValue":a[8]||(a[8]=e=>Y.value=e),width:"650","show-close":!1,"destroy-on-close":""},{header:u((({close:e,titleId:l,titleClass:t})=>[n("div",A,[n("div",null,y(q.id?"编辑内容":"新增内容"),1),n("div",{onClick:a[4]||(a[4]=e=>Y.value=!1),style:{cursor:"pointer"}},[c(H,null,{default:u((()=>[c(X,{name:"close"})])),_:1})])])])),default:u((()=>[n("div",M,[c($,{model:q},{default:u((()=>[c(Z,{label:"名称",rules:S.dictName},{default:u((()=>[c(l,{size:"large",modelValue:q.dictName,"onUpdate:modelValue":a[5]||(a[5]=e=>q.dictName=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1},8,["rules"]),c(Z,{label:"内容",rules:S.dictValue},{default:u((()=>[c(l,{size:"large",modelValue:q.dictValue,"onUpdate:modelValue":a[6]||(a[6]=e=>q.dictValue=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1},8,["rules"])])),_:1},8,["model"])]),n("div",B,[c(t,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#F4F4F5",color:"#20295A","border-radius":"8px"},onClick:a[7]||(a[7]=e=>Y.value=!1)},{default:u((()=>a[14]||(a[14]=[p("取消 ")]))),_:1}),c(t,{bg:"",text:"",style:{width:"40%",padding:"20px 0","background-color":"#3B82F6",color:"#FFF","border-radius":"8px"},type:"primary",onClick:G},{default:u((()=>a[15]||(a[15]=[p(" 确定 ")]))),_:1})])])),_:1},8,["modelValue"])])}}});"function"==typeof h&&h(P);const Y=v(P,[["__scopeId","data-v-7e23e629"]]);export{Y as default};