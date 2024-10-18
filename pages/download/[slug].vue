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

<script setup lang="ts">
const { path } = useRoute();

const platform = computed(() => {
  const platformFromPath = path.startsWith("/download/") ? path.split("/")[2] : null;
  return platformFromPath ? platformFromPath.toLowerCase() : null;
});
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
