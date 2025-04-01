import { usePlans } from '@/composables'

export const usePlanFormHeaderComponent = () => {
  const { state, removeSelectedPlan } = usePlans()

  return {
    state,
    removeSelectedPlan,
  }
}
