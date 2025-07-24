<template>
  <div class="grid gap-5">
    <div class="flex items-center justify-between gap-2">
      <h1 class="text-xl sm:text-3xl lg:text-4xl font-bold text-app-primary">
        Your Selected Plan:
      </h1>
      <button
        class="flex items-center py-1.5 px-3 bg-app-primary rounded-full text-white hover:bg-app-primary/80 cursor-pointer transition-all"
        @click="removeSelectedPlan"
      >
        <span class="font-semibold text-[10px] sm:text-sm">Choose a Different Plan</span>
      </button>
    </div>
    <div
      class="grid gap-1 justify-items-start bg-app-primary rounded-lg py-3 px-4"
    >
      <div class="flex items-center gap-3">
        <span
          class="font-bold text-lg text-white"
          v-text="state.selected?.title"
        />
        <span class="flex items-baseline gap-1">
          <h3 class="font-bold text-xl lg:text-2xl text-white">
            ${{ state.selected?.price }}
          </h3>
          <span class="text-white text-sm font-bold">/ monthly</span>
        </span>
      </div>
      <template v-if="state.selected?.includes?.length">
        <ul
          v-for="item in state.selected.includes"
          :key="item"
          class="list-disc pl-5"
        >
          <li
            class="text-app-light-blue text-xs sm:text-[15px] marker:text-white"
            v-text="item"
          />
        </ul>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePlanFormHeaderComponent } from './index.script'

const { state, removeSelectedPlan } = usePlanFormHeaderComponent()
</script>
