<template>
  <main class="min-h-screen py-10 px-3 bg-[#f8fafc] grid place-items-center gap-20">
    <div class="container mx-auto grid w-[1100px]">
      <div class="grid gap-16 place-items-center">
        <the-header />
        <section class="grid grid-cols-3 gap-6">
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
      </div>
    </div>
    <div
      v-if="state.selected"
      :key="state.selected.priceId"
      class="container mx-auto grid w-[1100px] px-6 pb-10"
    >
      <div>
        <section class="grid gap-10">
          <h1 class="text-black font-bold text-3xl">Customize Your Plan</h1>
          <div class="grid gap-3">
            <h2 class="font-semibold text-lg">Additional Contacts (Optional)</h2>
            <app-select
              v-model="state.selected.additionContacts"
              :items="state.additionalContacts"
            />
          </div>
          <div v-if="state.addOns.length" class="grid gap-3">
            <h2 class="font-semibold text-lg">Add-On Services (Optional)</h2>
            <div class="grid gap-3">
              <add-ons-card
                v-for="item in state.addOns"
                :key="item.title"
                :title="item.title"
                :price="item.price"
                @update:modelValue="onAddOnsUpdateHandler($event, item)"
              />
            </div>
          </div>
          <hr class="h-px bg-gray-200 border-0" />
          <div class="grid gap-3">
            <h2 class="font-semibold text-lg">Order Summary</h2>
            <div class="px-5 py-4 bg-[#e6ecf6] rounded-xl grid gap-2.5">
              <div class="flex justify-between items-center">
                <span>Selected Plan:</span>
                <span class="font-semibold" v-text="state.selected.title" />
              </div>
              <div v-if="state.selected.additionContacts" class="flex justify-between items-center">
                <span>Additional Contacts:</span>
                <span class="font-semibold flex items-center gap-1">
                  <span v-html="state.selected.additionContacts?.text || '&mdash;'" />
                  <span>contacts</span>
                </span>
              </div>
              <div v-if="state.selected.addOns?.length" class="grid gap-2">
                <span>Add-ons:</span>
                <ul class="pl-6 grid gap-1">
                  <li
                    v-for="item in state.selected.addOns"
                    :key="item.priceId"
                    class="flex items-center justify-between text-sm"
                  >
                    <span v-text="item.title" />
                    <span class="font-semibold">${{ item.price }}/mo</span>
                  </li>
                </ul>
              </div>
              <hr class="h-px bg-[#80848a] border-0" />
              <div class="flex justify-between items-center font-bold text-xl">
                <span>Total:</span>
                <span v-text="totalAmount" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import TheHeader from '../../components/TheHeader/index.vue'
import PlanCard from '../../components/PlanCard/index.vue'
import AddOnsCard from '../../components/AddOnsCard/index.vue'
import AppSelect from '../../components/AppSelect/index.vue'

import { useHomeView } from './index.script'

const { state, setSelectedPlan, onAddOnsUpdateHandler, totalAmount } = useHomeView()
</script>
