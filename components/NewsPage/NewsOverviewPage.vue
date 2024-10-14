<script setup lang="ts">
import NewsOverviewPageArticle from "~/components/NewsPage/NewsOverviewPageArticle.vue";

const tags = ref(["All posts", "News", "Releases", "Community"]);

const { data: posts } = await useAsyncData("all-news", () =>
    queryContent("/news")
        .where({ type: { $eq: "post" }, published: { $eq: true } })
        .sort({ date: -1 })
        .find(),
);
</script>

<template>
  <div class="chips-row">
    <Chip
      v-for="tag in tags"
      :key="tag"
      :href="`/news?tag=${tag}`"
      as-button
    >
      {{ tag }}
    </Chip>
  </div>
  <div>
    <NewsOverviewPageArticle
      v-for="(post) in posts ?? []"
      :key="post._path"
      :post="{title: post.title, description: post.description, image: post.image }"
    />
  </div>
</template>

<style scoped lang="scss">
.chips-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>