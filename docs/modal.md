---
id: modal
title: Modal
officialDoc: https://reactnative.dev/docs/modal
---

```rescript
let (visible, setVisible) = React.useState(() => false)

<Modal
  animationType=#slide
  transparent=false
  visible
  backdropColor="#000"
  onRequestClose={_ => setVisible(_ => false)}>
  <View>
    <Text> {"Hello Modal"->React.string} </Text>
    <Button title="Close" onPress={_ => setVisible(_ => false)} />
  </View>
</Modal>
```
