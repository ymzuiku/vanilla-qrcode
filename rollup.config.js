#!/usr/bin/env node

/* eslint-disable no-console */
const rollup = require("rollup");
const rollupTypescript = require("rollup-plugin-typescript2");
const { uglify } = require("rollup-plugin-uglify");
const { resolve } = require("path");
const pwd = (...args) => resolve(process.cwd(), ...args);
const fs = require("fs-extra");
const argv = process.argv.splice(2);
const commonjs = require("@rollup/plugin-commonjs");
const tsconfig = require("./tsconfig.json");

function clearDir(dir) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      fs.remove(`$\{dir}/file`);
    });
  }
}

function haveArgv(...args) {
  let isHave = false;
  args.forEach((str) => {
    argv.forEach((v) => {
      if (v === str) {
        isHave = true;
      }
    });
  });

  return isHave;
}

clearDir(pwd("es"));

const watchOptions = [
  {
    input: "./lib/index.ts",
    output: [{
      file: "./es/index.js",
      format: "es",
      name: "VanillaQRCode",
      sourcemap: false,
    }],
    plugins: [
      rollupTypescript({
        useTsconfigDeclarationDir: false,
      }),
      // uglify(),
      // uglify({
      //   mangle: {
      //     eval: true,
      //   },
      //   sourcemap: false,
      // }),
    ],
  },
];
const watcher = rollup.watch(watchOptions);

// event.code can be one of:
//   START        — the watcher is (re)starting
//   BUNDLE_START — building an individual bundle
//   BUNDLE_END   — finished building a bundle
//   END          — finished building all bundles
//   ERROR        — encountered an error while bundling
//   FATAL        — encountered an unrecoverable error
watcher.on("event", (event) => {
  if (event.code === "ERROR") {
    console.log(event);
  } else if (event.code === "BUNDLE_END") {
    // console.log(event);
    console.log("BUNDLE_END");
  } else if (event.code === "END") {
//     const decode = fs.readFileSync("./decode.js").toString();
//     const out = fs.readFileSync("./umd/index.js").toString();
//     fs.writeFileSync("./umd/index.js", `
// ${decode}
// // decode insert
// ${out}

//     `);

    fs.copyFileSync("./es/index.js", "./example/VanillaQRCode.js");
    console.log('add end')
    if (!haveArgv("--watch", "-w")) {
      watcher.close();
    }
  }
});
