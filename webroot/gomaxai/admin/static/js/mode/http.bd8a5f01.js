
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
function r(r,n){return r.skipToEnd(),n.cur=o,"error"}function n(n,u){return n.match(/^HTTP\/\d\.\d/)?(u.cur=t,"keyword"):n.match(/^[A-Z]+/)&&/[ \t]/.test(n.peek())?(u.cur=e,"keyword"):r(n,u)}function t(n,t){var e=n.match(/^\d+/);if(!e)return r(n,t);t.cur=u;var c=Number(e[0]);return c>=100&&c<400?"atom":"error"}function u(r,n){return r.skipToEnd(),n.cur=o,null}function e(r,n){return r.eatWhile(/\S/),n.cur=c,"string.special"}function c(n,t){return n.match(/^HTTP\/\d\.\d$/)?(t.cur=o,"keyword"):r(n,t)}function o(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function i(r){return r.skipToEnd(),null}const a={name:"http",token:function(r,n){var t=n.cur;return t!=o&&t!=i&&r.eatSpace()?null:t(r,n)},blankLine:function(r){r.cur=i},startState:function(){return{cur:n}}};export{a as http};
