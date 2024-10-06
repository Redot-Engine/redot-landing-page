<template>
  <div class="max-width-container">
    <slot />
  </div>
</template>

<style scoped>
.max-width-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
