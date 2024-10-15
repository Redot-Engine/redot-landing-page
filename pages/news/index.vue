<script setup lang="ts">
import NewsOverviewPage from "~/components/NewsPage/NewsOverviewPage.vue";
</script>

<template>
  <Header always-opaque />

  <MaxWidthContainer class="news-page-sections">
    <div class="header">
      <div class="section-title-text">News</div>
    </div>
    <NewsOverviewPage />
  </MaxWidthContainer>

  <Footer />
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.news-page-sections {
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