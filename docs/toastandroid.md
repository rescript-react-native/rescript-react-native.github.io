---
id: toastandroid
title: ToastAndroid
officialDoc: https://reactnative.dev/docs/toastandroid
---

Android-only toast messages.

## Constants

```rescript
ToastAndroid.short // duration
ToastAndroid.long

ToastAndroid.top // gravity
ToastAndroid.bottom
ToastAndroid.center
```

## Methods

### `show`

```rescript
show: (string, duration) => unit
```

```rescript
ToastAndroid.show("Saved", ToastAndroid.short)
```

### `showWithGravity`

```rescript
showWithGravity: (string, duration, gravity) => unit
```

### `showWithGravityAndOffset`

```rescript
showWithGravityAndOffset: (
  string,
  duration,
  gravity,
  ~xOffset: float,
  ~yOffset: float,
) => unit
```
