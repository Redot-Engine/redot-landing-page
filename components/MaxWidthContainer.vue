<template>
  <div class="max-width-container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.max-width-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1290px) {
    padding: 0 10px;
  }
}
</style>
