"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2630],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(t),c=l,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||r;return t?a.createElement(k,p(p({ref:n},s),{},{components:t})):a.createElement(k,p({ref:n},s))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=t(2081),l=t(4604),r=(t(9496),t(9613)),p=["components"],i={id:"installation",title:"\u5b89\u88c5"},o=void 0,m={unversionedId:"installation",id:"version-7.x/installation",title:"\u5b89\u88c5",description:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"installation",title:"\u5b89\u88c5"},sidebar:"version-7.x/docs",previous:{title:"\u9879\u76ee\u521d\u8877",permalink:"/zh/motivation"},next:{title:"\u529f\u80fd\u6bd4\u8f83",permalink:"/zh/feature-comparison"}},s={},d=[{value:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c",level:2},{value:"\u4f7f\u7528 Corepack",id:"\u4f7f\u7528-corepack",level:2},{value:"\u901a\u8fc7 npm \u5b89\u88c5",id:"\u901a\u8fc7-npm-\u5b89\u88c5",level:2},{value:"\u4f7f\u7528 HomeBrew",id:"\u4f7f\u7528-homebrew",level:2},{value:"\u4f7f\u7528 Scoop",id:"\u4f7f\u7528-scoop",level:2},{value:"\u517c\u5bb9\u6027",id:"\u517c\u5bb9\u6027",level:2},{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",level:2},{value:"\u4f7f\u7528\u8f83\u77ed\u7684\u522b\u540d",id:"\u4f7f\u7528\u8f83\u77ed\u7684\u522b\u540d",level:2},{value:"Adding a permanent alias on POSIX systems",id:"adding-a-permanent-alias-on-posix-systems",level:4},{value:"Adding a permanent alias in Powershell (Windows):",id:"adding-a-permanent-alias-in-powershell-windows",level:4},{value:"\u5378\u8f7d pnpm",id:"\u5378\u8f7d-pnpm",level:2}],u={toc:d};function c(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"},"\u4f7f\u7528\u72ec\u7acb\u811a\u672c"),(0,r.kt)("p",null,"\u5728 POSIX \u7cfb\u7edf\u4e0a\uff0c\u5373\u4f7f\u60a8\u6ca1\u6709\u5b89\u88c5 Node.js\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u5b89\u88c5 pnpm\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6ca1\u6709\u5b89\u88c5 curl\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 wget\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u5728 Windows \u4e0b\uff08\u4f7f\u7528PowerShell\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("p",null,"\u7136\u540e\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh/cli/env"},"pnpm env")," \u547d\u4ee4\u6765\u5b89\u88c5 Node.js\u3002"),(0,r.kt)("p",null,"Prior to running the install script, you may optionally set a shell variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," to install a specific version of pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-corepack"},"\u4f7f\u7528 Corepack"),(0,r.kt)("p",null,"\u4ece v16.13 \u5f00\u59cb\uff0cNode.js \u53d1\u5e03\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \u6765\u7ba1\u7406\u5305\u7ba1\u7406\u5668\u3002 \u8fd9\u662f\u4e00\u9879\u5b9e\u9a8c\u6027\u529f\u80fd\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u901a\u8fc7\u8fd0\u884c\u5982\u4e0b\u811a\u672c\u6765\u542f\u7528\u5b83\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"\u8fd9\u5c06\u81ea\u52a8\u5728\u60a8\u7684\u7cfb\u7edf\u4e0a\u5b89\u88c5 pnpm\u3002 \u4f46\u662f\uff0c\u5b83\u53ef\u80fd\u4e0d\u662f\u6700\u65b0\u7248\u672c\u7684 pnpm\u3002 \u82e5\u8981\u5347\u7ea7\uff0c\u8bf7\u68c0\u67e5 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"\u6700\u65b0\u7684 pnpm \u7248\u672c")," \u5e76\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,r.kt)("p",null,"With Node.js v16.17 or newer, you may install the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," version of pnpm by just specifying the tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,r.kt)("h2",{id:"\u901a\u8fc7-npm-\u5b89\u88c5"},"\u901a\u8fc7 npm \u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-homebrew"},"\u4f7f\u7528 HomeBrew"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5b89\u88c5\u4e86\u5305\u7ba1\u7406\u5668\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 pnpm\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-scoop"},"\u4f7f\u7528 Scoop"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5b89\u88c5\u4e86 Scoop \uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 pnpm\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4f60\u5e0c\u671b\u5728 CI \u670d\u52a1\u5668\u4e0a\u4f7f\u7528 pnpm \u5417\uff1f \u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/continuous-integration"},"\u6301\u7eed\u96c6\u6210"),"\u3002")),(0,r.kt)("h2",{id:"\u517c\u5bb9\u6027"},"\u517c\u5bb9\u6027"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5404\u7248\u672c pnpm \u4e0e\u5404\u7248\u672c Node.js \u4e4b\u95f4\u7684\u652f\u6301\u8868\u683c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u77e5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,r.kt)("p",null,"\u5982\u679c pnpm \u635f\u574f\u5e76\u4e14\u60a8\u65e0\u6cd5\u901a\u8fc7\u91cd\u65b0\u5b89\u88c5\u6765\u4fee\u590d\u5b83\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4ece PATH \u4e2d\u5c06\u5176\u624b\u52a8\u5220\u9664\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u60a8\u5728\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u65f6\u9047\u5230\u4ee5\u4e0b\u9519\u8bef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5c1d\u8bd5\u901a\u8fc7\u8fd0\u884c\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),"\u6765\u627e\u5230 pnpm \u7684\u4f4d\u7f6e\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Windows\uff0c\u8bf7\u5728 Git Bash \u4e2d\u8fd0\u884c\u6b64\u547d\u4ee4\u3002 \u60a8\u5c06\u83b7\u5f97 pnpm \u547d\u4ee4\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"\u73b0\u5728\u60a8\u5e94\u8be5\u5df2\u7ecf\u77e5\u9053\u4e86 pnpm CLI \u7684\u6240\u5728\u76ee\u5f55\u3002\u6253\u5f00\u8be5\u76ee\u5f55\u5e76\u5220\u9664\u6240\u6709\u4e0e pnpm \u76f8\u5173\u7684\u6587\u4ef6\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u7b49\uff09\u3002 \u5b8c\u6210\u540e\uff0c\u518d\u6b21\u5b89\u88c5 pnpm\u3002\u73b0\u5728\uff0c\u5b83\u5e94\u8be5\u6b63\u6309\u7167\u9884\u671f\u5de5\u4f5c\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u8f83\u77ed\u7684\u522b\u540d"},"\u4f7f\u7528\u8f83\u77ed\u7684\u522b\u540d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," \u53ef\u80fd\u5f88\u96be\u8f93\u5165\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528\u8f83\u77ed\u7684\u522b\u540d\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"pn"),"\u3002"),(0,r.kt)("h4",{id:"adding-a-permanent-alias-on-posix-systems"},"Adding a permanent alias on POSIX systems"),(0,r.kt)("p",null,"\u53ea\u9700\u5c06\u4e0b\u9762\u8fd9\u884c\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),"\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),"\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish"),"\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias pn=pnpm\nsource ~/. zshrc or ~/. bash_profile\n")),(0,r.kt)("h4",{id:"adding-a-permanent-alias-in-powershell-windows"},"Adding a permanent alias in Powershell (Windows):"),(0,r.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,r.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,r.kt)("h2",{id:"\u5378\u8f7d-pnpm"},"\u5378\u8f7d pnpm"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d pnpm CLI \u5e76\u79fb\u9664\u78c1\u76d8\u4e2d\u7684\u76f8\u5173\u6587\u4ef6\uff0c\u8bf7\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/uninstall"},"\u5378\u8f7d pnpm"),"\u3002"))}c.isMDXComponent=!0}}]);