# TensorFlow.js Model Starter

A starter pack for implementing mobile-first machine learning models.

## Installation

```bash
# git clone https://github.com/tensorflow/tfjs-models
# cd tfjs-models

export MODEL=model
git clone https://github.com/sdll/tfjs-model-starter.git $MODEL
cd $MODEL
rm -r .git*
```

Replace `model-name` with the name of your model in `package.json` and install dependencies:

```shell
yarn
```

## Setup

- Bundling: [Rollup](./rollup.config.js)
- Formatting: [Prettier](./prettier.config.js)
- Tests: [Jasmine](./run_tests.ts), backed up by the `tfjs-core` utils
