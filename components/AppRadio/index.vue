<template>
  <div class="grid gap-2 select-none">
    <label
      v-for="item in items"
      :key="item.value"
      class="flex items-center gap-2 cursor-pointer"
    >
      <input
        v-model="selectedValue"
        type="radio"
        :value="item.value"
        class="form-radio ring-app-primary focus:ring-app-primary active:ring-app-primary"
      >
      <span class="text-sm" v-text="item.label" />
    </label>
  </div>
</template>

<script setup lang="ts">
import { type IAppRadio } from './index.script'

// eslint-disable-next-line vue/require-prop-types
const selectedValue = defineModel()

defineProps<IAppRadio>()
</script>
