<script setup lang="ts">
const { asButton = false } = defineProps<{
  asButton?: boolean;
}>();

const classes = computed(() => ({
  "chip--button": asButton,
}));
</script>

<template>
  <div :class="classes" class="chip">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.chip {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  height: 26px;

  background: rgba(#000, 60%);
  backdrop-filter: blur(20px);
  transition: border 0.1s, color 0.1s;

  border: 1px solid rgba(#fff, 10%);
  border-radius: 16px;

  color: rgba(#fff, 40%);
  font-size: 13px;

  &--button {
    cursor: pointer;

    &:hover {
      border-color: rgba(#fff, 40%);
    }
  }
}
</style>
