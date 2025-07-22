import type { IPlan } from '@/interfaces'

export interface IPlanSelectionStepProps {
  data: IPlan[]
}

export interface IPlanSelectionStepEmits {
  (e: 'on-select', item: IPlan): void;
}
