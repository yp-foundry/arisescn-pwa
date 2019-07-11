import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: '%s - ' + 'Arise, Shine Christian Network',
    // title: process.env.npm_package_name || '',
    title: 'Arise, Shine Christian Network',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og-title',
        name: 'og-title',
        content: 'Arise, Shine Christian Network'
      },
      {
        hid: 'og-type',
        name: 'og-type',
        content: 'website'
      },
      {
        hid: 'og-image',
        name: 'og-image',
        content: '~/assets/img/arise-flyer/arise-flyer.jpg'
      }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  meta: {
    name: 'Arise, Shine Christian Network',
    nativeUI: true
  },

  manifest: {
    name: 'Arise, Shine Christian Network',
    lang: 'en',
    shortName: 'Arise SCN',
    // eslint-disable-next-line prettier/prettier
    'short_name': 'Arise SCN',
    // eslint-disable-next-line prettier/prettier
    'background_color': '#fcfeff'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.blue.darken3 },
  /*
   ** Global CSS
   */
  css: ['@mdi/font/css/materialdesignicons.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/eslint-module', 'nuxt-webfontloader'],

  devModules: ['@nuxtjs/vuetify'],

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: colors.blue.darken3,
      accent: '#151829',
      themes: {
        light: {
          primary: colors.blue.darken3,
          accent: '#151829'
        }
      }
    },

    customVariables: ['~/assets/style/variables.scss'],

    defaultAssets: false,

    treeShake: true
  },

  webfontloader: {
    google: {
      families: ['Open+Sans:400,600,700&display=swap'] // Loads Lato font with weights 400 and 700
    }
  },

  modern: 'client',
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
