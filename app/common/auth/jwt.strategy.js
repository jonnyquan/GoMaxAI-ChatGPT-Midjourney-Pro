'use strict';var _0x3faf30=_0x2210;(function(_0xb2bada,_0x52b5b2){var _0x3d0549=_0x2210,_0x3139ab=_0xb2bada();while(!![]){try{var _0x19f1bc=parseInt(_0x3d0549(0x15e))/0x1+parseInt(_0x3d0549(0x169))/0x2*(parseInt(_0x3d0549(0x171))/0x3)+parseInt(_0x3d0549(0x15f))/0x4*(parseInt(_0x3d0549(0x16b))/0x5)+-parseInt(_0x3d0549(0x158))/0x6+parseInt(_0x3d0549(0x15c))/0x7*(-parseInt(_0x3d0549(0x16a))/0x8)+parseInt(_0x3d0549(0x16e))/0x9+-parseInt(_0x3d0549(0x167))/0xa;if(_0x19f1bc===_0x52b5b2)break;else _0x3139ab['push'](_0x3139ab['shift']());}catch(_0x132c04){_0x3139ab['push'](_0x3139ab['shift']());}}}(_0x58bb,0x57fda));function _0x58bb(){var _0x417ca8=['configService','1144437wfYdZp','decorate','1353498XLNZZF','@nestjs/passport','length','Strategy','46298hgImsb','metadata','441203MbmTaE','2171828qNrMni','design:paramtypes','getOwnPropertyDescriptor','defineProperty','object','ExtractJwt','__metadata','nestjs-config','3886200HTOTab','JwtStrategy','2hqVXhM','712hGOaFl','5XgLbvs','__decorate','get','1778580ThmJxk','function'];_0x58bb=function(){return _0x417ca8;};return _0x58bb();}function _0x2210(_0x11144e,_0x5a70cd){var _0x58bb66=_0x58bb();return _0x2210=function(_0x221064,_0x5883c4){_0x221064=_0x221064-0x157;var _0x5bec0d=_0x58bb66[_0x221064];return _0x5bec0d;},_0x2210(_0x11144e,_0x5a70cd);}var __decorate=this&&this[_0x3faf30(0x16c)]||function(_0x18cb64,_0x14f69d,_0x5c48ae,_0x426e59){var _0x4ffcc2=_0x3faf30,_0x3afcd7=arguments[_0x4ffcc2(0x15a)],_0x4a9558=_0x3afcd7<0x3?_0x14f69d:_0x426e59===null?_0x426e59=Object[_0x4ffcc2(0x161)](_0x14f69d,_0x5c48ae):_0x426e59,_0x1f11d8;if(typeof Reflect==='object'&&typeof Reflect[_0x4ffcc2(0x157)]===_0x4ffcc2(0x16f))_0x4a9558=Reflect[_0x4ffcc2(0x157)](_0x18cb64,_0x14f69d,_0x5c48ae,_0x426e59);else{for(var _0x568576=_0x18cb64['length']-0x1;_0x568576>=0x0;_0x568576--)if(_0x1f11d8=_0x18cb64[_0x568576])_0x4a9558=(_0x3afcd7<0x3?_0x1f11d8(_0x4a9558):_0x3afcd7>0x3?_0x1f11d8(_0x14f69d,_0x5c48ae,_0x4a9558):_0x1f11d8(_0x14f69d,_0x5c48ae))||_0x4a9558;}return _0x3afcd7>0x3&&_0x4a9558&&Object['defineProperty'](_0x14f69d,_0x5c48ae,_0x4a9558),_0x4a9558;},__metadata=this&&this[_0x3faf30(0x165)]||function(_0x1c1837,_0x54f79b){var _0x3a806e=_0x3faf30;if(typeof Reflect===_0x3a806e(0x163)&&typeof Reflect[_0x3a806e(0x15d)]==='function')return Reflect[_0x3a806e(0x15d)](_0x1c1837,_0x54f79b);};Object[_0x3faf30(0x162)](exports,'__esModule',{'value':!![]}),exports['JwtStrategy']=void 0x0;const nestjs_config_1=require(_0x3faf30(0x166)),passport_jwt_1=require('passport-jwt'),passport_1=require(_0x3faf30(0x159)),common_1=require('@nestjs/common');let JwtStrategy=class JwtStrategy extends(0x0,passport_1['PassportStrategy'])(passport_jwt_1[_0x3faf30(0x15b)]){constructor(_0x298e74){var _0x173f72=_0x3faf30;super({'jwtFromRequest':passport_jwt_1[_0x173f72(0x164)]['fromAuthHeaderAsBearerToken'](),'secretOrKey':_0x298e74[_0x173f72(0x16d)]('jwt')['secret']}),this[_0x173f72(0x170)]=_0x298e74;}async['validate'](_0x543f99){return _0x543f99;}};JwtStrategy=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x3faf30(0x160),[nestjs_config_1['ConfigService']])],JwtStrategy),exports[_0x3faf30(0x168)]=JwtStrategy;