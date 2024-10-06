<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <MaxWidthContainer class="footer-inner">
      <div class="footer-socials">
        <img src="~/assets/TopBarLogo.svg" alt="Redot logo" class="footer-logo" />
        <div class="footer-spacer" />
        <img src="~/assets/social-github.svg" alt="GitHub" class="footer-social" />
        <img src="~/assets/social-discord.svg" alt="Discord" class="footer-social" />
        <img src="~/assets/social-twitter.svg" alt="Twitter" class="footer-social" />
        <img src="~/assets/social-reddit.svg" alt="Reddit" class="footer-social" />
      </div>

      <div class="footer-columns">
        <div class="footer-column">
          <SectionTitle small>Redot Engine</SectionTitle>

          <a href="#" class="footer-link">Download</a>
          <a href="#" class="footer-link">Documentation</a>
          <a href="#" class="footer-link">Source Code</a>
        </div>

        <div class="footer-column">
          <SectionTitle small>Project</SectionTitle>

          <a href="#" class="footer-link">News</a>
          <a href="#" class="footer-link">Code of Conduct</a>
          <a href="#" class="footer-link">Teams</a>
          <a href="#" class="footer-link">Communities</a>
        </div>

        <div class="footer-column">
          <SectionTitle small>Resources</SectionTitle>

          <a href="#" class="footer-link">Assets</a>
          <a href="#" class="footer-link">Press Kit</a>
        </div>
      </div>

      <SectionDescription>© 2024</SectionDescription>
    </MaxWidthContainer>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #191919;
  padding: 40px 0;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo {
  width: 178px;
  height: 40px;
}

.footer-spacer {
  flex: 1;
}

.footer-social {
  width: 32px;
  height: 32px;
}

.footer-columns {
  display: flex;
  gap: 20px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.footer-link {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  opacity: 60%;
  transition: opacity 0.1s;
}

.footer-link:hover {
  opacity: 100%;
}
</style>
