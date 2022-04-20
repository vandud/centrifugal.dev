"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7765],{3905:function(t,e,n){n.d(e,{Zo:function(){return g},kt:function(){return f}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},g=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,g=l(t,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||o;return n?a.createElement(m,i(i({ref:e},g),{},{components:n})):a.createElement(m,i({ref:e},g))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4746:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Centrifugo integration with Django \u2013 building a basic chat application",tags:["centrifugo","tutorial","django"],description:"In this tutorial, we are integrating Django with Centrifugo to make a basic chat application. We are using Centrifugo proxy feature to proxy WebSocket connection events to a Django backend.",author:"Alexander Emelin",authorTitle:"Ex-Pythonista",authorImageURL:"https://github.com/FZambia.png",image:"/img/django_tutorial.jpg",hide_table_of_contents:!1},c=void 0,u={permalink:"/blog/2021/11/04/integrating-with-django-building-chat-application",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2021-11-04-integrating-with-django-building-chat-application.md",source:"@site/blog/2021-11-04-integrating-with-django-building-chat-application.md",title:"Centrifugo integration with Django \u2013 building a basic chat application",description:"In this tutorial, we are integrating Django with Centrifugo to make a basic chat application. We are using Centrifugo proxy feature to proxy WebSocket connection events to a Django backend.",date:"2021-11-04T00:00:00.000Z",formattedDate:"November 4, 2021",tags:[{label:"centrifugo",permalink:"/blog/tags/centrifugo"},{label:"tutorial",permalink:"/blog/tags/tutorial"},{label:"django",permalink:"/blog/tags/django"}],readingTime:15.49,truncated:!0,authors:[{name:"Alexander Emelin",title:"Ex-Pythonista",imageURL:"https://github.com/FZambia.png"}],frontMatter:{title:"Centrifugo integration with Django \u2013 building a basic chat application",tags:["centrifugo","tutorial","django"],description:"In this tutorial, we are integrating Django with Centrifugo to make a basic chat application. We are using Centrifugo proxy feature to proxy WebSocket connection events to a Django backend.",author:"Alexander Emelin",authorTitle:"Ex-Pythonista",authorImageURL:"https://github.com/FZambia.png",image:"/img/django_tutorial.jpg",hide_table_of_contents:!1},prevItem:{title:"Building a multi-room chat application with Laravel and Centrifugo",permalink:"/blog/2021/12/14/laravel-multi-room-chat-tutorial"},nextItem:{title:"Centrifugo integration with NodeJS tutorial",permalink:"/blog/2021/10/18/integrating-with-nodejs"}},g={authorsImageUrls:[void 0]},p=[],s={toc:p};function f(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Centrifuge",src:n(3386).Z,width:"1500",height:"500"})),(0,o.kt)("p",null,"In this tutorial, we will create a basic chat server using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.djangoproject.com/"},"Django framework")," and ",(0,o.kt)("a",{parentName:"p",href:"https://centrifugal.dev/"},"Centrifugo"),". Our chat application will have two pages:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A page that lets you type the name of a chat room to join."),(0,o.kt)("li",{parentName:"ol"},"A room view that lets you see messages posted in a chat room you joined.")),(0,o.kt)("p",null,"The room view will use a WebSocket to communicate with the Django server (with help from Centrifugo) and listen for any messages that are published to the room channel."))}f.isMDXComponent=!0},3386:function(t,e,n){e.Z=n.p+"assets/images/django_tutorial-e63ff6b91f9433091f3819a9b51758e0.jpg"}}]);