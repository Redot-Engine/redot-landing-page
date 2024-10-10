<script setup lang="ts">
import HeartLogo from "~/assets/images/heart-logo.svg";
const links = useLinks();
</script>

<template>
  <MainPageSection title="Improve Redot">
    <MainPageGetInvolvedItem
      :image="HeartLogo"
      :link="links.githubUrl"
      button-text="Contribute"
      button-type="red"
      class="improve-card"
      description="Whether you are a developer or not, you can speed up the development by contributing to the codebase, reporting bugs, keeping the documentation up to date and donating."
      title="You can help us in a lot of ways!"
    />
  </MainPageSection>
</template>

<style scoped>
.improve-card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
