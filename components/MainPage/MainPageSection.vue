<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="main-page-section">
    <div class="section-title">
      <div class="section-title-text">{{ title }}</div>
      <slot name="button"/>
    </div>

    <slot/>
  </section>
</template>

<style scoped>
.main-page-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title-text {
  display: inline-block;
  font-size: 36px;
  font-weight: 900;
  position: relative;
}

.section-title-text::before {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 10px;
  background-color: #fe3f02;
  z-index: -1;
}
</style>
