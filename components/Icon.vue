<script setup lang="ts">
import IconCode from "~/assets/images/icon-code.svg";
import IconHeart from "~/assets/images/icon-heart.svg";
import IconArrow from "~/assets/images/icon-arrow.svg";
import IconMenu from "~/assets/images/icon-menu.svg";
import IconChevronDown from "~/assets/images/chevron-down.svg";
import IconClose from "~/assets/images/icon-close.svg";
import Windows from "~/public/img/download/windows.svg";
import Android from "~/public/img/download/android.svg";
import WebEditor from "~/public/img/download/web-editor.svg";
import Linux from "~/public/img/download/linux.svg";
import Apple from "~/public/img/download/apple.svg";

export type Icons = "code" | "heart" | "arrow" | "chevron-down" | "menu" | "close" | "windows" | "android" | "web-editor" | "linux" | "apple";


defineProps<{
  name: Icons;
}>();

const icons: Record<Icons, string> = {
  code: IconCode,
  heart: IconHeart,
  arrow: IconArrow,
  "chevron-down": IconChevronDown,
  menu: IconMenu,
  close: IconClose,
  windows: Windows,
  android: Android,
  "web-editor": WebEditor,
  linux: Linux,
  apple: Apple,
};
</script>

<template>
  <img :src="icons[name]" alt="" class="icon">
</template>

<style scoped>
.icon {
  width: 16px;
  height: 16px;
}
</style>
