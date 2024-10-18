<template>
  <div />
</template>

<script setup>
const router = useRouter();
const redirectToPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  let platform;

  if (userAgent.includes("win")) {
    platform = "windows";
  } else if (userAgent.includes("android")) {
    platform = "android";
  } else if (userAgent.includes("linux")) {
    platform = "linux";
  } else {
    platform = "linux";
  }

  router.push(`/download/${platform}`);
};

onBeforeRouteUpdate(redirectToPlatform);
</script>

<style scoped lang="scss">
@use "@/assets/styles/mixins";
</style>
