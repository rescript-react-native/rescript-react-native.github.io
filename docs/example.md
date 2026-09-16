---
slug: example
title: Example
---

As soon as you
[installed ReScript React Native](/docs/install/) properly
and have your `./package.json` and `./rescript.json` ready, you can create two
files:

- [`./App.js`](#appjs): a proxy for React Native to reference your ReScript compiled
  app component
- [`./src/App.res`](#srcappres): the actual React Native entry point, in ReScript

_If you used our template as explained in the installation guide, you should
already have these files._

No worries, you can copy paste this if needed without understanding the content
for now. Documentation will explain everything 😇.

## `./App.js`

This can be your only JavaScript file if you want to be full ReScript! It's just
a proxy to `App.res`.

```javascript
/**
 * Do not modify this file — it is a proxy to your `src/App.res` file.
 */
export {make as default} from './src/App.res.js';
```

## `./src/App.res`

Please directly grab the
[App.res](https://github.com/rescript-react-native/template/blob/main/template/src/App.res)
of our template, which matches the React Native default _Hello World_ for 0.84
(including `NewAppScreen` and safe-area support).

### Differences with React Native JavaScript

Beside ReScript syntax that is a bit different from JavaScript, you may have
noticed these major differences:

- Modules are not imported, but opened instead (without reference to the
  filesystem file) and this is due to
  [how modules work in ReScript](https://rescript-lang.org/docs/manual/latest/module)
  (**filename must be unique**),
- Component definition must be preceded with `@react.component`,
- `const` is not a thing in ReScript, & `let` is the default as ReScript has a
  specific way to allow mutable variables,
- String in JSX must be quoted and explicitly referenced as `React.string` (you
  will find similar specific `React.*` helpers such as `React.null`,
  `React.array`...),
- Styles are usually created with `Style.s({ ... })` and accessed with
  `styles["container"]` (record / object field access),
- You won't see any explicit `export` like in JavaScript. By default every
  value defined in a ReScript module is exposed. The JS entry uses
  `export {make as default}` from the compiled `.res.js` file.

## Start this example

Now let's run this example.

In comparison with standard React Native development, the only extra step is to
make sure you have successfully compiled `App.res` as `App.res.js` like we
explained in the [usage](/docs/usage/) section.

As soon as ReScript compilation is successful, nothing else should change for your
development process. You can normally start your React Native app via
`npm run ios`, `npm run android` or your classic web workflow
if you use `react-native-web`!
