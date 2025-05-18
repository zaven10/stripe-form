import { watch } from 'vue'

import { usePlans } from '@/composables'

import type { IAdditionContact, IAddOnsService, IPlan } from '@/interfaces'

import { BillingOptions, PriceId } from '@/enums'

import { $getPriceMonthlyOrYearly } from '@/utils'

export const useHomeView = () => {
  const { state, setData, setSelectedPlan, setAddOnsData, setAdditionalContacts } = usePlans()

  setData([
    {
      title: 'Newsletter Package',
      price: 55,
      addOns: [],
      billingOption: BillingOptions.MONTHLY,
      priceId: PriceId.NEWS_LETTER,
      additionContacts: undefined,
      includes: ['Email Newsletter (Up to 500 contacts)'],
    },
    {
      title: 'Professional Plan',
      price: 85,
      isPopular: true,
      billingOption: BillingOptions.MONTHLY,
      priceId: PriceId.PROFESSIONAL,
      addOns: [],
      additionContacts: undefined,
      includes: ['Email Newsletter (Up to 2,500 contacts)', 'Weekly Social Media Reports'],
    },
    {
      title: 'Premium Plan',
      price: 125,
      billingOption: BillingOptions.MONTHLY,
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

  const getAddOnesData = (value: IPlan, isMonthly: boolean) => {
    const data: IAddOnsService[] = []

    const percent = isMonthly ? 0 : 10

    if (value.priceId === PriceId.NEWS_LETTER) {
      data.push({
        title: 'Weekly Social Media Reports',
        price: $getPriceMonthlyOrYearly(30, percent),
        priceId: isMonthly
          ? PriceId.WEEKLY_SOCIAL_MEDIA_REPORTS_MONTHLY
          : PriceId.WEEKLY_SOCIAL_MEDIA_REPORTS_YEARLY,
      })
    }

    if (value.priceId !== PriceId.PREMIUM) {
      data.push({
        title: 'Listings Update Service',
        price: $getPriceMonthlyOrYearly(45, percent),
        priceId: isMonthly
          ? PriceId.LISTING_UPDATE_SERVICE_MONTHLY
          : PriceId.LISTING_UPDATE_SERVICE_YEARLY,
      })
    }

    return data
  }

  const getAdditionalContactData = (value: IPlan, isMonthly: boolean) => {
    const data: IAdditionContact[] = []

    const percent = isMonthly ? 0 : 10
    const priceString = isMonthly ? 'monthly' : 'yearly'

    if (value.priceId === PriceId.NEWS_LETTER) {
      const price = $getPriceMonthlyOrYearly(15, percent)

      data.push({
        text: `501-2,500 contacts (+$${price.value}/${priceString})`,
        value: price.total,
        price,
        priceId: isMonthly ? PriceId.CONTACTS_501_2500_MONTHLY : PriceId.CONTACTS_501_2500_YEARLY,
      })
    }

    if (value.priceId !== PriceId.PREMIUM) {
      const price = $getPriceMonthlyOrYearly(25, percent)

      data.push({
        text: `2,501-5,000 contacts (+$${price.value}/${priceString})`,
        value: price.total,
        price,
        priceId: isMonthly ? PriceId.CONTACTS_2501_5000_MONTHLY : PriceId.CONTACTS_2501_5000_YEARLY,
      })
    }

    const price = $getPriceMonthlyOrYearly(45, percent)

    data.push({
      text: `5,001-10,000 contacts (+$${price.value}/${priceString})`,
      value: price.total,
      price,
      priceId: isMonthly ? PriceId.CONTACTS_5001_10000_MONTHLY : PriceId.CONTACTS_5001_10000_YEARLY,
    })

    return data
  }

  watch([() => state.selected, () => state.selected?.billingOption], ([value, billingOption]) => {
    if (!value) {
      return
    }

    const isMonthly = billingOption === BillingOptions.MONTHLY

    const addOnsData = getAddOnesData(value, isMonthly)
    const additionalContactsData = getAdditionalContactData(value, isMonthly)

    setAddOnsData(addOnsData)
    setAdditionalContacts(additionalContactsData)

    if (value.addOns?.length) {
      state.selected!.addOns = value.addOns
        .map(({ title }) => state.addOns.find((item) => item.title === title))
        .filter((v) => v) as IAddOnsService[]
    }

    if (value.additionContacts) {
      state.selected!.additionContacts = state.additionalContacts.find((item) =>
        item.text.startsWith(value?.additionContacts?.text?.slice(0, 5) || ''),
      ) as IAdditionContact
    }
  })

  const onAddOnsUpdateHandler = (value: boolean, item: IAddOnsService) => {
    if (!value || !item) {
      return
    }

    state.selected?.addOns?.push(item)
  }

  return {
    state,
    onAddOnsUpdateHandler,
    setSelectedPlan,
  }
}
