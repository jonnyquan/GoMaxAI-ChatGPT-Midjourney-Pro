import{_ as e,a,b as t,c as l,d as s,e as i,f as r,g as o,h as n,i as c,j as u,k as v,l as d,m as g,n as m}from"../more/more.669e3c57.js";import{_ as p}from"../hide/hide.ba522efb.js";import{e as A,ao as y,R as k,j as x,S as f,a9 as C,a8 as b,r as E,A as h,O as B,a6 as F,P as I,Z as T,_ as N,$ as U,U as Q,X as w,at as D,N as L,aa as S,aR as j,bD as z,a1 as Y,a2 as W,a3 as M}from"../main-ddc3955a.js";import{q as O,c as Z,m as H,b as G,d as R}from"./music.c8d735e7.js";import{C as J}from"../index/index.a5c7f38c.js";const X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAAAXNSR0IArs4c6QAABAhJREFUWEfFlk1s1EUYxp9n/ru1gFWJaEuCJBoiHtAQqylN6barwYNGDI27bVUMGo4eSENo1YM9GPlQawBvmog0IHSDH+nBGD523aK0FrzAQUw0Ek1NFWPSrWzL7n8e/W/dtrTdbrfa7RwnM/P+3ud9Z+YhcozeqmdvGS65vqoEfFA0awG7XIQL8LI16QtUyQ/B2EdXZ9jOaH3z7dTo3bK+SsfgLgk3A0xY6TtZ9Y+kh399vO/zoZlCc+pkVyjkrBjAGr/DJoENIsoJ3QTAB0EiRykMgfjCwnaKuBiMRYa9c85XPrk0uWTZ/dbR8wSCAFYIKiFggEwyIxCuCOgG7NFoPHKlHbCTGW4A6qoOLakoZUCWrxJaD7Asl4IAvMMHIB5yHfc9/AU4S9kMcTuIewCU5trrJSTiW0mvDabUHz4XSWbXjgN5MCv9ZquIHRDWgpms8g4BgxBOgCoF+ASB8rybxha4An60Vh1l15KHH7rQfc2bzAB5ZbrzN/OYAQ4CmeymlTJPkCQgA9ArbUFD0E+uxc6rFfo0HIm4FMB4oGk9qHcpVYMsFKYggOmLJYHnHGNfrIlGvufZms1lrlPaAnIn4d2G4g9Bw1Z4Ozma6GDPxsZ74eBDSVXFVyeb/D/tLV68DjQxWht+zjF8E0BF8bWZiDh2OWwLvww0vg7oJZK3LiYQpD+t8BbjgcaDgLaBXJT+GRdBSljhEON14QMAtuV5BBdePA8I+ICxuvAuim0kli981NwRBP1hrdp5qi60yS++T3L14gLhZ9fyBUbrG1ZRvgMG3AzAWRQoSZY87aZS23m+stKfKFsTNtI7BO9YDCCvXJJekfn9cOabiNc2rLTGv5/AFno2o4hDQJrAJybNHRu/OjaQAfL+s55HnnlYabcDxAYWqXTyPJLQS5/TUnvmaD8BTdgPhJzygFNFaJ+KAOXBUOgVuGsw7vaFEXHH7Ue2Qu2ACQaaNtBon7RwSmVgiF5Z7orGj/VOdo3TrMY41AIpJSgNsQ+YDjNNoalKge4egNUE/5dGH4PRaceY9lOx499M9dM5gf5tdBOrDz1ghDcAbvqvUBkY6CStbTvTc+LSTDCzAmVvXzwQWgdqL2DmDTUGY09CbA3EI5e825TrZclrV8cs7lPrQP+8oCZgUq2B+GezwuRVaNzPZaA8pbCH4KNzNvNSUlQUQls+ZbKx8ip0I9SW+wB/K4inCS6b7UEXlCBxxEVyf32s+/JsZZp8zpyBspvO1oRWuz7TSmhrbg/leRt2iqndwdjHvxTyExUM5B3uOQQj/8szQykhsNPStzsYO1IQzJx7aKYMPSjHK59lmNBtIiykIRh2uUjtLVSZgnsoJ5T8zRLqATsC8Gtr0sfnC+PF+BvCdM4zBk9VhgAAAABJRU5ErkJggg==",V="data:image/png;base64,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",q=e=>(Y("data-v-c2275d22"),e=e(),W(),e),P={class:"bg-[#ffffff] dark:bg-[#24252B] musicBody"},K={class:"mainBox"},_={class:"bg-[#F8F9F9] dark:bg-[#24252B]"},$={class:"contentBox bg-[#F8F9F9] dark:bg-[#15171A]"},ee={style:{display:"flex"}},ae={style:{display:"flex","flex-direction":"column",overflow:"hidden",height:"calc(100vh - 73px)",width:"100%"}},te={class:"tabBox"},le=["onClick"],se={class:"contextBox"},ie={class:"itemTops"},re={class:"topImg"},oe=["src"],ne={class:"topNums"},ce={class:"topTitle"},ue={class:"title text-[#1E1F1F] dark:text-[#ffffff]"},ve={style:{display:"flex","align-items":"center",margin:"10px 0"}},de={key:0,src:d,style:{"margin-right":"4px"}},ge={key:1,src:g,style:{"margin-right":"4px"}},me=q((()=>I("span",{class:"text-[#1E1F1F] dark:text-[#9A9EB5] text-[12px]",style:{"font-weight":"550"}},"Suno",-1))),pe={class:"intro text-[#8B8C8C] dark:text-[#595C6E]"},Ae=["onClick"],ye=["onClick"],ke={class:"itemTop"},xe={class:"topImg"},fe=["src"],Ce={class:"topTitle"},be={class:"title text-[#1E1F1F] dark:text-[#ffffff]"},Ee={style:{display:"flex","align-items":"center",margin:"10px 0"}},he={key:0,src:d,style:{"margin-right":"4px"}},Be={key:1,src:g,style:{"margin-right":"4px"}},Fe=q((()=>I("span",{class:"text-[#1E1F1F] dark:text-[#9A9EB5] text-[12px]",style:{"font-weight":"550"}},"Suno",-1))),Ie={class:"intro text-[#8B8C8C] dark:text-[#595C6E]"},Te=["onClick"],Ne=["onClick"],Ue={key:0,class:"dark:bg-[#111113] bg-[#FFF] text-[#8B8C8C] dark:text-[#6C6E79] border-t border-[#E8E8E8] dark:border-[#292A2E]",style:{padding:"10px 30px","box-sizing":"border-box"}},Qe={class:"control dark:bg-[#303137] bg-[#FFF] text-[#8B8C8C] dark:text-[#6C6E79] border-t border-[#E8E8E8] dark:border-[#292A2E]"},we={style:{display:"flex","align-items":"center"}},De={style:{display:"flex","align-items":"center",flex:"1","padding-right":"20px"}},Le=["src"],Se={style:{width:"100%"}},je={style:{display:"flex","align-items":"center","justify-content":"space-between"}},ze={class:"text-[#1E1F1F] dark:text-[#EEEEF0] text-[15px]"},Ye={class:"text-[#8B8C8C] dark:text-[#6C6E79] text-[12px]"},We={style:{"margin-top":"4px"}},Me=["src"],Oe={key:0,class:"videoBox"},Ze={class:"bg-[#F0F0F0] dark:bg-[#222325] musicInfoDialog"},He={style:{position:"relative"}},Ge=["src"],Re={class:"videoLike"},Je=q((()=>I("img",{src:m},null,-1))),Xe={key:0,class:"operationBoxDown bg-[#fff] dark:bg-[#111113] border border-[#E8E8E8] dark:border-[#292A2E]"},Ve={key:0,src:n,style:{"margin-right":"5px"}},qe={key:1,src:c,style:{"margin-right":"5px"}},Pe=q((()=>I("div",null,"下载视频",-1))),Ke={key:0,src:u,style:{"margin-right":"5px"}},_e={key:1,src:v,style:{"margin-right":"5px"}},$e=q((()=>I("div",null,"下载音频",-1))),ea={class:"text-[#1E1F1F] dark:text-[#EEEEF0] text-[17px]",style:{"margin-top":"12px","font-weight":"550"}},aa={style:{display:"flex","align-items":"center","justify-content":"center",margin:"12px 0"}},ta={key:0,src:d,style:{"margin-right":"4px"}},la={key:1,src:g,style:{"margin-right":"4px"}},sa=q((()=>I("span",{class:"text-[#1E1F1F] dark:text-[#EEEEF0] text-[12px]",style:{"font-weight":"550"}},"Suno",-1))),ia={class:"introList"},ra=["src"],oa=M(A({__name:"musicSquare",setup(n){const c=y(),u=k(),v=x((()=>u.isLogin));let d=null;f();const g=C(),m=x((()=>"dark"===g.theme));b();const A=E([{name:"最新歌曲",key:0},{name:"流行趋势",key:1}]),Y=E(0),W=E(1),M=E(),q=E(""),oa=E(""),na=E("00:00"),ca=E("00:00"),ua=E(""),va=E(""),da=E(0),ga=E(null);function ma(){pa.value=[];let e={size:50,page:W.value,modelType:"music",order:oa.value};H(e).then((e=>{M.value=e.data.count,pa.value=e.data.records,Na()})).catch((e=>{Na()}))}const pa=E([]);function Aa(){d||(d=c.loading("数据加载中",{duration:0}));let e={size:50,modelType:"music",page:W.value,order:oa.value};H(e).then((e=>{M.value=e.data.count,pa.value=e.data.records,Na()})).catch((e=>{Na()}))}Aa(),O({modelType:"music"}).then((e=>{0!=e.data.length?localStorage.setItem("musicGroupId",e.data[0].id):0==e.data.length&&Z().then((e=>{localStorage.setItem("musicGroupId",e.data.id)}))}));const ya=E(1);function ka(e){console.log(e);let a={relateId:e.id,action:"agree",relateType:"music"};0!=ya.value&&(ya.value=0,G(a).then((a=>{null!=e.agree?pa.value.forEach((a=>{a.id==e.id&&(a.agree=null,a.agreeNum--)})):pa.value.forEach((a=>{a.id==e.id&&(a.agree="agree",a.agreeNum++)})),ya.value=1})))}const xa=E(""),fa=E(!1),Ca=E(""),ba=E(0);h((()=>Ca.value),((e="")=>{Ea()}));const Ea=()=>{const e=document.getElementById("toolbar-box");e.style.right=Ca.value?"330px":"20px",e.style.bottom=Ca.value?"126px":"25px"};function ha(){const e=ga.value;fa.value?(fa.value=!1,e.pause()):(fa.value=!0,e.play())}function Ba(){ba.value-1<0?(ba.value=pa.value.length-1,Ca.value=pa.value[ba.value]):(ba.value=ba.value-1,Ca.value=pa.value[ba.value]);const e=setTimeout((()=>{fa.value=!1,ha(),clearTimeout(e)}))}function Fa(){ba.value+1>pa.value.length-1?(ba.value=0,Ca.value=pa.value[ba.value]):(ba.value=ba.value+1,Ca.value=pa.value[ba.value]);const e=setTimeout((()=>{fa.value=!1,ha(),clearTimeout(e)}))}function Ia(e,a){if(!v.value)return void u.setLoginDialog(!0);R({id:e.id,type:"music"}),Aa(),e.introList=e.intro.split("\n"),Ca.value=e,ba.value=a;const t=setTimeout((()=>{fa.value=!1,ha(),clearTimeout(t)}))}const Ta=E(!1);function Na(){d&&(d.destroy(),d=null)}function Ua(e,a){if(!v.value)return void u.setLoginDialog(!0);let t="/api";if(d||(d=c.loading("下载中，请稍等",{duration:0})),"mp4"==a){Qa();let a=e.mp4.split("/").pop();D.get(t+"/file/down",{responseType:"blob",params:{url:e.mp4}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),l=document.createElement("a");l.href=t,l.setAttribute("download",a),l.click(),Na(),c.success("下载成功")})).catch((e=>{c.error("下载失败"),Na()}))}else if("mp3"==a){Qa();let a=e.mp3.split("/").pop();D.get(t+"/file/down",{responseType:"blob",params:{url:e.mp3}}).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),l=document.createElement("a");l.href=t,l.setAttribute("download",a),l.click(),Na(),c.success("下载成功")})).catch((e=>{c.error("下载失败"),Na()}))}}function Qa(){Ca.value&&(Ca.value.operation=!1),Ta.value=!1,pa.value.forEach((e=>{e.operation=!1}))}const wa=E(null);function Da(){const e=wa.value;if(e.scrollTop+e.clientHeight+1>=e.scrollHeight){if(30*W.value>=M.value)return;W.value++,Aa()}}function La(){ua.value=ga.value.duration,va.value=ga.value.currentTime,ca.value=ja(parseInt(ga.value.currentTime)),na.value=ja(parseInt(ga.value.duration))}function Sa(e){ca.value=ja(parseInt(e.target.currentTime)),va.value=e.target.currentTime,function(){let e=va.value/ua.value*100;da.value=e;const a=ga.value;da.value>=100&&(fa.value=!1,a.pause(),va.value=0,da.value=0,ca.value="00:00")}()}function ja(e){let a=parseInt(e/60),t=parseInt(e%60);return a=a>=10?a:"0"+a,t=t>=10?t:"0"+t,a+":"+t}return(n,c)=>(L(),B("div",P,[Ta.value?(L(),B("div",{key:0,class:"mask",onClick:Qa})):F("",!0),I("div",K,[I("div",_,[I("div",$,[I("div",ee,[I("div",ae,[I("div",te,[(L(!0),B(T,null,N(A.value,((e,a)=>(L(),B("div",{class:S([Y.value==a?"selected_type_tab":"type_tab","tabItem dark:text-[#EEEEF0] text-[#1E1F1F] text-[12px]"]),onClick:e=>{return t=a,Y.value=t,W.value=1,void(0==t?(q.value="",oa.value="",ma()):1==t&&(oa.value="agreeNum",ma()));var t},key:e.key},U(e.name),11,le)))),128))]),I("div",se,[I("div",{class:"content contents",ref_key:"container",ref:wa,onScroll:Da},[(L(!0),B(T,null,N(pa.value.slice(0,3),((e,a)=>(L(),B("div",{class:"contentItem bg-[#F0F0F0] dark:bg-[#222325] hot",key:e.chatId},[I("div",ie,[I("div",re,[I("img",{class:"bgImg",src:e.cover,alt:"加载失败"},null,8,oe),I("span",null,U(e.model||"版本标识"),1),I("span",ne,"TOP"+U(a+1),1),Q(w(j),{onClick:t=>Ia(e,a),style:{"font-size":"30px"},icon:"gridicons:play",class:"playImg"},null,8,["onClick"])]),I("div",ce,[I("div",ue,U(" "==e.title||null==e.title?"匿名":e.title),1),I("div",ve,[m.value?(L(),B("img",de)):(L(),B("img",ge)),me]),I("div",pe,[I("span",null,U(e.intro),1),"agree"==e.agree?(L(),B("img",{key:0,onClick:a=>ka(e),src:X},null,8,Ae)):(L(),B("img",{key:1,onClick:a=>ka(e),src:V},null,8,ye))])])])])))),128))],544),pa.value&&pa.value.length>2?(L(),B("div",{key:0,class:"content",ref_key:"container",ref:wa,onScroll:Da},[(L(!0),B(T,null,N(pa.value.slice(3),((e,a)=>(L(),B("div",{class:"contentItem bg-[#F0F0F0] dark:bg-[#222325]",key:e.chatId},[I("div",ke,[I("div",xe,[I("img",{class:"bgImg",src:e.cover,alt:"加载失败"},null,8,fe),I("span",null,U(e.model||"版本标识"),1),Q(w(j),{onClick:t=>Ia(e,a),style:{"font-size":"30px"},icon:"gridicons:play",class:"playImg"},null,8,["onClick"])]),I("div",Ce,[I("div",be,U(" "==e.title||null==e.title?"匿名":e.title),1),I("div",Ee,[m.value?(L(),B("img",he)):(L(),B("img",Be)),Fe]),I("div",Ie,[I("span",null,U(e.intro),1),"agree"==e.agree?(L(),B("img",{key:0,onClick:a=>ka(e),src:X},null,8,Te)):(L(),B("img",{key:1,onClick:a=>ka(e),src:V},null,8,Ne))])])]),F("",!0)])))),128))],544)):F("",!0)]),Ca.value?(L(),B("div",Ue,[I("div",Qe,[I("div",we,[I("div",null,[m.value?(L(),B("img",{key:0,class:"controlItem",style:{cursor:"pointer"},src:e,alt:"",onClick:Ba})):(L(),B("img",{key:1,class:"controlItem",style:{cursor:"pointer"},src:a,alt:"",onClick:Ba}))]),I("div",null,[fa.value&&m.value?(L(),B("img",{key:0,class:"controlItem",src:t,style:{margin:"0 30px",cursor:"pointer"},alt:"",onClick:ha})):F("",!0),fa.value&&0==m.value?(L(),B("img",{key:1,class:"controlItem",src:l,style:{margin:"0 30px",cursor:"pointer"},alt:"",onClick:ha})):F("",!0)]),I("div",null,[!fa.value&&m.value?(L(),B("img",{key:0,class:"controlItem",src:s,style:{margin:"0 30px",cursor:"pointer"},alt:"",onClick:ha})):F("",!0),fa.value||0!=m.value?F("",!0):(L(),B("img",{key:1,class:"controlItem",src:i,style:{margin:"0 30px",cursor:"pointer"},alt:"",onClick:ha}))]),I("div",null,[m.value?(L(),B("img",{key:0,class:"controlItem",style:{cursor:"pointer"},src:r,alt:"",onClick:Fa})):(L(),B("img",{key:1,class:"controlItem",style:{cursor:"pointer"},src:o,alt:"",onClick:Fa}))])]),I("div",De,[I("img",{src:Ca.value.cover,style:{width:"48px",height:"48px","margin-left":"30px","margin-right":"12px"}},null,8,Le),I("div",Se,[I("div",je,[I("div",ze,U(" "==Ca.value.title||null==Ca.value.title?"匿名":Ca.value.title),1),I("div",Ye,U(ca.value)+" / "+U(na.value),1)]),I("div",We,[I("audio",{id:"audio",src:Ca.value.mp3,onCanplay:La,ref_key:"audioRef",ref:ga,onTimeupdate:Sa},null,40,Me),Q(w(z),{style:{width:"100%"},type:"line",status:"success","show-indicator":!1,percentage:da.value},null,8,["percentage"])])])])])])):F("",!0),Q(J,{class:"end"})]),Ca.value?(L(),B("div",Oe,[I("div",Ze,[I("div",He,[I("img",{src:Ca.value.cover,style:{width:"200px",height:"200px","margin-left":"50%",transform:"translate(-50%)"}},null,8,Ge),I("div",Re,["agree"==Ca.value.agree?(L(),B("img",{key:0,onClick:c[0]||(c[0]=e=>ka(Ca.value)),src:X})):(L(),B("img",{key:1,onClick:c[1]||(c[1]=e=>ka(Ca.value)),src:V}))]),I("div",{class:"videoDown",onClick:c[4]||(c[4]=()=>{Ca.value.operation=!0,Ta.value=!0})},[Je,Ca.value.operation?(L(),B("div",Xe,[I("div",{class:"operationItem",style:{display:"flex"},onClick:c[2]||(c[2]=e=>Ua(Ca.value,"mp4"))},[m.value?(L(),B("img",Ve)):(L(),B("img",qe)),Pe]),I("div",{class:"operationItem",style:{display:"flex"},onClick:c[3]||(c[3]=e=>Ua(Ca.value,"mp3"))},[m.value?(L(),B("img",Ke)):(L(),B("img",_e)),$e])])):F("",!0)])]),I("div",ea,U(" "==Ca.value.title||null==Ca.value.title?"匿名":Ca.value.title),1),I("div",aa,[m.value?(L(),B("img",ta)):(L(),B("img",la)),sa]),I("div",ia,[(L(!0),B(T,null,N(Ca.value.introList,(e=>(L(),B("span",{key:e,style:{"line-height":"10px","margin-bottom":"10px"}},U(e),1)))),128))])]),I("audio",{class:"video",type:"audio/mp3",id:"video",src:xa.value,onTimeupdate:c[5]||(c[5]=(...e)=>n.audioTimeUpdate&&n.audioTimeUpdate(...e))},null,40,ra),I("img",{onClick:c[6]||(c[6]=e=>Ca.value=""),src:p,class:"text-xl text-[#fff] text-center icon"})])):F("",!0)])])])])]))}}),[["__scopeId","data-v-c2275d22"]]);export{oa as default};
