"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6458],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return r?o.createElement(f,n(n({ref:t},p),{},{components:r})):o.createElement(f,n({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var d=2;d<i;d++)n[d]=r[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=r(7462),a=(r(7294),r(4137));const i={title:"Moving CA certificate to System store on rooted devices",sidebar_position:14},n=void 0,s={unversionedId:"adguard-for-android/solving-problems/https-certificate-for-rooted",id:"adguard-for-android/solving-problems/https-certificate-for-rooted",title:"Moving CA certificate to System store on rooted devices",description:"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, download the AdGuard app",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/https-certificate-for-rooted.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/https-certificate-for-rooted",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/https-certificate-for-rooted",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/https-certificate-for-rooted.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Moving CA certificate to System store on rooted devices",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Certificate installation in a Secure folder",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/secure-folder"},next:{title:"Known compatibility issues with Android apps",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/compatibility-issues"}},l={},d=[{value:"How to install AdGuard&#39;s Certificate to System store (on a rooted device)",id:"how-to-install-adguards-certificate-to-system-store-on-a-rooted-device",level:2},{value:"Bromite browser",id:"bromite-browser",level:3},{value:"Chrome and Chromium-based browsers",id:"chrome-and-chromium-based-browsers",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article covers AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. To see how it works, ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"download the AdGuard app"))),(0,a.kt)("p",null,"AdGuard for Android provides a feature called ",(0,a.kt)("a",{parentName:"p",href:"../../overview#https-filtering"},"HTTPS filtering")," that makes it possible to ",(0,a.kt)("a",{parentName:"p",href:"/general/https-filtering/what-is-https-filtering"},"filter encrypted HTTPS traffic")," on your Android device. This feature requires adding the AdGuard's CA certificate to the list of trusted certificates."),(0,a.kt)("p",null,"On non-rooted devices CA certificates can be installed to the ",(0,a.kt)("strong",{parentName:"p"},"User store"),". Only a limited subset of apps (mostly browsers) trust CA certificates installed to the User store, meaning HTTPS filtering will work only for such apps."),(0,a.kt)("p",null,"However, on rooted devices, you can install the certificate to the ",(0,a.kt)("strong",{parentName:"p"},"System store")," and allow HTTPS filtering of other apps' traffic too."),(0,a.kt)("p",null,"Here's how to do that."),(0,a.kt)("h2",{id:"how-to-install-adguards-certificate-to-system-store-on-a-rooted-device"},"How to install AdGuard's Certificate to System store (on a rooted device)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable HTTPS filtering in AdGuard for Android and save AdGuard's certificate to the User store (use ",(0,a.kt)("a",{parentName:"li",href:"../../overview#https-filtering"},"this instruction")," if needed)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"From AdGuard for Android v4.1 and after users can install two certificates to the User store, which will help to filter websites in Chrome browser.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"AdGuard app")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Menu")," (\u2261) \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Settings")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Network")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"HTTPS filtering")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Security certificate")," \u2192 tap \u201c",(0,a.kt)("strong",{parentName:"li"},"Copy to the system store"),"\u201d")),(0,a.kt)("p",null,"That is enough for older versions of Magisk."),(0,a.kt)("p",null,"However, if you have a newer version, you will get this message:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unable to copy the certificate to the system store. Try using \u201cAdGuard Certificate\u201d module.")),(0,a.kt)("p",null,"In that case, proceed to steps below:"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Magisk")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Settings"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-1.png",alt:"Open Magisk settings *mobile"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Enable ",(0,a.kt)("strong",{parentName:"li"},"Zygisk"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-2.png",alt:"Enable Zygisk *mobile"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-3.png",alt:"Go back to Magisk main screen *mobile"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," file (of \u201cAdGuard Certificate\u201d module) from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/adguardcert/releases/latest/"},"latest release on GitHub"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Magisk")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"Modules")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"Install from storage")," and select the downloaded ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," file"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png",alt:"Open Magisk modules *mobile"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png",alt:"Install from storage *mobile"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png",alt:"Select AdGuard certificate module *mobile"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Reboot")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png",alt:"Reboot the device *mobile"})),(0,a.kt)("p",null,'If a new version of "AdGuard certificate" module comes out, repeat steps 3-7 to update the module.'),(0,a.kt)("p",null,"The module does its work during the system boot. If your AdGuard certificate changes, you'll have to reboot the device for the new certificate to be copied to the system store."),(0,a.kt)("h3",{id:"bromite-browser"},"Bromite browser"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In order for the ",(0,a.kt)("strong",{parentName:"p"},"Bromite"),' browser to work properly, in addition to the steps mentioned above, you need to set "Allow user certificates" in ',(0,a.kt)("inlineCode",{parentName:"p"},"chrome://flags"),' to "Enabled" state.')),(0,a.kt)("h3",{id:"chrome-and-chromium-based-browsers"},"Chrome and Chromium-based browsers"),(0,a.kt)("p",null,'Long story short, you will have no problems with HTTPS filtering in Chrome and Chromium-based browsers on rooted devices, if you use "AdGuard Certificate" module.'),(0,a.kt)("p",null,"Here is a bit more detailed explanation: Chrome (and subsequently many other Chromium-based browsers) has recently started requiring CT logs for CA certs found in the ",(0,a.kt)("strong",{parentName:"p"},"System store"),'. "AdGuard Certificate" module copies AdGuard\'s CA certificate from the ',(0,a.kt)("strong",{parentName:"p"},"User store")," to the ",(0,a.kt)("strong",{parentName:"p"},"System store"),". It also contains a Zygisk module that reverts any modifications done by Magisk for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/adguardcert/blob/master/zygisk_module/jni/browsers.inc"},"certain browsers"),". This way the browsers only find AdGuard\u2019s certificate in the User store and don\u2019t complain about the missing CT log, while other apps continue to use the same certificate from the System store."))}c.isMDXComponent=!0}}]);