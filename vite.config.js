import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const paths = [
  "src",
  "assets",
  "components",
  "mui",
  "hooks",
  "layout",
  "configs",
  "constants",
  "router",
  "pages",
  "scripts",
  "styles",
  "utils",
];

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  resolve: {
    alias: paths.reduce((acc, cur) => {
      acc[cur] = `/${cur === "src" ? cur : "src/" + cur}`;
      return acc;
    }, {}),
  },
});
