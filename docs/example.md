---
id: example
title: Example
---

As soon as you
[installed Reason React Native](/en/docs/install/) properly
and have you `./package.json` and `./bsconfig.json` ready, you can create two
files:

- [`./App.js`](#appjs): a proxy for React Native to reference Reason compiled
  app component
- [`./src/App.re`](#srcappre): the actual React Native entry point, using Reason

_If you used our template as explained in the installation guide, you should
already have these files._

No worries, you can copy paste this if needed without understanding the content
for now. Documentation will explain everything 😇.

## `./App.js`

This can be you only JavaScript file if you want to be full ReasonML! It's just
a proxy to `App.re` application wrapper.

```javascript
/**
 * Do not modify this file - it is a proxy to your `App.re` file
 * located in the `src/` folder.
 */
export { app as default } from "./src/App.bs.js";
```

## `./src/App.re`

Please directly grab the
[App.re](https://github.com/reason-react-native/template/blob/master/template/src/App.re)
of our template, which will match React Native default _Hello World_!

### Differences with React Native JavaScript

Beside Reason syntax that is a bit different with JavaScript, you may have
noticed this major differences:

- Modules are not imported, but opened instead (without reference to the
  filesystem file) and this is due to
  [how modules work in ReasonML](https://reasonml.github.io/docs/en/module)
  (**filename must be unique**),
- Component definition must be preceded with `[@react.component]`,
- `const` is not a thing in Reason, & `let` is the default as ReasonML have a
  specific way to allow mutable variables,
- String in JSX must be quoted and explicitely referenced as `React.string` (you
  will find similar specific `React.*` to specify null value (`React.null`),
  children from an array `React.array`...)
- References to `styles` keys aren't using dot notation like in JavaScript but
  `##` instead thanks to ReScript syntax sugar for
  [direct JavaScript object access](https://rescript-lang.org/docs/manual/latest/bind-to-js-object)
- You won't see any explicit `export` like in JavaScript. By default every
  variables defined in a ReasonML module is exposed.

## Start this example

Now let's run this example.

In comparison with standard React Native development, the only thing you need to
be sure that you have successfully compiled `App.re` as `App.bs.js` like we
explained in the [usage](/en/docs/usage/) section.

As soon as ReasonML compilation is successful, nothing should change for your
development process. You can normally start your React Native app via
`react-native run-ios`, `react-native run-android` or your classic web workflow
if you use `react-native-web`!

---

## Further reading

- [Cheatsheet](/en/docs/cheatsheet/)

## In case you missed it

- [Getting Started](/en/docs/)
- [Install](/en/docs/install/)
- [Usage](/en/docs/usage/)
