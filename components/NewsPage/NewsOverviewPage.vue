<script setup lang="ts">
import NewsOverviewPageArticle from "~/components/NewsPage/NewsOverviewPageArticle.vue";

const { data: posts } = await useAsyncData("recent-posts", () =>
    queryContent("/news")
        .where({ type: { $eq: "post" }, published: { $eq: true } })
        .sort({ date: -1, index: 1 })
        .find(),
);
</script>

<template>
  <div class="news-grid">
    <NewsOverviewPageArticle
      v-for="(post) in posts ?? []"
      :key="post._path"
      :post="{
        title: post.title,
        description: post.description,
        image: post.image,
        url: post._path,
        date: post.date,
        author: post.author,
        authorImage: post.authorImage
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
}

.news-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;

  @include mixins.tablet-and-smaller {
    grid-template-columns: auto auto;
  }

  @include mixins.mobile-and-smaller {
    grid-template-columns: auto;

    & > :first-child {
      grid-column: 1;
    }
  }
}
</style>