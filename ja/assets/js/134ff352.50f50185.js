"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2132],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4274:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const o={title:"Manual certificate installation",sidebar_position:1},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/manual-certificate-installation",id:"adguard-for-mac/solving-problems/manual-certificate-installation",title:"Manual certificate installation",description:"This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/manual-certificate-installation.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/manual-certificate-installation",permalink:"/KnowledgeBase/ja/adguard-for-mac/solving-problems/manual-certificate-installation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/manual-certificate-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Manual certificate installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb/\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/KnowledgeBase/ja/adguard-for-mac/installation"},next:{title:"Protection cannot be enabled",permalink:"/KnowledgeBase/ja/adguard-for-mac/solving-problems/protection-cannot-be-enabled"}},c={},s=[],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,n.kt)("p",null,"AdGuard for Mac needs to install the root certificate into certificate storage to be able to ",(0,n.kt)("a",{parentName:"p",href:"/general/https-filtering/what-is-https-filtering"},"filter HTTPS traffic"),". This action is performed automatically in most cases as you run the app for the first time, but users of Gecko-based browsers (Firefox, Waterfox etc.) who have a master password set up for their browser may be required to take additional steps (because these browsers use their own certificate storage instead of the system one). They need to either enter the master password when prompted (to grant AdGuard access to the certificate storage) or manually install the certificate."),(0,n.kt)("p",null,"To manually install the certificate into Firefox-like browser:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("em",{parentName:"p"},"Preferences"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("em",{parentName:"p"},"Privacy & Security")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Certificates"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("em",{parentName:"p"},"View Certificates"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("em",{parentName:"p"},"Authorities")," tab and click the ",(0,n.kt)("em",{parentName:"p"},"Import...")," button")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select file ",(0,n.kt)("inlineCode",{parentName:"p"},"/Library/Application Support/AdGuard Software/com.adguard.mac.adguard/AdguardCore/Adguard Personal CA.cer")," or just download it from ",(0,n.kt)("a",{parentName:"p",href:"http://local.adguard.org/cert"},"http://local.adguard.org/cert")," using a Chromium-based browser (e.g Google Chrome or new Edge) and with a HTTPS-filtering running in AdGuard"))),(0,n.kt)("p",null,"Exact actions required for different Gecko-based browsers may vary, but the general sequence and the path to ",(0,n.kt)("inlineCode",{parentName:"p"},"AdGuard Personal CA.cer")," file will be the same."),(0,n.kt)("p",null,"P.S.: For ",(0,n.kt)("a",{parentName:"p",href:"https://setapp.com/apps/adguard"},"Setapp application version")," the file path is the following: ",(0,n.kt)("inlineCode",{parentName:"p"},"/Library/Application Support/com.adguard.mac.adguard-setapp/AdguardCore/Adguard Personal CA.cer")))}d.isMDXComponent=!0}}]);