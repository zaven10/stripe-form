<template>
  <header class="z-50 bg-app-primary w-full shadow-md" role="banner">
    <div class="container mx-auto flex items-center justify-between p-4 md:px-8">
      <!-- Logo -->
      <nuxt-link
        href="https://www.realinfobox.com"
        target="_self"
        class="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Go to Real Info Box homepage"
      >
        <img
          src="https://static.wixstatic.com/media/40168f_088613f932284de7a6a6120290b3a6d7~mv2.png/v1/fill/w_544,h_157,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/real%20info%20box%20logo%20white.png"
          alt="Real Info Box Logo"
          class="h-10 md:h-16 object-contain"
          loading="eager"
        >
      </nuxt-link>
      <!-- Header menu -->
      <header-menu :is-open="isOpen" :items="items" @on-toggle-menu="onToggleMenu" />
    </div>

    <!-- Hamburger Overlay -->
    <transition name="fade">
      <hamburger-overlay
        v-if="isOpen"
        :items="items"
        :is-open="isOpen"
        :social-links="socialLinks"
        @on-close="onCloseMenu"
      />
    </transition>
  </header>
</template>

<script setup lang="ts">
import { useTheHeaderComponent } from './index.script'

const {
  socialLinks,
  items,
  isOpen,
  onToggleMenu,
  onCloseMenu,
} = useTheHeaderComponent()
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
