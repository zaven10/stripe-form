<template>
  <div
    v-if="state.selected"
    class="container mx-auto grid gap-7 lg:gap-10 max-w-[800px] lg:px-6 lg:pb-10"
  >
    <plan-form-header />
    <div>
      <section class="grid gap-5 lg:gap-10">
        <h1 class="text-black font-bold text-2xl lg:text-3xl">Customize Your Plan</h1>
        <div class="grid gap-1 lg:gap-2">
          <h2 class="font-semibold text-sm lg:text-lg">Add More Contacts (Optional)</h2>
          <app-select v-model="state.selected.additionContacts" :items="state.additionalContacts" />
        </div>
        <div v-if="state.addOns.length" class="grid gap-1 lg:gap-2">
          <h2 class="font-semibold text-sm lg:text-lg">Add-On Services (Optional)</h2>
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
        <div v-if="state.billingOptions.length" class="grid gap-1 lg:gap-2">
          <h2 class="font-semibold text-sm lg:text-lg">Billing Options</h2>
          <div class="grid gap-3">
            <app-radio v-model="state.selected.billingOption" :items="state.billingOptions" />
          </div>
        </div>
        <hr class="h-px bg-gray-200 border-0" />
        <div class="grid gap-3">
          <h2 class="font-semibold text-lg">Order Summary</h2>
          <div class="px-5 py-4 bg-[#e6ecf6] rounded-xl grid gap-2.5">
            <div class="flex justify-between items-center">
              <span class="text-md">Selected Plan:</span>
              <span class="font-semibold" v-text="state.selected.title" />
            </div>
            <div v-if="state.selected.additionContacts" class="grid gap-2">
              <span>Additional Contacts:</span>
              <ul class="pl-6 grid gap-1">
                <li class="flex items-center justify-between text-sm">
                  <span v-text="additionalContactsData.title" />
                  <span class="font-semibold"
                    >${{ additionalContactsData.price }}/{{ billingPostfix }}</span
                  >
                </li>
              </ul>
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
                  <span class="font-semibold">${{ item.price }}/{{ billingPostfix }}</span>
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
            <span class="font-semibold text-xs lg:text-base">Continue to Payment</span>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AddOnsCard from '../../components/AddOnsCard/index.vue'
import AppSelect from '../../components/AppSelect/index.vue'
import AppRadio from '../../components/AppRadio/index.vue'
import PlanFormHeader from '../../components/PlanFormHeader/index.vue'

import { usePlanFormComponent } from './index.script'

const { state, totalAmount, onAddOnsUpdateHandler, additionalContactsData, billingPostfix } =
  usePlanFormComponent()
</script>
