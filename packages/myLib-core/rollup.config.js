import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import license from "rollup-plugin-license";
import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';
import json from "rollup-plugin-json";
import uglify from "rollup-plugin-uglify";
import path from "path";

import { minify } from "uglify-es";
import { camelCase } from "lodash";

import pkg from './package.json';

// compute globals from dependencies
const globals = pkg.dependencies && Object.assign({}, ...Object.keys(pkg.dependencies).map((key) => ({
  [key]: camelCase(key)
})));

const projectName = "myLib-core";

const builds = {
  // (CommonJS). Used by bundlers e.g. Webpack & Browserify
  cjs: {
    dest: `dist/${projectName}.common.js`,
    format: "cjs",
    env: "development"
  },
  // (ES Modules). Used by bundlers that support ES Modules,
  // e.g. Rollup & Webpack 2+
  esm: {
    dest: `dist/${projectName}.esm.js`,
    format: "es",
    env: "development"
  },
  // dev build (Browser)
  "umd-dev": {
    dest: `dist/${projectName}.js`,
    format: "umd",
    env: "development"
  },
  // production build (Browser)
  "umd-prod": {
    dest: `dist/${projectName}.min.js`,
    format: "umd",
    env: "production"
  }
};

function genConfig(name) {
  const opts = builds[name];
  const config = {
    input: "src/index.ts",
    external: (id) => pkg.dependencies && pkg.dependencies[id], // exclude dependencies from build
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
        preferBuiltins: false,
        extensions: [".ts", ".json", ".vue"]
      }),
      commonjs(),
      typescript(),
      vue({ compileTemplate: true, css: true }),
      json(),
    ].concat(opts.plugins || []),
    output: {
      exports: "named",
      file: opts.dest,
      format: opts.format,
      // define globals in window from external dependencies
      globals,
      name: opts.moduleName || projectName
    },
  }
  if (opts.env) {
    config.plugins.push(
      replace({
        "process.env.NODE_ENV": JSON.stringify(opts.env),
        "__VERSION__": pkg.version,
      })
    );

    // minify on production targets
    if (opts.env === "production") {
      config.plugins.push(uglify({}, minify));
    }
  }

  // output a license to builds
  config.plugins.push(
    license({
      sourceMap: true,
      banner: {
        file: path.resolve("LICENSE.md")
      }
    })
  );
  return config;
}

const target = process.env.TARGET || "esm";
export default genConfig(target);

