
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
function n(n){for(var e={},t=n.split(" "),r=0;r<t.length;++r)e[t[r]]=!0;return e}var e=n("if elsif else stop require"),t=n("true false not");function r(n,o){var l,a=n.next();if("/"==a&&n.eat("*"))return o.tokenize=u,u(n,o);if("#"===a)return n.skipToEnd(),"comment";if('"'==a)return o.tokenize=(l=a,function(n,e){for(var t,i=!1;null!=(t=n.next())&&(t!=l||i);)i=!i&&"\\"==t;return i||(e.tokenize=r),"string"}),o.tokenize(n,o);if("("==a)return o._indent.push("("),o._indent.push("{"),null;if("{"===a)return o._indent.push("{"),null;if(")"==a&&(o._indent.pop(),o._indent.pop()),"}"===a)return o._indent.pop(),null;if(","==a)return null;if(";"==a)return null;if(/[{}\(\),;]/.test(a))return null;if(/\d/.test(a))return n.eatWhile(/[\d]/),n.eat(/[KkMmGg]/),"number";if(":"==a)return n.eatWhile(/[a-zA-Z_]/),n.eatWhile(/[a-zA-Z0-9_]/),"operator";n.eatWhile(/\w/);var f=n.current();return"text"==f&&n.eat(":")?(o.tokenize=i,"string"):e.propertyIsEnumerable(f)?"keyword":t.propertyIsEnumerable(f)?"atom":null}function i(n,e){return e._multiLineString=!0,n.sol()?("."==n.next()&&n.eol()&&(e._multiLineString=!1,e.tokenize=r),"string"):(n.eatSpace(),"#"==n.peek()?(n.skipToEnd(),"comment"):(n.skipToEnd(),"string"))}function u(n,e){for(var t,i=!1;null!=(t=n.next());){if(i&&"/"==t){e.tokenize=r;break}i="*"==t}return"comment"}const o={name:"sieve",startState:function(n){return{tokenize:r,baseIndent:n||0,_indent:[]}},token:function(n,e){return n.eatSpace()?null:(e.tokenize||r)(n,e)},indent:function(n,e,t){var r=n._indent.length;return e&&"}"==e[0]&&r--,r<0&&(r=0),r*t.unit},languageData:{indentOnInput:/^\s*\}$/}};export{o as sieve};
