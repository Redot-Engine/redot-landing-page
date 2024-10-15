<script setup lang="ts">
const hero = ref<HTMLElement | null>(null);
const links = useLinks();
const isMobile = useIsMobile();
</script>

<template>
  <section ref="hidden-hero" class="hidden-hero"></section>
  <section ref="hero" class="hero">
    <Header />

    <div class="hero-center">
      <img alt="" class="hero-center-logo" src="~/assets/images/redot-logo-white.svg">

      <SectionTitle small>Open‑source game engine for&nbsp;everyone.</SectionTitle>

      <SectionDescription>No strings attached.</SectionDescription>

      <LinkButton :href="links.releasePage" class="hero-center-button" type="red">
        Download
        <Icon name="arrow" />
      </LinkButton>
    </div>

    <div class="hero-center hero-center--socials">
      <NuxtLink :href="links.githubUrl" class="social-info">
        <div class="social-icon">
          <img alt="GitHub" src="~/assets/images/social-github.svg">
        </div>
        4.1k<br v-if="isMobile"> stars
      </NuxtLink>
      <NuxtLink :href="links.discordUrl" class="social-info">
        <div class="social-icon">
          <img alt="Discord" src="~/assets/images/social-discord.svg">
        </div>
        8.5k<br v-if="isMobile"> members
      </NuxtLink>
      <NuxtLink :href="links.twitterUrl" class="social-info">
        <div class="social-icon">
          <img alt="Twitter" src="~/assets/images/social-twitter.svg">
        </div>
        20.4k<br v-if="isMobile"> followers
      </NuxtLink>
      <NuxtLink :href="links.redditUrl" class="social-info">
        <div class="social-icon">
          <img alt="Reddit" src="~/assets/images/social-reddit.svg">
        </div>
        680<br v-if="isMobile"> members
      </NuxtLink>
    </div>

    <div class="hero-game-name">Game name</div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.hidden-hero { // Run a hidden slideshow quickly to preload the images. I know it's filty. TODO: Implement a proper, dynamic slideshow that doesn't need dirty tricks to work.
  animation: slideshow 2s;
  transition: background-image 0.3s;
  z-index: -100;
}

@keyframes slideshow {
  0%, 15% {
    background-image: url(~/assets/images/game_preview/game_preview_06.png);
  }
  17%, 32% {
    background-image: url(~/assets/images/game_preview/game_preview_01.avif);
  }
  34%, 48% {
    background-image: url(~/assets/images/game_preview/game_preview_03.avif);
  }
  50%, 65% {
    background-image: url(~/assets/images/game_preview/game_preview_05.png);
  }
  67%, 82% {
    background-image: url(~/assets/images/game_preview/game_preview_02.avif);
  }
  84%, 98% {
    background-image: url(~/assets/images/game_preview/game_preview_07.png);
  }
  100% {
    background-image: url(~/assets/images/game_preview/game_preview_06.png);
  }
}
.hero {
  position: relative;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  animation: slideshow 30s infinite;
  transition: background-image 1s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom,
        #000f 0%,
        #0000 100px,
        #0000 calc(100% - 100px),
        #000f 100%
    );
  }


  @media (max-width: 410px) {
    padding: 0 10px;
  }
}

.hero-center {
  width: calc(100% - 20px);
  max-width: 400px;
  padding: 40px;
  background-color: #0009;
  border: 1px solid #FFFFFF19;
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
    bottom: 3.0vh;
  }
}

.social-icon {
  height: 32px;
}

.social-info {
  font-size: clamp(12px, calc(20px + (36–20) * (100vw - 768px)/(1920–768)), 48px);
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
</style>
