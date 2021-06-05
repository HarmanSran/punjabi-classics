[![Linting and Tests](https://github.com/HarmanSran/punjabi-classics/actions/workflows/test.yml/badge.svg)](https://github.com/HarmanSran/punjabi-classics/actions/workflows/test.yml)

# Overview
Compilation of translations of various Punjabi songs, poems, and spiritual verses.

# Demo
Live demo: https://harmansran.github.io/punjabi-classics/

# Adding new lyrics
1. Add JSON file (follow JSON shape in `public/data/`)
2. Add name of JSON to `LYRIC_FILE_PATHS` in `AppContainer.js`

# Continuous Testing
Testing (jest) and linting (eslint) workflow configured out of the box (see `<ROOT>/.github/workflows/test.yml`).

# Deployment
Github Pages deployment has already been configured and works out of the box.

To trigger a production build, and deploy to Github Pages, run from root:
```
npm run deploy
```
