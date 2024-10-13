<script setup lang="ts">
import MainPageFeatures from "~/components/MainPage/MainPageFeatures.vue";
</script>

<template>
  <MainPageHero />

  <MaxWidthContainer class="main-page-sections">
    <MainPageNews />
    <MainPageFeatures />
    <MainPageGetInvolved />
    <MainPageImprove />
  </MaxWidthContainer>

  <Footer />
</template>

<style scoped>
.main-page-sections {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 80px 0;
}
</style>
