---
slug: cheatsheet
title: Cheatsheet
---

If you are not familiar with ReScript / Reason, be sure to check [ReScript Overview](https://rescript-lang.org/docs/manual/latest/overview) to learn how to interop with JavaScript

## JSX String

### JavaScript JSX String

```javascript
<Text>Hello, world!</Text>
```

### JSX String

```rescript
<Text> {"Hello, world!"->React.string} </Text>
```

## JSX Number (int)

### JavaScript JSX Number (int)

```javascript
<Text>42</Text>
```

### JSX Number (int)

```rescript
<Text> {Int.toString(42)->React.string} </Text>
```

## JSX Number (float)

### JavaScript JSX Number (float)

```javascript
<Text>4.2</Text>
```

### JSX Number (float)

```rescript
<Text> {Float.toString(4.2)->React.string} </Text>
```

## JSX Array (of string)

### JavaScript JSX Array (of string)

```javascript
{items.map((item, i) =>
  <Text key={i++item}>
    {item}
  </Text>
)}
```

### JSX Array (of string)

```rescript
{items
->Array.mapWithIndex((item, index) =>
  <Text key={Int.toString(index) ++ item}> {item->React.string} </Text>
)
->React.array}
```

## JSX conditional string

### JavaScript JSX conditional string

```javascript
<Text>{condition && something}</Text>
```

### JSX conditional string

```rescript
<Text>
  {
    condition ? something->React.string : React.null
  }
</Text>
```

## JSX optional value

### JavaScript JSX optional string

_Assuming `something` is a `string` that can be `undefined`._

```javascript
{
  something && <Text>{something.toUpperCase()}</Text>;
}
```

### JSX optional string

_Recommended: Assuming `something` is an
[optional](https://rescript-lang.org/docs/manual/latest/null-undefined-option) `string`._

```rescript
{
  something
  ->Option.map(thing =>
    <Text> {thing->String.toUpperCase->React.string} </Text>
  )
  ->Option.getOr(React.null)
}
```

_If you have to work with JavaScript/JSON: Assuming `something` is a JavaScript
`string` that can be `undefined`._

```rescript
{
  something
  ->Nullable.toOption
  ->Option.map(thing =>
    <Text> {thing->String.toUpperCase->React.string} </Text>
  )
  ->Option.getOr(React.null)
}
```

## React Native StyleSheet

### JavaScript React Native StyleSheet

```javascript
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    maxHeight: 600,
    width: 800,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "auto",
  },
  cornerThing: {
    position: "absolute",
    top: 100,
    right: -20,
    transform: [{ rotate: "4deg" }],
  },
  text: {
    textTransform: "uppercase",
  },
});

console.log(StyleSheet.flatten([styles.container]));
```

### ReScript React Native StyleSheet

```rescript
open ReactNative
open Style // units & Style.s come from the Style module

let styles = StyleSheet.create({
  "container": s({
    maxHeight: 600.->dp,
    width: 80.->pct,
    justifyContent: #"flex-start",
    alignItems: #center,
    margin: auto,
  }),
  "cornerThing": s({
    position: #absolute,
    top: 100.->dp,
    right: -20.->dp,
    transform: [rotate(~rotate=4.->deg)],
  }),
  "text": s({textTransform: #uppercase}),
})

Console.log(StyleSheet.flatten([styles["container"]]))
```

## Concatenated styles

### JavaScript Concatenated styles

```javascript
<View style={[styles.container, styles.containerAdditionalStyles]} />
```

### Concatenated styles

```rescript
open ReactNative
open Style

<View style={array([styles["container"], styles["containerAdditionalStyles"]])} />
```

## Optional styles

### JavaScript Optional styles

```javascript
<View
  style={[
    styles.container,
    condition && styles.containerAdditionalStyles,
    condition2 && { width: 40 },
  ]}
/>
```

### Optional styles

```rescript
open ReactNative
open Style

<View
  style={arrayOption([
    Some(styles["container"]),
    condition ? Some(styles["containerAdditionalStyles"]) : None,
    condition2 ? Some(s({width: 40.->dp})) : None,
  ])}
/>
```

## Hello world

### JavaScript Hello World

```javascript
/* App.js */
import React from "react";
import { Text, View } from "react-native";

export default function HelloWorld({ name }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello, {name || "world"}!</Text>
    </View>
  );
}
```

### Hello World

```rescript
/* App.res */
open ReactNative
open Style

@react.component
let make = (~name=?) => {
  <View style={s({flex: 1., justifyContent: #center, alignItems: #center})}>
    <Text>
      {("Hello, " ++ name->Option.getOr("world") ++ "!")->React.string}
    </Text>
  </View>
}
```
