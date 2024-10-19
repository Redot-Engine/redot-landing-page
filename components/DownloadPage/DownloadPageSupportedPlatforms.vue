<script setup lang="ts">
</script>

<template>
  <section class="download-supported-platforms">
    <div class="download-supported-platforms__content">
      <h2 class="download-supported-platforms__title">
        Supported Platforms
      </h2>
      <div class="download-supported-platforms__grid">
        <DownloadPageSupportedPlatformsItem
          class="download-supported-platforms__android"
          href="/download/android"
          icon="/img/download/android.svg"
          label="Android"
        />
        <DownloadPageSupportedPlatformsItem
          v-if="useFeatureFlags().webEditorSupport"
          class="download-supported-platforms__web-editor"
          href="https://download.redotengine.org/release/4.4/android-editor.zip"
          icon="/img/download/web-editor.svg"
          label="Web Editor"
        />
        <DownloadPageSupportedPlatformsItem
          class="download-supported-platforms__windows"
          href="/download/windows"
          icon="/img/download/windows.svg"
          label="Windows"
        />
        <DownloadPageSupportedPlatformsItem
          class="download-supported-platforms__linux"
          href="/download/linux"
          icon="/img/download/linux.svg"
          label="Linux"
        />
        <DownloadPageSupportedPlatformsItem
          v-if="useFeatureFlags().macSupport"
          class="download-supported-platforms__mac"
          href="/download/mac"
          icon="/img/download/apple.svg"
          label="macOS"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

$grid-columns: 5;
$gap: 20px;

@mixin grid-item {
  flex: 1 0 auto;
  text-align: center;
  padding: $gap / 2;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
}

@mixin platform-background($color) {
  background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          $color 100%
  );
}

.download-supported-platforms {
  &__android {
    @include platform-background(rgba(23, 254, 2, 0.15));
  }

  &__web-editor {
    @include platform-background(rgb(254, 63, 2, 0.15));
  }

  &__windows {
    @include platform-background(rgb(2, 178, 254, 0.15));
  }

  &__mac {
    @include platform-background(rgba(254, 174, 2, 0.15));
  }

  &__linux {
    @include platform-background(rgba(255, 255, 255, 0.15));
  }

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

  @include mixins.mobile-and-smaller {
    &__title {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: 0;
    }
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    height: 100%;
    grid-column: span 12 / span 12;

    @include mixins.mobile-and-smaller {
      grid-column: span 6 / span 6;
      gap: 2rem;
      width: 100%;
      padding: 0 4rem;
    }

    @include mixins.desktop-and-larger {
      grid-column: span 4 / span 4;
    }
  }
}
</style>
