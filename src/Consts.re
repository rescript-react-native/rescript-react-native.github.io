let baseUrl = "";
let title = {j|Reason React Native|j};
let titleShort = {j|RRN|j};
let defaultTitle = title ++ {j|, Reason bindings for React Native.|j};
let titleTemplate = {j|%s - |j} ++ title;

module Colors = {
  let darkest = "#1a1a1a";
  let dark = "#20232a";
  let darkless = "#282c34";
  let light = "hsl(219.1, 100%, 99%)";
  let light0 = "hsla(219.1, 100%, 99%, 0)";
  let lightest = "hsl(219.1, 100%, 99.5%)";
  let lightest0 = "hsla(219.1, 100%, 99.5%, 0)";
  let accent = "#48a9dc";
  let accentLight = "#61dafb";
  let greyLight = "#909192";
  let tabBarIconInactive = "#909192";
  let tabBarIconActive = dark;
};

type menuLink = {
  link: string,
  text: string,
  icon: (~width: string, ~height: string, ~fill: string) => React.element,
  isActive: (string, string) => bool,
};

let menuLinks = [|
  /*
   {
     link: "/",
     text: {j|Home|j},
     icon: (~width, ~height, ~fill) => <SVGMenuHome width height fill />,
     isActive: (current, link) => current == link,
   },
   */
  {
    link: baseUrl ++ "/en/docs/",
    text: {j|Docs|j},
    icon: (~width, ~height, ~fill) => <SVGDocumentation width height fill />,
    isActive: (current, _link) =>
      Js.String.startsWith(baseUrl ++ "/en/docs/", current),
  },
  {
    link: baseUrl ++ "/en/blog/",
    text: {j|Blog|j},
    icon: (~width, ~height, ~fill) => <SVGBlog width height fill />,
    isActive: (current, _link) =>
      Js.String.startsWith(baseUrl ++ "/en/blog/", current),
  },
|];

type socialLink = {
  name: string,
  text: string,
  link: string,
  componentFunc: (~iconColor: string, ~iconSize: string) => React.element,
};

let socialLinks = [|
  {
    name: "GitHub",
    text: "reason-react-native on GitHub",
    link: "https://github.com/reason-react-native/reason-react-native",
    componentFunc: (~iconColor, ~iconSize) =>
      <SVGSocialGithub fill=iconColor width=iconSize height=iconSize />,
  },
  {
    name: "Discord",
    text: "reason-react-native on Discord",
    link: "/reason-react-native/discord/",
    componentFunc: (~iconColor, ~iconSize) =>
      <SVGSocialDiscord fill=iconColor width=iconSize height=iconSize />,
  },
|];

let api = "docs/apis/";
let comp = "docs/components/";
type section = {
  title: string,
  data: list((string, string)),
};

let sections = [
  {
    title: "Getting Started",
    data: [
      ("Introduction", "docs/"),
      ("Installation", "docs/install/"),
      ("Usage", "docs/usage/"),
      // ("Style", api ++ "docs/style/"),
      ("Example", "docs/example/"),
      ("Cheatsheet", "docs/cheatsheet/"),
      ("Migration from bs-react-native", "docs/migration/jsx3/"),
    ],
  },
  {
    title: "Components",
    data: [
      ("ActivityIndicator", comp ++ "ActivityIndicator/"),
      ("Button", comp ++ "Button/"),
      ("DrawerLayoutAndroid", comp ++ "DrawerLayoutAndroid/"),
      ("FlatList", comp ++ "FlatList/"),
      ("Image", comp ++ "Image/"),
      ("ImageBackground", comp ++ "ImageBackground/"),
      ("InputAccessoryView", comp ++ "InputAccessoryView/"),
      ("KeyboardAvoidingView", comp ++ "KeyboardAvoidingView/"),
      ("MaskedViewIOS", comp ++ "MaskedViewIOS/"),
      ("Modal", comp ++ "Modal/"),
      ("RefreshControl", comp ++ "RefreshControl/"),
      ("SafeAreaView", comp ++ "SafeAreaView/"),
      ("ScrollView", comp ++ "ScrollView/"),
      ("SectionList", comp ++ "SectionList/"),
      ("StatusBar", comp ++ "StatusBar/"),
      ("Switch", comp ++ "Switch/"),
      ("Text", comp ++ "Text/"),
      ("TextInput", comp ++ "TextInput/"),
      ("TouchableHighlight", comp ++ "TouchableHighlight/"),
      ("TouchableNativeFeedback", comp ++ "TouchableNativeFeedback/"),
      ("TouchableOpacity", comp ++ "TouchableOpacity/"),
      ("TouchableWithoutFeedback", comp ++ "TouchableWithoutFeedback/"),
      ("View", comp ++ "View/"),
      ("VirtualizedList", comp ++ "VirtualizedList/"),
    ],
  },
  {
    title: "APIs",
    data: [
      ("AccessibilityInfo", api ++ "AccessibilityInfo/"),
      ("ActionSheetIOS", api ++ "ActionSheetIOS/"),
      ("Alert", api ++ "Alert/"),
      ("Animated", api ++ "Animated/"),
      ("AnimationFrame *", api ++ "AnimationFrame/"),
      ("AppRegistry", api ++ "AppRegistry/"),
      ("AppState", api ++ "AppState/"),
      ("BackHandler", api ++ "BackHandler/"),
      ("Dimensions", api ++ "Dimensions/"),
      ("Easing", api ++ "Easing/"),
      ("Event *", api ++ "Event/"),
      ("InteractionManager", api ++ "InteractionManager/"),
      ("Keyboard", api ++ "Keyboard/"),
      ("LayoutAnimation", api ++ "LayoutAnimation/"),
      ("Linking", api ++ "Linking/"),
      ("Packager *", api ++ "Packager/"),
      ("PanResponder", api ++ "PanResponder/"),
      ("PermissionsAndroid", api ++ "PermissionsAndroid/"),
      ("PixelRatio", api ++ "PixelRatio/"),
      ("Platform", api ++ "Platform/"),
      ("Settings", api ++ "Settings/"),
      ("Share", api ++ "Share/"),
      ("Style *", api ++ "Style/"),
      ("StyleSheet", api ++ "StyleSheet/"),
      ("Systrace", api ++ "Systrace/"),
      ("ToastAndroid", api ++ "ToastAndroid/"),
      ("Transforms", api ++ "Style/#transform-style-props"),
      ("Vibration", api ++ "Vibration/"),
    ],
  },
];
