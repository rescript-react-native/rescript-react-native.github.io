---
id: linking
title: Linking
officialDoc: https://reactnative.dev/docs/linking.html
---

Only for projects supporting Native Code. Requires the project to have been
created using `react-native init` or ejected afterwards if created using
`expo init` or `create-react-native-app`.

## Types

### `extra`

To be used with [`sendIntent`](#sendintent) for sending text and data.

```rescript
type extra = {key: string, value: ExtraValue.t}
```

`ExtraValue.t` is an unboxed variant:

```rescript
module ExtraValue = {
  type t = String(string) | Number(float) | Bool(bool)
}
```

### `url`

```rescript
type url = {url: string}
```

## Methods

### `openURL`

To attempt opening a URL. URL should be specified as `string`. Promise is
resolved if the user approves the request (through the _open dialog_) or the
link is opened automatically. If the user rejects the request or there are no
registered applications supporting the URL, the promise is rejected. It is
recommended to use the `canOpenURL` method beforehand, to verify that the URL
can indeed be opened.

```rescript
openURL: string => promise<unit>
```

### `canOpenURL`

To determine whether a URL can be opened by registered applications. URL should
be specified as `string`. The promise will be rejected if it is impossible to
check if the URL can be opened on Android or for iOS 9 and later, an appropriate
entry does not exist for the `LSApplicationQueriesSchemes` key in `Info.plist`.

```rescript
canOpenURL: string => promise<bool>
```

### `getInitialURL`

Returns a nullable string wrapped in a promise. If the app was launched to open
a link, that link will be returned, otherwise `null`.

```rescript
getInitialURL: unit => promise<null<string>>
```

### `openSettings`

Attempts to open the Settings app and display custom settings for the app, if
any.

```rescript
openSettings: unit => promise<unit>
```

### `sendIntent`

To use `Intent` actions on Android for sending text (and optional extras) to
other apps.

```rescript
sendIntent: (string, ~extras: array<extra>=?) => promise<unit>
```

```rescript
Linking.sendIntent("android.intent.action.SEND")->ignore

Linking.sendIntent(
  "android.intent.action.SEND",
  ~extras=[{key: "key1", value: String("test"),}],
)->ignore
```

### `addEventListener`

To specify a handler for the specified event type. Only the `#url` event is
supported. Returns an `EventSubscription.t` (call `.remove()` to unsubscribe).

```rescript
addEventListener: (eventType, url => unit) => EventSubscription.t
```

### Example

```rescript
open ReactNative
open Style

let windowHeight = Dimensions.get(#window).height
let windowWidth = Dimensions.get(#window).width

let containerStyle = s({
  width: windowWidth->dp,
  height: windowHeight->dp,
  justifyContent: #center,
  alignItems: #center,
})

type state = {url: option<string>}

type action = SetURL(option<string>)

@react.component
let make = () => {
  let (state, dispatch) = React.useReducer((state, action) =>
    switch action {
    | SetURL(v) => {url: v}
    }
  , {url: None})

  let handler = s => Console.warn(s.url)

  let handlePromise = async url => {
    try {
      await Linking.openURL(url)
      dispatch(SetURL(Some(url)))
    } catch {
    | Exn.Error(err) => Console.warn(err)
    }
  }

  // Listener will only receive URLs which your app is
  // registered to handle
  // https:// resource below will not be captured here
  React.useEffect0(() => {
    let subscription = Linking.addEventListener(#url, handler)
    Some(() => subscription.remove())
  })

  <View style=containerStyle>
    <Text>
      {state.url->Option.getOr("No URL requested")->React.string}
    </Text>
    <Button
      onPress={_ =>
        handlePromise(
          "https://github.com/rescript-react-native/rescript-react-native/",
        )->ignore}
      title="Open Repo"
    />
    // This will only work if you have registered myapp:// as
    // custom URL scheme for your app
    // Otherwise this will throw an error on the Yellow Box
    <Button
      onPress={_ => handlePromise("myapp://screen")->ignore} title="Internal URL"
    />
  </View>
}
```
