"use strict";(self.webpackChunkrescript_react_native_github_io=self.webpackChunkrescript_react_native_github_io||[]).push([[8453],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=l(t),g=a,m=s["".concat(p,".").concat(g)]||s[g]||d[g]||i;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=g;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[s]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7920:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={id:"packager",title:"Packager"},c=void 0,o={unversionedId:"packager",id:"packager",title:"Packager",description:"Packager.require",source:"@site/docs/packager.md",sourceDirName:".",slug:"/packager",permalink:"/docs/packager",draft:!1,editUrl:"https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/docs/packager.md",tags:[],version:"current",frontMatter:{id:"packager",title:"Packager"},sidebar:"api",previous:{title:"Linking",permalink:"/docs/linking"},next:{title:"PanResponder",permalink:"/docs/panresponder"}},p={},l=[{value:"<code>Packager.require</code>",id:"packagerrequire",level:2}],u={toc:l},s="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"packagerrequire"},(0,a.kt)("inlineCode",{parentName:"h2"},"Packager.require")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Packager.require")," is the exact same ",(0,a.kt)("inlineCode",{parentName:"p"},"require()")," you know in React Native. It\nreturns a type ",(0,a.kt)("inlineCode",{parentName:"p"},"Packager.required"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},'let asset = Packager.require("./some/asset.jpg")\n')),(0,a.kt)("p",null,"You can use this for component like ",(0,a.kt)("a",{parentName:"p",href:"docs/image/"},"Image"),"."))}d.isMDXComponent=!0}}]);