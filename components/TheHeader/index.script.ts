import type { IMenuItem, ISocialLinkItem } from '~/interfaces'

export const useTheHeaderComponent = () => {
  const socialLinks: ISocialLinkItem[] = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/wix/',
      icon: 'https://static.wixstatic.com/media/11062b_084cbbff6ae446c1b03dc3637193e77a~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_084cbbff6ae446c1b03dc3637193e77a~mv2.png',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/WixStudio',
      icon: 'https://static.wixstatic.com/media/11062b_1f7ed8bc7b004201970df69f9eeda689~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_1f7ed8bc7b004201970df69f9eeda689~mv2.png',
    },
    {
      label: 'X',
      href: 'https://twitter.com/WixStudio',
      icon: 'https://static.wixstatic.com/media/11062b_b08fccde70ca4f7a88b3e4c3a19246eb~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_b08fccde70ca4f7a88b3e4c3a19246eb~mv2.png',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/wix-com',
      icon: 'https://static.wixstatic.com/media/11062b_a06d85fa94d64ef68680321f5a043a8c~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_a06d85fa94d64ef68680321f5a043a8c~mv2.png',
    },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/user/Wix',
      icon: 'https://static.wixstatic.com/media/11062b_6fc54c8957474101ba6e80b01907ae50~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_6fc54c8957474101ba6e80b01907ae50~mv2.png',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@wix',
      icon: 'https://static.wixstatic.com/media/11062b_4b88b89fe4694d949be4919c81f194b4~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_4b88b89fe4694d949be4919c81f194b4~mv2.png',
    },
  ]

  const items: IMenuItem[] = [
    {
      label: 'Services',
      href: 'https://www.realinfobox.com',
      target: '_self',
    },
    {
      label: 'Pricing',
      href: 'https://www.realinfobox.com',
      target: '_self',
    },
    {
      label: 'Blog',
      href: 'https://www.realinfobox.com/blog',
      target: '_self',
    },
    {
      label: 'Contact',
      href: 'https://www.realinfobox.com',
      target: '_self',
    },
    {
      label: 'Login',
      href: 'https://app.realinfobox.com/login/',
      target: '_blank',
      rel: 'noreferrer noopener',
    },
  ]

  const isOpen: Ref<boolean> = ref<boolean>(false)

  const onToggleMenu = () => (isOpen.value = !isOpen.value)

  const onCloseMenu = () => (isOpen.value = false)

  return {
    socialLinks,
    items,
    isOpen,
    onToggleMenu,
    onCloseMenu,
  }
}
