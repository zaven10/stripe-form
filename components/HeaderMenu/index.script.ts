/* eslint-disable no-unused-vars */

import type { IMenuItem } from '~/interfaces'

export interface IHeaderMenuProps {
  isOpen: boolean
  items: IMenuItem[]
}

export interface IEmits {
  (event: 'onToggleMenu'): void
}
