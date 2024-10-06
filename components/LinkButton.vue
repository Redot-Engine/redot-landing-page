<script setup lang="ts">
import type {ButtonType} from "~/types/ButtonType";

const {type = "default"} = defineProps<{
  href: string;
  type?: ButtonType;
}>();

const typeClass = computed(() => `link-button--${type}`);
</script>

<template>
  <a :href :class="typeClass" class="link-button">
    <slot/>
  </a>
</template>

<style scoped>
.link-button {
  color: #fff;
  text-decoration: none;
  background-color: #000;
  border: 1px solid #191919;
  border-radius: 8px;
  padding: 8px 15px;
  display: inline-flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  font-size: 13px;
}

.link-button :deep(.icon) {
  filter: invert(0);
  transition: filter 0.1s;
}

.link-button:hover {
  color: #000;
  background-color: #fff;
  border-color: #e6e6e6;
}

.link-button:hover :deep(.icon) {
  filter: invert(1);
}

.link-button:active {
  border-color: #c2c2c2;
  background-color: #d7d7d7;
}

.link-button--red {
  background-color: #fe3f02;
  border-color: #fe521b;
}

.link-button--red:hover {
  color: #fff;
  background-color: #ff6534;
  border-color: #ff7448;
}

.link-button--red:hover :deep(.icon) {
  filter: invert(0);
}

.link-button--red:active {
  background-color: #ce3200;
  border-color: #d34619;
}
</style>
