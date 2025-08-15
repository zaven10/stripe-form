/* eslint-disable no-unused-vars */

import type { IMenuItem, ISocialLinkItem } from '~/interfaces'

export interface IHamburgerOverlayProps {
  items: IMenuItem[]
  socialLinks: ISocialLinkItem[]
}

export interface IEmits {
  (event: 'onClose'): void
}
