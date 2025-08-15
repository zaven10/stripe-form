<template>
  <!-- Desktop Menu -->
  <nav
    v-if="!isOpen"
    class="hidden lg:flex space-x-8 text-white font-medium"
    aria-label="Main navigation"
  >
    <template v-for="item in items" :key="item.label">
      <nuxt-link
        :href="item.href"
        :target="item.target"
        :rel="item.rel"
        class="hover:text-primary transition"
        :aria-label="item.ariaLabel || item.label"
      >
        {{ item.label }}
      </nuxt-link>
    </template>
  </nav>
  <!-- Mobile Hamburger -->
  <button
    aria-label="Open menu"
    class="lg:hidden text-white hover:text-[#C94001] transition duration-200 ease-in-out"
    :aria-expanded="isOpen"
    aria-controls="hamburger-overlay"
    @click="$emit('onToggleMenu')"
  >
    <span aria-hidden="true">
      <svg
        data-bbox="20.5 54 159 92"
        viewBox="0 0 200 200"
        height="42"
        width="42"
        xmlns="http://www.w3.org/2000/svg"
        data-type="shape"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="fill-current"
      >
        <g>
          <path d="M179.5 54v9.517h-159V54h159z" />
          <path d="M179.5 95.241v9.517h-159v-9.517h159z" />
          <path d="M179.5 136.483V146h-159v-9.517h159z" />
        </g>
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import type { IHeaderMenuProps, IEmits } from './index.script'

defineProps<IHeaderMenuProps>()
defineEmits<IEmits>()
</script>
