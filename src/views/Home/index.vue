<template>
  <main class="min-h-screen lg:py-10 p-5 bg-[#f8fafc] grid place-items-center gap-20">
    <div class="container mx-auto grid max-w-[1100px]">
      <div class="grid gap-7 lg:gap-16 place-items-center">
        <the-header v-if="!state.selected" />
        <section v-if="!state.selected" class="grid lg:grid-cols-3 gap-6">
          <plan-card
            v-for="item in state.data"
            :key="item.priceId"
            :title="item.title"
            :price="item.price"
            :is-popular="item.isPopular"
            :is-selected="item.isSelected"
            :includes="item.includes"
            @on-select="setSelectedPlan(item)"
          />
        </section>
        <plan-form v-else />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import TheHeader from '../../components/TheHeader/index.vue'
import PlanCard from '../../components/PlanCard/index.vue'
import PlanForm from '../../components/PlanForm/index.vue'

import { useHomeView } from './index.script'

const { state, setSelectedPlan } = useHomeView()
</script>
