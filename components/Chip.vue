<template>
  <div class="chip">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.chip {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  height: 26px;

  background: rgba(#000, 60%);
  backdrop-filter: blur(20px);

  border: 1px solid rgba(#fff, 10%);
  border-radius: 16px;

  color: rgba(#fff, 40%);
  font-size: 13px;
}
</style>
