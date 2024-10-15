// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/sitemap"],
  image: {
    format: ["avif", "webp"],
    quality: 80,
  },
  site: {
    url: "https://www.redotengine.org/",
    name: "Redot Engine: Open source game engine for everyone.",
  },
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
