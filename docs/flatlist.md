---
id: flatlist
title: FlatList
officialDoc: https://reactnative.dev/docs/flatlist
---

```rescript
type item = {id: string, title: string}

let data = [{id: "1", title: "One"}, {id: "2", title: "Two"}]

<FlatList
  data
  keyExtractor={(item, _index) => item.id}
  renderItem={({item}) =>
    <Text> {item.title->React.string} </Text>}
/>
```

Supports VirtualizedList props plus `numColumns` / `columnWrapperStyle`.
