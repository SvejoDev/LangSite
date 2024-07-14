import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    paraglide({
      // recommended
      project: "./project.inlang",
      outdir: "./src/lib/paraglide",
    }),
    sveltekit(),
  ],
  resolve: {
    alias: {
      "@assets": "/src/assets", // Lägg till en alias för assets
    },
  },
  server: {
    fs: {
      allow: ["src"],
    },
  },
});
