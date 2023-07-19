"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2349],{4137:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>m});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),u=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},d=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=t,f=c["".concat(i,".").concat(m)]||c[m]||p[m]||l;return r?n.createElement(f,s(s({ref:a},d),{},{components:r})):n.createElement(f,s({ref:a},d))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,s=new Array(l);s[0]=c;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:t,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9196:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),t=(r(7294),r(4137));const l={title:"Formas plurales",sidebar_position:4},s=void 0,o={unversionedId:"miscellaneous/contribute/translate/plural-forms",id:"miscellaneous/contribute/translate/plural-forms",title:"Formas plurales",description:"Hay muchas diferencias entre los idiomas del mundo. Una de estas diferencias es el uso de formas plurales que pueden causar grandes dificultades cuando se trata de un problema de localizaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/miscellaneous/contribute/translate/plural-forms.md",sourceDirName:"miscellaneous/contribute/translate",slug:"/miscellaneous/contribute/translate/plural-forms",permalink:"/KnowledgeBase/es/miscellaneous/contribute/translate/plural-forms",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/miscellaneous/contribute/translate/plural-forms.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Formas plurales",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Directrices y recomendaciones",permalink:"/KnowledgeBase/es/miscellaneous/contribute/translate/guidelines"},next:{title:"C\xf3mo dar prioridad a las traducciones de archivos Crowdin",permalink:"/KnowledgeBase/es/miscellaneous/contribute/translate/translation-priority"}},i={},u=[{value:"\xbfQu\xe9 son las formas plurales?",id:"plurals",level:2},{value:"\xbfD\xf3nde puedes aprender sobre el n\xfamero de formas plurales?",id:"where-to-learn",level:2},{value:"Plurales en las traducciones de AdGuard",id:"translations",level:2},{value:"1. Frases con claves de cadena que terminan en <code>.singular</code>, <code>.dual</code>, <code>.plural</code>",id:"1type",level:3},{value:"2. Cadenas con sustantivos singulares y plurales separados por comas",id:"2type",level:3},{value:"3. Cadenas que usan el patr\xf3n desarrollado por Crowdin",id:"3type",level:3},{value:"4. Strings con plantillas separadas por el signo de la barra vertical",id:"4type",level:3},{value:"Breve resumen",id:"summury",level:3}],d={toc:u};function p(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Hay muchas diferencias entre los idiomas del mundo. Una de estas diferencias es el uso de formas plurales que pueden causar grandes dificultades cuando se trata de un problema de localizaci\xf3n."),(0,t.kt)("p",null,"Te recomendamos encarecidamente que leas correctamente este art\xedculo para obtener m\xe1s informaci\xf3n sobre las formas plurales y c\xf3mo se utilizan en las traducciones de AdGuard."),(0,t.kt)("h2",{id:"plurals"},"\xbfQu\xe9 son las formas plurales?"),(0,t.kt)("p",null,"Los sustantivos en diferentes idiomas pueden tener varias formas de palabras en plural. Su uso depende del n\xfamero de cosas de las que se hable."),(0,t.kt)("p",null,"For instance, English words have two word forms when speaking about something in the singular, like ",(0,t.kt)("em",{parentName:"p"},"'one star'"),", and in the plural \u2014 ",(0,t.kt)("em",{parentName:"p"},"'two stars'"),". It doesn\u2019t matter if you say five, twenty six or even five hundred thirty two stars \u2014 the ending 's' will remain the same. Pero algunos idiomas pueden contener solo una o varias formas plurales."),(0,t.kt)("p",null,"A diferencia del ingl\xe9s, el idioma polaco tiene tres formas plurales de sustantivos. One of them is used when speaking about something in the singular, another form is used in the plural but with numbers ending in 2-4, excluding 12-14, and the third form \u2014 for words with other numbers in front of them."),(0,t.kt)("p",null,"Let\u2019s take a look at this picture. Aqu\xed puedes ver los grupos de n\xfameros que determinan la forma de una palabra cuando se encuentran frente a ella."),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/polish.png",alt:"Polaco"})),(0,t.kt)("p",null,"Dibujemos un peque\xf1o paralelo entre el ingl\xe9s y el polaco para una mejor comprensi\xf3n:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"  La versi\xf3n en ingl\xe9s:                                                 Los equivalentes polacos:\n\n  1. forma: It takes one hour.                                     1. forma: Zajmuje a godzin\u0119.\n  2. form: It takes two hours.                                    2. forma: Zajmuje a dwie godziny.\n  3. forma: It takes five hours.                                   3. forma: Zajmuje a pi\u0119\u0107 godzin.\n")),(0,t.kt)("p",null,"Ahora est\xe1 claro que el polaco ",(0,t.kt)("em",{parentName:"p"},"'godzin\u0119'")," (hora) tiene tres formas diferentes, mientras que la palabra inglesa cambia su forma con n\xfameros solo dos veces."),(0,t.kt)("p",null,"Adem\xe1s del polaco, hay muchos otros idiomas que tienen tres formas plurales y m\xe1s, como el ruso, el serbio, el eslovaco, el checo, etc. Pero no todos obedecen a la misma regla. Por eso es tan importante saber cu\xe1ntas formas plurales contiene tu idioma y c\xf3mo puedes aplicarlas."),(0,t.kt)("h2",{id:"where-to-learn"},"\xbfD\xf3nde puedes aprender sobre el n\xfamero de formas plurales?"),(0,t.kt)("p",null,"Cuando se enfrenta a una traducci\xf3n que requiere el uso de plurales, es posible que no puedas darte cuenta de inmediato de cu\xe1ntas formas de palabras contiene tu idioma."),(0,t.kt)("p",null,"Aqu\xed hay algunas fuentes de informaci\xf3n que puedes utilizar."),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"La Gu\xeda de localizaci\xf3n")," contiene una amplia lista de idiomas. El n\xfamero de formas plurales para diferentes idiomas se muestra de esta manera: 'nplurals=2', 'nplurals=4' y as\xed sucesivamente. El n\xfamero despu\xe9s del signo igual '=' significa el n\xfamero de formas plurales del idioma respectivo."),(0,t.kt)("p",null,"Adem\xe1s, puedes obtener informaci\xf3n sobre formas plurales en el ",(0,t.kt)("a",{parentName:"p",href:"http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html#rules"},"Repositorio de datos de configuraci\xf3n regional com\xfan")," (CLDR) de Unicode. Las reglas CLDR Plural indican una forma de palabra adicional para los n\xfameros decimales (1,5; 2,3; 100,1\u2026), pero no las usamos en las traducciones de AdGuard."),(0,t.kt)("h2",{id:"translations"},"Plurales en las traducciones de AdGuard"),(0,t.kt)("p",null,"En primer lugar, queremos mencionar que no todas las traducciones de AdGuard requieren el uso de formas plurales."),(0,t.kt)("p",null,"Actualmente, tenemos 4 tipos de cadenas en Crowdin que implican el uso de plurales."),(0,t.kt)("p",null,"Ve\xe1moslos m\xe1s de cerca."),(0,t.kt)("h3",{id:"1type"},"1. Frases con claves de cadena que terminan en ",(0,t.kt)("inlineCode",{parentName:"h3"},".singular"),", ",(0,t.kt)("inlineCode",{parentName:"h3"},".dual"),", ",(0,t.kt)("inlineCode",{parentName:"h3"},".plural")),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/dual_it.png",alt:"crowdin *border"})),(0,t.kt)("p",null,"La mayor\xeda de ellos est\xe1n representados en el proyecto ",(0,t.kt)("inlineCode",{parentName:"p"},"AdGuard para Windows")," y constan de solo una o dos palabras:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"d\xedas;")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"extensiones;")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"horas"))),(0,t.kt)("p",null,'Presta atenci\xf3n a las claves de cadena de dichas frases y al campo "Contexto", donde puedes ver algunas notas importantes sobre los plurales. Las claves de cadena pueden contener ',(0,t.kt)("inlineCode",{parentName:"p"},"Singular"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"Dual"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"Plural")," palabras (ej.",(0,t.kt)("inlineCode",{parentName:"p"},"FormatDayDeclensionDual"),"). En este caso, debes dejar la forma plural adecuada tal como se especifica en la clave."),(0,t.kt)("h3",{id:"2type"},"2. Cadenas con sustantivos singulares y plurales separados por comas"),(0,t.kt)("p",null,"Este tipo de cadenas se concentra principalmente en el proyecto ",(0,t.kt)("inlineCode",{parentName:"p"},"AdGuard para Android"),"."),(0,t.kt)("p",null,"Mira el ejemplo:"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/android_fr.png",alt:"crowdin *border"})),(0,t.kt)("p",null,"Si hay 3 formas plurales de sustantivos en tu idioma (como en polaco), escribe todas las formas plurales separadas por comas."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"hora, horas - godzin\u0119, godziny, godzin")),(0,t.kt)("p",null,"En caso de que un sustantivo tenga solo 2 formas, no hay necesidad de escribir la misma forma dos veces (\xa1normalmente",(0,t.kt)("em",{parentName:"p"},"solo para este tipo de strings con plurales!"),"). Sin embargo, no ser\xe1 un error si repites la forma dos veces."),(0,t.kt)("h3",{id:"3type"},"3. Cadenas que usan el patr\xf3n desarrollado por Crowdin"),(0,t.kt)("p",null,"Este es el esquema m\xe1s f\xe1cil de usar para traducir strings con plurales."),(0,t.kt)("p",null,"Crowdin sugiere a los usuarios que traduzcan cierta cantidad de frases con diferentes formas plurales."),(0,t.kt)("p",null,"Si tu idioma proporciona solo una forma plural, ver\xe1s solo una frase para traducir. Si hay tres o m\xe1s formas, Crowdin te proporcionar\xe1 el string dividida en otras dos o tres cadenas para traducir."),(0,t.kt)("p",null,"Por ejemplo:"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/crowdin_scheme.png",alt:"crowdin *border"})),(0,t.kt)("p",null,'Est\xe1 atento al traducir estas strings y aprobarlas. Si no tienes idea de lo que significa el campo "Other", simplemente pega el mismo formulario que est\xe1 en el campo "Many". Las traducciones de los campos "Many" y "Other" pueden ser las mismas.'),(0,t.kt)("h3",{id:"4type"},"4. Strings con plantillas separadas por el signo de la barra vertical"),(0,t.kt)("p",null,"Este es el tipo m\xe1s complicado de strings de AdGuard que se usa principalmente en el proyecto ",(0,t.kt)("inlineCode",{parentName:"p"},"AdGuard Websites"),"."),(0,t.kt)("p",null,"Pay close attention to a vertical bar sign between the sentences and ",(0,t.kt)("strong",{parentName:"p"},"%count%")," placeholders in original phrases \u2014 this will help you identify phrases where translations require the use of plural forms."),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/en/plurals/plurals_site.png",alt:"crowdin *border"})),(0,t.kt)("p",null,"Ahora, imaginemos: se enfrentas a una string de este tipo: ",(0,t.kt)("inlineCode",{parentName:"p"},"Licencia est\xe1ndar para %count% computadora | Licencia est\xe1ndar para %count% computadores"),"."),(0,t.kt)("p",null,"\xbfQu\xe9 debes saber para traducirlo correctamente?"),(0,t.kt)("p",null,"Llamemos a las oraciones que est\xe1n divididas por un signo de barra vertical ",(0,t.kt)("strong",{parentName:"p"},'"plantillas"'),", porque en realidad sirven como plantillas para frases con n\xfameros diferentes."),(0,t.kt)("p",null,"Volviendo al ejemplo, como el idioma ingl\xe9s incluye solo dos formas, deber\xeda haber dos plantillas respectivamente:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"Licencia est\xe1ndar para *%count%* computadora | Licencia est\xe1ndar para *%count%* computadoras")),(0,t.kt)("p",null,"where ",(0,t.kt)("strong",{parentName:"p"},"template 1")," is Standard license for ",(0,t.kt)("em",{parentName:"p"},"%count%")," computer,"),(0,t.kt)("p",null,"and ",(0,t.kt)("strong",{parentName:"p"},"template 2")," is Standard license for ",(0,t.kt)("em",{parentName:"p"},"%count%")," computers"),(0,t.kt)("p",null,"Otra cosa importante a la que debes prestar atenci\xf3n son los placeholders ",(0,t.kt)("strong",{parentName:"p"},"%count%")," que, como de costumbre, se colocan antes de las palabras que definen. En lugar de ",(0,t.kt)("strong",{parentName:"p"},"%count%")," aqu\xed aparecer\xe1n diferentes n\xfameros dependiendo de las plantillas que se elijan."),(0,t.kt)("p",null,"En una situaci\xf3n con otro idioma que tiene, digamos, tres formas plurales, debe haber tres plantillas con dos barras verticales entre ellas."),(0,t.kt)("p",null,"Por ejemplo, cuando traducimos la frase mencionada anteriormente al eslovaco, que de acuerdo con la regla del ",(0,t.kt)("a",{parentName:"p",href:"http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html"},"Gu\xeda de localizaci\xf3n")," tiene tres formas de palabras, la traducci\xf3n correcta se ver\xe1 as\xed:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"**\u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010d | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010de | \u0160tandartn\xe1 licencia pre *%count%* po\u010d\xedta\u010dov**")),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/slovak.png",alt:"Eslovaco"})),(0,t.kt)("p",null,"En este caso, vemos tres plantillas que contienen tres formas de la palabra ",(0,t.kt)("em",{parentName:"p"},'"po\u010d\xedta\u010d"')," (computadora) en eslovaco."),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"Si ignoramos una de las formas y usamos solo dos plantillas para eslovaco en lugar de tres, el sistema no podr\xe1 tomar una plantilla adecuada para ciertos n\xfameros")," y, como resultado, tendremos errores gramaticales en las oraciones, como en ingl\xe9s: ",(0,t.kt)("em",{parentName:"p"},"Standard license for 5 computer"),"."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"Always use as many forms as there are in your language, even when the word itself has fewer word forms."))),(0,t.kt)("p",null,"Por ejemplo, la palabra serbia ",(0,t.kt)("em",{parentName:"p"},"'ra\u010dunar'")," (computadora) tiene solo dos formas. Pero hay 3 formas plurales en serbio."),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/Kb/ad_blocker/miscellaneous/adguard_translations/serbian.png",alt:"Serbio"})),(0,t.kt)("p",null,"Por lo tanto, la traducci\xf3n del ingl\xe9s al serbio deber\xeda ser:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"**Standardna licenca za *%count%* ra\u010dunar | Standardna licenca za *%count%* ra\u010dunara | Standardna licenca za *%count%* ra\u010dunara**")),(0,t.kt)("p",null,"Aunque es obvio que las dos \xfaltimas plantillas no tienen diferencias, es muy importante mantener la regla: ",(0,t.kt)("strong",{parentName:"p"},"El n\xfamero de plantillas debe reflejar el n\xfamero de formas plurales del idioma respectivo!"),"(t\xedpicamente para este tipo de cadenas con plurales)."),(0,t.kt)("h3",{id:"summury"},"Breve resumen"),(0,t.kt)("p",null,"Al traducir proyectos de AdGuard, presta mucha atenci\xf3n a las frases que requieren el uso de formas plurales."),(0,t.kt)("p",null,"Mientras que los tres primeros tipos de strings de este tipo son m\xe1s o menos f\xe1ciles de ejecutar, el cuarto tipo exige m\xe1s vigilancia."),(0,t.kt)("p",null,"Y de nuevo: si encuentras una frase original con dos elementos importantes: ",(0,t.kt)("strong",{parentName:"p"},", el signo de barra vertical")," y ",(0,t.kt)("strong",{parentName:"p"},"%count%")," marcadores de posici\xf3n, haz lo siguiente:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Consulta la regla del plural de la lengua a la que traduces;")),(0,t.kt)("p",null,"The number of your templates should be consistent with the number of plural forms your language includes, even in cases some words have fewer forms themselves. Two plural forms \u2014 two templates in translations; five plural forms \u2014 five templates, etc."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"No olvides usar un signo de barra vertical entre las plantillas tal como se representa en los strings originales;")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"No traduzcas, rellenes ni elimines los placeholders ",(0,t.kt)("strong",{parentName:"p"},"%count%")," ."))),(0,t.kt)("p",null,"By following these simple rules you will help AdGuard developers avoid a lot of unnecessary complications during the localization process."))}p.isMDXComponent=!0}}]);