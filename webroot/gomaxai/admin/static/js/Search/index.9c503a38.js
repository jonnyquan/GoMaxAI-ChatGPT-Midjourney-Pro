
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as e,l as a,a as l,af as t,B as n,r as s,ag as u,C as i,D as o,x as r,N as c,E as d,ah as v,j as p,o as f,c as h,b as m,n as g,f as b,g as y,e as _,O as k,m as w,h as z,t as S,K as T,W as C,X as E,H,y as j,J as x,_ as R}from"../main-4d5ea9bc.js";const D={class:"container"},K={key:0,class:"tips"},L={class:"tip"},V={class:"tip"},B={class:"tip"},I={class:"tip"},M=["onClick","onMouseover"],O={class:"info"},U={class:"title"},A={class:"breadcrumb"},J={class:"path"},N=e({name:"Search"}),W=R(e({...N,setup(e){const R=a(),N=l(),W=t(),X=n(),q=s(!1),F=s(""),G=s([]),P=s(-1),Q=s(),Y=s(),Z=s([]);function $(e){return Z.value.push(e)}u((()=>{Z.value=[]}));const ee=i((()=>{let e=[];return e=G.value.filter((e=>{let a=!1;return e.title&&("function"==typeof e.title?e.title().includes(F.value)&&(a=!0):e.title.includes(F.value)&&(a=!0)),e.path.includes(F.value)&&(a=!0),e.breadcrumb.some((e=>{let a=!1;return e&&("function"==typeof e?e().includes(F.value)&&(a=!0):e.includes(F.value)&&(a=!0)),a}))&&(a=!0),a})),e}));function ae(e,a,l,t){e.forEach((e=>{var n,s,u,i,o,r,c;if(!1!==(null==(n=e.meta)?void 0:n.sidebar)){const n=v(t)||[];e.children&&function(e){var a;let l=!0;return(null==(a=e.children)?void 0:a.every((e=>{var a;return!1===(null==(a=e.meta)?void 0:a.sidebar)})))&&(l=!1),l}(e)?(n.push(null==(s=e.meta)?void 0:s.title),ae(e.children,a?[a,e.path].join("/"):e.path,(null==(u=e.meta)?void 0:u.icon)??l,n)):(n.push(null==(i=e.meta)?void 0:i.title),G.value.push({path:a?[a,e.path].join("/"):e.path,icon:(null==(o=e.meta)?void 0:o.icon)??l,title:null==(r=e.meta)?void 0:r.title,link:null==(c=e.meta)?void 0:c.link,breadcrumb:n}))}}))}function le(e,a,l){e.forEach((e=>{var t,n,s,u,i;const o=v(l)||[];e.children&&e.children.length>0?(o.push(null==(t=e.meta)?void 0:t.title),le(e.children,(null==(n=e.meta)?void 0:n.icon)??a,o)):(o.push(null==(s=e.meta)?void 0:s.title),G.value.push({icon:(null==(u=e.meta)?void 0:u.icon)??a,title:null==(i=e.meta)?void 0:i.title,path:e.path,breadcrumb:o}))}))}function te(){ee.value.length&&(P.value-=1,P.value<0&&(P.value=ee.value.length-1),ue())}function ne(){ee.value.length&&(P.value+=1,P.value>ee.value.length-1&&(P.value=0),ue())}function se(){-1!==P.value&&Z.value[P.value].click()}function ue(){let e=0;if(-1!==P.value){e=Y.value.scrollTop;const a=Z.value[P.value].offsetTop,l=Z.value[P.value].clientHeight,t=Y.value.scrollTop,n=Y.value.clientHeight;a+l>t+n?e=a+l-n:a<=t&&(e=a)}Y.value.scrollTo({top:e})}return o((()=>q.value),(e=>{e?(document.body.classList.add("hidden"),Y.value.scrollTop=0,d("up",te),d("down",ne),d("enter",se),setTimeout((()=>{Q.value.focus()}),500)):(document.body.classList.remove("hidden"),d.unbind("up",te),d.unbind("down",ne),d.unbind("enter",se),setTimeout((()=>{F.value="",P.value=-1}),500))})),o((()=>ee.value),(()=>{P.value=-1,Z.value=[],ue()})),r((()=>{c.on("global-search-toggle",(()=>{q.value=!q.value})),d("alt+s",(e=>{N.settings.navSearch.enable&&N.settings.navSearch.enableHotkeys&&(e.preventDefault(),q.value=!0)})),d("esc",(e=>{N.settings.navSearch.enable&&N.settings.navSearch.enableHotkeys&&(e.preventDefault(),q.value=!1)})),"filesystem"!==N.settings.app.routeBaseOn?W.routes.forEach((e=>{e.children&&ae(e.children)})):X.menus.forEach((e=>{le(e.children)}))})),(e,a)=>{const l=j,t=p("el-icon"),n=p("el-input"),s=p("el-tag");return f(),h("div",{id:"search",class:H({searching:_(q)}),onClick:a[3]||(a[3]=e=>_(q)&&_(c).emit("global-search-toggle"))},[m("div",D,[m("div",{class:"search-box",onClick:a[2]||(a[2]=g((()=>{}),["stop"]))},[b(n,{ref_key:"searchInputRef",ref:Q,modelValue:_(F),"onUpdate:modelValue":a[0]||(a[0]=e=>k(F)?F.value=e:null),placeholder:"搜索页面，支持标题、URL模糊查询",clearable:"",onKeydown:[a[1]||(a[1]=w((e=>_(c).emit("global-search-toggle")),["esc"])),w(g(te,["prevent"]),["up"]),w(g(ne,["prevent"]),["down"]),w(g(se,["prevent"]),["enter"])]},{prefix:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"ep:search"})])),_:1})])),_:1},8,["modelValue","onKeydown"]),"pc"===_(N).mode?(f(),h("div",K,[m("div",L,[b(s,{type:"info",size:"large"},{default:y((()=>[z(S("mac"===_(N).os?"⌥":"Alt")+" + S ",1)])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[z(" 唤醒搜索面板 ")])),_:1})]),m("div",V,[b(s,{type:"info",size:"large"},{default:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"search-up"})])),_:1})])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"search-down"})])),_:1})])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[z(" 切换搜索结果 ")])),_:1})]),m("div",B,[b(s,{type:"info",size:"large"},{default:y((()=>[b(t,null,{default:y((()=>[b(l,{name:"search-enter"})])),_:1})])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[z(" 访问页面 ")])),_:1})]),m("div",I,[b(s,{type:"info",size:"large"},{default:y((()=>[z(" ESC ")])),_:1}),b(s,{type:"info",size:"large"},{default:y((()=>[z(" 退出 ")])),_:1})])])):T("",!0)]),m("div",{ref_key:"searchResultRef",ref:Y,class:"result"},[(f(!0),h(C,null,E(_(ee),((e,a)=>(f(),h("a",{key:e.path,ref_for:!0,ref:$,class:H(["item",{actived:a===_(P)}]),onClick:a=>{return l=e.path,void((t=e.link)?window.open(t,"_blank"):R.push(l));var l,t},onMouseover:e=>P.value=a},[b(t,{class:"icon"},{default:y((()=>[e.icon?(f(),x(l,{key:0,name:e.icon},null,8,["name"])):T("",!0)])),_:2},1024),m("div",O,[m("div",U,S(e.title??"[ 无标题 ]"),1),m("div",A,[(f(!0),h(C,null,E(e.breadcrumb,((e,a)=>(f(),h("span",{key:a},[z(S(e??"[ 无标题 ]")+" ",1),b(t,null,{default:y((()=>[b(l,{name:"ep:arrow-right"})])),_:1})])))),128))]),m("div",J,S(e.path),1)])],42,M)))),128))],512)])],2)}}}),[["__scopeId","data-v-7119310d"]]);export{W as default};
