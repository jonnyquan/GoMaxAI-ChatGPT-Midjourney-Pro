import{u as e,t,c as n,a,p as r,i as l,b as o,d as s,e as i,f as u,r as d,o as c,h as v,g as f,j as p,k as h,l as m,m as g,n as x,q as b,s as w,v as y,w as k,x as C,y as _,z as S,A as P,B as D,C as I,D as $,V as z,E,F as B,G as N,T as j,H as R,I as A,J as M,K as O,L as F,M as L,N as T,O as V,P as X,Q as W,R as Y,S as U,U as q,W as K,X as Z,Y as H,Z as Q,_ as G,$ as J,a0 as ee,a1 as te,a2 as ne,a3 as ae,a4 as re,a5 as le,a6 as oe,a7 as se,a8 as ie,a9 as ue,aa as de,ab as ce}from"../main-6c725c30.js";import{C as ve}from"../ChevronForwardOutline/ChevronForwardOutline.4b6b11d4.js";import{_ as fe}from"../search/search.96b26a6f.js";import{t as pe}from"../throttle/throttle.33f09de3.js";import{g as he}from"../video/video.ed708fe0.js";const me=n((function(n,a,r){return a=a.toLowerCase(),n+(r?e(t(a).toLowerCase()):a)}));function ge(e,t,n){return a(e,{key:`carousel-item-duplicate-${t}-${n}`})}function xe(e,t,n){return 1===t?0:n?0===e?t-3:e===t-1?0:e-1:e}function be(e,t){return t?e+1:e}function we(e){return window.TouchEvent&&e instanceof window.TouchEvent}function ye(e,t){let{offsetWidth:n,offsetHeight:a}=e;if(t){const t=getComputedStyle(e);n=n-Number.parseFloat(t.getPropertyValue("padding-left"))-Number.parseFloat(t.getPropertyValue("padding-right")),a=a-Number.parseFloat(t.getPropertyValue("padding-top"))-Number.parseFloat(t.getPropertyValue("padding-bottom"))}return{width:n,height:a}}function ke(e,t,n){return e<t?t:e>n?n:e}const Ce=s("n-carousel-methods");function _e(e="unknown",t="component"){const n=l(Ce);return n||o(e,`\`${t}\` must be placed inside \`n-carousel\`.`),n}const Se=i({name:"CarouselDots",props:{total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},setup(e){const{mergedClsPrefixRef:t}=u(e),n=d([]),a=_e();function r(e){var t;null===(t=n.value[e])||void 0===t||t.focus()}return c((()=>n.value.length=0)),{mergedClsPrefix:t,dotEls:n,handleKeydown:function(t,n){switch(t.key){case"Enter":case" ":return t.preventDefault(),void a.to(n)}e.keyboard&&function(e){var t;if(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey)return;const n=null===(t=document.activeElement)||void 0===t?void 0:t.nodeName.toLowerCase();if("input"===n||"textarea"===n)return;const{code:l}=e,o="PageUp"===l||"ArrowUp"===l,s="PageDown"===l||"ArrowDown"===l,i="PageUp"===l||"ArrowRight"===l,u="PageDown"===l||"ArrowLeft"===l,d=a.isVertical(),c=d?o:i,v=d?s:u;if(!c&&!v)return;e.preventDefault(),c&&!a.isNextDisabled()?(a.next(),r(a.currentIndexRef.value)):v&&!a.isPrevDisabled()&&(a.prev(),r(a.currentIndexRef.value))}(t)},handleMouseenter:function(t){"hover"===e.trigger&&a.to(t)},handleClick:function(t){"click"===e.trigger&&a.to(t)}}},render(){const{mergedClsPrefix:e,dotEls:t}=this;return v("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},f(this.total,(n=>{const a=n===this.currentIndex;return v("div",{"aria-selected":a,ref:e=>t.push(e),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,a&&`${e}-carousel__dot--active`],key:n,onClick:()=>{this.handleClick(n)},onMouseenter:()=>{this.handleMouseenter(n)},onKeydown:e=>{this.handleKeydown(e,n)}})})))}}),Pe=v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},v("g",{fill:"none"},v("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),De=v("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},v("g",{fill:"none"},v("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Ie=i({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:t}=u(e),{isVertical:n,isPrevDisabled:a,isNextDisabled:r,prev:l,next:o}=_e();return{mergedClsPrefix:t,isVertical:n,isPrevDisabled:a,isNextDisabled:r,prev:l,next:o}},render(){const{mergedClsPrefix:e}=this;return v("div",{class:`${e}-carousel__arrow-group`},v("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Pe),v("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},De))}}),$e="CarouselItem";const ze=i({name:$e,setup(e){const{mergedClsPrefixRef:t}=u(e),n=_e(me($e),`n-${me($e)}`),a=d(),r=p((()=>{const{value:e}=a;return e?n.getSlideIndex(e):-1})),l=p((()=>n.isPrev(r.value))),o=p((()=>n.isNext(r.value))),s=p((()=>n.isActive(r.value))),i=p((()=>n.getSlideStyle(r.value)));return h((()=>{n.addSlide(a.value)})),m((()=>{n.removeSlide(a.value)})),{mergedClsPrefix:t,selfElRef:a,isPrev:l,isNext:o,isActive:s,index:r,style:i,handleClick:function(e){const{value:t}=r;void 0!==t&&(null==n||n.onCarouselItemClick(t,e))}}},render(){var e;const{$slots:t,mergedClsPrefix:n,isPrev:a,isNext:r,isActive:l,index:o,style:s}=this;return v("div",{ref:"selfElRef",class:[`${n}-carousel__slide`,{[`${n}-carousel__slide--current`]:l,[`${n}-carousel__slide--prev`]:a,[`${n}-carousel__slide--next`]:r}],role:"option",tabindex:"-1","data-index":o,"aria-hidden":!l,style:s,onClickCapture:this.handleClick},null===(e=t.default)||void 0===e?void 0:e.call(t,{isPrev:a,isNext:r,isActive:l,index:o}))}}),Ee=g("carousel","\n position: relative;\n width: 100%;\n height: 100%;\n touch-action: pan-y;\n overflow: hidden;\n",[x("slides","\n display: flex;\n width: 100%;\n height: 100%;\n transition-timing-function: var(--n-bezier);\n transition-property: transform;\n ",[x("slide","\n flex-shrink: 0;\n position: relative;\n width: 100%;\n height: 100%;\n outline: none;\n overflow: hidden;\n ",[b("> img","\n display: block;\n ")])]),x("dots","\n position: absolute;\n display: flex;\n flex-wrap: nowrap;\n ",[w("dot",[x("dot","\n height: var(--n-dot-size);\n width: var(--n-dot-size);\n background-color: var(--n-dot-color);\n border-radius: 50%;\n cursor: pointer;\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n outline: none;\n ",[b("&:focus","\n background-color: var(--n-dot-color-focus);\n "),w("active","\n background-color: var(--n-dot-color-active);\n ")])]),w("line",[x("dot","\n border-radius: 9999px;\n width: var(--n-dot-line-width);\n height: 4px;\n background-color: var(--n-dot-color);\n cursor: pointer;\n transition:\n width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n outline: none;\n ",[b("&:focus","\n background-color: var(--n-dot-color-focus);\n "),w("active","\n width: var(--n-dot-line-width-active);\n background-color: var(--n-dot-color-active);\n ")])])]),x("arrow","\n transition: background-color .3s var(--n-bezier);\n cursor: pointer;\n height: 28px;\n width: 28px;\n display: flex;\n align-items: center;\n justify-content: center;\n background-color: rgba(255, 255, 255, .2);\n color: var(--n-arrow-color);\n border-radius: 8px;\n user-select: none;\n -webkit-user-select: none;\n font-size: 18px;\n ",[b("svg","\n height: 1em;\n width: 1em;\n "),b("&:hover","\n background-color: rgba(255, 255, 255, .3);\n ")]),w("vertical","\n touch-action: pan-x;\n ",[x("slides","\n flex-direction: column;\n "),w("fade",[x("slide","\n top: 50%;\n left: unset;\n transform: translateY(-50%);\n ")]),w("card",[x("slide","\n top: 50%;\n left: unset;\n transform: translateY(-50%) translateZ(-400px);\n ",[w("current","\n transform: translateY(-50%) translateZ(0);\n "),w("prev","\n transform: translateY(-100%) translateZ(-200px);\n "),w("next","\n transform: translateY(0%) translateZ(-200px);\n ")])])]),w("usercontrol",[x("slides",[b(">",[b("div","\n position: absolute;\n top: 50%;\n left: 50%;\n width: 100%;\n height: 100%;\n transform: translate(-50%, -50%);\n ")])])]),w("left",[x("dots","\n transform: translateY(-50%);\n top: 50%;\n left: 12px;\n flex-direction: column;\n ",[w("line",[x("dot","\n width: 4px;\n height: var(--n-dot-line-width);\n margin: 4px 0;\n transition:\n height .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n outline: none;\n ",[w("active","\n height: var(--n-dot-line-width-active);\n ")])])]),x("dot","\n margin: 4px 0;\n ")]),x("arrow-group","\n position: absolute;\n display: flex;\n flex-wrap: nowrap;\n "),w("vertical",[x("arrow","\n transform: rotate(90deg);\n ")]),w("show-arrow",[w("bottom",[x("dots","\n transform: translateX(0);\n bottom: 18px;\n left: 18px;\n ")]),w("top",[x("dots","\n transform: translateX(0);\n top: 18px;\n left: 18px;\n ")]),w("left",[x("dots","\n transform: translateX(0);\n top: 18px;\n left: 18px;\n ")]),w("right",[x("dots","\n transform: translateX(0);\n top: 18px;\n right: 18px;\n ")])]),w("left",[x("arrow-group","\n bottom: 12px;\n left: 12px;\n flex-direction: column;\n ",[b("> *:first-child","\n margin-bottom: 12px;\n ")])]),w("right",[x("dots","\n transform: translateY(-50%);\n top: 50%;\n right: 12px;\n flex-direction: column;\n ",[w("line",[x("dot","\n width: 4px;\n height: var(--n-dot-line-width);\n margin: 4px 0;\n transition:\n height .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n outline: none;\n ",[w("active","\n height: var(--n-dot-line-width-active);\n ")])])]),x("dot","\n margin: 4px 0;\n "),x("arrow-group","\n bottom: 12px;\n right: 12px;\n flex-direction: column;\n ",[b("> *:first-child","\n margin-bottom: 12px;\n ")])]),w("top",[x("dots","\n transform: translateX(-50%);\n top: 12px;\n left: 50%;\n ",[w("line",[x("dot","\n margin: 0 4px;\n ")])]),x("dot","\n margin: 0 4px;\n "),x("arrow-group","\n top: 12px;\n right: 12px;\n ",[b("> *:first-child","\n margin-right: 12px;\n ")])]),w("bottom",[x("dots","\n transform: translateX(-50%);\n bottom: 12px;\n left: 50%;\n ",[w("line",[x("dot","\n margin: 0 4px;\n ")])]),x("dot","\n margin: 0 4px;\n "),x("arrow-group","\n bottom: 12px;\n right: 12px;\n ",[b("> *:first-child","\n margin-right: 12px;\n ")])]),w("fade",[x("slide","\n position: absolute;\n opacity: 0;\n transition-property: opacity;\n pointer-events: none;\n ",[w("current","\n opacity: 1;\n pointer-events: auto;\n ")])]),w("card",[x("slides","\n perspective: 1000px;\n "),x("slide","\n position: absolute;\n left: 50%;\n opacity: 0;\n transform: translateX(-50%) translateZ(-400px);\n transition-property: opacity, transform;\n ",[w("current","\n opacity: 1;\n transform: translateX(-50%) translateZ(0);\n z-index: 1;\n "),w("prev","\n opacity: 0.4;\n transform: translateX(-100%) translateZ(-200px);\n "),w("next","\n opacity: 0.4;\n transform: translateX(0%) translateZ(-200px);\n ")])])]),Be=["transitionDuration","transitionTimingFunction"],Ne=Object.assign(Object.assign({},D.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let je=!1;const Re=i({name:"Carousel",props:Ne,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=u(e),a=d(null),l=d(null),o=d([]),s={value:[]},i=p((()=>"vertical"===e.direction)),c=p((()=>i.value?"height":"width")),v=p((()=>i.value?"bottom":"right")),f=p((()=>"slide"===e.effect)),g=p((()=>e.loop&&1===e.slidesPerView&&f.value)),x=p((()=>"custom"===e.effect)),b=p((()=>!f.value||e.centeredSlides?1:e.slidesPerView)),w=p((()=>x.value?1:e.slidesPerView)),$=p((()=>"auto"===b.value||"auto"===e.slidesPerView&&e.centeredSlides)),z=d({width:0,height:0}),E=p((()=>{const{value:t}=o;if(!t.length)return[];const{value:n}=$;if(n)return t.map((e=>ye(e)));const{value:a}=w,{value:r}=z,{value:l}=c;let s=r[l];if("auto"!==a){const{spaceBetween:t}=e;s=(s-(a-1)*t)*(1/Math.max(1,a))}const i=Object.assign(Object.assign({},r),{[l]:s});return t.map((()=>i))})),B=p((()=>{const{value:t}=E;if(!t.length)return[];const{centeredSlides:n,spaceBetween:a}=e,{value:r}=c,{[r]:l}=z.value;let o=0;return t.map((({[r]:e})=>{let t=o;return n&&(t+=(e-l)/2),o+=e+a,t}))})),N=d(!1),j=p((()=>{const{transitionStyle:t}=e;return t?y(t,Be):{}})),T=p((()=>x.value?0:function(e){if(void 0===e)return 0;if("number"==typeof e)return e;const t=e.match(/^((\d+)?\.?\d+?)(ms|s)?$/);if(t){const[,e,,n="ms"]=t;return Number(e)*("ms"===n?1:1e3)}return 0}(j.value.transitionDuration))),V=p((()=>{const{value:t}=o;if(!t.length)return[];const n=!($.value||1===w.value),a=e=>{if(n){const{value:t}=c;return{[t]:`${E.value[e][t]}px`}}};if(x.value)return t.map(((e,t)=>a(t)));const{effect:r,spaceBetween:l}=e,{value:s}=v;return t.reduce(((e,t,n)=>{const o=Object.assign(Object.assign({},a(n)),{[`margin-${s}`]:`${l}px`});return e.push(o),!N.value||"fade"!==r&&"card"!==r||Object.assign(o,j.value),e}),[])})),X=p((()=>{const{value:e}=b,{length:t}=o.value;if("auto"!==e)return Math.max(t-e,0)+1;{const{value:e}=E,{length:n}=e;if(!n)return t;const{value:a}=B,{value:r}=c,l=z.value[r];let o=e[e.length-1][r],s=n;for(;s>1&&o<l;)s--,o+=a[s]-a[s-1];return ke(s+1,1,n)}})),W=p((()=>{return e=X.value,g.value&&e>3?e-2:e;var e})),Y=be(e.defaultIndex,g.value),U=d(xe(Y,X.value,g.value)),q=k(C(e,"currentIndex"),U),K=p((()=>be(q.value,g.value)));function Z(t){var n,a;const r=xe(t=ke(t,0,X.value-1),X.value,g.value),{value:l}=q;r!==q.value&&(U.value=r,null===(n=e["onUpdate:currentIndex"])||void 0===n||n.call(e,r,l),null===(a=e.onUpdateCurrentIndex)||void 0===a||a.call(e,r,l))}function H(t=K.value){return n=t,a=X.value,r=e.loop,n<0?null:0===n?r?a-1:null:n-1;var n,a,r}function Q(t=K.value){return n=t,a=X.value,r=e.loop,n>a-1?null:n===a-1?r?0:null:n+1;var n,a,r}function G(e){return K.value===fe(e)}function J(){return null===H()}function ee(){return null===Q()}function te(e){const t=ke(be(e,g.value),0,X.value);e===q.value&&t===K.value||Z(t)}function ne(){const e=H();null!==e&&Z(e)}function ae(){const e=Q();null!==e&&Z(e)}let re=!1;let le=0;const oe=d({});function se(e,t=0){oe.value=Object.assign({},j.value,{transform:i.value?`translateY(${-e}px)`:`translateX(${-e}px)`,transitionDuration:`${t}ms`})}function ie(e=0){f.value?ue(K.value,e):0!==le&&(!re&&e>0&&(re=!0),se(le=0,e))}function ue(e,t){const n=de(e);n!==le&&t>0&&(re=!0),le=de(K.value),se(n,t)}function de(e){let t;return t=e>=X.value-1?ce():B.value[e]||0,t}function ce(){if("auto"===b.value){const{value:e}=c,{[e]:t}=z.value,{value:n}=B,a=n[n.length-1];let r;if(void 0===a)r=t;else{const{value:t}=E;r=a+t[t.length-1][e]}return r-t}{const{value:e}=B;return e[X.value-1]||0}}const ve={currentIndexRef:q,to:te,prev:function(){re&&g.value||ne()},next:function(){re&&g.value||ae()},isVertical:()=>i.value,isHorizontal:()=>!i.value,isPrev:function(e){const t=fe(e);return null!==t&&H()===t},isNext:function(e){const t=fe(e);return null!==t&&Q()===t},isActive:G,isPrevDisabled:J,isNextDisabled:ee,getSlideIndex:fe,getSlideStyle:function(t){const n=fe(t);if(-1!==n){const t=[V.value[n]],a=ve.isPrev(n),r=ve.isNext(n);return a&&t.push(e.prevSlideStyle||""),r&&t.push(e.nextSlideStyle||""),R(t)}},addSlide:function(e){if(!e)return;o.value.push(e)},removeSlide:function(e){if(!e)return;const t=fe(e);-1!==t&&o.value.splice(t,1)},onCarouselItemClick:function(t,n){let a=!re&&!_e&&!Se;"card"===e.effect&&a&&!G(t)&&(te(t),a=!1);a||(n.preventDefault(),n.stopPropagation())}};function fe(e){return"number"==typeof e?e:e?o.value.indexOf(e):-1}r(Ce,ve);let pe=0,he=0,me=0,ge=0,_e=!1,Se=!1;let Pe=null;function De(){Pe&&(clearInterval(Pe),Pe=null)}function Ie(){De();!e.autoplay||W.value<2||(Pe=window.setInterval(ae,e.interval))}function $e(t){var n;if(je)return;if(!(null===(n=l.value)||void 0===n?void 0:n.contains(A(t))))return;je=!0,_e=!0,Se=!1,ge=Date.now(),De(),"touchstart"===t.type||t.target.isContentEditable||t.preventDefault();const a=we(t)?t.touches[0]:t;i.value?he=a.clientY:pe=a.clientX,e.touchable&&(M("touchmove",document,ze),M("touchend",document,Ne),M("touchcancel",document,Ne)),e.draggable&&(M("mousemove",document,ze),M("mouseup",document,Ne))}function ze(e){const{value:t}=i,{value:n}=c,a=we(e)?e.touches[0]:e,r=t?a.clientY-he:a.clientX-pe,l=z.value[n];me=ke(r,-l,l),e.cancelable&&e.preventDefault(),f.value&&se(le-me,0)}function Ne(){const{value:e}=K;let t=e;if(!re&&0!==me&&f.value){const e=le-me,n=[...B.value.slice(0,X.value-1),ce()];let a=null;for(let r=0;r<n.length;r++){const l=Math.abs(n[r]-e);if(null!==a&&a<l)break;a=l,t=r}}if(t===e){const n=Date.now()-ge,{value:a}=c,r=z.value[a];me>r/2||me/n>.4?t=H(e):(me<-r/2||me/n<-.4)&&(t=Q(e))}null!==t&&t!==e?(Se=!0,Z(t),O((()=>{g.value&&U.value===q.value||ie(T.value)}))):ie(T.value),Re(),Ie()}function Re(){_e&&(je=!1),_e=!1,pe=0,he=0,me=0,ge=0,F("touchmove",document,ze),F("touchend",document,Ne),F("touchcancel",document,Ne),F("mousemove",document,ze),F("mouseup",document,Ne)}function Ae(e){if(e.preventDefault(),re)return;let{deltaX:t,deltaY:n}=e;e.shiftKey&&!t&&(t=n);const a=(t||n)>0?1:-1;let r=0,l=0;i.value?l=a:r=a;(l*n>=10||r*t>=10)&&(1!==a||ee()?-1!==a||J()||ne():ae())}h((()=>{_(Ie),requestAnimationFrame((()=>N.value=!0))})),m((()=>{Re(),De()})),S((()=>{const{value:e}=o,{value:t}=s,n=new Map,a=e=>n.has(e)?n.get(e):-1;let r=!1;for(let l=0;l<e.length;l++){const a=t.findIndex((t=>t.el===e[l]));a!==l&&(r=!0),n.set(e[l],a)}r&&e.sort(((e,t)=>a(e)-a(t)))})),P(K,((e,t)=>{if(e!==t)if(Ie(),f.value){if(g.value){const{value:n}=X;W.value>2&&e===n-2&&1===t?e=0:1===e&&t===n-2&&(e=n-1)}ue(e,T.value)}else ie()}),{immediate:!0}),P([g,b],(()=>{O((()=>{Z(K.value)}))})),P(B,(()=>{f.value&&ie()}),{deep:!0}),P(f,(e=>{e?ie():(re=!1,se(le=0))}));const Me=p((()=>({onTouchstartPassive:e.touchable?$e:void 0,onMousedown:e.draggable?$e:void 0,onWheel:e.mousewheel?Ae:void 0}))),Oe=p((()=>Object.assign(Object.assign({},y(ve,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:W.value,currentIndex:q.value}))),Fe=p((()=>({total:W.value,currentIndex:q.value,to:ve.to}))),Le={getCurrentIndex:()=>q.value,to:te,prev:ne,next:ae},Te=D("Carousel","-carousel",Ee,L,e,t),Ve=p((()=>{const{common:{cubicBezierEaseInOut:e},self:{dotSize:t,dotColor:n,dotColorActive:a,dotColorFocus:r,dotLineWidth:l,dotLineWidthActive:o,arrowColor:s}}=Te.value;return{"--n-bezier":e,"--n-dot-color":n,"--n-dot-color-focus":r,"--n-dot-color-active":a,"--n-dot-size":t,"--n-dot-line-width":l,"--n-dot-line-width-active":o,"--n-arrow-color":s}})),Xe=n?I("carousel",void 0,Ve,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:t,selfElRef:a,slidesElRef:l,slideVNodes:s,duplicatedable:g,userWantsControl:x,autoSlideSize:$,realIndex:K,slideStyles:V,translateStyle:oe,slidesControlListeners:Me,handleTransitionEnd:function(){if(f.value&&re){const{value:e}=K;ue(e,0)}else Ie();f.value&&(oe.value.transitionDuration="0ms"),re=!1},handleResize:function(){z.value=ye(a.value,!0),Ie()},handleSlideResize:function(){var e,t;$.value&&(null===(t=(e=E.effect).scheduler)||void 0===t||t.call(e),E.effect.run())},handleMouseenter:function(){e.autoplay&&De()},handleMouseleave:function(){e.autoplay&&Ie()},isActive:function(e){return q.value===e},arrowSlotProps:Oe,dotSlotProps:Fe},Le),{cssVars:n?void 0:Ve,themeClass:null==Xe?void 0:Xe.themeClass,onRender:null==Xe?void 0:Xe.onRender})},render(){var e;const{mergedClsPrefix:t,showArrow:n,userWantsControl:r,slideStyles:l,dotType:o,dotPlacement:s,slidesControlListeners:i,transitionProps:u={},arrowSlotProps:d,dotSlotProps:c,$slots:{default:f,dots:p,arrow:h}}=this,m=f&&$(f())||[];let g=m.reduce(((e,t)=>(function(e){var t;return(null===(t=e.type)||void 0===t?void 0:t.name)===$e}(t)&&e.push(t),e)),[]);return g.length||(g=m.map((e=>v(ze,null,{default:()=>a(e)})))),this.duplicatedable&&(g=function(e){const{length:t}=e;return t>1?(e.push(ge(e[0],0,"append")),e.unshift(ge(e[t-1],t-1,"prepend")),e):e}(g)),this.slideVNodes.value=g,this.autoSlideSize&&(g=g.map((e=>v(z,{onResize:this.handleSlideResize},{default:()=>e})))),null===(e=this.onRender)||void 0===e||e.call(this),v("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${t}-carousel`,"vertical"===this.direction&&`${t}-carousel--vertical`,this.showArrow&&`${t}-carousel--show-arrow`,`${t}-carousel--${s}`,`${t}-carousel--${this.direction}`,`${t}-carousel--${this.effect}`,r&&`${t}-carousel--usercontrol`],style:this.cssVars},i,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),v(z,{onResize:this.handleResize},{default:()=>v("div",{ref:"slidesElRef",class:`${t}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?g.map(((e,t)=>v("div",{style:l[t],key:t},B(v(j,Object.assign({},u),{default:()=>e}),[[N,this.isActive(t)]])))):g)}),this.showDots&&c.total>1&&E(p,c,(()=>[v(Se,{key:o+s,total:c.total,currentIndex:c.currentIndex,dotType:o,trigger:this.trigger,keyboard:this.keyboard})])),n&&E(h,d,(()=>[v(Ie,null)])))}});const Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Me=[X("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M328 112L184 256l144 144"},null,-1)],Oe=i({name:"ChevronBackOutline",render:function(e,t){return T(),V("svg",Ae,Me)}}),Fe=(e={})=>W({url:"/index-rec/page",data:{page:1,size:100,...e}}),Le={class:"recommend"},Te={class:"monitor-list"},Ve={id:"list-box",class:"list-box"},Xe={id:"list",class:"list"},We={class:"bg_img"},Ye=["src"],Ue={class:"types dark:bg-[#0d4022d9] dark:text-[#34d878] opacity-40 dark:opacity-100 bg-[#000000d9] text-white"},qe={class:"info"},Ke={class:"name text-[#333333] dark:text-[#fff]"},Ze={class:"content"},He={class:"down"},Qe=["onClick"],Ge=315,Je=te(i({__name:"RecommendItem",setup(e){const t=Y(),n=p((()=>t.isLogin)),a=U(),r=d([]);h((()=>{l()}));const l=async()=>{try{let e=await Fe({type:"home"});r.value=e.data.rows}catch(e){r.value=[]}},o=()=>{var e;const t=302*r.value.length,n=document.getElementById("list-box").clientWidth;if(t<n)return;const a=document.getElementById("list"),l=Math.abs(parseInt(null==(e=window.getComputedStyle(a,null))?void 0:e.left));a.style.left=l+n-Ge<n?"0px":"-"+(l-Ge)+"px"},s=()=>{var e;const t=302*r.value.length,n=document.getElementById("list-box").clientWidth;if(t<n)return;const a=document.getElementById("list"),l=Math.abs(parseInt(null==(e=window.getComputedStyle(a,null))?void 0:e.left));a.style.left=l+n+Ge>t?"-"+(t-n)+"px":"-"+(l+Ge)+"px"};return(e,l)=>(T(),V("div",Le,[l[1]||(l[1]=X("div",{class:"text-[#1E1F1F] dark:text-[#FFFFFF] text-[24px] title"}," 精选推荐 ",-1)),X("div",Te,[X("div",{class:"btn bg-[#ffffff] border border-transparent dark:border-[#1B1C22] dark:bg-[#1B1C22]",onClick:o},[q(Z(H),{size:"16",class:"dark:text-[#d9d9d9] text-[#333333]"},{default:K((()=>[q(Z(Oe))])),_:1})]),X("div",Ve,[X("div",Xe,[(T(!0),V(Q,null,G(r.value,(e=>(T(),V("div",{key:e.id,class:"list-item bg-[#fff] m-2 shadow-md dark:bg-[#1B1C22]"},[X("div",We,[X("img",{src:e.cover},null,8,Ye),X("span",Ue,J(e.tagName),1)]),X("div",qe,[X("span",Ke,J(e.name),1),X("span",Ze,J(e.description),1)]),X("div",He,[l[0]||(l[0]=X("span",null,null,-1)),X("span",{class:"use border-2 border-[#3E6AE7] dark:border-[#23a559] bg-white text-[#3E6AE7] dark:bg-[#dcf0e4] dark:text-[#23A559]",onClick:r=>(e=>{if(!n.value)return t.setLoginDialog(!0),void ee.emit("register",0);a.push(e.target)})(e)}," 一键使用 ",8,Qe)])])))),128))])]),X("div",{class:"btn bg-[#ffffff] border border-transparent dark:border-[#1B1C22] dark:bg-[#1B1C22]",onClick:s},[q(Z(H),{size:"16",class:"dark:text-[#d9d9d9] text-[#333333]"},{default:K((()=>[q(Z(ve))])),_:1})])])]))}}),[["__scopeId","data-v-db68786d"]]),et={class:"overflow-hidden pr-0 h-full flex flex-col"},tt={class:"market overflow-y-auto flex-1 min-h-screen h-[100vh] relative itemContent"},nt=["id"],at={class:"img_box"},rt=["id","src","onLoad","onError"],lt={key:0,class:"img_info"},ot=["title"],st=["onClick"],it=i({__name:"newMarket",props:{type:{type:String,required:!1,default:"all"},keyWord:{type:String,default:""}},setup(e,{expose:t}){const n=Y(),a=p((()=>n.isLogin)),r=d([]),l=d({}),o=d(0),s=d(160),i=d(0),u=d(10),c=d(10),v=d([]),f=d(null),m=d(0),g=d(30),x=d(""),b=p((()=>g.value+u.value+220)),w=e,y=d();ee.on("newData",(e=>{y.value=e}));const k=ne({page:1,size:999,rec:1,squareType:w.type,keyword:""});function C(){!function(){const{showName:e=0,showOther:t=0}={};o.value=15*[e,t].filter((e=>e)).length}(),function(){if(!f.value)return;const e=f.value.clientWidth;i.value=Math.floor(e/b.value);const t=e-i.value*b.value,n=(i.value-1)*u.value;t-n<0&&(i.value-=1);s.value=Math.floor((e-n)/i.value)}();const e=i.value,t=s.value,n=[];_.value.forEach(((a,r)=>{let i=200,d=300;a.fileInfo&&(i=a.fileInfo.width||i,d=a.fileInfo.height||d);const v=d*(t/i)+c.value+o.value,f=l.value[a.id];if(n.length<e)f.style.top="0px",f.style.left=(t+u.value)*r+"px",n.push(v);else{const e=Math.min.apply(null,n),t=n.findIndex((t=>t===e));f.style.top=`${e+0}px`,f.style.left=t*(s.value+u.value)+"px",n[t]+=v}})),m.value=Math.max(...n)+130}const _=p((()=>y.value?y.value.rows:x.value?r.value.filter((e=>{const{prompt:t}=e;return t.includes(x.value)})):r.value));P(g,(()=>{C()}));let S=null;async function D(){let e=(await le(k)).data.rows;e.forEach((e=>{e.src=e.imageUrl+"?imageView2/0/w/400/q/85"})),r.value=e}P(_,(()=>{_.value.length&&(clearTimeout(S),S=setTimeout((()=>{C()}),300))}));const I=p((()=>e=>{let t=200,n=300;return e.fileInfo&&(t=e.fileInfo.width,n=e.fileInfo.height),n/(t/s.value)})),$=pe((function(){C()}),200);return h((async()=>{await D(),C(),window.addEventListener("resize",$)})),t({handleQuery:e=>{k.keyword="",k.squareType=e,D(),C()},handleSearch:e=>{k.squareType="",k.keyword=e,D(),C()}}),ae((()=>{window.removeEventListener("resize",$)})),(e,t)=>(T(),V("div",et,[X("div",tt,[X("div",{id:"wapper",ref_key:"wapperRef",ref:f,class:"wapper",style:R({height:`${m.value}px`})},[(T(!0),V(Q,null,G(_.value,((e,r)=>(T(),V("div",{id:e.id,key:r,ref_for:!0,ref:t=>function(e,t){e&&t&&(l.value[t.id]=e)}(t,e),class:"wapper-item",style:R({width:`${s.value}px`})},[q(j,{name:"img",css:!0},{default:K((()=>[X("div",at,[X("img",{id:e.id,class:"item-file rounded-sm",style:R({width:`${s.value}px`,height:`${I.value(e)}px`}),src:e.src,loading:"lazy",onLoad:t=>function(e,t){v.value.push(t.id)}(0,e),onError:t=>function(e,t){v.value.push(t.id)}(0,e)},null,44,rt),e.fullPrompt&&""!==e.fullPrompt&&e.fullPrompt.length?(T(),V("div",lt,[X("span",{class:"introduction",title:e.fullPrompt},J(e.fullPrompt),9,ot)])):re("",!0)])])),_:2},1024),X("div",{class:"menu",onClick:t=>function(e){if(!a.value)return n.setLoginDialog(!0),void ee.emit("register",0);ee.emit("Details",!0),ee.emit("DetailsData",e)}(e)},t[0]||(t[0]=[X("div",null,"查看详情",-1)]),8,st)],12,nt)))),128))],4)])]))}}),ut={style:{padding:"0 24px 0 24px"}},dt={class:"topBox"},ct={key:0,class:"flex w-full flex-j mb-2 items-center overflow-x-hidden"},vt={class:"relative z-40 transition-300 ease"},ft={class:"flex justify-start items-center",ref:"tabListRef"},pt=["onClick"],ht={class:"pl-3 pr-3 pt-1 pb-1 whitespace-nowrap"},mt=te(i({__name:"newSquare",setup(e,{expose:t}){const{isMobile:n}=oe(),a=d(""),r=d(),l=se();p((()=>"dark"===l.theme));const o=d([]),s=d(68);h((()=>{(async()=>{const e=await ue({page:1,size:100}).then((e=>e.data.rows));o.value=[{name:"全部分类",value:""}].concat(e)||de,r.value.handleQuery(a.value)})();const e=document.getElementById("navBarBox");e&&(s.value=e.offsetHeight)}));const i=d("");return t({handeleEnter:e=>{r.value.handleSearch(e)}}),(e,t)=>(T(),V("div",ut,[X("div",dt,[Z(n)?re("",!0):(T(),V("div",ct,[X("div",vt,[X("ul",ft,[(T(!0),V(Q,null,G(o.value,(e=>(T(),V("li",{onClick:t=>{return n=e,a.value=n.value,r.value.handleQuery(n.value),void ee.emit("newData","");var n},class:ie(["mr-1 ml-1 w-auto select-none cursor-pointer bg-white hover:dark:text-[#fff] hover:text-[#fff] hover:bg-gradient-to-r hover:from-[#957DF4] hover:to-[#3C69E7] dark:hover:from-transparent dark:hover:to-transparent dark:border dark:border-[transparent] dark:hover:border-[#23A559] duration-300 flex rounded-lg",[e.value===a.value?"bg-gradient-to-r from-[#957DF4] to-[#3C69E7] dark:from-transparent dark:to-transparent text-white dark:text-[#23A559] bg-[#dae7e6] border-0 dark:border dark:border-[#23A559]":"bg-white dark:bg-transparent"]])},[X("div",ht,J(e.name),1)],10,pt)))),256))],512)])]))]),X("div",{class:"flex-1 marketBox",style:R({height:`calc(100vh - ${s.value}px)`})},[q(it,{ref_key:"marketRef",ref:r,type:a.value,keyWord:i.value},null,8,["type","keyWord"])],4)]))}}),[["__scopeId","data-v-116ddf29"]]),gt={class:"draw_pricture"},xt={class:"search bg-gradient-to-r from-[#fbfffc] to-white dark:from-transparent dark:to-transparent dark:bg-[#1B1C22] p-[14px]"},bt={class:"search_box"},wt={class:"search-input border-2 border-[#DBDBDB] dark:border-[#23a5597a] bg-[#fff] dark:bg-[#1B1C22]"},yt={class:"words"},kt=["onClick"],Ct={class:"swiper"},_t=["src"],St={class:"sort"},Pt=te(i({__name:"DrawPicture",setup(e){const t=d();d("");const n=d(""),a=d([]),r=d([{name:"美女"},{name:"二次元"},{name:"电商"},{name:"海报"},{name:"女生"},{name:"男生"},{name:"建筑"},{name:"手工"},{name:"动物"}]);let l=d([]);h((()=>{o(),s()}));const o=async()=>{try{const e=await he({dictType:"swiper-tag",dictName:"",page:1,size:30});let t=(e.data||{}).rows||[];l.value=t}catch(e){l.value=[]}},s=async(e={})=>{try{e=Object.assign({type:"swiper"},e);let t=(await Fe(e)).data.rows.map((e=>e.cover));a.value=t}catch(t){a.value=[]}},i=()=>{t.value.handeleEnter(n.value)};return(e,l)=>(T(),V("div",gt,[X("div",xt,[X("div",bt,[X("div",wt,[l[1]||(l[1]=X("img",{class:"imgs",src:fe},null,-1)),B(X("input",{class:"inp",placeholder:"请输入关键字","onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e)},null,512),[[ce,n.value]]),X("span",{onClick:i,class:"btn text-white dark:bg-[#23a559] bg-gradient-to-l from-[#3C69E7] to-[#957DF4] dark:from-transparent dark:to-transparent"},"搜索")]),X("div",yt,[l[2]||(l[2]=X("span",{class:"name"},"推荐词",-1)),(T(!0),V(Q,null,G(r.value,((e,n)=>(T(),V("span",{onClick:n=>{return a=e.name,void t.value.handeleEnter(a);var a},class:"items bg-[#eef1fd] text-[#3E6AE7] dark:bg-[#0d0e11] dark:text-[#caccd5]",key:n},J(e.name),9,kt)))),128))])]),X("div",Ct,[q(Z(Re),{autoplay:"",style:{height:"126px",width:"623px"}},{default:K((()=>[(T(!0),V(Q,null,G(a.value,((e,t)=>(T(),V("img",{key:t,class:"carousel-img",src:e},null,8,_t)))),128))])),_:1})])]),X("div",St,[q(mt,{ref_key:"squareRef",ref:t},null,512)])]))}}),[["__scopeId","data-v-36e1526f"]]),Dt={class:"home-page"},It=te(i({__name:"homePage",setup:e=>(e,t)=>(T(),V("div",Dt,[q(Je),q(Pt)]))}),[["__scopeId","data-v-4bf59fc0"]]);export{It as default};
