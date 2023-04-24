"use strict";(self.webpackChunkrescript_react_native_github_io=self.webpackChunkrescript_react_native_github_io||[]).push([[8223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=i,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"linking",title:"Linking",officialDoc:"https://reactnative.dev/docs/linking.html"},o=void 0,l={unversionedId:"linking",id:"linking",title:"Linking",description:"Only for projects supporting Native Code. Requires the project to have been",source:"@site/docs/linking.md",sourceDirName:".",slug:"/linking",permalink:"/docs/linking",draft:!1,editUrl:"https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/docs/linking.md",tags:[],version:"current",frontMatter:{id:"linking",title:"Linking",officialDoc:"https://reactnative.dev/docs/linking.html"},sidebar:"api",previous:{title:"LayoutAnimation",permalink:"/docs/layoutanimation"},next:{title:"Packager",permalink:"/docs/packager"}},p={},s=[{value:"Types",id:"types",level:2},{value:"<code>extra</code>",id:"extra",level:3},{value:"<code>url</code>",id:"url",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>openURL</code>",id:"openurl",level:3},{value:"<code>canOpenURL</code>",id:"canopenurl",level:3},{value:"<code>getInitialURL</code>",id:"getinitialurl",level:3},{value:"<code>openSettings</code>",id:"opensettings",level:3},{value:"<code>sendIntent</code>",id:"sendintent",level:3},{value:"<code>sendIntentWithExtras</code>",id:"sendintentwithextras",level:3},{value:"<code>addEventListener</code>",id:"addeventlistener",level:3},{value:"<code>removeEventListener</code>",id:"removeeventlistener",level:3},{value:"Example",id:"example",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Only for projects supporting Native Code. Requires the project to have been\ncreated using ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native init")," or ejected afterwards if created using\n",(0,i.kt)("inlineCode",{parentName:"p"},"expo init")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-native-app"),"."),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("h3",{id:"extra"},(0,i.kt)("inlineCode",{parentName:"h3"},"extra")),(0,i.kt)("p",null,"To be used with the ",(0,i.kt)("a",{parentName:"p",href:"#sendIntentWithExtras"},(0,i.kt)("inlineCode",{parentName:"a"},"sendIntentWithExtras"))," method for\nsending text and data. May be created by the constructor of the same name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"external extra: (~key: string, ~value: 'a) => extra\n")),(0,i.kt)("h3",{id:"url"},(0,i.kt)("inlineCode",{parentName:"h3"},"url")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"type url = {url: string}\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"openurl"},(0,i.kt)("inlineCode",{parentName:"h3"},"openURL")),(0,i.kt)("p",null,"To attempt opening a URL. URL should be specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", and the method\nreturns ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," wrapped in a promise. Promise is resolved if the user approves\nthe request (through the ",(0,i.kt)("em",{parentName:"p"},"open dialog"),") or the link is opened automatically. If\nthe user rejects the request or there are no registered applications supporting\nthe URL, the promise is rejected. It is recommended to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"canOpenURL"),"\nmethod beforehand, to verify that the URL can indeed be opened."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"openURL: string => Js.Promise.t(unit)\n")),(0,i.kt)("h3",{id:"canopenurl"},(0,i.kt)("inlineCode",{parentName:"h3"},"canOpenURL")),(0,i.kt)("p",null,"To determine whether a URL can be opened by registered applications. URL should\nbe specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", and the method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," wrapped in a promise.\nThe promise will be rejected if it is impossible to check if the URL can be\nopened on Android or for iOS 9 and later, an appropriate entry does not exist\nfor the ",(0,i.kt)("inlineCode",{parentName:"p"},"LSApplicationQueriesSchemes")," key in ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"canOpenURL: string => Js.Promise.t(bool)\n")),(0,i.kt)("h3",{id:"getinitialurl"},(0,i.kt)("inlineCode",{parentName:"h3"},"getInitialURL")),(0,i.kt)("p",null,"Returns a nullable string wrapped in a promise. If the app was launched to open\na link, that link will be returned as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.Null(string)")," value, otherwise\n",(0,i.kt)("inlineCode",{parentName:"p"},"Js.null")," will be returned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"getInitialURL: unit => Js.Promise.t(Js.Null.t(string))\n")),(0,i.kt)("h3",{id:"opensettings"},(0,i.kt)("inlineCode",{parentName:"h3"},"openSettings")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As of React Native 0.60")),(0,i.kt)("p",null,"Attempts to open the Settings app and display custom settings for the app, if\nany. This method returns an unspecified object (type ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),") wrapped in a\npromise."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"openSettings: unit => Js.Promise.t<'a>\n")),(0,i.kt)("h3",{id:"sendintent"},(0,i.kt)("inlineCode",{parentName:"h3"},"sendIntent")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As of React Native 0.59.8")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"sendIntent: string => unit\n")),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"Intent")," actions on Android for sending text to other apps. This method\nreturns ",(0,i.kt)("inlineCode",{parentName:"p"},"unit"),"."),(0,i.kt)("h3",{id:"sendintentwithextras"},(0,i.kt)("inlineCode",{parentName:"h3"},"sendIntentWithExtras")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"As of React Native 0.59.8")),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"Intent")," actions on Android for sending text and data (to be provided as\nan array of type ",(0,i.kt)("inlineCode",{parentName:"p"},"extra")," objects) to other apps. This method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"unit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"sendIntentWithExtras: (string, array(extra)) => unit\n")),(0,i.kt)("p",null,"where the type ",(0,i.kt)("inlineCode",{parentName:"p"},"extra")," can be created with the ",(0,i.kt)("inlineCode",{parentName:"p"},"extra")," constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"extra: (~key: string, ~value: 'a) => extra\n")),(0,i.kt)("h3",{id:"addeventlistener"},(0,i.kt)("inlineCode",{parentName:"h3"},"addEventListener")),(0,i.kt)("p",null,'To specify a handler for the specified event type. Only the "url" event is\nsupported, which should be specified using the polymorphic variant ',(0,i.kt)("inlineCode",{parentName:"p"},"`url"),".\nThe handler should be of type ",(0,i.kt)("a",{parentName:"p",href:"#url"},(0,i.kt)("inlineCode",{parentName:"a"},"url")),(0,i.kt)("inlineCode",{parentName:"p"}," => unit"),". The URL can be obtained\nfrom the returned object using the ",(0,i.kt)("inlineCode",{parentName:"p"},".url")," property. This method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"unit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"addEventListener: ([ `url], url => unit) => unit\n")),(0,i.kt)("h3",{id:"removeeventlistener"},(0,i.kt)("inlineCode",{parentName:"h3"},"removeEventListener")),(0,i.kt)("p",null,'To remove a handler for the specified event type. Only the "url" event is\nsupported, which should be specified using the polymorphic variant ',(0,i.kt)("inlineCode",{parentName:"p"},"`url"),".\nThe handler should be of type ",(0,i.kt)("a",{parentName:"p",href:"#url"},(0,i.kt)("inlineCode",{parentName:"a"},"url")),(0,i.kt)("inlineCode",{parentName:"p"}," => unit"),". This method returns\n",(0,i.kt)("inlineCode",{parentName:"p"},"unit"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"removeEventListener([ `url], url => unit) => unit\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'open ReactNative\n\nlet windowHeight = Dimensions.get(#window).height\nlet windowWidth = Dimensions.get(#window).width\n\nlet containerStyle = {\n  open Style\n  style(\n    ~width=windowWidth->dp,\n    ~height=windowHeight->dp,\n    ~justifyContent=#center,\n    ~alignItems=#center\xe0\n    (),\n  )\n}\n\ntype state = {url: option<string>}\n\ntype action = SetURL(option<string>)\n\n@react.component\nlet make = () => {\n  let (state, dispatch) = React.useReducer((state, action) =>\n    switch action {\n    | SetURL(v) => {url: v}\n    }\n  , {url: None})\n\n  let handler = s => s.url->Js.Console.warn\n\n  let handlePromise = url => {\n    open Js.Promise\n    Linking.openURL(url)\n    |> then_(() => resolve(dispatch(SetURL(Some(url)))))\n    |> catch(err => resolve(err->Js.Console.warn))\n    |> ignore\n  }\n\n  // Listener will only receive URLs which your app is\n  // registered to handle\n  // https:// resource below will not be captured here\n  React.useEffect0(() => {\n    Linking.addEventListener(#url, handler)\n    Some(() => Linking.removeEventListener(#url, handler))\n  })\n\n  <View style=containerStyle>\n    <Text>\n      {Belt.Option.getWithDefault(state.url, "No URL requested")->React.string}\n    </Text>\n    <Button\n      onPress={_ =>\n        handlePromise(\n          "https://github.com/rescript-react-native/rescript-react-native/",\n        )}\n      title="Open Repo"\n    />\n    // This will only work if you have registered myapp:// as\n    // custom URL scheme for your app\n    // Otherwise this will throw an error on the Yellow Box\n    <Button\n      onPress={_ => handlePromise("myapp://screen")} title="Internal URL"\n    />\n  </View>\n}\n')))}u.isMDXComponent=!0}}]);