<script setup lang="ts">
const { title, tags, author, authorImage, date, image } = defineProps<{
  title: string;
  tags: string[];
  author: string;
  authorImage: string;
  date: string;
  image: string;
}>();

const dateString = ref("");

onMounted(() => {
  dateString.value = new Date(date).toLocaleDateString();
});
</script>

<template>
  <div class="news-article-page-splash">
    <img :src="image" alt="" class="news-article-page-splash__banner">

    <div class="news-article-page-splash__info">
      <div class="news-article-page-splash__tags">
        <Chip
          v-for="tag in tags"
          :key="tag"
          class="news-article-page-splash__tag"
        >
          {{ tag }}
        </Chip>
      </div>

      <h1 class="news-article-page-splash__title">
        {{ title }}
      </h1>

      <div class="news-article-page-splash__author-info">
        <img
          :alt="`${author} avatar`"
          :src="authorImage"
          class="news-article-page-splash__avatar"
        >
        <div class="news-article-page-splash__username">{{ author }}</div>
        <div class="news-article-page-splash__date">{{ dateString }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-article-page-splash {
  margin: 0px auto;

  &__banner {
    width: 100%;
    border-radius: 20px;
    max-height: 600px;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }

  &__info {
    padding: 0rem;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  &__tag {
    background-color: rgb(34, 36, 38);
    border-radius: 12px;
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
    color: rgb(200, 195, 188);
  }

  &__title {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  &__author-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #666;
  }

  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  &__username,
  &__date {
    color: rgb(174, 167, 156);
  }
}
</style>
