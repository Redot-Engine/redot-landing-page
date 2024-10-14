<script setup lang="ts">
const { title, tags, author, authorImage, date, image } = defineProps<{
  title: string;
  tags: string[];
  author: string;
  authorImage: string;
  date: string;
  image: string;
}>();

const dateString = ref("");

onMounted(() => {
  // Doing it this way prevents a hydration mismatch.
  // TODO: replace with a better way to handle this.
  dateString.value = new Date(date).toLocaleDateString();
});
</script>

<template>
  <div class="news-article-page-splash">
    <img :src="image" alt="" class="banner">

    <div class="info">
      <div class="row">
        <Chip v-for="tag in tags" :key="tag">{{ tag }}</Chip>
      </div>

      <div class="title">
        {{ title }}
      </div>

      <div class="row">
        <img :src="authorImage" alt="" class="avatar">
        <div class="username">{{ author }}</div>
        <div class="date">{{ dateString }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins";

.news-article-page-splash {
  height: 400px;
  position: relative;
  margin: 0 40px;
  
  @include mixins.tablet-and-smaller {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
  }
}

.info {
  position: absolute;
  left: 0;
  width: 53%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;

  filter: drop-shadow(0 0 20px rgba(#000, 25%));

  @include mixins.tablet-and-smaller {
    position: unset;
    width: 100%;
  }
}

.title {
  font-size: 36px;
  font-weight: 800;
  color: #fff;

  @include mixins.mobile-and-smaller {
    font-size: 32px;
  }
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
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

.banner {
  position: absolute;
  right: 0;
  height: 100%;
  border-radius: 20px;
  aspect-ratio: 16 / 9;

  @include mixins.tablet-and-smaller {
    position: unset;
  }

  @include mixins.mobile-and-smaller {
    border-radius: 10px;
  }
}
</style>
