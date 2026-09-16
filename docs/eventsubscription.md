---
id: eventsubscription
title: EventSubscription
officialDoc: https://reactnative.dev/docs/events
---

Many React Native APIs return an `EventSubscription` from `addEventListener` /
`addListener`. Call `remove` to unsubscribe.

```rescript
type t = {remove: unit => unit}

remove: t => unit
```

```rescript
React.useEffect0(() => {
  let sub = AppState.addEventListener(#change(state => Console.log(state)))
  Some(() => sub->EventSubscription.remove)
})
```
