#!/bin/bash
set -e

if [[ "x$TRAVIS_TAG" == "x" ]]; then
  echo "Not deploying docs."
  exit 0
fi

cd doc

git init .
git config user.name "Simon Menke"
git config user.email "simon.menke@gmail.com"
git add .
git commit -m "Deployed to Github Pages for release $TRAVIS_TAG"
git push --force --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" master:gh-pages
