---
id: yellowbox
title: YellowBox
officialDoc: https://reactnative.dev/docs/debugging#warnings
---

> YellowBox has been replaced by [LogBox](/docs/logbox). Prefer `LogBox` in
> modern React Native apps.

Warning messages used to be displayed in white on a yellow background
(YellowBox). Warnings may be triggered with `Console.warn`.

## Methods

### `ignoreWarnings`

Allows setting an array of prefixes to be ignored; any warning message which
begins with a string in that array will not be displayed.

```rescript
ignoreWarnings: array<string> => unit
```

## Example

```rescript
YellowBox.ignoreWarnings([
  "Possible Unhandled Promise Rejection",
  "Remote debugger",
])
```
