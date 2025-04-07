<template>
  <div
    :class="[
      'rounded-xl border border-[#cecfd3] p-2.5 lg:px-4 lg:py-5 flex items-center bg-white transition-all',
      { '!bg-[#f6f8fe] !border-[#1d49a6]': isMarked },
    ]"
  >
    <div class="font-semibold grow text-xs lg:text-lg" v-text="title" />
    <div class="flex items-center gap-2 lg:gap-3 relative">
      <span class="font-semibold text-xs lg:text-lg">+${{ price }}/mo</span>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="isMarked" class="invisible absolute" />
        <div
          :class="[
            'relative w-11 h-6 bg-gray-200 rounded-full after:content-[\'\'] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all',
            {
              'after:translate-x-full after:border-white !bg-[#1d49a6]': isMarked,
            },
          ]"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IAddOnsCardProps } from './index.script'

defineProps<IAddOnsCardProps>()

const isMarked = defineModel()
</script>
