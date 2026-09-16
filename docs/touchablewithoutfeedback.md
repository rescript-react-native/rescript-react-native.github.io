---
id: touchablewithoutfeedback
title: TouchableWithoutFeedback
officialDoc: https://reactnative.dev/docs/touchablewithoutfeedback
---

> Prefer [`Pressable`](/docs/pressable) for new code.

```rescript
<TouchableWithoutFeedback onPress={_ => Console.log("press")}>
  <View>
    <Text> {"Tap"->React.string} </Text>
  </View>
</TouchableWithoutFeedback>
```
