<script setup lang="ts">
const scrolled = ref(false);

function updateScrollPosition(): void {
  scrolled.value = window.scrollY > 0;
}

onMounted(() => {
  updateScrollPosition();

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
      <img src="~/assets/images/TopBarLogo.svg" alt="Redot logo" class="header-logo"/>
      <div class="header-navigation">
        <div class="header-links">
          <div class="header-link header-link-with-menu">
            Overview
            <Icon name="chevron-down"/>

            <div class="header-menu">
              <NuxtLink href="#" class="header-menu-link">Menu item</NuxtLink>
              <NuxtLink href="#" class="header-menu-link">Menu item</NuxtLink>
              <NuxtLink href="#" class="header-menu-link">Menu item</NuxtLink>
              <NuxtLink href="#" class="header-menu-link">Menu item</NuxtLink>
              <NuxtLink href="#" class="header-menu-link">Menu item</NuxtLink>
            </div>
          </div>
          <NuxtLink key="documentation" href="#" class="header-link">Documentation</NuxtLink>
          <NuxtLink key="news" href="#" class="header-link">News</NuxtLink>
          <NuxtLink key="assets" href="#" class="header-link">Assets</NuxtLink>
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
      </div>
    </MaxWidthContainer>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(0px);
  background-color: #0000;
  transition: background-color 0.3s, backdrop-filter 0.3s, border-bottom-color 0.3s;
  font-size: 13px;
  border-bottom: 1px solid #fff0;

  &--scrolled {
    background-color: #000000e6;
    backdrop-filter: blur(20px);
    border-bottom-color: #ffffff19;
  }

  &-navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @include mixins.mobile-and-smaller {
      position: absolute;
      gap: 24px;
      top: 56px;
      left: 0;
      flex-direction: column;
      align-items: start;
      background-color: #000000e6;
      width: 100%;
      padding: 16px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }

  &-inner {
    display: flex;
    gap: 40px;
    height: 56px;
    align-items: center;

    @include mixins.mobile-and-smaller {
      gap: 0;
      flex-direction: column;
      align-items: start;
      background-color: #000000e6;
      justify-content: center;
    }
  }

  &-logo {
    width: 124px;
    height: 28px;
  }

  &-links {
    display: flex;
    gap: 20px;
    align-items: center;
    flex: 1;

    @include mixins.mobile-and-smaller {
      flex-direction: column;
      align-items: start;
    }
  }

  &-link {
    color: #fff;
    opacity: 60%;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: opacity 0.1s;

    &:hover {
      opacity: 100%;
    }
  }

  &-link-with-menu {
    position: relative;

    &:hover .header-menu {
      opacity: 1;
      pointer-events: auto;
    }
  }

  &-menu {
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

    &::before {
      content: "";
      position: absolute;
      top: -20px;
      left: 0;
      right: 0;
      height: 40px;
      background-color: #00000001;
    }
  }

  &-menu-link {
    color: #999;
    padding: 10px;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.1s, color 0.1s;

    &:hover {
      color: #fff;
      background-color: #191919;
    }
  }

  &-buttons {
    display: flex;
    gap: 10px;

    @include mixins.mobile-and-smaller {
      justify-content: center;
      width: 100%;
    }
  }
}
</style>
