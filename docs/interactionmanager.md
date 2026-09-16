---
id: interactionmanager
title: InteractionManager
officialDoc: https://reactnative.dev/docs/interactionmanager
---

Schedule work to run after animations / interactions complete.

```rescript
InteractionManager.runAfterInteractions(() => {
  // heavy work
})

let handle = InteractionManager.createInteractionHandle()
// ...
InteractionManager.clearInteractionHandle(handle)

InteractionManager.setDeadline(100.)
```
