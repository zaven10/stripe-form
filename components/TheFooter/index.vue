<template>
  <footer>
    <div class="bg-black lg:pt-10 lg:pb-4 text-white ">
      <div class="container mx-auto px-4">
        <div class="flex justify-between lg:items-center px-3 py-6">
          <ul class="flex gap-2 lg:gap-9" aria-label="Social Bar">
            <li v-for="social in socialLinks" :key="social.label">
              <nuxt-link
                :href="social.href"
                target="_blank"
                rel="noreferrer noopener"
                :aria-label="social.label"
              >
                <img
                  :src="social.icon"
                  :alt="social.label"
                  class="w-3 h-3 lg:w-8 lg:h-8 object-contain"
                >
              </nuxt-link>
            </li>
          </ul>
          <div class="grid md:flex justify-between items-center gap-2 md:gap-10 lg:gap-20">
            <div class="flex items-center gap-2">
              <img
                loading="lazy"
                src="https://static.wixstatic.com/media/f0c42b_d2f7b714d77749a88aad2e4067865f57~mv2.png/v1/fill/w_63,h_63,fp_0.02_0.02,lg_1,q_85,enc_avif,quality_auto/f0c42b_d2f7b714d77749a88aad2e4067865f57~mv2.png"
                data-ssr-src-done="true"
                fetchpriority="high"
                class="w-4 h-4 lg:w-9 lg:h-9 object-cover"
              >
              <span>
                <nuxt-link
                  data-auto-recognition="true"
                  href="mailto:info@realinfobox.com"
                  class="text-[10px] lg:text-base"
                >info@realinfobox.com</nuxt-link>
              </span>
            </div>
            <div class="flex items-center gap-2">
              <img
                loading="lazy"
                src="https://static.wixstatic.com/media/f0c42b_55a5f3f8cafa4a05a1c4fe1d70a57072~mv2.png/v1/fill/w_63,h_63,al_c,lg_1,q_85,enc_avif,quality_auto/f0c42b_55a5f3f8cafa4a05a1c4fe1d70a57072~mv2.png"
                data-ssr-src-done="true"
                fetchpriority="high"
                class="w-4 h-4 lg:w-9 lg:h-9 object-cover"
              >
              <span>
                <nuxt-link
                  data-auto-recognition="true"
                  href="tel:(403) 909-0582"
                  class="text-[10px] lg:text-base"
                >(403) 909-0582</nuxt-link>
              </span>
            </div>
          </div>
        </div>
        <hr class="my-0 lg:my-8 border-0 h-0.5 bg-[#6e6e6e] shadow-lg opacity-80">
        <div class="flex justify-between items-center px-3 py-6">
          <div>
            <span class="text-[#c2c2c2] text-[10px] lg:text-[15px]">©2023 Real Info Box</span>
          </div>
          <div>
            <ul class="flex gap-5 lg:gap-10 justify-between">
              <li v-for="link in legalLinks" :key="link.href" aria-current="false">
                <div>
                  <nuxt-link
                    :href="link.href"
                    target="_self"
                    class="text-[10px] lg:text-xl font-semibold"
                  >
                    {{ link.label }}
                  </nuxt-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-3 lg:p-12 text-center">
      <span
        class="text-[10px] lg:text-sm font-light"
      >© 2024 Real Infobox. All Rights Reserved</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useTheFooterComponent } from './index.script'

const {
  socialLinks,
  legalLinks,
} = useTheFooterComponent()
</script>
