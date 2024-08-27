import{e,r as t,i as n,cg as r,j as o,f as a,ch as i,y as s,A as l,l as c,ci as d,cj as u,p as h,F as v,G as m,h as p,ck as f,T as g,cl as b,cm as w,cn as y,co as x,cp as C,q as S,cq as k,m as z,s as $,n as M,cr as R,cs as B,B as P,w as T,x as F,ct as E,cu as A,C as D,cv as O,cw as H,cx as j,cy as U,cz as I,b as W,cA as _,a8 as L,ax as N,a9 as q,ao as X,cB as Y,R as V,br as G,N as K,ad as Z,W as J,P as Q,X as ee,O as te,U as ne,Z as re,_ as oe,aR as ae,a6 as ie,$ as se,aq as le,c3 as ce,c2 as de,aa as ue,H as he,K as ve}from"../main-cd5b7247.js";import{S as me}from"../index/index.7be392d9.js";const pe=e({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const v=t(!!e.show),p=t(null),f=n(r);let g=0,b="",w=null;const S=t(!1),k=t(!1),z=o((()=>"top"===e.placement||"bottom"===e.placement)),{mergedClsPrefixRef:$,mergedRtlRef:M}=a(e),R=i("Drawer",M,$),B=E,{doUpdateHeight:P,doUpdateWidth:T}=f;function F(t){var n,r;if(k.value)if(z.value){let r=(null===(n=p.value)||void 0===n?void 0:n.offsetHeight)||0;const o=g-t.clientY;r+="bottom"===e.placement?o:-o,r=(t=>{const{maxHeight:n}=e;if(n&&t>n)return n;const{minHeight:r}=e;return r&&t<r?r:t})(r),P(r),g=t.clientY}else{let n=(null===(r=p.value)||void 0===r?void 0:r.offsetWidth)||0;const o=g-t.clientX;n+="right"===e.placement?o:-o,n=(t=>{const{maxWidth:n}=e;if(n&&t>n)return n;const{minWidth:r}=e;return r&&t<r?r:t})(n),T(n),g=t.clientX}}function E(){k.value&&(g=0,k.value=!1,document.body.style.cursor=b,document.body.removeEventListener("mousemove",F),document.body.removeEventListener("mouseup",E),document.body.removeEventListener("mouseleave",B))}s((()=>{e.show&&(v.value=!0)})),l((()=>e.show),(e=>{e||E()})),c((()=>{E()}));const A=o((()=>{const{show:t}=e,n=[[m,t]];return e.showMask||n.push([d,e.onClickoutside,void 0,{capture:!0}]),n}));return u(o((()=>e.blockScroll&&v.value))),h(y,p),h(x,null),h(C,null),{bodyRef:p,rtlEnabled:R,mergedClsPrefix:f.mergedClsPrefixRef,isMounted:f.isMountedRef,mergedTheme:f.mergedThemeRef,displayed:v,transitionName:o((()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"}[e.placement]))),handleAfterLeave:function(){var t;v.value=!1,null===(t=e.onAfterLeave)||void 0===t||t.call(e)},bodyDirectives:A,handleMousedownResizeTrigger:e=>{k.value=!0,g=z.value?e.clientY:e.clientX,b=document.body.style.cursor,document.body.style.cursor=z.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",F),document.body.addEventListener("mouseleave",B),document.body.addEventListener("mouseup",E)},handleMouseenterResizeTrigger:()=>{null!==w&&(window.clearTimeout(w),w=null),k.value?S.value=!0:w=window.setTimeout((()=>{S.value=!0}),300)},handleMouseleaveResizeTrigger:()=>{null!==w&&(window.clearTimeout(w),w=null),S.value=!1},isDragging:k,isHoverOnResizeTrigger:S}},render(){const{$slots:e,mergedClsPrefix:t}=this;return"show"===this.displayDirective||this.displayed||this.show?v(p("div",{role:"none"},p(f,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>p(g,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>v(p("div",b(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?p("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?p("div",{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):p(w,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[m,"if"===this.displayDirective||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:fe,cubicBezierEaseOut:ge}=k;const{cubicBezierEaseIn:be,cubicBezierEaseOut:we}=k;const{cubicBezierEaseIn:ye,cubicBezierEaseOut:xe}=k;const{cubicBezierEaseIn:Ce,cubicBezierEaseOut:Se}=k;const ke=S([z("drawer","\n word-break: break-word;\n line-height: var(--n-line-height);\n position: absolute;\n pointer-events: all;\n box-shadow: var(--n-box-shadow);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n background-color: var(--n-color);\n color: var(--n-text-color);\n box-sizing: border-box;\n ",[function({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-right"}={}){return[S(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${fe}`}),S(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${ge}`}),S(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),S(`&.${n}-transition-enter-from`,{transform:"translateX(100%)"}),S(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),S(`&.${n}-transition-leave-to`,{transform:"translateX(100%)"})]}(),function({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-left"}={}){return[S(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${be}`}),S(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${we}`}),S(`&.${n}-transition-enter-to`,{transform:"translateX(0)"}),S(`&.${n}-transition-enter-from`,{transform:"translateX(-100%)"}),S(`&.${n}-transition-leave-from`,{transform:"translateX(0)"}),S(`&.${n}-transition-leave-to`,{transform:"translateX(-100%)"})]}(),function({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-top"}={}){return[S(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${ye}`}),S(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${xe}`}),S(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),S(`&.${n}-transition-enter-from`,{transform:"translateY(-100%)"}),S(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),S(`&.${n}-transition-leave-to`,{transform:"translateY(-100%)"})]}(),function({duration:e="0.3s",leaveDuration:t="0.2s",name:n="slide-in-from-bottom"}={}){return[S(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Ce}`}),S(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Se}`}),S(`&.${n}-transition-enter-to`,{transform:"translateY(0)"}),S(`&.${n}-transition-enter-from`,{transform:"translateY(100%)"}),S(`&.${n}-transition-leave-from`,{transform:"translateY(0)"}),S(`&.${n}-transition-leave-to`,{transform:"translateY(100%)"})]}(),$("unselectable","\n user-select: none; \n -webkit-user-select: none;\n "),$("native-scrollbar",[z("drawer-content-wrapper","\n overflow: auto;\n height: 100%;\n ")]),M("resize-trigger","\n position: absolute;\n background-color: #0000;\n transition: background-color .3s var(--n-bezier);\n ",[$("hover","\n background-color: var(--n-resize-trigger-color-hover);\n ")]),z("drawer-content-wrapper","\n box-sizing: border-box;\n "),z("drawer-content","\n height: 100%;\n display: flex;\n flex-direction: column;\n ",[$("native-scrollbar",[z("drawer-body-content-wrapper","\n height: 100%;\n overflow: auto;\n ")]),z("drawer-body","\n flex: 1 0 0;\n overflow: hidden;\n "),z("drawer-body-content-wrapper","\n box-sizing: border-box;\n padding: var(--n-body-padding);\n "),z("drawer-header","\n font-weight: var(--n-title-font-weight);\n line-height: 1;\n font-size: var(--n-title-font-size);\n color: var(--n-title-text-color);\n padding: var(--n-header-padding);\n transition: border .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-divider-color);\n border-bottom: var(--n-header-border-bottom);\n display: flex;\n justify-content: space-between;\n align-items: center;\n ",[M("close","\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n ")]),z("drawer-footer","\n display: flex;\n justify-content: flex-end;\n border-top: var(--n-footer-border-top);\n transition: border .3s var(--n-bezier);\n padding: var(--n-footer-padding);\n ")]),$("right-placement","\n top: 0;\n bottom: 0;\n right: 0;\n border-top-left-radius: var(--n-border-radius);\n border-bottom-left-radius: var(--n-border-radius);\n ",[M("resize-trigger","\n width: 3px;\n height: 100%;\n top: 0;\n left: 0;\n transform: translateX(-1.5px);\n cursor: ew-resize;\n ")]),$("left-placement","\n top: 0;\n bottom: 0;\n left: 0;\n border-top-right-radius: var(--n-border-radius);\n border-bottom-right-radius: var(--n-border-radius);\n ",[M("resize-trigger","\n width: 3px;\n height: 100%;\n top: 0;\n right: 0;\n transform: translateX(1.5px);\n cursor: ew-resize;\n ")]),$("top-placement","\n top: 0;\n left: 0;\n right: 0;\n border-bottom-left-radius: var(--n-border-radius);\n border-bottom-right-radius: var(--n-border-radius);\n ",[M("resize-trigger","\n width: 100%;\n height: 3px;\n bottom: 0;\n left: 0;\n transform: translateY(1.5px);\n cursor: ns-resize;\n ")]),$("bottom-placement","\n left: 0;\n bottom: 0;\n right: 0;\n border-top-left-radius: var(--n-border-radius);\n border-top-right-radius: var(--n-border-radius);\n ",[M("resize-trigger","\n width: 100%;\n height: 3px;\n top: 0;\n left: 0;\n transform: translateY(-1.5px);\n cursor: ns-resize;\n ")])]),S("body",[S(">",[z("drawer-container","\n position: fixed;\n ")])]),z("drawer-container","\n position: relative;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n pointer-events: none;\n ",[S("> *","\n pointer-events: all;\n ")]),z("drawer-mask","\n background-color: rgba(0, 0, 0, .3);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ",[$("invisible","\n background-color: rgba(0, 0, 0, 0)\n "),R({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),ze=e({name:"Drawer",inheritAttrs:!1,props:Object.assign(Object.assign({},P.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),setup(e){const{mergedClsPrefixRef:n,namespaceRef:i,inlineThemeDisabled:s}=a(e),l=B(),c=P("Drawer","-drawer",ke,j,e,n),d=t(e.defaultWidth),u=t(e.defaultHeight),v=T(F(e,"width"),d),m=T(F(e,"height"),u),p=o((()=>{const{placement:t}=e;return"top"===t||"bottom"===t?"":E(v.value)})),f=o((()=>{const{placement:t}=e;return"left"===t||"right"===t?"":E(m.value)})),g=o((()=>[{width:p.value,height:f.value},e.drawerStyle||""]));function b(t){const{onMaskClick:n,maskClosable:r}=e;r&&y(!1),n&&n(t)}const w=A();function y(t){const{onHide:n,onUpdateShow:r,"onUpdate:show":o}=e;r&&I(r,t),o&&I(o,t),n&&!t&&I(n,t)}h(r,{isMountedRef:l,mergedThemeRef:c,mergedClsPrefixRef:n,doUpdateShow:y,doUpdateHeight:t=>{const{onUpdateHeight:n,"onUpdate:width":r}=e;n&&I(n,t),r&&I(r,t),u.value=t},doUpdateWidth:t=>{const{onUpdateWidth:n,"onUpdate:width":r}=e;n&&I(n,t),r&&I(r,t),d.value=t}});const x=o((()=>{const{common:{cubicBezierEaseInOut:e,cubicBezierEaseIn:t,cubicBezierEaseOut:n},self:{color:r,textColor:o,boxShadow:a,lineHeight:i,headerPadding:s,footerPadding:l,borderRadius:d,bodyPadding:u,titleFontSize:h,titleTextColor:v,titleFontWeight:m,headerBorderBottom:p,footerBorderTop:f,closeIconColor:g,closeIconColorHover:b,closeIconColorPressed:w,closeColorHover:y,closeColorPressed:x,closeIconSize:C,closeSize:S,closeBorderRadius:k,resizableTriggerColorHover:z}}=c.value;return{"--n-line-height":i,"--n-color":r,"--n-border-radius":d,"--n-text-color":o,"--n-box-shadow":a,"--n-bezier":e,"--n-bezier-out":n,"--n-bezier-in":t,"--n-header-padding":s,"--n-body-padding":u,"--n-footer-padding":l,"--n-title-text-color":v,"--n-title-font-size":h,"--n-title-font-weight":m,"--n-header-border-bottom":p,"--n-footer-border-top":f,"--n-close-icon-color":g,"--n-close-icon-color-hover":b,"--n-close-icon-color-pressed":w,"--n-close-size":S,"--n-close-color-hover":y,"--n-close-color-pressed":x,"--n-close-icon-size":C,"--n-close-border-radius":k,"--n-resize-trigger-color-hover":z}})),C=s?D("drawer",void 0,x,e):void 0;return{mergedClsPrefix:n,namespace:i,mergedBodyStyle:g,handleOutsideClick:function(e){b(e)},handleMaskClick:b,handleEsc:function(t){var n;null===(n=e.onEsc)||void 0===n||n.call(e),e.show&&e.closeOnEsc&&U(t)&&(w.value||y(!1))},mergedTheme:c,cssVars:s?void 0:x,themeClass:null==C?void 0:C.themeClass,onRender:null==C?void 0:C.onRender,isMounted:l}},render(){const{mergedClsPrefix:e}=this;return p(H,{to:this.to,show:this.show},{default:()=>{var t;return null===(t=this.onRender)||void 0===t||t.call(this),v(p("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?p(g,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?p("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,"transparent"===this.showMask&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,p(pe,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[O,{zIndex:this.zIndex,enabled:this.show}]])}})}}),$e=e({name:"DrawerContent",props:{title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},setup(){const e=n(r,null);e||W("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;return{handleCloseClick:function(){t(!1)},mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:n,mergedTheme:r,bodyClass:o,bodyStyle:a,bodyContentClass:i,bodyContentStyle:s,headerClass:l,headerStyle:c,footerClass:d,footerStyle:u,scrollbarProps:h,closable:v,$slots:m}=this;return p("div",{role:"none",class:[`${t}-drawer-content`,n&&`${t}-drawer-content--native-scrollbar`]},m.header||e||v?p("div",{class:[`${t}-drawer-header`,l],style:c,role:"none"},p("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},void 0!==m.header?m.header():e),v&&p(_,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,n?p("div",{class:[`${t}-drawer-body`,o],style:a,role:"none"},p("div",{class:[`${t}-drawer-body-content-wrapper`,i],style:s,role:"none"},m)):p(w,Object.assign({themeOverrides:r.peerOverrides.Scrollbar,theme:r.peers.Scrollbar},h,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,i],contentStyle:s}),m),m.footer?p("div",{class:[`${t}-drawer-footer`,d],style:u,role:"none"},m.footer()):null)}}),{isMobile:Me}=L(),Re=N(),Be=q();o((()=>Re.recordDialog));var Pe=(e=>(e[e.none=0]="none",e[e.listening=1]="listening",e[e.thinking=2]="thinking",e[e.speaking=3]="speaking",e[e.error=4]="error",e))(Pe||{});const Te=()=>{const e=X(),n=o((()=>Be.theme)),r=t("alloy"),a=t(!1),i=t(0),s=t(),l=t(),c=t(),d=new Map;let u;const h=t(),v=t([]),m=t();let p=0,f=null,g=null;const b=new AbortController,w=async()=>{const e=c.value;if(!e||!e.getContext)return!1;const t=e.getContext("2d");let r=e.width=Me.value?window.innerWidth:608,o=e.height=Me.value?window.innerHeight/2:415;window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,17)};let a=[];const i="waiting gpt thinking",s=20;function l(e,t,n,r){this.ctx=e,this.init(t,n,r)}l.prototype.init=function(e,t,r){this.x=e,this.y=t,this.r=r,this.v=1,this.a=0,this.rad=this.a*Math.PI/180,this.points=[],this.setPoints(),this.c={r:"dark"===n.value?255:120,g:"dark"===n.value?255:197,b:"dark"===n.value?255:247}},l.prototype.setPoints=function(){for(let n=0;n<s;n++){let n=[Math.cos(this.rad)*this.r,Math.sin(this.rad)*this.r,(e=0,t=360,Math.floor(Math.random()*(t-e+1)+e))];this.points.push(n),this.a+=18,this.rad=this.a*Math.PI/180}var e,t},l.prototype.draw=function(){const e=this.ctx;e.save(),e.fillStyle="rgb("+this.c.r+", "+this.c.g+", "+this.c.b+")",e.beginPath(),e.translate(this.x,this.y),e.rotate(3*Math.sin(this.rad)),e.translate(-this.x,-this.y);const t=(this.points[0][0]+this.points[19][0])/2+this.x,n=(this.points[0][1]+this.points[19][1])/2+this.y;e.moveTo(t,n);for(let r=1;r<this.points.length-1;r++){let t=(this.points[r][0]+this.points[r+1][0])/2,n=(this.points[r][1]+this.points[r+1][1])/2;e.quadraticCurveTo(this.points[r][0]+this.x,this.points[r][1]+this.y,t+this.x,n+this.y)}e.quadraticCurveTo(this.points[19][0]+this.x,this.points[19][1]+this.y,t,n),e.closePath(),e.fill(),e.restore(),e.save(),e.fillStyle="transparent",e.translate(this.x,this.y),e.rotate(3*Math.sin(this.rad)),e.translate(-this.x,-this.y);for(let r=0;r<20;r++)e.save(),e.translate(1*this.points[r][0]+this.x,1*this.points[r][1]+this.y),e.rotate((18*r+90)*Math.PI/180),e.translate(-this.points[r][0]-this.x,-this.points[r][1]-this.y),e.fillText(i[r],1*this.points[r][0]+this.x,1*this.points[r][1]+this.y),e.restore();e.restore()},l.prototype.transform=function(){for(let e=0;e<this.points.length;e++)this.points[e][0]-=Math.sin(this.points[e][2]*Math.PI/180*5),this.points[e][1]-=Math.cos(this.points[e][2]*Math.PI/180*8),this.points[e][2]-=this.v},l.prototype.updateParams=function(){this.a+=.3,this.rad=this.a*Math.PI/180},l.prototype.resize=function(){this.x=r/2,this.y=o/2},l.prototype.render=function(){this.updateParams(),this.transform(),this.draw()};for(let n=0;n<1;n++)a.push(new l(t,r/2,o/2,110));!function e(){t.clearRect(0,0,r,o);for(let t=0;t<a.length;t++)a[t].render(t);requestAnimationFrame(e)}(),window.addEventListener("resize",(function(){!function(){r=e.width=Me.value?window.innerWidth:608,o=e.height=Me.value?window.innerHeight/2:415;for(let e=0;e<a.length;e++)a[e].resize()}()})),window.onunload=()=>{window.removeEventListener("resize",(()=>{}))}},y=async()=>{if(!location.protocol.includes("https"))return Promise.reject("录音功能必须要https协议");await C(),await w()},x=e=>{let t=window.AudioContext||window.webkitAudioContext;m.value=new t;let n=m.value.createMediaStreamSource(e),r=m.value.createGain();n.connect(r);let o=m.value.createAnalyser();o.fftSize=256;let a=o.frequencyBinCount;u=new Uint8Array(a),n.connect(o);const i=m.value.createScriptProcessor(2048,1,1);i.onaudioprocess=function(e){let t=e.inputBuffer.getChannelData(0),n=0;for(let o=0;o<t.length;o++)n<t[o]&&(n=t[o]);const r=Math.round(100*n);p=r;const{width:a,height:i}=s.value;l.value.clearRect(0,0,a,i),o.getByteFrequencyData(u);const c=u.length/30,h=a/c/2;l.value.fillStyle="#78c5f7";for(let o=0;o<c;o++){const e=u[o]/255*i*.5,t=o*h+a/2,n=a/2-(o+1)*h,r=i/2;l.value.fillRect(t,r,Math.ceil(h-10),e),l.value.fillRect(t,r,Math.ceil(h-10),-e),l.value.fillRect(n,r,Math.ceil(h-10),e),l.value.fillRect(n,r,Math.ceil(h-10),-e)}if(r<2){d.has("timer")||(d.set("timer",!0),f=setTimeout((()=>{d.delete("timer"),p>2?(console.log("检测到声音大于阈值，有人说话，清理定时器"),f&&clearTimeout(f)):(g&&clearTimeout(g),g=setTimeout((async()=>{p>2?(g&&clearTimeout(g),console.log("检测到声音大于阈值，有人说话，清理定时器"),f&&clearTimeout(f)):(await z(2),console.log("说话结束，清除所有定时器"))}),1400))}),2800))}else d.delete("timer"),f&&clearTimeout(f),g&&clearTimeout(g)},r.connect(i),i.connect(m.value.destination)};const C=async()=>{const e=s.value;if(!e)return;l.value=e.getContext("2d");const t=Me.value?4:8,n=Me.value?8:4;e.width=window.innerWidth/t*devicePixelRatio,e.height=window.innerHeight/n*devicePixelRatio;const r=navigator.mediaDevices.getUserMedia||navigator.mediaDevices.webkitGetUserMedia||navigator.mediaDevices.mozGetUserMedia||navigator.mediaDevices.msGetUserMedia;if(v.value=[],!r)return!1;await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,noiseSuppression:!0,echoCancellation:!0,frameRate:16,sampleRate:48e3,sampleSize:1}}).then((e=>{var t;t=e,h.value=new MediaRecorder(t),h.value.ondataavailable=e=>{v.value.push(e.data)},h.value.onstop=async()=>{console.log("录音已经停止");const e=new Blob(v.value,{type:"audio/wav"});await S(e)},h.value.start(),x(e)})).catch((e=>{console.error(e)}))},S=async t=>{const n=new FormData;n.append("file",new File([t],Date.now()+"record.wav")),n.append("voice",r.value);const o=b.signal;await Y(n,o).catch((t=>{k(),t&&"CanceledError: canceled"!==t.message&&e.error(t.message||"")}))},k=()=>{var e,t;a.value=!1,f&&clearTimeout(f),h.value&&(null==(e=h.value)||e.stop()),m.value&&(null==(t=m.value)||t.close())},z=async e=>{i.value=e,k(),(()=>{const{width:e,height:t}=s.value;l.value.clearRect(0,0,e,t)})()};return{voice:r,isListen:a,listenStatus:i,recordingRef:s,playVoiceRef:c,controller:b,hasMicrophone:async()=>{const e=await navigator.mediaDevices.enumerateDevices();return 0!==e.length&&e.some((e=>"audioinput"===e.kind&&"default"!=e.deviceId&&"communications"!=e.deviceId))},initAndStart:y,stop:z,restart:async()=>{f&&clearTimeout(f),a.value=!0,i.value=1,v.value=[],await y()},getRecordedVoice:async()=>new Blob(v.value,{type:"audio/ogg; codecs=opus"})}},Fe={key:0},Ee=Q("p",null,"选择音调",-1),Ae={class:"flex flex-col"},De=["onClick"],Oe={key:0,class:"absolute right-2 top-[5px]"},He={class:"text-md"},je={key:1},Ue={class:"px-2"},Ie=Q("p",{class:"mt-4"},"选择音调",-1),We={class:"flex flex-col"},_e=["onClick"],Le={key:0,class:"absolute right-2 top-[5px]"},Ne={class:"text-md"},qe={class:"h-full transition-all"},Xe={class:"h-full overflow-hidden"},Ye={class:"flex flex-col justify-center items-center mt-10"},Ve={class:"select-none ml-1"},Ge={class:"px-4 flex flex-col items-center"},Ke={class:"w-full h-auto"},Ze={class:"flex flex-col justify-end"},Je={class:"flex justify-center items-center"},Qe={class:"text-center"},et={class:"flex justify-around items-center w-full mt-8"},tt=e({__name:"RecordDialog",props:{visible:{type:Boolean}},emits:["submit"],setup(e,{emit:n}){const{isMobile:r}=L(),a=V(),i=X(),s=q();o((()=>s.theme));const l=N(),c=t(!0);L(),G();const d=t(!1),{initAndStart:u,stop:h,controller:v,hasMicrophone:m,voice:p,isListen:f,listenStatus:g,recordingRef:b,playVoiceRef:w}=Te(),y=o((()=>a.userInfo.avatar)),x=o((()=>a.userInfo.username)),C=()=>{h(Pe.none),c.value=!0,f.value=!1,g.value=0},S=()=>{if(f.value&&g.value!==Pe.none)return h(Pe.none),void v.abort();f.value=!f.value,g.value===Pe.none&&(g.value=Pe.listening),f.value&&u().catch((e=>{i.error(e)})),!f.value&&h(Pe.none)},k=o((()=>g.value===Pe.listening?"聆听中...":g.value===Pe.thinking?"思考中...":g.value===Pe.speaking?"回答中...":g.value===Pe.none?"点击左下角开始，右下角选择音色":"对话出错，请再说一遍试试")),z=()=>{f.value=!1,h(Pe.none),v.abort(),l.updateRecordDialog(!1)},$=()=>{ve().then((()=>{(async()=>{await m()?(f.value=!1,g.value=1,S()):i.error("未检测到麦克风，请插入麦克风等音频输入设备。")})()}))},M=[{value:"alloy"},{value:"echo"},{value:"fable"},{value:"onyx"},{value:"nova"},{value:"shimmer"}];return(e,t)=>(K(),Z(ee(le),{show:e.visible,style:he([{width:"100%","max-width":"640px"},[ee(r)?"height: 100vh":"height: auto"]]),"on-after-enter":$,"on-after-leave":C},{default:J((()=>[Q("div",{class:ue(["bg-white rounded dark:bg-gradient-to-b from-[#262643] to-[#0C0C16]",[ee(r)?"":"pb-8"]])},[ee(r)?(K(),te("div",je,[ne(ee(ze),{show:d.value,"onUpdate:show":t[1]||(t[1]=e=>d.value=e),"mask-closable":!1,placement:"bottom",class:"!h-[45vh]",style:{"--n-body-padding":"0"}},{default:J((()=>[ne(ee($e),{class:"mydrawer"},{default:J((()=>[Q("div",Ue,[Ie,Q("ul",We,[(K(),te(re,null,oe(M,(e=>Q("li",{class:"relative my-1 leading-8 dark:bg-[#262643] px-2 cursor-pointer",onClick:t=>(e=>{p.value=e.value,d.value=!1})(e)},[e.value===ee(p)?(K(),te("div",Le,[ne(ee(ae),{icon:"gravity-ui:check",class:"text-xl"})])):ie("",!0),Q("p",Ne,se(e.value),1)],8,_e))),64))])])])),_:1})])),_:1},8,["show"])])):(K(),te("div",Fe,[ne(ee(le),{show:d.value,preset:"dialog","show-icon":!1,onClose:t[0]||(t[0]=e=>d.value=!1),style:{width:"60%","max-width":"500px"}},{default:J((()=>[Q("div",null,[Ee,Q("ul",Ae,[(K(),te(re,null,oe(M,(e=>Q("li",{class:"relative my-1 leading-8 dark:bg-[#262643] px-2 cursor-pointer",onClick:t=>p.value=e.value},[e.value===ee(p)?(K(),te("div",Oe,[ne(ee(ae),{icon:"gravity-ui:check",class:"text-xl"})])):ie("",!0),Q("p",He,se(e.value),1)],8,De))),64))])])])),_:1},8,["show"])])),Q("div",qe,[Q("div",Xe,[Q("div",Ye,[ne(ee(de),{size:64,src:y.value,round:"",bordered:"","fallback-src":ee(ce),class:"cursor-pointer"},null,8,["src","fallback-src"]),Q("p",Ve,se(x.value),1)]),Q("div",Ge,[Q("div",Ke,[Q("canvas",{class:"h-[45vh] w-full",ref_key:"playVoiceRef",ref:w},null,512)]),Q("div",Ze,[Q("canvas",{class:"h-[50px] w-full",ref_key:"recordingRef",ref:b},null,512),Q("div",Je,[ee(f)&&1===ee(g)?(K(),Z(ee(ae),{key:0,icon:"streamline:voice-mail"})):ie("",!0),Q("p",Qe,se(k.value),1)])])]),Q("div",et,[ne(ee(ae),{icon:ee(f)?"heroicons-solid:stop":"gridicons:pause",class:"text-[28px] cursor-pointer",onClick:S},null,8,["icon"]),Q("div",{class:"darK:bg-[red] bg-[#d81e6] text-[#d81e6] dark:text-[#fff]",onClick:z},[ne(ee(me),{name:"icon_cancel",class:"text-[44px] cursor-pointer darK:bg-[red] bg-[#d81e6]"})]),ne(ee(ae),{icon:"ep:set-up",class:"text-[24px] cursor-pointer",onClick:t[2]||(t[2]=e=>d.value=!0)})])])])],2)])),_:1},8,["show","style"]))}});export{$e as N,tt as _,ze as a};
