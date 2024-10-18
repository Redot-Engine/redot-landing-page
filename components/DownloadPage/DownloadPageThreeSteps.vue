<script setup lang="ts">
const links = useLinks();
</script>


<template>
  <section class="download-three-steps">
    <div class="download-three-steps__content">
      <span class="download-three-steps__title">Ignite Your Imagination</span>
      <div class="download-three-steps__grid">
        <DownloadPageThreeStepsItem
          :links="[
            { text: 'Visit the download archive', url: links.releasePage },
          ]"
          description="You can choose the latest Redot Engine, an older release, or try a beta version."
          title="1. Choose Your Redot Version"
        />
        <DownloadPageThreeStepsItem
          :links="[
            { text: 'Download for Windows', url: '/download/windows' },
            { text: 'Download for Linux', url: '/download/linux' },
            { text: 'Download for Android', url: '/download/android' },
          ]"
          description="Follow the instructions to complete installation and setup."
          title="2. Download Redot Engine"
        />
        <DownloadPageThreeStepsItem
          :links="[
            { text: 'Join Our Discord Community', url: links.discordUrl },
          ]"
          description="Start your project from scratch or choose a template."
          title="3. Start Your Project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.download-three-steps {
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 2.25rem;
    overflow: hidden;
    width: 100%;
  }

  &__title {
    font-weight: 800;
    font-size: 2.25rem;
    letter-spacing: -1px;
    line-height: 2.5rem;

    @include mixins.mobile-and-smaller {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: 0;
    }
  }

  &__grid {
    padding: 0 0.75rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    row-gap: 1.5rem;
    justify-content: space-between;
    align-self: stretch;
    height: 100%;
  }
}
</style>
