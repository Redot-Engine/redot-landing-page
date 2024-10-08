<script setup lang="ts">
import IconCode from "~/assets/images/icon-code.svg";
import IconHeart from "~/assets/images/icon-heart.svg";
import IconArrow from "~/assets/images/icon-arrow.svg";
import IconMenu from "~/assets/images/icon-menu.svg";
import IconChevronDown from "~/assets/images/chevron-down.svg";

export type Icons = "code" | "heart" | "arrow" | "chevron-down" | "menu";

defineProps<{
  name: Icons;
}>();

const icons: Record<Icons, string> = {
  code: IconCode,
  heart: IconHeart,
  arrow: IconArrow,
  'chevron-down': IconChevronDown,
  menu: IconMenu,
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
