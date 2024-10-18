<script setup lang="ts">
import { ref, computed } from "vue";
import NewsOverviewPageArticle from "~/components/NewsPage/NewsOverviewPageArticle.vue";

const { data: posts } = await useAsyncData("all-posts", () =>
  queryContent("/news")
    .where({ type: { $eq: "post" }, published: { $eq: true } })
    .sort({ date: -1 })
    .find()
);

const tags = computed(() => {
  const allTags = posts.value?.flatMap((post) => post.tags || []);
  return [...new Set(allTags)]; // Get unique tags
});

const selectedTag = ref("All posts");

const filteredPosts = computed(() => {
  if (selectedTag.value === "All posts") {
    return posts.value ?? [];
  }
  return posts.value?.filter((post) => post.tags?.includes(selectedTag.value));
});
</script>

<template>
  <div class="chips-row">
    <Chip
      v-for="tag in ['All posts', ...tags]"
      :key="tag"
      :class="{ active: selectedTag === tag }"
      @click="selectedTag = tag"
    >
      {{ tag }}
    </Chip>
  </div>
  <div class="news-grid">
    <NewsOverviewPageArticle
      v-for="post in filteredPosts ?? []"
      :key="post._path"
      :post="{
        title: post.title,
        description: post.description,
        image: post.image,
        url: post._path,
        date: post.date,
        author: post.author,
        authorImage: post.authorImage,
      }"
    />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.chips-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.chip {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;
  transition: background-color 0.2s ease;

  &.active {
    background-color: #ffffff;
    color: #000000;
  }
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @include mixins.tablet-and-smaller {
    grid-template-columns: 1fr 1fr;
  }

  @include mixins.mobile-and-smaller {
    grid-template-columns: 1fr;

    & > :first-child {
      grid-column: 1;
    }
  }
}
</style>
