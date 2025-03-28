import type { IPlan } from './IPLan.interface'
import type { IAddOnsService } from './IAddOnsService.interface'
import type { IAdditionContact } from './IAdditionContact.interface'

export interface IUsePlansState {
  data: IPlan[]
  addOns: IAddOnsService[]
  additionalContacts: IAdditionContact[]
  selected: IPlan | null
}
