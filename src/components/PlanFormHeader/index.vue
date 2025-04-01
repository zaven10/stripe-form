<template>
  <div class="grid gap-5">
    <div class="flex items-center justify-between">
      <h1 class="text-4xl font-bold text-[#1d49a6]">Selected Plan:</h1>
      <button
        class="flex items-center gap-2 py-1.5 px-3 bg-[#1d49a6] rounded-full text-white hover:bg-[#1d49a6]/80 cursor-pointer transition-all"
        @click="removeSelectedPlan"
      >
        <span class="font-semibold text-sm">Choose a Different Plan</span>
      </button>
    </div>
    <div class="grid gap-1.5 justify-items-start">
      <div class="inline-flex items-center gap-3 bg-[#f1f1f1] py-0.5 px-5">
        <span class="font-bold text-lg text-black" v-text="state.selected?.title" />
        <span class="flex items-baseline gap-1">
          <h3 class="font-bold text-2xl text-black">${{ state.selected?.price }}</h3>
          <span class="text-[#6b7588] text-sm">/month</span>
        </span>
      </div>
      <template v-if="state.selected?.includes?.length">
        <div
          v-for="item in state.selected.includes"
          :key="item"
          class="ml-3 bg-[#f1f1f1] py-0.5 pl-3 pr-10 inline-flex"
        >
          <span v-text="item" class="text-[#6b7588] font-semibold text-[15px]"></span>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePlanFormHeaderComponent } from './index.script'

const { state, removeSelectedPlan } = usePlanFormHeaderComponent()
</script>
