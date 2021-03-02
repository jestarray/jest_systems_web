var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function f(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}class v{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=h(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)c(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(l)}}let $;function b(t){$=t}function _(){const t=function(){if(!$)throw new Error("Function called outside component initialization");return $}();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);i.slice().forEach((e=>{e.call(t,r)}))}}}const y=[],x=[],k=[],E=[],C=Promise.resolve();let R=!1;function L(t){k.push(t)}let T=!1;const O=new Set;function A(){if(!T){T=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];b(e),S(e.$$)}for(b(null),y.length=0;x.length;)x.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];O.has(e)||(O.add(e),e())}k.length=0}while(y.length);for(;E.length;)E.pop()();R=!1,T=!1,O.clear()}}function S(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const U=new Set;let N;function M(){N={r:0,c:[],p:N}}function H(){N.r||i(N.c),N=N.p}function j(t,e){t&&t.i&&(U.delete(t),t.i(e))}function I(t,e,n,i){if(t&&t.o){if(U.has(t))return;U.add(t),N.c.push((()=>{U.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}function B(t){t&&t.c()}function q(t,n,o,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(n,o),s||L((()=>{const n=c.map(e).filter(r);l?l.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(L)}function P(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(y.push(t),R||(R=!0,C.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,r,o,s,a,c,u=[-1]){const h=$;b(e);const p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let d=!1;if(p.ctx=o?o(e,r.props||{},((t,n,...i)=>{const r=i.length?i[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),d&&D(e,t)),n})):[],p.update(),d=!0,i(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&j(e.$$.fragment),q(e,r.target,r.anchor,r.customElement),A()}b(h)}class W{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function K(e){let n,i,r,o,s,u,$,b,_,y,x,k=e[1].question+"",E=e[1].input_answer_hint+"";return{c(){n=h("div"),i=h("div"),o=d(),s=d(),u=h("p"),$=p(E),b=d(),_=h("input"),r=new v(o),g(_,"type","text")},m(t,l){c(t,n,l),a(n,i),r.m(k,i),a(i,o),a(n,s),a(n,u),a(u,$),a(n,b),a(n,_),w(_,e[0]),y||(x=f(_,"input",e[3]),y=!0)},p(t,[e]){2&e&&k!==(k=t[1].question+"")&&r.p(k),2&e&&E!==(E=t[1].input_answer_hint+"")&&m($,E),1&e&&_.value!==t[0]&&w(_,t[0])},i:t,o:t,d(t){t&&l(n),y=!1,x()}}}function z(t,e,n){let{data:i}=e,{reset:r}=e;const o=_();let{input_answer:s=""}=e;return t.$$set=t=>{"data"in t&&n(1,i=t.data),"reset"in t&&n(2,r=t.reset),"input_answer"in t&&n(0,s=t.input_answer)},t.$$.update=()=>{4&t.$$.dirty&&r&&n(0,s=""),3&t.$$.dirty&&o("update-check",(function(){return i.answer==s||i.answer.toString().toLowerCase()==s.toLowerCase()})),1&t.$$.dirty&&o("valid-input",s.length>0)},[s,i,r,function(){s=this.value,n(0,s),n(2,r)}]}class F extends W{constructor(t){super(),G(this,t,z,K,o,{data:1,reset:2,input_answer:0})}}function V(t,e,n){const i=t.slice();return i[7]=e[n],i[9]=n,i}function J(t){let e,n,r,o,s,u,w,v=t[7].text+"";return{c(){e=h("label"),n=h("input"),r=d(),o=p(v),s=d(),g(n,"type","radio"),n.__value=t[9],n.value=n.__value,t[5][0].push(n),g(e,"class","svelte-1q7z877")},m(i,l){c(i,e,l),a(e,n),n.checked=n.__value===t[1],a(e,r),a(e,o),a(e,s),u||(w=[f(n,"change",t[4]),f(n,"click",t[6])],u=!0)},p(t,e){2&e&&(n.checked=n.__value===t[1]),1&e&&v!==(v=t[7].text+"")&&m(o,v)},d(r){r&&l(e),t[5][0].splice(t[5][0].indexOf(n),1),u=!1,i(w)}}}function Z(e){let n,i,r,o=e[0].question+"",s=e[0].answer,p=[];for(let t=0;t<s.length;t+=1)p[t]=J(V(e,s,t));return{c(){n=h("div"),i=h("div"),r=d();for(let t=0;t<p.length;t+=1)p[t].c()},m(t,e){c(t,n,e),a(n,i),i.innerHTML=o,a(n,r);for(let t=0;t<p.length;t+=1)p[t].m(n,null)},p(t,[e]){if(1&e&&o!==(o=t[0].question+"")&&(i.innerHTML=o),15&e){let i;for(s=t[0].answer,i=0;i<s.length;i+=1){const r=V(t,s,i);p[i]?p[i].p(r,e):(p[i]=J(r),p[i].c(),p[i].m(n,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=s.length}},i:t,o:t,d(t){t&&l(n),u(p,t)}}}function Q(t,e,n){let{data:i}=e;const r=_();let o,s=!1;return t.$$set=t=>{"data"in t&&n(0,i=t.data)},t.$$.update=()=>{3&t.$$.dirty&&r("update-check",(function(){return i.answer[o].correct}))},[i,o,s,r,function(){o=this.__value,n(1,o)},[[]],function(){n(2,s=!0),r("valid-input",s)}]}class X extends W{constructor(t){super(),G(this,t,Q,Z,o,{data:0})}}function Y(t,e,n){const i=t.slice();return i[5]=e[n],i[7]=n,i}function tt(t){let e,n,r,o,s,u,w,v=t[5].text+"";return{c(){e=h("label"),n=h("input"),r=d(),o=p(v),s=d(),g(n,"type","checkbox"),n.__value=t[7],n.value=n.__value,t[3][0].push(n),g(e,"class","svelte-1vjntry")},m(i,l){c(i,e,l),a(e,n),n.checked=~t[1].indexOf(n.__value),a(e,r),a(e,o),a(e,s),u||(w=[f(n,"change",t[2]),f(n,"click",nt)],u=!0)},p(t,e){2&e&&(n.checked=~t[1].indexOf(n.__value)),1&e&&v!==(v=t[5].text+"")&&m(o,v)},d(r){r&&l(e),t[3][0].splice(t[3][0].indexOf(n),1),u=!1,i(w)}}}function et(e){let n,i,r,o=e[0].question+"",s=e[0].answer,p=[];for(let t=0;t<s.length;t+=1)p[t]=tt(Y(e,s,t));return{c(){n=h("div"),i=h("div"),r=d();for(let t=0;t<p.length;t+=1)p[t].c()},m(t,e){c(t,n,e),a(n,i),i.innerHTML=o,a(n,r);for(let t=0;t<p.length;t+=1)p[t].m(n,null)},p(t,[e]){if(1&e&&o!==(o=t[0].question+"")&&(i.innerHTML=o),3&e){let i;for(s=t[0].answer,i=0;i<s.length;i+=1){const r=Y(t,s,i);p[i]?p[i].p(r,e):(p[i]=tt(r),p[i].c(),p[i].m(n,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=s.length}},i:t,o:t,d(t){t&&l(n),u(p,t)}}}const nt=function(){};function it(t,e,n){let{data:i}=e;const r=_();let o=[];const s=[[]];return t.$$set=t=>{"data"in t&&n(0,i=t.data)},t.$$.update=()=>{3&t.$$.dirty&&r("update-check",(function(){let t=i.answer.map(((t,e)=>{if(t.correct)return e})).filter((t=>{if(void 0!==t)return!0}));if(t.length!==o.length)return!1;for(let e of t)if(!o.includes(e))return!1;return!0})),2&t.$$.dirty&&r("valid-input",o.length>0)},[i,o,function(){o=function(t,e,n){const i=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&i.add(t[e].__value);return n||i.delete(e),Array.from(i)}(s[0],this.__value,this.checked),n(1,o)},s]}class rt extends W{constructor(t){super(),G(this,t,it,et,o,{data:0})}}let ot=new Audio("./question-correct.ogg"),st=new Audio("./question-wrong.wav");var at;function ct(t,e,n){const i=t.slice();return i[21]=e[n],i[23]=n,i}function lt(t){let e,n,i,r=t[21].result+"";return{c(){e=h("span"),n=p(r),g(e,"class",i=s((t[23]===t[0].problem_index?"current ":"")+(t[21].result===at.CORRECT?"dot correct":t[21].result===at.WRONG?"dot wrong":"dot"))+" svelte-9wu6d6")},m(t,i){c(t,e,i),a(e,n)},p(t,o){64&o&&r!==(r=t[21].result+"")&&m(n,r),65&o&&i!==(i=s((t[23]===t[0].problem_index?"current ":"")+(t[21].result===at.CORRECT?"dot correct":t[21].result===at.WRONG?"dot wrong":"dot"))+" svelte-9wu6d6")&&g(e,"class",i)},d(t){t&&l(e)}}}function ut(t){let e,n;return e=new rt({props:{data:t[8]}}),e.$on("update-check",t[16]),e.$on("valid-input",t[17]),{c(){B(e.$$.fragment)},m(t,i){q(e,t,i),n=!0},p(t,n){const i={};256&n&&(i.data=t[8]),e.$set(i)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function ht(t){let e,n;return e=new X({props:{data:t[8]}}),e.$on("update-check",t[14]),e.$on("valid-input",t[15]),{c(){B(e.$$.fragment)},m(t,i){q(e,t,i),n=!0},p(t,n){const i={};256&n&&(i.data=t[8]),e.$set(i)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function pt(t){let e,n;return e=new F({props:{reset:t[9],data:t[8]}}),e.$on("update-check",t[12]),e.$on("valid-input",t[13]),{c(){B(e.$$.fragment)},m(t,i){q(e,t,i),n=!0},p(t,n){const i={};512&n&&(i.reset=t[9]),256&n&&(i.data=t[8]),e.$set(i)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function dt(e){let n;return{c(){n=h("h2"),n.textContent="Could not fetch data :("},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}function ft(t){let e,n,i,r,o,u;return{c(){e=h("button"),n=p("Check"),g(e,"class",i=s(t[3]?"button":"button disabled")+" svelte-9wu6d6"),e.disabled=r=!t[3]},m(i,r){c(i,e,r),a(e,n),o||(u=f(e,"click",t[19]),o=!0)},p(t,n){8&n&&i!==(i=s(t[3]?"button":"button disabled")+" svelte-9wu6d6")&&g(e,"class",i),8&n&&r!==(r=!t[3])&&(e.disabled=r)},d(t){t&&l(e),o=!1,u()}}}function gt(t){let e,n,i,r,o=t[7]?"Reset":"Next";return{c(){e=h("button"),n=p(o),g(e,"class","button svelte-9wu6d6")},m(o,s){c(o,e,s),a(e,n),i||(r=f(e,"click",t[18]),i=!0)},p(t,e){128&e&&o!==(o=t[7]?"Reset":"Next")&&m(n,o)},d(t){t&&l(e),i=!1,r()}}}function mt(t){let e,n,i,r,o,s,f,w,v,$,b=t[0].title+"",_=t[6],y=[];for(let e=0;e<_.length;e+=1)y[e]=lt(ct(t,_,e));const x=[dt,pt,ht,ut],k=[];function E(t,e){return t[6].length<=0?0:"input"===t[8].type?1:"choice"===t[8].type?2:"select"===t[8].type?3:-1}function C(t,e){return t[4]?gt:ft}~(s=E(t))&&(f=k[s]=x[s](t));let R=C(t),L=R(t);return{c(){e=h("title"),n=p(b),i=d(),r=h("div");for(let t=0;t<y.length;t+=1)y[t].c();o=d(),f&&f.c(),w=d(),v=h("div"),L.c(),g(v,"class","right-buttons svelte-9wu6d6")},m(t,l){c(t,e,l),a(e,n),c(t,i,l),c(t,r,l);for(let t=0;t<y.length;t+=1)y[t].m(r,null);a(r,o),~s&&k[s].m(r,null),a(r,w),a(r,v),L.m(v,null),$=!0},p(t,[e]){if((!$||1&e)&&b!==(b=t[0].title+"")&&m(n,b),65&e){let n;for(_=t[6],n=0;n<_.length;n+=1){const i=ct(t,_,n);y[n]?y[n].p(i,e):(y[n]=lt(i),y[n].c(),y[n].m(r,o))}for(;n<y.length;n+=1)y[n].d(1);y.length=_.length}let i=s;s=E(t),s===i?~s&&k[s].p(t,e):(f&&(M(),I(k[i],1,1,(()=>{k[i]=null})),H()),~s?(f=k[s],f?f.p(t,e):(f=k[s]=x[s](t),f.c()),j(f,1),f.m(r,w)):f=null),R===(R=C(t))&&L?L.p(t,e):(L.d(1),L=R(t),L&&(L.c(),L.m(v,null)))},i(t){$||(j(f),$=!0)},o(t){I(f),$=!1},d(t){t&&l(e),t&&l(i),t&&l(r),u(y,t),~s&&k[s].d(),L.d()}}}function wt(t,e,n){let i,r,o,s,{data:a}=e,c=a.gen;const l=_();let u,h=!1,p=!1,d=!1;console.log(a.data);return t.$$set=t=>{"data"in t&&n(0,a=t.data)},t.$$.update=()=>{1&t.$$.dirty&&n(6,i=a.data),1&t.$$.dirty&&n(8,o=a.data[a.problem_index])},n(7,r=!1),n(9,s=!1),[a,ot,u,h,p,d,i,r,o,s,c,l,t=>{n(2,u=t.detail)},t=>{n(3,h=t.detail)},t=>{n(2,u=t.detail)},t=>{n(3,h=t.detail)},t=>{n(2,u=t.detail)},t=>{n(3,h=t.detail)},()=>{a.problem_index<i.length-1?(n(0,a.problem_index+=1,a),n(4,p=!1),n(2,u=null),n(3,h=!1)):(n(7,r=!0),r&&(d?c&&(n(5,d=!1),n(6,i=i.map((()=>c()))),n(6,i),n(0,a),n(0,a.problem_index=0,a),n(4,p=!1),n(2,u=null),n(3,h=!1),n(7,r=!1)):n(5,d=!0))),l("save"),n(9,s=!0)},()=>{n(9,s=!1),u()?(i[a.problem_index].tries<=0&&n(6,i[a.problem_index].result=at.CORRECT,i),n(4,p=!0),n(1,ot.currentTime=0,ot),ot.play()):(st.play(),n(6,i[a.problem_index].tries+=1,i),n(6,i[a.problem_index].result=at.WRONG,i)),l("save")}]}!function(t){t.CORRECT="+",t.WRONG="-",t.CORRECTED_WRONG="^",t.UNANSWERED="?"}(at||(at={}));class vt extends W{constructor(t){super(),G(this,t,wt,mt,o,{data:0})}}function $t(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)}function bt(t,e){let n=(t>>>0).toString(2);return n.length<e?n.padStart(e,"0"):n.length>e?n.slice(-e):(n.length==e||console.warn("WARNING! CHECK TO MAKE SURE THE BIT-WIDTH FITS WITHIN NUM RANGE"),n)}function _t(t,e){let n=-Math.pow(2,e),i=bt(parseInt(t,2),e);return n+parseInt(i,2)}function yt(t,e){return`${t}<sub>${e}</sub>`}function xt(t){return t.replace(/ /gi,"_").toLowerCase()}class kt{constructor(t,e,n,i){this.type=t,this.question=e,this.answer=n,this.input_answer_hint=i,this.result="?",this.tries=0,this.time=0,this.hints=0}}class Et{constructor(t,e,n,i,r,o=[]){this.title=t,this.id=e,this.problem_index=0,this.num_of_problems=n,this.tags=i,this.data=[],this.gen=r,this.resources=o}}let Ct=[{kind:"article",url:"https://computers404.netlify.app/06-binarynumbers"},{kind:"video",url:"https://youtu.be/bFLB4dyNKUk"}],Rt=[new Et("Binary To Decimal",0,5,[],(function(){let t=bt($t(0,255),8);return new kt("input",`<h2>Convert ${yt(t,2)} to decimal?</h2>`,parseInt(t,2).toString(),"Answer ex: 3")}),Ct),new Et("Decimal To Binary",.1,5,[],(function(){let t=$t(0,255);return new kt("input",`<h2>Convert ${yt(t,10)} to binary?(8 bits)</h2>`,bt(t,8),"make sure answer is 8 bits e.g: 00010110")}),Ct),new Et("Binary to Hex",2.1,5,[],(function(){let t=$t(0,Math.pow(2,24)),e=bt(t,0),n=t.toString(16);return new kt("input",`<h2>Convert ${yt(e,2)} to hex?</h2>`,"0x"+n,"prefix with '0x', example: 0xbfa11")})),new Et("Hex to Binary",2.1,5,[],(function(){let t=$t(0,Math.pow(2,24)),e=bt(t,0),n=t.toString(16);return new kt("input",`<h2>Convert ${yt(n,16)} to binary?</h2>`,e,"Answer ex: 01010")})),new Et("Decimal to Hex",2.3,5,[],(function(){let t=$t(0,255),e=t.toString(16);return new kt("input",`<h2>Convert ${yt(t,10)} to hex?</h2>`,"0x"+e,"prefix with '0x', example: 0xbfa1")})),new Et("Hex to Decimal",2.3,5,[],(function(){let t=$t(0,255),e=t.toString(16);return new kt("input",`<h2>Convert ${yt(e,16)} to decimal?</h2>`,t,"Answer ex: 3")})),new Et("Bitwise Operations",2.8,5,[],(function(){let t,e=$t(0,255)>>>0,n=$t(0,255)>>>0,i=bt(e,8),r=bt(n,8),o=["|","&","^"][$t(0,2)];return"|"===o?t=e|n:"&"===o?t=e&n:"^"===o&&(t=e^n),new kt("input",`\n        <h2>Given</h2>\n        <pre>\n        a = ${i}\n        b = ${r}\n        </pre>\n        <h2>what is a ${o} b ?</h2>\n        `,bt(t,8),"Answer ex: 000100")})),new Et("Bitshifting (arithmetic and logical)",2.16,20,[],(function(){let t,e=$t(0,255)>>>0,n=$t(1,6),i=e.toString(16),r=bt(e,8),o=["<<",">>",">>>"],s=$t(0,o.length-1);if("<<"===o[s])t=r.substring(n).padEnd(r.length,"0");else if(">>>"==o[s]){let e="0";"1"==r.substring(0,1)&&(e="1"),t=r.substring(0,r.length-n).padStart(r.length,e)}else t=r.substring(0,r.length-n).padStart(r.length,"0");return new kt("input",`\n        <h2>What is ${i}<sub>16</sub> ${o[s]} ${n} in binary?</h2>\n        `,t,"Answer ex: 000100")})),new Et("Binary Addition(unsigned)",2.17,10,[],(function(){let t,e=$t(4,6),n=$t(1,Math.pow(2,e)),i=$t(1,Math.pow(2,e)),r=bt(n,e),o=bt(i,e),s=n+i;if(s>Math.pow(2,e)-1){t=`${s},${s-Math.pow(2,e)}`}else t=s.toString();return new kt("input",`\n            <h2>Given a bit width of ${e}</h2>\n            <pre>\n              ${r}\n            + ${o}\n            _______\n            </pre>\n            Convert the answer to decimal`,`${t}`,"if the answer overflows, write the overflow case last appened by a comma, e.g 10,3")}),[{kind:"article",url:""}]),new Et("Decimal to Binary(two's complement)",2.17,10,[],(function(){let t=$t(4,6),e=$t(0,-(Math.pow(2,t)/2-1)),n=bt(e,t);return new kt("input",`<h2>Given a bit-width of ${t}, convert the decimal number ${e} to two's complement binary</h2>`,n,"Answer ex: 010101")})),new Et("Binary(two's complement) to Decimal(unsigned and signed)",2.19,10,[],(function(){let t=$t(4,6),e=bt($t(0,-(Math.pow(2,t)/2-1)),t),n=_t(e,t),i=parseInt(e,2);return new kt("input",`<h2>Given a bit-width of ${t}, convert ${yt(e,2)} , to both signed and unsigned decimal</h2>`,`${n},${i}`,"ex: -30,34")})),new Et("Binary addition and subtraction(two's complement)",2.19,10,[],(function(){let t=$t(4,6),e=$t(0,-(Math.pow(2,t)/2-1));$t(0,-(Math.pow(2,t)/2-1)),_t(bt(e,t),t)}))];function Lt(t,e,n){const i=t.slice();return i[3]=e[n],i}function Tt(t,e,n){const i=t.slice();return i[6]=e[n],i}function Ot(t){let e,n,i,r,o=t[6].kind+"";return{c(){e=h("a"),n=p(o),i=d(),g(e,"href",r=t[6].url)},m(t,r){c(t,e,r),a(e,n),a(e,i)},p(t,i){2&i&&o!==(o=t[6].kind+"")&&m(n,o),2&i&&r!==(r=t[6].url)&&g(e,"href",r)},d(t){t&&l(e)}}}function At(t){let e,n,i,r,o,s,f,w,v,$,b,_,y,x,k,E,C,R,L,T=t[3].id+"",O=t[3].title+"",A=Ut(t[3].data)+"",S=t[3].resources,U=[];for(let e=0;e<S.length;e+=1)U[e]=Ot(Tt(t,S,e));return{c(){e=h("tr"),n=h("td"),i=p(T),r=d(),o=h("td"),s=h("a"),f=p(O),v=d(),$=h("td"),b=p(A),_=d(),y=h("td"),x=h("a"),k=p("Github"),C=d(),R=h("td");for(let t=0;t<U.length;t+=1)U[t].c();L=d(),g(s,"href",w="#"+xt(t[3].title)),g(x,"href",E="/#discuss/"+xt(t[3].title))},m(t,l){c(t,e,l),a(e,n),a(n,i),a(e,r),a(e,o),a(o,s),a(s,f),a(e,v),a(e,$),a($,b),a(e,_),a(e,y),a(y,x),a(x,k),a(e,C),a(e,R);for(let t=0;t<U.length;t+=1)U[t].m(R,null);a(e,L)},p(t,e){if(2&e&&T!==(T=t[3].id+"")&&m(i,T),2&e&&O!==(O=t[3].title+"")&&m(f,O),2&e&&w!==(w="#"+xt(t[3].title))&&g(s,"href",w),2&e&&A!==(A=Ut(t[3].data)+"")&&m(b,A),2&e&&E!==(E="/#discuss/"+xt(t[3].title))&&g(x,"href",E),2&e){let n;for(S=t[3].resources,n=0;n<S.length;n+=1){const i=Tt(t,S,n);U[n]?U[n].p(i,e):(U[n]=Ot(i),U[n].c(),U[n].m(R,null))}for(;n<U.length;n+=1)U[n].d(1);U.length=S.length}},d(t){t&&l(e),u(U,t)}}}function St(e){let n,i,r,o,s,m,v,$,b,_,y,x,k=e[1],E=[];for(let t=0;t<k.length;t+=1)E[t]=At(Lt(e,k,t));return{c(){n=h("div"),i=h("input"),r=d(),o=h("table"),s=h("tr"),s.innerHTML='<th scope="col">#</th> \n      <th scope="col">Title</th> \n      <th scope="col">Progress</th> \n      <th scope="col">Discuss</th> \n      <th scope="col">Resources</th>',m=d();for(let t=0;t<E.length;t+=1)E[t].c();v=d(),$=h("a"),$.textContent="Source Code",b=p("\n  |\n  "),_=h("a"),_.textContent="Support my work on Patreon!",g(i,"type","text"),g(i,"placeholder","Search"),g($,"href","https://github.com/jestarray/jest_systems_web"),g(_,"href","https://www.patreon.com/jestarray/")},m(t,l){c(t,n,l),a(n,i),w(i,e[0]),a(n,r),a(n,o),a(o,s),a(o,m);for(let t=0;t<E.length;t+=1)E[t].m(o,null);a(n,v),a(n,$),a(n,b),a(n,_),y||(x=f(i,"input",e[2]),y=!0)},p(t,[e]){if(1&e&&i.value!==t[0]&&w(i,t[0]),2&e){let n;for(k=t[1],n=0;n<k.length;n+=1){const i=Lt(t,k,n);E[n]?E[n].p(i,e):(E[n]=At(i),E[n].c(),E[n].m(o,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=k.length}},i:t,o:t,d(t){t&&l(n),u(E,t),y=!1,x()}}}function Ut(t){let e=0;for(let n of t)"+"===n.result&&e++;return`${e}/${t.length}`}function Nt(t,e,n){let i,r;return t.$$.update=()=>{1&t.$$.dirty&&n(1,r=i.length>0?Rt.filter((t=>t.title.toLowerCase().includes(i.toLowerCase()))):Rt)},n(0,i=""),[i,r,function(){i=this.value,n(0,i)}]}class Mt extends W{constructor(t){super(),G(this,t,Nt,St,o,{})}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Ht,jt,It=(function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=v,n=a,i=c,r=l,o=w,s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],i=0,r=0,o="";null!=(e=s.exec(t));){var a=e[0],c=e[1],l=e.index;if(o+=t.slice(r,l),r=l+a.length,c)o+=c[1];else{o&&(n.push(o),o="");var u=e[2],p=e[3],d=e[4],f=e[5],g=e[6],m=e[7],w="+"===g||"*"===g,v="?"===g||"*"===g,$=u||"/",b=d||f||(m?".*":"[^"+$+"]+?");n.push({name:p||i++,prefix:u||"",delimiter:$,optional:v,repeat:w,pattern:h(b)})}}return r<t.length&&(o+=t.substr(r)),o&&n.push(o),n}function c(t){return l(a(t))}function l(e){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(n[i]=new RegExp("^"+e[i].pattern+"$"));return function(i){for(var r="",o=i||{},s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,l=o[a.name];if(null==l){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(c=encodeURIComponent(l[u]),!n[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');r+=(0===u?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(l),!n[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');r+=a.prefix+c}}else r+=a}return r}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function h(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function p(t,e){return t.keys=e,t}function d(t){return t.sensitive?"":"i"}function f(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return p(t,e)}function g(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(v(t[r],e,n).source);return p(new RegExp("(?:"+i.join("|")+")",d(n)),e)}function m(t,e,n){for(var i=a(t),r=w(i,n),o=0;o<i.length;o++)"string"!=typeof i[o]&&e.push(i[o]);return p(r,e)}function w(t,e){for(var n=(e=e||{}).strict,i=!1!==e.end,r="",o=t[t.length-1],s="string"==typeof o&&/\/$/.test(o),a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)r+=u(c);else{var l=u(c.prefix),h=c.pattern;c.repeat&&(h+="(?:"+l+h+")*"),r+=h=c.optional?l?"(?:"+l+"("+h+"))?":"("+h+")?":l+"("+h+")"}}return n||(r=(s?r.slice(0,-2):r)+"(?:\\/(?=$))?"),r+=i?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+r,d(e))}function v(e,n,i){return t(n=n||[])?i||(i={}):(i=n,n=[]),e instanceof RegExp?f(e,n):t(e)?g(e,n,i):m(e,n,i)}e.parse=n,e.compile=i,e.tokensToFunction=r,e.tokensToRegExp=o;var $,b="undefined"!=typeof document,_="undefined"!=typeof window,y="undefined"!=typeof history,x="undefined"!=typeof process,k=b&&document.ontouchstart?"touchstart":"click",E=_&&!(!window.history.location&&!window.location);function C(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function R(){var t=new C;function e(){return L.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=R,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=A,e.Route=S,e}function L(t,e){if("function"==typeof t)return L.call(this,"*",t);if("function"==typeof e)for(var n=new S(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function T(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?E&&this._getBase()+n.location.hash.replace("#!",""):E&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,E&&(n.location.href=t.canonicalPath))}}function O(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t,e,n){var i=this.page=n||L,r=i._window,o=i._hashbang,s=i._getBase();"/"===t[0]&&0!==t.indexOf(s)&&(t=s+(o?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+O(s));if(this.path=t.replace(c,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&r.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?i._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var l=this.path.split("#");this.path=this.pathname=l[0],this.hash=i._decodeURLEncodedURIComponent(l[1])||"",this.querystring=this.querystring.split("#")[0]}}function S(t,n,i){var r=this.page=i||U,o=n||{};o.strict=o.strict||r._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],o)}C.prototype.configure=function(t){var e=t||{};this._window=e.window||_&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&_,this._click=!1!==e.click&&b,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):_&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(k,this.clickHandler,!1):b&&n.document.removeEventListener(k,this.clickHandler,!1),this._hashbang&&_&&!y?n.addEventListener("hashchange",this._onpopstate,!1):_&&n.removeEventListener("hashchange",this._onpopstate,!1)},C.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},C.prototype._getBase=function(){var t=this._base;if(t)return t;var e=_&&this._window&&this._window.location;return _&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},C.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},C.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,E){var i=this._window.location;n=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(n,null,!0,e.dispatch)}},C.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(k,this.clickHandler,!1),_&&t.removeEventListener("popstate",this._onpopstate,!1),_&&t.removeEventListener("hashchange",this._onpopstate,!1)}},C.prototype.show=function(t,e,n,i){var r=new A(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,!1!==n&&this.dispatch(r,o),!1!==r.handled&&!1!==i&&r.pushState(),r},C.prototype.back=function(t,e){var n=this;if(this.len>0){var i=this._window;y&&i.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},C.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&L.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},C.prototype.replace=function(t,e,n,i){var r=new A(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=n,r.save(),!1!==i&&this.dispatch(r,o),r},C.prototype.dispatch=function(t,e){var n=0,i=0,r=this;function o(){var t=r.exits[i++];if(!t)return s();t(e,o)}function s(){var e=r.callbacks[n++];if(t.path===r.current)return e?void e(t,s):T.call(r,t);t.handled=!1}e?o():s()},C.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new S(t,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},C.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){e=n[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var o=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==o)&&!(o&&o.indexOf("mailto:")>-1)&&!(r?e.target.baseVal:e.target)&&(r||this.sameOrigin(e.href))){var s=r?e.href.baseVal:e.pathname+e.search+(e.hash||"");s="/"!==s[0]?"/"+s:s,x&&s.match(/^\/[a-zA-Z]:\//)&&(s=s.replace(/^\/[a-zA-Z]:\//,"/"));var a=s,c=this._getBase();0===s.indexOf(c)&&(s=s.substr(c.length)),this._hashbang&&(s=s.replace("#!","")),(!c||a!==s||E&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},C.prototype._onpopstate=($=!1,_?(b&&"complete"===document.readyState?$=!0:window.addEventListener("load",(function(){setTimeout((function(){$=!0}),0)})),function(t){if($){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(E){var i=e._window.location;e.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}),C.prototype._which=function(t){return null==(t=t||_&&this._window.event).which?t.button:t.which},C.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&E)return new URL(t,e.location.toString());if(b){var n=e.document.createElement("a");return n.href=t,n}},C.prototype.sameOrigin=function(t){if(!t||!E)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},C.prototype._samePath=function(t){if(!E)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},C.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},A.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,y&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},A.prototype.save=function(){var t=this.page;y&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},S.prototype.middleware=function(t){var e=this;return function(n,i){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,i);i()}},S.prototype.match=function(t,e){var n=this.keys,i=t.indexOf("?"),r=~i?t.slice(0,i):t,o=this.regexp.exec(decodeURIComponent(r));if(!o)return!1;delete e[0];for(var s=1,a=o.length;s<a;++s){var c=n[s-1],l=this.page._decodeURLEncodedURIComponent(o[s]);void 0===l&&hasOwnProperty.call(e,c.name)||(e[c.name]=l)}return!0};var U=R(),N=U,M=U;return N.default=M,N}()}(jt={path:Ht,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&jt.path)}},jt.exports),jt.exports);function Bt(e){let n,i,r,o,s,u,f,w,v,$,b,_,y,x=e[0]+" Discussion";return{c(){n=h("title"),i=p(e[0]),r=d(),o=h("div"),s=h("h1"),u=p(x),f=d(),w=h("p"),w.textContent="Ask questions, suggest improvements, etc",v=d(),$=h("script"),_=d(),y=h("div"),$.src!==(b="https://utteranc.es/client.js")&&g($,"src","https://utteranc.es/client.js"),g($,"repo","jestarray/jest_systems_web"),g($,"issue-term","title"),g($,"theme","github-light"),g($,"crossorigin","anonymous"),$.async=!0,g(y,"class","utterance-frame"),g(o,"class","utterances")},m(t,e){c(t,n,e),a(n,i),c(t,r,e),c(t,o,e),a(o,s),a(s,u),a(o,f),a(o,w),a(o,v),a(o,$),a(o,_),a(o,y)},p(t,[e]){1&e&&m(i,t[0]),1&e&&x!==(x=t[0]+" Discussion")&&m(u,x)},i:t,o:t,d(t){t&&l(n),t&&l(r),t&&l(o)}}}function qt(t,e,n){let{title:i}=e;return t.$$set=t=>{"title"in t&&n(0,i=t.title)},[i]}class Pt extends W{constructor(t){super(),G(this,t,qt,Bt,o,{title:0})}}function Dt(t){let e,n,i,r,o;var s=t[0];function a(t){return{props:{params:t[1],title:t[1]?t[1].title:"",data:t[1]}}}return s&&(r=new s(a(t)),r.$on("save",t[3])),{c(){e=h("nav"),e.innerHTML='<a href="/">Home</a>',n=d(),i=h("main"),r&&B(r.$$.fragment),g(i,"class","container svelte-1mgotj3")},m(t,s){c(t,e,s),c(t,n,s),c(t,i,s),r&&q(r,i,null),o=!0},p(t,[e]){const n={};if(2&e&&(n.params=t[1]),2&e&&(n.title=t[1]?t[1].title:""),2&e&&(n.data=t[1]),s!==(s=t[0])){if(r){M();const t=r;I(t.$$.fragment,1,0,(()=>{P(t,1)})),H()}s?(r=new s(a(t)),r.$on("save",t[3]),B(r.$$.fragment),j(r.$$.fragment,1),q(r,i,null)):r=null}else s&&r.$set(n)},i(t){o||(r&&j(r.$$.fragment,t),o=!0)},o(t){r&&I(r.$$.fragment,t),o=!1},d(t){t&&l(e),t&&l(n),t&&l(i),r&&P(r)}}}function Gt(t,e,n){let i,r,o,s=Rt;It("/",((t,e)=>{let a=t.hash;if(a.includes("discuss")){n(0,i=Pt);let t=a.indexOf("/")+1,e=a.slice(t,a.length);console.log(e);let o=e.split("_").map((t=>t.charAt(0).toLocaleUpperCase()+t.slice(1))).reduceRight(((t,e)=>e+" "+t));n(1,r={title:o})}else{let t=JSON.parse(localStorage.getItem("save"));t&&n(2,s=Rt.map(((e,n)=>Object.assign(e,t[n])))),o=s.find((t=>xt(t.title)===a)),void 0!==o?(n(0,i=vt),n(1,r=o),console.log(r.data),n(1,r.data=r.data.length>0?r.data:Array.from(new Array(o.num_of_problems),(()=>r.gen())),r)):n(0,i=Mt)}})),It("/discuss",(()=>{n(0,i=Pt)})),It.start();return[i,r,s,()=>{localStorage.setItem("save",JSON.stringify(s)),console.log("saving"),localStorage.getItem("save")}]}return new class extends W{constructor(t){super(),G(this,t,Gt,Dt,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
