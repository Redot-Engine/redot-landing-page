// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  site: {
    url: "https://www.redotengine.org/",
    name: "Redot Engine",
  },
  ssr: true,
  modules: ["@nuxt/content", "@nuxtjs/seo"],
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
