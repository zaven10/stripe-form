import type { BillingOptions, PriceId, Product } from '@/enums'

import type { IAdditionContact } from './IAdditionContact.interface'
import type { IAddOnsService } from './IAddOnsService.interface'

export interface IPlan {
  title: string
  price: number
  location: string
  priceId: PriceId
  product: Product
  includes: string[]
  isPopular?: boolean
  isSelected?: boolean
  billingOption?: BillingOptions
  addOns: IAddOnsService[] | undefined
  additionContacts: IAdditionContact | ''
}
