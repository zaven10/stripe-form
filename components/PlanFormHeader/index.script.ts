export const usePlanFormHeaderComponent = () => {
  const { state, removeSelectedPlan } = usePlansForm()

  return {
    state,
    removeSelectedPlan,
  }
}
