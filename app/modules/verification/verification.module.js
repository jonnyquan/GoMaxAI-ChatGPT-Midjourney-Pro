'use strict';const _0x35bd37=_0x2e7e;(function(_0x2e8471,_0x234a4d){const _0x2a01ea=_0x2e7e,_0x18e504=_0x2e8471();while(!![]){try{const _0x329cd9=parseInt(_0x2a01ea(0x83))/0x1+parseInt(_0x2a01ea(0x8a))/0x2+parseInt(_0x2a01ea(0x87))/0x3*(-parseInt(_0x2a01ea(0x95))/0x4)+-parseInt(_0x2a01ea(0x93))/0x5+parseInt(_0x2a01ea(0x94))/0x6*(parseInt(_0x2a01ea(0x86))/0x7)+parseInt(_0x2a01ea(0x88))/0x8*(parseInt(_0x2a01ea(0x84))/0x9)+parseInt(_0x2a01ea(0x8c))/0xa*(-parseInt(_0x2a01ea(0x89))/0xb);if(_0x329cd9===_0x234a4d)break;else _0x18e504['push'](_0x18e504['shift']());}catch(_0x2245c9){_0x18e504['push'](_0x18e504['shift']());}}}(_0x261d,0xec82a));function _0x2e7e(_0x5af0d3,_0x5e5ffb){const _0x261dc6=_0x261d();return _0x2e7e=function(_0x2e7e7d,_0x23d2d2){_0x2e7e7d=_0x2e7e7d-0x82;let _0x467ad2=_0x261dc6[_0x2e7e7d];return _0x467ad2;},_0x2e7e(_0x5af0d3,_0x5e5ffb);}function _0x261d(){const _0x3492fa=['349437LRKSWR','2719018qkuMBK','function','230wTuzuS','TypeOrmModule','decorate','RedisCacheService','./verifycation.entity','length','object','4378355bTJKOM','486ijBddG','19220WBkPKa','defineProperty','forFeature','95170jZUKwh','905859UamJna','VerificationService','94507NzAjXa','486LVcmup','64kFsLtD'];_0x261d=function(){return _0x3492fa;};return _0x261d();}var __decorate=this&&this['__decorate']||function(_0x105910,_0x28f477,_0x1b0b13,_0x1224e2){const _0x118cd5=_0x2e7e;var _0x585688=arguments[_0x118cd5(0x91)],_0x112e7b=_0x585688<0x3?_0x28f477:_0x1224e2===null?_0x1224e2=Object['getOwnPropertyDescriptor'](_0x28f477,_0x1b0b13):_0x1224e2,_0x451932;if(typeof Reflect===_0x118cd5(0x92)&&typeof Reflect['decorate']===_0x118cd5(0x8b))_0x112e7b=Reflect[_0x118cd5(0x8e)](_0x105910,_0x28f477,_0x1b0b13,_0x1224e2);else{for(var _0x6f97ee=_0x105910[_0x118cd5(0x91)]-0x1;_0x6f97ee>=0x0;_0x6f97ee--)if(_0x451932=_0x105910[_0x6f97ee])_0x112e7b=(_0x585688<0x3?_0x451932(_0x112e7b):_0x585688>0x3?_0x451932(_0x28f477,_0x1b0b13,_0x112e7b):_0x451932(_0x28f477,_0x1b0b13))||_0x112e7b;}return _0x585688>0x3&&_0x112e7b&&Object[_0x118cd5(0x96)](_0x28f477,_0x1b0b13,_0x112e7b),_0x112e7b;};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['VerificationModule']=void 0x0;const typeorm_1=require('@nestjs/typeorm'),common_1=require('@nestjs/common'),verification_service_1=require('./verification.service'),verifycation_entity_1=require(_0x35bd37(0x90)),redisCache_service_1=require('../redisCache/redisCache.service');let VerificationModule=class VerificationModule{};VerificationModule=__decorate([(0x0,common_1['Module'])({'imports':[typeorm_1[_0x35bd37(0x8d)][_0x35bd37(0x82)]([verifycation_entity_1['VerifycationEntity']])],'providers':[redisCache_service_1[_0x35bd37(0x8f)],verification_service_1[_0x35bd37(0x85)]]})],VerificationModule),exports['VerificationModule']=VerificationModule;