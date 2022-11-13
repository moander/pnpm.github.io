"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3299],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,v=u["".concat(a,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var r=n(2962),l=n(2742),i=(n(9496),n(9613)),o=["components"],p={id:"list",title:"pnpm list"},a=void 0,c={unversionedId:"cli/list",id:"version-7.x/cli/list",title:"pnpm list",description:"\u5225\u540d:ls",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/ja/cli/list",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"list",title:"pnpm list"},sidebar:"version-7.x/docs",previous:{title:"pnpm audit",permalink:"/ja/cli/audit"},next:{title:"pnpm outdated",permalink:"/ja/cli/outdated"}},d={},s=[{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--depth &lt;number&gt;",id:"--depth-number",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5225\u540d:",(0,i.kt)("inlineCode",{parentName:"p"},"ls")),(0,i.kt)("p",null,"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u3059\u3079\u3066\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u4f9d\u5b58\u95a2\u4fc2\u3092\u3001\u30c4\u30ea\u30fc\u69cb\u9020\u3067\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u4f4d\u7f6e\u5f15\u6570\u306b ",(0,i.kt)("inlineCode",{parentName:"p"},"name-pattern@version-range")," \u3068\u3044\u3046\u5f62\u5f0f\u306e\u8b58\u5225\u5b50\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u51fa\u529b\u3059\u308b\u306e\u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u3060\u3051\u306b\u306a\u308a\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001",(0,i.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"\u306e\u3088\u3046\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5bfe\u8c61\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u3067\u5b9f\u884c\u3057\u305f\u5834\u5408\u306f\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306e\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5bfe\u8c61\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"\u30ed\u30b0\u3092 JSON \u5f62\u5f0f\u3067\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"\u8a73\u7d30\u60c5\u5831\u3092\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"\u30c4\u30ea\u30fc\u5f62\u5f0f\u3067\u306f\u306a\u304f\u3001\u89e3\u6790\u3057\u3084\u3059\u3044\u5f62\u5f0f\u3067\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u3092\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"--global--g"},"--global, -g"),(0,i.kt)("p",null,"\u73fe\u5728\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u306a\u304f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,i.kt)("p",null,"\u4f9d\u5b58\u95a2\u4fc2\u30c4\u30ea\u30fc\u306e\u8868\u793a\u3059\u308b\u6700\u5927\u306e\u6df1\u3055\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," \u306f\u76f4\u63a5\u4f9d\u5b58\u95a2\u4fc2\u306e\u307f\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," \u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u307f\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002 \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u3067",(0,i.kt)("inlineCode",{parentName:"p"},"-r"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b\u3068\u4fbf\u5229\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," \u3068",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5\u306e\u307f\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u95a2\u4fc2\u30b0\u30e9\u30d5\u306e\u307f\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u306b\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u305b\u3093\u3002"),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ja/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);