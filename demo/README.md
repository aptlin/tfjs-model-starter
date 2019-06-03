# model-name Demo

## Setup

`cd` into the demo/ folder:

```sh
cd model-name/demo
```

Install dependencies:

```sh
yarn
```

Launch a development server, and watch files for changes. This command will also automatically open
the demo app in your browser.

```sh
yarn watch
```

## If you are developing the model locally and want to test the changes in the demo

`cd` into the `model-name/` folder:

```sh
cd model-name
```

Install dependencies:
```sh
yarn
```

Publish coco-ssd locally:
```sh
yarn publish-local
```

`cd` into this directory (model-name/demo) and install dependencies:

```s
cd demo
yarn
```

Link the package published from the publish step above:
```sh
yarn link-local
```

Start the dev demo server:
```sh
yarn watch
```

To get future updates from the `model-name` source code, just run `yarn publish-local` in the model-name/
folder again.