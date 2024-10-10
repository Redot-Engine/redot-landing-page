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

    <button class="hero-scroll-button" @click="scroll">
      <img alt="" src="~/assets/images/chevron-down.svg">
    </button>

    <div class="hero-game-name">Game name</div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  height: 100dvh;
  background:
      linear-gradient(to bottom, #000f, #0000 100px, #0000 calc(100% - 100px), #000f),
      url(https://picsum.photos/seed/videogame8/1920/1080) no-repeat center;
  background-size: cover, cover;
  display: grid;
  place-items: center;
  position: relative;

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
}

.hero-center-logo {
  height: 140px;
  margin-bottom: 20px;
}

.hero-center-button {
  margin-top: 15px;
}

.hero-scroll-button {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 11px;
  left: 50%;
  transform: translateX(-50%);
}

.hero-game-name {
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
