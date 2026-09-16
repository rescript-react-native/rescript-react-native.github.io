---
id: accessibilityinfo
title: AccessibilityInfo
officialDoc: https://reactnative.dev/docs/accessibilityinfo
---

## Types

### `announcementResult`

Passed to the handler of the `#announcementFinished` event.

```rescript
type announcementResult = {
  announcement: string,
  success: bool,
}
```

where `announcement` is the string announced by the screen reader and `success`
is a `bool` indicating whether the announcement was successfully made.

## Methods

### Query methods

Each of these returns `promise<bool>`:

| Method | Notes |
| --- | --- |
| `isBoldTextEnabled` | iOS |
| `isGrayscaleEnabled` | iOS |
| `isInvertColorsEnabled` | iOS |
| `isReduceMotionEnabled` | |
| `isReduceTransparencyEnabled` | iOS |
| `isScreenReaderEnabled` | |
| `isHighTextContrastEnabled` | |
| `isDarkerSystemColorsEnabled` | |
| `isAccessibilityServiceEnabled` | |
| `prefersCrossFadeTransitions` | |

```rescript
isScreenReaderEnabled: unit => promise<bool>
```

### `getRecommendedTimeoutMillis`

```rescript
getRecommendedTimeoutMillis: float => promise<float>
```

### `announceForAccessibility`

```rescript
announceForAccessibility: string => unit
announceForAccessibilityWithOptions: (string, {queue?: bool}) => unit
```

### `setAccessibilityFocus`

@deprecated Prefer `sendAccessibilityEvent` with `#focus`.

```rescript
setAccessibilityFocus: NativeTypes.nodeHandle => unit
```

### `sendAccessibilityEvent`

```rescript
sendAccessibilityEvent: (
  Ref.t<DOMAPI.element<'nativeElement>>,
  [#click | #focus | #viewHoverEnter | #windowStateChange],
) => unit
```

### `addEventListener`

Add an event handler. Returns an [`EventSubscription`](/docs/eventsubscription)
— call `.remove()` to unsubscribe.

```rescript
addEventListener: [
  | #boldTextChanged(bool => unit)
  | #grayscaleChanged(bool => unit)
  | #invertColorsChanged(bool => unit)
  | #reduceMotionChanged(bool => unit)
  | #screenReaderChanged(bool => unit)
  | #reduceTransparencyChanged(bool => unit)
  | #highTextContrastChanged(bool => unit)
  | #darkerSystemColorsChanged(bool => unit)
  | #accessibilityServiceChanged(bool => unit)
  | #announcementFinished(announcementResult => unit)
] => EventSubscription.t
```

```rescript
React.useEffect0(() => {
  let sub = AccessibilityInfo.addEventListener(#screenReaderChanged(enabled => {
    Console.log(enabled)
  }))
  Some(() => sub->EventSubscription.remove)
})
```
