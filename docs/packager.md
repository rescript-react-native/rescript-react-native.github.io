---
id: packager
title: Packager
---

## `Packager.require`

`Packager.require` is the exact same `require()` you know in React Native. It
returns a type `Packager.required` (a Metro asset id, typed as `float`).

```rescript
let asset = Packager.require("./some/asset.jpg")
```

You can use this with components like [Image](./image), for example via
`Image.Source.Require(asset)`.
