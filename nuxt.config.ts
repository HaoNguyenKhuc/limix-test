// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
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
  },
});
