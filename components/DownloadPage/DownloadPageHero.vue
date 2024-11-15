<template>
  <section class="download-hero">
    <div class="download-hero__content">
      <div class="download-hero__header">
        <span class="download-hero__subtitle">
          Download Redot for {{ platform }}
        </span>
        <h1 class="download-hero__title">Ignite Your Imagination</h1>
      </div>
      <span class="download-hero__description">
        Download Redot Engine, the powerful platform for building 2D and 3D
        cross-platform games and interactive <br>
        experiences.
      </span>
      <div class="download-hero__buttons">
        <LinkButton :href="sanitizeUrl(downloadLink)" type="white">
          Download latest
          <Icon :name="platformIcons[platform] ?? 'windows'" />
        </LinkButton>
        <LinkButton v-if="!isMobile" :href="sanitizeUrl(downloadMonoLink)" type="outline">
          Download Mono
          <Icon :name="platformIcons[platform] ?? 'windows'" />
        </LinkButton>
        <LinkButton :href="sanitizeUrl(links.releasePage)" type="ghost">
          More download options
          <Icon name="arrow" />
        </LinkButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getMonoPlatformDownloadLink, getPlatformDownloadLink } from "~/lib/platformDownloadLink";
import { sanitizeUrl } from "@braintree/sanitize-url";

const links = useLinks();

const { platform } = defineProps<{
  platform: string;
}>();

const downloadLink = computed(() => getPlatformDownloadLink(platform));
const downloadMonoLink = computed(() => getMonoPlatformDownloadLink(platform));
const isMobile = useIsMobile();

const platformIcons = {
  windows: "windows",
  mac: "apple",
  apple: "apple",
  linux: "linux",
  android: "android",
  ios: "apple",
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.download-hero {
  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    overflow: hidden;
    padding: 4.5rem 3.5rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("/img/download/background-hero.avif");

    @include mixins.tablet-and-smaller {
      padding: 4.5rem 1.5rem;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
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

  &__subtitle {
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.5rem;
    color: rgba(#fff, 80%);
    letter-spacing: 0.15rem;
    text-transform: uppercase;

    @include mixins.mobile-and-smaller {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  &__description {
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;

    @include mixins.mobile-and-smaller {
      flex-direction: column;
      row-gap: 1rem;
    }
  }
}
</style>
