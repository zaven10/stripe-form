import type { PriceId } from '@/enums'

import type { IAdditionContact } from './IAdditionContact.interface'
import type { IAddOnsService } from './IAddOnsService.interface'

export interface IPlan {
  title: string
  price: number
  priceId: PriceId
  includes: string[]
  isPopular?: boolean
  isSelected?: boolean
  addOns: IAddOnsService[] | undefined
  additionContacts: IAdditionContact | undefined
}
