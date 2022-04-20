"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3255],{3905:function(e,t,r){r.d(t,{Zo:function(){return g},kt:function(){return s}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),p=c(r),s=o,m=p["".concat(l,".").concat(s)]||p[s]||f[s]||i;return r?n.createElement(m,a(a({ref:t},g),{},{components:r})):n.createElement(m,a({ref:t},g))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3204:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],u={title:"Centrifuge \u2013 real-time messaging with Go",tags:["centrifuge","go"],author:"Alexander Emelin",authorTitle:"Creator of Centrifugo",authorImageURL:"https://github.com/FZambia.png",description:"An introduction to Centrifuge \u2013 real-time messaging with Go",image:"https://i.imgur.com/W1PeoJL.jpg",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/2021/01/15/centrifuge-intro",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2021-01-15-centrifuge-intro.md",source:"@site/blog/2021-01-15-centrifuge-intro.md",title:"Centrifuge \u2013 real-time messaging with Go",description:"An introduction to Centrifuge \u2013 real-time messaging with Go",date:"2021-01-15T00:00:00.000Z",formattedDate:"January 15, 2021",tags:[{label:"centrifuge",permalink:"/blog/tags/centrifuge"},{label:"go",permalink:"/blog/tags/go"}],readingTime:22.93,truncated:!0,authors:[{name:"Alexander Emelin",title:"Creator of Centrifugo",imageURL:"https://github.com/FZambia.png"}],frontMatter:{title:"Centrifuge \u2013 real-time messaging with Go",tags:["centrifuge","go"],author:"Alexander Emelin",authorTitle:"Creator of Centrifugo",authorImageURL:"https://github.com/FZambia.png",description:"An introduction to Centrifuge \u2013 real-time messaging with Go",image:"https://i.imgur.com/W1PeoJL.jpg",hide_table_of_contents:!1},prevItem:{title:"Centrifugo v3 released",permalink:"/blog/2021/08/31/hello-centrifugo-v3"},nextItem:{title:"Scaling WebSocket in Go and beyond",permalink:"/blog/2020/11/12/scaling-websocket"}},g={authorsImageUrls:[void 0]},f=[],p={toc:f};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/W1PeoJL.jpg",alt:"Centrifuge"})),(0,i.kt)("p",null,"In this post I'll try to introduce ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifuge"},"Centrifuge")," - the heart of Centrifugo."),(0,i.kt)("p",null,"Centrifuge is a real-time messaging library for the Go language."),(0,i.kt)("p",null,"This post is going to be pretty long (looks like I am a huge fan of long reads) \u2013 so make sure you also have a drink (probably two) and let's go!"))}s.isMDXComponent=!0}}]);