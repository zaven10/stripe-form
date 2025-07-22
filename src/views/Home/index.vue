<template>
  <main class="min-h-screen lg:py-10 p-5 bg-[#f8fafc] grid place-items-center gap-20">
    <div class="container mx-auto grid max-w-[1100px]">
      <div class="grid gap-7 lg:gap-16 place-items-center">
        <plan-selection-step
          v-if="!state.selected"
          :data="state.data"
          @on-select="setSelectedPlan"
        />
        <plan-form v-else @on-payment="onPaymentHandler" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import PlanForm from '../../components/PlanForm/index.vue'
import PlanSelectionStep from '../../components/PlanSelectionStep/index.vue'

import { useHomeView } from './index.script'

const { state, setSelectedPlan, onPaymentHandler } = useHomeView()
</script>
