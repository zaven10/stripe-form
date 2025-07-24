<template>
  <div
    :class="[
      'rounded-xl border border-app-light-gray2 p-2.5 lg:px-4 lg:py-5 flex items-center bg-white transition-all',
      { '!bg-app-light-gray3 !border-app-primary': isMarked },
    ]"
  >
    <div class="font-semibold grow text-xs lg:text-lg" v-text="title" />
    <div class="flex items-center gap-2 lg:gap-3 relative">
      <span class="font-bold text-xs lg:text-lg">+${{ price }}/{{ billingPostfix }}</span>
      <label class="inline-flex items-center cursor-pointer">
        <input v-model="isMarked" type="checkbox" class="invisible absolute">
        <div
          :class="[
            'relative w-11 h-6 bg-gray-200 rounded-full after:content-[\'\'] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all',
            {
              'after:translate-x-full after:border-white !bg-app-primary':
                isMarked,
            },
          ]"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IAddOnsCardProps, useAddOnsCardComponent } from './index.script'

defineProps<IAddOnsCardProps>()

// eslint-disable-next-line vue/require-prop-types
const isMarked = defineModel()

const { billingPostfix } = useAddOnsCardComponent()
</script>
