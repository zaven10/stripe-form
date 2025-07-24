import { BillingOptions } from '@/enums'

import type {
  IAddOnsService,
  IPlan,
  IUsePlansFormState,
  IAdditionContact,
} from '@/interfaces'

export const usePlans = () => {
  const state: Ref<IUsePlansFormState> = useState<IUsePlansFormState>(() => ({
    data: [],
    addOns: [],
    location: '',
    locations: [
      { text: 'Calgary, Alberta, Canada', value: 'Calgary' },
      { text: 'Edmonton, Alberta, Canada', value: 'Edmonton' },
      { text: 'Vancouver, British Columbia, Canada', value: 'Vancouver' },
      { text: 'Victoria, British Columbia, Canada', value: 'Victoria' },
    ],
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
  }))

  const setData = (data: IPlan[]) => (state.value.data = data)
  const setAddOnsData = (data: IAddOnsService[]) => (state.value.addOns = data)
  const setAdditionalContacts = (data: IAdditionContact[]) => (
    state.value.additionalContacts = data
  )

  const setSelectedPlan = (value: IPlan) => {
    state.value.data.forEach((item) => {
      item.isSelected = item.title === value.title
    })

    state.value.selected = {
      ...value,
      addOns: [],
      location: '',
      additionContacts: '',
    }
  }

  const removeSelectedPlan = () => {
    state.value.selected = null

    state.value.data.forEach((item) => (item.isSelected = false))
  }

  const setAdditionContact = (value: IAdditionContact | undefined) => {
    if (!value) {
      return (state.value.selected!.additionContacts = '')
    }

    state.value.selected!.additionContacts = value
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
