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
  <NuxtLink>
    <img
      :src="post.image"
      alt="News article image"
      class="main-page-news-article-image"
    >
    <SectionTitle>
      {{ post.title }}
    </SectionTitle>
    <SectionDescription>
      {{ post.description }}
    </SectionDescription>
  </NuxtLink>
</template>

<style scoped lang="scss">

</style>