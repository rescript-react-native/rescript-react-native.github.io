---
id: scrollview
title: ScrollView
officialDoc: https://reactnative.dev/docs/scrollview
---

## Methods

### `scrollTo`

Scrolls to a given `x`, `y` offset, either immediately or with animation
(`animated`). On Android you may also pass `duration`.

```rescript
type scrollToOptions = {
  x: float,
  y: float,
  animated?: bool,
  duration?: float,
}

scrollTo: (element, scrollToOptions) => unit
```

#### Example

```rescript
open ReactNative

@react.component
let make = () => {
  let scrollViewRef = React.useRef(Nullable.null)

  <ScrollView ref={scrollViewRef->Ref.value}>
    <TouchableOpacity
      onPress={_ =>
        switch scrollViewRef.current->Nullable.toOption {
        | Some(scrollView) =>
          scrollView->ScrollView.scrollTo({x: 0., y: 0., animated: true})
        | None => ()
        }}>
      <Text> {"ScrollTo 0, 0"->React.string} </Text>
    </TouchableOpacity>
  </ScrollView>
}
```

### `scrollToEnd`

Scrolls to the end of the `ScrollView` (bottom for vertical, right for
horizontal). Optional animation options:

```rescript
type scrollToEndOptions = {animated?: bool, duration?: float}

scrollToEnd: (element, ~options: scrollToEndOptions=?) => unit
```

```rescript
scrollView->ScrollView.scrollToEnd(~options={animated: true})
```

### `flashScrollIndicators`

```rescript
flashScrollIndicators: element => unit
```
