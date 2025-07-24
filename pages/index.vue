<template>
  <div class="grid gap-7 lg:gap-16 place-items-center">
    <plan-selection-step
      v-if="!state.selected"
      :data="state.data"
      @on-select="setSelectedPlan"
    />
    <plan-form v-else @on-payment="onPaymentHandler" />
  </div>
</template>

<script lang="ts" setup>
import { useHomeView } from './home/index.script'

const { stripe } = await useClientStripe()

const { state, setSelectedPlan, onPaymentHandler } = useHomeView(stripe)
</script>
