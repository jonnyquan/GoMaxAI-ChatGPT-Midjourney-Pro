'use strict';function _0x48fb(){const _0x4dd3e8=['remixSubmit','settings','put','upload_url','imagine','uploadImage','guild_id','relax','apiBaseUrl','defineProperty','fetch','status','info','提交图片:\x20','session_id','setAttachment','upload_filename','interactions','MidjourneyApi','/api/v9/channels/','3617268lfwxzu','createRandomId','random','REQUEST_SUCCESS','/api/v9/interactions','waitMessage','REQUEST_FAILED','split','nonce','token','3799428xZCuXn','opts','3158796KhjaKi','__esModule','getCommand','map','catch','13511967geVzXO','6613410WcZBWQ','replace','assign','./command','discordsaysUrl','describe','3160268mAPaeT','upload\x20image\x20fail,\x20because\x20of\x20upload\x20fail','options','application/json','channel_id','/attachments','blend','image/png','filter','post','then','all','data','1506488RXUskD','isomorphic-fetch','length','attachments','POST','fast','nextNonce','regionNonce:\x20','MidjourneyCommand','json','upload\x20image\x20fail,\x20no\x20attachment','action','getPayload','stringify','please\x20invoke\x20`init`\x20method\x20before\x20every\x20operate'];_0x48fb=function(){return _0x4dd3e8;};return _0x48fb();}const _0x1ccca0=_0x3b47;function _0x3b47(_0x3ff893,_0x2d36f5){const _0x48fb05=_0x48fb();return _0x3b47=function(_0x3b4723,_0x2f4267){_0x3b4723=_0x3b4723-0x140;let _0x6a6b=_0x48fb05[_0x3b4723];return _0x6a6b;},_0x3b47(_0x3ff893,_0x2d36f5);}(function(_0x21e0e2,_0x28ade9){const _0x766b5=_0x3b47,_0x31267f=_0x21e0e2();while(!![]){try{const _0x180840=parseInt(_0x766b5(0x155))/0x1+-parseInt(_0x766b5(0x148))/0x2+parseInt(_0x766b5(0x178))/0x3+parseInt(_0x766b5(0x182))/0x4+parseInt(_0x766b5(0x142))/0x5+-parseInt(_0x766b5(0x184))/0x6+-parseInt(_0x766b5(0x141))/0x7;if(_0x180840===_0x28ade9)break;else _0x31267f['push'](_0x31267f['shift']());}catch(_0x55ad5d){_0x31267f['push'](_0x31267f['shift']());}}}(_0x48fb,0xe76be));Object[_0x1ccca0(0x16d)](exports,_0x1ccca0(0x185),{'value':!![]}),exports['MidjourneyApi']=void 0x0;const fetch=require(_0x1ccca0(0x156)),command_1=require(_0x1ccca0(0x145)),utils_1=require('./utils');class MidjourneyApi extends command_1[_0x1ccca0(0x15d)]{constructor(_0x5aa072){const _0x8ce597=_0x1ccca0;super(_0x5aa072),this[_0x8ce597(0x183)]=_0x5aa072;}['interactions'](_0x3f019e,_0x34af45){const _0x1c33d4=_0x1ccca0,_0x57da8f={'Content-Type':'application/json','Authorization':this[_0x1c33d4(0x183)][_0x1c33d4(0x181)]};return fetch(this['opts'][_0x1c33d4(0x16c)]+_0x1c33d4(0x17c),{'method':_0x1c33d4(0x159),'body':JSON['stringify'](_0x3f019e),'headers':_0x57da8f})['then'](_0x405d72=>_0x405d72['ok']?_0x34af45?.(_0x1c33d4(0x17b),_0x405d72):_0x34af45?.('REQUEST_FAILED',_0x405d72))[_0x1c33d4(0x140)](_0x592e8f=>_0x34af45?.(_0x1c33d4(0x17e),_0x592e8f));}['getPayload'](_0x181a8f,_0x3556a3,_0x11d191={},_0x3e53e9=(0x0,utils_1[_0x1ccca0(0x15b)])()){const _0x5cdb0e=_0x1ccca0;if(!this[_0x5cdb0e(0x183)]['session_id'])throw new Error(_0x5cdb0e(0x163));return Object['assign']({'type':_0x181a8f,'application_id':'936929561302675456','guild_id':this[_0x5cdb0e(0x183)][_0x5cdb0e(0x16a)],'channel_id':this[_0x5cdb0e(0x183)][_0x5cdb0e(0x14c)],'session_id':this[_0x5cdb0e(0x183)][_0x5cdb0e(0x172)],'nonce':_0x3e53e9,'data':_0x3556a3},_0x11d191);}['inpaint'](_0x134b7f,_0x393a48,_0x4f725b,_0xdd1ac5){const _0x20f080=_0x1ccca0,_0x4cc597={'Content-Type':_0x20f080(0x14b)};return fetch(this[_0x20f080(0x183)][_0x20f080(0x146)]+'/inpaint/api/submit-job',{'method':_0x20f080(0x159),'body':JSON[_0x20f080(0x162)]({'customId':_0x134b7f,'prompt':_0x393a48,'mask':_0x4f725b[_0x20f080(0x143)](/^data:.+?;base64,/,''),'userId':'0','username':'0','full_prompt':null}),'headers':_0x4cc597})[_0x20f080(0x152)](_0x2560d8=>_0x2560d8['ok']?_0xdd1ac5?.(_0x20f080(0x17b),_0x2560d8):_0xdd1ac5?.(_0x20f080(0x17e),_0x2560d8))[_0x20f080(0x140)](_0x91bc9f=>_0xdd1ac5?.(_0x20f080(0x17e),_0x91bc9f));}async[_0x1ccca0(0x168)](_0x430e30,_0x257314){const _0x523f80=_0x1ccca0;return this['getCommand'](_0x523f80(0x168))[_0x523f80(0x152)](_0xe94beb=>{const _0x2194d8=_0x523f80,_0x3a8567=this[_0x2194d8(0x161)](0x2,Object[_0x2194d8(0x144)](_0xe94beb,{'options':[{..._0xe94beb?.[_0x2194d8(0x14a)][0x0],'value':_0x430e30}]}));return Promise[_0x2194d8(0x153)]([this[_0x2194d8(0x175)](_0x3a8567,_0x257314),this['opts']['ws']?.[_0x2194d8(0x17d)]({'nonce':_0x3a8567[_0x2194d8(0x180)],'cb':_0x257314})])[_0x2194d8(0x152)](([_0x3f8d92,_0x2a752b])=>_0x2a752b);});}async[_0x1ccca0(0x173)](_0x4845dc){const _0xb3303f=_0x1ccca0,_0x47026b=this[_0xb3303f(0x183)][_0xb3303f(0x16c)]+_0xb3303f(0x177)+this[_0xb3303f(0x183)][_0xb3303f(0x14c)]+_0xb3303f(0x14d),_0x4c3686={'Content-Type':_0xb3303f(0x14b),'Authorization':this[_0xb3303f(0x183)][_0xb3303f(0x181)]},{files:_0x322050}=_0x4845dc;try{return await this[_0xb3303f(0x183)][_0xb3303f(0x16e)](_0x47026b,{'headers':_0x4c3686,'body':JSON[_0xb3303f(0x162)](_0x322050),'method':_0xb3303f(0x151)})[_0xb3303f(0x152)](_0x1c71a7=>_0x1c71a7[_0xb3303f(0x15e)]());}catch(_0x37e001){console['log'](_0xb3303f(0x171),_0x37e001);}}[_0x1ccca0(0x179)](){const _0x45f388=_0x1ccca0;return parseInt(Math[_0x45f388(0x17a)]()*0x3e8+'')+'';}async[_0x1ccca0(0x169)](_0x570fdf){const _0x4b627b=_0x1ccca0,{buffer:_0x5ec70b,filename:_0x8a7bf3}=_0x570fdf,_0x41d68=_0x5ec70b[_0x4b627b(0x157)],_0x137b9a=this[_0x4b627b(0x179)](),_0x362a8b=await this[_0x4b627b(0x173)]({'files':[{'filename':_0x8a7bf3,'file_size':_0x41d68,'id':_0x137b9a,'is_clip':![]}]});if(_0x362a8b[_0x4b627b(0x16f)]!=0xc8)throw new Error(_0x4b627b(0x15f));const _0x5a2576=_0x362a8b[_0x4b627b(0x154)];if(_0x5a2576[_0x4b627b(0x158)]?.[_0x4b627b(0x157)]!=0x1)throw new Error(_0x4b627b(0x15f));const _0x4f0663=await this['opts'][_0x4b627b(0x16e)](_0x5a2576[_0x4b627b(0x158)][0x0][_0x4b627b(0x167)],{'method':_0x4b627b(0x166),'body':_0x5ec70b,'headers':{'Content-Type':_0x4b627b(0x14f)}});if(_0x4f0663[_0x4b627b(0x16f)]!=0xc8)throw new Error(_0x4b627b(0x149));const _0x3690eb=_0x5a2576[_0x4b627b(0x158)][0x0][_0x4b627b(0x174)],_0x430c8f=_0x3690eb[_0x4b627b(0x17f)]('/'),_0x6eb2ea=_0x430c8f['length']>0x1?_0x430c8f[0x1]:_0x430c8f[0x0];return{'attachments':[{'id':_0x137b9a,'filename':_0x6eb2ea,'uploaded_filename':_0x3690eb}]};}async[_0x1ccca0(0x14e)](_0x436c1e,_0x4a311f){const _0x3166be=_0x1ccca0;return this[_0x3166be(0x186)](_0x3166be(0x14e))['then'](_0x370135=>{const _0x957c07=_0x3166be,_0x1a9e4a=_0x370135[_0x957c07(0x14a)][_0x957c07(0x150)](_0x34fad5=>_0x34fad5['type']===0xb),_0x1082eb=_0x436c1e[_0x957c07(0x187)]((_0x259e85,_0x1be3ce)=>{return{..._0x1a9e4a[_0x1be3ce],'value':_0x259e85['id']};}),_0x12dbb1=this[_0x957c07(0x161)](0x2,Object[_0x957c07(0x144)](_0x370135,{'options':_0x1082eb,'attachments':_0x436c1e}));return Promise[_0x957c07(0x153)]([this[_0x957c07(0x175)](_0x12dbb1,_0x4a311f),this[_0x957c07(0x183)]['ws']?.[_0x957c07(0x17d)]({'nonce':_0x12dbb1[_0x957c07(0x180)],'cb':_0x4a311f})])[_0x957c07(0x152)](([_0x1b1e7a,_0x381f72])=>_0x381f72);});}async[_0x1ccca0(0x147)](_0x91fdd4,_0x4510bc){const _0x12d5e8=_0x1ccca0;return this[_0x12d5e8(0x186)](_0x12d5e8(0x147))[_0x12d5e8(0x152)](_0x27b417=>{const _0x5a3d6f=_0x12d5e8,_0x36d344=this[_0x5a3d6f(0x161)](0x2,Object[_0x5a3d6f(0x144)](_0x27b417,{'options':[{..._0x27b417?.['options'][0x0],'value':_0x91fdd4[0x0]['id']}],'attachments':_0x91fdd4}));return Promise[_0x5a3d6f(0x153)]([this[_0x5a3d6f(0x175)](_0x36d344,_0x4510bc),this[_0x5a3d6f(0x183)]['ws']?.[_0x5a3d6f(0x17d)]({'nonce':_0x36d344[_0x5a3d6f(0x180)],'cb':_0x4510bc})])[_0x5a3d6f(0x152)](([_0x15d9be,_0x348694])=>_0x348694);});}async[_0x1ccca0(0x160)](_0x134139,_0x18a28e,_0x10a818,_0x4be45e){const _0xcd358e=_0x1ccca0,_0x470268=this['getPayload'](0x3,{'component_type':0x2,'custom_id':_0x18a28e},{'message_flags':_0x10a818,'message_id':_0x134139});return Promise[_0xcd358e(0x153)]([this[_0xcd358e(0x175)](_0x470268,_0x4be45e),this[_0xcd358e(0x183)]['ws']?.[_0xcd358e(0x17d)]({'nonce':_0x470268[_0xcd358e(0x180)],'cb':_0x4be45e,'parentId':_0x134139})])[_0xcd358e(0x152)](([_0x530405,_0x5c0cf5])=>_0x5c0cf5);}async[_0x1ccca0(0x164)](_0x181b00,_0x2d3179,_0x28706c,_0x2d09e8){const _0x5c2738=_0x1ccca0,_0xf58348=this[_0x5c2738(0x161)](0x5,{'id':_0x181b00,'custom_id':_0x2d3179,'components':_0x28706c});return Promise[_0x5c2738(0x153)]([this[_0x5c2738(0x175)](_0xf58348,_0x2d09e8),this[_0x5c2738(0x183)]['ws']?.[_0x5c2738(0x17d)]({'nonce':_0xf58348[_0x5c2738(0x180)],'cb':_0x2d09e8})])[_0x5c2738(0x152)](([_0x748b23,_0x488ffb])=>_0x488ffb);}async['varyRegion'](_0x417b85,_0xea150f,_0x28d178,_0x230bab){const _0x4da21f=_0x1ccca0,_0x4adc57=(0x0,utils_1[_0x4da21f(0x15b)])();return Promise[_0x4da21f(0x153)]([this['inpaint'](_0x417b85,_0x4da21f(0x15c)+_0x4adc57+',\x20'+_0xea150f,_0x28d178,_0x230bab),this[_0x4da21f(0x183)]['ws']?.['waitMessage']({'nonce':_0x4adc57,'cb':_0x230bab})])[_0x4da21f(0x152)](([_0x2d24e9,_0x1078a2])=>_0x1078a2);}async[_0x1ccca0(0x170)](_0xbe6ef5){const _0x582cfd=_0x1ccca0;return this[_0x582cfd(0x186)](_0x582cfd(0x170))[_0x582cfd(0x152)](_0x3f39ee=>{const _0x2879ef=_0x582cfd,_0x1fa965=this[_0x2879ef(0x161)](0x2,_0x3f39ee);return Promise[_0x2879ef(0x153)]([this['interactions'](_0x1fa965,_0xbe6ef5),this[_0x2879ef(0x183)]['ws']?.[_0x2879ef(0x17d)]({'nonce':_0x1fa965['nonce'],'cb':_0xbe6ef5})])[_0x2879ef(0x152)](([_0x590e0d,_0x30870a])=>_0x30870a);});}async[_0x1ccca0(0x165)](_0x295c09){const _0x358a16=_0x1ccca0;return this[_0x358a16(0x186)](_0x358a16(0x165))['then'](_0x5dd849=>{const _0x4d2430=_0x358a16,_0x4eb75c=this[_0x4d2430(0x161)](0x2,_0x5dd849);return Promise[_0x4d2430(0x153)]([this['interactions'](_0x4eb75c,_0x295c09),this['opts']['ws']?.[_0x4d2430(0x17d)]({'nonce':_0x4eb75c[_0x4d2430(0x180)],'cb':_0x295c09})])['then'](([_0xc43b0a,_0x42aebb])=>_0x42aebb);});}async['fast'](_0x23f729){const _0x517897=_0x1ccca0;return this[_0x517897(0x186)](_0x517897(0x15a))[_0x517897(0x152)](_0x1d605e=>{const _0x4c1259=_0x517897,_0x3c0f36=this[_0x4c1259(0x161)](0x2,_0x1d605e);return Promise['all']([this['interactions'](_0x3c0f36,_0x23f729),this['opts']['ws']?.[_0x4c1259(0x17d)]({'nonce':_0x3c0f36[_0x4c1259(0x180)],'cb':_0x23f729})])['then'](([_0x428af7,_0x5174e5])=>_0x5174e5);});}async[_0x1ccca0(0x16b)](_0x22e676){const _0x1b2baa=_0x1ccca0;return this[_0x1b2baa(0x186)]('relax')[_0x1b2baa(0x152)](_0x277a70=>{const _0x2105c7=_0x1b2baa,_0x58edae=this[_0x2105c7(0x161)](0x2,_0x277a70);return Promise[_0x2105c7(0x153)]([this[_0x2105c7(0x175)](_0x58edae,_0x22e676),this['opts']['ws']?.[_0x2105c7(0x17d)]({'nonce':_0x58edae[_0x2105c7(0x180)],'cb':_0x22e676})])['then'](([_0x1678fe,_0x2516fc])=>_0x2516fc);});}}exports[_0x1ccca0(0x176)]=MidjourneyApi;