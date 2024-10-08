<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <MaxWidthContainer class="footer-inner">
      <div class="footer-socials">
        <img
          src="~/assets/images/TopBarLogo.svg"
          alt="Redot logo"
          class="footer-logo"
        >
        <div class="footer-spacer" />
        <img
          src="~/assets/images/social-github.svg"
          alt="GitHub"
          class="footer-social"
        >
        <img
          src="~/assets/images/social-discord.svg"
          alt="Discord"
          class="footer-social"
        >
        <img
          src="~/assets/images/social-twitter.svg"
          alt="Twitter"
          class="footer-social"
        >
        <img
          src="~/assets/images/social-reddit.svg"
          alt="Reddit"
          class="footer-social"
        >
      </div>

      <div class="footer-columns">
        <div class="footer-column">
          <SectionTitle small>
            Redot Engine
          </SectionTitle>

          <NuxtLink
            href="#"
            class="footer-link"
          >
            Download
          </NuxtLink>
          <NuxtLink
            href="#"
            class="footer-link"
          >
            Documentation
          </NuxtLink>
          <NuxtLink
            href="#"
            class="footer-link"
          >
            Source Code
          </NuxtLink>
        </div>

        <div class="footer-column">
          <SectionTitle small>
            Project
          </SectionTitle>

          <NuxtLink
            href="#"
            class="footer-link"
          >
            News
          </NuxtLink>
          <NuxtLink
            href="#"
            class="footer-link"
          >
            Code of Conduct
          </NuxtLink>
          <NuxtLink
            href="#"
            class="footer-link"
          >
            Teams
          </NuxtLink>
          <NuxtLink
            href="#"
            class="footer-link"
          >
            Communities
          </NuxtLink>
        </div>

        <div class="footer-column">
          <SectionTitle small>
            Resources
          </SectionTitle>

          <NuxtLink
            href="#"
            class="footer-link"
          >
            Assets
          </NuxtLink>
          <NuxtLink
            href="#"
            class="footer-link"
          >
            Press Kit
          </NuxtLink>
        </div>
      </div>

      <SectionDescription class="footer-copyright">
        © 2024
      </SectionDescription>
    </MaxWidthContainer>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/styles/mixins";

.footer {
  border-top: 1px solid #191919;
  padding: 40px 0;

  &-inner {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &-socials {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    @include mixins.mobile-and-smaller {
      justify-content: center;
    }
  }

  &-logo {
    width: 178px;
    height: 40px;
  }

  &-spacer {
    flex: 1;

    @include mixins.mobile-and-smaller {
      flex: none;
      width: 100%;
    }
  }

  &-social {
    width: 32px;
    height: 32px;
  }

  &-columns {
    display: flex;
    gap: 20px;

    @include mixins.mobile-and-smaller {
      flex-direction: column;
      gap: 20px;
    }
  }

  &-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  &-link {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    opacity: 60%;
    transition: opacity 0.1s;

    &:hover {
      opacity: 100%;
    }
  }

  &-copyright {
    @include mixins.mobile-and-smaller {
      padding: 0 10px;
    }
  }
}
</style>
