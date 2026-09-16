---
id: alert
title: Alert
officialDoc: https://reactnative.dev/docs/alert
---

## Types

```rescript
type style = [#default | #cancel | #destructive]

type button = {
  text?: string,
  onPress?: unit => unit,
  style?: style,
  isPreferred?: bool,
}

type options = {
  cancelable?: bool,
  userInterfaceStyle?: Appearance.t,
  onDismiss?: unit => unit,
}
```

## Methods

### `alert`

Launches an alert dialog with the specified `title` and optional `message`.
Optionally, an array of `buttons` can be provided: on Android the maximum is 3,
on iOS any number is okay.

On Android, the dialog can be dismissed by tapping outside of the alert box.
This triggers the `onDismiss` callback available in the `options`. With the
`cancelable` option, this behavior can be deactivated altogether.

```rescript
alert: (
  ~title: string,
  ~message: string=?,
  ~buttons: array<button>=?,
  ~options: options=?,
) => unit
```

#### Example

```rescript
open ReactNative

Alert.alert(
  ~title="Do you really want to quit?",
  ~message="We miss you already.",
  ~buttons=[
    {text: "OK", style: #destructive, onPress: () => Console.log("Bye!")},
    {text: "Cancel", style: #cancel},
  ],
  ~options={cancelable: true, onDismiss: () => Console.log("Dismissed.")},
)
```

### `prompt`

_iOS only_ — prompt the user for text input.

```rescript
prompt: (
  ~title: string,
  ~message: string=?,
  ~callbackOrButtons: [
    | #callback(string => unit)
    | #buttons(array<button>)
  ]=?,
  ~type_: [#default | #"plain-text" | #"secure-text" | #"login-password"]=?,
  ~defaultValue: string=?,
  ~keyboardType: string=?,
  ~options: options=?,
) => unit
```
