---
id: textinput
title: TextInput
officialDoc: https://reactnative.dev/docs/textinput
---

```rescript
let (text, setText) = React.useState(() => "")

<TextInput
  value=text
  onChangeText={v => setText(_ => v)}
  placeholder="Type here"
  style={Style.s({borderWidth: 1., padding: 8.->dp})}
/>
```

Events include `onChange`, `onEndEditing`, `onSubmitEditing`,
`onContentSizeChange`, etc. (see binding for full props).
