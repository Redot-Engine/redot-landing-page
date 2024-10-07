<script setup lang="ts">
const isMobile = useIsMobile();
</script>

<template>
  <MainPageSection title="Recent news">
    <template #button>
      <LinkButton href="#" type="red">
        More news
        <Icon name="arrow"/>
      </LinkButton>
    </template>

    <div class="news-grid">
      <MainPageNewsArticle :vertical="isMobile"  />
      <MainPageNewsArticle :vertical="!isMobile" :alternate-horizontal-layout="isMobile" />
      <MainPageNewsArticle :vertical="!isMobile" :alternate-horizontal-layout="isMobile" />
      <MainPageNewsArticle :vertical="!isMobile" :alternate-horizontal-layout="isMobile" />
      <MainPageNewsArticle :vertical="!isMobile" :alternate-horizontal-layout="isMobile" />
    </div>
  </MainPageSection>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.news-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  & > :first-child {
    grid-column: span 4;
  }

  @include mixins.mobile-and-smaller {
    grid-template-columns: 1fr;

    & > :first-child {
      grid-column: 1;
    }
  }
}
</style>
