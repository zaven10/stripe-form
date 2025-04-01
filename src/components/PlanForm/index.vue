<template>
  <div v-if="state.selected" class="container mx-auto grid gap-10 w-[800px] px-6 pb-10">
    <plan-form-header />
    <div>
      <section class="grid gap-10">
        <h1 class="text-black font-bold text-3xl">Customize Your Plan</h1>
        <div class="grid gap-3">
          <h2 class="font-semibold text-lg">Additional Contacts (Optional)</h2>
          <app-select v-model="state.selected.additionContacts" :items="state.additionalContacts" />
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
        <div class="flex items-center justify-end">
          <button
            class="flex items-center gap-2 py-2 px-4 bg-[#1d49a6] rounded-full text-white hover:bg-[#1d49a6]/80 cursor-pointer transition-all"
          >
            <span class="font-semibold">Continue to Payment</span>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AddOnsCard from '../../components/AddOnsCard/index.vue'
import AppSelect from '../../components/AppSelect/index.vue'
import PlanFormHeader from '../../components/PlanFormHeader/index.vue'

import { usePlanFormComponent } from './index.script'

const { state, totalAmount, onAddOnsUpdateHandler } = usePlanFormComponent()
</script>
