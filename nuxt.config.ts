// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false,
    viewTransition: true,
  },
  build: {
    transpile: ["gsap"],
    analyze: process.env.ANALYZE === "true",
  },

  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/fonts", "@nuxt/eslint", "@nuxt/test-utils", "@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  // plugins/performance.client.ts
 
  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./assets/icons",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["vue", "vue-router"],
            lodash: ["lodash-es"],
            gsap: ["gsap"],
            ui: ["@nuxt/ui"],
          },
        },
      },
      target: "esnext",
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === "production",
          drop_debugger: process.env.NODE_ENV === "production",
        },
      },
    },
  },
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
    storage: {
      redis: {
        driver: "redis",
      },
    },
    routeRules: {
      "/": { prerender: true },
      "/api/**": {
        headers: {
          "Cache-Control": "max-age=300",
        },
      },
    },
  },
  image: {
    format: ["webp", "avif"],
    quality: 80,
    densities: [1, 2],
    sizes: "100vw sm:50vw md:400px",
    presets: {
      avatar: {
        modifiers: {
          format: "webp",
          width: 150,
          height: 150,
        },
      },
      card: {
        modifiers: {
          format: "webp",
          width: 400,
          height: 300,
          quality: 75,
        },
      },
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "preconnect", href: "https://api.yourdomain.com" },

        { rel: "dns-prefetch", href: "https://analytics.google.com" },
        { rel: "dns-prefetch", href: "https://www.google-analytics.com" },

        { rel: "preload", href: "/fonts/inter-var.woff2", as: "font", type: "font/woff2", crossorigin: "" },
        { rel: "preload", href: "/css/critical.css", as: "style" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Your App Name",
            description: "Your app description",
          }),
        },
      ],
    },
  },
});
