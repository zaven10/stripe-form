<template>
  <div
    :class="[
      'bg-white p-6 rounded-2xl shadow-xl min-h-[500px] border-2 border-transparent relative hover:border-[#357ff7] transition-all select-none',
      { '!border-[#357ff7] !bg-[#f6f8fe]': isPopular || isSelected },
    ]"
  >
    <div class="grid gap-5">
      <div class="grid gap-1">
        <h2 class="font-semibold text-lg" v-text="title" />
        <div>
          <span class="text-2xl font-bold" v-text="`$${price}`" />
          <span class="text-[#667489] text-sm"> /month </span>
        </div>
      </div>
      <button
        :class="[
          'text-black p-2.5 bg-[#f3f5f9] rounded-xl font-semibold cursor-pointer hover:bg-[#377ef6] transition-all hover:text-white',
          { 'text-white !bg-[#377ef6]': isSelected },
        ]"
        @click="$emit('onSelect')"
      >
        {{ isSelected ? 'Selected' : 'Select Plan' }}
      </button>
      <div class="mt-3">
        <ul class="grid gap-3.5">
          <li v-for="item in includes" :key="item" class="flex items-center gap-2">
            <icon icon="icon-park-outline:check" color="#3c81f7" />
            <span v-text="item" class="text-[#667489] text-sm"></span>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="isPopular"
      class="bg-[#357ff7] text-white text-xs w-[65px] text-center py-1 absolute top-px right-px rounded-tr-xl rounded-bl-xl"
    >
      Popular
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IPlanCardProps } from './index.script'

import { Icon } from '@iconify/vue'

defineProps<IPlanCardProps>()
</script>
