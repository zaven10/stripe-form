<template>
  <div
    v-if="state.selected"
    class="container mx-auto grid gap-7 lg:gap-5 max-w-[800px] lg:px-6 lg:pb-10"
  >
    <plan-form-header />
    <div>
      <section class="grid gap-5 lg:gap-10">
        <h1 class="text-black font-bold text-2xl lg:text-3xl select-none">
          Customize Your Plan
        </h1>
        <div class="grid gap-1 lg:gap-2">
          <h2 class="font-semibold text-sm lg:text-lg">
            Select Your Market:
          </h2>
          <h4 class="font-light text-xs lg:text-sm">
            We currently offer our custom real estate email newsletters in the
            following cities:
          </h4>
          <app-select
            v-model="state.selected.location"
            :items="state.locations"
            default-option="Choose your city..."
          />
        </div>
        <div class="grid gap-1 lg:gap-2">
          <h2 class="font-semibold text-sm lg:text-lg">
            Add More Contacts (Optional)
          </h2>
          <app-select
            v-model="state.selected.additionContacts"
            :items="state.additionalContacts"
            default-option="Choose contacts"
          />
        </div>
        <div v-if="state.addOns.length" class="grid gap-1 lg:gap-2">
          <h2 class="font-semibold text-sm lg:text-lg">
            Add-On Services (Optional)
          </h2>
          <div class="grid gap-3">
            <add-ons-card
              v-for="item in state.addOns"
              :key="item.title"
              :title="item.title"
              :price="item.price.value"
              @update:model-value="onAddOnsUpdateHandler($event, item)"
            />
          </div>
        </div>
        <div class="grid gap-3">
          <h2 class="font-semibold text-lg">
            Order Summary
          </h2>
          <div class="px-5 py-4 bg-app-silver rounded-xl grid gap-2.5">
            <div class="flex justify-between items-center">
              <span class="text-md">Selected Plan:</span>
              <span class="font-semibold" v-text="selectedPlanTitle" />
            </div>
            <div v-if="state.selected.additionContacts" class="grid gap-2">
              <span>Additional Contacts:</span>
              <ul class="pl-6 grid gap-1">
                <li class="flex items-center justify-between text-sm">
                  <span v-text="additionalContactsData.title" />
                  <span class="font-semibold">${{ additionalContactsData.price }}/{{
                    billingPostfix
                  }}</span>
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
                  <span class="font-bold">${{ item.price.value }}/{{ billingPostfix }}</span>
                </li>
              </ul>
            </div>
            <hr class="h-px bg-app-divider-gray border-0">
            <div class="flex justify-between font-bold text-xl">
              <h2 class="font-semibold text-sm lg:text-lg">
                Billing Options
              </h2>
              <div class="grid gap-3">
                <app-radio
                  v-model="state.selected.billingOption"
                  :items="state.billingOptions"
                />
              </div>
            </div>
            <hr class="h-px bg-app-divider-gray border-0">
            <div>
              <div
                v-if="!isMonthly"
                class="flex justify-between items-center font-bold"
              >
                <span>Subtotal:</span>
                <span v-text="amount.subtotal" />
              </div>
              <div
                v-if="!isMonthly"
                class="flex justify-between items-center font-bold"
              >
                <span>Yearly Discount:</span>
                <span>-${{ amount.discount }} (10%) </span>
              </div>
              <div class="flex justify-between items-center font-bold">
                <span>Total:</span>
                <span v-text="amount.total" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <button
            :disabled="isDisabled"
            class="flex items-center gap-2 py-2 px-4 bg-app-primary rounded-full text-white hover:bg-app-primary/80 cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            @click="$emit('on-payment')"
          >
            <span class="font-semibold text-xs lg:text-base">Continue to Payment</span>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePlanFormComponent, type IEmits } from './index.script'

defineEmits<IEmits>()

const {
  state,
  onAddOnsUpdateHandler,
  additionalContactsData,
  billingPostfix,
  isMonthly,
  amount,
  selectedPlanTitle,
  isDisabled,
} = usePlanFormComponent()
</script>
