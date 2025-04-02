import { computed, type ComputedRef } from 'vue'

import { usePlans } from '@/composables'

import type { IAddOnsService } from '@/interfaces'

export const usePlanFormComponent = () => {
  const { state } = usePlans()

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

  const totalAmount: ComputedRef<string> = computed<string>(() => {
    let sum: number = state.selected?.price || 0

    if (state.selected?.addOns) {
      sum += state.selected?.addOns.reduce((s, item) => s + item.price, 0)
    }

    if (state.selected?.additionContacts) {
      sum += state.selected.additionContacts.value
    }

    return `$${sum}/month`
  })

  const additionalContactsData = computed(() => {
    const [text] = state.selected?.additionContacts?.text?.split(' ') || []

    return {
      title: `${text} contacts`,
      price: state.selected?.additionContacts?.value,
    }
  })

  return {
    state,
    additionalContactsData,
    totalAmount,
    onAddOnsUpdateHandler,
  }
}
