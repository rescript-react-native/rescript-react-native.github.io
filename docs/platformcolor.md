---
id: platformcolor
title: PlatformColor
officialDoc: https://reactnative.dev/docs/platformcolor
---

Functions to access native colors on the target platform by supplying the native
color’s corresponding value.

## `PlatformColor.ios`

`PlatformColor.ios` is used to get color information from iOS UI Element Colors
(and related UIKit colors).

```rescript
ios: array<Ios.t> => Color.t
```

Pass one or more fallbacks; the first supported value wins:

```rescript
PlatformColor.ios([#label, #black])
```

## `PlatformColor.android`

`PlatformColor.android` is used to get color information from Android colors or
attributes.

```rescript
android: array<Android.t> => Color.t
```

Colors use the full resource form (e.g. `#"@android:color/primary_text_dark"`).
Attributes use forms like `#"?android:attr/colorPrimary"`.

You may mix colors and attributes. The first value is treated as default and the
rest as fallbacks:

```rescript
PlatformColor.android([
  #"@android:color/primary_text_dark",
  #"?android:attr/colorPrimary",
])
```

See also:

- [R.attr](https://developer.android.com/reference/android/R.attr)
- [R.color](https://developer.android.com/reference/android/R.color)

## `PlatformColor.unsafe`

Depending on platform & OS version (and for Android you can have user-defined
attrs for colors), this function is used for getting platform colors from
strings.

```rescript
unsafe: array<string> => Color.t
```

This can be any Android resource query, for example: `"?attr/colorPrimary"` or
`"?android:attr/colorPrimary"`, even resources defined within your Android app.
The first value will be treated as default and the rest as fallbacks.

```rescript
PlatformColor.unsafe(["?attr/colorPrimary", "?android:attr/colorPrimary"])
```

## Example

```rescript
open ReactNative
open Style

let styles = StyleSheet.create({
  "container": s({
    color: switch Platform.os {
    | os if os == Platform.android =>
      PlatformColor.android([
        #"@android:color/primary_text_dark",
        #"?android:attr/colorPrimary",
      ])
    | os if os == Platform.ios => PlatformColor.ios([#label])
    | _ => "black"
    },
  }),
})
```
