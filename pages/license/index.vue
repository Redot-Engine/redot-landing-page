<script setup lang="ts">
const { data } = await useAsyncData("license", () =>
  queryContent("/license")
    .where({ type: { $eq: "license" } })
    .findOne(),
);

useHead(
  data.value?.title
    ? {
        title: data.value?.title,
      }
    : {
        title: "Redot Engine License",
      },
);

useSeoMeta({
  ogType: "website",
  ogTitle: data.value?.title || "Redot Engine License",
  ogImage: "https://www.redotengine.org/img/seo/banner.avif",
  ogDescription: "Detail about Redot Engine License",
  twitterCard: "summary_large_image",
  twitterTitle: data.value?.title || "Redot Engine License",
  twitterDescription: "Detail about Redot Engine License",
  twitterImage: "https://www.redotengine.org/img/seo/banner.avif",
});
</script>

<template>
  <Header always-opaque />
  <MaxWidthContainer class="license-page-container">
    <div class="header">
      <h1 class="section-title-text">License</h1>
    </div>
    <LicensePageContent :body="data?.body!" />
  </MaxWidthContainer>
  <Footer />
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.license-page-container {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 56px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.section-title-text {
  display: inline-block;
  font-size: 36px;
  font-weight: 800;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    height: 10px;
    background-color: #fe3f02;
    z-index: -1;
  }

  @include mixins.mobile-and-smaller {
    font-size: 24px;

    &::before {
      height: 6px;
    }
  }
}
</style>
