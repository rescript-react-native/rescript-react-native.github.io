"use strict";(self.webpackChunkrescript_react_native_github_io=self.webpackChunkrescript_react_native_github_io||[]).push([[473],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?i.createElement(h,l(l({ref:n},c),{},{components:t})):i.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={id:"accessibilityinfo",title:"AccessibilityInfo",officialDoc:"https://reactnative.dev/docs/accessibilityinfo"},l=void 0,o={unversionedId:"accessibilityinfo",id:"accessibilityinfo",title:"AccessibilityInfo",description:"Types",source:"@site/docs/accessibilityinfo.md",sourceDirName:".",slug:"/accessibilityinfo",permalink:"/docs/accessibilityinfo",draft:!1,editUrl:"https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/docs/accessibilityinfo.md",tags:[],version:"current",frontMatter:{id:"accessibilityinfo",title:"AccessibilityInfo",officialDoc:"https://reactnative.dev/docs/accessibilityinfo"},sidebar:"api",previous:{title:"APIs",permalink:"/docs/apis"},next:{title:"ActionSheetIOS",permalink:"/docs/actionsheetios"}},s={},d=[{value:"Types",id:"types",level:2},{value:"<code>announcementResult</code>",id:"announcementresult",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>isBoldTextEnabled</code>",id:"isboldtextenabled",level:3},{value:"<code>isGrayscaleEnabled</code>",id:"isgrayscaleenabled",level:3},{value:"<code>isInvertColorsEnabled</code>",id:"isinvertcolorsenabled",level:3},{value:"<code>isReduceMotionEnabled</code>",id:"isreducemotionenabled",level:3},{value:"<code>isReduceTransparencyEnabled</code>",id:"isreducetransparencyenabled",level:3},{value:"<code>isScreenReaderEnabled</code>",id:"isscreenreaderenabled",level:3},{value:"<code>setAccessibilityFocus</code>",id:"setaccessibilityfocus",level:3},{value:"<code>announceForAccessibility</code>",id:"announceforaccessibility",level:3},{value:"<code>addEventListener</code>",id:"addeventlistener",level:3},{value:"<code>removeEventListener</code>",id:"removeeventlistener",level:3}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("h3",{id:"announcementresult"},(0,a.kt)("inlineCode",{parentName:"h3"},"announcementResult")),(0,a.kt)("p",null,"Passed to the handler of the ",(0,a.kt)("inlineCode",{parentName:"p"},"`announcementFinished")," event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"type announcementResult = {\n  announcement: string,\n  success: bool,\n}\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"announcement")," is the string announced by the screen reader and ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),"\nis a ",(0,a.kt)("inlineCode",{parentName:"p"},"bool")," indicating whether the announcement was successfully made."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"isboldtextenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"isBoldTextEnabled")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"iOS only")),(0,a.kt)("p",null,"To query whether bold text is currently enabled. Promise resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when\nbold text is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"isBoldTextEnabled: unit => Js.Promise.t(bool)\n")),(0,a.kt)("h3",{id:"isgrayscaleenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"isGrayscaleEnabled")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"iOS only")),(0,a.kt)("p",null,"To query whether grayscale is currently enabled. Promise resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when\ngrayscale is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"isGrayscaleEnabled: unit => Js.Promise.t(bool)\n")),(0,a.kt)("h3",{id:"isinvertcolorsenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"isInvertColorsEnabled")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"iOS only")),(0,a.kt)("p",null,"To query whether invert colors is currently enabled. Promise resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\nwhen invert colors is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"isInvertColorsEnabled: unit => Js.Promise.t(bool)\n")),(0,a.kt)("h3",{id:"isreducemotionenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"isReduceMotionEnabled")),(0,a.kt)("p",null,"To query whether reduce motion is currently enabled. Promise resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\nwhen reduce motion is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"isReduceMotionEnabled: unit => Js.Promise.t(bool)\n")),(0,a.kt)("h3",{id:"isreducetransparencyenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"isReduceTransparencyEnabled")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"iOS only")),(0,a.kt)("p",null,"To query whether reduce transparency is currently enabled. Promise resolves to\n",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when reduce transparency is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"isReduceTransparencyEnabled: unit => Js.Promise.t(bool)\n")),(0,a.kt)("h3",{id:"isscreenreaderenabled"},(0,a.kt)("inlineCode",{parentName:"h3"},"isScreenReaderEnabled")),(0,a.kt)("p",null,"To query whether screen reader is currently enabled. Promise resolves to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\nwhen screen reader is enabled and ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"isScreenReaderEnabled: unit => Js.Promise.t(bool)\n")),(0,a.kt)("h3",{id:"setaccessibilityfocus"},(0,a.kt)("inlineCode",{parentName:"h3"},"setAccessibilityFocus")),(0,a.kt)("p",null,"To set accessibility focus to a React component, identified by its ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeHandle"),".\nOn Android, this is equivalent to\n",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager.sendAccessibilityEvent(reactTag, UIManager.AccessibilityEventTypes.typeViewFocused)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"setAccessibilityFocus: NativeTypes.nodeHandle => unit\n")),(0,a.kt)("h3",{id:"announceforaccessibility"},(0,a.kt)("inlineCode",{parentName:"h3"},"announceForAccessibility")),(0,a.kt)("p",null,"To post a string to be announced by the screen reader."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"announceForAccessibility: string => unit\n")),(0,a.kt)("h3",{id:"addeventlistener"},(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener")),(0,a.kt)("p",null,"Add an event handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rescript"},"addEventListener: [\n    | #boldTextChanged(bool => unit)\n    | #grayscaleChanged(bool => unit)\n    | #invertColorsChanged(bool => unit)\n    | #reduceMotionChanged(bool => unit)\n    | #screenReaderChanged(bool => unit)\n    | #reduceTransparencyChanged(bool => unit)\n    | #announcementFinished(announcementResult => unit)\n  ] => unit\n")),(0,a.kt)("p",null,"Supported events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boldTextChanged(bool => unit)"),": ",(0,a.kt)("em",{parentName:"li"},"iOS only"),". Fires when state of the bold text\ntoggle changes. The argument to the event handler is a ",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," which is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\nwhen bold text is enabled and ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grayscaleChanged(bool => unit)"),": ",(0,a.kt)("em",{parentName:"li"},"iOS only"),". Fires when state of the gray\nscale toggle changes. The argument to the event handler is a ",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," which is\n",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when gray scale is enabled and ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"invertColorsChanged(bool => unit)"),": ",(0,a.kt)("em",{parentName:"li"},"iOS only"),". Fires when state of the\ninvert colors toggle changes. The argument to the event handler is a ",(0,a.kt)("inlineCode",{parentName:"li"},"bool"),"\nwhich is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when invert colors is enabled and ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reduceMotionChanged(bool => unit)"),": Fires when state of the reduce motion\ntoggle changes. The argument to the event handler is a ",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," which is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),'\nwhen reduce motion is enabled (or when "Transition Animation Scale" in\n"Developer options" is "Animation off") and ',(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screenReaderChanged(bool => unit)"),": Fires when state of the screen reader\nchanges. The argument to the event handler is a ",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," which is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when a\nscreen reader is enabled and ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," otherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reduceTransparencyChanged(bool => unit)"),": ",(0,a.kt)("em",{parentName:"li"},"iOS only"),". Fires when state of the\nreduce transparency toggle changes. The argument to the event handler is a\n",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," which is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," when reduce transparency is enabled and ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\notherwise."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"announcementFinished(announcementResult => unit)"),": ",(0,a.kt)("em",{parentName:"li"},"iOS only"),". Fires when the\nscreen reader has finished making an announcement. The argument to the event\nhandler is of type ",(0,a.kt)("a",{parentName:"li",href:"#announcementResult"},(0,a.kt)("inlineCode",{parentName:"a"},"announcementResult")),".")),(0,a.kt)("h3",{id:"removeeventlistener"},(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener")),(0,a.kt)("p",null,"To remove an event handler."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#addEventListener"},(0,a.kt)("inlineCode",{parentName:"a"},"addEventListener"))," for more details on supported\nevents."))}u.isMDXComponent=!0}}]);