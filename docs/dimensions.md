---
id: dimensions
title: Dimensions
officialDoc: https://reactnative.dev/docs/dimensions
---

## Types

```rescript
type displayMetrics = {
  width: float,
  height: float,
  scale: float,
  fontScale: float,
}

type handler = {
  screen: displayMetrics,
  window: displayMetrics,
}
```

## Methods

### `get`

```rescript
get: [#window | #screen] => displayMetrics
```

```rescript
let {width, height} = Dimensions.get(#window)
```

### `addEventListener`

```rescript
addEventListener: ([#change], handler => unit) => EventSubscription.t
```

### `useWindowDimensions`

React hook that updates when window dimensions change.

```rescript
useWindowDimensions: unit => displayMetrics
```

```rescript
let metrics = useWindowDimensions()
```
