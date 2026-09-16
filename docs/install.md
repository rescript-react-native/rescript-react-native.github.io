---
slug: install
title: Installation
---

Depending on how you want to start with _ReScript React Native_, you have
different options:

- [Create a new project with _ReScript React Native_](#create-a-new-project-with-rescript-react-native)
- [Add _ReScript React Native_ to an existing project](#add-rescript-react-native-to-an-existing-project)

All options will basically help you to have:

- [ReScript](https://rescript-lang.org/) (`rescript` ≥ 12)
- [ReScript React](https://rescript-lang.org/docs/react/latest/introduction) (`@rescript/react` ≥ 0.15)
- _ReScript React Native_ (`rescript-react-native` ≥ 0.84)
- [React Native](https://reactnative.dev/) (`react-native` ≥ 0.84)

Below we assume you are already familiar with React Native. If you are new to
React Native, please have a quick look at the
[React Native environment setup](https://reactnative.dev/docs/set-up-your-environment)
guide in order to get the minimal requirements.

## Create a new project with _ReScript React Native_

React Native allows creating a new project from a template, so we made one. By
choosing this option you will get a hello world project that already includes
all the requirements.

Requirements:

- **Node.js ≥ 22.11**
- A working [React Native environment](https://reactnative.dev/docs/set-up-your-environment)

```console
npx @react-native-community/cli@latest init MyApp --template @rescript-react-native/template
cd MyApp
```

Then run the ReScript watcher alongside Metro:

```console
npm run res:watch
npm start
```

💖 Your project is set up — you can check
[how to use _ReScript React Native_](/docs/usage/) right away!

---

⚠️ We don't provide yet instructions for _Expo_ users. _If you are familiar with
Expo, feel free to open
[an issue](https://github.com/rescript-react-native/rescript-react-native/issues/new?title=Expo+template)
so we can discuss that_.

_If you are an Expo user, just have a look at the instructions below when your
Expo app is ready_.

## Add _ReScript React Native_ to an existing project

If you already have an existing React Native **0.84+** project, it's quick to
add ReScript React Native.

👉 **You can decide to use ReScript React Native for certain components only** as
the compilation process generates normal JavaScript.

Go into your project root & then install the requirements:

```console
npm install rescript@^12 @rescript/react@^0.15 rescript-react-native@^0.84
```

Then create a file named `rescript.json` at the same level as your
`package.json` with the following content:

```json
{
  "name": "my-rescript-react-native-app",
  "jsx": {
    "version": 4
  },
  "package-specs": {
    "module": "esmodule",
    "in-source": true
  },
  "suffix": ".res.js",
  "sources": [
    {
      "dir": "src",
      "subdirs": true
    }
  ],
  "dependencies": ["@rescript/react", "rescript-react-native"]
}
```

You will also want scripts in `package.json`:

```json
{
  "scripts": {
    "res:clean": "rescript clean",
    "res:build": "rescript",
    "res:watch": "rescript build -w",
    "prepare": "rescript"
  }
}
```

The main things you should notice here:

- JavaScript generated will use ES modules (`import` / `export`).
- JavaScript generated files will have a `.res.js` extension.
- ReScript code will be compiled from the `src` folder.
- ReScript will use `@rescript/react` & `rescript-react-native` as dependencies.

👀 _For details about this file, please refer to
[ReScript Configuration documentation](https://rescript-lang.org/docs/manual/latest/build-configuration)
if needed._

When it's done, you are ready to
[use ReScript React Native](/docs/usage/)!

---

## Note about `rescript-react-native` version number

We decided to try something simple for you:

⚛️ `rescript-react-native` `0.84.*` means it should work with `react-native`
`^0.84.0`.

We keep the patch number for bindings fixes. `react-native` patches should not
affect our bindings. This means the last digit doesn't need to match:

- `react-native@0.84.1` should work with `rescript-react-native@0.84.0`
- `react-native@0.84.0` should work with `rescript-react-native@0.84.0`

👉 In short: **`rescript-react-native` `0.x.*` means it should work with
`react-native@^0.x.*`**.

Current peer dependencies for `0.84`:

- `react-native` ≥ `0.84.0`
- `rescript` ≥ `12.0.0`
- `@rescript/react` ≥ `0.15.0`
