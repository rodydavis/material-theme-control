import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/material-theme-control/",
  worker: {
    format: 'es'
  },
  build: {

    lib: {
      entry: resolve(__dirname, "src/material-theme-control.ts"),
      name: "MaterialThemeControl",
      fileName: (format) => `material-theme-control.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
