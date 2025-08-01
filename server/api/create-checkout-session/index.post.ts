import { useServerStripe } from '#stripe/server'

export default defineEventHandler(async (event) => {
  const {
    lineItems, discount,
  } = await readBody(event)

  const { public: { appUrl } } = useRuntimeConfig()

  const stripe = await useServerStripe(event)

  if (!lineItems || !Array.isArray(lineItems)) {
    return new Error('Invalid line items')
  }

  const discounts = discount ? [{ coupon: discount }] : []

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: lineItems,
    discounts,
    success_url: `${appUrl}/success`,
    cancel_url: appUrl,
    automatic_tax: {
      enabled: true,
    },
    custom_fields: [
      {
        key: 'brokerage_name',
        label: {
          type: 'custom',
          custom: 'Real Estate Brokerage Name',
        },
        type: 'text',
        optional: true,
      },
      {
        key: 'agent_team_name',
        label: {
          type: 'custom',
          custom: 'Agent or Team Name',
        },
        type: 'text',
        optional: true,
      },
    ],
  })

  return { id: session.id }
})
