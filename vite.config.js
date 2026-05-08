import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  server: {
    open: true,
    host: "0.0.0.0",
    port: 8100,
  },
});
