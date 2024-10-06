<script setup lang="ts">
const scrolled = ref(import.meta.client && window.scrollY > 0);

function updateScrollPosition(): void {
  scrolled.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener(
      "scroll",
      updateScrollPosition,
      {passive: true},
  );

  return () => {
    window.removeEventListener("scroll", updateScrollPosition);
  };
});
</script>

<template>
  <header
      :class="{
        'header--scrolled': scrolled,
      }"
      class="header"
  >
    <MaxWidthContainer class="header-inner">
    <img src="~/assets/TopBarLogo.svg" alt="Redot logo" class="header-logo"/>

    <div class="header-links">
      <a href="#" class="header-link header-link-with-menu">
        Overview
        <Icon name="chevron-down" />

        <div class="header-menu">
          <a href="#" class="header-menu-link">Menu item</a>
          <a href="#" class="header-menu-link">Menu item</a>
          <a href="#" class="header-menu-link">Menu item</a>
          <a href="#" class="header-menu-link">Menu item</a>
          <a href="#" class="header-menu-link">Menu item</a>
        </div>
      </a>
      <a href="#" class="header-link">Documentation</a>
      <a href="#" class="header-link">News</a>
      <a href="#" class="header-link">Assets</a>
    </div>

    <div class="header-buttons">
      <LinkButton href="#">
        Contribute
        <Icon name="code"/>
      </LinkButton>
      <LinkButton href="#">
        Donate
        <Icon name="heart"/>
      </LinkButton>
      <LinkButton href="#" type="red">
        Download
        <Icon name="arrow"/>
      </LinkButton>
    </div>
    </MaxWidthContainer>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(0px);
  background-color: #0000;
  transition: background-color 0.3s, backdrop-filter 0.3s;
  font-size: 13px;
}

.header--scrolled {
  background-color: #000000e6;
  backdrop-filter: blur(20px);
}

.header-inner {
  display: flex;
  gap: 40px;
  height: 56px;
  align-items: center;
}

.header-logo {
  width: 124px;
  height: 28px;
}

.header-links {
  display: flex;
  gap: 20px;
  align-items: center;
  flex: 1;
}

.header-link {
  color: #fff9;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.header-link :deep(.icon) {
  opacity: 60%;
}

.header-link-with-menu {
  position: relative;
}

.header-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  background-color: #000;
  border: 1px solid #191919;
  border-radius: 16px;
  padding: 10px;
  display: flex;
  opacity: 0;
  pointer-events: none;
  flex-direction: column;
  min-width: 200px;
  transform: translateX(-50%);
  transition: opacity 0.3s;
}

.header-menu::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #00000001;
}

.header-link-with-menu:hover .header-menu {
  pointer-events: auto;
  opacity: 1;
}

.header-menu-link {
  color: #999;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.1s, color 0.1s;
}

.header-menu-link:hover {
  color: #fff;
  background-color: #191919;
}

.header-buttons {
  display: flex;
  gap: 10px;
}
</style>
