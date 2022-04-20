"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8356],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={id:"tracing",title:"User and channel tracing"},s=void 0,l={unversionedId:"pro/tracing",id:"pro/tracing",title:"User and channel tracing",description:"That's a unique thing. The tracing feature of Centrifugo PRO allows attaching to any channel to see all messages flying towards subscribers or attach to a specific user ID to see all user-related events in real-time.",source:"@site/docs/pro/tracing.md",sourceDirName:"pro",slug:"/pro/tracing",permalink:"/docs/pro/tracing",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/tracing.md",tags:[],version:"current",frontMatter:{id:"tracing",title:"User and channel tracing"},sidebar:"Pro",previous:{title:"Install and run PRO version",permalink:"/docs/pro/install_and_run"},next:{title:"Analytics with ClickHouse",permalink:"/docs/pro/analytics"}},u={},p=[{value:"Save to a file",id:"save-to-a-file",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"That's a unique thing. The tracing feature of Centrifugo PRO allows attaching to any channel to see all messages flying towards subscribers or attach to a specific user ID to see all user-related events in real-time."),(0,o.kt)("p",null,"It's possible to attach to trace streams using Centrifugo admin UI panel or simply from terminal using CURL and admin token. "),(0,o.kt)("p",null,"This can be super-useful for debugging issues, investigating application behavior, understanding that the application works as expected. "),(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:"/img/tracing.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded video."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The tracing feature works fine for JSON messages. For binary payloads, there are some limitations currently."))),(0,o.kt)("h3",{id:"save-to-a-file"},"Save to a file"),(0,o.kt)("p",null,"It's possible to connect to the admin tracing endpoint with CURL using the admin session token. And then save tracing output to a file for later processing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST http://localhost:8000/admin/trace -H "Authorization: token <ADMIN_AUTH_TOKEN>" -d \'{"type": "user", "entity": "56"}\' -o trace.txt\n')),(0,o.kt)("p",null,"Currently, you should copy the admin auth token from browser developer tools, this may be improved in the future."))}f.isMDXComponent=!0}}]);