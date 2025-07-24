<template>
  <div
    :class="[
      'bg-white p-6 rounded-2xl shadow-xl lg:min-h-[500px] border-2 border-transparent relative hover:border-app-primary transition-all select-none',
      { '!border-app-primary !bg-app-light-gray3': isSelected },
    ]"
  >
    <div class="grid gap-5">
      <div class="grid gap-1">
        <h2 class="font-semibold text-lg" v-text="title" />
        <div>
          <span class="text-2xl font-bold" v-text="`$${price}`" />
          <span class="text-app-light-text text-sm"> /month </span>
        </div>
      </div>
      <div>
        <ul class="grid gap-3.5">
          <li
            v-for="item in includes"
            :key="item"
            class="flex items-center gap-2"
          >
            <icon name="icon-park-outline:check" color="#3c81f7" />
            <span class="text-app-light-text text-sm" v-text="item" />
          </li>
        </ul>
      </div>
      <button
        :class="[
          'text-black p-2.5 bg-app-light-gray rounded-xl font-semibold cursor-pointer hover:bg-app-primary transition-all hover:text-white',
          { 'text-white !bg-app-primary': isSelected },
        ]"
        @click="$emit('onSelect')"
      >
        {{ isSelected ? 'Selected' : 'Choose This Plan' }}
      </button>
    </div>
    <div
      v-if="isPopular"
      class="bg-app-primary text-white text-xs w-[65px] text-center py-1 absolute top-px right-px rounded-tr-xl rounded-bl-xl"
    >
      Popular
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPlanCardProps, IEmits } from './index.script'

defineProps<IPlanCardProps>()
defineEmits<IEmits>()
</script>
