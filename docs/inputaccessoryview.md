---
id: inputaccessoryview
title: InputAccessoryView
officialDoc: https://reactnative.dev/docs/inputaccessoryview
---

iOS-only accessory view above the keyboard.

```rescript
<InputAccessoryView nativeID="doneToolbar">
  <Button onPress={_ => Keyboard.dismiss()} title="Done" />
</InputAccessoryView>

<TextInput inputAccessoryViewID="doneToolbar" />
```
