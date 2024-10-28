<script setup lang="ts">
import type { TeamMember } from "~/types/TeamMember";

const { avatarUrl, displayName, userRole } = defineProps<TeamMember>();
</script>

<template>
  <div class="user-card">
    <img :alt="displayName" :src="avatarUrl" class="user-card__avatar">
    <div class="user-card__info">
      <span class="user-card__name">{{ displayName }}</span>
      <span class="user-card__role">{{ userRole }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  &__avatar {
    width: 125px;
    height: 125px;
    border-radius: 10%;
    margin-bottom: 1rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
    word-break: break-word;
  }

  &__role {
    font-size: 0.875rem;
    color: rgba(#fff, 60%);
  }
}
</style>
