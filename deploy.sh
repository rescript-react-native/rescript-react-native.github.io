#!/usr/bin/env bash
set -euo pipefail

# Publish the static site from ./build to the GitHub Pages branch (main).
# Source lives on the `src` branch; GitHub Pages serves `main`.

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

if [[ ! -d build ]]; then
  echo "Missing ./build — run \`npm run build\` first (or \`npm run deploy\`)." >&2
  exit 1
fi

GIT_DEPLOY_REPO=${GIT_DEPLOY_REPO:-$(node -e 'process.stdout.write(require("./package.json").repository)')}

# Prefer SSH when the default HTTPS URL is used (typical for local deploys).
if [[ "${GIT_DEPLOY_REPO}" == https://github.com/* ]]; then
  GIT_DEPLOY_REPO="git@github.com:${GIT_DEPLOY_REPO#https://github.com/}"
  GIT_DEPLOY_REPO="${GIT_DEPLOY_REPO%.git}.git"
fi

cd build
rm -rf .git
git init
git checkout -b main
git add -A
git -c user.name="${GIT_USER_NAME:-github-pages}" \
    -c user.email="${GIT_USER_EMAIL:-github-pages@users.noreply.github.com}" \
    commit -m "Deploy to GitHub Pages"
git push --force "${GIT_DEPLOY_REPO}" main:main

echo "Deployed to ${GIT_DEPLOY_REPO} (main)"
