<script setup lang="ts"></script>

<template>
  <section class="download-section">
    <div class="download-section__content">
      <div class="download-section__requirements">
        <div class="download-section__requirements__container-image">
          <img
            alt="Requirements"
            class="download-section__image"
            src="/img/download/requirements.webp"
          >
        </div>

        <div class="download-section__requirements__container-text">
          <div class="download-section__text">
            <span class="download-section__title">
              Redot Engine System <br>
              Requirements
            </span>
            <span class="download-section__description">
              Recommended: Vulkan 1.0 compatible hardware Minimal: OpenGL 3.3 /
              OpenGL ES 3.0 compatible hardware Additional requirements for the
              .NET version: <br>
              <NuxtLink
                class="download-section__link"
                href="https://dotnet.microsoft.com/en-us/download"
              >
                .NET SDK
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
      <div class="download-section__redot">
        <div class="download-section__redot__container-image">
          <img
            alt="Requirements"
            class="download-section__image"
            src="/img/seo/banner.png"
          >
        </div>
        <div class="download-section__redot__container-text">
          <div class="download-section__text">
            <span class="download-section__title"> What is Redot Engine? </span>
            <span class="download-section__description">
              Redot Engine is a free, open-source game development platform for
              2D and 3D projects. Based on Godot, it offers flexibility and ease
              of use for developers of all levels, with cross-platform support
              and a collaborative community.
            </span>
          </div>
          <div class="download-section__button">
            <LinkButton href="https://docs-latest.redotengine.org/about/introduction#about-redot-engine" type="outline"> Learn More &rarr; </LinkButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.download-section {
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;
    row-gap: 8rem;
    overflow: hidden;
  }

  &__button {
    margin-top: 1rem;
  }

  &__requirements {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-flow: row;
    place-items: center;
    gap: 1rem;

    @include mixins.desktop-and-larger {
      grid-auto-flow: column;
    }

    &__container-image {
      position: relative;
      grid-column: span 12 / span 12;
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;

      @include mixins.mobile-and-smaller {
        min-height: 200px;
      }

      @include mixins.desktop-and-larger {
        align-items: flex-start;
        grid-column: span 6 / span 6;
        grid-column-start: 1;
      }
    }

    &__container-text {
      position: relative;
      grid-column: span 12 / span 12;
      padding: 1.5rem 1.25rem;
      text-align: left;

      @include mixins.desktop-and-larger {
        grid-column: span 5 / span 5;
        padding-bottom: 0;
        grid-column-start: 8;
      }
    }
  }

  &__redot {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-flow: row;
    place-items: center;
    gap: 1rem;

    @include mixins.desktop-and-larger {
      grid-auto-flow: column;
    }

    &__container-image {
      position: relative;
      grid-column: span 12 / span 12;
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;

      @include mixins.mobile-and-smaller {
        min-height: 200px;
      }

      @include mixins.desktop-and-larger {
        align-items: flex-start;
        grid-column: span 6 / span 6;
        grid-column-start: 8;
      }
    }

    &__container-text {
      position: relative;
      grid-column: span 12 / span 12;
      padding: 1.5rem 1.25rem;
      text-align: left;

      @include mixins.desktop-and-larger {
        grid-column: span 5 / span 5;
        padding-bottom: 0;
        grid-column-start: 1;
      }
    }
  }

  &__image {
    border-radius: 0.75rem;
    width: 100%;
    aspect-ratio: 16 / 9;
    transition: opacity 500ms;
    object-fit: cover;

    @include mixins.mobile-and-smaller {
      height: auto;
    }
  }

  &__link {
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #3388ff;
    text-decoration: none;
  }

  &__link:hover {
    text-decoration: underline;
  }

  &__text {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  &__title {
    font-weight: 800;
    font-size: 2.25rem;
    letter-spacing: -1px;
    line-height: 2.5rem;
  }

  @include mixins.mobile-and-smaller {
    &__title {
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: 0;
    }
  }

  &__description {
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgba(#fff, 80%);
  }
}
</style>
