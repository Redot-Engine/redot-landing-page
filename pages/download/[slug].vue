<script setup lang="ts">
const { path } = useRoute();

const platform = computed(() => {
  const platformFromPath = path.startsWith("/download/")
    ? path.split("/")[2]
    : null;
  return platformFromPath ? platformFromPath.toLowerCase() : null;
});

useHead(
  platform
    ? {
        title: `Download Redot Engine - ${platform.value}`,
        meta: [
          {
            name: "description",
            content: `Redot Engine Dowload Page for ${platform.value}`,
          },
        ],
      }
    : {
        title: "Download Redot Engine",
        meta: [
          {
            name: "description",
            content: "Redot Engine Dowload Page",
          },
        ],
      }
);

useSeoMeta(
  platform
    ? {
        ogType: "website",
        ogTitle: `Download Redot Engine - ${platform.value}`,
        ogImage: "https://www.redotengine.org/img/seo/banner.avif",
        ogDescription: `Redot Engine Dowload Page for ${platform.value}`,
        twitterCard: "summary_large_image",
        twitterTitle: `Download Redot Engine - ${platform.value}`,
        twitterDescription: `Redot Engine Dowload Page for ${platform.value}`,
        twitterImage: "https://www.redotengine.org/img/seo/banner.avif",
      }
    : {
        ogType: "website",
        ogTitle: "Download Redot Engine",
        ogImage: "https://www.redotengine.org/img/seo/banner.avif",
        ogDescription: "Redot Engine Dowload Page",
        twitterCard: "summary_large_image",
        twitterTitle: "Download Redot Engine",
        twitterDescription: "Redot Engine Dowload Page",
        twitterImage: "https://www.redotengine.org/img/seo/banner.avif",
      }
);
</script>
<style scoped lang="scss">
@use "@/assets/styles/mixins";

.container {
  padding-top: 40px;
  padding-bottom: 84px;
  margin-top: 56px;
}

.download-section {
  &__container {
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
  }
}
</style>

<template>
  <Header always-opaque />

  <MaxWidthContainer class="container">
    <section class="download-section__container">
      <DownloadPageHero :platform="platform" />
      <DownloadPageThreeSteps />
      <DownloadPageSupportedPlatforms />
      <DownloadPageSection />
    </section>
  </MaxWidthContainer>

  <Footer />
</template>
