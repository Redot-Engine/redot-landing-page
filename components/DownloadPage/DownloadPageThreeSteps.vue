<script setup lang="ts">
</script>


<template>
  <section class="download-three-steps">
    <div class="download-three-steps__content">
      <span class="download-three-steps__title">Ignite Your Imagination</span>
      <div class="download-three-steps__grid">
        <DownloadPageThreeStepsItem
          :links="[
            { text: 'Visit the download archive', url: 'https://github.com/Redot-Engine/redot-engine/releases' },
          ]"
          description="You can choose the latest Redot Engine, an older release, or try a beta version."
          title="1. Choose Your Redot Version"
        />
        <DownloadPageThreeStepsItem
          :links="[
            { text: 'Download for Windows', url: 'https://download.redotengine.org/release/4.4/redot-windowsx64.zip' },
            { text: 'Download for Linux', url: 'https://download.redotengine.org/release/4.4/redot-linuxbsd.zip' },
            { text: 'Download for Android', url: 'https://download.redotengine.org/release/4.4/android-editor.zip' },
          ]"
          description="Follow the instructions to complete installation and setup."
          title="2. Download Redot Engine"
        />
        <DownloadPageThreeStepsItem
          :links="[
            { text: 'Join Our Discord Community', url: 'https://discord.gg/redot' },
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
  }

  &__title {
    font-weight: 800;
    font-size: 2.25rem;
    letter-spacing: -1px;
    line-height: 2.5rem;
  }

  @media (max-width: 768px) {
    &__title {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: 0;
    }
  }

  &__grid {
    max-width: 1024px;
    padding-right: 2rem;
    padding-left: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
    justify-items: center;
    height: 100%;
    grid-column: span 12 / span 12;

    @media (min-width: 768px) {
      grid-column: span 6 / span 6;
      gap: 2rem
    }

    @media (min-width: 1024px) {
      grid-column: span 4 / span 4;
    }
  }
}
</style>
