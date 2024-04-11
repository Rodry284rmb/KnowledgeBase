"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[1812],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,u=c["".concat(l,".").concat(g)]||c[g]||m[g]||a;return n?r.createElement(u,p(p({ref:t},d),{},{components:n})):r.createElement(u,p({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(4137));const a={title:"How to export logs from the background page",sidebar_position:1},p=void 0,i={unversionedId:"adguard-browser-extension/solving-problems/logs",id:"adguard-browser-extension/solving-problems/logs",title:"How to export logs from the background page",description:"Exporting logs from the background page in the extension",source:"@site/docs/adguard-browser-extension/solving-problems/logs.md",sourceDirName:"adguard-browser-extension/solving-problems",slug:"/adguard-browser-extension/solving-problems/logs",permalink:"/KnowledgeBase/adguard-browser-extension/solving-problems/logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/solving-problems/logs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to export logs from the background page",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Comparison to standalone apps",permalink:"/KnowledgeBase/adguard-browser-extension/comparison-standalone"},next:{title:"General",permalink:"/KnowledgeBase/adguard-for-safari/features/general"}},l={},s=[{value:"Exporting logs from the background page in the extension",id:"exporting-logs-from-the-background-page-in-the-extension",level:2},{value:"Chrome",id:"chrome",level:3},{value:"Firefox",id:"firefox",level:3},{value:"Sending logs",id:"sending-logs",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"exporting-logs-from-the-background-page-in-the-extension"},"Exporting logs from the background page in the extension"),(0,o.kt)("h3",{id:"chrome"},"Chrome"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open AdGuard Browser Extension and, if possible, repeat the actions that led to the error. Note the exact time when the error occurred.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"chrome://extensions"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable ",(0,o.kt)("em",{parentName:"p"},"Developer mode"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/developer_mode1.png",alt:"Developer mode *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"background.html"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/ad_blocker/browser_extension/background1.png",alt:"Background *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the tab ",(0,o.kt)("em",{parentName:"p"},"Console"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png",alt:"The Console tab *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the context menu and select ",(0,o.kt)("em",{parentName:"p"},"Save as\u2026"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png",alt:"Save as *border"})))),(0,o.kt)("h3",{id:"firefox"},"Firefox"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open AdGuard Browser Extension and, if possible, repeat the actions that led to the error. Note the exact time when the error occurred.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"about:addons"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("em",{parentName:"p"},"Debug Add-ons"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png",alt:"Debug Add-ons *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("em",{parentName:"p"},"Inspect"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png",alt:"Inspect *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the tab ",(0,o.kt)("em",{parentName:"p"},"Console"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png",alt:"Console *border"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("em",{parentName:"p"},"Save all Messages to File"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png",alt:"Save *border"})))),(0,o.kt)("h2",{id:"sending-logs"},"Sending logs"),(0,o.kt)("p",null,"Now that you have collected the logs, please follow these steps to submit them to our development team:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Report the bug on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose"},"GitHub"),"."),(0,o.kt)("li",{parentName:"ol"},"Send your archive with logs and playback time to ",(0,o.kt)("inlineCode",{parentName:"li"},"devteam@adguard.com")," and add a link to your GitHub issue. You can also upload the archive to Google Drive and add the link to it instead of attaching the file.")))}m.isMDXComponent=!0}}]);