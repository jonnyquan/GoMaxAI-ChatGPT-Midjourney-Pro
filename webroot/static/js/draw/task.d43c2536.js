import{M as a}from"../index/index.c0169b84.js";import{e,r as t,k as s,b2 as l,O as i,P as o,aa as n,Z as u,_ as c,aA as d,N as r,ad as v,aB as f,aE as b,aD as g,aC as p,K as m,a3 as F}from"../main-ddc3955a.js";import{a as k}from"../index/index.27c727e8.js";import"../draw-fail/draw-fail.ad8fd01b.js";import"../index/index.5b75f753.js";import"../index/index.58a338c1.js";import"./draw.b06fb86d.js";import"../Popconfirm/Popconfirm.57a3a77b.js";const w={class:"mj-task-view bg-[#F8F9F9] dark:bg-[#111113]"},I={class:"view-title"},j=F(e({__name:"task",setup(e){let F=[];const j=t(!1),T=t(!1),x=t([]);let _=null;const A=async function(){_&&window.clearTimeout(_);try{(await f({jobIds:F.join()})).data.forEach((a=>{const e=x.value.findIndex((e=>e.id===a.id));-1!==e&&x.value.splice(e,1,a),a.status>=3&&(F=F.filter((e=>e!==a.jobId)))})),F.length?_=setTimeout((()=>A()),3e3):_&&window.clearTimeout(_)}catch(a){_=setTimeout((()=>A()),3e3)}},h={page:1,size:20},E=async function(){try{T.value=!0;const a=await d({...h,status:y.value>=0?y.value:0,favorite:1==y.value?y.value:0});1===h.page?x.value=a.data.rows:x.value=x.value.concat(a.data.rows),F=x.value.filter((a=>[1,2].includes(a.status))).map((a=>a.jobId)),F.length&&A(),a.data.rows.length<h.size&&(j.value=!0),T.value=!1}catch(a){T.value=!1,1!==h.page&&(h.page=h.page-1)}},y=t(0),C=function(a){y.value=a,j.value=!1,h.page=1,E()},M=async function(a){let e=null;switch(a.type){case k.TEXT_TO_IMAGE:case k.IMAGE_ACTION:e=await p(a);break;case k.IMAGE_MIX_IMAGE:case k.IMAGE_TO_TEXT:e=await g(a);break;case k.INSIGHT_FACE:e=await b(a)}if(e){const a=e.data;x.value.find((e=>e.id===a.id))||(x.value.push(a),m((()=>{var a;null==(a=B.value)||a.scrollTo({top:0,behavior:"smooth"})}))),a.status<3&&!F.includes(a.jobId)&&(F.push(a.jobId),A())}},B=t(),G=function(a){const e=a.target,{scrollTop:t,offsetHeight:s,scrollHeight:l}=e;l-s-t<=40&&(j.value||T.value||(h.page=h.page+1,E()))};return s((()=>{var a;E(),null==(a=B.value)||a.addEventListener("scroll",G)})),l((()=>{var a;null==(a=B.value)||a.removeEventListener("scroll",G)})),(e,t)=>(r(),i("div",w,[o("div",I,[o("div",{class:n(["title-btn",0===y.value?"bg-[#10A37F] text-[#fff]":"dark:bg-[#19191B] bg-[#F8F9F9]"]),onClick:t[0]||(t[0]=a=>C(0))},"全部",2),o("div",{class:n(["title-btn",2===y.value?"bg-[#10A37F] text-[#fff]":"dark:bg-[#19191B] bg-[#F8F9F9]"]),onClick:t[1]||(t[1]=a=>C(2))},"执行中",2),o("div",{class:n(["title-btn",3===y.value?"bg-[#10A37F] text-[#fff]":"dark:bg-[#19191B] bg-[#F8F9F9]"]),onClick:t[2]||(t[2]=a=>C(3))},"已完成",2),o("div",{class:n(["title-btn",4===y.value?"bg-[#10A37F] text-[#fff]":"dark:bg-[#19191B] bg-[#F8F9F9]"]),onClick:t[3]||(t[3]=a=>C(4))},"已失效",2),o("div",{class:n(["title-btn",1===y.value?"bg-[#10A37F] text-[#fff]":"dark:bg-[#19191B] bg-[#F8F9F9]"]),onClick:t[4]||(t[4]=a=>C(1))},"我的收藏",2)]),o("div",{class:"main-view",ref_key:"scrollView",ref:B},[(r(!0),i(u,null,c(x.value,((e,t)=>(r(),v(a,{key:e.jobId,task:e,onRemove:()=>function(a){x.value.splice(a,1)}(t),onAddTask:M,type:"task"},null,8,["task","onRemove"])))),128))],512)]))}}),[["__scopeId","data-v-43871423"]]);export{j as default};
