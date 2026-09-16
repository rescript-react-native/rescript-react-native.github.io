---
id: refreshcontrol
title: RefreshControl
officialDoc: https://reactnative.dev/docs/refreshcontrol
---

Used inside a `ScrollView` / list for pull-to-refresh.

```rescript
let (refreshing, setRefreshing) = React.useState(() => false)

<ScrollView
  refreshControl={
    <RefreshControl
      refreshing
      onRefresh={() => {
        setRefreshing(_ => true)
        // fetch...
        setRefreshing(_ => false)
      }}
      tintColor="#999"
    />
  }>
  <Text> {"Content"->React.string} </Text>
</ScrollView>
```
