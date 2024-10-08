<script setup lang="ts">
const { title, description, image, url, vertical, alternateHorizontalLayout } =
  defineProps<{
    title: string;
    description: string;
    image: string;
    url: string;
    vertical?: boolean;
    alternateHorizontalLayout?: boolean;
  }>();

const classes = computed(() => ({
  "main-page-news-article--vertical": vertical,
  "main-page-news-article--alternate-horizontal-layout":
    alternateHorizontalLayout,
}));

const seed = useId();
</script>

<template>
  <article :class="classes" class="main-page-news-article">
    <img
      :src="`https://picsum.photos/seed/${seed}/1280/720`"
      alt="News article image"
      class="main-page-news-article-image"
    />
    <SectionTitle :small="vertical" class="main-page-news-article-title">
      {{ title }}
    </SectionTitle>
    <SectionDescription class="main-page-news-article-text">
      {{ description }}
    </SectionDescription>
    <LinkButton :href="url" class="main-page-news-article-button">
      Read post
      <Icon name="arrow" />
    </LinkButton>
  </article>
</template>

<style scoped lang="scss">
.main-page-news-article {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
  border: 1px solid #191919;
  border-radius: 16px;
  padding: 10px;

  &-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 8px;
    overflow: hidden;
    grid-row: 1 / span 3;
  }

  &-title {
    margin: 5px 5px 5px 15px;
  }

  &-text {
    justify-self: start;
    margin-left: 15px;
  }

  &-button {
    justify-self: end;
    align-self: end;
    margin-top: 10px;
  }

  &--vertical {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
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

  &--alternate-horizontal-layout &-title {
    font-size: 20px;
  }
}
</style>
