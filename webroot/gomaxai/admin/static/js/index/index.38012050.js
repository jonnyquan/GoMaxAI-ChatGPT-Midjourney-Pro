
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{C as e,r as l,ak as n,al as u,am as t,an as a,D as r,ao as i,ap as o,x as c,aq as s,ar as v}from"../main-043c96ab.js";function d(e){var l;const n=u(e);return null!=(l=null==n?void 0:n.$el)?l:n}const f=t?window:void 0,m=t?window.document:void 0,p=t?window.navigator:void 0;function w(...e){let l,n,t,c;if("string"==typeof e[0]||Array.isArray(e[0])?([n,t,c]=e,l=f):[l,n,t,c]=e,!l)return a;Array.isArray(n)||(n=[n]),Array.isArray(t)||(t=[t]);const s=[],v=()=>{s.forEach((e=>e())),s.length=0},m=r((()=>[d(l),u(c)]),(([e,l])=>{if(v(),!e)return;const u=i(l)?{...l}:l;s.push(...n.flatMap((l=>t.map((n=>((e,l,n,u)=>(e.addEventListener(l,n,u),()=>e.removeEventListener(l,n,u)))(e,l,n,u))))))}),{immediate:!0,flush:"post"}),p=()=>{m(),v()};return o(p),p}function y(n){const u=function(){const e=l(!1),n=v();return n&&c((()=>{e.value=!0}),n),e}();return e((()=>(u.value,Boolean(n()))))}function F(e,n={}){const{controls:u=!1,navigator:t=p}=n,a=y((()=>t&&"permissions"in t));let r;const i="string"==typeof e?{name:e}:e,o=l(),c=()=>{r&&(o.value=r.state)},v=s((async()=>{if(a.value){if(!r)try{r=await t.permissions.query(i),w(r,"change",c),c()}catch(e){o.value="prompt"}return r}}));return v(),u?{state:o,isSupported:a,query:v}:o}function b(t={}){const{navigator:a=p,read:r=!1,source:i,copiedDuring:o=1500,legacy:c=!1}=t,s=y((()=>a&&"clipboard"in a)),v=F("clipboard-read"),d=F("clipboard-write"),f=e((()=>s.value||c)),m=l(""),b=l(!1),g=n((()=>b.value=!1),o);function S(e){return"granted"===e||"prompt"===e}return f.value&&r&&w(["copy","cut"],(function(){var e,l,n;s.value&&S(v.value)?a.clipboard.readText().then((e=>{m.value=e})):m.value=null!=(n=null==(l=null==(e=null==document?void 0:document.getSelection)?void 0:e.call(document))?void 0:l.toString())?n:""})),{isSupported:f,text:m,copied:b,copy:async function(e=u(i)){f.value&&null!=e&&(s.value&&S(d.value)?await a.clipboard.writeText(e):function(e){const l=document.createElement("textarea");l.value=null!=e?e:"",l.style.position="absolute",l.style.opacity="0",document.body.appendChild(l),l.select(),document.execCommand("copy"),l.remove()}(e),m.value=e,b.value=!0,g.start())}}}const g=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function S(n,u={}){const{document:t=m,autoExit:a=!1}=u,r=e((()=>{var e;return null!=(e=d(n))?e:null==t?void 0:t.querySelector("html")})),i=l(!1),c=e((()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find((e=>t&&e in t||r.value&&e in r.value)))),s=e((()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find((e=>t&&e in t||r.value&&e in r.value)))),v=e((()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find((e=>t&&e in t||r.value&&e in r.value)))),f=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find((e=>t&&e in t)),p=y((()=>r.value&&t&&void 0!==c.value&&void 0!==s.value&&void 0!==v.value)),F=()=>{if(v.value){if(t&&null!=t[v.value])return t[v.value];{const e=r.value;if(null!=(null==e?void 0:e[v.value]))return Boolean(e[v.value])}}return!1};async function b(){if(p.value&&i.value){if(s.value)if(null!=(null==t?void 0:t[s.value]))await t[s.value]();else{const e=r.value;null!=(null==e?void 0:e[s.value])&&await e[s.value]()}i.value=!1}}async function S(){if(!p.value||i.value)return;F()&&await b();const e=r.value;c.value&&null!=(null==e?void 0:e[c.value])&&(await e[c.value](),i.value=!0)}const E=()=>{const e=F();(!e||e&&f&&(null==t?void 0:t[f])===r.value)&&(i.value=e)};return w(t,g,E,!1),w((()=>d(r)),g,E,!1),a&&o(b),{isSupported:p,isFullscreen:i,enter:S,exit:b,toggle:async function(){await(i.value?b():S())}}}export{S as a,b as u};
