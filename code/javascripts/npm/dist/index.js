module.exports=(()=>{"use strict";var e={137:(e,t,r)=>{r.r(t);r.d(t,{arrayDiff:()=>arrayDiff});function arrayDiff(e,t){return e.filter(e=>!t.includes(e))}},597:(e,t,r)=>{r.r(t);r.d(t,{century:()=>n});const n=e=>e%100===0?Math.floor(e/100):Math.floor(e/100)+1},543:(e,t,r)=>{r.r(t);r.d(t,{duplicateEncode:()=>duplicateEncode});function duplicateEncode(e){e=e.toLowerCase();let t="";for(let r=0;r<e.length;r++){const n=e.substring(0,r)+""+e.substring(r+1);if(!n.includes(e[r])){t+="("}else{t+=")"}}return t}function duplicateEncodeBetter(e){return e.toLowerCase().split("").map(function(e,t,r){return r.indexOf(e)==r.lastIndexOf(e)?"(":")"}).join("")}},225:(e,t,r)=>{r.r(t);r.d(t,{isIsogram:()=>n});const n=e=>e.split("").every((t,r)=>e.indexOf(t)==r)},150:(e,t,r)=>{r.r(t);r.d(t,{makeNegative:()=>n});const n=e=>e<0?e:-e},74:(e,t,r)=>{r.r(t);r.d(t,{maskify:()=>maskifyBetter});function maskify(e){const t=e;if(e.length<=4){return e}function mask(){let t="#";for(let r=1;r<e.length;r++){if(r>e.length-5){t+=e[r]}else{t+="#"}}return t}return mask()}function maskifyBetter(e){return e.slice(0,-4).replace(/./g,"#")+e.slice(-4)}},439:(e,t,r)=>{r.r(t);r.d(t,{filter:()=>n});const n=e=>e.filter(e=>typeof e==="number")},524:(e,t,r)=>{r.r(t);r.d(t,{disemvowel:()=>n});const n=e=>e.split("").filter(e=>!["a","e","i","o","u"].includes(e.toLowerCase())).join("")},546:(e,t,r)=>{r.r(t);r.d(t,{countSheeps:()=>n});const n=e=>e.filter(Boolean).length},380:(e,t,r)=>{r.r(t);r.d(t,{getSum:()=>getSum});function getSum(e,t){if(e==t){return e}else{let r=e;let n=t;if(e<t){r=t;n=e}let i=n;for(let e=n+1;e<=r;e++){i+=e}return i}}const n=(e,t)=>{let r=Math.min(e,t),n=Math.max(e,t);return(n-r+1)*(r+n)/2}},518:(e,t,r)=>{r.r(t);r.d(t,{add:()=>add});function add(e,t){while(t!=0){let r=e&t;e=e^t;t=r<<1}return e}},995:(e,t,r)=>{r.r(t);r.d(t,{isValidWalk:()=>n});const n=e=>{return e.length===10&&e.filter(function(e){return e==="n"}).length===e.filter(function(e){return e==="s"}).length&&e.filter(function(e){return e==="w"}).length.length===e.filter(function(e){return e==="e"}).length.length}},523:(e,t,r)=>{r.r(t);r.d(t,{arrayDiff:()=>n,century:()=>i,duplicateEncode:()=>o,isIsogram:()=>l,makeNegative:()=>a,maskify:()=>u,filter:()=>s,disemvowel:()=>c,countSheeps:()=>f,getSum:()=>d,add:()=>_,isValidWalk:()=>p});const{arrayDiff:n}=r(137);const{century:i}=r(597);const{duplicateEncode:o}=r(543);const{isIsogram:l}=r(225);const{makeNegative:a}=r(150);const{maskify:u}=r(74);const{filter:s}=r(439);const{disemvowel:c}=r(524);const{countSheeps:f}=r(546);const{getSum:d}=r(380);const{add:_}=r(518);const{isValidWalk:p}=r(995)}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var n=t[r]={exports:{}};var i=true;try{e[r](n,n.exports,__nccwpck_require__);i=false}finally{if(i)delete t[r]}return n.exports}(()=>{__nccwpck_require__.d=((e,t)=>{for(var r in t){if(__nccwpck_require__.o(t,r)&&!__nccwpck_require__.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t[r]})}}})})();(()=>{__nccwpck_require__.o=((e,t)=>Object.prototype.hasOwnProperty.call(e,t))})();(()=>{__nccwpck_require__.r=(e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})})})();__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(523)})();