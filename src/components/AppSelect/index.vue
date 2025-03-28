<template>
  <div class="relative">
    <select
      v-model="additionContacts"
      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 pr-10 appearance-none outline-none"
    >
      <option selected value>Choose contacts</option>
      <option v-for="item in items" :key="item.value" v-text="item.text" :value="item" />
    </select>
    <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IAppSelect } from './index.script'

const additionContacts = defineModel()

defineProps<IAppSelect>()
</script>
