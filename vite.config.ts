import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { rootGraphHtml } from "./src/lib/schemaCatalog";

/** Injeta o grafo raiz de schema.org (Organization/LocalBusiness/Person +
 *  catálogo Service/Product) no lugar do sentinela <!--@schema-root--> em
 *  index.html. Roda em dev e build — dist/index.html é o shell congelado
 *  que scripts/prerender.ts serve pra toda navegação (ver CLAUDE.md deste
 *  repo), então isto garante que todo snapshot carrega o grafo completo. */
function schemaGraphPlugin(): Plugin {
  return {
    name: "br-aco-schema-graph",
    transformIndexHtml(html) {
      // Replacer como função (não string): evita que padrões especiais de
      // String.replace (ex. "$$" → "$" literal) corrompam o JSON injetado —
      // foi assim que "priceRange":"$$" virou "$" na primeira versão disto.
      return html.replace("<!--@schema-root-->", () => rootGraphHtml());
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: parseInt(process.env.PORT || '8080'),
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), schemaGraphPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Improve LCP and INP by splitting heavy vendor libraries into separate chunks.
    // React Router and UI vendor (lucide-react, radix) are loaded in parallel with
    // the app shell, reducing main-thread blocking time.
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
          'radix-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip',
          ],
        },
      },
    },
    // Inline small assets (<4KB) instead of separate requests
    assetsInlineLimit: 4096,
  },
}));
