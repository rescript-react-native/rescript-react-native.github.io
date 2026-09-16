---
id: vibration
title: Vibration
officialDoc: https://reactnative.dev/docs/vibration
---

## Types

```rescript
@unboxed
type pattern = Number(int) | Array(array<int>)
```

## Methods

### `vibrate`

```rescript
vibrate: (~pattern: pattern=?, ~repeat: bool=?) => unit
```

```rescript
Vibration.vibrate()
Vibration.vibrate(~pattern=Number(400))
Vibration.vibrate(~pattern=Array([0, 500, 200, 500]), ~repeat=true)
```

### `cancel`

Stop a repeating vibration.

```rescript
cancel: unit => unit
```
