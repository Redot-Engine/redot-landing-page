<script setup lang="ts">
const {big} = defineProps<{
  big?: boolean;
}>();

const classBig = computed(() => big ? 'section-description--big' : '');
</script>

<template>
  <div :class="classBig" class="section-description">
    <slot/>
  </div>
</template>

<style scoped>
.section-description {
  font-size: 14px;
  color: #fff9;
}

.section-description--big {
  font-size: 16px;
}

.section-title + .section-description {
  margin-top: 5px;
}
</style>
