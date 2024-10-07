<script setup lang="ts">
import HeartLogo from "~/assets/images/heart-logo.svg";
</script>

<template>
  <MainPageSection title="Improve Redot">
    <MainPageGetInvolvedItem
        :image="HeartLogo"
        title="You can help us in a lot of ways!"
        description="Whether you are a developer or not, you can speed up the development by contributing to the codebase, reporting bugs, keeping the documentation up to date and donating."
        link="#"
        class="improve-card"
        button-type="red"
        button-text="Learn more"
    />
  </MainPageSection>
</template>

<style scoped>
.improve-card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
