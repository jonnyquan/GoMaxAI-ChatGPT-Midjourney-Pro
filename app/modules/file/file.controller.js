'use strict';const _0x3aed11=_0x1c24;(function(_0x4ad2ca,_0x3254c2){const _0x3138ef=_0x1c24,_0x18f488=_0x4ad2ca();while(!![]){try{const _0x222f33=parseInt(_0x3138ef(0xf9))/0x1*(parseInt(_0x3138ef(0xec))/0x2)+-parseInt(_0x3138ef(0x110))/0x3*(-parseInt(_0x3138ef(0xe6))/0x4)+parseInt(_0x3138ef(0xf4))/0x5+parseInt(_0x3138ef(0xed))/0x6*(parseInt(_0x3138ef(0x10c))/0x7)+parseInt(_0x3138ef(0xee))/0x8*(-parseInt(_0x3138ef(0x11b))/0x9)+-parseInt(_0x3138ef(0xf5))/0xa+-parseInt(_0x3138ef(0x11d))/0xb*(parseInt(_0x3138ef(0x117))/0xc);if(_0x222f33===_0x3254c2)break;else _0x18f488['push'](_0x18f488['shift']());}catch(_0x1bccd9){_0x18f488['push'](_0x18f488['shift']());}}}(_0x4615,0x3d9ce));function _0x4615(){const _0x112a41=['FileService','uploadFile','通过url下载文件，解决跨域问题','Body','defineProperty','getModalImgById','ApiTags','function','length','decorate','__metadata','21pgseWJ','fileService','down','UploadedFile','3936UIXiIL','originalname','design:returntype','Req','UseInterceptors','Get','file','24WaDaDG','__param','design:paramtypes','from','81zubAmd','__esModule','2028620JSuhJc','binary','getProxyRequest','./file.service','Post','1108ztmQDf','downFile','buffer','@nestjs/swagger','通过任务id获取原始任务的图片base64，并解决跨域问题','url','2RMFKUV','480114CnTumU','298736cDDUcN','@nestjs/platform-express','上传文件','upload2Local','design:type','Controller','316555IKOXKU','870890TklEjt','ApiBearerAuth','prototype','FileController','377581FRJmlq','__decorate','ApiOperation','FileInterceptor','object','metadata','上传文件到本地服务器','utf-8'];_0x4615=function(){return _0x112a41;};return _0x4615();}var __decorate=this&&this[_0x3aed11(0xfa)]||function(_0x47956d,_0x50ac38,_0x351fcd,_0x473ad6){const _0x174a08=_0x3aed11;var _0x304907=arguments['length'],_0x1b272c=_0x304907<0x3?_0x50ac38:_0x473ad6===null?_0x473ad6=Object['getOwnPropertyDescriptor'](_0x50ac38,_0x351fcd):_0x473ad6,_0x45100f;if(typeof Reflect==='object'&&typeof Reflect[_0x174a08(0x10a)]==='function')_0x1b272c=Reflect[_0x174a08(0x10a)](_0x47956d,_0x50ac38,_0x351fcd,_0x473ad6);else{for(var _0x5374a6=_0x47956d[_0x174a08(0x109)]-0x1;_0x5374a6>=0x0;_0x5374a6--)if(_0x45100f=_0x47956d[_0x5374a6])_0x1b272c=(_0x304907<0x3?_0x45100f(_0x1b272c):_0x304907>0x3?_0x45100f(_0x50ac38,_0x351fcd,_0x1b272c):_0x45100f(_0x50ac38,_0x351fcd))||_0x1b272c;}return _0x304907>0x3&&_0x1b272c&&Object[_0x174a08(0x105)](_0x50ac38,_0x351fcd,_0x1b272c),_0x1b272c;},__metadata=this&&this[_0x3aed11(0x10b)]||function(_0x2daf52,_0x20c0e0){const _0x4cecb4=_0x3aed11;if(typeof Reflect===_0x4cecb4(0xfd)&&typeof Reflect[_0x4cecb4(0xfe)]===_0x4cecb4(0x108))return Reflect[_0x4cecb4(0xfe)](_0x2daf52,_0x20c0e0);},__param=this&&this[_0x3aed11(0x118)]||function(_0x4413ea,_0xfc9477){return function(_0x831360,_0x290594){_0xfc9477(_0x831360,_0x290594,_0x4413ea);};};Object[_0x3aed11(0x105)](exports,_0x3aed11(0x11c),{'value':!![]}),exports[_0x3aed11(0xf8)]=void 0x0;const file_service_1=require(_0x3aed11(0x120)),common_1=require('@nestjs/common'),swagger_1=require(_0x3aed11(0xe9)),platform_express_1=require(_0x3aed11(0xef)),uploder_dto_1=require('./dto/uploder.dto');let FileController=class FileController{constructor(_0x1afea0){const _0xeb6580=_0x3aed11;this[_0xeb6580(0x10d)]=_0x1afea0;}async[_0x3aed11(0x102)](_0x3c3f4f,_0x5d8aa0){const _0x4546f8=_0x3aed11,_0x377353=Buffer[_0x4546f8(0x11a)](_0x5d8aa0[_0x4546f8(0x111)],_0x4546f8(0x11e))['toString'](_0x4546f8(0x100));return this[_0x4546f8(0x10d)][_0x4546f8(0x102)]({'filename':_0x377353,'buffer':_0x5d8aa0[_0x4546f8(0xe8)],..._0x3c3f4f});}async[_0x3aed11(0xf1)](_0xbc67f1,_0x48e1d4){const _0x2af48a=_0x3aed11,_0x2e3042=Buffer[_0x2af48a(0x11a)](_0x48e1d4[_0x2af48a(0x111)],_0x2af48a(0x11e))['toString'](_0x2af48a(0x100));return this['fileService'][_0x2af48a(0xf1)]({'filename':_0x2e3042,'buffer':_0x48e1d4[_0x2af48a(0xe8)],..._0xbc67f1});}async[_0x3aed11(0x11f)](_0x4d04a9,_0x2ef3e8,_0x254082){const _0x218107=_0x3aed11;return this[_0x218107(0x10d)][_0x218107(0xe7)](_0x4d04a9,_0x2ef3e8,_0x254082);}async[_0x3aed11(0x106)](_0x31ae43){const _0x39af91=_0x3aed11;return this[_0x39af91(0x10d)][_0x39af91(0x106)](_0x31ae43);}};function _0x1c24(_0x6d44c8,_0x263eee){const _0x4615a0=_0x4615();return _0x1c24=function(_0x1c24ac,_0x5b663a){_0x1c24ac=_0x1c24ac-0xe5;let _0x351afc=_0x4615a0[_0x1c24ac];return _0x351afc;},_0x1c24(_0x6d44c8,_0x263eee);}__decorate([(0x0,common_1[_0x3aed11(0xe5)])('upload'),(0x0,swagger_1[_0x3aed11(0xfb)])({'summary':_0x3aed11(0xf0)}),(0x0,common_1['UseInterceptors'])((0x0,platform_express_1['FileInterceptor'])('file',{'preservePath':!![],'limits':{'fileSize':0x200*0x400*0x400}})),__param(0x0,(0x0,common_1[_0x3aed11(0x104)])()),__param(0x1,(0x0,common_1[_0x3aed11(0x10f)])()),__metadata(_0x3aed11(0xf2),Function),__metadata(_0x3aed11(0x119),[uploder_dto_1['UploaderDto'],Object]),__metadata(_0x3aed11(0x112),Promise)],FileController['prototype'],_0x3aed11(0x102),null),__decorate([(0x0,common_1[_0x3aed11(0xe5)])(_0x3aed11(0xf1)),(0x0,swagger_1[_0x3aed11(0xfb)])({'summary':_0x3aed11(0xff)}),(0x0,common_1[_0x3aed11(0x114)])((0x0,platform_express_1[_0x3aed11(0xfc)])(_0x3aed11(0x116),{'preservePath':!![],'limits':{'fileSize':0x200*0x400*0x400}})),__param(0x0,(0x0,common_1['Body'])()),__param(0x1,(0x0,common_1['UploadedFile'])()),__metadata(_0x3aed11(0xf2),Function),__metadata(_0x3aed11(0x119),[uploder_dto_1['UploaderDto'],Object]),__metadata('design:returntype',Promise)],FileController[_0x3aed11(0xf7)],_0x3aed11(0xf1),null),__decorate([(0x0,common_1[_0x3aed11(0x115)])(_0x3aed11(0x10e)),(0x0,swagger_1[_0x3aed11(0xfb)])({'summary':_0x3aed11(0x103)}),__param(0x0,(0x0,common_1['Query'])(_0x3aed11(0xeb))),__param(0x1,(0x0,common_1[_0x3aed11(0x113)])()),__param(0x2,(0x0,common_1['Res'])()),__metadata(_0x3aed11(0xf2),Function),__metadata('design:paramtypes',[String,Object,Object]),__metadata(_0x3aed11(0x112),Promise)],FileController[_0x3aed11(0xf7)],_0x3aed11(0x11f),null),__decorate([(0x0,common_1[_0x3aed11(0x115)])('getModalImgById'),(0x0,swagger_1[_0x3aed11(0xfb)])({'summary':_0x3aed11(0xea)}),(0x0,swagger_1[_0x3aed11(0xf6)])(),__param(0x0,(0x0,common_1[_0x3aed11(0x113)])()),__metadata(_0x3aed11(0xf2),Function),__metadata(_0x3aed11(0x119),[Object]),__metadata(_0x3aed11(0x112),Promise)],FileController[_0x3aed11(0xf7)],_0x3aed11(0x106),null),FileController=__decorate([(0x0,swagger_1[_0x3aed11(0x107)])(_0x3aed11(0x116)),(0x0,common_1[_0x3aed11(0xf3)])('file'),__metadata(_0x3aed11(0x119),[file_service_1[_0x3aed11(0x101)]])],FileController),exports['FileController']=FileController;