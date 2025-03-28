<template>
  <div
    :class="[
      'rounded-xl border border-[#cecfd3] px-4 py-5 flex items-center bg-white transition-all',
      { '!bg-[#f6f8fe] !border-[#9bbffa]': isMarked },
    ]"
  >
    <div class="font-semibold grow" v-text="title" />
    <div class="flex items-center gap-3">
      <span class="font-semibold">+${{ price }}/mo</span>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" v-model="isMarked" class="invisible" />
        <div
          :class="[
            'relative w-11 h-6 bg-gray-200 rounded-full after:content-[\'\'] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all',
            {
              'after:translate-x-full after:border-white !bg-[#357ff7]': isMarked,
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
