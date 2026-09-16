---
id: keyboardavoidingview
title: KeyboardAvoidingView
officialDoc: https://reactnative.dev/docs/keyboardavoidingview
---

```rescript
type behavior = [#height | #position | #padding]

<KeyboardAvoidingView
  behavior=#padding
  style={Style.s({flex: 1.})}
  keyboardVerticalOffset=64.>
  <TextInput />
</KeyboardAvoidingView>
```
