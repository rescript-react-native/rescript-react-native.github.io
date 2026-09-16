---
id: view
title: View
officialDoc: https://reactnative.dev/docs/view
---

The most fundamental building block. Accepts layout / view style props via
[`Style.s`](/docs/style), accessibility props, gesture responder handlers, and
W3C pointer events (`onPointerDown`, …).

```rescript
open ReactNative
open Style

<View
  style={s({flex: 1., padding: 16.->dp, backgroundColor: "white"})}
  onPointerDown={_ => Console.log("pointer down")}>
  <Text> {"Hello"->React.string} </Text>
</View>
```
