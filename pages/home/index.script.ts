import type { IAdditionContact, IAddOnsService, IPlan } from '@/interfaces'

import { BillingOptions, PriceId, Product } from '@/enums'

import { $getPriceMonthlyOrYearly } from '@/utils'

export const useHomeView = (stripe: any) => {
  const {
    state,
    setData,
    setSelectedPlan,
    setAddOnsData,
    setAdditionalContacts,
  } = usePlansForm()

  setData([
    {
      title: 'Essential Plan',
      price: 55,
      addOns: [],
      billingOption: BillingOptions.MONTHLY,
      priceId: PriceId.ESSENTIAL_MONTHLY,
      product: Product.ESSENTIAL_PLAN,
      additionContacts: '',
      location: '',
      includes: ['Email Newsletter (Up to 500 contacts)'],
    },
    {
      title: 'Professional Plan',
      price: 85,
      isPopular: true,
      billingOption: BillingOptions.MONTHLY,
      priceId: PriceId.PROFESSIONAL_MONTHLY,
      product: Product.PROFESSIONAL_PLAN,
      addOns: [],
      additionContacts: '',
      location: '',
      includes: [
        'Email Newsletter (Up to 2,500 contacts)',
        'Weekly Social Media Reports',
      ],
    },
    {
      title: 'Premium Plan',
      price: 125,
      billingOption: BillingOptions.MONTHLY,
      priceId: PriceId.PREMIUM_MONTHLY,
      product: Product.PREMIUM_PLAN,
      addOns: [],
      additionContacts: '',
      location: '',
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

    if (
      [PriceId.ESSENTIAL_MONTHLY, PriceId.ESSENTIAL_YEARLY].includes(
        value.priceId,
      )
    ) {
      data.push({
        title: 'Weekly Social Media Reports',
        price: $getPriceMonthlyOrYearly(30, percent),
        priceId: isMonthly
          ? PriceId.WEEKLY_SOCIAL_MEDIA_REPORTS_MONTHLY
          : PriceId.WEEKLY_SOCIAL_MEDIA_REPORTS_YEARLY,
      })
    }

    if (
      ![PriceId.PREMIUM_MONTHLY, PriceId.PREMIUM_YEARLY].includes(value.priceId)
    ) {
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

    if (
      [PriceId.ESSENTIAL_MONTHLY, PriceId.ESSENTIAL_YEARLY].includes(
        value.priceId,
      )
    ) {
      const price = $getPriceMonthlyOrYearly(15, percent)

      data.push({
        text: `501-2,500 contacts (+$${price.value}/${priceString})`,
        value: price.total,
        price,
        priceId: isMonthly
          ? PriceId.CONTACTS_501_2500_MONTHLY
          : PriceId.CONTACTS_501_2500_YEARLY,
      })
    }

    if (
      ![PriceId.PREMIUM_MONTHLY, PriceId.PREMIUM_YEARLY].includes(value.priceId)
    ) {
      const price = $getPriceMonthlyOrYearly(25, percent)

      data.push({
        text: `2,501-5,000 contacts (+$${price.value}/${priceString})`,
        value: price.total,
        price,
        priceId: isMonthly
          ? PriceId.CONTACTS_2501_5000_MONTHLY
          : PriceId.CONTACTS_2501_5000_YEARLY,
      })
    }

    const price = $getPriceMonthlyOrYearly(45, percent)

    data.push({
      text: `5,001-10,000 contacts (+$${price.value}/${priceString})`,
      value: price.total,
      price,
      priceId: isMonthly
        ? PriceId.CONTACTS_5001_10000_MONTHLY
        : PriceId.CONTACTS_5001_10000_YEARLY,
    })

    return data
  }

  watch(
    [() => state.value.selected, () => state.value.selected?.billingOption],
    ([value, billingOption]) => {
      if (!value) {
        return
      }

      const isMonthly = billingOption === BillingOptions.MONTHLY

      switch (state.value.selected!.product) {
        case Product.ESSENTIAL_PLAN:
          state.value.selected!.priceId = isMonthly
            ? PriceId.ESSENTIAL_MONTHLY
            : PriceId.ESSENTIAL_YEARLY
          break
        case Product.PREMIUM_PLAN:
          state.value.selected!.priceId = isMonthly
            ? PriceId.PREMIUM_MONTHLY
            : PriceId.PREMIUM_YEARLY
          break
        case Product.PROFESSIONAL_PLAN:
          state.value.selected!.priceId = isMonthly
            ? PriceId.PROFESSIONAL_MONTHLY
            : PriceId.PROFESSIONAL_YEARLY
          break
        default:
          return
      }

      const addOnsData = getAddOnesData(value, isMonthly)
      const additionalContactsData = getAdditionalContactData(value, isMonthly)

      setAddOnsData(addOnsData)
      setAdditionalContacts(additionalContactsData)

      if (value.addOns?.length) {
        state.value.selected!.addOns = value.addOns
          .map(({ title }) => state.value.addOns.find((item) => item.title === title))
          .filter((v) => v) as IAddOnsService[]
      }

      if (value.additionContacts) {
        state.value.selected!.additionContacts = state.value.additionalContacts.find(
          (item) => item.text.startsWith(
            value?.additionContacts?.text?.slice(0, 5) || '',
          ),
        ) as IAdditionContact
      }
    },
  )

  const onAddOnsUpdateHandler = (value: boolean, item: IAddOnsService) => {
    if (!value || !item) {
      return
    }

    state.value.selected?.addOns?.push(item)
  }

  const onPaymentHandler = async () => {
    if (!state.value.selected?.location || !stripe.value) {
      return
    }

    const lineItems = [{ price: state.value.selected?.priceId, quantity: 1 }]

    if (state.value.selected?.additionContacts) {
      lineItems.push({
        price: state.value.selected?.additionContacts?.priceId,
        quantity: 1,
      })
    }

    if (state.value.selected?.addOns?.length) {
      state.value.selected?.addOns.forEach((item) => {
        lineItems.push({
          price: item.priceId,
          quantity: 1,
        })
      })
    }

    const discount = state.value.selected.billingOption === BillingOptions.YEARLY
      ? PriceId.DISCOUNT
      : null

    try {
      const { data }: any = await useFetch('/api/create-checkout-session', {
        method: 'POST',
        body: { lineItems, discount },
      })

      stripe.value.redirectToCheckout({ sessionId: data.value.id })
    } catch (e) {}
  }

  return {
    state,
    onAddOnsUpdateHandler,
    setSelectedPlan,
    onPaymentHandler,
  }
}
