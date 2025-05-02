import { usePlans } from '@/composables'

import { BillingOptions } from '@/enums'

import { computed } from 'vue'

export interface IAddOnsCardProps {
  title: string
  price: number
}

export const useAddOnsCardComponent = () => {
  const { state } = usePlans()

  const billingPostfix = computed(() =>
    state.selected?.billingOption === BillingOptions.MONTHLY ? 'monthly' : 'yearly',
  )

  return {
    billingPostfix,
  }
}
