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

<style scoped lang="scss">
.section-description {
  font-size: 14px;
  color: #fff9;

  &--big {
    font-size: 16px;
  }

  .section-title + & {
    margin-top: 5px;
  }
}
</style>
