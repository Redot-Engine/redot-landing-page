<script setup lang="ts">
const isMobile = useIsMobile();
const featureFlags = useFeatureFlags();

const { data: posts } = await useAsyncData("recent-posts", () =>
  queryContent("/blog")
    .where({ type: { $eq: "post" }, published: { $eq: true } })
    .sort({ date: 1 })
    .limit(5)
    .find(),
);
</script>

<template>
  <MainPageSection title="Recent news">
    <template #button>
      <LinkButton v-show="!featureFlags.minimal" href="#" type="red">
        More news
        <Icon name="arrow" />
      </LinkButton>
    </template>

    <div class="news-grid">
      <MainPageNewsArticle
        v-for="(post, index) in posts ?? []"
        :key="post._path"
        :alternate-horizontal-layout="index === 0 ? !isMobile : isMobile"
        :description="post.description"
        :image="post.image"
        :title="post.title ?? ''"
        :url="post._path ?? ''"
        :vertical="index === 0 ? isMobile : !isMobile"
      />
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
