<script setup lang="ts">
import IconCode from "~/assets/icon-code.svg";
import IconHeart from "~/assets/icon-heart.svg";
import IconArrow from "~/assets/icon-arrow.svg";
import IconChevronDown from "~/assets/chevron-down.svg";

export type Icons = "code" | "heart" | "arrow" | "chevron-down";

defineProps<{
  name: Icons;
}>();

const icons: Record<Icons, string> = {
  code: IconCode,
  heart: IconHeart,
  arrow: IconArrow,
  'chevron-down': IconChevronDown,
};
</script>

<template>
  <img :src="icons[name]" alt="" class="icon" />
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
}
</style>
