<script setup lang="ts">
const tags = ref(["All", "News", "Releases", "Community"]);

</script>

<template>
  <div class="chips-row">
    <Chip
      v-for="tag in tags"
      :key="tag"
      :href="`/news?tag=${tag}`"
      as-button
    >
      {{ tag }}
    </Chip>
  </div>
</template>

<style scoped lang="scss">
.chips-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>