---
id: layoutanimation
title: LayoutAnimation
---

`LayoutAnimation` API offers a simpler alternative to `Animated` API. Instead of
directly manipulating values for various style props, it suffices to specify the
animation to be run before the next render. Specification of the animation
should happen in the reducer, before `state` is updated.

`LayoutAnimation` is still experimental on Android and needs to be explicitly
enabled with the `UIManager` method `setLayoutAnimationEnabledExperimental`.
However, as that method should be removed when `LayoutAnimation` is no longer
experimental, the external declaration for it wraps its type in `option` to
avoid runtime errors when that happens. `LayoutAnimation` may be enabled, if it
is not already enabled by default, by means of a statement such as:

```rescript
switch UIManager.setLayoutAnimationEnabledExperimental {
| None => ()
| Some(setEnabled) => setEnabled(true)
}
```

## Methods

- `configureNext` is the method to specify the animation, takes an argument of
  type `layoutAnimationConfig`.

```rescript
configureNext: layoutAnimationConfig => unit
```

- `configureNextWithEndCallback` is a convenience function, which allows
  specification of a callback function (of type `unit => unit`) to be run after
  the animation, in addition to `layoutAnimationConfig`.

```rescript
configureNextWithEndCallback: (layoutAnimationConfig, unit => unit) => unit
```

## Types

`layoutAnimationConfig` can be created with the `layoutAnimationConfig`
constructor

```rescript
layoutAnimationConfig:
  (
    ~duration: float,
    ~create: animationConfig=?,
    ~update: animationConfig=?,
    ~delete: animationConfig=?,
    unit
  ) => layoutAnimationConfig
```

or by means of the helper function `create`

```rescript
create:
  (
    ~duration: float,
    ~_type: [
      | #spring
      | #linear
      | #easeInEaseOut
      | #easeIn
      | #easeOut
      | #keyboard
    ],
    ~property: [ | #opacity | #scaleX | #scaleY | #scaleXY]
  ) => layoutAnimationConfig
```

`animationConfig` can in turn be created with the `animationConfig` constructor

```rescript
animationConfig:
  (
    ~duration: float=?,
    ~delay: float=?,
    ~springDamping: float=?,
    ~initialVelocity: float=?,
    ~_type: [
      | #spring
      | #linear
      | #easeInEaseOut
      | #easeIn
      | #easeOut
      | #keyboard
    ]=?,
    ~property: [ | #opacity | #scaleX | #scaleY | #scaleXY]=?,
    unit
  ) => animationConfig
```

## Presets

There are presets for `linear`, `spring` and `easeInEaseOut` transitions which
allow a very straightforward way to setup animation. Presets may either be
passed as ready-made `layoutAnimationConfig` to `configureNext` and
`configureNextWithEndCallback` as below

```rescript
LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
```

or equivalently as already passed to `configureNext` as

```rescript
LayoutAnimation.spring()

```

## Example

The example below illustrates animated transition (`spring`) between two views,
such as registration and login forms. Animation is specified in the reducer, as
below, before state is returned.

```rescript
open ReactNative

let windowWidth = Dimensions.get(#window).width

type state = {register: bool}

type action = ToggleRegister

let styles = {
  open Style
  StyleSheet.create({
    "container": style(~flex=1., ~flexDirection=#column, ()),
    "screen": style(~width=windowWidth->dp, ()),
  })
}

@react.component
let make = () => {
  let (state, dispatch) = React.useReducer((state, action) =>
    switch action {
    | ToggleRegister =>
      // Animation should be specified here, before state is updated:
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          ~duration=500.,
          ~_type=#spring,
          ~property=#opacity,
        ),
      )
      // update of the state happens below:
      {register: !state.registerà
    }
  , {register: false})

  <View style={styles["container"]}>
    <View
      style={
        open Style
        style(
          ~flex=1.,
          ~width=(2.0 *. windowWidth)->dp,
          ~left=(state.register ? 0. : 0. -. windowWidth)->dp,
          ~flexDirection=#row,
          (),
        )
      }>
      <View style={styles["screen"]}> <Register /> </View>
      <View style={styles["screen"]}> <Login /> </View>
    </View>
    <Button onPress={_ => dispatch(ToggleRegister)} title=`Toggle` />
  </View>
}
```

Note that above animation specification is that of the `spring` preset.
Accordingly, the animation could have been specified as

```rescript
LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
```

or equivalently as

```rescript
LayoutAnimation.spring()
```
