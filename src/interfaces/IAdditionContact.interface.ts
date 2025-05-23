import { PriceId } from '@/enums'

export interface IAdditionContact {
  text: string
  value: number
  price: any
  priceId: PriceId
}
