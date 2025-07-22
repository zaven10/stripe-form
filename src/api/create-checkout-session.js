// api/create-checkout-session.js
import express from 'express'
import Stripe from 'stripe'
import cors from 'cors'

import { config } from 'dotenv'

config()

const app = express()
const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY,
  { apiVersion: '2024-04-10' },
)

app.use(cors())
app.use(express.json())

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { lineItems, discount } = req.body

    if (!lineItems || !Array.isArray(lineItems)) {
      return res.status(400).json({ error: 'Invalid line items' })
    }

    const discounts = discount
      ? [{ coupon: discount }]
      : [];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: lineItems,
      discounts,
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    })

    return res.json({ id: session.id })
  } catch (err) {
    console.error('Stripe error:', err)
    return res.status(500).json({ error: err.message })
  }
})

app.listen(4242, '0.0.0.0', () => console.log('✅ Stripe backend running at http://localhost:4242'))
