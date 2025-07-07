// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false,
    viewTransition: true
  },
  build: {
    transpile: ['gsap'] 
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/fonts", "@nuxt/eslint", "@nuxt/test-utils", "@nuxtjs/tailwindcss", '@nuxt/image'],
  css: ["~/assets/css/main.css"],
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './assets/icons'
    }]
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            lodash: ['lodash-es']
          }
        }
      }
    }
  },
  nitro: {
    compressPublicAssets: true,
    minify: true,
    storage: {
      redis: {
        driver: 'redis',
        // Configure Redis for caching if available
      }
    }
  },
  image: {
    format: ['webp', 'avif'],
    quality: 80,
    densities: [1, 2],
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 150,
          height: 150
        }
      }
    }
  },
});