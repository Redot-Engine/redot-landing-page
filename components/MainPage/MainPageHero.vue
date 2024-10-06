<script setup lang="ts">
const hero = ref<HTMLElement | null>(null);

function scroll() {
  const element: HTMLElement = hero.value!;
  element.nextElementSibling.scrollIntoView({block: "start", behavior: "smooth"});
}
</script>

<template>
  <section ref="hero" class="hero">
    <Header />

    <div class="hero-center">
      <img src="~/assets/redot-logo-white.svg" alt="" class="hero-center-logo" />

      <SectionTitle small>
        Open‑source game engine for&nbsp;everyone.
      </SectionTitle>

      <SectionDescription>
        No strings attached.
      </SectionDescription>

      <LinkButton href="#" type="red" class="hero-center-button">
        Download
        <Icon name="arrow" />
      </LinkButton>
    </div>

    <button class="hero-scroll-button" @click="scroll">
      <img src="~/assets/chevron-down.svg" alt="" />
    </button>

    <div class="hero-game-name">
      Game name
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100dvh;
  background:
      linear-gradient(to bottom, #000f, #0000 100px, #0000 calc(100% - 100px), #000f),
      url(https://picsum.photos/seed/videogame8/1920/1080) no-repeat center;
  background-size: cover, cover;
  display: grid;
  place-items: center;
  position: relative;
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
  width: 140px;
  height: 115px;
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
