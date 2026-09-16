---
id: uimanager
title: UIManager
officialDoc: https://reactnative.dev/docs/direct-manipulation
---

```rescript
// Android experimental layout animations
switch UIManager.setLayoutAnimationEnabledExperimental {
| Some(enable) => enable(true)
| None => ()
}

UIManager.setJSResponder(reactTag, true)
UIManager.clearJSResponder()
```

Popup menu constants (Android): `UIManager.itemSelected`, `UIManager.dismissed`.
