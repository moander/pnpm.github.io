"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3157],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1163:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>c});var r=n(5900),i=n(4750),l=(n(9496),n(9613)),a=["components"],o={id:"audit",title:"pnpm audit"},s=void 0,p={unversionedId:"cli/audit",id:"cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Ajout\xe9 dans la version v4.3.0",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/fr/next/cli/audit",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/fr/next/cli/install-test"},next:{title:"pnpm list",permalink:"/fr/next/cli/list"}},u=[{value:"Options",id:"options",children:[{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",children:[],level:3},{value:"--fix",id:"--fix",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",children:[],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ajout\xe9 dans la version v4.3.0"),(0,l.kt)("p",null,"V\xe9rifie les probl\xe8mes de s\xe9curit\xe9 connus avec les paquets install\xe9s."),(0,l.kt)("p",null,"Si des probl\xe8mes de s\xe9curit\xe9 sont d\xe9tect\xe9s, essayez de mettre \xe0 jour vos d\xe9pendances via ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Si une simple mise \xe0 jour ne corrige pas tous les probl\xe8mes, utilisez ",(0,l.kt)("a",{parentName:"p",href:"/fr/next/package_json#pnpmoverrides"},"outrepasse")," pour forcer les versions qui ne sont pas vuln\xe9rables. Par exemple, si ",(0,l.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," est vuln\xe9rable, utilisez ces substitutions pour forcer ",(0,l.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,l.kt)("p",null,"Ou autrement, ex\xe9cutez ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"low"),", ",(0,l.kt)("strong",{parentName:"li"},"moderate"),", ",(0,l.kt)("strong",{parentName:"li"},"high"),", ",(0,l.kt)("strong",{parentName:"li"},"critical")),(0,l.kt)("li",{parentName:"ul"},"Par d\xe9faut : ",(0,l.kt)("strong",{parentName:"li"},"low"))),(0,l.kt)("p",null,"N'imprimez que les avis dont la gravit\xe9 est sup\xe9rieure ou \xe9gale \xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,l.kt)("h3",{id:"--fix"},"--fix"),(0,l.kt)("p",null,"Ajout\xe9 dans la version: v2.11.0"),(0,l.kt)("p",null,"Ajouter des remplacements au fichier ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," afin de forcer les versions non vuln\xe9rables des d\xe9pendances."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Rapport d'audit en sortie au format JSON."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Auditer uniquement les d\xe9pendances de dev."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Auditez uniquement les d\xe9pendances de production."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Ne pas auditer ",(0,l.kt)("inlineCode",{parentName:"p"},"facultatifD\xe9pendances"),"."),(0,l.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,l.kt)("p",null,"Ajout\xe9 dans la version: v2.7.1"),(0,l.kt)("p",null,"Si le registre r\xe9pond avec un code d'\xe9tat non-200, le processus doit sortir avec 0. Le processus n'\xe9chouera donc que si le registre r\xe9pond effectivement avec succ\xe8s aux vuln\xe9rabilit\xe9s trouv\xe9es."))}c.isMDXComponent=!0}}]);