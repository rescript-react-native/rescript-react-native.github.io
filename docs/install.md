---
slug: install
title: Installation
---

Depending on how you want to start with _ReScript React Native_, you have
different options to install it:

- [Create a new project with _ReScript React Native_](#create-a-new-project-with-rescript-react-native)
- [Add _ReScript React Native_ to an existing project](#add-rescript-react-native-to-an-existing-project)

All options will basically help you to have :

- [ReScript](https://rescript-lang.org/) (`rescript`)
- [ReScript React](https://rescript-lang.org/docs/react/latest/introduction) (`@rescript/react`)
- _ReScript React Native_ (`rescript-react-native`)

Below we assume you are already familiar with React Native. If you are new to
React Native, please have a quick look to
[React Native Getting Started documentation](https://reactnative.dev/docs/getting-started.html)
in order to get the minimal requirements.

## Create a new project with _ReScript React Native_

React Native allows to create new project from a template, so we made one. By
choosing this option you will get an hello world project that will already have
all the requirements included.

When you have correctly
[`react-native-cli`](https://reactnative.dev/docs/getting-started#the-react-native-cli)
installed, you can run the following command:

```console
npx @react-native-community/cli init --template @rescript-react-native/template MyApp
cd MyApp
```

💖 Your project is setup, you can just check
[how to use _ReScript React Native_](/docs/usage/) right
away!

---

⚠️ We don't provide yet instructions for _Expo_ users. _If you are familiar with
Expo, feel free to open
[an issue](https://github.com/rescript-react-native/rescript-react-native/issues/new?title=Expo+template)
so we can discuss about that_.

_If you are an Expo user, just have a look at the instructions below when your
Expo app is ready_.

## Add _ReScript React Native_ to an existing project

If you already have an existing project, it's really fast to get all the thing
you need to start using ReScript React Native right away!

👉 **You can decide to use ReScript React Native for certain components only** as
the compilation process generate normal JavaScript.

Go into your project root & then install the requirements:

```console
npm install rescript --save-dev
npm install @rescript/react rescript-react-native
```

Then create a file named `bsconfig.json` at the same level at your
`package.json` with the following content

```json
{
  "name": "my-rescript-react-native-app",
  "reason": { "react-jsx": 3 },
  "package-specs": {
    "module": "es6",
    "in-source": true
  },
  "suffix": ".bs.js",
  "sources": [
    {
      "dir": "src",
      "subdirs": true
    }
  ],
  "bs-dependencies": ["@rescript/react", "rescript-react-native"]
}
```

The main things you should notice here:

- JavaScript generated will be using `import` & `export` (_es6_).
- JavaScript generated files will have `.bs.js` extension (easy to find)
- ReScript code will be compiled from `src` folder.
- ReScript will use `@rescript/react` & `rescript-react-native` packages as
  dependencies.

👀 _For details about this file, please refer to
[ReScript Configuration documentation](https://rescript-lang.org/docs/manual/latest/build-configuration)
if needed._

When it's done, you are ready to
[use ReScript React Native](/docs/usage/) !

---

## Note about `rescript-react-native` version number

We decided to try something simple for you:

⚛️ `rescript-react-native` `0.60.*` means it should work with `react-native`
`^0.60.0`.

We keep patch number for bindings fixes. `react-native` patches should not
affect our bindings. This means last digit don't need to match each others:

- `react-native@0.60.8` should work with `rescript-react-native@0.60.0`
- `react-native@0.60.2` should work with `rescript-react-native@0.60.4`

👉 In short: **`rescript-react-native` `0.x.*` means it should work with
`react-native@^0.x.*`**.
