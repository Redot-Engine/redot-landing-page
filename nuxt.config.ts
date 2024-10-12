// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    link: [
      { rel: "preload", as: "image", href: "~/assets/images/game_preview/game_preview_01.avif" },
      { rel: "preload", as: "image", href: "~/assets/images/game_preview/game_preview_02.avif" },
      { rel: "preload", as: "image", href: "~/assets/images/game_preview/game_preview_03.avif" },
    ],
  },
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
