import{d as e,e as i,cO as n,f as o,i as t,j as s,C as a,x as l,cU as r,h as c,cS as v,d5 as p,aS as d,cD as u,d6 as g,m as f,n as h,q as m,B as P,r as x,p as C,v as k,d7 as T,am as b,d8 as y,d9 as z,cy as O}from"../main-b128e95b.js";const S=e("n-popconfirm"),j={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},w=p(j),N=i({name:"NPopconfirmPanel",props:j,setup(e){const{localeRef:i}=n("Popconfirm"),{inlineThemeDisabled:r}=o(),{mergedClsPrefixRef:c,mergedThemeRef:v,props:p}=t(S),d=s((()=>{const{common:{cubicBezierEaseInOut:e},self:{fontSize:i,iconSize:n,iconColor:o}}=v.value;return{"--n-bezier":e,"--n-font-size":i,"--n-icon-size":n,"--n-icon-color":o}})),u=r?a("popconfirm-panel",void 0,d,p):void 0;return Object.assign(Object.assign({},n("Popconfirm")),{mergedClsPrefix:c,cssVars:r?void 0:d,localizedPositiveText:s((()=>e.positiveText||i.value.positiveText)),localizedNegativeText:s((()=>e.negativeText||i.value.negativeText)),positiveButtonProps:l(p,"positiveButtonProps"),negativeButtonProps:l(p,"negativeButtonProps"),handlePositiveClick(i){e.onPositiveClick(i)},handleNegativeClick(i){e.onNegativeClick(i)},themeClass:null==u?void 0:u.themeClass,onRender:null==u?void 0:u.onRender})},render(){var e;const{mergedClsPrefix:i,showIcon:n,$slots:o}=this,t=r(o.action,(()=>null===this.negativeText&&null===this.positiveText?[]:[null!==this.negativeText&&c(d,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),null!==this.positiveText&&c(d,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]));return null===(e=this.onRender)||void 0===e||e.call(this),c("div",{class:[`${i}-popconfirm__panel`,this.themeClass],style:this.cssVars},v(o.default,(e=>n||e?c("div",{class:`${i}-popconfirm__body`},n?c("div",{class:`${i}-popconfirm__icon`},r(o.icon,(()=>[c(u,{clsPrefix:i},{default:()=>c(g,null)})]))):null,e):null)),t?c("div",{class:[`${i}-popconfirm__action`]},t):null)}}),B=f("popconfirm",[h("body","\n font-size: var(--n-font-size);\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n position: relative;\n ",[h("icon","\n display: flex;\n font-size: var(--n-icon-size);\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n margin: 0 8px 0 0;\n ")]),h("action","\n display: flex;\n justify-content: flex-end;\n ",[m("&:not(:first-child)","margin-top: 8px"),f("button",[m("&:not(:last-child)","margin-right: 8px;")])])]),_=i({name:"Popconfirm",props:Object.assign(Object.assign(Object.assign({},P.props),y),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),__popover__:!0,setup(e){const{mergedClsPrefixRef:i}=o(),n=P("Popconfirm","-popconfirm",B,z,e,i),t=x(null);C(S,{mergedThemeRef:n,mergedClsPrefixRef:i,props:e});return{setShow(e){var i;null===(i=t.value)||void 0===i||i.setShow(e)},syncPosition(){var e;null===(e=t.value)||void 0===e||e.syncPosition()},mergedTheme:n,popoverInstRef:t,handlePositiveClick:function(i){var n;if(!(null===(n=t.value)||void 0===n?void 0:n.getMergedShow()))return;const{onPositiveClick:o,"onUpdate:show":s}=e;Promise.resolve(!o||o(i)).then((e=>{var i;!1!==e&&(null===(i=t.value)||void 0===i||i.setShow(!1),s&&O(s,!1))}))},handleNegativeClick:function(i){var n;if(!(null===(n=t.value)||void 0===n?void 0:n.getMergedShow()))return;const{onNegativeClick:o,"onUpdate:show":s}=e;Promise.resolve(!o||o(i)).then((e=>{var i;!1!==e&&(null===(i=t.value)||void 0===i||i.setShow(!1),s&&O(s,!1))}))}}},render(){const{$slots:e,$props:i,mergedTheme:n}=this;return c(b,T(i,w,{theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const n=k(i,w);return c(N,Object.assign(Object.assign({},n),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{_ as N};
