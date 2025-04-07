<template>
  <div class="grid gap-2 select-none">
    <label v-for="item in items" :key="item.value" class="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        v-model="selectedValue"
        :value="item.value"
        class="form-radio ring-[#1d49a6] focus:ring-[#1d49a6] active:ring-[#1d49a6]"
      />
      <span class="text-sm lg:text-lg" v-text="item.label" />
    </label>
  </div>
</template>

<script setup lang="ts">
import { type IAppRadio } from './index.script'

const selectedValue = defineModel()

defineProps<IAppRadio>()
</script>
