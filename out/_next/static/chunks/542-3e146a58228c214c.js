"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[542],{9376:function(e,t,r){var n=r(5475);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},34:function(e,t,r){var n=r(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,u=n.useEffect,o=n.useLayoutEffect,l=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return o(function(){i.value=r,i.getSnapshot=t,s(i)&&c({inst:i})},[e,r,t]),u(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},2558:function(e,t,r){e.exports=r(34)},3861:function(e,t,r){let n;r.d(t,{ZP:function(){return ee}});var i=r(2265),a=r(2558);let u=()=>{},o=u(),l=Object,s=e=>e===o,c=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),f=e=>c(e.then),E=new WeakMap,g=0,h=e=>{let t,r;let n=typeof e,i=e&&e.constructor,a=i==Date;if(l(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=E.get(e))return t;if(t=++g+"~",E.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=h(e[r])+",";E.set(e,t)}if(i==l){t="#";let n=l.keys(e).sort();for(;!s(r=n.pop());)s(e[r])||(t+=r+":"+h(e[r])+",");E.set(e,t)}}return t},v=new WeakMap,w={},p={},y="undefined",_=typeof window!=y,R=typeof document!=y,m=()=>_&&typeof window.requestAnimationFrame!=y,S=(e,t)=>{let r=v.get(e);return[()=>!s(t)&&e.get(t)||w,n=>{if(!s(t)){let i=e.get(t);t in p||(p[t]=i),r[5](t,d(i,n),i||w)}},r[6],()=>!s(t)&&t in p?p[t]:!s(t)&&e.get(t)||w]},T=!0,[b,O]=_&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],V={initFocus:e=>(R&&document.addEventListener("visibilitychange",e),b("focus",e),()=>{R&&document.removeEventListener("visibilitychange",e),O("focus",e)}),initReconnect:e=>{let t=()=>{T=!0,e()},r=()=>{T=!1};return b("online",t),b("offline",r),()=>{O("online",t),O("offline",r)}}},L=!i.useId,k=!_||"Deno"in window,C=e=>m()?window.requestAnimationFrame(e):setTimeout(e,1),N=k?i.useEffect:i.useLayoutEffect,D="undefined"!=typeof navigator&&navigator.connection,A=!k&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),P=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?h(e):"",t]},x=0,I=()=>++x;var F={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function M(...e){let[t,r,n,i]=e,a=d({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),u=a.populateCache,l=a.rollbackOnError,E=a.optimisticData,g=e=>"function"==typeof l?l(e):!1!==l,h=a.throwOnError;if(c(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(w))}return w(r);async function w(r){let i;let[l]=P(r);if(!l)return;let[d,w]=S(t,l),[p,y,_,R]=v.get(t),m=()=>{let e=p[l];return(c(a.revalidate)?a.revalidate(d().data,r):!1!==a.revalidate)&&(delete _[l],delete R[l],e&&e[0])?e[0](2).then(()=>d().data):d().data};if(e.length<3)return m();let T=n,b=I();y[l]=[b,0];let O=!s(E),V=d(),L=V.data,k=V._c,C=s(k)?L:k;if(O&&w({data:E=c(E)?E(C,L):E,_c:C}),c(T))try{T=T(C)}catch(e){i=e}if(T&&f(T)){if(T=await T.catch(e=>{i=e}),b!==y[l][0]){if(i)throw i;return T}i&&O&&g(i)&&(u=!0,w({data:C,_c:o}))}if(u&&!i&&(c(u)?w({data:u(T,C),error:o,_c:o}):w({data:T,error:o,_c:o})),y[l][1]=I(),Promise.resolve(m()).then(()=>{w({_c:o})}),i){if(h)throw i;return}return T}}let U=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},W=(e,t)=>{if(!v.has(e)){let r=d(V,t),n={},i=M.bind(o,e),a=u,l={},s=(e,t)=>{let r=l[e]||[];return l[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},c=(t,r,n)=>{e.set(t,r);let i=l[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!v.has(e)&&(v.set(e,[n,{},{},{},i,c,s]),!k)){let t=r.initFocus(setTimeout.bind(o,U.bind(o,n,0))),i=r.initReconnect(setTimeout.bind(o,U.bind(o,n,1)));a=()=>{t&&t(),i&&i(),v.delete(e)}}};return f(),[e,i,f,a]}return[e,v.get(e)[4]]},[j,$]=W(new Map),q=d({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,u=i.retryCount,o=~~((Math.random()+.5)*(1<<(u<8?u:8)))*r.errorRetryInterval;(s(a)||!(u>a))&&setTimeout(n,o,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:A?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:A?5e3:3e3,compare:(e,t)=>h(e)==h(t),isPaused:()=>!1,cache:j,mutate:$,fallback:{}},{isOnline:()=>T,isVisible:()=>{let e=R&&document.visibilityState;return s(e)||"hidden"!==e}}),J=(e,t)=>{let r=d(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:u}=t;n&&a&&(r.use=n.concat(a)),i&&u&&(r.fallback=d(i,u))}return r},Z=(0,i.createContext)({}),z=_&&window.__SWR_DEVTOOLS_USE__,B=z?window.__SWR_DEVTOOLS_USE__:[],G=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=()=>d(q,(0,i.useContext)(Z)),K=B.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=P(t),[,,,i]=v.get(j);if(n.startsWith("$inf$"))return r(...e);let a=i[n];return s(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),Q=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}};z&&(window.__SWR_DEVTOOLS_REACT__=i);let X=i.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),Y={dedupe:!0};l.defineProperty(e=>{let{value:t}=e,r=(0,i.useContext)(Z),n=c(t),a=(0,i.useMemo)(()=>n?t(r):t,[n,r,t]),u=(0,i.useMemo)(()=>n?a:J(r,a),[n,r,a]),l=a&&a.provider,s=(0,i.useRef)(o);l&&!s.current&&(s.current=W(l(u.cache||j),a));let f=s.current;return f&&(u.cache=f[0],u.mutate=f[1]),N(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,i.createElement)(Z.Provider,d(e,{value:u}))},"defaultValue",{value:q});let ee=(n=(e,t,r)=>{let{cache:n,compare:u,suspense:l,fallbackData:f,revalidateOnMount:E,revalidateIfStale:g,refreshInterval:h,refreshWhenHidden:w,refreshWhenOffline:p,keepPreviousData:y}=r,[_,R,m,T]=v.get(n),[b,O]=P(e),V=(0,i.useRef)(!1),D=(0,i.useRef)(!1),A=(0,i.useRef)(b),x=(0,i.useRef)(t),U=(0,i.useRef)(r),W=()=>U.current,j=()=>W().isVisible()&&W().isOnline(),[$,q,J,Z]=S(n,b),z=(0,i.useRef)({}).current,B=s(f)?r.fallback[b]:f,G=(e,t)=>{for(let r in z)if("data"===r){if(!u(e[r],t[r])&&(!s(e[r])||!u(eu,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},H=(0,i.useMemo)(()=>{let e=!!b&&!!t&&(s(E)?!W().isPaused()&&!l&&(!!s(g)||g):E),r=t=>{let r=d(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=$(),i=Z(),a=r(n),u=n===i?a:r(i),o=a;return[()=>{let e=r($());return G(e,o)?(o.data=e.data,o.isLoading=e.isLoading,o.isValidating=e.isValidating,o.error=e.error,o):(o=e,e)},()=>u]},[n,b]),K=(0,a.useSyncExternalStore)((0,i.useCallback)(e=>J(b,(t,r)=>{G(r,t)||e()}),[n,b]),H[0],H[1]),ee=!V.current,et=_[b]&&_[b].length>0,er=K.data,en=s(er)?B:er,ei=K.error,ea=(0,i.useRef)(en),eu=y?s(er)?ea.current:er:en,eo=(!et||!!s(ei))&&(ee&&!s(E)?E:!W().isPaused()&&(l?!s(en)&&g:s(en)||g)),el=!!(b&&t&&ee&&eo),es=s(K.isValidating)?el:K.isValidating,ec=s(K.isLoading)?el:K.isLoading,ed=(0,i.useCallback)(async e=>{let t,n;let i=x.current;if(!b||!i||D.current||W().isPaused())return!1;let a=!0,l=e||{},d=!m[b]||!l.dedupe,f=()=>L?!D.current&&b===A.current&&V.current:b===A.current,E={isValidating:!1,isLoading:!1},g=()=>{q(E)},h=()=>{let e=m[b];e&&e[1]===n&&delete m[b]},v={isValidating:!0};s($().data)&&(v.isLoading=!0);try{if(d&&(q(v),r.loadingTimeout&&s($().data)&&setTimeout(()=>{a&&f()&&W().onLoadingSlow(b,r)},r.loadingTimeout),m[b]=[i(O),I()]),[t,n]=m[b],t=await t,d&&setTimeout(h,r.dedupingInterval),!m[b]||m[b][1]!==n)return d&&f()&&W().onDiscarded(b),!1;E.error=o;let e=R[b];if(!s(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return g(),d&&f()&&W().onDiscarded(b),!1;let l=$().data;E.data=u(l,t)?l:t,d&&f()&&W().onSuccess(t,b,r)}catch(r){h();let e=W(),{shouldRetryOnError:t}=e;!e.isPaused()&&(E.error=r,d&&f()&&(e.onError(r,b,e),(!0===t||c(t)&&t(r))&&(!W().revalidateOnFocus||!W().revalidateOnReconnect||j())&&e.onErrorRetry(r,b,e,e=>{let t=_[b];t&&t[0]&&t[0](F.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return a=!1,g(),!0},[b,n]),ef=(0,i.useCallback)((...e)=>M(n,A.current,...e),[]);if(N(()=>{x.current=t,U.current=r,s(er)||(ea.current=er)}),N(()=>{if(!b)return;let e=ed.bind(o,Y),t=0,r=Q(b,_,(r,n={})=>{if(r==F.FOCUS_EVENT){let r=Date.now();W().revalidateOnFocus&&r>t&&j()&&(t=r+W().focusThrottleInterval,e())}else if(r==F.RECONNECT_EVENT)W().revalidateOnReconnect&&j()&&e();else if(r==F.MUTATE_EVENT)return ed();else if(r==F.ERROR_REVALIDATE_EVENT)return ed(n)});return D.current=!1,A.current=b,V.current=!0,q({_k:O}),eo&&(s(en)||k?e():C(e)),()=>{D.current=!0,r()}},[b]),N(()=>{let e;function t(){let t=c(h)?h($().data):h;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!$().error&&(w||W().isVisible())&&(p||W().isOnline())?ed(Y).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[h,w,p,b]),(0,i.useDebugValue)(eu),l&&s(en)&&b){if(!L&&k)throw Error("Fallback data is required when using suspense in SSR.");x.current=t,U.current=r,D.current=!1;let e=T[b];if(s(e)||X(ef(e)),s(ei)){let e=ed(Y);s(eu)||(e.status="fulfilled",e.value=!0),X(e)}else throw ei}return{mutate:ef,get data(){return z.data=!0,eu},get error(){return z.error=!0,ei},get isValidating(){return z.isValidating=!0,es},get isLoading(){return z.isLoading=!0,ec}}},function(...e){let t=H(),[r,i,a]=G(e),u=J(t,a),o=n,{use:l}=u,s=(l||[]).concat(K);for(let e=s.length;e--;)o=s[e](o);return o(r,i||u.fetcher||null,u)})}}]);