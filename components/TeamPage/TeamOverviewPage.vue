<script setup lang="ts">
import { team } from "~/data/team";
</script>

<template>
  <section class="team-overview">
    <div v-for="(member, index) in team" :key="index" class="team-overview__member">
      <TeamPageTeamOverviewPageUserCard
        :avatar-url="member.avatarUrl"
        :display-name="member.displayName"
        :user-role="member.userRole"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.team-overview {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  &__member {
    max-width: 250px;
    display: flex;
    justify-content: center;
  }
}
</style>
