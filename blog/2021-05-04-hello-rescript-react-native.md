---
slug: 2021-05-04-hello-rescript-react-native
title: Hello ReScript React Native
author: MoOx
author_title: ReScript React Native Core Team
author_url: https://github.com/MoOx
author_image_url: https://avatars.githubusercontent.com/u/157534?v=4
tags: [hello, rescript]
---

Following [BuckleScript & Reason Rebranding](https://rescript-lang.org/blog/bucklescript-is-rebranding) to offer a unified experience, what was know as _Reason React Native_ is now [ReScript React Native](https://rescript-react-native.github.io).

To make this short: all packages that were published on the behalf of Reason React Native organisation are now published as the _ReScript React Native_ organisation.

This means:

- [`reason-react-native`](https://www.npmjs.com/package/reason-react-native) is now [`rescript-react-native`](https://www.npmjs.com/package/rescript-react-native)
- [`reason-react-navigation`](https://www.npmjs.com/package/reason-react-navigation) is now [`rescript-react-navigation`](https://www.npmjs.com/package/rescript-react-navigation)
- [`@reason-react-native/*`](https://www.npmjs.com/settings/reason-react-native/packages) are now [`@rescript-react-native/*`](https://www.npmjs.com/settings/rescript-react-native/packages)

## Should I migrate now all my packages?

It depends on what version of React Native your are using. There is no rush, really.

### You use React Native 0.63

You can keep using `reason-react-native` and friends for now. Revisit this post when you will need to upgrade to 0.64.

### You use React Native 0.64

Here you have 2 possibles upgrades path:

#### Keep using `reason-react-native`

Before renaming all packages, we offered a [last release for `reason-react-native`](https://github.com/rescript-react-native/rescript-react-native/releases/tag/0.64.0) to cover React Native 0.64. You can use that until you are ready to switch to ReScript named packages. If you want to know what this will involve, keep reading.

#### Switch to `rescript-react-native`

The package [`rescript-react-native` starts with version 0.64.1](https://github.com/rescript-react-native/rescript-react-native/releases/tag/0.64.1). You can try to use it for earlier version of React Native of course, but you might end up to minor inconsistencies, especially for bindings that have been tuned for 0.64. Check out [breaking changes in release notes](https://github.com/rescript-react-native/rescript-react-native/releases/tag/0.64.0) to know what this is all about.

If you are ready to move to ReScript naming, you can use all the new packages. Except `rescript-react-native`, other packages of this organisation have just been renamed for most of them, without any changes.

You can expects minor change between `reason-react-native@0.64` & `rescript-react-native@0.64` but this should not cause you any major trouble to switch.
You will probably notice some Js.t have been converted to record syntax, some polymorphic variants changes and minor things like that, but compiler should just tell you what to do.

#### Please note that `@rescript/react` is required for switching

You cannot use `reason-react` and `@rescript/react` as they exposes the same module.
This means this will be "all or nothing".
Some bindings rely on `React` module, so they now depend on `@rescript/react`. This is true for `rescript-react-native` and some other modules.

This is briefly mentionned in [`rescript-react-native@0.64.1` release notes](https://github.com/rescript-react-native/rescript-react-native/releases/tag/0.64.1) but you will also need `bs-platform@^9.0.0`.

Before you ask, `rescript` package is now a thing and up for testing (you can track this using the [ReScript forum, Announcements section](https://forum.rescript-lang.org/c/announcements/7)). This is considered beta at the time of writing this post, so we will change this peer dependency in a near future, when it's officially stable. This will replace `bs-platform`, probably in next "major" release (0.65 or maybe a 0.64.x-rescript).

## tl;dr

If you want to switch to the new naming, you need to be ready to use

- React 17 and `@rescript/react@^0.10`
- React Native 0.64 with `rescript-react-native@^0.64.1`
- ReScript 9 via `bs-platform@^9.0.0`

If you have any questions regarding these changes and how to proceed, feel free to [open a discussion on GitHub](https://github.com/rescript-react-native/rescript-react-native/discussions/new), or use [ReScript forum](https://forum.rescript-lang.org).

## Wait.. That's it?

You might have a question that is still pending: "where is gone the promise of cross-platform code that ReasonML was supposed to offer? I was thinking I could someday use my Reason React Native code to compile it to a lower level language that JavaScript to have blazing fast performance... "

Like I did in the past in my sweet dreams, you may be looking for this. And maybe this will be a reality one day in the future. Some people want this _JSX like_ convenience to build native apps. Some will argue that there are things that you can use today.
But React Native ecosytem is more mature than existing solutions.

React Native can safely be used in production today, and it is for [many successful companies](https://reactnative.dev/showcase). All the modules availables (from the core or the community) make it very easy to avoid writing specific code per platform.
Performance is better and better for every release. Recently [Hermes JavaScript engine was released for iOS](https://reactnative.dev/blog/2021/03/12/version-0.64) and it's [really fast](https://callstack.com/blog/hermes-performance-on-ios/). And don't forget [TurboModules](https://github.com/react-native-community/discussions-and-proposals/issues/40)!

You can not only write mobile apps this days, but also web apps, thanks to [React Native for Web](https://necolas.github.io/react-native-web/), and even native desktop apps, thanks to [React Native Windows + macOS](https://microsoft.github.io/react-native-windows/). More than enough to ship amazing products to production, today.

## What's next

I guess for the near future, nothing crazy will happen for ReScript React Native. We have to update some bindings from time to time, but beside having to switch from `bs-platform` to `rescript`, things should go smoothly.
Feel free to [open a discussion](https://github.com/rescript-react-native/rescript-react-native/discussions/new) if you want bindings for some modules (or just help to write them).

When stars are not correctly aligned and some package have incorrect bindings, remember that you can always use the fantastic [patch-package](https://www.npmjs.com/package/patch-package) to fix things real quick, and then open an issue at the right place.

❤️ _I mostly maintain all this packages all by myself this days, so feel free to [Sponsor Me on GitHub](https://github.com/sponsors/MoOx) and just [share kind words on Twitter](https://twitter.com/MoOx) to keep me motivated_. I hope you enjoy this work like I do.
