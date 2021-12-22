---
slug: /
title: Getting Started
---

_ReScript React Native_ is a safe & simple way to build
[React Native](https://reactnative.dev/) apps, in
[ReScript](https://rescript-lang.org/), using
[ReScript React](https://rescript-lang.org/docs/react/latest/introduction).

## Why _ReScript React Native_ ?

By leveraging the ReScript great type system, expressive language features and
smooth interoperability with JavaScript (thanks to
[ReScript](https://rescript-lang.org/), _ReScript React Native_ provide
bindings for React Native features as components & APIs that are:

- Safe and statically typed
- Simple and lean
- Familiar and easy to insert into an existing React Native codebase

It is often said that writing ReactJS code feels like "just using JavaScript".
The same applies to _ReScript React_ with _ReScript React Native_: you will feel
like you are "just using Rescript".

## How to use _ReScript React Native_ ?

Like _ReScript React_ for React, _ReScript React Native_ is a ReScript package that exposes
bindings for React Native.

On your side, you write ReScript code that use the `ReactNative` module exposed by
`rescript-react-native` package that you will find on `npm`.

ReScript will compile this code to safe JavaScript that React Native can
consume like standard JavaScript.

![Introduction](/schemas/introduction.svg)

If you are familiar with Flow or TypeScript, you can see ReScript as the next
level of strongly typed JavaScript.

In short, you write safer code that will be compiled to safe JavaScript & end up
with a safer React Native app!

## Zero-Cost

What is awesome about _ReScript React Native_ bindings is that they don't
introduce an additional cost. The JavaScript code produced by ReScript will
directly hit React & React Native JavaScript implementation, without any extra
runtime & bundle cost.

## Using ReScript & ReScript React

_ReScript React Native_ is a package that works with
[ReScript](https://rescript-lang.org/) & use
[ReScript React](https://rescript-lang.org/docs/react/latest/introduction). For this reasons,
if you are unfamiliar with one of these two, we encourage you to have a look to
their documentations as soon as you don't find an answer you might have here.
