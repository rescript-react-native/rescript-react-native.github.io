---
id: actionsheetios
title: ActionSheetIOS
officialDoc: https://reactnative.dev/docs/actionsheetios
---

iOS-only action sheet / share sheet.

## `showActionSheetWithOptions`

```rescript
ActionSheetIOS.showActionSheetWithOptions(
  {
    options: ["Cancel", "Delete"],
    cancelButtonIndex: 0,
    destructiveButtonIndex: [1],
    title: "Confirm",
  },
  buttonIndex => Console.log(buttonIndex),
)
```

## `showShareActionSheetWithOptions`

```rescript
ActionSheetIOS.showShareActionSheetWithOptions(
  {url: "https://rescript-lang.org", message: "ReScript"},
  error => Console.warn(error),
  (completed, activityType) => Console.log((completed, activityType)),
)
```

## `dismissActionSheet`

```rescript
ActionSheetIOS.dismissActionSheet()
```
