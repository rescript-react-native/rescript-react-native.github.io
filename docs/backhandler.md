---
id: backhandler
title: BackHandler
officialDoc: https://reactnative.dev/docs/backhandler
---

Android-only API to listen to the hardware back button.

## Methods

### `exitApp`

```rescript
exitApp: unit => unit
```

### `addEventListener`

```rescript
addEventListener: ([#hardwareBackPress], unit => nullable<bool>) => {remove: unit => unit}
```

Return `Nullable.make(true)` from the handler to prevent the default back
behavior.

```rescript
React.useEffect0(() => {
  let subscription = BackHandler.addEventListener(#hardwareBackPress, () => {
    // handle back...
    Nullable.make(true)
  })
  Some(() => subscription.remove())
})
```
