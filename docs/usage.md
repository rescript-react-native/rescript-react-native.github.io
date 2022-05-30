---
slug: usage
title: Usage
---

When `rescript`, `@rescript/react` and `rescript-react-native` are installed, you
can run the following command

```console
npm run rescript
```

⚠️ _If this process looks fast to you, don't be surprised, that's because ReScript is fast!_

This command should compile all `.res` files to their `.bs.js` counterparts.

This means if you have an `src/App.res` file, you should now have `src/App.bs.js`
file too.

You may also notice some compilation artifacts:

- `.bsb.lock`
- `.merlin`
- `lib/bs`

You may want to gitignore all of these:

```
*.bs.js
.bsb.lock
.merlin
lib/bs
```

_If you used our template, it should be done already_.

## Automate compilation of `*.res` files

You have multipes way to not have to think about compilation for your daily
workflow

## Compile ReScript files via IDE

To get the best development experience possible, we recommend you to use
[VSCode](https://code.visualstudio.com) with
[ReScript plugin](https://marketplace.visualstudio.com/items?itemName=chenglou92.rescript-vscode)
extension. Optionally you can add
[Flow Language Server](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
extension if you have existing JavaScript covered by Flow.

⚠️ If you don’t want to use VSCode, we still recommend you to
[get a ReScript editor plugin](https://rescript-lang.org/docs/manual/latest/editor-plugins).

🎉 **By having an IDE that handle ReScript compilation, you will not have to run a
command in the terminal** to handle this & will just have to follow the standard
React Native workflow, your ReScript files being compiled to JavaScript.

_You will also have inline errors & much more feature that won't be provided by
using a CLI workflow._

## Vscode workflow

When you open VSCode with the ReScript plugin, you won't have to do anything.
The plugin will detect ReScript & will offer you to handle compilation by just clicking a button.

![VSCode ReScript plugin](/usage/vscode-alert.png)

⛑ _Even if you decide to use Vscode or a smiliar IDE to ease your day to day
development workflow, you should have a look to CLI workflow so you know how it
works._

### Compile ReScript files via CLI

When you use React Native, you usually always have a terminal opened around with
Metro Bundler running, which bundle the JavaScript files.

Now you need to also have a process watching for your ReScript files to compile
then to JavaScript. The easiest way is to rely on ReScript `rescript` watch
option `-w`:

```console
npm run rescript build -w
```

If you are not familiar with ReScript `rescript` you should know that you might
sometimes have weird compilation errors due to outdated build artifacts. This
should not happen often but in case you are facing something weird, you can try
using `rescript` `clean` option

```console
npm run rescript clean
```

You might want to add this two commands in your `package.json` scripts:

```json
  "scripts": {
    "res:clean": "rescript clean",
    "res:build": "rescript build",
    "res:watch": "rescript build -w",
    "start": "react-native start",
    "ios": "react-native run-ios",
    "android": "react-native run-android",
  }
```

_Note: you probably have `start` already._

If you are doing this change in your scripts, you can now use this development
workflow

#### CLI Development workflow

**In one terminal:**

```console
npm run res:watch
```

As soon as `.res` files are being compiled to `.bs.js`, you can either start the
project on _iOS Simulator_ (included in _Xcode_) or an Android Emulator (if you
are unfamiliar with _Android Studio_, you might be interested by
[Genymotion](https://www.genymotion.com)).

**In another terminal:**

```console
npm run ios
```

or

```console
npm run android
```

This commands should open up a virtual device & start React Native
[metro bundler](https://github.com/facebook/metro). This packager will serves
the compiled ReScript code to the React Native client.

Now you can start coding by editing files in `src/`!

[Read more about starting the project in your environment of choice](https://reactnative.dev/docs/getting-started).

**Note: as soon as you have the app installed in a simulator/emulator, you can
just run**

```console
npm start
```

This avoid rebuilding the entire native parts & will just start React Native
metro bundler.

---

## Interoperability with JavaScript

### Using JavaScript components from Reason

Check out
[ReScript _Import from/Export to JS_ page](https://rescript-lang.org/docs/manual/latest/import-from-export-to-js).

You can also browse the source of
[rescript-react-native](https://github.com/rescript-react-native/rescript-react-native/tree/main/src)
because that's exactly what this project is doing!

### Using ReScript React Native components from JavaScript

Check out
[ReScript _Import from/Export to JS_ page](https://rescript-lang.org/docs/manual/latest/import-from-export-to-js)
