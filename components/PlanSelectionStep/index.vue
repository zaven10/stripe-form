<template>
  <title-section
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

  <title-section
    title="Try Your First Newsletter Risk-Free"
    subtitle="Create your account, send your first market update, and see the results for yourself. If it’s not exactly what you hoped for, we’ll provide a full refund - simple as that."
    class="[&>h1]:text-app-primary [&>h1]:text-3xl lg:w-[45rem] [&>span]:text-app-dark-text"
  />
</template>

<script lang="ts" setup>
import type {
  IPlanSelectionStepProps,
  IPlanSelectionStepEmits,
} from './index.script'

defineProps<IPlanSelectionStepProps>()
defineEmits<IPlanSelectionStepEmits>()
</script>
