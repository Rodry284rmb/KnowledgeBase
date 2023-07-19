"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7082],{4137:(t,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>k});var r=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,r,a=function(t,e){if(null==t)return{};var o,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var d=r.createContext({}),p=function(t){var e=r.useContext(d),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},s=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var o=t.components,a=t.mdxType,n=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(o),k=a,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||n;return o?r.createElement(c,i(i({ref:e},s),{},{components:o})):r.createElement(c,i({ref:e},s))}));function k(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6184:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=o(7462),a=(o(7294),o(4137));const n={title:"P\u0159esunut\xed certifik\xe1tu CA do syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b na za\u0159\xedzen\xedch s root p\u0159\xedstupem",sidebar_position:14},i=void 0,l={unversionedId:"adguard-for-android/solving-problems/https-certificate-for-rooted",id:"adguard-for-android/solving-problems/https-certificate-for-rooted",title:"P\u0159esunut\xed certifik\xe1tu CA do syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b na za\u0159\xedzen\xedch s root p\u0159\xedstupem",description:"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, st\xe1hn\u011bte si aplikaci AdGuard",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/https-certificate-for-rooted.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/https-certificate-for-rooted",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/https-certificate-for-rooted",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/https-certificate-for-rooted.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"P\u0159esunut\xed certifik\xe1tu CA do syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b na za\u0159\xedzen\xedch s root p\u0159\xedstupem",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Instalace certifik\xe1tu do Zabezpe\u010den\xe9 slo\u017eky",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/secure-folder"},next:{title:"Zn\xe1m\xe9 probl\xe9my kompatibility s aplikacemi pro Android",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/compatibility-issues"}},d={},p=[{value:"Jak nainstalovat certifik\xe1t AdGuardu do syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b (na za\u0159\xedzen\xed s root p\u0159\xedstupem)",id:"jak-nainstalovat-certifik\xe1t-adguardu-do-syst\xe9mov\xe9ho-\xfalo\u017ei\u0161t\u011b-na-za\u0159\xedzen\xed-s-root-p\u0159\xedstupem",level:2},{value:"Prohl\xed\u017ee\u010d Bromite",id:"prohl\xed\u017ee\u010d-bromite",level:3},{value:"Chrome a prohl\xed\u017ee\u010de zalo\u017een\xe9 na Chromium",id:"chrome-a-prohl\xed\u017ee\u010de-zalo\u017een\xe9-na-chromium",level:3}],s={toc:p};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro Android, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li zjistit, jak funguje, ",(0,a.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true"},"st\xe1hn\u011bte si aplikaci AdGuard"))),(0,a.kt)("p",null,"AdGuard pro Android nab\xedz\xed funkci nazvanou ",(0,a.kt)("a",{parentName:"p",href:"../../overview#https-filtering"},"HTTPS filtrov\xe1n\xed"),", kter\xe1 umo\u017e\u0148uje ",(0,a.kt)("a",{parentName:"p",href:"/general/https-filtering/what-is-https-filtering"},"filtrovat \u0161ifrovan\xfd provoz HTTPS")," v za\u0159\xedzen\xed se syst\xe9mem Android. Tato funkce vy\u017eaduje p\u0159id\xe1n\xed certifik\xe1tu CA AdGuardu do seznamu d\u016fv\u011bryhodn\xfdch certifik\xe1t\u016f."),(0,a.kt)("p",null,"V za\u0159\xedzen\xedch bez p\u0159\xedstupu root lze certifik\xe1ty CA nainstalovat do ",(0,a.kt)("strong",{parentName:"p"},"U\u017eivatelsk\xe9ho \xfalo\u017ei\u0161t\u011b"),". Pouze omezen\xe1 podmno\u017eina aplikac\xed (v\u011bt\u0161inou prohl\xed\u017ee\u010de) d\u016fv\u011b\u0159uje certifik\xe1t\u016fm CA nainstalovan\xfdm do u\u017eivatelsk\xe9ho \xfalo\u017ei\u0161t\u011b, co\u017e znamen\xe1, \u017ee filtrov\xe1n\xed HTTPS bude fungovat pouze pro tyto aplikace."),(0,a.kt)("p",null,"Na za\u0159\xedzen\xedch s root p\u0159\xedstupem v\u0161ak m\u016f\u017eete nainstalovat certifik\xe1t do ",(0,a.kt)("strong",{parentName:"p"},"Syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b")," a povolit HTTPS filtrov\xe1n\xed provozu jin\xfdch aplikac\xed."),(0,a.kt)("p",null,"Zde je n\xe1vod, jak to ud\u011blat:"),(0,a.kt)("h2",{id:"jak-nainstalovat-certifik\xe1t-adguardu-do-syst\xe9mov\xe9ho-\xfalo\u017ei\u0161t\u011b-na-za\u0159\xedzen\xed-s-root-p\u0159\xedstupem"},"Jak nainstalovat certifik\xe1t AdGuardu do syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b (na za\u0159\xedzen\xed s root p\u0159\xedstupem)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Povolte filtrov\xe1n\xed HTTPS v AdGuardu pro Android a ulo\u017ete certifik\xe1t AdGuardu do u\u017eivatelsk\xe9ho \xfalo\u017ei\u0161t\u011b (v p\u0159\xedpad\u011b pot\u0159eby pou\u017eijte ",(0,a.kt)("a",{parentName:"li",href:"../../overview#https-filtering"},"tento pokyn"),")")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Od verze 4.1 AdGuard pro Android si u\u017eivatel\xe9 mohou do u\u017eivatelsk\xe9ho \xfalo\u017ei\u0161t\u011b nainstalovat dva certifik\xe1ty, kter\xe9 jim pomohou filtrovat webov\xe9 str\xe1nky v prohl\xed\u017ee\u010di Chrome.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Jd\u011bte do ",(0,a.kt)("strong",{parentName:"li"},"aplikace AdGuard")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Menu")," (\u2261) \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Nastaven\xed")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"S\xed\u0165")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"HTTPS filtrov\xe1n\xed")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Bezpe\u010dnostn\xed certifik\xe1t"),' \u2192 klepn\u011bte na "',(0,a.kt)("strong",{parentName:"li"},"Kop\xedrovat do syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b"),'"')),(0,a.kt)("p",null,"To sta\u010d\xed pro star\u0161\xed verze Magisk."),(0,a.kt)("p",null,"Pokud v\u0161ak m\xe1te nov\u011bj\u0161\xed verzi, zobraz\xed se tato zpr\xe1va:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Nelze zkop\xedrovat certifik\xe1t do syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b. Zkuste pou\u017e\xedt modul "AdGuard Certificate".')),(0,a.kt)("p",null,"V takov\xe9m p\u0159\xedpad\u011b p\u0159ejd\u011bte k n\xe1sleduj\xedc\xedm krok\u016fm:"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"P\u0159ejd\u011bte do ",(0,a.kt)("strong",{parentName:"li"},"Magisk")," \u2192 ",(0,a.kt)("strong",{parentName:"li"},"Nastaven\xed"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-1.png",alt:"Otev\u0159\xedt nastaven\xed Magisk *mobile"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Zapn\u011bte ",(0,a.kt)("strong",{parentName:"li"},"Zygisk"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-2.png",alt:"Zapnout Zygisk *mobile"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-3.png",alt:"N\xe1vrat na hlavn\xed obrazovku Magisk *mobile"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"St\xe1hn\u011bte soubor ",(0,a.kt)("inlineCode",{parentName:"p"},".zip"),' (modulu "AdGuard Certificate") z nejnov\u011bj\u0161\xed vyd\xe1n\xed na ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/adguardcert/releases/latest/"},"na GitHubu"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"P\u0159ejd\u011bte do ",(0,a.kt)("strong",{parentName:"p"},"Magisk")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"Moduly")," \u2192 ",(0,a.kt)("strong",{parentName:"p"},"Instalovat z \xfalo\u017ei\u0161t\u011b")," a vyberte sta\u017een\xfd soubor ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-4.png",alt:"Otev\u0159\xedt moduly Magisk *mobile"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-5.png",alt:"Instalovat z \xfalo\u017ei\u0161t\u011b *mobile"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-6.png",alt:"Vybrat modul AdGuard Certificate *mobile"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Restartujte")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/https-certificate-for-rooted/magisk-module-7.png",alt:"Restartovat za\u0159\xedzen\xed *mobile"})),(0,a.kt)("p",null,'Pokud vyjde nov\xe1 verze modulu "AdGuard Certificate", zopakujte kroky 3-7 a modul aktualizujte.'),(0,a.kt)("p",null,"Modul vykon\xe1v\xe1 svou pr\xe1ci b\u011bhem zav\xe1d\u011bn\xed syst\xe9mu. Pokud se v\xe1\u0161 certifik\xe1t AdGuardu zm\u011bn\xed, budete muset za\u0159\xedzen\xed restartovat, aby se nov\xfd certifik\xe1t zkop\xedroval do syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b."),(0,a.kt)("h3",{id:"prohl\xed\u017ee\u010d-bromite"},"Prohl\xed\u017ee\u010d Bromite"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In order for the ",(0,a.kt)("strong",{parentName:"p"},"Bromite"),' browser to work properly, in addition to the steps mentioned above, you need to set "Allow user certificates" in ',(0,a.kt)("inlineCode",{parentName:"p"},"chrome://flags"),' to "Enabled" state.')),(0,a.kt)("h3",{id:"chrome-a-prohl\xed\u017ee\u010de-zalo\u017een\xe9-na-chromium"},"Chrome a prohl\xed\u017ee\u010de zalo\u017een\xe9 na Chromium"),(0,a.kt)("p",null,'Zkr\xe1tka a dob\u0159e, pokud pou\u017eijete modul "AdGuard Certificate", nebudete m\xedt s filtrov\xe1n\xedm HTTPS v prohl\xed\u017ee\u010d\xedch Chrome a Chromium na za\u0159\xedzen\xedch s p\u0159\xedstupem root \u017e\xe1dn\xe9 probl\xe9my.'),(0,a.kt)("p",null,"Zde je trochu podrobn\u011bj\u0161\xed vysv\u011btlen\xed: Chrome (a n\xe1sledn\u011b mnoho dal\u0161\xedch prohl\xed\u017ee\u010d\u016f zalo\u017een\xfdch na Chromium) za\u010dal ned\xe1vno vy\u017eadovat protokoly CT pro certifik\xe1ty CA nalezen\xe9 v ",(0,a.kt)("strong",{parentName:"p"},"Syst\xe9mov\xe9m \xfalo\u017ei\u0161ti"),'. Modul "AdGuard Certificate" zkop\xedruje certifik\xe1t CA AdGuardu z ',(0,a.kt)("strong",{parentName:"p"},"U\u017eivatelsk\xe9ho \xfalo\u017ei\u0161t\u011b")," do ",(0,a.kt)("strong",{parentName:"p"},"Syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b"),". Obsahuje tak\xe9 modul Zygisk, kter\xfd vr\xe1t\xed v\u0161echny \xfapravy proveden\xe9 p\u0159es Magisk pro ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/adguardcert/blob/master/zygisk_module/jni/browsers.inc"},"n\u011bkter\xe9 prohl\xed\u017ee\u010de"),". Prohl\xed\u017ee\u010de tak najdou certifik\xe1t AdGuardu pouze v U\u017eivatelsk\xe9m \xfalo\u017ei\u0161ti a nebudou si st\u011b\u017eovat na chyb\u011bj\xedc\xed protokol CT, zat\xedmco ostatn\xed aplikace budou nad\xe1le pou\u017e\xedvat stejn\xfd certifik\xe1t ze Syst\xe9mov\xe9ho \xfalo\u017ei\u0161t\u011b."))}u.isMDXComponent=!0}}]);