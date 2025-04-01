import { computed, watch, type ComputedRef } from 'vue'

import { usePlans } from '@/composables'

import type { IAdditionContact, IAddOnsService, IPlan } from '@/interfaces'

import { PriceId } from '@/enums'

export const useHomeView = () => {
  const { state, setData, setSelectedPlan, setAddOnsData, setAdditionalContacts } = usePlans()

  setData([
    {
      title: 'Newsletter Package',
      price: 55,
      addOns: [],
      priceId: PriceId.NEWS_LETTER,
      additionContacts: undefined,
      includes: ['Email Newsletter (Up to 500 contacts)'],
    },
    {
      title: 'Professional Plan',
      price: 85,
      isPopular: true,
      priceId: PriceId.PROFESSIONAL,
      addOns: [],
      additionContacts: undefined,
      includes: ['Email Newsletter (Up to 2,500 contacts)', 'Weekly Social Media Reports'],
    },
    {
      title: 'Premium Plan',
      price: 125,
      priceId: PriceId.PREMIUM,
      addOns: [],
      additionContacts: undefined,
      includes: [
        'Email Newsletter (Up to 5,000 contacts)',
        'Weekly Social Media Reports',
        'Listings Update Service',
      ],
    },
  ])

  const getAddOnesData = (value: IPlan) => {
    const data: IAddOnsService[] = []

    if (value.priceId === PriceId.NEWS_LETTER) {
      data.push({
        title: 'Weekly Social Media Reports',
        price: 30,
        priceId: PriceId.WEEKLY_SOCIAL_MEDIA_REPORTS,
      })
    }

    if (value.priceId !== PriceId.PREMIUM) {
      data.push({
        title: 'Listings Update Service',
        price: 45,
        priceId: PriceId.LISTING_UPDATE_SERVICE,
      })
    }

    return data
  }

  const getAdditionalContactData = (value: IPlan) => {
    const data: IAdditionContact[] = []

    if (value.priceId === PriceId.NEWS_LETTER) {
      data.push({ text: '501 - 2,500', value: 15, priceId: PriceId.CONTACTS_501_2500 })
    }

    if (value.priceId !== PriceId.PREMIUM) {
      data.push({ text: '2,501-5,000', value: 25, priceId: PriceId.CONTACTS_2501_5000 })
    }

    data.push({ text: '5,001-10,000', value: 45, priceId: PriceId.CONTACTS_5001_10000 })

    return data
  }

  watch(
    () => state.selected,
    (value: IPlan | null) => {
      if (!value) {
        return
      }

      const addOnsData = getAddOnesData(value)
      const additionalContactsData = getAdditionalContactData(value)

      setAddOnsData(addOnsData)
      setAdditionalContacts(additionalContactsData)
    },
  )

  const onAddOnsUpdateHandler = (value: boolean, item: IAddOnsService) => {
    if (!value || !item) {
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

  return {
    state,
    totalAmount,
    onAddOnsUpdateHandler,
    setSelectedPlan,
  }
}
