<script setup lang="ts">
useHead({
  titleTemplate: (title) =>
    title
      ? `${title} · Redot Engine`
      : "Redot Engine: Open source game engine for everyone.",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content: "Open source game engine for everyone. No strings attached.",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  ogType: "website",
  ogTitle: "Redot Engine",
  ogImage: "https://www.redotengine.org/img/seo/banner.png",
  twitterCard: "summary_large_image",
  twitterTitle: "Redot Engine",
  twitterDescription:
    "Open source game engine for everyone. No strings attached.",
  twitterImage: "https://www.redotengine.org/img/seo/banner.png",
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
@import "@/assets/styles/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.2;
  color: #fff;
  background: #000;
}
</style>
