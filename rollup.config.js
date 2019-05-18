import node from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import uglify from "rollup-plugin-uglify";
import configuration from "package.json";

const settings = configuration["model"];

function minify() {
  return uglify({
    output: {
      preamble: settings["preamble"]
    }
  });
}

function config({ plugins = [], output = {} }) {
  return {
    input: "src/index.ts",
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            module: "ES2015"
          }
        }
      }),
      node(),
      ...plugins
    ],
    output: {
      banner: settings["preamble"],
      globals: {
        "@tensorflow/tfjs": "tf"
      },
      ...output
    },
    external: ["@tensorflow/tfjs"]
  };
}

export default [
  config({
    output: {
      format: "umd",
      name: settings["name"],
      file: `dist/${settings["name"]}.js`
    }
  }),
  config({
    plugins: [minify()],
    output: {
      format: "umd",
      name: "cocoSsd",
      file: `dist/${settings["name"]}.min.js`
    }
  }),
  config({
    plugins: [minify()],
    output: {
      format: "es",
      file: `dist/${settings["name"]}.esm.js`
    }
  })
];
