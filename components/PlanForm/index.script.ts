/* eslint-disable no-unused-vars */

import type { IAddOnsService } from '@/interfaces'

import { BillingOptions } from '@/enums'

export interface IEmits {
  (e: 'on-payment'): void
}

export const usePlanFormComponent = () => {
  const { state } = usePlansForm()

  const isMonthly = computed(
    () => state.value.selected?.billingOption === BillingOptions.MONTHLY,
  )

  const billingPostfix = computed(() => (isMonthly.value ? 'monthly' : 'yearly'))

  const onAddOnsUpdateHandler = (value: boolean, item: IAddOnsService) => {
    if (!value || !item) {
      if (state.value.selected?.addOns?.length) {
        state.value.selected.addOns = state.value.selected?.addOns?.filter(
          ({ priceId }) => priceId !== item.priceId,
        )
      }

      return
    }

    state.value.selected?.addOns?.push(item)
  }

  const amount: ComputedRef<any> = computed<any>(() => {
    let subtotal: number = state.value.selected?.price || 0

    if (!isMonthly.value) {
      subtotal *= 12
    }

    if (state.value.selected?.addOns) {
      subtotal += state.value.selected?.addOns.reduce(
        (s, item) => s + item.price?.value,
        0,
      )
    }

    if (state.value.selected?.additionContacts) {
      subtotal += state.value.selected.additionContacts?.price?.value
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
    const [text] = state.value.selected?.additionContacts?.text?.split(' ') || []

    return {
      title: `${text} contacts`,
      price: state.value.selected?.additionContacts!.price.value,
    }
  })

  const selectedPlanTitle = computed(() => {
    const price = isMonthly.value
      ? state.value.selected!.price
      : state.value.selected!.price * 12

    return `${state.value?.selected?.title} - $${price}/${billingPostfix.value}`
  })

  const isDisabled: ComputedRef<boolean> = computed<boolean>(
    () => !state.value.selected?.location,
  )

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
