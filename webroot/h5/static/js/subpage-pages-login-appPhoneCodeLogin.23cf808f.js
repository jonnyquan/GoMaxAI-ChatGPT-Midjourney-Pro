(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subpage-pages-login-appPhoneCodeLogin"],{1086:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uInput:n("2239").default,uPopup:n("ff7e").default},i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"code_login_box"},[o("v-uni-view",{staticClass:"code_login_main"},[o("v-uni-view",{staticClass:"logo_card"},[o("v-uni-view",[o("v-uni-image",{attrs:{src:n("cc81")}})],1),o("v-uni-view",{staticClass:"title"},[e._v("手机号快捷登录")]),o("v-uni-view",{staticClass:"tips"},[e._v("未注册手机号通过验证将自动注册")])],1),o("v-uni-view",{staticClass:"input_card"},[o("v-uni-view",{staticStyle:{position:"relative"}},[o("u-input",{attrs:{adjustPosition:!1,type:"number",placeholder:"请输入手机号",placeholderStyle:"color:#999999",border:"none"},model:{value:e.phoneLoginData.phone,callback:function(t){e.$set(e.phoneLoginData,"phone",t)},expression:"phoneLoginData.phone"}}),o("u-input",{staticClass:"code_input",attrs:{adjustPosition:!1,type:"number","password-icon":!0,placeholder:"请输入验证码",placeholderStyle:"color:#999999",border:"none"},model:{value:e.phoneLoginData.phoneCode,callback:function(t){e.$set(e.phoneLoginData,"phoneCode",t)},expression:"phoneLoginData.phoneCode"}}),o("v-uni-view",{staticClass:"send_code"},[0==e.codeText?o("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode.apply(void 0,arguments)}}},[e._v("获取验证码")]):o("v-uni-view",[e._v(e._s(e.codeTime)+"S后重新获取")])],1)],1),o("v-uni-view",[o("v-uni-button",{staticClass:"login_btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleLogin.apply(void 0,arguments)}}},[e._v("登录")])],1)],1),o("v-uni-view",{staticClass:"fast_login"},[o("v-uni-view",{staticClass:"fast_login_type"},[o("v-uni-view",{staticClass:"type"},[e._v("快捷登录方式")]),o("v-uni-view",{staticClass:"type_img"},[e.weChatIsShow?o("v-uni-image",{attrs:{src:n("2ee1")},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.weLogin.apply(void 0,arguments)}}}):e._e(),o("v-uni-image",{attrs:{src:n("36b2")},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPwLogin.apply(void 0,arguments)}}})],1)],1),o("v-uni-view",{staticClass:"login_protocol"},[o("v-uni-radio",{staticStyle:{transform:"scale(0.6)"},attrs:{checked:e.radioState,value:"radioState"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.radioStateChange.apply(void 0,arguments)}}}),e._v("选中代表您已阅读并同意"),o("b",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick(1)}}},[e._v("《隐私政策》")]),o("b",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick(2)}}},[e._v("《用户服务协议》")])],1)],1)],1),o("u-popup",{attrs:{show:e.popStatus,safeAreaInsetBottom:!1,mode:"center",closeable:!0},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClose.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"popup_main"},[o("v-uni-view",{staticClass:"title"},[e._v("服务条款")]),o("v-uni-view",{staticClass:"content"},[o("v-uni-view",[e._v("请仔细阅读并同意")]),o("v-uni-view",{staticStyle:{display:"flex","justify-content":"center"}},[o("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick(2)}}},[e._v("《用户服务协议》")]),o("v-uni-view",{},[e._v("、")]),o("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick(1)}}},[e._v("《隐私政策》")])],1),o("v-uni-view",[e._v("首次登录将会同步注册帐号")])],1),o("v-uni-view",{staticClass:"confirm",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmClick.apply(void 0,arguments)}}},[e._v("我已仔细阅读并同意")])],1)],1)],1)},a=[]},"2ee1":function(e,t){e.exports="data:image/png;base64,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"},"36b2":function(e,t){e.exports="data:image/png;base64,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"},"4af6":function(e,t,n){"use strict";n.r(t);var o=n("1086"),i=n("674e");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("dc1b");var c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"4fb8c459",null,!1,o["a"],void 0);t["default"]=s.exports},"674e":function(e,t,n){"use strict";n.r(t);var o=n("a62b"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},a62b:function(e,t,n){"use strict";n("7a82");var o=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c975"),n("d3b7"),n("159b"),n("ac1f"),n("841c"),n("99af"),n("466d");var i=o(n("f07e")),a=o(n("d0af")),c=o(n("c964")),s=(n("fe8f"),{data:function(){return{loginData:{username:"",code:""},phoneLoginData:{phone:"",phoneCode:""},radioState:!1,codeTime:60,codeText:!1,popStatus:!1,weChatIsShow:!0}},onLoad:function(){var e=this,t="";this.$Request.post("/api/config/query",{keys:["wechatRegisterStatus"]}).then((function(n){t=n.data.wechatRegisterStatus,0==t?e.weChatIsShow=!1:1==t&&(e.weChatIsShow=!0)}))},methods:{handleClick:function(e){1==e?uni.navigateTo({url:"/subpage/pages/mine/protocolCommon?protocolName=用户隐私政策"}):2==e&&uni.navigateTo({url:"/subpage/pages/mine/protocolCommon?protocolName=用户服务协议"})},handleClose:function(){this.popStatus=!1},confirmClick:function(e){this.radioState=!0,this.popStatus=!1},radioStateChange:function(e){this.radioState=!0},sendCode:function(){var e=this;if(""!=this.phoneLoginData.phone){this.codeText=!0,this.$Request.post("/api/auth/sendPhoneCode",{phone:this.phoneLoginData.phone,captchaCode:"1g4d"}).then((function(e){console.log(e)}));var t=setInterval((function(){var t=--e.codeTime;e.codeTime=t<10?"0"+t:t}),1e3);setTimeout((function(){clearInterval(t),e.codeTime=60,e.codeText=!1}),6e4)}else uni.showToast({title:"请输入电话号码",icon:"error"})},handleLogin:function(){var e=this;if(""!=this.phoneLoginData.phone)if(""!=this.phoneLoginData.phoneCode)if(0!=this.radioState){uni.showLoading({title:"正在登录"});var t={phone:this.phoneLoginData.phone,phoneCode:this.phoneLoginData.phoneCode};this.$Request.post("/api/auth/loginByPhoneV3",t).then((function(t){200==t.code?(uni.setStorageSync("token",t.data),console.log("token :",t.data),e.$Request.get("/api/auth/getInfo").then((function(e){uni.hideLoading(),console.log("userinfo :",e.data),uni.setStorageSync("userinfo",e.data),uni.reLaunch({url:"/pages/main/assistant/index"})}))):(uni.showToast({title:t.message,icon:"none"}),e.phoneLoginData.phoneCode="")}))}else this.popStatus=!0;else uni.showToast({title:"请输入验证码",icon:"error"});else uni.showToast({title:"请输入电话号码",icon:"error"})},toPwLogin:function(){uni.navigateTo({url:"./appPasswordLogin"})},weLogin:function(){this.is_wx()},wxloginFn:function(){var e=this;return(0,c.default)((0,i.default)().mark((function t(){var n,o,c,s,r,u,d,p,l,f,h;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={keys:["phoneRegisterStatus","wechatOfficialAppId","wechatRegisterStatus"]},o="",c="",s="",t.next=6,e.$Request.post("/api/config/query",n).then((function(e){s=e.data.wechatRegisterStatus,uni.setStorageSync("wechatRegisterStatus",s),c=e.data.wechatOfficialAppId,uni.setStorageSync("wechatOfficialAppId",c),o=e.data.phoneRegisterStatus}));case 6:if(console.log(s),0!=s){t.next=9;break}return t.abrupt("return");case 9:"",-1===window.location.href.indexOf("?invitation=")&&-1===window.location.href.indexOf("&invitation=")||(-1!==window.location.href.indexOf("?invitation=")?(window.location.href.split("?invitation=")[1].split("&")[0],e.$queue.setData("inviterCode",window.location.href.split("?invitation=")[1].split("&")[0])):(window.location.href.split("&invitation=")[1].split("&")[0],e.$queue.setData("inviterCode",window.location.href.split("&invitation=")[1].split("&")[0]))),r=navigator.userAgent.toLowerCase(),-1!==r.indexOf("micromessenger")&&(u={},window.location.search.substring(1).split("&").forEach((function(e){console.log(e);var t=e.split("="),n=(0,a.default)(t,2),o=n[0],i=n[1];u[o]=i})),d=uni.getStorageSync("token"),uni.getStorageSync("openid"),uni.getStorageSync("userId"),p=e,u.code?e.$Request.post("/api/official/loginByCode",{code:u.code}).then((function(t){if(200==t.code)e.$queue.setData("openid",t.data.openId),t.data.authToken?(uni.setStorageSync("token",t.data.authToken),e.$Request.get("/api/auth/getInfo").then((function(t){uni.setStorageSync("userinfo",t.data),uni.reLaunch({url:"/pages/main/assistant/index"}),e.$isResolve()}))):("1"==o?uni.navigateTo({url:"/subpage/pages/mine/completionInfo?phoneStatus=".concat(o)}):uni.navigateTo({url:"/subpage/pages/mine/completionInfo?phoneStatus=0"}),e.$isResolve());else{var n,i,a=location.hostname;"ceshi.qumao518.vip"===a||"kaifa.qumao518.vip"===a||"localhost"===a||"127.0.0.1"===a?(i="https://gomaxai.qumao518.vip/h5/redirect.html",n=window.location.href):i=window.location.href,encodeURIComponent(i),encodeURIComponent(n),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(p.$queue.getWxAppid(),"&redirect_uri=").concat(encodeURIComponent(window.location.href),"&response_type=code&scope=snsapi_userinfo&forcePopup=true#wechat_redirect")}})):d?e.$Request.get("/api/auth/getInfo").then((function(t){if(200==t.code)uni.setStorageSync("userinfo",t.data),uni.reLaunch({url:"/pages/main/assistant/index"}),e.$isResolve();else if(401==t.code){var n,o;uni.showToast({title:"服务器异常请稍后在次尝试",icon:"none"});var i=location.hostname;"ceshi.qumao518.vip"===i||"kaifa.qumao518.vip"===i||"localhost"===i||"127.0.0.1"===i?(o="https://gomaxai.qumao518.vip/h5/redirect.html",n=window.location.href):o=window.location.href,encodeURIComponent(o),encodeURIComponent(n),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(p.$queue.getWxAppid(),"&redirect_uri=").concat(encodeURIComponent(window.location.href),"&response_type=code&scope=snsapi_userinfo&forcePopup=true#wechat_redirect")}})):(h=location.hostname,"ceshi.qumao518.vip"===h||"kaifa.qumao518.vip"===h||"localhost"===h||"127.0.0.1"===h?(f="https://gomaxai.qumao518.vip/h5/redirect.html",l=window.location.href):f=window.location.href,encodeURIComponent(f),encodeURIComponent(l),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(p.$queue.getWxAppid(),"&redirect_uri=").concat(encodeURIComponent(window.location.href),"&response_type=code&scope=snsapi_userinfo&forcePopup=true#wechat_redirect")));case 13:case"end":return t.stop()}}),t)})))()},is_wx:function(){var e=this;return(0,c.default)((0,i.default)().mark((function t(){var n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e,n=window.navigator.userAgent.toLowerCase(),"micromessenger"==n.match(/MicroMessenger/i)&&e.wxloginFn(),"micromessenger"!=n.match(/MicroMessenger/i)&&uni.showToast({title:"暂不支持",icon:"error"});case 4:case"end":return t.stop()}}),t)})))()}}});t.default=s},c66a:function(e,t,n){var o=n("de49");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("662552b8",o,!0,{sourceMap:!1,shadowMode:!1})},cc81:function(e,t){e.exports="data:image/png;base64,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"},dc1b:function(e,t,n){"use strict";var o=n("c66a"),i=n.n(o);i.a},de49:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'.code_login_box[data-v-4fb8c459]{width:100vw;height:100vh;background-color:#0c0c16;position:relative}.code_login_main[data-v-4fb8c459]{width:100%;height:100%;padding:%?40?%;display:flex;flex-direction:column;justify-content:space-between}.logo_card[data-v-4fb8c459]{width:100%;text-align:center;margin-top:%?88?%}.logo_card uni-image[data-v-4fb8c459]{width:%?160?%;height:%?160?%;border-radius:50%;margin-bottom:%?50?%}.logo_card .title[data-v-4fb8c459]{font-size:%?56?%;color:#fff;margin-bottom:%?20?%}.logo_card .tips[data-v-4fb8c459]{font-size:%?24?%;color:#999}.input_card[data-v-4fb8c459]{width:100%;padding-bottom:%?100?%}.input_card .u-input[data-v-4fb8c459]{background-color:#262643;color:#999;border-radius:%?50?%;height:%?120?%;margin-top:%?20?%}.input_card[data-v-4fb8c459] .uni-input-input{padding:0 %?20?%;font-size:%?30?%;color:#999}.input_card .uni-input-placeholder[data-v-4fb8c459]{padding:0 %?30?%;font-size:%?30?%}.input_card .forget_password[data-v-4fb8c459]{color:#999;font-size:%?24?%;text-align:right;margin-top:%?20?%}.input_card .send_code[data-v-4fb8c459]{position:absolute;color:#1e90ff;font-size:%?30?%;bottom:%?43?%;right:%?40?%}.input_card .login_btn[data-v-4fb8c459]{width:100%;height:50px;line-height:50px;background:linear-gradient(#3742fa,#1e90ff);border-radius:90px 90px 90px 90px;color:#fff;font-size:%?30?%;margin-top:%?60?%}.fast_login[data-v-4fb8c459]{width:100%;text-align:center}.fast_login .fast_login_type .type[data-v-4fb8c459]{color:#999;font-size:%?24?%;position:relative;padding:0 %?10?%;margin-bottom:%?30?%}.fast_login .fast_login_type .type[data-v-4fb8c459]::before,\n.fast_login .fast_login_type .type[data-v-4fb8c459]::after{position:absolute;background:#333;content:"";height:1px;top:50%;width:100px}.fast_login .fast_login_type .type[data-v-4fb8c459]:before{left:50px}.fast_login .fast_login_type .type[data-v-4fb8c459]:after{right:50px}.fast_login .fast_login_type .type_img uni-image[data-v-4fb8c459]{margin-left:%?80?%;margin-right:%?80?%;width:%?64?%;height:%?64?%}.fast_login .login_protocol[data-v-4fb8c459]{color:#fff;font-size:%?24?%;margin-top:%?80?%}.popup_main[data-v-4fb8c459]{width:%?600?%;background-color:#17161b}.popup_main .title[data-v-4fb8c459]{color:#fff;font-size:%?32?%;text-align:center;padding:%?40?% 0}.popup_main .content[data-v-4fb8c459]{color:#fff;font-size:%?28?%;text-align:center;line-height:%?55?%;padding-bottom:%?40?%;border-bottom:%?2?% solid #262643}.popup_main .confirm[data-v-4fb8c459]{color:#1e90ff;text-align:center;padding:%?30?%;font-size:%?28?%}',""]),e.exports=t},fe8f:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.useWeChatAuth=void 0,n("d3b7"),n("c975");t.useWeChatAuth=function(){return new Promise((function(e){uni.getProvider({service:"oauth",success:function(t){~t.provider.indexOf("weixin")&&uni.login({provider:"weixin",onlyAuthorize:!0,success:function(t){var n=t.code;e(n)},fail:function(){e(void 0)}})}})}))}}}]);