---
id: permissionsandroid
title: PermissionsAndroid
officialDoc: https://reactnative.dev/docs/permissionsandroid
---

Android-only API for the runtime permissions model (Android M+). While certain
permissions are granted by default as long as they are listed in
`AndroidManifest.xml`, _dangerous_ permissions require a dialog. This API helps
manage those permissions.

## Types

### `Permission.t`

Examples of available permissions (see the binding for the full list):

```rescript
Permission.camera
Permission.recordAudio
Permission.accessFineLocation
Permission.postNotifications
Permission.readMediaImages
Permission.bluetoothConnect
// ...
```

### `Result.t`

```rescript
Result.granted
Result.denied
Result.neverAskAgain
```

### `rationale`

Optional explanation dialog shown when re-requesting a permission.

```rescript
type rationale = {
  title: string,
  message: string,
  buttonPositive: string,
  buttonNegative?: string,
  buttonNeutral?: string,
}
```

### `dict`

Result map returned by `requestMultiple`. Values are accessed with `get`.

## Methods

### `check`

```rescript
check: Permission.t => promise<bool>
```

### `request`

Request a single permission. Optionally pass a rationale.

```rescript
request: (Permission.t, ~rationale: rationale=?) => promise<Result.t>
```

```rescript
let result = await PermissionsAndroid.request(
  PermissionsAndroid.Permission.camera,
  ~rationale={
    title: "Camera",
    message: "We need the camera to scan QR codes",
    buttonPositive: "OK",
  },
)
```

### `requestMultiple`

```rescript
requestMultiple: array<Permission.t> => promise<dict>
```

### `get`

```rescript
get: (dict, Permission.t) => option<Result.t>
```
