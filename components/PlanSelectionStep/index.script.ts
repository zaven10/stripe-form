/* eslint-disable no-unused-vars */

import type { IPlan } from '@/interfaces'

export interface IPlanSelectionStepProps {
  data: IPlan[]
}

export interface IPlanSelectionStepEmits {
  'on-select': (plan: IPlan) => void
}
