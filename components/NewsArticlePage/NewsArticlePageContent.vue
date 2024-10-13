<script setup lang="ts">
import type { MarkdownRoot } from "@nuxt/content";

const { body } = defineProps<{
  body: MarkdownRoot;
}>();
</script>

<template>
  <ContentRendererMarkdown
    :value="body"
    class="content-renderer"
  />
</template>

<style scoped lang="scss">
.content-renderer {
  color: #fff;
  font-size: 16px;
  max-width: 800px;
  margin: 40px auto;

  :deep(h1) {
    font-size: 32px;
    font-weight: 800;
    margin: 20px 0;
  }
}
</style>
