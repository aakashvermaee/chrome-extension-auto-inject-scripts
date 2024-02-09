import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import {
  chromeExtension,
  simpleReloader,
} from "rollup-plugin-chrome-extension";
import { uglify } from "rollup-plugin-uglify";

import copy from "./plugins/rollup-plugin-copy.mjs";

export default {
  input: "src/manifest.json",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    // always put chromeExtension() before other plugins
    chromeExtension(),
    simpleReloader(),
    // the plugins below are optional
    resolve(),
    commonjs(),
    copy(),
    uglify(),
  ],
};
