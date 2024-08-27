import{m as o,s as e,n as t,q as r,e as n,h as l,cE as s,cF as a,B as i,i as c,cG as d,r as g,w as b,x as u,j as p,ct as h,cH as v,p as f,cI as m,f as y,C as x,cm as C,cJ as S,cz as T,cK as z}from"../main-ddc3955a.js";const w=o("layout-sider","\n flex-shrink: 0;\n box-sizing: border-box;\n position: relative;\n z-index: 1;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n min-width .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n transform .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n display: flex;\n justify-content: flex-end;\n",[e("bordered",[t("border",'\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 1px;\n background-color: var(--n-border-color);\n transition: background-color .3s var(--n-bezier);\n ')]),t("left-placement",[e("bordered",[t("border","\n right: 0;\n ")])]),e("right-placement","\n justify-content: flex-start;\n ",[e("bordered",[t("border","\n left: 0;\n ")]),e("collapsed",[o("layout-toggle-button",[o("base-icon","\n transform: rotate(180deg);\n ")]),o("layout-toggle-bar",[r("&:hover",[t("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),o("layout-toggle-button","\n left: 0;\n transform: translateX(-50%) translateY(-50%);\n ",[o("base-icon","\n transform: rotate(0);\n ")]),o("layout-toggle-bar","\n left: -28px;\n transform: rotate(180deg);\n ",[r("&:hover",[t("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),e("collapsed",[o("layout-toggle-bar",[r("&:hover",[t("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),o("layout-toggle-button",[o("base-icon","\n transform: rotate(0);\n ")])]),o("layout-toggle-button","\n transition:\n color .3s var(--n-bezier),\n right .3s var(--n-bezier),\n left .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n cursor: pointer;\n width: 24px;\n height: 24px;\n position: absolute;\n top: 50%;\n right: 0;\n border-radius: 50%;\n display: flex;\n align-items: center;\n justify-content: center;\n font-size: 18px;\n color: var(--n-toggle-button-icon-color);\n border: var(--n-toggle-button-border);\n background-color: var(--n-toggle-button-color);\n box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);\n transform: translateX(50%) translateY(-50%);\n z-index: 1;\n ",[o("base-icon","\n transition: transform .3s var(--n-bezier);\n transform: rotate(180deg);\n ")]),o("layout-toggle-bar","\n cursor: pointer;\n height: 72px;\n width: 32px;\n position: absolute;\n top: calc(50% - 36px);\n right: -28px;\n ",[t("top, bottom","\n position: absolute;\n width: 4px;\n border-radius: 2px;\n height: 38px;\n left: 14px;\n transition: \n background-color .3s var(--n-bezier),\n transform .3s var(--n-bezier);\n "),t("bottom","\n position: absolute;\n top: 34px;\n "),r("&:hover",[t("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),t("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),r("&:hover",[t("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),t("border","\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n width: 1px;\n transition: background-color .3s var(--n-bezier);\n "),o("layout-sider-scroll-container","\n flex-grow: 1;\n flex-shrink: 0;\n box-sizing: border-box;\n height: 100%;\n opacity: 0;\n transition: opacity .3s var(--n-bezier);\n max-width: 100%;\n "),e("show-content",[o("layout-sider-scroll-container",{opacity:1})]),e("absolute-positioned","\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n ")]),k=n({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:o}=this;return l("div",{class:`${o}-layout-toggle-button`,onClick:this.onClick},l(s,{clsPrefix:o},{default:()=>l(a,null)}))}}),B=n({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:o}=this;return l("div",{onClick:this.onClick,class:`${o}-layout-toggle-bar`},l("div",{class:`${o}-layout-toggle-bar__top`}),l("div",{class:`${o}-layout-toggle-bar__bottom`}))}}),$={position:S,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},P=n({name:"LayoutSider",props:Object.assign(Object.assign({},i.props),$),setup(o){const e=c(d),t=g(null),r=g(null),n=g(o.defaultCollapsed),l=b(u(o,"collapsed"),n),s=p((()=>h(l.value?o.collapsedWidth:o.width))),a=p((()=>"transform"!==o.collapseMode?{}:{minWidth:h(o.width)})),C=p((()=>e?e.siderPlacement:"left"));let S=0,k=0;v((()=>{if(o.nativeScrollbar){const o=t.value;o&&(o.scrollTop=k,o.scrollLeft=S)}})),f(m,{collapsedRef:l,collapseModeRef:u(o,"collapseMode")});const{mergedClsPrefixRef:B,inlineThemeDisabled:$}=y(o),P=i("Layout","-layout-sider",w,z,o,B);const j={scrollTo:function(e,n){if(o.nativeScrollbar){const{value:o}=t;o&&(void 0===n?o.scrollTo(e):o.scrollTo(e,n))}else{const{value:o}=r;o&&o.scrollTo(e,n)}}},O=p((()=>{const{common:{cubicBezierEaseInOut:e},self:t}=P.value,{siderToggleButtonColor:r,siderToggleButtonBorder:n,siderToggleBarColor:l,siderToggleBarColorHover:s}=t,a={"--n-bezier":e,"--n-toggle-button-color":r,"--n-toggle-button-border":n,"--n-toggle-bar-color":l,"--n-toggle-bar-color-hover":s};return o.inverted?(a["--n-color"]=t.siderColorInverted,a["--n-text-color"]=t.textColorInverted,a["--n-border-color"]=t.siderBorderColorInverted,a["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,a.__invertScrollbar=t.__invertScrollbar):(a["--n-color"]=t.siderColor,a["--n-text-color"]=t.textColor,a["--n-border-color"]=t.siderBorderColor,a["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),a})),_=$?x("layout-sider",p((()=>o.inverted?"a":"b")),O,o):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:B,mergedTheme:P,styleMaxWidth:s,mergedCollapsed:l,scrollContainerStyle:a,siderPlacement:C,handleNativeElScroll:e=>{var t;const r=e.target;S=r.scrollLeft,k=r.scrollTop,null===(t=o.onScroll)||void 0===t||t.call(o,e)},handleTransitionend:function(e){var t,r;"max-width"===e.propertyName&&(l.value?null===(t=o.onAfterLeave)||void 0===t||t.call(o):null===(r=o.onAfterEnter)||void 0===r||r.call(o))},handleTriggerClick:function(){const{"onUpdate:collapsed":e,onUpdateCollapsed:t,onExpand:r,onCollapse:s}=o,{value:a}=l;t&&T(t,!a),e&&T(e,!a),n.value=!a,a?r&&T(r):s&&T(s)},inlineThemeDisabled:$,cssVars:O,themeClass:null==_?void 0:_.themeClass,onRender:null==_?void 0:_.onRender},j)},render(){var o;const{mergedClsPrefix:e,mergedCollapsed:t,showTrigger:r}=this;return null===(o=this.onRender)||void 0===o||o.call(this),l("aside",{class:[`${e}-layout-sider`,this.themeClass,`${e}-layout-sider--${this.position}-positioned`,`${e}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${e}-layout-sider--bordered`,t&&`${e}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${e}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:h(this.width)}]},this.nativeScrollbar?l("div",{class:[`${e}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):l(C,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&"true"===this.cssVars.__invertScrollbar?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?l("bar"===r?B:k,{clsPrefix:e,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?l("div",{class:`${e}-layout-sider__border`}):null)}});export{P as N};
