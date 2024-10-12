import{e,R as a,bh as l,aj as t,r as s,j as n,A as i,k as o,a3 as u,O as r,P as c,U as v,X as d,W as p,H as f,Z as h,_ as m,a5 as x,N as w,bk as g,Y as b,bo as y,T as k,$ as E,ai as j,ao as $,aO as C,a4 as I,aq as _}from"../main-6c725c30.js";import{t as L}from"../throttle/throttle.33f09de3.js";import{F}from"../FlashOutline/FlashOutline.f137a70f.js";const O={class:"bg-[#E7ECF6] h-[100vh] overflow-hidden h-full p-4 pr-0 dark:bg-[#18181c] flex flex-col"},z={class:"p-4 flex pr-6 justify-between items-center"},A={class:"w-[200px] sm:w-[300px] flex justify-between"},M={class:"flex-1 ml-5"},U={class:"px-4 mb-6 pr-5"},P={class:"market overflow-y-scroll flex-1 min-h-screen bg-[#E7ECF6] p-4 dark:bg-[#18181c] relative"},T=["id"],N=["id","src","onLoad","onError","onClick"],R={class:"menu p-2 text-[#cbd5e1]"},W={class:"prompt"},q={class:"flex justify-between items-end"},D=["onClick"],H={class:"text-sm dark:text-slate-400"},X=e({__name:"index",setup(e){var X;const Y=a(),Z=null==(X=l())?void 0:X.appContext.config.globalProperties.$viewerApi,B=t(),G=s([]),J=s({}),K=s(0),Q=s(160),S=s(0),V=s(10),ee=s(10),ae=s([]),le=s(null),te=s(0),se=n((()=>Y.isLogin)),ne=s(30),ie=s(""),oe=n((()=>ne.value+V.value+150));function ue(){!function(){const{showName:e=0,showOther:a=0}={};K.value=15*[e,a].filter((e=>e)).length}(),function(){if(!le.value)return;const e=le.value.clientWidth;S.value=Math.floor(e/oe.value);const a=e-S.value*oe.value,l=(S.value-1)*V.value;a-l<0&&(S.value-=1);Q.value=Math.floor((e-l)/S.value)}();const e=S.value,a=Q.value,l=[];re.value.forEach(((t,s)=>{const{width:n,height:i}=t.fileInfo,o=i*(a/n)+ee.value+K.value,u=J.value[t.id];if(l.length<e)u.style.top="0px",u.style.left=(a+V.value)*s+"px",l.push(o);else{const e=Math.min.apply(null,l),a=l.findIndex((a=>a===e));u.style.top=`${e+0}px`,u.style.left=a*(Q.value+V.value)+"px",l[a]+=o}})),te.value=Math.max(...l)+130}const re=n((()=>ie.value?G.value.filter((e=>{const{prompt:a}=e;return a.includes(ie.value)})):G.value));i(ne,(()=>{ue()}));let ce=null;i(re,(()=>{re.value.length&&(clearTimeout(ce),ce=setTimeout((()=>{ue()}),300))}));const ve=n((()=>e=>{const{fileInfo:a}=e,{width:l,height:t}=a;return t/(l/Q.value)})),de=L((function(){ue()}),200);return o((async()=>{await async function(){const e=await x({size:999,rec:1});G.value=e.data.rows}(),ue(),window.addEventListener("resize",de)})),u((()=>{window.removeEventListener("resize",de)})),(e,a)=>(w(),r("div",O,[c("div",z,[a[3]||(a[3]=c("div",{class:"font-bold text-xl"},"AI绘画广场",-1)),c("div",A,[a[2]||(a[2]=c("span",{class:"hidden sm:block"},"尺寸调整",-1)),c("div",M,[v(d(g),{value:ne.value,"onUpdate:value":a[0]||(a[0]=e=>ne.value=e),step:10},null,8,["value"])])])]),c("div",U,[v(d(y),{value:ie.value,"onUpdate:value":a[1]||(a[1]=e=>ie.value=e),placeholder:"prompt关键词搜索"},{prefix:p((()=>[v(d(b),{component:d(F)},null,8,["component"])])),_:1},8,["value"])]),c("div",P,[c("div",{id:"wapper",ref_key:"wapperRef",ref:le,class:"wapper",style:f({height:`${te.value}px`})},[(w(!0),r(h,null,m(re.value,((e,a)=>(w(),r("div",{id:e.id,key:a,ref_for:!0,ref:a=>function(e,a){e&&a&&(J.value[a.id]=e)}(a,e),class:"wapper-item",style:f({width:`${Q.value}px`})},[v(k,{name:"img",css:!0},{default:p((()=>[c("img",{id:e.id,class:"item-file rounded-sm",style:f({width:`${Q.value}px`,height:`${ve.value(e)}px`}),src:e.fileInfo.thumbImg,loading:"lazy",onLoad:a=>function(e,a){ae.value.push(a.id)}(0,e),onError:a=>function(e,a){ae.value.push(a.id)}(0,e),onClick:a=>function(e){const{fileInfo:a}=e,{cosUrl:l}=a;Z({options:{},images:[l]})}(e)},null,44,N)])),_:2},1024),c("div",R,[c("div",W,E(e.fullPrompt),1),c("div",q,[j(E(e.createdAt)+" ",1),c("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:$((a=>function(e){if(!se.value)return Y.setLoginDialog(!0);const{prompt:a}=e;_({text:a}),B.success("复制prompt成功")}(e)),["stop"])},[c("span",H,[v(d(C),{icon:"tabler:copy",class:"text-sm"})])],8,D)])]),ae.value.includes(e.id)?I("",!0):(w(),r("div",{key:0,class:"item-loading",style:f({width:`${Q.value}px`,height:`${ve.value(e)}px`})},null,4))],12,T)))),128))],4)])]))}});export{X as default};