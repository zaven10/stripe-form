import { computed, type ComputedRef } from 'vue'

import { usePlans } from '@/composables'

import type { IAddOnsService } from '@/interfaces'

import { BillingOptions } from '@/enums'

export interface IEmits {
  (e: 'on-payment'): void
}

export const usePlanFormComponent = () => {
  const { state } = usePlans()

  const isMonthly = computed(() => state.selected?.billingOption === BillingOptions.MONTHLY)

  const billingPostfix = computed(() => (isMonthly.value ? 'monthly' : 'yearly'))

  const onAddOnsUpdateHandler = (value: boolean, item: IAddOnsService) => {
    if (!value || !item) {
      if (state.selected?.addOns?.length) {
        state.selected.addOns = state.selected?.addOns?.filter(
          ({ priceId }) => priceId !== item.priceId,
        )
      }

      return
    }

    state.selected?.addOns?.push(item)
  }

  const amount: ComputedRef<any> = computed<any>(() => {
    let subtotal: number = state.selected?.price || 0

    if (!isMonthly.value) {
      subtotal *= 12
    }

    if (state.selected?.addOns) {
      subtotal += state.selected?.addOns.reduce((s, item) => s + item.price?.value, 0)
    }

    if (state.selected?.additionContacts) {
      subtotal += state.selected.additionContacts?.price?.value
    }

    const discount = (subtotal * 10) / 100
    const total = new Intl.NumberFormat('en-US').format(
      isMonthly.value ? subtotal : subtotal - discount,
    )

    return {
      subtotal: `$${new Intl.NumberFormat('en-US').format(subtotal)}/${isMonthly.value ? 'monthly' : 'yearly'}`,
      discount: new Intl.NumberFormat('en-US').format(discount),
      total: `$${total}/${isMonthly.value ? 'monthly' : 'yearly'}`,
    }
  })

  const additionalContactsData = computed(() => {
    const [text] = state.selected?.additionContacts?.text?.split(' ') || []

    return {
      title: `${text} contacts`,
      price: state.selected?.additionContacts!.price.value,
    }
  })

  const selectedPlanTitle = computed(() => {
    const price = isMonthly.value ? state.selected!.price : state.selected!.price * 12

    return `${state?.selected?.title} - $${price}/${billingPostfix.value}`
  })

  const isDisabled: ComputedRef<boolean> = computed<boolean>(() => !state.selected?.location)

  return {
    state,
    billingPostfix,
    additionalContactsData,
    amount,
    isMonthly,
    selectedPlanTitle,
    isDisabled,
    onAddOnsUpdateHandler,
  }
}
