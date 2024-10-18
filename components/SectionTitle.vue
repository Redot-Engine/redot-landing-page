<script setup lang="ts">
const { small, variant } = defineProps<{
  small?: boolean;
  variant?: string;
}>();

const classSmall = computed(() => small ? "section-title--small" : "");
const headingTag = computed(() => variant || "h1");
</script>

<template>
  <component :is="headingTag" :class="classSmall" class="section-title">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.section-title {
  font-weight: 800;
  font-size: 32px;

  &--small {
    font-size: 24px;
  }
}
</style>
