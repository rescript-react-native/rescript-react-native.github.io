---
id: image
title: Image
officialDoc: https://reactnative.dev/docs/image
---

## `Image.Source`

```rescript
module Source = {
  @unboxed
  type t =
    | Require(Packager.required)
    | URISource(imageURISource)
    | URISources(array<imageURISource>)
}
```

```rescript
<Image
  source={Image.Source.Require(Packager.require("./logo.png"))}
  style={Style.s({width: 100.->dp, height: 100.->dp})}
/>

<Image
  source={Image.Source.URISource({uri: "https://example.com/a.png"})}
  alt="example"
/>
```

## Static methods

```rescript
Image.getSize(~uri="https://example.com/a.png") // promise<Layout.size>

Image.getSizeWithHeaders(~uri, ~header=dict{("Authorization", "…")})

Image.prefetch(~uri)->ignore

Image.resolveAssetSource(Image.Source.Require(asset))
// => {width, height, uri}
```
