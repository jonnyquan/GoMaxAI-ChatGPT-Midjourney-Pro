
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{B as e,r as l,ah as n,ai as u,aj as t,ak as a,C as i,al as r,am as o,o as c,an as s,ao as v}from"../main-fe71c3b2.js";function d(e){var l;const n=u(e);return null!=(l=null==n?void 0:n.$el)?l:n}const f=t?window:void 0,m=t?window.document:void 0,p=t?window.navigator:void 0;function w(...e){let l,n,t,c;if("string"==typeof e[0]||Array.isArray(e[0])?([n,t,c]=e,l=f):[l,n,t,c]=e,!l)return a;Array.isArray(n)||(n=[n]),Array.isArray(t)||(t=[t]);const s=[],v=()=>{s.forEach((e=>e())),s.length=0},m=i((()=>[d(l),u(c)]),(([e,l])=>{if(v(),!e)return;const u=r(l)?{...l}:l;s.push(...n.flatMap((l=>t.map((n=>((e,l,n,u)=>(e.addEventListener(l,n,u),()=>e.removeEventListener(l,n,u)))(e,l,n,u))))))}),{immediate:!0,flush:"post"}),p=()=>{m(),v()};return o(p),p}function y(n){const u=function(){const e=l(!1),n=v();return n&&c((()=>{e.value=!0}),n),e}();return e((()=>(u.value,Boolean(n()))))}function F(e,n={}){const{controls:u=!1,navigator:t=p}=n,a=y((()=>t&&"permissions"in t));let i;const r="string"==typeof e?{name:e}:e,o=l(),c=()=>{i&&(o.value=i.state)},v=s((async()=>{if(a.value){if(!i)try{i=await t.permissions.query(r),w(i,"change",c),c()}catch(e){o.value="prompt"}return i}}));return v(),u?{state:o,isSupported:a,query:v}:o}function b(t={}){const{navigator:a=p,read:i=!1,source:r,copiedDuring:o=1500,legacy:c=!1}=t,s=y((()=>a&&"clipboard"in a)),v=F("clipboard-read"),d=F("clipboard-write"),f=e((()=>s.value||c)),m=l(""),b=l(!1),g=n((()=>b.value=!1),o);function S(e){return"granted"===e||"prompt"===e}return f.value&&i&&w(["copy","cut"],(function(){var e,l,n;s.value&&S(v.value)?a.clipboard.readText().then((e=>{m.value=e})):m.value=null!=(n=null==(l=null==(e=null==document?void 0:document.getSelection)?void 0:e.call(document))?void 0:l.toString())?n:""})),{isSupported:f,text:m,copied:b,copy:async function(e=u(r)){f.value&&null!=e&&(s.value&&S(d.value)?await a.clipboard.writeText(e):function(e){const l=document.createElement("textarea");l.value=null!=e?e:"",l.style.position="absolute",l.style.opacity="0",document.body.appendChild(l),l.select(),document.execCommand("copy"),l.remove()}(e),m.value=e,b.value=!0,g.start())}}}const g=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function S(n,u={}){const{document:t=m,autoExit:a=!1}=u,i=e((()=>{var e;return null!=(e=d(n))?e:null==t?void 0:t.querySelector("html")})),r=l(!1),c=e((()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find((e=>t&&e in t||i.value&&e in i.value)))),s=e((()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find((e=>t&&e in t||i.value&&e in i.value)))),v=e((()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find((e=>t&&e in t||i.value&&e in i.value)))),f=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find((e=>t&&e in t)),p=y((()=>i.value&&t&&void 0!==c.value&&void 0!==s.value&&void 0!==v.value)),F=()=>{if(v.value){if(t&&null!=t[v.value])return t[v.value];{const e=i.value;if(null!=(null==e?void 0:e[v.value]))return Boolean(e[v.value])}}return!1};async function b(){if(p.value&&r.value){if(s.value)if(null!=(null==t?void 0:t[s.value]))await t[s.value]();else{const e=i.value;null!=(null==e?void 0:e[s.value])&&await e[s.value]()}r.value=!1}}async function S(){if(!p.value||r.value)return;F()&&await b();const e=i.value;c.value&&null!=(null==e?void 0:e[c.value])&&(await e[c.value](),r.value=!0)}const E=()=>{const e=F();(!e||e&&f&&(null==t?void 0:t[f])===i.value)&&(r.value=e)};return w(t,g,E,!1),w((()=>d(i)),g,E,!1),a&&o(b),{isSupported:p,isFullscreen:r,enter:S,exit:b,toggle:async function(){await(r.value?b():S())}}}export{S as a,b as u};
