<template>
  <MainPageSection title="Recent news">
    <template #button>
      <LinkButton href="#" type="red">
        More news
        <Icon name="arrow"/>
      </LinkButton>
    </template>

    <div class="news-grid">
      <MainPageNewsArticle />
      <MainPageNewsArticle vertical />
      <MainPageNewsArticle vertical />
      <MainPageNewsArticle vertical />
      <MainPageNewsArticle vertical />
    </div>
  </MainPageSection>
</template>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.news-grid > :first-child {
  grid-column: span 4;
}
</style>
