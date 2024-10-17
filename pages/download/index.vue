<template></template>

<script>
export default {
  mounted() {
    this.redirectToPlatform();
  },
  methods: {
    redirectToPlatform() {
      const userAgent = navigator.userAgent.toLowerCase();
      let platform;

      if (userAgent.includes("win")) {
        platform = "windows";
      } else if (userAgent.includes("android")) {
        platform = "android";
      } else if (userAgent.includes("linux")) {
        platform = "linux";
      } else {
        platform = "other";
      }

      this.$router.push(`/download/${platform}`);
    },
  },
};
</script>
<style scoped lang="scss">
@use "@/assets/styles/mixins";
</style>
