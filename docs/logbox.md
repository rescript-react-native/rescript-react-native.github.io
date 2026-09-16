---
id: logbox
title: LogBox
officialDoc: https://reactnative.dev/docs/debugging#logbox
---

Errors and warnings in development builds are displayed in LogBox inside your
app.

> LogBox is automatically disabled in release (production) builds.

## `ignoreLogs`

Ignore logs whose message starts with one of the given prefixes (or matches a
regex).

```rescript
ignoreLogs: array<string> => unit
ignoreLogsRegex: array<RegExp.t> => unit
```

```rescript
open ReactNative

LogBox.ignoreLogs([
  "Require cycle:",
  "Remote debugger",
  "Accessing view manager configs",
])
```

## `ignoreAllLogs`

Hide all LogBox notifications (useful for demos). Optionally pass
`~ignore=false` to re-enable.

```rescript
ignoreAllLogs: (~ignore: bool=?) => unit
```

```rescript
LogBox.ignoreAllLogs()
```

**Ignore logs as a last resort and create a task to fix any logs that are
ignored.**
