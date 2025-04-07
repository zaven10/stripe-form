import type {
  IAddOnsService,
  IPlan,
  IUsePlansState,
  IAdditionContact,
  IBillingOption,
} from '@/interfaces'

import { reactive } from 'vue'

const state: IUsePlansState = reactive({
  data: [],
  addOns: [],
  billingOptions: [],
  additionalContacts: [],
  selected: null,
})

export const usePlans = () => {
  const setData = (data: IPlan[]) => (state.data = data)
  const setBillingOptions = (data: IBillingOption[]) => (state.billingOptions = data)
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
    setBillingOptions,
    setAddOnsData,
    removeSelectedPlan,
    setData,
    setSelectedPlan,
    setAdditionalContacts,
    setAdditionContact,
  }
}
