
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
var e={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},n={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},t={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},r={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},o=/[+\-*&^%:=<>!|\/]/;function i(i,u){var l=i.next();if(/[\d\.]/.test(l))return"."==l?i.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==l?i.match(/^[xX][0-9a-fA-F]+/)||i.match(/^0[0-7]+/):i.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if("/"==l||"("==l){if(i.eat("*"))return u.tokenize=a,a(i,u);if(i.eat("/"))return i.skipToEnd(),"comment"}if(o.test(l))return i.eatWhile(o),"operator";i.eatWhile(/[\w\$_\xa1-\uffff]/);var c=i.current().toLowerCase();return e.propertyIsEnumerable(c)||n.propertyIsEnumerable(c)||t.propertyIsEnumerable(c)?"keyword":r.propertyIsEnumerable(c)?"atom":"variable"}function a(e,n){for(var t,r=!1;t=e.next();){if(("/"==t||")"==t)&&r){n.tokenize=i;break}r="*"==t}return"comment"}function u(e,n,t,r,o){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=o}const l={name:"fcl",startState:function(e){return{tokenize:null,context:new u(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,r){var o=r.context;if(e.sol()&&(null==o.align&&(o.align=!1),r.indented=e.indentation(),r.startOfLine=!0),e.eatSpace())return null;var a=(r.tokenize||i)(e,r);if("comment"==a)return a;null==o.align&&(o.align=!0);var l=e.current().toLowerCase();return n.propertyIsEnumerable(l)?function(e,n,t){e.context=new u(e.indented,n,t,null,e.context)}(r,e.column(),"end_block"):t.propertyIsEnumerable(l)&&function(e){if(e.context.prev)"end_block"==e.context.type&&(e.indented=e.context.indented),e.context=e.context.prev}(r),r.startOfLine=!1,a},indent:function(e,n,r){if(e.tokenize!=i&&null!=e.tokenize)return 0;var o=e.context,a=t.propertyIsEnumerable(n);return o.align?o.column+(a?0:1):o.indented+(a?0:r.unit)},languageData:{commentTokens:{line:"//",block:{open:"(*",close:"*)"}}}};export{l as fcl};