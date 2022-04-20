"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9474],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?i.createElement(g,r(r({ref:t},d),{},{components:n})):i.createElement(g,r({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(3117),a=n(102),o=(n(7294),n(3905)),r=["components"],s={id:"design",title:"Design overview"},l=void 0,c={unversionedId:"getting-started/design",id:"getting-started/design",title:"Design overview",description:"Let's discuss some architectural and design topics about Centrifugo.",source:"@site/docs/getting-started/design.md",sourceDirName:"getting-started",slug:"/getting-started/design",permalink:"/docs/getting-started/design",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/design.md",tags:[],version:"current",frontMatter:{id:"design",title:"Design overview"},sidebar:"Introduction",previous:{title:"Integration guide",permalink:"/docs/getting-started/integration"},next:{title:"Migrating to v3",permalink:"/docs/getting-started/migration_v3"}},d={},u=[{value:"Idiomatic usage",id:"idiomatic-usage",level:2},{value:"Message history considerations",id:"message-history-considerations",level:2},{value:"Message delivery model",id:"message-delivery-model",level:2},{value:"Message order guarantees",id:"message-order-guarantees",level:2},{value:"Graceful degradation",id:"graceful-degradation",level:2},{value:"Online presence considerations",id:"online-presence-considerations",level:2},{value:"Scalability considerations",id:"scalability-considerations",level:2}],h={toc:u};function p(e){var t=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's discuss some architectural and design topics about Centrifugo."),(0,o.kt)("h2",{id:"idiomatic-usage"},"Idiomatic usage"),(0,o.kt)("p",null,"Originally Centrifugo was built with the unidirectional flow as the main approach. Though Centrifugo itself used a bidirectional protocol between a client and a server to allow client dynamically create subscriptions, Centrifugo did not allow using it for sending data from client to server."),(0,o.kt)("p",null,"With this approach publications travel only from server to a client. All requests that generate new data first go to the application backend (for example over AJAX call of backend API). The backend can validate the message, process it, save it into a database for long-term persistence \u2013 and then publish an event from a backend side to Centrifugo API."),(0,o.kt)("p",null,"This is a pretty natural workflow for applications since this is how applications traditionally work (without real-time features) and Centrifugo is decoupled from the application in this case."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"diagram_unidirectional_publish",src:n(7114).Z,width:"2600",height:"881"})),(0,o.kt)("p",null,"During Centrifugo v2 life cycle this paradigm evolved a bit. It's now possible to send RPC requests from client to Centrifugo and the request will be then proxied to the application backend. Also, connection attempts and publications to channels can now be proxied. So bidirectional connection between client and Centrifugo is now available for utilizing by developers in both directions. For example, here is how publish diagram could look like when using publish request proxy feature:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8719).Z,width:"2600",height:"1098"})),(0,o.kt)("p",null,"So at the moment, the number of possible integration ways increased."),(0,o.kt)("h2",{id:"message-history-considerations"},"Message history considerations"),(0,o.kt)("p",null,"Idiomatic Centrifugo usage requires having the main application database from which initial and actual state can be loaded at any point in time."),(0,o.kt)("p",null,"While Centrifugo has channel history, it has been mostly designed to reduce the load on the main application database when all users reconnect at once (in case of load balancer configuration reload, Centrifugo restart, temporary network problems, etc). This allows to radically reduce the load on the application main database during reconnect storm. Since such disconnects are usually pretty short in time having a reasonably small number of messages cached in history is sufficient."),(0,o.kt)("p",null,"The addition of history iteration API shifts possible use cases a bit. Calling history chunk by chunk allows keeping larger number of publications per channel. But depending on Engine used and configuration of the underlying storage history stream persistence characteristics can vary. For example, with Memory Engine history will be lost upon Centrifugo restart. With Redis or Tarantool engines history will survive Centrifugo restarts but depending on a storage configuration it can be lost upon storage restart \u2013 so you should take into account storage configuration and persistence properties as well. For example, consider enabling Redis RDB and AOF, configure replication for storage high-availability, use Redis Cluster or maybe synchronous replication with Tarantool."),(0,o.kt)("p",null,"Centrifugo provides ways to distinguish whether the missed messages can't be restored from Centrifugo history upon recovery so a client should restore state from the main application database. So Centrifugo message history can be used as a complementary way to restore messages and thus reduce a load on the main application database most of the time."),(0,o.kt)("h2",{id:"message-delivery-model"},"Message delivery model"),(0,o.kt)("p",null,"By default, the message delivery model of Centrifugo is at most once. With history and the position/recovery features enabled it's possible to achieve at least once guarantee within history retention time and size. After abnormal disconnect clients have an option to recover missed messages from the publication stream cache that Centrifugo maintains."),(0,o.kt)("p",null,"Without the positioning or recovery features enabled a message sent to Centrifugo can be theoretically lost while moving towards clients. Centrifugo tries to do its best to prevent message loss on a way to online clients, but the application should tolerate a loss."),(0,o.kt)("p",null,"As noted Centrifugo has a feature called message recovery to automatically recover messages missed due to short network disconnections. Also, it compensates at most once delivery of broker (Redis, Tarantool) PUB/SUB by using additional publication offset checks and periodic offset synchronization."),(0,o.kt)("p",null,"At this moment Centrifugo message recovery is designed for a short-term disconnect period (think no more than one hour for a typical chat application, but this can vary). After this period (which can be configured per channel basis) Centrifugo removes messages from the channel history cache. In this case, Centrifugo may tell the client that some messages can not be recovered, so your application state should be loaded from the main database."),(0,o.kt)("h2",{id:"message-order-guarantees"},"Message order guarantees"),(0,o.kt)("p",null,"Message order in channels is guaranteed to be the same while you publish messages into channel one after another or publish them in one request. If you do parallel publications into the same channel then Centrifugo can't guarantee message order since those may be processed concurrently by Centrifugo."),(0,o.kt)("h2",{id:"graceful-degradation"},"Graceful degradation"),(0,o.kt)("p",null,"It is recommended to design an application in a way that users don't even notice when Centrifugo does not work. Use graceful degradation. For example, if a user posts a new comment over AJAX to your application backend - you should not rely only on Centrifugo to receive a new comment from a channel and display it. You should return new comment data in AJAX call response and render it. This way user that posts a comment will think that everything works just fine. Be careful to not draw comments twice in this case - think about idempotent identifiers for your entities."),(0,o.kt)("h2",{id:"online-presence-considerations"},"Online presence considerations"),(0,o.kt)("p",null,"Online presence in a channel is designed to be eventually consistent. It will return the correct state most of the time. But when using Redis or Tarantool engines, due to the network failures and unexpected shut down of Centrifugo node, there are chances that clients can be presented in a presence up to one minute more (until presence entry expiration)."),(0,o.kt)("p",null,"Also, channel presence does not scale well for channels with lots of active subscribers. This is due to the fact that presence returns the entire snapshot of all clients in a channel \u2013 as soon as the number of active subscribers grows the response size becomes larger. In some cases, ",(0,o.kt)("inlineCode",{parentName:"p"},"presence_stats")," API call can be sufficient to avoid receiving the entire presence state."),(0,o.kt)("h2",{id:"scalability-considerations"},"Scalability considerations"),(0,o.kt)("p",null,"Centrifugo can scale horizontally with built-in engines (Redis, Tarantool, KeyDB) or with Nats broker. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/engines"},"engines"),"."),(0,o.kt)("p",null,"All supported brokers are fast \u2013 they can handle hundreds of thousands of requests per second. This should be enough for most applications."),(0,o.kt)("p",null,"But, if you approach broker resource limits (CPU or memory) then it's possible:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use Centrifugo consistent sharding support to balance queries between different broker instances (supported for Redis, KeyDB, Tarantool)"),(0,o.kt)("li",{parentName:"ul"},"Use Redis Cluster (it's also possible to consistently shard data between different Redis Clusters)"),(0,o.kt)("li",{parentName:"ul"},"Nats broker should scale well itself in cluster setup")),(0,o.kt)("p",null,"All brokers can be set up in highly available way so there won't be a single point of failure."),(0,o.kt)("p",null,"All Centrifugo data (history, online presence) is designed to be ephemeral and have an expiration time. Due to this fact and the fact that Centrifugo provides hooks for the application to understand history loss makes the process of resharding mostly automatic. As soon as you need to add additional broker shard (when using client-side sharding) you can just add it to the configuration and restart Centrifugo. Since data is sharded consistently part of the data will stay on the same broker nodes. Applications should handle cases that channel data moved to another shard and restore a state from the main application database when needed."))}p.isMDXComponent=!0},8719:function(e,t,n){t.Z=n.p+"assets/images/diagram_publish_proxy-66ccb1e8b37ed8912d218b4529597bd9.png"},7114:function(e,t,n){t.Z=n.p+"assets/images/diagram_unidirectional_publish-791f0862f2aa9632dec9c3515bcdc6ea.png"}}]);