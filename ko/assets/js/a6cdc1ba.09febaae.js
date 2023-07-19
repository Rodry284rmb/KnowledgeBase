"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5275],{4137:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var o=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,i=function(e,r){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),d=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=d(e.components);return o.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||n;return t?o.createElement(f,a(a({ref:r},p),{},{components:t})):o.createElement(f,a({ref:r},p))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,a=new Array(n);a[0]=c;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<n;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5835:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=t(7462),i=(t(7294),t(4137));const n={title:"Known compatibility issues with Android apps",sidebar_position:16},a=void 0,s={unversionedId:"adguard-for-android/solving-problems/compatibility-issues",id:"adguard-for-android/solving-problems/compatibility-issues",title:"Known compatibility issues with Android apps",description:"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/compatibility-issues.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/compatibility-issues",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/compatibility-issues",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/compatibility-issues.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Known compatibility issues with Android apps",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Moving CA certificate to System store on rooted devices",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/https-certificate-for-rooted"},next:{title:"How to use Samsung Pay with AdGuard in South Korea",permalink:"/KnowledgeBase/ko/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea"}},l={},d=[{value:"VPN apps",id:"vpn-apps",level:2},{value:"Private DNS",id:"private-dns",level:2},{value:"Unsupported browsers",id:"unsupported-browsers",level:2},{value:"UC Browsers: UC Browser, UC Browser for x86, UC Mini, UC Browser HD",id:"uc-browsers-uc-browser-uc-browser-for-x86-uc-mini-uc-browser-hd",level:3},{value:"Dolphin Browser: Dolphin Browser, Dolphin Browser Express",id:"dolphin-browser-dolphin-browser-dolphin-browser-express",level:3},{value:"Opera mini: Opera mini, Opera mini with Yandex",id:"opera-mini-opera-mini-opera-mini-with-yandex",level:3},{value:"Puffin Browser: Puffin Browser, Puffin Browser Pro",id:"puffin-browser-puffin-browser-puffin-browser-pro",level:3}],p={toc:d};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,i.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,i.kt)("h2",{id:"vpn-apps"},"VPN apps"),(0,i.kt)("p",null,"Other VPN apps are incompatible with AdGuard running in the Local VPN filtering mode since you cannot have two active VPNs at the same time. To solve this problem we suggest you:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("a",{parentName:"li",href:"https://adguard-vpn.com/welcome.html"},"AdGuard VPN")," \u2014 it has Integrated mode that allows two apps to operate seamlessly"),(0,i.kt)("li",{parentName:"ul"},"use AdGuard in Local HTTP Proxy mode")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"On Android 10 and later, the 'manual' HTTP proxy mode is no longer supported.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"configure your VPN app to to act as an outbound proxy and set up a local outbound proxy using the parameters from the third-party app. To do this, a third-party VPN app must support SOCKS4/SOCKS5 mode. For example, AdGuard can be automatically configured with 'Orbot: Proxy with Tor'.")),(0,i.kt)("h2",{id:"private-dns"},"Private DNS"),(0,i.kt)("p",null,"The Private DNS feature was introduced in Android Pie. Before version Q, Private DNS didn't break AdGuard DNS filtering logic and the DNS forwarding through AdGuard worked normally. But starting from version Q, the presence of Private DNS forces apps to redirect traffic through the system resolver instead of AdGuard. See Android ",(0,i.kt)("a",{parentName:"p",href:"https://android-developers.googleblog.com/2018/04/dns-over-tls-support-in-android-p.html"},"devs blog")," for more details."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To solve the problem with Private DNS, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"$network")," rule")),(0,i.kt)("p",null,"Some device manufacturers keep Private DNS settings hidden and set 'Automatic' mode as a default one. Thus, disabling Private DNS is impossible but we can make the system think that the upstream is not valid by blocking it with a ",(0,i.kt)("inlineCode",{parentName:"p"},"$network")," rule. For instance, if the system uses Google DNS by default, we can add rules ",(0,i.kt)("inlineCode",{parentName:"p"},"|8.8.4.4^$network")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"|8.8.8.8^$network")," to block Google DNS."),(0,i.kt)("h2",{id:"unsupported-browsers"},"Unsupported browsers"),(0,i.kt)("h3",{id:"uc-browsers-uc-browser-uc-browser-for-x86-uc-mini-uc-browser-hd"},"UC Browsers: UC Browser, UC Browser for x86, UC Mini, UC Browser HD"),(0,i.kt)("p",null,"To be able to filter HTTPS traffic, AdGuard requires the user to add a certificate to the device's trusted user certificates. Unfortunately, UC-family browsers don't trust user certificates, so AdGuard cannot perform HTTPS filtering there."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To solve this problem, move the certificate to the system certificate store")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Requires root access.")),(0,i.kt)("h3",{id:"dolphin-browser-dolphin-browser-dolphin-browser-express"},"Dolphin Browser: Dolphin Browser, Dolphin Browser Express"),(0,i.kt)("p",null,"AdGuard cannot filter its traffic when operating in ",(0,i.kt)("strong",{parentName:"p"},"Manual proxy mode")," because this browser ignores system proxy settings."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("strong",{parentName:"li"},"Local VPN")," filtering mode to solve this problem")),(0,i.kt)("h3",{id:"opera-mini-opera-mini-opera-mini-with-yandex"},"Opera mini: Opera mini, Opera mini with Yandex"),(0,i.kt)("p",null,"Opera mini drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is no solution at this moment")),(0,i.kt)("h3",{id:"puffin-browser-puffin-browser-puffin-browser-pro"},"Puffin Browser: Puffin Browser, Puffin Browser Pro"),(0,i.kt)("p",null,"Puffin Browser drives traffic through a compression proxy by default and AdGuard is not able to decompress and filter it at the same time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is no solution at this moment")))}u.isMDXComponent=!0}}]);