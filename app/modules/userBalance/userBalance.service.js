'use strict';const _0x30df98=_0x2d02;(function(_0x1697f0,_0x277d7b){const _0x28834f=_0x2d02,_0x54fdea=_0x1697f0();while(!![]){try{const _0x57cf32=parseInt(_0x28834f(0x1e4))/0x1*(-parseInt(_0x28834f(0x1cd))/0x2)+-parseInt(_0x28834f(0x197))/0x3*(parseInt(_0x28834f(0x1b0))/0x4)+parseInt(_0x28834f(0x19a))/0x5*(parseInt(_0x28834f(0x1bd))/0x6)+parseInt(_0x28834f(0x1b8))/0x7+parseInt(_0x28834f(0x1a7))/0x8+-parseInt(_0x28834f(0x1ce))/0x9*(parseInt(_0x28834f(0x1d8))/0xa)+parseInt(_0x28834f(0x1ad))/0xb;if(_0x57cf32===_0x277d7b)break;else _0x54fdea['push'](_0x54fdea['shift']());}catch(_0xc1ff1c){_0x54fdea['push'](_0x54fdea['shift']());}}}(_0x2af5,0xeae3f));var __decorate=this&&this[_0x30df98(0x1b7)]||function(_0x57fee0,_0x625e0b,_0x222ed9,_0x22a7c8){const _0x902cee=_0x30df98;var _0x251734=arguments[_0x902cee(0x1ba)],_0x522f01=_0x251734<0x3?_0x625e0b:_0x22a7c8===null?_0x22a7c8=Object['getOwnPropertyDescriptor'](_0x625e0b,_0x222ed9):_0x22a7c8,_0x3b8184;if(typeof Reflect===_0x902cee(0x1c6)&&typeof Reflect[_0x902cee(0x1c3)]==='function')_0x522f01=Reflect['decorate'](_0x57fee0,_0x625e0b,_0x222ed9,_0x22a7c8);else{for(var _0x198d39=_0x57fee0['length']-0x1;_0x198d39>=0x0;_0x198d39--)if(_0x3b8184=_0x57fee0[_0x198d39])_0x522f01=(_0x251734<0x3?_0x3b8184(_0x522f01):_0x251734>0x3?_0x3b8184(_0x625e0b,_0x222ed9,_0x522f01):_0x3b8184(_0x625e0b,_0x222ed9))||_0x522f01;}return _0x251734>0x3&&_0x522f01&&Object['defineProperty'](_0x625e0b,_0x222ed9,_0x522f01),_0x522f01;},__metadata=this&&this[_0x30df98(0x1b1)]||function(_0x71a97a,_0x554366){const _0x4ec06d=_0x30df98;if(typeof Reflect===_0x4ec06d(0x1c6)&&typeof Reflect[_0x4ec06d(0x19b)]===_0x4ec06d(0x191))return Reflect['metadata'](_0x71a97a,_0x554366);},__param=this&&this[_0x30df98(0x188)]||function(_0x54866a,_0x3713ed){return function(_0x2570be,_0x1b8b18){_0x3713ed(_0x2570be,_0x1b8b18,_0x54866a);};};Object[_0x30df98(0x1bf)](exports,_0x30df98(0x18c),{'value':!![]}),exports[_0x30df98(0x1d5)]=void 0x0;const typeorm_1=require(_0x30df98(0x1a6)),common_1=require('@nestjs/common'),typeorm_2=require('typeorm'),balance_constant_1=require(_0x30df98(0x1a9)),accountLog_entity_1=require('./accountLog.entity'),cramiPackage_entity_1=require(_0x30df98(0x1b9)),salesUsers_entity_1=require(_0x30df98(0x1cc)),sales_service_1=require('../sales/sales.service'),user_service_1=require(_0x30df98(0x1c7)),accountVipLog_entity_1=require('./accountVipLog.entity'),utils_1=require('../../common/utils'),nestjs_cls_1=require('nestjs-cls');function _0x2af5(){const _0x250739=['length','score','\x0a\x20\x20\x20\x20','10924806fuSLvf','save','defineProperty','\x20AND\x20al.createdAt\x20>=\x20\x27','log','%\x27\x20OR\x20u.email\x20LIKE\x20\x27%','decorate','PurchasePackage','update','object','../user/user.service','\x0a\x20\x20\x20\x20\x20\x20SELECT\x0a\x20\x20\x20\x20\x20\x20\x20\x20al.*,\x0a\x20\x20\x20\x20\x20\x20\x20\x20al.raw_score\x20AS\x20rawScore,\x0a\x20\x20\x20\x20\x20\x20\x20\x20al.new_score\x20AS\x20newScore,\x0a\x20\x20\x20\x20\x20\x20\x20\x20al.change_score\x20AS\x20changeScore,\x0a\x20\x20\x20\x20\x20\x20\x20\x20al.change_type\x20AS\x20changeType,\x0a\x20\x20\x20\x20\x20\x20\x20\x20al.relate_id\x20AS\x20relateId,\x0a\x20\x20\x20\x20\x20\x20\x20\x20al.rebate_user_id\x20AS\x20rebateUserId,\x0a\x20\x20\x20\x20\x20\x20\x20\x20al.del_flag\x20AS\x20delFlag,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u.username,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u.phone,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u.nickname,\x0a\x20\x20\x20\x20\x20\x20\x20\x20u.email\x20\x0a\x20\x20\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x20\x20account_log\x20al\x0a\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20users\x20u\x20ON\x20al.userId\x20=\x20u.id\x20\x0a\x20\x20\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20\x20\x20','\x20AND\x20(\x20u.username\x20LIKE\x20\x27%','CramiPackageEntity','AccountLogEntity','../sales/salesUsers.entity','232252scxplC','9ZjWtBV','>\x200','addBalanceToOrder','design:paramtypes','Inject','AccountVipLogEntity','userService','UserBalanceService','UserService','\x20AND\x20al.change_score\x20','2048530asPePl','maskEmail','increase','isPlatform','ids','HttpStatus','user','insertAccountVipLog','\x20AND\x20al.createdAt\x20<=\x20\x27','total','<\x200','%\x27\x20OR\x20u.nickname\x20LIKE\x20\x27%','14YocWXo','salesUsersEntity','HttpException','SalesUsersEntity','\x20OFFSET\x20','userPage','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20al.del_flag\x20=\x200\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','forEach','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','accountVipLogEntity','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20count(*)\x20AS\x20count\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20account_log\x20al\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20LEFT\x20JOIN\x20users\x20u\x20ON\x20al.userId\x20=\x20u.id\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','EChangeType','deleteAccountLog','getUserById','findOne','__param','充值的订单信息:','myPage','cramiPackageEntity','__esModule','email','isManage','\x20AND\x20al.saasId\x20=\x20','购买套餐:\x20','function','count','saveCommissionAmount','\x20AND\x20al.change_type\x20=\x20','Connection','salesService','3fVGtWI','error:\x20','createSalesRecords','5DMpYwb','metadata','getReqSaasId','BAD_REQUEST','updateVipExpire','invitedBy','insertAccountLog','非法操作、当前充值套餐暂不存在！','toFixed','query','accountLogEntity','clsService','@nestjs/typeorm','712632UdftTQ','changeScore4Other','../../common/constants/balance.constant','%\x27\x20)','name','Injectable','2452802xAUuFy','InjectRepository','getUserByInviteCode','3364628NyIoOj','__metadata','phone','Repository','%\x27\x20OR\x20u.phone\x20LIKE\x20\x27%','SalesService','forwardRef','__decorate','10507161pdFZck','../crami/cramiPackage.entity'];_0x2af5=function(){return _0x250739;};return _0x2af5();}function _0x2d02(_0x5df8e2,_0x38bfca){const _0x2af59e=_0x2af5();return _0x2d02=function(_0x2d02a2,_0x231e22){_0x2d02a2=_0x2d02a2-0x182;let _0x21fc91=_0x2af59e[_0x2d02a2];return _0x21fc91;},_0x2d02(_0x5df8e2,_0x38bfca);}let UserBalanceService=class UserBalanceService{constructor(_0x5d1f1d,_0x3f211f,_0x48d192,_0x97b301,_0x1eec3e,_0x3b57fa,_0x27992e,_0x37f1e9){const _0x5c2e7c=_0x30df98;this[_0x5c2e7c(0x1a4)]=_0x5d1f1d,this[_0x5c2e7c(0x182)]=_0x3f211f,this[_0x5c2e7c(0x18b)]=_0x48d192,this[_0x5c2e7c(0x1e5)]=_0x97b301,this[_0x5c2e7c(0x1d4)]=_0x1eec3e,this[_0x5c2e7c(0x196)]=_0x3b57fa,this[_0x5c2e7c(0x1a5)]=_0x27992e,this['connection']=_0x37f1e9;}async[_0x30df98(0x1d0)](_0x3bac84){const _0x28369a=_0x30df98;console[_0x28369a(0x1c1)](_0x28369a(0x189),_0x3bac84);try{const {userId:_0x2cfa30,goodsId:_0x538966}=_0x3bac84,_0x408f77=await this[_0x28369a(0x18b)][_0x28369a(0x187)]({'where':{'id':_0x538966,'status':0x1}});if(!_0x408f77)throw new common_1['HttpException'](_0x28369a(0x1a1),common_1[_0x28369a(0x1dd)][_0x28369a(0x19d)]);const _0x4cf6ff=await this[_0x28369a(0x1d4)][_0x28369a(0x186)](_0x2cfa30);_0x408f77[_0x28369a(0x1bb)]>0x0&&await this[_0x28369a(0x1d4)][_0x28369a(0x1a8)](_0x4cf6ff,balance_constant_1['EChangeType']['PurchasePackage'],_0x408f77['score'],'购买套餐：'+_0x408f77[_0x28369a(0x1ab)],_0x408f77['id']);_0x408f77['days']!==0x0&&await this[_0x28369a(0x1d4)][_0x28369a(0x19e)](_0x4cf6ff,balance_constant_1[_0x28369a(0x184)][_0x28369a(0x1c4)],_0x408f77['days'],_0x28369a(0x190)+_0x408f77[_0x28369a(0x1ab)],_0x408f77['id']);if(_0x4cf6ff[_0x28369a(0x19f)]){const _0x12ad0e=await this[_0x28369a(0x1d4)][_0x28369a(0x1af)](_0x4cf6ff[_0x28369a(0x19f)]);if(!_0x12ad0e)return;const _0x8fc4ea=await this[_0x28369a(0x1e5)][_0x28369a(0x187)]({'where':{'userId':_0x12ad0e['id']}}),{id:_0x1b4c6f}=_0x12ad0e,{performanceRatio:_0x7f11ed}=_0x8fc4ea,_0x9d04ee={'inviterUserId':_0x1b4c6f,'inviteeUserId':_0x2cfa30,'orderId':_0x3bac84['id'],'orderPrice':_0x3bac84[_0x28369a(0x1e1)],'commissionPercentage':_0x7f11ed,'commissionAmount':(_0x3bac84[_0x28369a(0x1e1)]*_0x7f11ed/0x64)[_0x28369a(0x1a2)](0x2)};await this['salesService'][_0x28369a(0x199)](_0x9d04ee),await this['salesService'][_0x28369a(0x193)](_0x1b4c6f,_0x9d04ee['commissionAmount']);}}catch(_0x5ea73e){console[_0x28369a(0x1c1)](_0x28369a(0x198),_0x5ea73e);throw new common_1[(_0x28369a(0x1e6))]('充值失败！',common_1[_0x28369a(0x1dd)][_0x28369a(0x19d)]);}}async[_0x30df98(0x1e9)](_0x1baf46,_0x5f267f,_0x3ccf90){const _0x3ac2f1=_0x30df98,_0x1b191c=(0x0,utils_1['getReqSaasId'])(this[_0x3ac2f1(0x1a5)]),{page:page=0x1,size:size=0x14,startTime:_0x23f987,endTime:_0x5bc83d,keyword:_0x58b815,saasId:_0x5a4fd6,changeType:_0x463412,creaseType:_0x435bbc}=_0x5f267f;let _0x1927da=_0x3ac2f1(0x1ea)+(_0x3ccf90?'\x20AND\x20al.userId\x20=\x20'+_0x3ccf90:'')+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x463412?_0x3ac2f1(0x194)+_0x463412:'')+_0x3ac2f1(0x1ec)+(_0x435bbc?_0x3ac2f1(0x1d7)+(_0x435bbc===_0x3ac2f1(0x1da)?_0x3ac2f1(0x1cf):_0x3ac2f1(0x1e2)):'')+_0x3ac2f1(0x1ec)+(_0x23f987?_0x3ac2f1(0x1c0)+_0x23f987+'\x27':'')+_0x3ac2f1(0x1ec)+(_0x5bc83d?_0x3ac2f1(0x1e0)+_0x5bc83d+'\x27':'')+_0x3ac2f1(0x1ec)+(_0x58b815?_0x3ac2f1(0x1c9)+_0x58b815+_0x3ac2f1(0x1b4)+_0x58b815+_0x3ac2f1(0x1e3)+_0x58b815+_0x3ac2f1(0x1c2)+_0x58b815+_0x3ac2f1(0x1aa):'')+_0x3ac2f1(0x1bc);(0x0,utils_1[_0x3ac2f1(0x1db)])(this['clsService'])?(0x0,utils_1[_0x3ac2f1(0x18e)])(this[_0x3ac2f1(0x1a5)])&&_0x5a4fd6&&(_0x1927da=_0x1927da+(_0x3ac2f1(0x18f)+_0x5a4fd6)):_0x1927da=_0x1927da+('\x20AND\x20al.saasId\x20=\x20'+_0x1b191c);const _0x1783d6=_0x3ac2f1(0x183)+_0x1927da+_0x3ac2f1(0x1bc),_0x165748=_0x3ac2f1(0x1c8)+_0x1927da+'\x0a\x20\x20\x20\x20\x20\x20ORDER\x20BY\x0a\x20\x20\x20\x20\x20\x20\x20\x20al.createdAt\x20DESC\x20\x0a\x20\x20\x20\x20\x20\x20LIMIT\x20'+size+_0x3ac2f1(0x1e8)+(page-0x1)*size+'\x0a\x20\x20\x20\x20',_0x5e23d2=await this['connection']['query'](_0x1783d6),_0x2d031e=await this['connection'][_0x3ac2f1(0x1a3)](_0x165748);return!(0x0,utils_1['isSuper'])(this[_0x3ac2f1(0x1a5)])&&_0x2d031e[_0x3ac2f1(0x1eb)](_0x29fb60=>{const _0x53a646=_0x3ac2f1;_0x29fb60[_0x53a646(0x18d)]=(0x0,utils_1[_0x53a646(0x1d9)])(_0x29fb60[_0x53a646(0x18d)]),_0x29fb60[_0x53a646(0x1b2)]=(0x0,utils_1[_0x53a646(0x1d9)])(_0x29fb60[_0x53a646(0x1b2)]);}),{'rows':_0x2d031e,'count':Number(_0x5e23d2[0x0]?.[_0x3ac2f1(0x192)]||0x0)};}async[_0x30df98(0x18a)](_0x2e7668,_0x498603){const _0x42984e=_0x30df98;return this[_0x42984e(0x1e9)](_0x2e7668,_0x498603,_0x2e7668[_0x42984e(0x1de)]['id']);}async[_0x30df98(0x185)](_0x1906e8){const _0x5f26bc=_0x30df98;if(!_0x1906e8[_0x5f26bc(0x1dc)]['length'])return!![];return await this[_0x5f26bc(0x1a4)][_0x5f26bc(0x1c5)]({'id':(0x0,typeorm_2['In'])(_0x1906e8[_0x5f26bc(0x1dc)])},{'delFlag':0x1}),!![];}async[_0x30df98(0x1a0)](_0x3da3ba){const _0x3907e0=_0x30df98,_0x4df945=(0x0,utils_1[_0x3907e0(0x19c)])(this[_0x3907e0(0x1a5)]);await this[_0x3907e0(0x1a4)][_0x3907e0(0x1be)]({..._0x3da3ba,'saasId':_0x4df945});}async[_0x30df98(0x1df)](_0x236a16){const _0xdd7965=_0x30df98;await this[_0xdd7965(0x182)][_0xdd7965(0x1be)](_0x236a16);}};UserBalanceService=__decorate([(0x0,common_1[_0x30df98(0x1ac)])(),__param(0x0,(0x0,typeorm_1[_0x30df98(0x1ae)])(accountLog_entity_1[_0x30df98(0x1cb)])),__param(0x1,(0x0,typeorm_1[_0x30df98(0x1ae)])(accountVipLog_entity_1[_0x30df98(0x1d3)])),__param(0x2,(0x0,typeorm_1['InjectRepository'])(cramiPackage_entity_1[_0x30df98(0x1ca)])),__param(0x3,(0x0,typeorm_1[_0x30df98(0x1ae)])(salesUsers_entity_1[_0x30df98(0x1e7)])),__param(0x4,(0x0,common_1[_0x30df98(0x1d2)])((0x0,common_1[_0x30df98(0x1b6)])(()=>user_service_1[_0x30df98(0x1d6)]))),__metadata(_0x30df98(0x1d1),[typeorm_2[_0x30df98(0x1b3)],typeorm_2[_0x30df98(0x1b3)],typeorm_2['Repository'],typeorm_2[_0x30df98(0x1b3)],user_service_1[_0x30df98(0x1d6)],sales_service_1[_0x30df98(0x1b5)],nestjs_cls_1['ClsService'],typeorm_2[_0x30df98(0x195)]])],UserBalanceService),exports[_0x30df98(0x1d5)]=UserBalanceService;