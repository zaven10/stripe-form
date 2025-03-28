import { PriceId } from '@/enums'

export interface IAddOnsService {
  title: string
  price: number
  priceId: PriceId
}
