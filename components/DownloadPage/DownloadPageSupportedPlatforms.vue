<script setup lang="ts"></script>

<template>
  <section class="download-supported-platforms">
    <div class="download-supported-platforms__content">
      <span class="download-supported-platforms__title">
        Supported Platforms
      </span>
      <div class="download-supported-platforms__grid">
        <DownloadPageSupportedPlatformsItem
          class="download-supported-platforms__android"
          icon="/img/download/android.svg"
          label="Android"
        />
        <DownloadPageSupportedPlatformsItem
          class="download-supported-platforms__web-editor"
          icon="/img/download/web-editor.svg"
          label="Web Editor"
        />
        <DownloadPageSupportedPlatformsItem
          class="download-supported-platforms__windows"
          icon="/img/download/windows.svg"
          label="Windows"
        />
        <DownloadPageSupportedPlatformsItem
          class="download-supported-platforms__mac"
          icon="/img/download/apple.svg"
          label="macOS"
        />
        <DownloadPageSupportedPlatformsItem
          class="download-supported-platforms__linux"
          icon="/img/download/linux.svg"
          label="Linux"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
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

.download-supported-platforms {
  &__android {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(23, 254, 2, 0.3) 194%
    );
  }
  &__web-editor {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgb(254, 63, 2, 0.3) 200%
    );
  }
  &__windows {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgb(2, 178, 254, 0.3) 194%
    );
  }
  &__mac {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(254, 174, 2, 0.3) 194%
    );
  }
  &__linux {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 0.3) 194%
    );
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

  @media (max-width: 768px) {
    &__title {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: 0;
    }
  }

  &__grid {
    max-width: 1024px;
    padding: 0 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    height: 100%;
    grid-column: span 12 / span 12;

    @media (min-width: 768px) {
      grid-column: span 6 / span 6;
      gap: 2rem;
      width: 100%;
    }

    @media (min-width: 1024px) {
      grid-column: span 4 / span 4;
    }
  }
}
</style>
