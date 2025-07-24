<template>
  <the-header
    title="Choose Your Newsletter Plan"
    subtitle="All plans include a personalized, professionally designed monthly email newsletter tailored to your city."
  />
  <section class="grid lg:grid-cols-3 gap-6">
    <plan-card
      v-for="item in data"
      :key="item.priceId"
      :title="item.title"
      :price="item.price"
      :is-popular="item.isPopular"
      :is-selected="item.isSelected"
      :includes="item.includes"
      @on-select="$emit('on-select', item)"
    />
  </section>
</template>

<script lang="ts" setup>
import type {
  IPlanSelectionStepProps,
  IPlanSelectionStepEmits,
} from './index.script'

defineProps<IPlanSelectionStepProps>()
defineEmits<IPlanSelectionStepEmits>()
</script>
