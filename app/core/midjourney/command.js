'use strict';const _0x36d444=_0x259c;function _0x259c(_0x5e7a3f,_0x1f3132){const _0xea517a=_0xea51();return _0x259c=function(_0x259cfe,_0x2996a9){_0x259cfe=_0x259cfe-0x1c4;let _0x14e733=_0xea517a[_0x259cfe];return _0x14e733;},_0x259c(_0x5e7a3f,_0x1f3132);}function _0xea51(){const _0xed1a6c=['stealth','opts','Commands','private','getCommand','prefer','false','reject','shorten','commandCaches','relax','50668AYbliI','json','show','/api/v9/channels/','subscribe','5tNErIp','1892vWyZiB','243909NCPpNN','MidjourneyCommand','53011kOWHzY','66310PpVIgL','2142144fwmpxZ','blend','resolve','token','help','channel_id','60590HDqQYc','/application-commands/search?','26088nxGzSQ','settings','imagine','describe','472SNvZAk','then','1005UUmIJe','ask'];_0xea51=function(){return _0xed1a6c;};return _0xea51();}(function(_0x83bc61,_0x540876){const _0x579b6c=_0x259c,_0x12fc04=_0x83bc61();while(!![]){try{const _0x142446=parseInt(_0x579b6c(0x1d5))/0x1*(-parseInt(_0x579b6c(0x1da))/0x2)+-parseInt(_0x579b6c(0x1db))/0x3+parseInt(_0x579b6c(0x1d0))/0x4+-parseInt(_0x579b6c(0x1e9))/0x5*(-parseInt(_0x579b6c(0x1e3))/0x6)+-parseInt(_0x579b6c(0x1d9))/0x7*(parseInt(_0x579b6c(0x1e7))/0x8)+parseInt(_0x579b6c(0x1d7))/0x9+parseInt(_0x579b6c(0x1e1))/0xa*(parseInt(_0x579b6c(0x1d6))/0xb);if(_0x142446===_0x540876)break;else _0x12fc04['push'](_0x12fc04['shift']());}catch(_0x8748c4){_0x12fc04['push'](_0x12fc04['shift']());}}}(_0xea51,0x999f2));Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x36d444(0x1d8)]=exports[_0x36d444(0x1c7)]=void 0x0;const fetch=require('isomorphic-fetch');exports[_0x36d444(0x1c7)]=[_0x36d444(0x1c4),_0x36d444(0x1dc),_0x36d444(0x1e6),'fast',_0x36d444(0x1df),_0x36d444(0x1e5),'info',_0x36d444(0x1ca),_0x36d444(0x1c8),'public',_0x36d444(0x1cf),_0x36d444(0x1e4),_0x36d444(0x1d2),_0x36d444(0x1c5),_0x36d444(0x1cd),_0x36d444(0x1d4)];class MidjourneyCommand{constructor(_0x1a6e2c){const _0x43cf97=_0x36d444;this['opts']=_0x1a6e2c,this[_0x43cf97(0x1ce)]={};}[_0x36d444(0x1c9)](_0x10cfff){const _0x283437=_0x36d444;if(!this['commandCaches'][_0x10cfff]){const _0x4617b1=new URLSearchParams({'type':'1','query':_0x10cfff,'limit':'1','include_applications':_0x283437(0x1cb)});return fetch(this[_0x283437(0x1c6)]['apiBaseUrl']+_0x283437(0x1d3)+this['opts'][_0x283437(0x1e0)]+_0x283437(0x1e2)+_0x4617b1,{'headers':{'authorization':this[_0x283437(0x1c6)][_0x283437(0x1de)]}})[_0x283437(0x1e8)](_0x2878f8=>_0x2878f8[_0x283437(0x1d1)]())['then'](({application_commands:_0x2b342a})=>{const _0x3c02c4=_0x283437;return _0x2b342a['length']?(this[_0x3c02c4(0x1ce)][_0x10cfff]=_0x2b342a[0x0],this[_0x3c02c4(0x1ce)][_0x10cfff]):Promise[_0x3c02c4(0x1cc)](new Error('command\x20not\x20found'));});}return Promise[_0x283437(0x1dd)](this[_0x283437(0x1ce)][_0x10cfff]);}}exports[_0x36d444(0x1d8)]=MidjourneyCommand;