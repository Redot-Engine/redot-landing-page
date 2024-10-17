<script setup lang="ts">
const {
  icon,
  label,
  href,
  class: className,
} = defineProps<{
  label: string;
  href: string;
  icon?: string;
  class?: string;
}>();
</script>

<template>
  <NuxtLink :class="['link-button', className]" :href="href">
    <img v-if="icon" :src="icon" alt="" class="link-button__icon" />
    <span class="link-button__label">{{ label }}</span>
  </NuxtLink>
</template>

<style scoped lang="scss">
.link-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 1.875rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  transition: background-color 0.3s;

  &__icon {
    margin-right: 1rem;
    width: 32px;
    height: 32px;
  }

  &__label {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    &__label {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }

  &:hover {
    background-color: rgba(#fff, 5%);
  }
}

@media (max-width: 768px) {
  .link-button {
    width: 100%;
  }
}
</style>
