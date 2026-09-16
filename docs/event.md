---
id: event
title: Event
officialDoc: https://github.com/facebook/react-native/blob/main/Libraries/Types/CoreEventTypes.js
---

These are the types of objects returned in event callbacks. Concrete aliases
(`layoutEvent`, `pressEvent`, …) are instances of `SyntheticEvent` /
`ResponderSyntheticEvent` modules.

`nullable<'a>` below is ReScript's stdlib nullable type.

## Parametrised Types

### `SyntheticEvent`

```rescript
type t = {
  bubbles: nullable<bool>,
  cancelable: nullable<bool>,
  currentTarget: float,
  defaultPrevented: nullable<bool>,
  dispatchConfig: registrationName,
  eventPhase: nullable<float>,
  isTrusted: nullable<bool>,
  nativeEvent: 'payload,
  target: nullable<float>,
  timeStamp: float,
  \"type": nullable<string>,
}
```

Helpers such as `preventDefault`, `stopPropagation`, `persist`, etc. are
available on the event value.

### `ResponderSyntheticEvent`

Same fields as `SyntheticEvent`, plus `touchHistory`.

## Types

### `layoutEvent`

`nativeEvent.layout` is a `Layout.rectangle` (`x`, `y`, `width`, `height`).

### `pressEvent`

Responder event whose payload includes `locationX` / `locationY`, `pageX` /
`pageY`, `touches`, `changedTouches`, etc.

### `scrollEvent`

Payload uses shared layout types:

```rescript
type payload = {
  contentInset: Layout.insets,
  contentOffset: Layout.point,
  contentSize: Layout.size,
  layoutMeasurement: Layout.size,
}
```

### `switchChangeEvent`

```rescript
type payload = {value: bool}
```

### `targetEvent`

```rescript
type payload = {target: int}
```

### `textLayoutEvent`

```rescript
type payload = {
  lines: array<{
    ...Layout.rectangle,
    ascender: float,
    capHeight: float,
    descender: float,
    text: string,
    xHeight: float,
  }>,
}
```

### `pointerEvent`

W3C pointer event payload (`pointerId`, `pointerType`, coordinates, modifiers,
…). See also `View.pointerEventProps`.

### `blurEvent` / `focusEvent`

Payload: `{target: float}`.
