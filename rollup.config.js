import terser from "@rollup/plugin-terser";

export default {
  input: "index.js",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
    {
      file: "dist/bundle.js",
      format: "iife",
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
