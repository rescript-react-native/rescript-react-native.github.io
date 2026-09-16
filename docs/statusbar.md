---
id: statusbar
title: StatusBar
officialDoc: https://reactnative.dev/docs/statusbar
---

## Component

```rescript
type barStyle = [#default | #"light-content" | #"dark-content"]
type showHideTransition = [#fade | #none | #slide]

<StatusBar
  animated=true
  barStyle=#"dark-content"
  backgroundColor="#fff"
  translucent=false
/>
```

## Imperative API

```rescript
StatusBar.setHidden(true, #fade)
StatusBar.setBarStyle(#"light-content", true)
StatusBar.setNetworkActivityIndicatorVisible(true) // iOS
StatusBar.setBackgroundColor("blue", true) // Android
StatusBar.setTranslucent(true) // Android
StatusBar.currentHeight // Android float
```
