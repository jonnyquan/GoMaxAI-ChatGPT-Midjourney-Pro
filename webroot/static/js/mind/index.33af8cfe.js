import{b as e,M as t}from"../index.esm/index.esm.c5dc758f.js";import{bw as n,bz as r,e as o,R as i,au as a,aj as s,j as c,r as l,k as u,z as f,O as d,P as h,U as m,X as g,W as p,bf as w,N as v,bo as y,ai as b,aP as x,aO as E,ca as P,a1 as S}from"../main-6c725c30.js";import"../katex/katex.b834b3c7.js";var A,T={exports:{}};A=T,function(){function e(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(e,n,a){var s=i.URL||i.webkitURL,c=document.createElement("a");n=n||e.name||"download",c.download=n,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):r(c.href)?t(e,n,a):o(c,c.target="_blank")):(c.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(n,i,a){if(i=i||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(e(n,a),i);else if(r(n))t(n,i,a);else{var s=document.createElement("a");s.href=n,s.target="_blank",setTimeout((function(){o(s)}))}}:function(e,n,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var s="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||a)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},u.readAsDataURL(e)}else{var f=i.URL||i.webkitURL,d=f.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});i.saveAs=s.saveAs=s,A.exports=s}();var R=T.exports;const C=(()=>{let e=0;return()=>(e+=1,`u${`0000${(Math.random()*36**4|0).toString(36)}`.slice(-4)}${e}`)})();function L(e){const t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}function k(e,t){const n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function $(e,t={}){return{width:t.width||function(e){const t=k(e,"border-left-width"),n=k(e,"border-right-width");return e.clientWidth+t+n}(e),height:t.height||function(e){const t=k(e,"border-top-width"),n=k(e,"border-bottom-width");return e.clientHeight+t+n}(e)}}const D=16384;function M(e){return new Promise(((t,n)=>{const r=new Image;r.decode=()=>t(r),r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=e}))}async function j(e,t,n){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),async function(e){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e=>`data:image/svg+xml;charset=utf-8,${e}`))}(o)}const U=(e,t)=>{if(e instanceof t)return!0;const n=Object.getPrototypeOf(e);return null!==n&&(n.constructor.name===t.name||U(n,t))};function F(e,t,n){const r=`.${e}:${t}`,o=n.cssText?function(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(n):function(e){return L(e).map((t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")}(n);return document.createTextNode(`${r}{${o}}`)}function I(e,t,n){const r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""===o||"none"===o)return;const i=C();try{t.className=`${t.className} ${i}`}catch(s){return}const a=document.createElement("style");a.appendChild(F(i,n,r)),t.appendChild(a)}const N="application/font-woff",H="image/jpeg",O={woff:N,woff2:N,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:H,jpeg:H,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function V(e){const t=function(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}(e).toLowerCase();return O[t]||""}function B(e){return-1!==e.search(/^(data:)/)}function _(e,t){return`data:${t};base64,${e}`}async function z(e,t,n){const r=await fetch(e,t);if(404===r.status)throw new Error(`Resource "${r.url}" not found`);const o=await r.blob();return new Promise(((e,t)=>{const i=new FileReader;i.onerror=t,i.onloadend=()=>{try{e(n({res:r,result:i.result}))}catch(o){t(o)}},i.readAsDataURL(o)}))}const q={};async function G(e,t,n){const r=function(e,t,n){let r=e.replace(/\?.*/,"");return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}(e,t,n.includeQueryParams);if(null!=q[r])return q[r];let o;n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());try{const r=await z(e,n.fetchRequestInit,(({res:e,result:n})=>(t||(t=e.headers.get("Content-Type")||""),function(e){return e.split(/,/)[1]}(n))));o=_(r,t)}catch(i){o=n.imagePlaceholder||"";let t=`Failed to fetch resource: ${e}`;i&&(t="string"==typeof i?i:i.message),t&&console.warn(t)}return q[r]=o,o}async function X(e,t){return U(e,HTMLCanvasElement)?async function(e){const t=e.toDataURL();return"data:,"===t?e.cloneNode(!1):M(t)}(e):U(e,HTMLVideoElement)?async function(e,t){if(e.currentSrc){const t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.clientWidth,t.height=e.clientHeight,null==n||n.drawImage(e,0,0,t.width,t.height),M(t.toDataURL())}const n=e.poster,r=V(n);return M(await G(n,r,t))}(e,t):U(e,HTMLIFrameElement)?async function(e){var t;try{if(null===(t=null==e?void 0:e.contentDocument)||void 0===t?void 0:t.body)return await K(e.contentDocument.body,{},!0)}catch(n){}return e.cloneNode(!1)}(e):e.cloneNode(!1)}const W=e=>null!=e.tagName&&"SLOT"===e.tagName.toUpperCase();function J(e,t){return U(t,Element)&&(function(e,t){const n=t.style;if(!n)return;const r=window.getComputedStyle(e);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):L(r).forEach((o=>{let i=r.getPropertyValue(o);if("font-size"===o&&i.endsWith("px")){const e=Math.floor(parseFloat(i.substring(0,i.length-2)))-.1;i=`${e}px`}U(e,HTMLIFrameElement)&&"display"===o&&"inline"===i&&(i="block"),"d"===o&&t.getAttribute("d")&&(i=`path(${t.getAttribute("d")})`),n.setProperty(o,i,r.getPropertyPriority(o))}))}(e,t),function(e,t){I(e,t,":before"),I(e,t,":after")}(e,t),function(e,t){U(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),U(e,HTMLInputElement)&&t.setAttribute("value",e.value)}(e,t),function(e,t){if(U(e,HTMLSelectElement)){const n=t,r=Array.from(n.children).find((t=>e.value===t.getAttribute("value")));r&&r.setAttribute("selected","")}}(e,t)),t}async function K(e,t,n){return n||!t.filter||t.filter(e)?Promise.resolve(e).then((e=>X(e,t))).then((n=>async function(e,t,n){var r,o;let i=[];return i=W(e)&&e.assignedNodes?L(e.assignedNodes()):U(e,HTMLIFrameElement)&&(null===(r=e.contentDocument)||void 0===r?void 0:r.body)?L(e.contentDocument.body.childNodes):L((null!==(o=e.shadowRoot)&&void 0!==o?o:e).childNodes),0===i.length||U(e,HTMLVideoElement)||await i.reduce(((e,r)=>e.then((()=>K(r,n))).then((e=>{e&&t.appendChild(e)}))),Promise.resolve()),t}(e,n,t))).then((t=>J(e,t))).then((e=>async function(e,t){const n=e.querySelectorAll?e.querySelectorAll("use"):[];if(0===n.length)return e;const r={};for(let i=0;i<n.length;i++){const o=n[i].getAttribute("xlink:href");if(o){const n=e.querySelector(o),i=document.querySelector(o);n||!i||r[o]||(r[o]=await K(i,t,!0))}}const o=Object.values(r);if(o.length){const t="http://www.w3.org/1999/xhtml",n=document.createElementNS(t,"svg");n.setAttribute("xmlns",t),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";const r=document.createElementNS(t,"defs");n.appendChild(r);for(let e=0;e<o.length;e++)r.appendChild(o[e]);e.appendChild(n)}return e}(e,t))):null}const Q=/url\((['"]?)([^'"]+?)\1\)/g,Y=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Z=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;async function ee(e,t,n,r,o){try{const i=n?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}(t,n):t,a=V(t);let s;if(o){s=_(await o(i),a)}else s=await G(i,a,r);return e.replace(function(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}(t),`$1${s}$3`)}catch(i){}return e}function te(e){return-1!==e.search(Q)}async function ne(e,t,n){if(!te(e))return e;const r=function(e,{preferredFontFormat:t}){return t?e.replace(Z,(e=>{for(;;){const[n,,r]=Y.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}})):e}(e,n),o=function(e){const t=[];return e.replace(Q,((e,n,r)=>(t.push(r),e))),t.filter((e=>!B(e)))}(r);return o.reduce(((e,r)=>e.then((e=>ee(e,r,t,n)))),Promise.resolve(r))}async function re(e,t,n){var r;const o=null===(r=t.style)||void 0===r?void 0:r.getPropertyValue(e);if(o){const r=await ne(o,null,n);return t.style.setProperty(e,r,t.style.getPropertyPriority(e)),!0}return!1}async function oe(e,t){U(e,Element)&&(await async function(e,t){await re("background",e,t)||await re("background-image",e,t),await re("mask",e,t)||await re("mask-image",e,t)}(e,t),await async function(e,t){const n=U(e,HTMLImageElement);if((!n||B(e.src))&&(!U(e,SVGImageElement)||B(e.href.baseVal)))return;const r=n?e.src:e.href.baseVal,o=await G(r,V(r),t);await new Promise(((t,r)=>{e.onload=t,e.onerror=r;const i=e;i.decode&&(i.decode=t),"lazy"===i.loading&&(i.loading="eager"),n?(e.srcset="",e.src=o):e.href.baseVal=o}))}(e,t),await async function(e,t){const n=L(e.childNodes).map((e=>oe(e,t)));await Promise.all(n).then((()=>e))}(e,t))}const ie={};async function ae(e){let t=ie[e];if(null!=t)return t;const n=await fetch(e);return t={url:e,cssText:await n.text()},ie[e]=t,t}async function se(e,t){let n=e.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((async o=>{let i=o.replace(r,"$1");return i.startsWith("https://")||(i=new URL(i,e.url).href),z(i,t.fetchRequestInit,(({result:e})=>(n=n.replace(o,`url(${e})`),[o,e])))}));return Promise.all(o).then((()=>n))}function ce(e){if(null==e)return[];const t=[];let n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const e=r.exec(n);if(null===e)break;t.push(e[0])}n=n.replace(r,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let e=o.exec(n);if(null===e){if(e=i.exec(n),null===e)break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;t.push(e[0])}return t}async function le(e,t){if(null==e.ownerDocument)throw new Error("Provided element is not within a Document");const n=L(e.ownerDocument.styleSheets),r=await async function(e,t){const n=[],r=[];return e.forEach((n=>{if("cssRules"in n)try{L(n.cssRules||[]).forEach(((e,o)=>{if(e.type===CSSRule.IMPORT_RULE){let i=o+1;const a=ae(e.href).then((e=>se(e,t))).then((e=>ce(e).forEach((e=>{try{n.insertRule(e,e.startsWith("@import")?i+=1:n.cssRules.length)}catch(t){console.error("Error inserting rule from remote css",{rule:e,error:t})}})))).catch((e=>{console.error("Error loading remote css",e.toString())}));r.push(a)}}))}catch(o){const i=e.find((e=>null==e.href))||document.styleSheets[0];null!=n.href&&r.push(ae(n.href).then((e=>se(e,t))).then((e=>ce(e).forEach((e=>{i.insertRule(e,n.cssRules.length)})))).catch((e=>{console.error("Error loading remote stylesheet",e)}))),console.error("Error inlining remote css file",o)}})),Promise.all(r).then((()=>(e.forEach((e=>{if("cssRules"in e)try{L(e.cssRules||[]).forEach((e=>{n.push(e)}))}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t)}})),n)))}(n,t);return function(e){return e.filter((e=>e.type===CSSRule.FONT_FACE_RULE)).filter((e=>te(e.style.getPropertyValue("src"))))}(r)}async function ue(e,t){const n=null!=t.fontEmbedCSS?t.fontEmbedCSS:t.skipFonts?null:await async function(e,t){const n=await le(e,t);return(await Promise.all(n.map((e=>{const n=e.parentStyleSheet?e.parentStyleSheet.href:null;return ne(e.cssText,n,t)})))).join("\n")}(e,t);if(n){const t=document.createElement("style"),r=document.createTextNode(n);t.appendChild(r),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}async function fe(e,t={}){const{width:n,height:r}=$(e,t),o=await K(e,t,!0);await ue(o,t),await oe(o,t),function(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;null!=r&&Object.keys(r).forEach((e=>{n[e]=r[e]}))}(o,t);return await j(o,n,r)}async function de(e,t={}){const{width:n,height:r}=$(e,t),o=await fe(e,t),i=await M(o),a=document.createElement("canvas"),s=a.getContext("2d"),c=t.pixelRatio||function(){let e,t;try{t=process}catch(r){}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}(),l=t.canvasWidth||n,u=t.canvasHeight||r;return a.width=l*c,a.height=u*c,t.skipAutoScale||function(e){(e.width>D||e.height>D)&&(e.width>D&&e.height>D?e.width>e.height?(e.height*=D/e.width,e.width=D):(e.width*=D/e.height,e.height=D):e.width>D?(e.height*=D/e.width,e.width=D):(e.width*=D/e.height,e.height=D))}(a),a.style.width=`${l}`,a.style.height=`${u}`,t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,a.width,a.height)),s.drawImage(i,0,0,a.width,a.height),a}var he={exports:{}};!function(e){!function(){var t=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n=t(e).toLowerCase();return(r="application/font-woff",o="image/jpeg",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:o,jpeg:o,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r,o},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){var t=3e4;s.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());return new Promise((function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=a,o.ontimeout=c,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),s.impl.options.imagePlaceholder){var i=s.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)}else r?n(r):l("cannot fetch resource: "+e+", status: "+o.status)}function c(){r?n(r):l("timeout of "+t+"ms occured while fetching resource: "+e)}function l(e){console.error(e),n("")}}))},uid:(e=0,function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)|0).toString(36)).slice(-4)}}),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),n=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,t,i){return a()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(n){var r=Promise.resolve(e);return n.forEach((function(e){r=r.then((function(n){return o(n,e,t,i)}))})),r}));function a(){return!n(e)}},shouldProcess:n,impl:{readUrls:r,inline:o}};function n(t){return-1!==t.search(e)}function r(n){for(var r,o=[];null!==(r=e.exec(n));)o.push(r[1]);return o.filter((function(e){return!t.isDataUrl(e)}))}function o(e,n,r,o){return Promise.resolve(n).then((function(e){return r?t.resolveUrl(e,r):e})).then(o||t.getAndEncode).then((function(e){return t.dataAsUrl(e,t.mimeType(n))})).then((function(r){return e.replace((o=n,new RegExp("(url\\(['\"]?)("+t.escape(o)+")(['\"]?\\))","g")),"$1"+r+"$3");var o}))}}(),r=function(){return{resolveAll:function(){return e().then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(t.asArray(document.styleSheets)).then((function(e){var n=[];return e.forEach((function(e){try{t.asArray(e.cssRules||[]).forEach(n.push.bind(n))}catch(r){console.log("Error while reading CSS rules from "+e.href,r.toString())}})),n})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return n.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return n.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),o=function(){return{inlineAll:function r(o){return o instanceof Element?i(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(t.asArray(o.childNodes).map((function(e){return r(e)})))})):Promise.resolve(o);function i(e){var t=e.style.getPropertyValue("background");return t?n.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}},impl:{newImage:e}};function e(e){return{inline:function(n){return t.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(n||t.getAndEncode).then((function(n){return t.dataAsUrl(n,t.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),i=void 0,a=!1,s={toSvg:c,toPng:function(e,t){return l(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return l(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,n){return l(e,n||{}).then(t.canvasToBlob)},toPixelData:function(e,n){return l(e,n||{}).then((function(n){return n.getContext("2d").getImageData(0,0,t.width(e),t.height(e)).data}))},impl:{fontFaces:r,images:o,util:t,inliner:n,options:{}}};function c(e,n){return function(e){void 0===e.imagePlaceholder?s.impl.options.imagePlaceholder=i:s.impl.options.imagePlaceholder=e.imagePlaceholder;void 0===e.cacheBust?s.impl.options.cacheBust=a:s.impl.options.cacheBust=e.cacheBust}(n=n||{}),Promise.resolve(e).then((function(e){return u(e,n.filter,!0)})).then(f).then(d).then((function(e){n.bgcolor&&(e.style.backgroundColor=n.bgcolor);n.width&&(e.style.width=n.width+"px");n.height&&(e.style.height=n.height+"px");n.style&&Object.keys(n.style).forEach((function(t){e.style[t]=n.style[t]}));return e})).then((function(r){return function(e,n,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(t.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+n+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,n.width||t.width(e),n.height||t.height(e))}))}function l(e,n){return c(e,n).then(t.makeImage).then(t.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=n.width||t.width(e),r.height=n.height||t.height(e),n.bgcolor){var o=r.getContext("2d");o.fillStyle=n.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function u(e,n,r){return r||!n||n(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?t.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(r){return function(e,n,r){var o=e.childNodes;return 0===o.length?Promise.resolve(n):i(n,t.asArray(o),r).then((function(){return n}));function i(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return u(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}}(e,r,n)})).then((function(n){return function(e,n){return n instanceof Element?Promise.resolve().then(r).then(o).then(i).then(a).then((function(){return n})):n;function r(){function r(e,n){function r(e,n){t.asArray(e).forEach((function(t){n.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))}))}e.cssText?n.cssText=e.cssText:r(e,n)}r(window.getComputedStyle(e),n.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=t.uid();n.className=n.className+" "+a;var s=document.createElement("style");s.appendChild(c(a,r,o)),n.appendChild(s)}function c(e,n,r){var o="."+e+":"+n,i=r.cssText?a(r):s(r);return document.createTextNode(o+"{"+i+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function s(e){return t.asArray(e).map(n).join("; ")+";";function n(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){r(e)}))}function i(){e instanceof HTMLTextAreaElement&&(n.innerHTML=e.value),e instanceof HTMLInputElement&&n.setAttribute("value",e.value)}function a(){n instanceof SVGElement&&(n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n instanceof SVGRectElement&&["width","height"].forEach((function(e){var t=n.getAttribute(e);t&&n.style.setProperty(e,t)})))}}(e,n)})):Promise.resolve()}function f(e){return r.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function d(e){return o.inlineAll(e).then((function(){return e}))}e.exports=s}()}(he);const me=r(he.exports),ge={style:{"margin-top":"10px",height:"calc(100% - 10px)"},class:"flex grow flex-col sm:flex-row h-full"},pe={style:{"margin-left":"10px","margin-right":"20px","border-radius":"20px",height:"calc(100% - 70px)"},class:"asc sm:pt-4 box-border bg-[#FFFFFF] h-[90%] dark:bg-[#15171A] overflow-y-auto w-full sm:w-[20rem] shrink-0 border-r-2 border-[#ffffff17] flex flex-col"},we={class:"flex-1 px-4 pb-2"},ve={class:"dark:bg-[#010102] bg-[#F4F4F4]"},ye={class:"flex my-4"},be={class:"flex justify-between mb-2"},xe={class:"dark:bg-[#010102] bg-[#F4F4F4]"},Ee={class:"py-3 bottom-0 border-t-2 border-[#00000014] w-full flex flex-col justify-center items-center"},Pe={style:{"border-radius":"20px","margin-right":"10px",height:"calc(100% - 70px)"},class:"h-full flex-1 overflow-y-auto overflow-hidden min-h-[80vh] flex flex-col bg-[#FFFFFF] dark:bg-[#15171A]"},Se={class:"flex-1 w-full p-4"},Ae=S(o({__name:"index",setup(n){var r;const o=i(),S=a(),A=s(),T=null==(r=o.globalConfig)?void 0:r.mindDefaultData,C=c((()=>o.isLogin)),L=l(null),k=new e.Transformer,$=l(!1),D=l(""),M=l(),j=l("");let U;function F(){if(!C.value)return void o.setLoginDialog(!0);const e=(new XMLSerializer).serializeToString(M.value),t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});R.saveAs(t,"gomaxai-mind.svg")}async function I(){if(!C.value)return void o.setLoginDialog(!0);const e=await me.toSvg(M.value),t=new Blob([`\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>Markmap Export</title>\n</head>\n<body>\n  ${e}\n</body>\n</html>`],{type:"text/html;charset=utf-8"});R.saveAs(t,"gomaxai-mind.html")}async function N(){if(C.value){$.value=!0,j.value="";try{const e="";let t="";const n=()=>(j.value=t,!!$.value||(j.value=t,!1)),r=setInterval((()=>{n()||clearInterval(r)}),1e3),o=async()=>{await w({prompt:D.value,onDownloadProgress:({event:n})=>{const r=n.target,{responseText:o}=r,i=o.lastIndexOf("\n",o.length-2);let a=o;-1!==i&&(a=o.substring(i));try{const n=JSON.parse(a);t=e+(n.text??"")}catch(s){}}}),$.value=!1};await o()}catch(e){$.value=!1;const{code:t=500,message:n="好像出错了，请稍后再试！"}=e;if(429===t&&n.includes("balance has been exhausted"))return A.error("当前系统Key余额耗尽、请联系管理员补充！");if(500===t){let t=(null==e?void 0:e.message)??"好像出错了，请稍后再试！";return"Request failed with status code 401"===t&&(t="非法操作、请先登录后再进行问答使用！"),void A.error(t)}if(402===e.code)return A.error(e.message,{duration:5e3}),void S.updateGoodsDialog(!0);A.error("出了点小错误、请稍后试试吧！")}finally{$.value=!1}}else o.setLoginDialog(!0)}async function H(){if(!C.value)return void o.setLoginDialog(!0);const e=await async function(e,t={}){return(await de(e,t)).toDataURL()}(M.value);R.saveAs(e,"markmap.png")}function O(){j.value="\n# 会议流程\n\n## 开场白\n- 欢迎词\n- 自我介绍\n\n## 议程安排\n- 介绍会议议程\n- 确认议程是否被所有人接受\n\n## 上一次会议的总结\n- 回顾上次会议的议题及结果\n- 确认上次会议的行动项是否已经完成\n\n## 主题讨论\n- 提出本次会议的主题\n- 介绍主题相关背景信息\n- 提出问题并进行讨论\n- 形成共识或决策\n\n## 行动项\n- 确定行动项及责任人\n- 确定完成时间和目标\n\n## 公告和其他事项\n- 公告即将到来的活动或项目\n- 公告公司的其他事项\n\n## 结束语\n- 感谢所有人的参与\n- 总结会议内容\n- 确认下一次会议的时间和议题\n"}u((()=>{setTimeout((()=>{j.value=T||"# GoMaxAi\n## 基础功能\n- 支持AI聊天\n- 支持GPT4\n- 支持DLLAE2\n- 支持Midjourney\n- 更多功能等你探索......\n\n## 更多内容\n-  在上面输入您想要生成的内容\n- 点击生成即可\n\n"}),1e3)}));const V=()=>{const{root:e}=k.transform(j.value);U.setData(e),U.fit()};return u((()=>{U=t.create(M.value),V()})),f(V),(e,t)=>(v(),d("div",ge,[h("div",pe,[h("div",we,[t[5]||(t[5]=h("h4",{class:"mb-2"}," 您的需求？ ",-1)),h("div",ve,[m(g(y),{style:{"background-color":"transparent"},ref_key:"inputRef",ref:L,value:D.value,"onUpdate:value":t[0]||(t[0]=e=>D.value=e),type:"textarea",disabled:$.value,autosize:{minRows:3},placeholder:"请输入您想要生成内容的简单描述、AI将为您输出一份完整的markdown内容及其思维导图!"},null,8,["value","disabled"])]),h("div",ye,[m(g(x),{type:"primary",size:"small",style:{width:"100%"},loading:$.value,onClick:N},{default:p((()=>t[2]||(t[2]=[b(" 智能生成生成思维导图 ")]))),_:1},8,["loading"])]),h("div",be,[t[4]||(t[4]=h("h4",{class:"font-bold"}," 内容需求 ",-1)),m(g(x),{text:"",onClick:O},{default:p((()=>t[3]||(t[3]=[b(" 试试示例 ")]))),_:1})]),h("div",xe,[m(g(y),{style:{"background-color":"transparent"},value:j.value,"onUpdate:value":t[1]||(t[1]=e=>j.value=e),type:"textarea",disabled:$.value,autosize:{minRows:8,maxRows:24},placeholder:"请用markdown语法输入您想要生成思维导图的内容或在上方使用描述让AI帮您完善！"},null,8,["value","disabled"])])]),h("div",Ee,[t[9]||(t[9]=h("div",{class:"items-start mb-2"}," 每次使用消耗基础积分： 1 ",-1)),h("div",null,[m(g(P),{size:"small"},{default:p((()=>[m(g(x),{type:"primary",onClick:I},{default:p((()=>[m(g(E),{icon:"ri:error-warning-line",class:"text-base"}),t[6]||(t[6]=b(" 导出HTML "))])),_:1}),m(g(x),{type:"primary",onClick:H},{default:p((()=>[m(g(E),{icon:"ri:error-warning-line",class:"text-base"}),t[7]||(t[7]=b(" 导出PNG "))])),_:1}),m(g(x),{type:"warning",onClick:F},{default:p((()=>[m(g(E),{icon:"ri:error-warning-line",class:"text-base"}),t[8]||(t[8]=b(" 导出SVG "))])),_:1})])),_:1})])])]),h("div",Pe,[t[10]||(t[10]=h("header",{class:"flex items-center p-5"},[h("h2",{class:"font-bold text-2xl"},"思维导图")],-1)),h("div",Se,[(v(),d("svg",{ref_key:"svgRef",ref:M,class:"box-border w-full h-[80vh] border dark:border-gray-600 rounded-md"},null,512))])])]))}}),[["__scopeId","data-v-5157f28c"]]);export{Ae as default};
