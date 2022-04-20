"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2314],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3130:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={id:"user_connections",title:"User connections API"},c=void 0,s={unversionedId:"pro/user_connections",id:"pro/user_connections",title:"User connections API",description:"Centrifugo PRO provides an additional API call userconnections. It allows getting all active sessions of the user (by user ID) without turning on presence feature for channels at all. It's also possible to attach any JSON payload to a connection which will be then visible in the result of userconnections call. The important thing is that this additional meta information won't be exposed to a client-side (unlike connection info for example).",source:"@site/docs/pro/user_connections.md",sourceDirName:"pro",slug:"/pro/user_connections",permalink:"/docs/pro/user_connections",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/user_connections.md",tags:[],version:"current",frontMatter:{id:"user_connections",title:"User connections API"},sidebar:"Pro",previous:{title:"Operation throttling",permalink:"/docs/pro/throttling"},next:{title:"User blocking API",permalink:"/docs/pro/user_block"}},p={},u=[{value:"User connections params",id:"user-connections-params",level:4},{value:"User connections result",id:"user-connections-result",level:4},{value:"UserConnectionInfo",id:"userconnectioninfo",level:4}],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo PRO provides an additional API call ",(0,o.kt)("inlineCode",{parentName:"p"},"user_connections"),". It allows getting all active sessions of the user (by user ID) without turning on presence feature for channels at all. It's also possible to attach any JSON payload to a connection which will be then visible in the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"user_connections")," call. The important thing is that this additional meta information won't be exposed to a client-side (unlike connection ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," for example)."),(0,o.kt)("p",null,"This feature can be useful to manage active user sessions \u2013 for example in a messenger application. Users can look at a list of own current sessions and close some of them (possible with Centrifugo disconnect server API)."),(0,o.kt)("p",null,"Below is a feature showcase using admin web UI, but this call is available over HTTP or GRPC server API."),(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:"/img/user_connections.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded video."),(0,o.kt)("p",null,"Let's look at example. Generate a JWT for user 42:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo genconfig\ncentrifugo gentoken -u 42\nHMAC SHA-256 JWT for user 42 with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y\n")),(0,o.kt)("p",null,"Run Centrifugo with ",(0,o.kt)("inlineCode",{parentName:"p"},"uni_http_stream")," transport enabled (it will allow us to connect from console):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CENTRIFUGO_UNI_HTTP_STREAM=1 centrifugo -c config.json\n")),(0,o.kt)("p",null,"Create new terminal window and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n')),(0,o.kt)("p",null,"In another terminal create one more connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n')),(0,o.kt)("p",null,"Now let's call ",(0,o.kt)("inlineCode",{parentName:"p"},"user_connections")," over HTTP API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "user_connections", "params": {"user": "42"}}\' \\\n  http://localhost:8000/api\n')),(0,o.kt)("p",null,"The result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": {\n        "connections": {\n            "db8bc772-2654-4283-851a-f29b888ace74": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            },\n            "4bc3ca70-ecc5-439d-af14-a78ae18e31c7": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Here we can see that user has 2 connections from ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")," app."),(0,o.kt)("p",null,"Each connection can be annotated with meta JSON information which is set during connection establishment (over ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," claim of JWT or by returning ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," in connect proxy result)."),(0,o.kt)("h4",{id:"user-connections-params"},"User connections params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"User ID")))),(0,o.kt)("h4",{id:"user-connections-result"},"User connections result"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field name"),(0,o.kt)("th",{parentName:"tr",align:null},"Field type"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connections"),(0,o.kt)("td",{parentName:"tr",align:null},"map of string to UserConnectionInfo"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"active user connections map where key is client ID and value is UserConnectionInfo")))),(0,o.kt)("h4",{id:"userconnectioninfo"},"UserConnectionInfo"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field name"),(0,o.kt)("th",{parentName:"tr",align:null},"Field type"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"app_name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"client app name (if provided by client)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"app_version"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"client app version (if provided by client)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"transport"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"client connection transport")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"protocol"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"client connection protocol (json or protobuf)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"token_uid"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"client JWT unique ID (if set)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"token_issued_at"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"client JWT issued at time as Unix seconds (if set)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"meta"),(0,o.kt)("td",{parentName:"tr",align:null},"JSON"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"meta information attached to a connection")))))}d.isMDXComponent=!0}}]);