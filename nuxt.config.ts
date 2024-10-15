// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  site: {
    url: "https://www.redotengine.org/",
    name: "Redot Engine: Open source game engine for everyone.",
  },
  modules: ["@nuxt/content", "@nuxtjs/sitemap"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
