(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index~pages-login-index~pages-main-GPTs-chat~pages-main-assistant-newIndex~pages-main-home-index"],{"1a46":function(e,t,n){"use strict";var i=n("c034"),u=n.n(i);u.a},"1eef":function(e,t,n){"use strict";n.r(t);var i=n("6fe6"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=u.a},2229:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-d7655832], uni-scroll-view[data-v-d7655832], uni-swiper-item[data-v-d7655832]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-link[data-v-d7655832]{line-height:1;display:flex;flex-direction:row;flex-wrap:wrap;flex:1}',""]),e.exports=t},4247:function(e,t,n){"use strict";n.r(t);var i=n("735c"),u=n("1eef");for(var a in u)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("1a46");var o=n("f0c5"),r=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"d7655832",null,!1,i["a"],void 0);t["default"]=r.exports},"54b5":function(e,t,n){"use strict";var i=n("afe2"),u=n.n(i);u.a},"5bce":function(e,t,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n("f658")),a=(i(n("fb4b")),i(n("b89e")),i(n("6bea"))),o={name:"u--text",mixins:[uni.$u.mpMixin,uni.$u.mixin,u.default,a.default],computed:{valueStyle:function(){var e={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:uni.$u.addUnit(this.size)};return!this.type&&(e.color=this.color),this.isNvue&&this.lines&&(e.lines=this.lines),this.lineHeight&&(e.lineHeight=uni.$u.addUnit(this.lineHeight)),!this.isNvue&&this.block&&(e.display="block"),uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))},isNvue:function(){return!1},isMp:function(){return!1}},data:function(){return{}},methods:{clickHandler:function(){this.call&&"phone"===this.mode&&uni.makePhoneCall({phoneNumber:this.text}),this.$emit("click")}}};t.default=o},"6bea":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var i={props:{type:{type:String,default:uni.$u.props.text.type},show:{type:Boolean,default:uni.$u.props.text.show},text:{type:[String,Number],default:uni.$u.props.text.text},prefixIcon:{type:String,default:uni.$u.props.text.prefixIcon},suffixIcon:{type:String,default:uni.$u.props.text.suffixIcon},mode:{type:String,default:uni.$u.props.text.mode},href:{type:String,default:uni.$u.props.text.href},format:{type:[String,Function],default:uni.$u.props.text.format},call:{type:Boolean,default:uni.$u.props.text.call},openType:{type:String,default:uni.$u.props.text.openType},bold:{type:Boolean,default:uni.$u.props.text.bold},block:{type:Boolean,default:uni.$u.props.text.block},lines:{type:[String,Number],default:uni.$u.props.text.lines},color:{type:String,default:uni.$u.props.text.color},size:{type:[String,Number],default:uni.$u.props.text.size},iconStyle:{type:[Object,String],default:uni.$u.props.text.iconStyle},decoration:{tepe:String,default:uni.$u.props.text.decoration},margin:{type:[Object,String,Number],default:uni.$u.props.text.margin},lineHeight:{type:[String,Number],default:uni.$u.props.text.lineHeight},align:{type:String,default:uni.$u.props.text.align},wordWrap:{type:String,default:uni.$u.props.text.wordWrap}}};t.default=i},"6fe6":function(e,t,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n("e14f")),a={name:"u-link",mixins:[uni.$u.mpMixin,uni.$u.mixin,u.default],computed:{linkStyle:function(){var e={color:this.color,fontSize:uni.$u.addUnit(this.fontSize),lineHeight:uni.$u.addUnit(uni.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return e}},methods:{openLink:function(){window.open(this.href),this.$emit("click")}}};t.default=a},"735c":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",{staticClass:"u-link",style:[e.linkStyle,e.$u.addStyle(e.customStyle)],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.openLink.apply(void 0,arguments)}}},[e._v(e._s(e.text))])},u=[]},afe2:function(e,t,n){var i=n("ceda");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var u=n("4f06").default;u("4be78ae8",i,!0,{sourceMap:!1,shadowMode:!1})},b479:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uIcon:n("36ec").default,uLink:n("4247").default},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("v-uni-view",{staticClass:"u-text",class:[],style:{margin:e.margin,justifyContent:"left"===e.align?"flex-start":"center"===e.align?"center":"flex-end"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler.apply(void 0,arguments)}}},["price"===e.mode?n("v-uni-text",{class:["u-text__price",e.type&&"u-text__value--"+e.type],style:[e.valueStyle]},[e._v("￥")]):e._e(),e.prefixIcon?n("v-uni-view",{staticClass:"u-text__prefix-icon"},[n("u-icon",{attrs:{name:e.prefixIcon,customStyle:e.$u.addStyle(e.iconStyle)}})],1):e._e(),"link"===e.mode?n("u-link",{attrs:{text:e.value,href:e.href,underLine:!0}}):e.openType&&e.isMp?[n("v-uni-button",{staticClass:"u-reset-button u-text__value",style:[e.valueStyle],attrs:{"data-index":e.index,openType:e.openType,lang:e.lang,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter},on:{getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.onGetUserInfo.apply(void 0,arguments)},contact:function(t){arguments[0]=t=e.$handleEvent(t),e.onContact.apply(void 0,arguments)},getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.onGetPhoneNumber.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.onError.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.onLaunchApp.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.onOpenSetting.apply(void 0,arguments)}}},[e._v(e._s(e.value))])]:n("v-uni-text",{staticClass:"u-text__value",class:[e.type&&"u-text__value--"+e.type,e.lines&&"u-line-"+e.lines],style:[e.valueStyle]},[e._v(e._s(e.value))]),e.suffixIcon?n("v-uni-view",{staticClass:"u-text__suffix-icon"},[n("u-icon",{attrs:{name:e.suffixIcon,customStyle:e.$u.addStyle(e.iconStyle)}})],1):e._e()],2):e._e()},a=[]},c034:function(e,t,n){var i=n("2229");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var u=n("4f06").default;u("3575061d",i,!0,{sourceMap:!1,shadowMode:!1})},c7fe:function(e,t,n){"use strict";n.r(t);var i=n("5bce"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=u.a},ceda:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-0577983a], uni-scroll-view[data-v-0577983a], uni-swiper-item[data-v-0577983a]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-text[data-v-0577983a]{display:flex;flex-direction:row;align-items:center;flex-wrap:nowrap;flex:1;width:100%}.u-text__price[data-v-0577983a]{font-size:14px;color:#606266}.u-text__value[data-v-0577983a]{font-size:14px;display:flex;flex-direction:row;color:#606266;flex-wrap:wrap;text-overflow:ellipsis;align-items:center}.u-text__value--primary[data-v-0577983a]{color:#3c9cff}.u-text__value--warning[data-v-0577983a]{color:#f9ae3d}.u-text__value--success[data-v-0577983a]{color:#5ac725}.u-text__value--info[data-v-0577983a]{color:#909399}.u-text__value--error[data-v-0577983a]{color:#f56c6c}.u-text__value--main[data-v-0577983a]{color:#303133}.u-text__value--content[data-v-0577983a]{color:#606266}.u-text__value--tips[data-v-0577983a]{color:#909193}.u-text__value--light[data-v-0577983a]{color:#c0c4cc}',""]),e.exports=t},e14f:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var i={props:{color:{type:String,default:uni.$u.props.link.color},fontSize:{type:[String,Number],default:uni.$u.props.link.fontSize},underLine:{type:Boolean,default:uni.$u.props.link.underLine},href:{type:String,default:uni.$u.props.link.href},mpTips:{type:String,default:uni.$u.props.link.mpTips},lineColor:{type:String,default:uni.$u.props.link.lineColor},text:{type:String,default:uni.$u.props.link.text}}};t.default=i},ef26:function(e,t,n){"use strict";n.r(t);var i=n("b479"),u=n("c7fe");for(var a in u)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("54b5");var o=n("f0c5"),r=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"0577983a",null,!1,i["a"],void 0);t["default"]=r.exports},f658:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("00b4"),n("99af");var i={computed:{value:function(){var e=this.text,t=this.mode,n=this.format,i=this.href;return"price"===t?(/^\d+(\.\d+)?$/.test(e)||uni.$u.error("金额模式下，text参数需要为金额格式"),uni.$u.test.func(n)?n(e):uni.$u.priceFormat(e,2)):"date"===t?(!uni.$u.test.date(e)&&uni.$u.error("日期模式下，text参数需要为日期或时间戳格式"),uni.$u.test.func(n)?n(e):n?uni.$u.timeFormat(e,n):uni.$u.timeFormat(e,"yyyy-mm-dd")):"phone"===t?uni.$u.test.func(n)?n(e):"encrypt"===n?"".concat(e.substr(0,3),"****").concat(e.substr(7)):e:"name"===t?("string"!==typeof e&&uni.$u.error("姓名模式下，text参数需要为字符串格式"),uni.$u.test.func(n)?n(e):"encrypt"===n?this.formatName(e):e):"link"===t?(!uni.$u.test.url(i)&&uni.$u.error("超链接模式下，href参数需要为URL格式"),e):e}},methods:{formatName:function(e){var t="";if(2===e.length)t=e.substr(0,1)+"*";else if(e.length>2){for(var n="",i=0,u=e.length-2;i<u;i++)n+="*";t=e.substr(0,1)+n+e.substr(-1,1)}else t=e;return t}}};t.default=i}}]);