(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subpage-pages-index-drawlogs"],{1760:function(t,e,n){"use strict";n("7a82");var o=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4de4"),n("d3b7"),n("c975"),n("159b"),n("14d9"),n("ac1f"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var a=o(n("54f8")),i=o(n("f07e")),d=o(n("c964")),s={data:function(){return{squareList:[],leftList:[],rightList:[],isShow:!1,popImg:"",src:"",boxWidth:100,boxHeight:100,startX:0,startY:0,isResize:!1}},mounted:function(){var t=this;return(0,d.default)((0,i.default)().mark((function e(){return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchImg();case 2:t.$nextTick((function(){t.setWaterFallLayout2()}));case 3:case"end":return e.stop()}}),e)})))()},methods:{fetchImg:function(){var t=this;return(0,d.default)((0,i.default)().mark((function e(){var n;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={page:1,size:30,statu:0,favorite:0},uni.showLoading({title:"加载中"}),e.next=4,t.$Request.get("/api/midjourney/drawList",n).then((function(e){if(e.data){uni.hideLoading();var n=e.data.rows,o=n.filter((function(t){return-1==t.imageUrl.indexOf("png")&&""!=t.imageUrl}));n.forEach((function(t){o.forEach((function(e){t.id==e.id&&(n=n.filter((function(e){return e.id!=t.id})))}))})),t.squareList=n}}));case 4:case"end":return e.stop()}}),e)})))()},setWaterFallLayout2:function(){var t=this;return(0,d.default)((0,i.default)().mark((function e(){var n,o,d,s,r;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.squareList),n=(0,a.default)(t.squareList),e.prev=2,n.s();case 4:if((o=n.n()).done){e.next=17;break}return d=o.value,e.next=8,t.getHeight(".left-box");case 8:return s=e.sent,e.next=11,t.getHeight(".right-box");case 11:return r=e.sent,s<=r?t.leftList.push(d):t.rightList.push(d),e.next=15,t.$nextTick();case 15:e.next=4;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](2),n.e(e.t0);case 22:return e.prev=22,n.f(),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[2,19,22,25]])})))()},getHeight:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(n){var o=uni.createSelectorQuery().in(t);o.select(e).boundingClientRect((function(t){n(t.height)})).exec()}))},handledetails:function(t){var e=this;if(6==t.status){this.isShow=!0,this.popImg=t.imageUrl;var n={taskId:t.id};this.$Request.get("/api/upload/getModalImgById",n).then((function(t){var n=t.data.split(",")[1],o=uni.base64ToArrayBuffer(n),a=new Blob([o],{type:"image/png"}),i=URL.createObjectURL(a);e.popImg=i}))}else 3==t.status&&(console.log(t),uni.navigateTo({url:"/subpage/pages/index/createResult",success:function(e){e.eventChannel.emit("imageInfo",t)}}))},selectImg:function(){var t=this;uni.chooseImage({count:1,sizeType:["original"],sourceType:["album","camera"],success:function(e){var n=e.tempFilePaths;t.src=n[0]}})},preventHandler:function(){},handleTouchMove:function(t){if(this.isResize){var e=t.touches[0];this.boxWidth=e.clientX-this.startX,this.boxHeight=e.clientY-this.startY}},handleTouchStart:function(t){this.isResize=!0;var e=t.touches[0];this.startX=e.clientX,this.startY=e.clientY},handleTouchEnd:function(){this.isResize=!1}}};e.default=s},2060:function(t,e,n){"use strict";n.r(e);var o=n("1760"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"3d41":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uPopup:n("ff7e").default},a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"body"},[o("v-uni-view",{staticClass:"atlas"},[o("v-uni-view",{ref:"left",staticClass:"left-box"},t._l(t.leftList,(function(e,a){return o("v-uni-view",{staticClass:"psitem"},[o("v-uni-view",{},[3==e.status?o("v-uni-image",{key:a,staticClass:"image",attrs:{src:e.imageUrl+"?imageView2/0/w/200/q/85",mode:"widthFix"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handledetails(e)}}}):t._e(),3!=e.status?o("v-uni-image",{key:a,staticClass:"image",attrs:{src:n("b007"),mode:"widthFix"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handledetails(e)}}}):t._e()],1)],1)})),1),o("v-uni-view",{ref:"right",staticClass:"right-box"},t._l(t.rightList,(function(e,a){return o("v-uni-view",{staticClass:"psitem"},[o("v-uni-view",{},[3==e.status?o("v-uni-image",{key:a,staticClass:"image",attrs:{src:e.imageUrl+"?imageView2/0/w/200/q/85",mode:"widthFix"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handledetails(e)}}}):t._e(),3!=e.status?o("v-uni-image",{key:a,staticClass:"image",attrs:{src:n("b007"),mode:"widthFix"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handledetails(e)}}}):t._e()],1)],1)})),1),o("v-uni-view",{staticStyle:{position:"relative","z-index":"99999991"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.preventHandler.apply(void 0,arguments)}}},[o("u-popup",{attrs:{show:t.isShow,mode:"center",zIndex:"999999911",safeAreaInsetBottom:!1},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.isShow=!1}}},[o("v-uni-view",{staticClass:"popBox"},[o("v-uni-view",{staticClass:"popTop"},[t._v("区域重绘")]),o("v-uni-view",{staticClass:"imgBox"},[o("v-uni-view",{staticClass:"container"},[o("v-uni-view",{staticClass:"box",style:{width:t.boxWidth+"px",height:t.boxHeight+"px"}},[o("v-uni-view",{staticClass:"BorderLeft"},[o("v-uni-view",{staticClass:"boxTopLeft",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"boxCenterLeft",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"boxBottomLeft",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticClass:"BorderRight"},[o("v-uni-view",{staticClass:"boxTopRight",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"boxCenterRight",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"boxBottomRight",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticClass:"BorderTop"},[o("v-uni-view",{staticClass:"boxLeftTop",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"boxCenterTop",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"boxRightTop",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticClass:"BorderBottom"},[o("v-uni-view",{staticClass:"boxLeftBottom",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"boxCenterBottom",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"boxRightBottom",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchEnd.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTouchStart.apply(void 0,arguments)}}})],1)],1)],1),o("v-uni-image",{staticClass:"popImg",attrs:{src:t.popImg,mode:""}})],1),o("v-uni-view",{staticClass:"popBottom1"},[o("v-uni-view",{staticClass:"btn1"},[t._v("1")]),o("v-uni-view",{staticClass:"btn2"},[t._v("2")])],1),o("v-uni-view",{staticClass:"popBottom2"},[o("v-uni-input",{staticClass:"inp",attrs:{placeholder:"输入描述信息",type:"text"}}),o("v-uni-view",{staticClass:"send"},[t._v("发送")])],1)],1)],1)],1)],1)],1)},i=[]},"54f8":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,o.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,s=!0,r=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){r=!0,d=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(r)throw d}}}},n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("d9e2"),n("d401");var o=function(t){return t&&t.__esModule?t:{default:t}}(n("dde1"))},"79f7":function(t,e,n){"use strict";var o=n("81d3"),a=n.n(o);a.a},"81d3":function(t,e,n){var o=n("82cb");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("cc796070",o,!0,{sourceMap:!1,shadowMode:!1})},"82cb":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.body[data-v-7bd2e8b2]{width:100%;min-height:100vh;height:100%;background:linear-gradient(#262643,#0c0c16) 100% no-repeat}.atlas[data-v-7bd2e8b2]{width:100%;display:flex;align-items:flex-start;padding:0 %?30?%;margin-top:%?20?%;box-sizing:border-box}.atlas .left-box[data-v-7bd2e8b2],\n.atlas .right-box[data-v-7bd2e8b2]{margin:0 auto;width:48%;margin-bottom:10px;margin-left:%?15?%}.atlas .left-box .psitem[data-v-7bd2e8b2],\n.atlas .right-box .psitem[data-v-7bd2e8b2]{width:100%;margin-bottom:%?20?%}.atlas .left-box .psitem .image[data-v-7bd2e8b2],\n.atlas .right-box .psitem .image[data-v-7bd2e8b2]{width:100%;height:auto}.atlas .left-box .psitem .msg-box[data-v-7bd2e8b2],\n.atlas .right-box .psitem .msg-box[data-v-7bd2e8b2]{width:100%}.atlas .left-box .psitem .msg-box .shop-name[data-v-7bd2e8b2],\n.atlas .right-box .psitem .msg-box .shop-name[data-v-7bd2e8b2]{font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;width:100%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-all}.atlas .left-box .psitem .msg-box .pjia[data-v-7bd2e8b2],\n.atlas .right-box .psitem .msg-box .pjia[data-v-7bd2e8b2]{font-size:%?24?%;display:flex;align-items:center}.atlas .left-box .psitem .msg-box .pjia uni-image[data-v-7bd2e8b2],\n.atlas .right-box .psitem .msg-box .pjia uni-image[data-v-7bd2e8b2]{width:%?120?%;height:%?30?%;margin-right:%?10?%}.atlas .left-box .psitem .text[data-v-7bd2e8b2],\n.atlas .right-box .psitem .text[data-v-7bd2e8b2]{color:#fff;font-size:%?30?%;margin-top:%?16?%}.childBox[data-v-7bd2e8b2]{width:100%;height:%?468?%;display:flex;flex-wrap:wrap}.childBox .childItem[data-v-7bd2e8b2]{width:50%;height:50%}.childBox .childItem .img[data-v-7bd2e8b2]{width:100%;height:100%}.waitBox[data-v-7bd2e8b2]{display:flex;justify-content:space-around;align-items:center;margin-top:%?20?%}.waitBox .waitWindow[data-v-7bd2e8b2]{color:#fff;font-size:%?24?%}.waitBox .waitText[data-v-7bd2e8b2]{background-color:#5a91fc;padding:%?10?%;border-radius:%?10?%;color:#fff;font-size:%?24?%}.popBox[data-v-7bd2e8b2]{padding:%?30?%;background-color:#3e3e64}.popBox .popTop[data-v-7bd2e8b2]{font-size:%?32?%;color:#fff}.imgBox[data-v-7bd2e8b2]{height:%?900?%;width:%?600?%;margin-top:%?20?%;position:relative}.imgBox .popImg[data-v-7bd2e8b2]{height:%?800?%;position:absolute}.imgBox .container[data-v-7bd2e8b2]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;height:100%;position:absolute;top:0;left:0;z-index:999}.imgBox .container .box[data-v-7bd2e8b2]{background-color:rgba(0,0,0,.5);position:absolute;touch-action:none;display:flex;justify-content:space-between;position:relative}.imgBox .container .box .BorderLeft[data-v-7bd2e8b2]{height:100%;display:flex;flex-direction:column;justify-content:space-between}.imgBox .container .box .BorderLeft .boxTopLeft[data-v-7bd2e8b2]{width:%?4?%;height:%?20?%;background-color:#fff}.imgBox .container .box .BorderLeft .boxCenterLeft[data-v-7bd2e8b2]{width:%?4?%;height:%?20?%;background-color:#fff}.imgBox .container .box .BorderLeft .boxBottomLeft[data-v-7bd2e8b2]{width:%?4?%;height:%?20?%;background-color:#fff}.imgBox .container .box .BorderRight[data-v-7bd2e8b2]{height:100%;display:flex;flex-direction:column;justify-content:space-between}.imgBox .container .box .BorderRight .boxTopRight[data-v-7bd2e8b2]{width:%?4?%;height:%?20?%;background-color:#fff}.imgBox .container .box .BorderRight .boxCenterRight[data-v-7bd2e8b2]{width:%?4?%;height:%?20?%;background-color:#fff}.imgBox .container .box .BorderRight .boxBottomRight[data-v-7bd2e8b2]{width:%?4?%;height:%?20?%;background-color:#fff}.imgBox .container .box .BorderTop[data-v-7bd2e8b2]{width:100%;display:flex;justify-content:space-between;position:absolute}.imgBox .container .box .BorderTop .boxRightTop[data-v-7bd2e8b2]{width:%?20?%;height:%?4?%;background-color:#fff}.imgBox .container .box .BorderTop .boxCenterTop[data-v-7bd2e8b2]{width:%?20?%;height:%?4?%;background-color:#fff}.imgBox .container .box .BorderTop .boxLeftTop[data-v-7bd2e8b2]{width:%?20?%;height:%?4?%;background-color:#fff}.imgBox .container .box .BorderBottom[data-v-7bd2e8b2]{width:100%;display:flex;justify-content:space-between;position:absolute;bottom:0}.imgBox .container .box .BorderBottom .boxRightBottom[data-v-7bd2e8b2]{width:%?20?%;height:%?4?%;background-color:#fff}.imgBox .container .box .BorderBottom .boxCenterBottom[data-v-7bd2e8b2]{width:%?20?%;height:%?4?%;background-color:#fff}.imgBox .container .box .BorderBottom .boxLeftBottom[data-v-7bd2e8b2]{width:%?20?%;height:%?4?%;background-color:#fff}.popBottom1[data-v-7bd2e8b2]{display:flex;margin-top:%?20?%}.popBottom1 .btn1[data-v-7bd2e8b2]{background-color:#888;color:#fff;border-radius:50%;width:%?64?%;height:%?64?%;line-height:%?64?%;text-align:center}.popBottom1 .btn2[data-v-7bd2e8b2]{background-color:#888;color:#fff;border-radius:50%;width:%?64?%;height:%?64?%;line-height:%?64?%;text-align:center;margin-left:%?20?%}.popBottom2[data-v-7bd2e8b2]{display:flex;margin-top:%?20?%;justify-content:space-between;align-items:center}.popBottom2 .inp[data-v-7bd2e8b2]{background-color:#282848;padding-left:%?20?%;width:80%;height:%?60?%;color:#9195af;font-size:%?24?%;border-radius:%?10?%}.popBottom2 .send[data-v-7bd2e8b2]{background-color:#3076ed;border-radius:50%;width:%?64?%;height:%?64?%;line-height:%?64?%;text-align:center;color:#fff;font-size:%?20?%}',""]),t.exports=e},8926:function(t,e,n){"use strict";n.r(e);var o=n("3d41"),a=n("2060");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("79f7");var d=n("f0c5"),s=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"7bd2e8b2",null,!1,o["a"],void 0);e["default"]=s.exports},b007:function(t,e,n){t.exports=n.p+"static/images/status6.png"}}]);