<script setup lang="ts">
import DiscordLogo from "~/assets/images/discord-logo.svg";
import ForumLogo from "~/assets/images/forum-logo.svg";
import TwitterLogo from "~/assets/images/twitter-logo.svg";

const links = useLinks();
</script>

<template>
  <MainPageSection title="Get involved">
    <div class="get-involved-grid">
      <MainPageGetInvolvedItem
        :image="DiscordLogo"
        :link="links.discordUrl"
        description="A space to socialize with other community members."
        title="Discord server"
      />

      <MainPageGetInvolvedItem
        :image="TwitterLogo"
        :link="links.twitterUrl"
        description="Get official development news."
        title="X/Twitter feed"
      />

      <MainPageGetInvolvedItem
        :image="ForumLogo"
        :link="links.redditUrl"
        description="A place for the Redot community to meet, ask questions, share their work, and provide help to other users."
        title="Reddit forum"
      />
    </div>
  </MainPageSection>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.get-involved-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;

  @include mixins.mobile-and-smaller {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
