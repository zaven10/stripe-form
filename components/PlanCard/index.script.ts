/* eslint-disable no-unused-vars */

export interface IPlanCardProps {
  title: string
  price: number
  includes: string[]
  isPopular?: boolean
  isSelected?: boolean
}

export interface IEmits {
  (e: 'onSelect'): void
}
