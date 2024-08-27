import{_ as e,a,b as t,c as l,d as s,e as i,f as o,g as r,h as n,i as c,j as u,k as g,l as d,m as v,n as m}from"../more/more.669e3c57.js";import{e as A,ao as p,R as k,j as y,S as x,a9 as f,a8 as C,r as E,A as b,O as B,a6 as h,P as I,Z as F,_ as T,$ as N,U as L,X as U,at as S,N as w,aa as H,aR as Z,bD as D,a1 as Q,a2 as Y,a3 as O}from"../main-cd5b7247.js";import{q as M,c as W,m as z,b as X,d as j}from"./music.cc984e6f.js";import{C as R}from"../index/index.f6339fbc.js";const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAAAXNSR0IArs4c6QAABAhJREFUWEfFlk1s1EUYxp9n/ru1gFWJaEuCJBoiHtAQqylN6barwYNGDI27bVUMGo4eSENo1YM9GPlQawBvmog0IHSDH+nBGD523aK0FrzAQUw0Ek1NFWPSrWzL7n8e/W/dtrTdbrfa7RwnM/P+3ud9Z+YhcozeqmdvGS65vqoEfFA0awG7XIQL8LI16QtUyQ/B2EdXZ9jOaH3z7dTo3bK+SsfgLgk3A0xY6TtZ9Y+kh399vO/zoZlCc+pkVyjkrBjAGr/DJoENIsoJ3QTAB0EiRykMgfjCwnaKuBiMRYa9c85XPrk0uWTZ/dbR8wSCAFYIKiFggEwyIxCuCOgG7NFoPHKlHbCTGW4A6qoOLakoZUCWrxJaD7Asl4IAvMMHIB5yHfc9/AU4S9kMcTuIewCU5trrJSTiW0mvDabUHz4XSWbXjgN5MCv9ZquIHRDWgpms8g4BgxBOgCoF+ASB8rybxha4An60Vh1l15KHH7rQfc2bzAB5ZbrzN/OYAQ4CmeymlTJPkCQgA9ArbUFD0E+uxc6rFfo0HIm4FMB4oGk9qHcpVYMsFKYggOmLJYHnHGNfrIlGvufZms1lrlPaAnIn4d2G4g9Bw1Z4Ozma6GDPxsZ74eBDSVXFVyeb/D/tLV68DjQxWht+zjF8E0BF8bWZiDh2OWwLvww0vg7oJZK3LiYQpD+t8BbjgcaDgLaBXJT+GRdBSljhEON14QMAtuV5BBdePA8I+ICxuvAuim0kli981NwRBP1hrdp5qi60yS++T3L14gLhZ9fyBUbrG1ZRvgMG3AzAWRQoSZY87aZS23m+stKfKFsTNtI7BO9YDCCvXJJekfn9cOabiNc2rLTGv5/AFno2o4hDQJrAJybNHRu/OjaQAfL+s55HnnlYabcDxAYWqXTyPJLQS5/TUnvmaD8BTdgPhJzygFNFaJ+KAOXBUOgVuGsw7vaFEXHH7Ue2Qu2ACQaaNtBon7RwSmVgiF5Z7orGj/VOdo3TrMY41AIpJSgNsQ+YDjNNoalKge4egNUE/5dGH4PRaceY9lOx499M9dM5gf5tdBOrDz1ghDcAbvqvUBkY6CStbTvTc+LSTDCzAmVvXzwQWgdqL2DmDTUGY09CbA3EI5e825TrZclrV8cs7lPrQP+8oCZgUq2B+GezwuRVaNzPZaA8pbCH4KNzNvNSUlQUQls+ZbKx8ip0I9SW+wB/K4inCS6b7UEXlCBxxEVyf32s+/JsZZp8zpyBspvO1oRWuz7TSmhrbg/leRt2iqndwdjHvxTyExUM5B3uOQQj/8szQykhsNPStzsYO1IQzJx7aKYMPSjHK59lmNBtIiykIRh2uUjtLVSZgnsoJ5T8zRLqATsC8Gtr0sfnC+PF+BvCdM4zBk9VhgAAAABJRU5ErkJggg==",J="data:image/png;base64,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",q=e=>(Q("data-v-c2275d22"),e=e(),Y(),e),P={class:"bg-[#ffffff] dark:bg-[#24252B] musicBody"},V={class:"mainBox"},K={class:"bg-[#F8F9F9] dark:bg-[#24252B]"},_={class:"contentBox bg-[#F8F9F9] dark:bg-[#15171A]"},$={style:{display:"flex"}},ee={style:{display:"flex","flex-direction":"column",overflow:"hidden",height:"calc(100vh - 73px)",width:"100%"}},ae={class:"tabBox"},te=["onClick"],le={class:"contextBox"},se={class:"itemTops"},ie={class:"topImg"},oe=["src"],re={class:"topNums"},ne={class:"topTitle"},ce={class:"title text-[#1E1F1F] dark:text-[#ffffff]"},ue={style:{display:"flex","align-items":"center",margin:"10px 0"}},ge={key:0,src:d,style:{"margin-right":"4px"}},de={key:1,src:v,style:{"margin-right":"4px"}},ve=q((()=>I("span",{class:"text-[#1E1F1F] dark:text-[#9A9EB5] text-[12px]",style:{"font-weight":"550"}},"Suno",-1))),me={class:"intro text-[#8B8C8C] dark:text-[#595C6E]"},Ae=["onClick"],pe=["onClick"],ke={class:"itemTop"},ye={class:"topImg"},xe=["src"],fe={class:"topTitle"},Ce={class:"title text-[#1E1F1F] dark:text-[#ffffff]"},Ee={style:{display:"flex","align-items":"center",margin:"10px 0"}},be={key:0,src:d,style:{"margin-right":"4px"}},Be={key:1,src:v,style:{"margin-right":"4px"}},he=q((()=>I("span",{class:"text-[#1E1F1F] dark:text-[#9A9EB5] text-[12px]",style:{"font-weight":"550"}},"Suno",-1))),Ie={class:"intro text-[#8B8C8C] dark:text-[#595C6E]"},Fe=["onClick"],Te=["onClick"],Ne={key:0,class:"dark:bg-[#111113] bg-[#FFF] text-[#8B8C8C] dark:text-[#6C6E79] border-t border-[#E8E8E8] dark:border-[#292A2E]",style:{padding:"10px 30px","box-sizing":"border-box"}},Le={class:"control dark:bg-[#303137] bg-[#FFF] text-[#8B8C8C] dark:text-[#6C6E79] border-t border-[#E8E8E8] dark:border-[#292A2E]"},Ue={style:{display:"flex","align-items":"center"}},Se={style:{display:"flex","align-items":"center",flex:"1","padding-right":"20px"}},we=["src"],He={style:{width:"100%"}},Ze={style:{display:"flex","align-items":"center","justify-content":"space-between"}},De={class:"text-[#1E1F1F] dark:text-[#EEEEF0] text-[15px]"},Qe={class:"text-[#8B8C8C] dark:text-[#6C6E79] text-[12px]"},Ye={style:{"margin-top":"4px"}},Oe=["src"],Me={key:0,class:"videoBox"},We={class:"bg-[#F0F0F0] dark:bg-[#222325] musicInfoDialog"},ze={style:{position:"relative"}},Xe=["src"],je={class:"videoLike"},Re=q((()=>I("img",{src:m},null,-1))),Ge={key:0,class:"operationBoxDown bg-[#fff] dark:bg-[#111113] border border-[#E8E8E8] dark:border-[#292A2E]"},Je={key:0,src:n,style:{"margin-right":"5px"}},qe={key:1,src:c,style:{"margin-right":"5px"}},Pe=q((()=>I("div",null,"下载视频",-1))),Ve={key:0,src:u,style:{"margin-right":"5px"}},Ke={key:1,src:g,style:{"margin-right":"5px"}},_e=q((()=>I("div",null,"下载音频",-1))),$e={class:"text-[#1E1F1F] dark:text-[#EEEEF0] text-[17px]",style:{"margin-top":"12px","font-weight":"550"}},ea={style:{display:"flex","align-items":"center","justify-content":"center",margin:"12px 0"}},aa={key:0,src:d,style:{"margin-right":"4px"}},ta={key:1,src:v,style:{"margin-right":"4px"}},la=q((()=>I("span",{class:"text-[#1E1F1F] dark:text-[#EEEEF0] text-[12px]",style:{"font-weight":"550"}},"Suno",-1))),sa={class:"introList"},ia=["src"],oa=O(A({__name:"musicSquare",setup(n){const c=p(),u=k(),g=y((()=>u.isLogin));let d=null;x();const v=f(),m=y((()=>"dark"===v.theme));C();const A=E([{name:"最新歌曲",key:0},{name:"流行趋势",key:1}]),Q=E(0),Y=E(1),O=E(),q=E(""),oa=E(""),ra=E("00:00"),na=E("00:00"),ca=E(""),ua=E(""),ga=E(0),da=E(null);function va(){ma.value=[];let e={size:50,page:Y.value,modelType:"music",order:oa.value};z(e).then((e=>{O.value=e.data.count,ma.value=e.data.records,Ta()})).catch((e=>{Ta()}))}const ma=E([]);function Aa(){d||(d=c.loading("数据加载中",{duration:0}));let e={size:50,modelType:"music",page:Y.value,order:oa.value};z(e).then((e=>{O.value=e.data.count,ma.value=e.data.records,Ta()})).catch((e=>{Ta()}))}Aa(),M({modelType:"music"}).then((e=>{0!=e.data.length?localStorage.setItem("musicGroupId",e.data[0].id):0==e.data.length&&W().then((e=>{localStorage.setItem("musicGroupId",e.data.id)}))}));const pa=E(1);function ka(e){console.log(e);let a={relateId:e.id,action:"agree",relateType:"music"};0!=pa.value&&(pa.value=0,X(a).then((a=>{null!=e.agree?ma.value.forEach((a=>{a.id==e.id&&(a.agree=null,a.agreeNum--)})):ma.value.forEach((a=>{a.id==e.id&&(a.agree="agree",a.agreeNum++)})),pa.value=1})))}const ya=E(""),xa=E(!1),fa=E(""),Ca=E(0);b((()=>fa.value),((e="")=>{Ea()}));const Ea=()=>{const e=document.getElementById("toolbar-box");e.style.right=fa.value?"330px":"20px",e.style.bottom=fa.value?"126px":"25px"};function ba(){const e=da.value;xa.value?(xa.value=!1,e.pause()):(xa.value=!0,e.play())}function Ba(){Ca.value-1<0?(Ca.value=ma.value.length-1,fa.value=ma.value[Ca.value]):(Ca.value=Ca.value-1,fa.value=ma.value[Ca.value]);const e=setTimeout((()=>{xa.value=!1,ba(),clearTimeout(e)}))}function ha(){Ca.value+1>ma.value.length-1?(Ca.value=0,fa.value=ma.value[Ca.value]):(Ca.value=Ca.value+1,fa.value=ma.value[Ca.value]);const e=setTimeout((()=>{xa.value=!1,ba(),clearTimeout(e)}))}function Ia(e,a){if(!g.value)return void u.setLoginDialog(!0);j({id:e.id,type:"music"}),Aa(),e.introList=e.intro.split("\n"),fa.value=e,Ca.value=a;const t=setTimeout((()=>{xa.value=!1,ba(),clearTimeout(t)}))}const Fa=E(!1);function Ta(){d&&(d.destroy(),d=null)}function Na(e,a){if(!g.value)return void u.setLoginDialog(!0);let t="/api";if(d||(d=c.loading("下载中，请稍等",{duration:0})),"mp4"==a){La();let a=e.mp4.split("/").pop();S.get(t+"/file/down",{responseType:"blob",params:{url:e.mp4}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),l=document.createElement("a");l.href=t,l.setAttribute("download",a),l.click(),Ta(),c.success("下载成功")})).catch((e=>{c.error("下载失败"),Ta()}))}else if("mp3"==a){La();let a=e.mp3.split("/").pop();S.get(t+"/file/down",{responseType:"blob",params:{url:e.mp3}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),l=document.createElement("a");l.href=t,l.setAttribute("download",a),l.click(),Ta(),c.success("下载成功")})).catch((e=>{c.error("下载失败"),Ta()}))}}function La(){fa.value&&(fa.value.operation=!1),Fa.value=!1,ma.value.forEach((e=>{e.operation=!1}))}const Ua=E(null);function Sa(){const e=Ua.value;if(e.scrollTop+e.clientHeight+1>=e.scrollHeight){if(30*Y.value>=O.value)return;Y.value++,Aa()}}function wa(){ca.value=da.value.duration,ua.value=da.value.currentTime,na.value=Za(parseInt(da.value.currentTime)),ra.value=Za(parseInt(da.value.duration))}function Ha(e){na.value=Za(parseInt(e.target.currentTime)),ua.value=e.target.currentTime,function(){let e=ua.value/ca.value*100;ga.value=e;const a=da.value;ga.value>=100&&(xa.value=!1,a.pause(),ua.value=0,ga.value=0,na.value="00:00")}()}function Za(e){let a=parseInt(e/60),t=parseInt(e%60);return a=a>=10?a:"0"+a,t=t>=10?t:"0"+t,a+":"+t}return(n,c)=>(w(),B("div",P,[Fa.value?(w(),B("div",{key:0,class:"mask",onClick:La})):h("",!0),I("div",V,[I("div",K,[I("div",_,[I("div",$,[I("div",ee,[I("div",ae,[(w(!0),B(F,null,T(A.value,((e,a)=>(w(),B("div",{class:H([Q.value==a?"selected_type_tab":"type_tab","tabItem dark:text-[#EEEEF0] text-[#1E1F1F] text-[12px]"]),onClick:e=>{return t=a,Q.value=t,Y.value=1,void(0==t?(q.value="",oa.value="",va()):1==t&&(oa.value="agreeNum",va()));var t},key:e.key},N(e.name),11,te)))),128))]),I("div",le,[I("div",{class:"content contents",ref_key:"container",ref:Ua,onScroll:Sa},[(w(!0),B(F,null,T(ma.value.slice(0,3),((e,a)=>(w(),B("div",{class:"contentItem bg-[#F0F0F0] dark:bg-[#222325] hot",key:e.chatId},[I("div",se,[I("div",ie,[I("img",{class:"bgImg",src:e.cover,alt:"加载失败"},null,8,oe),I("span",null,N(e.model||"版本标识"),1),I("span",re,"TOP"+N(a+1),1),L(U(Z),{onClick:t=>Ia(e,a),style:{"font-size":"30px"},icon:"gridicons:play",class:"playImg"},null,8,["onClick"])]),I("div",ne,[I("div",ce,N(" "==e.title||null==e.title?"匿名":e.title),1),I("div",ue,[m.value?(w(),B("img",ge)):(w(),B("img",de)),ve]),I("div",me,[I("span",null,N(e.intro),1),"agree"==e.agree?(w(),B("img",{key:0,onClick:a=>ka(e),src:G},null,8,Ae)):(w(),B("img",{key:1,onClick:a=>ka(e),src:J},null,8,pe))])])])])))),128))],544),ma.value&&ma.value.length>2?(w(),B("div",{key:0,class:"content",ref_key:"container",ref:Ua,onScroll:Sa},[(w(!0),B(F,null,T(ma.value.slice(3),((e,a)=>(w(),B("div",{class:"contentItem bg-[#F0F0F0] dark:bg-[#222325]",key:e.chatId},[I("div",ke,[I("div",ye,[I("img",{class:"bgImg",src:e.cover,alt:"加载失败"},null,8,xe),I("span",null,N(e.model||"版本标识"),1),L(U(Z),{onClick:t=>Ia(e,a),style:{"font-size":"30px"},icon:"gridicons:play",class:"playImg"},null,8,["onClick"])]),I("div",fe,[I("div",Ce,N(" "==e.title||null==e.title?"匿名":e.title),1),I("div",Ee,[m.value?(w(),B("img",be)):(w(),B("img",Be)),he]),I("div",Ie,[I("span",null,N(e.intro),1),"agree"==e.agree?(w(),B("img",{key:0,onClick:a=>ka(e),src:G},null,8,Fe)):(w(),B("img",{key:1,onClick:a=>ka(e),src:J},null,8,Te))])])]),h("",!0)])))),128))],544)):h("",!0)]),fa.value?(w(),B("div",Ne,[I("div",Le,[I("div",Ue,[I("div",null,[m.value?(w(),B("img",{key:0,class:"controlItem",style:{cursor:"pointer"},src:e,alt:"",onClick:Ba})):(w(),B("img",{key:1,class:"controlItem",style:{cursor:"pointer"},src:a,alt:"",onClick:Ba}))]),I("div",null,[xa.value&&m.value?(w(),B("img",{key:0,class:"controlItem",src:t,style:{margin:"0 30px",cursor:"pointer"},alt:"",onClick:ba})):h("",!0),xa.value&&0==m.value?(w(),B("img",{key:1,class:"controlItem",src:l,style:{margin:"0 30px",cursor:"pointer"},alt:"",onClick:ba})):h("",!0)]),I("div",null,[!xa.value&&m.value?(w(),B("img",{key:0,class:"controlItem",src:s,style:{margin:"0 30px",cursor:"pointer"},alt:"",onClick:ba})):h("",!0),xa.value||0!=m.value?h("",!0):(w(),B("img",{key:1,class:"controlItem",src:i,style:{margin:"0 30px",cursor:"pointer"},alt:"",onClick:ba}))]),I("div",null,[m.value?(w(),B("img",{key:0,class:"controlItem",style:{cursor:"pointer"},src:o,alt:"",onClick:ha})):(w(),B("img",{key:1,class:"controlItem",style:{cursor:"pointer"},src:r,alt:"",onClick:ha}))])]),I("div",Se,[I("img",{src:fa.value.cover,style:{width:"48px",height:"48px","margin-left":"30px","margin-right":"12px"}},null,8,we),I("div",He,[I("div",Ze,[I("div",De,N(" "==fa.value.title||null==fa.value.title?"匿名":fa.value.title),1),I("div",Qe,N(na.value)+" / "+N(ra.value),1)]),I("div",Ye,[I("audio",{id:"audio",src:fa.value.mp3,onCanplay:wa,ref_key:"audioRef",ref:da,onTimeupdate:Ha},null,40,Oe),L(U(D),{style:{width:"100%"},type:"line",status:"success","show-indicator":!1,percentage:ga.value},null,8,["percentage"])])])])])])):h("",!0),L(R,{class:"end"})]),fa.value?(w(),B("div",Me,[I("div",We,[I("div",ze,[I("img",{src:fa.value.cover,style:{width:"200px",height:"200px","margin-left":"50%",transform:"translate(-50%)"}},null,8,Xe),I("div",je,["agree"==fa.value.agree?(w(),B("img",{key:0,onClick:c[0]||(c[0]=e=>ka(fa.value)),src:G})):(w(),B("img",{key:1,onClick:c[1]||(c[1]=e=>ka(fa.value)),src:J}))]),I("div",{class:"videoDown",onClick:c[4]||(c[4]=()=>{fa.value.operation=!0,Fa.value=!0})},[Re,fa.value.operation?(w(),B("div",Ge,[I("div",{class:"operationItem",style:{display:"flex"},onClick:c[2]||(c[2]=e=>Na(fa.value,"mp4"))},[m.value?(w(),B("img",Je)):(w(),B("img",qe)),Pe]),I("div",{class:"operationItem",style:{display:"flex"},onClick:c[3]||(c[3]=e=>Na(fa.value,"mp3"))},[m.value?(w(),B("img",Ve)):(w(),B("img",Ke)),_e])])):h("",!0)])]),I("div",$e,N(" "==fa.value.title||null==fa.value.title?"匿名":fa.value.title),1),I("div",ea,[m.value?(w(),B("img",aa)):(w(),B("img",ta)),la]),I("div",sa,[(w(!0),B(F,null,T(fa.value.introList,(e=>(w(),B("span",{key:e,style:{"line-height":"10px","margin-bottom":"10px"}},N(e),1)))),128))])]),I("audio",{class:"video",type:"audio/mp3",id:"video",src:ya.value,onTimeupdate:c[5]||(c[5]=(...e)=>n.audioTimeUpdate&&n.audioTimeUpdate(...e))},null,40,ia),I("img",{onClick:c[6]||(c[6]=e=>fa.value=""),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAABMCAYAAAAIuWXoAAAAAXNSR0IArs4c6QAABQ1JREFUaEPtWk1vG1UUPfeNY49NUZO4iWfspEmkthsECqF2WMT5Eez6A+APIBYVa4SEBHvEHrHiRyBLoRSJAEIs0kUa2XG+nZbEX/W8h+4bT+xGiT3xjAuLGSlK4vl4Z+49975zry/BPcTK2tr7xivxCEARCu8QQXTPhftLKQUSW0qqH9okf/z9l9IzAJIYxHJ+/cMJgS8BtUygW/wZEZ8K/2Ac3YVPHag/OqLz+ebGxhNaXl6/H0vgWwNYB8FwrwM08JDBuM92n9t9TUeSKjkx9Snl88XHJOgzAqakAhqNOlqtFpSSfYCCWsZdloEIQUgkTCSTSTY7FHAmSX1H+UJxk4jeZXecn5+j2WyMxRreq3iWTqXe0mCgIBWpX6mwWjwHKMUX1mo1OE7HNV3IbukHwtaOxSZw+/Zkdx31DxVW1xtEZPLJk5MTSCkhxHgCxgMjpdIumpqa9l64yUDqRJTkkycnxxdkCsqKQfd3IwfT02kPSOP/CaRWO4Zntv/UIhEQ4HWORBaJLNLdWa/NIxFHIo5EHLm0cQ3dfaOoGSVqPLMGkZKBXMM3s4zsBzCqpBwZCN/ImlYIA+l0RgvsWu1If0Ykbiy0AwCRLPtxZ8bCwtIDSMdBpbyNvb2yjgfDMG4k6AIBUYqQTs9gYfE+4vE4mq0mqpUd7O9XtOBma/k9AgBh13CpCMxmsrDtBSRME+1WE7sXYLiK81eGjAykWw1rYc0Hg8nlFhCPJ3R5Wq3uYH/PtYwfzgQE4sKR0gFAyFhZZLMMxkS7zZZ53uUMDeVMKEAYjOMwGCCTySGbW9BFtQvGH2dCA9LLKeymHLLZu0gkkhdgDg52Naeu40xoQHo1LLcuCLOzFrJzi5ozr9pt7O4yZ8qa3MyZy0foQHqcAWZmOZrmYZoptNsNPNv6G2dnL6/sLIwFCEdKp9PRL52bW4Rlz2uy7lXLqFS2oXTl/7pVxgKEH8opnxPa/NwSZjJZCMPAwV4Z5fK2jrLLyS50IC5pHc0Dy87BsuZ1OLdaDTzf3sKLFzVtqcs7dahA+kFkdIJbxIROcG5OOTzc7YIYI1m98OWVbDsHO+tGDJO0XNnB4X611z28ogUWikUUd98cV5f0Z1d2B4ft4UH1ohl4nXgKDKRfHNnWHKxsjxOVyg6ODr1ENngnDgTkghMg2DaD8Da9hk7tB8wJ3UcdvgMHAOLJRAHLysGy7yKeSGgZUGFidlO6n52XeTUyEJaEXJyl07NYXHqAiYk4ms16Nzo8TviXjKEAYYXGIpqz5hET84bqLJBF3D3FbQRPTt2BkhKnp8cDd9hAfdZBlZ6r5Fmhud8u8J+jtspHdo33dt4DrkrbfoVzYNfcZKFh1wa2yLAF/J6PgLwRqejXHf3XRa6JXDOMNxFHIo5EHBlmgYgjwywU5RG/HNFjG9y6dMXzmxjbcNdwxza4MlQ8tlF8CdDb7LfTUx5k4X7HuAdZFIxYDJO9QZY65VeLTwj0kEd7eL6oXq+PcbTH62ALpJIpJFN6kIcb/X/Sw0LxG0H0MRFusXsajYZutvTqmGEx4P+8Z2nTNGGaSa+TVFPAV7SysvaBERNfE2GNAEOXUN4MmNvz8b/SgCu9Z7otT34m/ygHkD91hPMJ/2fk8+urEOoLAt5ToEnCmKby3MW5SpSCcAaoTSk7j58+3fjZe11RKKzdU0p8pAiPCOoeBfmubKBlIEHqL4NQisXU96VS6Tfmyb/Wx9IEdYHImwAAAABJRU5ErkJggg==",class:"text-xl text-[#fff] text-center icon"})])):h("",!0)])])])])]))}}),[["__scopeId","data-v-c2275d22"]]);export{oa as default};
