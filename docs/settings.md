---
id: settings
title: Settings
officialDoc: https://reactnative.dev/docs/settings
---

iOS-only persistent settings store.

```rescript
Settings.get("theme") // string
Settings.set(dict{("theme", "dark")})

let token = Settings.watchKeys(list{"theme"}, () => {
  Console.log(Settings.get("theme"))
})
Settings.clearWatch(token)
```
