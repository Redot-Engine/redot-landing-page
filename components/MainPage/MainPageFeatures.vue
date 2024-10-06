<script setup lang="ts">

</script>

<template>
  <MainPageSection title="Redot features">
    <template #button>
      <LinkButton href="#" type="red">
        More features
        <Icon name="arrow"/>
      </LinkButton>
    </template>

    <div class="features-grid">
      <img src="~/assets/feature-scene.svg" alt="" class="feature-image"/>
      <div>
        <SectionTitle>Scene-driven design</SectionTitle>
        <SectionDescription big>
          Use building blocks called nodes to create more complex and reusable scenes. Add scripts to your scenes and customize built-in behavior to implement your unique game mechanics. Rely on composition and node hierarchy to make game logic clear at a glance.
        </SectionDescription>
      </div>

      <img src="~/assets/feature-2d-3d.svg" alt="" class="feature-image"/>
      <div>
        <SectionTitle>Dedicated 2D and 3D engines</SectionTitle>
        <SectionDescription big>
          Make crisp and performant 2D games with Redot’s dedicated 2D rendering engine with real 2D pixel coordinates and 2D nodes. Redot's 3D nodes give you everything you need to build, animate, and render your 3D worlds and characters.
        </SectionDescription>
      </div>

      <img src="~/assets/feature-crossplatform.svg" alt="" class="feature-image"/>
      <div>
        <SectionTitle>Cross platform</SectionTitle>
        <SectionDescription big>
          Develop on a wide range of supported platforms. Deploy your game on desktop, mobile, and the web in seconds.
        </SectionDescription>
      </div>
    </div>
  </MainPageSection>
</template>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
  align-items: center;
}

.feature-image {
  height: 280px;
  width: 100%;
  object-fit: contain;
}
</style>
