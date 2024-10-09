<script setup lang="ts">
import type { ButtonType } from "~/types/ButtonType";

const { buttonText = "Join" } = defineProps<{
  title: string;
  description: string;
  link: string;
  image: string;
  buttonType?: ButtonType;
  buttonText?: string;
}>();
</script>

<template>
  <div class="get-involved-item">
    <img :src="image" alt="" class="get-involved-item-image">
    <SectionTitle class="get-involved-item-title" small>{{ title }}</SectionTitle>
    <SectionDescription class="get-involved-item-description">{{ description }}</SectionDescription>
    <LinkButton :href="link" :type="buttonType">
      {{ buttonText }}
      <Icon name="arrow" />
    </LinkButton>
  </div>
</template>

<style scoped lang="scss">
.get-involved-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  &-image {
    height: 198px;
    width: 198px;
    object-fit: contain;
  }

  &-title,
  &-description {
    text-align: center;
    padding: 0 5px;
  }

  &-title {
    margin-top: 10px;
  }

  &-description {
    margin-bottom: 10px;
  }
}
</style>
