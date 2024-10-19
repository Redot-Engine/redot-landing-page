<template>
  <div />
</template>

<script setup>
import { detect } from "detect-browser";

const router = useRouter();
const platform = ref("");

const platformMapping = {
  windows: "windows",
  macos: "mac",
  ios: "mac",
  linux: "linux",
  androidos: "android",
};

const redirectToPlatform = () => {
  const browser = detect();
  if (!browser) {
    console.error("Unable to detect browser");
    return;
  }

  const rawPlatform =
      browser.os?.toLowerCase().replace(/\d+/g, "").trim().replace(/\s+/g, "") ||
      "";
  platform.value = platformMapping[rawPlatform] || rawPlatform;

  if (platform.value) {
    router.push(`/download/${platform.value}`);
  } else {
    console.error("Unable to determine platform");
  }
};

onMounted(redirectToPlatform);
</script>

<style scoped lang="scss">
@use "@/assets/styles/mixins";
</style>
