<script setup lang="ts">
const {vertical} = defineProps<{ vertical?: boolean; }>();

const verticalClass = computed(() => vertical ? "main-page-news-article--vertical" : "");

const seed = Math.random();
</script>

<template>
  <article :class="verticalClass" class="main-page-news-article">
    <img :src="`https://picsum.photos/seed/${seed}/1280/720`" alt="News article image" class="main-page-news-article-image"/>
    <SectionTitle
        :small="vertical"
        class="main-page-news-article-title"
    >
      Redot achieves a big milestone!
    </SectionTitle>
    <SectionDescription class="main-page-news-article-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
    </SectionDescription>
    <LinkButton href="#" class="main-page-news-article-button">
      Read post
      <Icon name="arrow"/>
    </LinkButton>
  </article>
</template>

<style scoped>
.main-page-news-article {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
  border: 1px solid #191919;
  border-radius: 16px;
  padding: 10px;
}

.main-page-news-article-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
  grid-row: 1 / span 3;
}

.main-page-news-article-title {
  margin: 5px 5px 5px 15px;
}

.main-page-news-article-text {
  justify-self: start;
  margin-left: 15px;
}

.main-page-news-article-button {
  justify-self: end;
  align-self: end;
  margin-top: 10px;
}

.main-page-news-article--vertical {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
}

.main-page-news-article--vertical .main-page-news-article-image {
  grid-row: 1;
}

.main-page-news-article--vertical .main-page-news-article-title {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

.main-page-news-article--vertical .main-page-news-article-text {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
