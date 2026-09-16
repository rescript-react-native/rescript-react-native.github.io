---
id: drawerlayoutandroid
title: DrawerLayoutAndroid
officialDoc: https://reactnative.dev/docs/drawerlayoutandroid
---

Android-only drawer layout.

```rescript
<DrawerLayoutAndroid
  drawerWidth=300.
  drawerPosition=#left
  renderNavigationView={() =>
    <View>
      <Text> {"Menu"->React.string} </Text>
    </View>}
  onDrawerClose={() => Console.log("closed")}>
  <Text> {"Content"->React.string} </Text>
</DrawerLayoutAndroid>
```
