import { BillingOptions } from '@/enums'

export interface IAddOnsCardProps {
  title: string
  price: number
}

export const useAddOnsCardComponent = () => {
  const { state } = usePlansForm()

  const billingPostfix = computed(() => (
    state.value.selected?.billingOption === BillingOptions.MONTHLY
      ? 'monthly'
      : 'yearly'))

  return {
    billingPostfix,
  }
}
