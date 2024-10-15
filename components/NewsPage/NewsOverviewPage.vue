<script setup lang="ts">
import NewsOverviewPageArticle from "~/components/NewsPage/NewsOverviewPageArticle.vue";
import type { NewsArticle } from "~/types/NewsArticle";

const posts = ref<NewsArticle[]>([]);

async function fetchPostsByTag(tag: string) {
  const query = queryContent("/news")
      .where({ type: { $eq: "post" }, published: { $eq: true } })
      .sort({ date: -1, index: 1 });

  // Filter by the selected tag if it's not "All posts"
  if (tag !== "All posts") {
    query.where({ tags: { $in: tag } });
  }

  const data = await query.find();

  posts.value = data ? data.map(d => ({
    title: d.title!,
    image: d.image!,
    url: d._path!,
    description: d.description!,
    authorImage: d.authorImage!,
    author: d.author!,
    date: d.date!,
  })) : [];
}

const route = useRoute();

onMounted(() => {
  const tagFromQuery = route.query.tag as string || "All posts";
  fetchPostsByTag(tagFromQuery);
});

watch(() => route.query.tag, (newTag) => {
  const tag = newTag as string || "All posts";
  fetchPostsByTag(tag);
});
</script>

<template>
  <div class="news-grid">
    <NewsOverviewPageArticle
      v-for="(post) in posts ?? []"
      :key="post.url"
      :post="{
        title: post.title,
        description: post.description,
        image: post.image,
        url: post.url,
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