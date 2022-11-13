"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6478],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),v=o,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(2962),o=n(2742),a=(n(9496),n(9613)),l=["components"],i={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-7.x/cli/remove",title:"pnpm remove",description:"\u5225\u540d: rm, uninstall, un",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/ja/cli/remove",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-7.x/docs",previous:{title:"pnpm update",permalink:"/ja/cli/update"},next:{title:"pnpm link",permalink:"/ja/cli/link"}},s={},u=[{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:u};function v(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5225\u540d: ",(0,a.kt)("inlineCode",{parentName:"p"},"rm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"un")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u3068\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ja/workspaces"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"),"\u5185\u3067\u5b9f\u884c\u3059\u308b\u3068\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u542b\u307e\u308c\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3064\u3044\u3066\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u5916\u3067\u5b9f\u884c\u3059\u308b\u3068\u3001\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b\u542b\u307e\u308c\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3064\u3044\u3066\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--global--g"},"--global, -g"),(0,a.kt)("p",null,"\u30b0\u30ed\u30fc\u30d0\u30eb\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\u306b\u542b\u307e\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\u306b\u542b\u307e\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u306b\u542b\u307e\u308c\u308b\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u307f\u3092\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ja/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}v.isMDXComponent=!0}}]);