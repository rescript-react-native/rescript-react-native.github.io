---
id: switch
title: Switch
officialDoc: https://reactnative.dev/docs/switch
---

```rescript
let (value, setValue) = React.useState(() => false)

<Switch
  value
  onValueChange={v => setValue(_ => v)}
  trackColor={{\"true": "#81b0ff", \"false": "#767577"}}
  thumbColor="#f4f3f4"
/>
```
