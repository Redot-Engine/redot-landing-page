<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import HeroSlideshow from "~/components/MainPage/HeroSlideshow.vue";

const links = useLinks();
const isMobile = useIsMobile();

const heroHeight = ref("100vh");

const updateHeroHeight = () => {
  heroHeight.value = `${window.innerHeight}px`;
};

onMounted(() => {
  updateHeroHeight();
  window.addEventListener("resize", updateHeroHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateHeroHeight);
});
</script>

<template>
  <HeroSlideshow :style="{ height: heroHeight }" class="hero">
    <Header />

    <div class="hero-content">
      <div class="hero-center">
        <img
          alt=""
          class="hero-center-logo"
          fetchpriority="high"
          src="~/assets/images/redot-logo-white.svg"
        />

        <SectionTitle small
          >Open‑source game engine for&nbsp;everyone.</SectionTitle
        >

        <SectionDescription>No strings attached.</SectionDescription>

        <LinkButton
          href="/download"
          aria-label="download"
          class="hero-center-button"
          type="red"
        >
          Download
          <Icon name="arrow" />
        </LinkButton>
      </div>

      <div class="hero-center hero-center--socials">
        <NuxtLink :href="links.githubUrl" aria-label="github-url" class="social-info">
          <div class="social-icon">
            <img alt="GitHub" src="~/assets/images/social-github.svg" />
          </div>
          4.2k<br v-if="isMobile" />
          stars
        </NuxtLink>
        <NuxtLink :href="links.discordUrl" aria-label="discord-url" class="social-info">
          <div class="social-icon">
            <img alt="Discord" src="~/assets/images/social-discord.svg" />
          </div>
          9.1k<br v-if="isMobile" />
          members
        </NuxtLink>
        <NuxtLink :href="links.twitterUrl" aria-label="twitter-url" class="social-info">
          <div class="social-icon">
            <img alt="Twitter" src="~/assets/images/social-twitter.svg" />
          </div>
          20.6k<br v-if="isMobile" />
          followers
        </NuxtLink>
        <NuxtLink :href="links.redditUrl" aria-label="reddit-url" class="social-info">
          <div class="social-icon">
            <img alt="Reddit" src="~/assets/images/social-reddit.svg" />
          </div>
          771<br v-if="isMobile" />
          members
        </NuxtLink>
      </div>

      <div aria-hidden="true" class="hero-game-name">Game name</div>
    </div>
  </HeroSlideshow>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.hero {
  position: relative;
  display: flex;
  flex-direction: column;
}

.hero-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  position: relative;
}

.hero-center {
  width: calc(100% - 20px);
  max-width: 400px;
  padding: 40px;
  background-color: #0009;
  border: 1px solid #ffffff19;
  border-radius: 16px;
  backdrop-filter: blur(20px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  &--socials {
    max-width: 800px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    bottom: 3vh;
  }
}

.social-icon {
  height: 32px;
}

.social-info {
  font-size: clamp(
    12px,
    calc(20px + (36–20) * (100vw - 768px) / (1920–768)),
    48px
  );
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  opacity: 0.6;
  transition: 0.1s;
  color: #fff;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }

  @include mixins.mobile-and-smaller {
    flex-direction: column;
  }
}

.hero-center-logo {
  height: 140px;
  margin-bottom: 20px;
}

.hero-center-button {
  margin-top: 15px;
}

.hero-game-name {
  visibility: hidden; /* Set visible, once we have real games to show */
  border: 1px solid #1d1c1b;
  border-radius: 36px;
  padding: 5px 10px;
  background-color: #040302;
  color: #fff6;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

@media (max-width: 410px) {
  .hero-content {
    padding: 10px;
  }
}
</style>