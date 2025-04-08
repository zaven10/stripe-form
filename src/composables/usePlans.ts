import { BillingOptions } from '@/enums'

import type { IAddOnsService, IPlan, IUsePlansState, IAdditionContact } from '@/interfaces'

import { reactive } from 'vue'

const state: IUsePlansState = reactive({
  data: [],
  addOns: [],
  billingOptions: [
    {
      label: 'Monthly',
      value: BillingOptions.MONTHLY,
    },
    {
      label: 'Yearly (Save 10%)',
      value: BillingOptions.YEARLY,
    },
  ],
  additionalContacts: [],
  selected: null,
})

export const usePlans = () => {
  const setData = (data: IPlan[]) => (state.data = data)
  const setAddOnsData = (data: IAddOnsService[]) => (state.addOns = data)
  const setAdditionalContacts = (data: IAdditionContact[]) => (state.additionalContacts = data)

  const setSelectedPlan = (value: IPlan) => {
    state.data.forEach((item) => {
      item.isSelected = item.title === value.title
    })

    state.selected = {
      ...value,
      addOns: [],
      additionContacts: undefined,
    }
  }

  const removeSelectedPlan = () => {
    state.selected = null

    state.data.forEach((item) => (item.isSelected = false))
  }

  const setAdditionContact = (value: IAdditionContact | undefined) => {
    if (!value) {
      return (state.selected!.additionContacts = undefined)
    }

    state.selected!.additionContacts = value
  }

  return {
    state,
    setAddOnsData,
    removeSelectedPlan,
    setData,
    setSelectedPlan,
    setAdditionalContacts,
    setAdditionContact,
  }
}
