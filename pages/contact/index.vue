<script setup lang="ts">
useHead({
  title: "Redot Engine Contact",
  meta: [{ name: "description", content: "Detail about Redot Engine Contact" }],
});

useSeoMeta({
  ogType: "website",
  ogTitle: "Redot Engine Contact",
  ogImage: "https://www.redotengine.org/img/seo/banner.avif",
  ogDescription: "Detail about Redot Engine Contact",
  twitterCard: "summary_large_image",
  twitterTitle: "Redot Engine Contact",
  twitterDescription: "Detail about Redot Engine Contact",
  twitterImage: "https://www.redotengine.org/img/seo/banner.avif",
});
</script>
<template>
  <Header always-opaque />
  <MaxWidthContainer class="page-container">
    <div class="header">
      <h1 class="section-title-text">Contact</h1>
    </div>
    <ContentDoc />
  </MaxWidthContainer>
  <Footer />
</template>
<style scoped lang="scss">
@use "@/assets/styles/mixins";

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.page-container {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 56px;
  color: #fff;
  font-size: 16px;

  :deep(img) {
    width: 100%;
    height: auto;
    display: block;
    margin: 20px auto;
    max-width: 700px;
  }

  :deep(h1) {
    font-size: 32px;
    font-weight: 800;
    margin: 20px 0;
  }

  :deep(h2) {
    font-size: 25px;
    font-weight: 800;
    margin: 20px 0;
  }

  :deep(h3) {
    font-size: 20px;
    font-weight: 800;
    margin: 20px 0;
  }

  :deep(h4) {
    font-size: 17px;
    font-weight: 800;
    margin: 20px 0;
  }

  :deep(h5) {
    font-size: 15px;
    font-weight: 800;
    margin: 20px 0;
  }

  :deep(p) {
    margin-bottom: 20px;
  }

  :deep(a) {
    color: #3388ff;
    font-weight: bold;
  }

  :deep(h2 a) {
    color: white;
    font-weight: bold;
  }

  :deep(h3 a) {
    color: white;
    font-weight: bold;
  }

  :deep(ul) {
    margin-left: 1.5rem;
    list-style-type: circle;
  }

  :deep(li) {
    margin-bottom: 1rem;
  }
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
