---
id: share
title: Share
officialDoc: https://reactnative.dev/docs/share
---

## Types

```rescript
type content = {
  title?: string,
  message?: string,
  url?: string,
}

type options = {
  subject?: string,
  tintColor?: string,
  excludedActivityTypes?: array<string>,
  dialogTitle?: string,
  anchor?: int,
}

type shareResult = {
  action: action,
  activityType: option<string>,
}
```

Constants: `Share.sharedAction`, `Share.dismissedAction`.

## Methods

### `share`

```rescript
share: (content, ~options: options=?) => promise<shareResult>
```

```rescript
let result = await Share.share(
  {message: "Check this out", url: "https://rescript-react-native.github.io"},
  ~options={dialogTitle: "Share"},
)

if result.action == Share.sharedAction {
  Console.log("shared")
}
```
