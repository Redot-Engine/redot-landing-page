<script setup lang="ts">
import type { NewsArticle } from "~/types/NewsArticle";

const { post } =
    defineProps<{
      post: Partial<NewsArticle>
    }>();
</script>

<template>
  <NuxtLink :href="post.url ?? '#'" class="news-article">
    <img
      :src="post.image"
      alt="News article image"
      class="news-article-image"
    >
    <div class="row">
      <img :src="post.authorImage" alt="" class="avatar">
      <div class="username">{{ post.author }}</div>
      <div class="date">{{ post.date ? new Date(post.date).toLocaleDateString(): "" }}</div>
    </div>
    <SectionTitle class="news-article-title">
      {{ post.title }}
    </SectionTitle>
    <SectionDescription class="news-article-text">
      {{ post.description }}
    </SectionDescription>
  </NuxtLink>
</template>

<style scoped lang="scss">
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 15px 5px 5px 15px;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.username {
  color: rgba(#fff, 60%);
  font-size: 14px;
}

.date {
  color: rgba(#fff, 40%);
  font-size: 14px;
}

.news-article {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(#fff, 10%);
  border-radius: 16px;
  transition: border 0.1s;
  padding: 10px;
  text-decoration: none;
  color: #fff;

  &-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 8px;
    overflow: hidden;
    height: 50%;
  }

  &-title {
    color: #fff;
    margin: 5px 5px 5px 15px;
  }

  &-text {
    justify-self: start;
    margin-left: 15px;
    text-overflow: ellipsis;
  }

  &-actions {
    display: flex;
    flex-grow: 1;
    padding: 0.75rem;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>