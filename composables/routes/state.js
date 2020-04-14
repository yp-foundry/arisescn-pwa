import {
  mdiHome,
  mdiMusicBox,
  mdiPlaylistMusic,
  mdiAccountCash,
  mdiRadio,
  mdiFrequentlyAskedQuestions,
  mdiInformationVariant,

  // socialIcons
  mdiYoutube,
  // mdiSpotify,
  // mdiItunes,
  mdiFacebook
} from '@mdi/js'

export default {
  all: [
    /* {
      title: 'Welcome',
      icon: mdiMoonNew,
      route: '/welcome',
      type: ['basic', 'other']
    }, */
    {
      title: 'Home',
      icon: mdiHome,
      route: '/',
      type: ['basic', 'main']
    },
    {
      title: 'Listen Online',
      icon: mdiRadio,
      route: '/live',
      type: ['other', 'main'],
      access: ['non-auth']
    },
    {
      title: 'Messages',
      icon: mdiMusicBox,
      route: '/messages',
      type: ['basic', 'main'],
      access: ['non-auth']
    },
    {
      title: 'Playlists',
      icon: mdiPlaylistMusic,
      route: '/playlists',
      type: ['other', 'main'],
      access: ['non-auth']
    },
    {
      title: 'Give Online',
      icon: mdiAccountCash,
      route: '/give#online',
      type: ['other', 'main'],
      access: ['non-auth']
    },
    {
      title: 'FAQ',
      icon: mdiFrequentlyAskedQuestions,
      route: '/faq',
      type: ['other', 'main']
    },
    {
      title: 'About',
      icon: mdiInformationVariant,
      route: '/about',
      type: ['basic', 'main']
    },

    // social links
    {
      title: 'YouTube',
      route: 'https://www.youtube.com/channel/UC5kh4SGXwp7mWLkR286rnkA',
      icon: mdiYoutube,
      type: ['social']
    },
    {
      title: 'Facebook',
      route: 'https://facebook.com/arise.scn',
      icon: mdiFacebook,
      type: ['social']
    }

    // {
    //   text: 'Contact',
    //   link: '/contact'
    // }
  ],

  social: [
    {
      text: 'YouTube',
      link: 'https://www.youtube.com/channel/UC5kh4SGXwp7mWLkR286rnkA',
      icon: mdiYoutube
    },
    {
      text: 'Facebook',
      link: 'https://facebook.com/arise.scn',
      icon: mdiFacebook
    }
  ]
}
