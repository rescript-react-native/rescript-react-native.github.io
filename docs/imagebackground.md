---
id: imagebackground
title: ImageBackground
officialDoc: https://reactnative.dev/docs/imagebackground
---

Like `Image`, but accepts children. Uses the same `source` /
[`Image.Source`](/docs/image) API.

```rescript
<ImageBackground
  source={Image.Source.URISource({uri: "https://example.com/bg.png"})}
  style={Style.s({flex: 1.})}
  imageStyle={Style.s({opacity: 0.8})}>
  <Text> {"Overlay"->React.string} </Text>
</ImageBackground>
```
