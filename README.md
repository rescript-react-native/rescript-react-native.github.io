# rescript-react-native.github.io

Website for rescript-react-native

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

Requires **Node.js 18+** (see `.node-version`).

Source lives on the **`src`** branch. GitHub Pages serves the built site from
**`main`**.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory.

## Deployment

### Automatic (recommended)

Push to the **`src`** branch (or run the workflow manually). GitHub Actions
builds the site and publishes `build/` to **`main`** (GitHub Pages).

Workflow: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

### Manual

```console
npm run deploy
```

Requires push access to the repo (SSH recommended). Optional overrides:

```console
GIT_DEPLOY_REPO=git@github.com:rescript-react-native/rescript-react-native.github.io.git \
GIT_USER_NAME="Your Name" \
GIT_USER_EMAIL="you@example.com" \
npm run deploy
```

> Do not use `docusaurus deploy` / a `gh-pages` branch for this repo — Pages is
> configured on `main`.

---

## Contribute

Read the [contribution guidelines](https://github.com/rescript-react-native/.github/blob/main/CONTRIBUTING.md) before contributing.

## Code of Conduct

We want this community to be friendly and respectful to each other. Please read
[our full code of conduct](https://github.com/rescript-react-native/.github/blob/main/CODE_OF_CONDUCT.md) so that you can understand what
actions will and will not be tolerated.
