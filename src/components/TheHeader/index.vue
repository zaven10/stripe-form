<template>
  <div class="text-center grid gap-2 lg:gap-3 lg:w-[40rem]">
    <h1 class="text-2xl lg:text-4xl font-bold text-[#030816]" v-text="title" />
    <span class="text-sm lg:text-base text-[#667489]" v-text="subtitle" />
  </div>
</template>

<script lang="ts" setup>
import { type ITheHeaderProps } from './index.script'

defineProps<ITheHeaderProps>()
</script>
