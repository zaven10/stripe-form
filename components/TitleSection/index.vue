<template>
  <div class="text-center grid gap-2 lg:gap-3 lg:w-[40rem]">
    <h1 class="text-2xl lg:text-4xl font-bold text-app-dark-text" v-text="title" />
    <span class="text-[15px] lg:text-base text-app-light-text" v-text="subtitle" />
  </div>
</template>

<script lang="ts" setup>
import { type ITitleSectionProps } from './index.script'

defineProps<ITitleSectionProps>()
</script>
