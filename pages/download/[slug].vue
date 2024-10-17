<template>
  <Header always-opaque />

  <MaxWidthContainer class="container">
    <section class="download-section__container">
      <DownloadPageHero :platform="platform" />
      <DownloadPageThreeSteps />
    </section>
  </MaxWidthContainer>

  <Footer />
</template>

<script setup lang="ts">
const { path } = useRoute();

const platform = computed(() => {
  if (path.startsWith("/download/")) {
    return path.split("/")[2];
  }
  return null;
});
</script>
<style scoped lang="scss">
@use "@/assets/styles/mixins";

.container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5rem 0.5rem 10rem;
  background-color: black;

  @media (min-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.download-section {
  &__container {
    display: flex;
    flex-direction: column;
    row-gap: 5rem;
  }
}
</style>
