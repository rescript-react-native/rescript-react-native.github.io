---
id: clipboard
title: Clipboard
officialDoc: https://reactnative.dev/docs/clipboard
---

`Clipboard` has been deprecated and will be removed from React Native in the
future.

Please refer to [bindings](https://github.com/rescript-react-native/clipboard) for
the replacement
[community package](https://github.com/react-native-clipboard/clipboard).

---

## Methods

### `getString`

Attempt reading content from the Clipboard.

```rescript
getString: unit => promise<string>
```

### `setString`

Copy a string to the Clipboard.

```rescript
setString: string => unit
```
