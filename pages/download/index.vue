<template>
  <div />
</template>

<script setup>
import { detect } from "detect-browser";

const router = useRouter();
const platform = ref("");

const platformMapping = {
  "windows": "windows",
  "macos": "mac",
  "ios": "mac",
  "linux": "linux",
  "androidos": "android",
};

const redirectToPlatform = () => {
  const browser = detect();
  const rawPlatform = browser.os.toLowerCase().replace(/\d+/g, "").trim().replace(/\s+/g, "");

  platform.value = platformMapping[rawPlatform] || rawPlatform;

  router.push(`/download/${platform.value}`);
};


onMounted(redirectToPlatform);
</script>

<style scoped lang="scss">
@use "@/assets/styles/mixins";
</style>
