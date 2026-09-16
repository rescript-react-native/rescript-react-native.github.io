---
id: touchablenativefeedback
title: TouchableNativeFeedback
officialDoc: https://reactnative.dev/docs/touchablenativefeedback
---

Android-only ripple touchable.

> Prefer [`Pressable`](/docs/pressable) for new code.

```rescript
<TouchableNativeFeedback onPress={_ => Console.log("press")}>
  <View style={Style.s({padding: 12.->dp})}>
    <Text> {"Tap"->React.string} </Text>
  </View>
</TouchableNativeFeedback>
```
