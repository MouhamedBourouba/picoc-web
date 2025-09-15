import terser from "@rollup/plugin-terser";

export default {
  input: "index.mjs",
  treeshake: false,
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
    {
      file: "dist/bundle.iife.js",
      format: "iife",
      name: "picocjs",
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      name: "picocjs",
    },
  ],
  plugins: [
    terser({
      format: {
        comments: false,
      },
      compress: {
        drop_console: true, // strip console.log in prod
        drop_debugger: true,
      },
    }),
  ],
};
