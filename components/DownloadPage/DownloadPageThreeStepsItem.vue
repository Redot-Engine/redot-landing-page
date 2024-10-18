<template>
  <section class="download-three-steps-item">
    <div class="download-three-steps-item__content">
      <span class="download-three-steps-item__title">{{ title }}</span>
      <div class="download-three-steps-item__details">
        <p class="download-three-steps-item__description">{{ description }}</p>
        <div>
          <div v-for="(link, index) in links" :key="index">
            <NuxtLink :to="link.url" class="download-three-steps-item__link">{{ link.text }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { title, description, links } = defineProps<{
  title: string;
  description: string;
  links: { text: string; url: string }[];
}>();
</script>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.download-three-steps-item {
  padding: 1.5rem 1.5rem;

  @include mixins.mobile-and-smaller {
    padding: 1.5rem 0;
  }


  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    overflow: hidden;
    max-width: 18rem;

    @include mixins.mobile-and-smaller {
      max-width: 30rem;
    }
  }

  &__title {
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  &__description {
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgba(#fff, 80%);
  }

  &__details {
    display: flex;
    flex-direction: column;
    row-gap: 0.625rem;
  }

  &__link {
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #3388ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
