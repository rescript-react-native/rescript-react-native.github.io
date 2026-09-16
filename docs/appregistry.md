---
id: appregistry
title: AppRegistry
officialDoc: https://reactnative.dev/docs/appregistry
---

Entry point to register and run React Native apps.

## Common usage

```rescript
AppRegistry.registerComponent("MyApp", () => App.make)
AppRegistry.runApplication("MyApp", {"initialProps": {}})
```

## Other methods

```rescript
AppRegistry.getAppKeys() // array<string>
AppRegistry.registerRunnable(appKey, params => ())
AppRegistry.registerSection(appKey, () => Section.make)
AppRegistry.unmountApplicationComponentAtRootTag(rootTag)

// Android headless tasks
AppRegistry.registerHeadlessTask(taskKey, () => data => promise)
AppRegistry.startHeadlessTask(taskId, taskKey, data)
```
