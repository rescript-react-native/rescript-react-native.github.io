---
id: keyboard
title: Keyboard
officialDoc: https://reactnative.dev/docs/keyboard
---

## Types

```rescript
type keyboardMetrics = {
  screenX: float,
  screenY: float,
  width: float,
  height: float,
}

type eventType = [
  | #keyboardWillShow
  | #keyboardDidShow
  | #keyboardWillHide
  | #keyboardDidHide
  | #keyboardWillChangeFrame
  | #keyboardDidChangeFrame
]

type keyboardEvent = {
  duration: float,
  easing: LayoutAnimation.animationType,
  endCoordinates: keyboardMetrics,
  startCoordinates: keyboardMetrics,
  isEventFromThisApp: bool,
}
```

## Methods

### `addListener`

```rescript
addListener: (eventType, keyboardEvent => unit) => EventSubscription.t
```

### `removeAllListeners`

```rescript
removeAllListeners: eventType => unit
```

### `dismiss`

```rescript
dismiss: unit => unit
```

### `isVisible`

```rescript
isVisible: unit => bool
```

### `metrics`

```rescript
metrics: unit => option<keyboardMetrics>
```

### `scheduleLayoutAnimation`

```rescript
scheduleLayoutAnimation: keyboardEvent => unit
```
