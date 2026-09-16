---
id: appstate
title: AppState
officialDoc: https://reactnative.dev/docs/appstate
---

## Types

```rescript
type t = [#active | #background | #inactive | #unknown | #extension]
```

## Values

```rescript
AppState.currentState // t
AppState.isAvailable // bool
```

## Methods

### `addEventListener`

```rescript
addEventListener: [
  | #change(t => unit)
  | #focus(unit => unit)
  | #blur(unit => unit)
  | #memoryWarning(unit => unit)
] => EventSubscription.t
```

```rescript
React.useEffect0(() => {
  let sub = AppState.addEventListener(#change(next => Console.log(next)))
  Some(() => sub->EventSubscription.remove)
})
```
