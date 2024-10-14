<script setup lang="ts">
const hero = ref<HTMLElement | null>(null);
const links = useLinks();

function scroll() {
  const element: HTMLElement = hero.value!;
  element.nextElementSibling?.scrollIntoView({ block: "start", behavior: "smooth" });
}
</script>

<template>
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
      <div class="social-info"><NuxtLink :href="links.githubUrl" class="social-icon"><img alt="GitHub" src="~/assets/images/social-github.svg"></NuxtLink>4.1k stars</div>
      <div class="social-info"><NuxtLink :href="links.discordUrl" class="social-icon"><img alt="Discord" src="~/assets/images/social-discord.svg"></NuxtLink>8.5k members</div>
      <div class="social-info"><NuxtLink :href="links.twitterUrl" class="social-icon"><img alt="Twitter" src="~/assets/images/social-twitter.svg"></NuxtLink>20.4k followers</div>
      <div class="social-info"><NuxtLink :href="links.redditUrl" class="social-icon"><img alt="Reddit" src="~/assets/images/social-reddit.svg"></NuxtLink>680 members</div>
    </div>

    <div class="hero-game-name">Game name</div>
  </section>
</template>

<style scoped lang="scss">
@keyframes slideshow {
  0%, 28% {
    background-image: url(~/assets/images/game_preview/game_preview_01.avif);
  }
  33%, 61% {
    background-image: url(~/assets/images/game_preview/game_preview_02.avif);
  }
  66%, 94% {
    background-image: url(~/assets/images/game_preview/game_preview_03.avif);
  }
  100% {
    background-image: url(~/assets/images/game_preview/game_preview_01.avif);
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
  animation: slideshow 15s infinite;
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
  width: 100%;
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
    padding: 20px;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 5.0vh;
  }
}

.social-icon {
  height: 32px;
  opacity: 0.6;
  transition: 0.1s;

  &:hover {
    opacity: 1;
  }
}

.social-info {
  font-size: clamp(12px, calc(20px + (36–20) * (100vw - 768px)/(1920–768)), 48px);
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

@media only screen and (max-width: 600px) {
.social-info {
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
