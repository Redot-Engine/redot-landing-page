<script setup lang="ts">
const { title, description, url, vertical, image, alternateHorizontalLayout, smallLayout } =
  defineProps<{
    title: string;
    description: string;
    image: string;
    url: string;
    vertical?: boolean;
    alternateHorizontalLayout?: boolean;
    smallLayout?: boolean;
  }>();

const classes = computed(() => ({
  "main-page-news-article--vertical": vertical,
  "main-page-news-article--alternate-horizontal-layout":
    alternateHorizontalLayout,
  "main-page-news-article--small-layout": smallLayout,
}));
</script>

<template>
  <NuxtLink
    :class="classes"
    :href="url"
    aria-label="article-link"
    class="main-page-news-article"
  >
    <img
      :src="image"
      alt="News article image"
      class="main-page-news-article-image"
    >
    <SectionTitle :small="vertical" class="main-page-news-article-title" variant="h2">
      {{ title }}
    </SectionTitle>
    <SectionDescription class="main-page-news-article-text">
      {{ description }}
    </SectionDescription>
  </NuxtLink>
</template>

<style scoped lang="scss">
.main-page-news-article {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
  border: 1px solid rgba(#fff, 10%);
  border-radius: 16px;
  transition: border 0.1s;
  padding: 10px;
  text-decoration: none;

  &:hover {
    border-color: rgba(#fff, 20%);
  }

  &-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 8px;
    overflow: hidden;
    grid-row: 1 / span 3;
  }

  &-title {
    color: #fff;
    margin: 5px 5px 5px 15px;
  }

  &-text {
    justify-self: start;
    margin-left: 15px;
  }

  &--vertical {
    display: flex;
    flex-direction: column;
  }

  &--vertical &-image {
    grid-row: 1;
  }

  &--vertical &-title {
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
  }

  &--vertical &-text {
    margin-left: 5px;
    margin-right: 5px;
  }

  &--alternate-horizontal-layout {
    grid-template-columns: 1fr 2fr;
  }

  &--small-layout &-title {
    font-size: 20px;
  }
}
</style>
