
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
function e(e,t){return new RegExp((t?"":"^")+"(?:"+e.join("|")+")"+(t?"$":"\\b"))}function t(e,t,n){return n.tokenize.push(e),e(t,n)}var n=/^(?:[-+/%|&^]|\*\*?|[<>]{2})/,r=/^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/,a=/^(?:\[\][?=]?)/,u=/^(?:\.(?:\.{2})?|->|[?:])/,i=/^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,o=/^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,c=e(["abstract","alias","as","asm","begin","break","case","class","def","do","else","elsif","end","ensure","enum","extend","for","fun","if","include","instance_sizeof","lib","macro","module","next","of","out","pointerof","private","protected","rescue","return","require","select","sizeof","struct","super","then","type","typeof","uninitialized","union","unless","until","when","while","with","yield","__DIR__","__END_LINE__","__FILE__","__LINE__"]),s=e(["true","false","nil","self"]),f=e(["def","fun","macro","class","module","struct","lib","enum","union","do","for"]),l=e(["if","unless","case","while","until","begin","then"]),m=["end","else","elsif","rescue","ensure"],h=e(m),p=["\\)","\\}","\\]"],k=new RegExp("^(?:"+p.join("|")+")$"),d={def:g,fun:g,macro:function(e,t){if(e.eatSpace())return null;var n;if(n=e.match(i)){if("def"==n)return"keyword";e.eat(/[?!]/)}return t.tokenize.pop(),"def"},class:x,module:x,struct:x,lib:x,enum:x,union:x},F={"[":"]","{":"}","(":")","<":">"};function z(e,m){if(e.eatSpace())return null;if("\\"!=m.lastToken&&e.match("{%",!1))return t(b("%","%"),e,m);if("\\"!=m.lastToken&&e.match("{{",!1))return t(b("{","}"),e,m);if("#"==e.peek())return e.skipToEnd(),"comment";var h;if(e.match(i))return e.eat(/[?!]/),h=e.current(),e.eat(":")?"atom":"."==m.lastToken?"property":c.test(h)?(f.test(h)?"fun"==h&&m.blocks.indexOf("lib")>=0||"def"==h&&"abstract"==m.lastToken||(m.blocks.push(h),m.currentIndent+=1):"operator"!=m.lastStyle&&m.lastStyle||!l.test(h)?"end"==h&&(m.blocks.pop(),m.currentIndent-=1):(m.blocks.push(h),m.currentIndent+=1),d.hasOwnProperty(h)&&m.tokenize.push(d[h]),"keyword"):s.test(h)?"atom":"variable";if(e.eat("@"))return"["==e.peek()?t(_("[","]","meta"),e,m):(e.eat("@"),e.match(i)||e.match(o),"propertyName");if(e.match(o))return"tag";if(e.eat(":"))return e.eat('"')?t(I('"',"atom",!1),e,m):e.match(i)||e.match(o)||e.match(n)||e.match(r)||e.match(a)?"atom":(e.eat(":"),"operator");if(e.eat('"'))return t(I('"',"string",!0),e,m);if("%"==e.peek()){var p,k="string",z=!0;if(e.match("%r"))k="string.special",p=e.next();else if(e.match("%w"))z=!1,p=e.next();else if(e.match("%q"))z=!1,p=e.next();else if(p=e.match(/^%([^\w\s=])/))p=p[1];else{if(e.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/))return"meta";if(e.eat("%"))return"operator"}return F.hasOwnProperty(p)&&(p=F[p]),t(I(p,k,z),e,m)}return(h=e.match(/^<<-('?)([A-Z]\w*)\1/))?t(function(e,t){return function(n,r){if(n.sol()&&(n.eatSpace(),n.match(e)))return r.tokenize.pop(),"string";for(var a=!1;n.peek();)if(a)n.next(),a=!1;else{if(n.match("{%",!1))return r.tokenize.push(b("%","%")),"string";if(n.match("{{",!1))return r.tokenize.push(b("{","}")),"string";if(t&&n.match("#{",!1))return r.tokenize.push(_("#{","}","meta")),"string";a=t&&"\\"==n.next()}return"string"}}(h[2],!h[1]),e,m):e.eat("'")?(e.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/),e.eat("'"),"atom"):e.eat("0")?(e.eat("x")?e.match(/^[0-9a-fA-F_]+/):e.eat("o")?e.match(/^[0-7_]+/):e.eat("b")&&e.match(/^[01_]+/),"number"):e.eat(/^\d/)?(e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/),"number"):e.match(n)?(e.eat("="),"operator"):e.match(r)||e.match(u)?"operator":(h=e.match(/[({[]/,!1))?t(_(h=h[0],F[h],null),e,m):e.eat("\\")?(e.next(),"meta"):(e.next(),null)}function _(e,t,n,r){return function(a,u){if(!r&&a.match(e))return u.tokenize[u.tokenize.length-1]=_(e,t,n,!0),u.currentIndent+=1,n;var i=z(a,u);return a.current()===t&&(u.tokenize.pop(),u.currentIndent-=1,i=n),i}}function b(e,t,n){return function(r,a){return!n&&r.match("{"+e)?(a.currentIndent+=1,a.tokenize[a.tokenize.length-1]=b(e,t,!0),"meta"):r.match(t+"}")?(a.currentIndent-=1,a.tokenize.pop(),"meta"):z(r,a)}}function g(e,t){return e.eatSpace()?null:(e.match(i)?e.eat(/[!?]/):e.match(n)||e.match(r)||e.match(a),t.tokenize.pop(),"def")}function x(e,t){return e.eatSpace()?null:(e.match(o),t.tokenize.pop(),"def")}function I(e,t,n){return function(r,a){for(var u=!1;r.peek();)if(u)r.next(),u=!1;else{if(r.match("{%",!1))return a.tokenize.push(b("%","%")),t;if(r.match("{{",!1))return a.tokenize.push(b("{","}")),t;if(n&&r.match("#{",!1))return a.tokenize.push(_("#{","}","meta")),t;var i=r.next();if(i==e)return a.tokenize.pop(),t;u=n&&"\\"==i}return t}}const w={name:"crystal",startState:function(){return{tokenize:[z],currentIndent:0,lastToken:null,lastStyle:null,blocks:[]}},token:function(e,t){var n=t.tokenize[t.tokenize.length-1](e,t),r=e.current();return n&&"comment"!=n&&(t.lastToken=r,t.lastStyle=n),n},indent:function(e,t,n){return t=t.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g,""),h.test(t)||k.test(t)?n.unit*(e.currentIndent-1):n.unit*e.currentIndent},languageData:{indentOnInput:e(p.concat(m),!0),commentTokens:{line:"#"}}};export{w as crystal};
