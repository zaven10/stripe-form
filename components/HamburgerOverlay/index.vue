<template>
  <div
    class="fixed inset-0 z-50 flex items-stretch backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    aria-label="Site navigation"
    tabindex="-1"
  >
    <!-- Overlay background (click to close) -->
    <div class="flex-1" aria-hidden="true" @click="$emit('onClose')" />
    <!-- Menu content -->
    <div
      class="relative w-full max-w-full bg-white shadow-xl flex flex-col justify-between animate-slideInRight p-10 pb-1"
    >
      <!-- Close button -->
      <button
        type="button"
        class="absolute top-8 right-8 hover:rotate-90 duration-200 ease-in-out"
        aria-label="Close menu"
        @click="$emit('onClose')"
      >
        <svg
          viewBox="0 0 200 200"
          height="32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
        >
          <g>
            <path
              d="M166.333 38.892 160.442 33 99.667 93.775 38.892 33 33 38.892l60.775 60.775L33 160.442l5.892 5.891 60.775-60.775 60.775 60.775 5.891-5.891-60.775-60.775 60.775-60.775Z"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </button>
      <!-- Vertical menu -->
      <nav class="flex-1 grid place-items-center" aria-label="Mobile navigation">
        <ul class="grid text-center gap-2 px-8">
          <li v-for="item in items" :key="item.label">
            <nuxt-link
              :href="item.href"
              :target="item.target"
              :rel="item.rel"
              class="block py-3 text-2xl font-light hover:text-app-primary transition"
              :aria-label="item.ariaLabel || item.label"
              @click="$emit('onClose')"
            >
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- Social bar -->
      <div class="px-8 py-6 border-t border-white/10">
        <ul class="flex gap-2 justify-center" aria-label="Social Bar">
          <li v-for="social in socialLinks" :key="social.label">
            <nuxt-link
              :href="social.href"
              target="_blank"
              rel="noreferrer noopener"
              :aria-label="social.label"
            >
              <img :src="social.icon" :alt="social.label" class="w-6 h-6 object-contain">
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IHamburgerOverlayProps, type IEmits } from './index.script'

defineProps<IHamburgerOverlayProps>()
defineEmits<IEmits>()
</script>

<style lang="scss" scoped>
.animate-slideInRight {
  animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
