---
id: animated
title: Animated
officialDoc: https://reactnative.dev/docs/animated
---

ReScript bindings mirror the React Native Animated API (`Value`, `ValueXY`,
`timing` / `spring` / `decay`, `parallel`, `sequence`, `loop`,
`Animated.View` / `Text` / `Image` / `ScrollView`, interpolation, …).

```rescript
open ReactNative
open Animated

@react.component
let make = () => {
  let fade = useAnimatedValue(~initialValue=0.)

  React.useEffect0(() => {
    timing(
      fade,
      {
        toValue: Value.Timing.fromRawValue(1.),
        duration: 500.,
        useNativeDriver: true,
      },
    )->start
    None
  })

  <View style={Style.s({opacity: fade->StyleProp.float})}>
    <Text> {"Fade in"->React.string} </Text>
  </View>
}
```

With `open Animated`, `View` refers to `Animated.View`.

See
[`src/apis/Animated.res`](https://github.com/rescript-react-native/rescript-react-native/blob/main/src/apis/Animated.res)
for the full surface.
