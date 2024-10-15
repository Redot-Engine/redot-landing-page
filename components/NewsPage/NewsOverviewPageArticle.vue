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
      <NuxtImg
        :src="authorImage"
        alt=""
        class="avatar"
        format="webp"
        height="24"
        width="24"
      />
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
  margin: 15px 5px 5px 5px;
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

  &:hover {
    border-color: rgba(#fff, 20%);
  }

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
    margin: 5px 5px 5px 5px;
    font-size: 24px;
  }

  &-text {
    justify-self: start;
    margin-left: 5px;
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