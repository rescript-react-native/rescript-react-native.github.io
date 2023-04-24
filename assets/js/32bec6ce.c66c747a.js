"use strict";(self.webpackChunkrescript_react_native_github_io=self.webpackChunkrescript_react_native_github_io||[]).push([[7387],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(y,o(o({ref:n},c),{},{components:t})):a.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={id:"layoutanimation",title:"LayoutAnimation"},o=void 0,l={unversionedId:"layoutanimation",id:"layoutanimation",title:"LayoutAnimation",description:"LayoutAnimation API offers a simpler alternative to Animated API. Instead of",source:"@site/docs/layoutanimation.md",sourceDirName:".",slug:"/layoutanimation",permalink:"/docs/layoutanimation",draft:!1,editUrl:"https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/docs/layoutanimation.md",tags:[],version:"current",frontMatter:{id:"layoutanimation",title:"LayoutAnimation"},sidebar:"api",previous:{title:"Keyboard",permalink:"/docs/keyboard"},next:{title:"Linking",permalink:"/docs/linking"}},s={},p=[{value:"Methods",id:"methods",level:2},{value:"Types",id:"types",level:2},{value:"Presets",id:"presets",level:2},{value:"Example",id:"example",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LayoutAnimation")," API offers a simpler alternative to ",(0,i.kt)("inlineCode",{parentName:"p"},"Animated")," API. Instead of\ndirectly manipulating values for various style props, it suffices to specify the\nanimation to be run before the next render. Specification of the animation\nshould happen in the reducer, before ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," is updated."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LayoutAnimation")," is still experimental on Android and needs to be explicitly\nenabled with the ",(0,i.kt)("inlineCode",{parentName:"p"},"UIManager")," method ",(0,i.kt)("inlineCode",{parentName:"p"},"setLayoutAnimationEnabledExperimental"),".\nHowever, as that method should be removed when ",(0,i.kt)("inlineCode",{parentName:"p"},"LayoutAnimation")," is no longer\nexperimental, the external declaration for it wraps its type in ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," to\navoid runtime errors when that happens. ",(0,i.kt)("inlineCode",{parentName:"p"},"LayoutAnimation")," may be enabled, if it\nis not already enabled by default, by means of a statement such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"switch UIManager.setLayoutAnimationEnabledExperimental {\n| None => ()\n| Some(setEnabled) => setEnabled(true)\n}\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configureNext")," is the method to specify the animation, takes an argument of\ntype ",(0,i.kt)("inlineCode",{parentName:"li"},"layoutAnimationConfig"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"configureNext: layoutAnimationConfig => unit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configureNextWithEndCallback")," is a convenience function, which allows\nspecification of a callback function (of type ",(0,i.kt)("inlineCode",{parentName:"li"},"unit => unit"),") to be run after\nthe animation, in addition to ",(0,i.kt)("inlineCode",{parentName:"li"},"layoutAnimationConfig"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"configureNextWithEndCallback: (layoutAnimationConfig, unit => unit) => unit\n")),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"layoutAnimationConfig")," can be created with the ",(0,i.kt)("inlineCode",{parentName:"p"},"layoutAnimationConfig"),"\nconstructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"layoutAnimationConfig:\n  (\n    ~duration: float,\n    ~create: animationConfig=?,\n    ~update: animationConfig=?,\n    ~delete: animationConfig=?,\n    unit\n  ) => layoutAnimationConfig\n")),(0,i.kt)("p",null,"or by means of the helper function ",(0,i.kt)("inlineCode",{parentName:"p"},"create")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"create:\n  (\n    ~duration: float,\n    ~_type: [\n      | #spring\n      | #linear\n      | #easeInEaseOut\n      | #easeIn\n      | #easeOut\n      | #keyboard\n    ],\n    ~property: [ | #opacity | #scaleX | #scaleY | #scaleXY]\n  ) => layoutAnimationConfig\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"animationConfig")," can in turn be created with the ",(0,i.kt)("inlineCode",{parentName:"p"},"animationConfig")," constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"animationConfig:\n  (\n    ~duration: float=?,\n    ~delay: float=?,\n    ~springDamping: float=?,\n    ~initialVelocity: float=?,\n    ~_type: [\n      | #spring\n      | #linear\n      | #easeInEaseOut\n      | #easeIn\n      | #easeOut\n      | #keyboard\n    ]=?,\n    ~property: [ | #opacity | #scaleX | #scaleY | #scaleXY]=?,\n    unit\n  ) => animationConfig\n")),(0,i.kt)("h2",{id:"presets"},"Presets"),(0,i.kt)("p",null,"There are presets for ",(0,i.kt)("inlineCode",{parentName:"p"},"linear"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"spring")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"easeInEaseOut")," transitions which\nallow a very straightforward way to setup animation. Presets may either be\npassed as ready-made ",(0,i.kt)("inlineCode",{parentName:"p"},"layoutAnimationConfig")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"configureNext")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"configureNextWithEndCallback")," as below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)\n")),(0,i.kt)("p",null,"or equivalently as already passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"configureNext")," as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"LayoutAnimation.spring()\n\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The example below illustrates animated transition (",(0,i.kt)("inlineCode",{parentName:"p"},"spring"),") between two views,\nsuch as registration and login forms. Animation is specified in the reducer, as\nbelow, before state is returned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},'open ReactNative\n\nlet windowWidth = Dimensions.get(#window).width\n\ntype state = {register: bool}\n\ntype action = ToggleRegister\n\nlet styles = {\n  open Style\n  StyleSheet.create({\n    "container": style(~flex=1., ~flexDirection=#column, ()),\n    "screen": style(~width=windowWidth->dp, ()),\n  })\n}\n\n@react.component\nlet make = () => {\n  let (state, dispatch) = React.useReducer((state, action) =>\n    switch action {\n    | ToggleRegister =>\n      // Animation should be specified here, before state is updated:\n      LayoutAnimation.configureNext(\n        LayoutAnimation.create(\n          ~duration=500.,\n          ~_type=#spring,\n          ~property=#opacity,\n        ),\n      )\n      // update of the state happens below:\n      {register: !state.register\xe0\n    }\n  , {register: false})\n\n  <View style={styles["container"]}>\n    <View\n      style={\n        open Style\n        style(\n          ~flex=1.,\n          ~width=(2.0 *. windowWidth)->dp,\n          ~left=(state.register ? 0. : 0. -. windowWidth)->dp,\n          ~flexDirection=#row,\n          (),\n        )\n      }>\n      <View style={styles["screen"]}> <Register /> </View>\n      <View style={styles["screen"]}> <Login /> </View>\n    </View>\n    <Button onPress={_ => dispatch(ToggleRegister)} title=`Toggle` />\n  </View>\n}\n')),(0,i.kt)("p",null,"Note that above animation specification is that of the ",(0,i.kt)("inlineCode",{parentName:"p"},"spring")," preset.\nAccordingly, the animation could have been specified as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)\n")),(0,i.kt)("p",null,"or equivalently as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rescript"},"LayoutAnimation.spring()\n")))}m.isMDXComponent=!0}}]);