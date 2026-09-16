---
id: nativemodules
title: NativeModules
officialDoc: https://reactnative.dev/docs/native-modules-intro
---

Prefer binding your own modules explicitly:

```rescript
@module("react-native") @scope(("NativeModules", "MyCustomModule"))
external myFunc: unit => unit = "myFunc"
```

Low-level access also exists:

```rescript
NativeModules.nativeModules // dict<'a>
requireNativeComponent("RCTMyView", ()) // React.component<'a>
```
