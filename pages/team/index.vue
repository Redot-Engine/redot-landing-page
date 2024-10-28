<script setup lang="ts">
</script>

<template>
  <div class="team-page">
    <Header always-opaque />

    <MaxWidthContainer>
      <div class="team-page__header">
        <h1 class="team-page__title">Team</h1>
      </div>
      <TeamPageTeamOverviewPage />
    </MaxWidthContainer>

    <Footer />
  </div>
</template>


<style scoped lang="scss">
@use "@/assets/styles/mixins";

.team-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 56px;


  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__title {
    display: inline-block;
    font-size: 36px;
    font-weight: 800;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 4px;
      left: 0;
      right: 0;
      height: 10px;
      background-color: #fe3f02;
      z-index: -1;
    }

    @include mixins.mobile-and-smaller {
      font-size: 24px;

      &::before {
        height: 6px;
      }
    }
  }
}
</style>
