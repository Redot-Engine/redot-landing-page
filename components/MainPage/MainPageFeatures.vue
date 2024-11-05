<script setup lang="ts">
const isMobile = useIsMobile();
const featureFlags = useFeatureFlags();
</script>

<template>
  <MainPageSection title="Redot features">
    <template #button>
      <LinkButton v-show="!featureFlags.minimal" href="#" type="red">
        More features
        <Icon name="arrow" />
      </LinkButton>
    </template>

    <div class="features-grid">
      <img alt="scene and nodes" class="feature-image" src="~/assets/images/feature-scene.svg">
      <div>
        <SectionTitle :small="isMobile" variant="h3">Scene-driven design</SectionTitle>
        <SectionDescription big>
          Use building blocks called nodes to create more complex and reusable scenes.
          Add scripts to your scenes and customize built-in behavior to implement your unique game mechanics.
          Rely on composition and node hierarchy to make game logic clear at a glance.
        </SectionDescription>
      </div>

      <img alt="cube and square" class="feature-image" src="~/assets/images/feature-2d-3d.svg">
      <div>
        <SectionTitle :small="isMobile" variant="h3">Dedicated 3D and 2D engines</SectionTitle>
        <SectionDescription big>
          Make crisp and performant 2D games with Redot’s dedicated 2D rendering engine with real 2D pixel coordinates
          and 2D nodes. Redot's 3D nodes give you everything you need to build, animate, and render your 3D worlds and
          characters.
        </SectionDescription>
      </div>

      <img alt="cross platform feature" class="feature-image" src="~/assets/images/feature-crossplatform.svg">
      <div>
        <SectionTitle :small="isMobile" variant="h3">Cross platform</SectionTitle>
        <SectionDescription big>
          Develop on a wide range of supported platforms. Deploy your game on desktop, mobile, and the web in seconds.
        </SectionDescription>
      </div>
    </div>
  </MainPageSection>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
  align-items: center;

  @include mixins.mobile-and-smaller {
    grid-template-columns: 1fr;
    padding: 0 20px;
    gap: 15px;
  }
}

.feature-image {
  height: 300px;
  width: 100%;
  object-fit: contain;

  @include mixins.mobile-and-smaller {
    div + & {
      margin-top: 30px;
    }
  }
}
</style>
