(window.__webStories_webpackJsonp=window.__webStories_webpackJsonp||[]).push([[196],{966:function(t,e,n){"use strict";n.r(e),n.d(e,"toSvg",(function(){return O})),n.d(e,"toCanvas",(function(){return W})),n.d(e,"toPixelData",(function(){return J})),n.d(e,"toPng",(function(){return q})),n.d(e,"toJpeg",(function(){return G})),n.d(e,"toBlob",(function(){return X})),n.d(e,"getFontEmbedCSS",(function(){return K}));var __awaiter=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}u((r=r.apply(t,e||[])).next())}))};const r="application/font-woff",o="image/jpeg",i={woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:o,jpeg:o,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function c(t){const e=function(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return i[e]||""}function s(t){return-1!==t.search(/^(data:)/)}function u(t,e){return`data:${e};base64,${t}`}const l=function(){let t=0;return()=>(t+=1,`u${`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4)}${t}`)}();function a(t){const e=[];for(let n=0,r=t.length;n<r;n+=1)e.push(t[n]);return e}function h(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}function f(t){return t.toBlob?new Promise((e=>t.toBlob(e))):new Promise((e=>{const n=window.atob(t.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r);for(let t=0;t<r;t+=1)o[t]=n.charCodeAt(t);e(new Blob([o],{type:"image/png"}))}))}function d(t){return new Promise(((e,n)=>{const r=new Image;r.onload=()=>e(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="sync",r.src=t}))}function p(t,e,n){return __awaiter(this,void 0,void 0,(function*(){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${e}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${e} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(t),function(t){return __awaiter(this,void 0,void 0,(function*(){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(t))).then(encodeURIComponent).then((t=>`data:image/svg+xml;charset=utf-8,${t}`))}))}(o)}))}const m={};function g(t,e){const n=function(t){let e=t.replace(/\?.*/,"");return/ttf|otf|eot|woff2?/i.test(e)&&(e=e.replace(/.*\//,"")),e}(t);if(null!=m[n])return m[n];e.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());const r=window.fetch(t).then((t=>t.blob().then((e=>({blob:e,contentType:t.headers.get("Content-Type")||""}))))).then((({blob:t,contentType:e})=>new Promise(((n,r)=>{const o=new FileReader;o.onloadend=()=>n({contentType:e,blob:o.result}),o.onerror=r,o.readAsDataURL(t)})))).then((({blob:t,contentType:e})=>{return{contentType:e,blob:(n=t,n.split(/,/)[1])};var n})).catch((n=>{let r="";if(e.imagePlaceholder){const t=e.imagePlaceholder.split(/,/);t&&t[1]&&(r=t[1])}let o=`Failed to fetch resource: ${t}`;return n&&(o="string"==typeof n?n:n.message),o&&console.error(o),{blob:r,contentType:""}}));return m[n]=r,r}function v(t,e,n){const r=`.${t}:${e}`,o=n.cssText?function(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}(n):function(t){return a(t).map((e=>`${e}: ${t.getPropertyValue(e)}${t.getPropertyPriority(e)?" !important":""};`)).join(" ")}(n);return document.createTextNode(`${r}{${o}}`)}function w(t,e,n){const r=window.getComputedStyle(t,n),o=r.getPropertyValue("content");if(""===o||"none"===o)return;const i=l();try{e.className=`${e.className} ${i}`}catch(t){return}const c=document.createElement("style");c.appendChild(v(i,n,r)),e.appendChild(c)}var y=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}u((r=r.apply(t,e||[])).next())}))};function b(t,e){return y(this,void 0,void 0,(function*(){return t instanceof HTMLCanvasElement?function(t){return y(this,void 0,void 0,(function*(){const e=t.toDataURL();return"data:,"===e?Promise.resolve(t.cloneNode(!1)):d(e)}))}(t):t instanceof HTMLVideoElement&&t.poster?function(t,e){return y(this,void 0,void 0,(function*(){return Promise.resolve(t.poster).then((t=>g(t,e))).then((e=>u(e.blob,c(t.poster)||e.contentType))).then((t=>d(t)))}))}(t,e):Promise.resolve(t.cloneNode(!1))}))}function P(t,e){return y(this,void 0,void 0,(function*(){return e instanceof Element?Promise.resolve().then((()=>function(t,e){const n=window.getComputedStyle(t),r=e.style;r&&(n.cssText?r.cssText=n.cssText:a(n).forEach((t=>{r.setProperty(t,n.getPropertyValue(t),n.getPropertyPriority(t))})))}(t,e))).then((()=>function(t,e){w(t,e,":before"),w(t,e,":after")}(t,e))).then((()=>function(t,e){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}(t,e))).then((()=>e)):Promise.resolve(e)}))}function x(t,e,n){return y(this,void 0,void 0,(function*(){return n||!e.filter||e.filter(t)?Promise.resolve(t).then((t=>b(t,e))).then((n=>function(t,e,n){var r;return y(this,void 0,void 0,(function*(){const o=null!=(i=t).tagName&&"SLOT"===i.tagName.toUpperCase()&&t.assignedNodes?a(t.assignedNodes()):a((null!==(r=t.shadowRoot)&&void 0!==r?r:t).childNodes);var i;return 0===o.length||t instanceof HTMLVideoElement?Promise.resolve(e):o.reduce(((t,r)=>t.then((()=>x(r,n))).then((t=>{t&&e.appendChild(t)}))),Promise.resolve()).then((()=>e))}))}(t,n,e))).then((e=>P(t,e))):Promise.resolve(null)}))}var S=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}u((r=r.apply(t,e||[])).next())}))};const E=/url\((['"]?)([^'"]+?)\1\)/g,$=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,T=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function C(t){const e=[];return t.replace(E,((t,n,r)=>(e.push(r),t))),e.filter((t=>!s(t)))}function R(t,e,n,r,o){const i=n?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),e&&(r.href=e),o.href=t,o.href}(e,n):e;return Promise.resolve(i).then((t=>o?o(t):g(t,r))).then((t=>"string"==typeof t?u(t,c(e)):u(t.blob,c(e)||t.contentType))).then((n=>t.replace(function(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}(e),`$1${n}$3`))).then((t=>t),(()=>i))}function L(t){return-1!==t.search(E)}function N(t,e,n){return S(this,void 0,void 0,(function*(){if(!L(t))return Promise.resolve(t);const r=function(t,{preferredFontFormat:e}){return e?t.replace(T,(t=>{for(;;){const[n,,r]=$.exec(t)||[];if(!r)return"";if(r===e)return`src: ${n};`}})):t}(t,n);return Promise.resolve(r).then(C).then((t=>t.reduce(((t,r)=>t.then((t=>R(t,r,e,n)))),Promise.resolve(r))))}))}var A=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}u((r=r.apply(t,e||[])).next())}))};function k(t,e){return A(this,void 0,void 0,(function*(){return t instanceof Element?Promise.resolve(t).then((t=>function(t,e){var n;return A(this,void 0,void 0,(function*(){const r=null===(n=t.style)||void 0===n?void 0:n.getPropertyValue("background");return r?Promise.resolve(r).then((t=>N(t,null,e))).then((e=>(t.style.setProperty("background",e,t.style.getPropertyPriority("background")),t))):Promise.resolve(t)}))}(t,e))).then((t=>function(t,e){return A(this,void 0,void 0,(function*(){if((!(t instanceof HTMLImageElement)||s(t.src))&&(!(t instanceof SVGImageElement)||s(t.href.baseVal)))return Promise.resolve(t);const n=t instanceof HTMLImageElement?t.src:t.href.baseVal;return Promise.resolve(n).then((t=>g(t,e))).then((t=>u(t.blob,c(n)||t.contentType))).then((e=>new Promise(((n,r)=>{t.onload=n,t.onerror=r,t instanceof HTMLImageElement?(t.srcset="",t.src=e):t.href.baseVal=e})))).then((()=>t),(()=>t))}))}(t,e))).then((t=>function(t,e){return A(this,void 0,void 0,(function*(){const n=a(t.childNodes).map((t=>k(t,e)));return Promise.all(n).then((()=>t))}))}(t,e))):Promise.resolve(t)}))}var I=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}u((r=r.apply(t,e||[])).next())}))};const M={};function D(t){const e=M[t];if(null!=e)return e;const n=window.fetch(t).then((e=>({url:t,cssText:e.text()})));return M[t]=n,n}function V(t){return I(this,void 0,void 0,(function*(){return t.cssText.then((e=>{let n=e;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((e=>{let o=e.replace(r,"$1");return o.startsWith("https://")||(o=new URL(o,t.url).href),window.fetch(o).then((t=>t.blob())).then((t=>new Promise(((r,o)=>{const i=new FileReader;i.onloadend=()=>{n=n.replace(e,`url(${i.result})`),r([e,i.result])},i.onerror=o,i.readAsDataURL(t)}))))}));return Promise.all(o).then((()=>n))}))}))}function H(t){if(null==t)return[];const e=[];let n=t.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const t=r.exec(n);if(null===t)break;e.push(t[0])}n=n.replace(r,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let t=o.exec(n);if(null===t){if(t=i.exec(n),null===t)break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;e.push(t[0])}return e}function U(t){return t.filter((t=>t.type===CSSRule.FONT_FACE_RULE)).filter((t=>L(t.style.getPropertyValue("src"))))}function j(t){return I(this,void 0,void 0,(function*(){return new Promise(((e,n)=>{null==t.ownerDocument&&n(new Error("Provided element is not within a Document")),e(a(t.ownerDocument.styleSheets))})).then((t=>function(t){return I(this,void 0,void 0,(function*(){const e=[],n=[];return t.forEach((e=>{if("cssRules"in e)try{a(e.cssRules).forEach(((t,r)=>{if(t.type===CSSRule.IMPORT_RULE){let o=r+1;const i=D(t.href).then((t=>t?V(t):"")).then((t=>H(t).forEach((t=>{try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}})))).catch((t=>{console.error("Error loading remote css",t.toString())}));n.push(i)}}))}catch(r){const o=t.find((t=>null==t.href))||document.styleSheets[0];null!=e.href&&n.push(D(e.href).then((t=>t?V(t):"")).then((t=>H(t).forEach((t=>{o.insertRule(t,e.cssRules.length)})))).catch((t=>{console.error("Error loading remote stylesheet",t.toString())}))),console.error("Error inlining remote css file",r.toString())}})),Promise.all(n).then((()=>(t.forEach((t=>{if("cssRules"in t)try{a(t.cssRules).forEach((t=>{e.push(t)}))}catch(e){console.error(`Error while reading CSS rules from ${t.href}`,e.toString())}})),e)))}))}(t))).then(U)}))}function F(t,e){return I(this,void 0,void 0,(function*(){return j(t).then((t=>Promise.all(t.map((t=>{const n=t.parentStyleSheet?t.parentStyleSheet.href:null;return N(t.cssText,n,e)}))))).then((t=>t.join("\n")))}))}var _=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}u((r=r.apply(t,e||[])).next())}))};function B(t,e={}){return{width:e.width||function(t){const e=h(t,"border-left-width"),n=h(t,"border-right-width");return t.clientWidth+e+n}(t),height:e.height||function(t){const e=h(t,"border-top-width"),n=h(t,"border-bottom-width");return t.clientHeight+e+n}(t)}}function O(t,e={}){return _(this,void 0,void 0,(function*(){const{width:n,height:r}=B(t,e);return Promise.resolve(t).then((t=>x(t,e,!0))).then((t=>function(t,e){return I(this,void 0,void 0,(function*(){return(null!=e.fontEmbedCSS?Promise.resolve(e.fontEmbedCSS):F(t,e)).then((e=>{const n=document.createElement("style"),r=document.createTextNode(e);return n.appendChild(r),t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),t}))}))}(t,e))).then((t=>k(t,e))).then((t=>function(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const r=e.style;return null!=r&&Object.keys(r).forEach((t=>{n[t]=r[t]})),t}(t,e))).then((t=>p(t,n,r)))}))}const z=16384;function W(t,e={}){return _(this,void 0,void 0,(function*(){return O(t,e).then(d).then((n=>{const r=document.createElement("canvas"),o=r.getContext("2d"),i=e.pixelRatio||function(){let t,e;try{e=process}catch(t){}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),{width:c,height:s}=B(t,e),u=e.canvasWidth||c,l=e.canvasHeight||s;return r.width=u*i,r.height=l*i,e.skipAutoScale||function(t){(t.width>z||t.height>z)&&(t.width>z&&t.height>z?t.width>t.height?(t.height*=z/t.width,t.width=z):(t.width*=z/t.height,t.height=z):t.width>z?(t.height*=z/t.width,t.width=z):(t.width*=z/t.height,t.height=z))}(r),r.style.width=`${u}`,r.style.height=`${l}`,e.backgroundColor&&(o.fillStyle=e.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(n,0,0,r.width,r.height),r}))}))}function J(t,e={}){return _(this,void 0,void 0,(function*(){const{width:n,height:r}=B(t,e);return W(t,e).then((t=>t.getContext("2d").getImageData(0,0,n,r).data))}))}function q(t,e={}){return _(this,void 0,void 0,(function*(){return W(t,e).then((t=>t.toDataURL()))}))}function G(t,e={}){return _(this,void 0,void 0,(function*(){return W(t,e).then((t=>t.toDataURL("image/jpeg",e.quality||1)))}))}function X(t,e={}){return _(this,void 0,void 0,(function*(){return W(t,e).then(f)}))}function K(t,e={}){return _(this,void 0,void 0,(function*(){return F(t,e)}))}}}]);