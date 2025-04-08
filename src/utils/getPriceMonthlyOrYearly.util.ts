export const getPriceMonthlyOrYearly = (value: number, percent?: number): number => {
  if (!percent) {
    return value
  }

  if (percent < 0) {
    throw new Error('Percent cannot be negative')
  }

  if (percent > 100) {
    throw new Error('Percent cannot be greater than 100')
  }

  if (value < 0) {
    throw new Error('Value cannot be negative')
  }

  const MONTHS_IN_YEAR = 12

  const yearlyPrice = value * MONTHS_IN_YEAR
  const discount = (yearlyPrice * percent) / 100

  return yearlyPrice - discount
}
