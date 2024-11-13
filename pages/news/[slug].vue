<script setup lang="ts">
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () =>
  queryContent().where({ _path: path }).findOne(),
);

if (!data.value) navigateTo("/404");

useHead(
  data.value?.title
    ? {
        title: data.value?.title,
        meta: [
          {
            name: "description",
            content:
              // eslint-disable-next-line no-constant-binary-expression
              `Redot Engine Dowload Page for ${data.value?.description}` ||
              "Read about Redot Engine News",
          },
        ],
      }
    : {
        title: "Redot Engine News",
        meta: [
          {
            name: "description",
            content: "Read about Redot Engine News",
          },
        ],
      },
);

useSeoMeta({
  ogType: "website",
  ogTitle: data.value?.title || "Redot Engine News",
  ogImage: "https://www.redotengine.org/img/seo/banner.avif",
  ogDescription: data.value?.description || "Read about Redot Engine News",
  twitterCard: "summary_large_image",
  twitterTitle: data.value?.title || "Redot Engine News",
  twitterDescription: data.value?.description || "Read about Redot Engine News",
  twitterImage: "https://www.redotengine.org/img/seo/banner.avif",
});
</script>
<template>
  <Header always-opaque />

  <MaxWidthContainer class="news-page-sections">
    <NuxtLink aria-label="back" class="back-button" href="/news">
      <Icon name="arrow" />
      All news
    </NuxtLink>

    <NewsArticlePageSplash
      :author="data?.author!"
      :author-image="data?.authorImage!"
      :date="data?.date!"
      :image="data?.image!"
      :tags="data?.tags!"
      :title="data?.title!"
    />

    <NewsArticlePageContent :body="data?.body!" />
  </MaxWidthContainer>

  <Footer />
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.news-page-sections {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
  margin-top: 56px;
  margin-left: auto;
  margin-right: auto;

  @include mixins.mobile-and-smaller {
    gap: 20px;
  }
}

.back-button {
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  gap: 10px;
  opacity: 0.6;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  color: #fff;
  font-size: 13px;
  text-decoration: none;

  :deep(.icon) {
    transform: rotate(180deg);
  }
}
</style>
