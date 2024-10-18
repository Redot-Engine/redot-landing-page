<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="main-page-section">
    <div class="section-title">
      <h1 class="section-title-text">
        {{ title }}
      </h1>
      <slot name="button" />
    </div>

    <slot />
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.main-page-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include mixins.mobile-and-smaller {
    padding: 0 10px;
  }
}

.section-title-text {
  display: inline-block;
  font-size: 36px;
  font-weight: 800;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    height: 10px;
    background-color: #fe3f02;
    z-index: -1;
  }

  @include mixins.mobile-and-smaller {
    font-size: 24px;

    &::before {
      height: 6px;
    }
  }
}
</style>
