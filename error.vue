<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="error-page">
    <h1>{{ error.statusCode }} - Page not found!</h1>
    <img src="/img/mascott/Rune_Expression_2.avif" alt="404 mascot" />
    <p class="note">
      Oops! It seems like you’ve ventured off the path in the Redot Engine
      universe.
    </p>
    <NuxtLink to="/" class="back-home">Go back home</NuxtLink>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding: 20px;
  color: #e0e0e0;
  background-color: #000;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ff5c5c;
}

img {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
}

.note {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #aaaaaa;
}

.back-home {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff5c5c;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.back-home:hover {
  background-color: #e14b4b;
}
</style>
