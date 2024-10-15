<script setup lang="ts">
const { post } =
    defineProps<{
      post: Partial<{
        title: string;
        image: string;
        url: string;
        description: string;
      }>
    }>();
</script>

<template>
  <NuxtLink :href="post.url ?? '#'" class="news-article">
    <img
      :src="post.image"
      alt="News article image"
      class="news-article-image"
    >
    <SectionTitle class="news-article-title">
      {{ post.title }}
    </SectionTitle>
    <SectionDescription class="news-article-text">
      {{ post.description }}
    </SectionDescription>
  </NuxtLink>
</template>

<style scoped lang="scss">

.news-article {
  display: grid;
  grid-template-rows: auto auto auto;
  border: 1px solid rgba(#fff, 10%);
  border-radius: 16px;
  transition: border 0.1s;
  padding: 10px;
  text-decoration: none;
  color: #fff;

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
}
</style>