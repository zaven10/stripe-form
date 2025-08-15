export const useTheFooterComponent = () => {
  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/realinfobox',
      icon: 'https://static.wixstatic.com/media/f0c42b_722a4a85c3424456a75136dfd04f9678~mv2.png',
    },
    {
      label: 'X',
      href: 'https://x.com/realinfobox',
      icon: 'https://static.wixstatic.com/media/f0c42b_f3837915cf7249b7a929762273142fbb~mv2.png',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/12953585/admin/feed/posts/',
      icon: 'https://static.wixstatic.com/media/f0c42b_54f46c3cc1cb447b9c392db98a9734b7~mv2.png',
    },
    {
      label: 'Instagram',
      href: '',
      icon: 'https://static.wixstatic.com/media/f0c42b_bcc6cbf65ff54335ab1286c389d87b73~mv2.png/v1/fill/w_68,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0c42b_bcc6cbf65ff54335ab1286c389d87b73~mv2.png',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@realinfobox',
      icon: 'https://static.wixstatic.com/media/f0c42b_03a1c5b81f514461855cab1bacdb8fe9~mv2.png',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@realinfobox',
      icon: 'https://static.wixstatic.com/media/f0c42b_28e23c780b274a96b4d04e91b8230da5~mv2.png',
    },
  ]

  const legalLinks = [
    {
      label: 'Privacy Policy',
      href: 'https://www.realinfobox.com/privacy-policy',
    },
    {
      label: 'Terms of Use',
      href: 'https://www.realinfobox.com/terms-of-use',
    },
  ]

  return {
    socialLinks,
    legalLinks,
  }
}
