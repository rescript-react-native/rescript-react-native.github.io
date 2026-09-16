---
id: easing
title: Easing
officialDoc: https://reactnative.dev/docs/easing
---

Easing functions for animations. Type: `float => float`.

## Presets

```rescript
Easing.linear
Easing.ease
Easing.quad
Easing.cubic
Easing.poly(4.)
Easing.sin
Easing.circle
Easing.exp
Easing.elastic(1.)
Easing.back(1.7)
Easing.bounce
Easing.bezier(0.42, 0., 1., 1.)
```

## Modifiers

```rescript
Easing.in_(Easing.ease)
Easing.out(Easing.ease)
Easing.inOut(Easing.ease)
```

## Steps

```rescript
Easing.step0(0.5) // int
Easing.step1(0.5)
```
