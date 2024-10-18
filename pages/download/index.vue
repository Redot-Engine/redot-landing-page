<template>
  <div />
</template>

<script setup>
import { detect } from "detect-browser";

const router = useRouter();
const platform = ref("");

const redirectToPlatform = () => {
  const browser = detect();
  platform.value = browser.os.toLowerCase().replace(/\d+/g, "").trim().replace(/\s+/g, "");
  platform.value = platform.value.replace(/[^a-z]/g, "");

  router.push(`/download/${platform.value}`);
};

onMounted(redirectToPlatform);
</script>

<style scoped lang="scss">
@use "@/assets/styles/mixins";
</style>
