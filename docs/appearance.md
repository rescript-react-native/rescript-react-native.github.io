---
id: appearance
title: Appearance
officialDoc: https://reactnative.dev/docs/appearance
---

`Appearance` exposes information about the preferred color scheme (light or
dark).

## Types

### `t`

```rescript
type t = [#dark | #light]
```

Returned from `getColorScheme` / `useColorScheme` as `option<t>` (`None` when no
preference is available).

```rescript
Appearance.getColorScheme() == Some(#dark)
```

## Methods

### `getColorScheme`

Query the current preferred color scheme. Note that the preference may be
updated later, either through user action or automatically.

```rescript
getColorScheme: unit => option<t>
```

### `useColorScheme`

Query the current preferred color scheme and subscribe to updates (React hook).

```rescript
useColorScheme: unit => option<t>
```

### `setColorScheme`

Force the app color scheme.

```rescript
setColorScheme: t => unit
```

### `addChangeListener`

Subscribe to appearance changes. Returns an
[`EventSubscription`](/docs/eventsubscription).

```rescript
addChangeListener: (unit => unit) => EventSubscription.t
```
