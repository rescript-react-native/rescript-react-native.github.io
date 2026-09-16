---
id: text
title: Text
wip: true
---

## Example

```rescript
open ReactNative
open Style

let styles = StyleSheet.create({
  "title": s({fontSize: 24., fontWeight: #_600}),
})

<Text style={styles["title"]}> {"Hello World"->React.string} </Text>
```
