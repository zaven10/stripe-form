export default {
  server: {
    key: process.env.STRIPE_SECRET_KEY,
    options: {},
  },
  client: {
    key: process.env.STRIPE_PUBLIC_KEY,
    options: {},
  },
}
