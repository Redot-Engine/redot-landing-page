// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    link: [
      { rel: "preload", as: "image", href: "~/assets/images/game_preview/game_preview_01.avif" },
      { rel: "preload", as: "image", href: "~/assets/images/game_preview/game_preview_02.avif" },
      { rel: "preload", as: "image", href: "~/assets/images/game_preview/game_preview_03.avif" },
      { rel: "preload", as: "image", href: "~/assets/images/game_preview/game_preview_05.png" },
      { rel: "preload", as: "image", href: "~/assets/images/game_preview/game_preview_06.png" },
      { rel: "preload", as: "image", href: "~/assets/images/game_preview/game_preview_07.png" },
    ],
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/content"],
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
