<script setup lang="ts">
import IconCode from "~/assets/images/icon-code.svg";
import IconHeart from "~/assets/images/icon-heart.svg";
import IconArrow from "~/assets/images/icon-arrow.svg";
import IconChevronDown from "~/assets/images/chevron-down.svg";

export type Icons = "code" | "heart" | "arrow" | "chevron-down";

defineProps<{
  name: Icons;
}>();

const icons: Record<Icons, string> = {
  code: IconCode,
  heart: IconHeart,
  arrow: IconArrow,
  "chevron-down": IconChevronDown,
};
</script>

<template>
  <img
    :src="icons[name]"
    alt=""
    class="icon"
  >
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
}
</style>
