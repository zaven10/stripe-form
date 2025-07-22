import type { IPlan } from './IPLan.interface'
import type { IAddOnsService } from './IAddOnsService.interface'
import type { IAdditionContact } from './IAdditionContact.interface'
import type { IBillingOption } from './IBillingOption.interface'
import type { ILocation } from './ILocation.interface'

export interface IUsePlansState {
  data: IPlan[]
  addOns: IAddOnsService[]
  billingOptions: IBillingOption[]
  additionalContacts: IAdditionContact[]
  selected: IPlan | null
  locations: ILocation[]
  location: string
}
