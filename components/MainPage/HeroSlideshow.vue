<template>
  <div :style="{ backgroundImage: `url(${currentImage})` }" class="hero-background">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import gamePreview01 from "@/assets/images/game_preview/game_preview_01.avif";
import gamePreview02 from "@/assets/images/game_preview/game_preview_02.avif";
import gamePreview03 from "@/assets/images/game_preview/game_preview_03.avif";
import gamePreview05 from "@/assets/images/game_preview/game_preview_05.png";
import gamePreview06 from "@/assets/images/game_preview/game_preview_06.png";
import gamePreview07 from "@/assets/images/game_preview/game_preview_07.png";

const images = [
  gamePreview01,
  gamePreview02,
  gamePreview03,
  gamePreview05,
  gamePreview06,
  gamePreview07,
];

const currentImage = ref(images[0]);
let currentIndex = 0;

const preloadImages = () => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const changeBackground = () => {
  currentIndex = (currentIndex + 1) % images.length;
  currentImage.value = images[currentIndex];
};

onMounted(() => {
  preloadImages();
  setInterval(changeBackground, 5000); // Change image every 5 seconds
});
</script>

<style scoped lang="scss">
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
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
}
</style>