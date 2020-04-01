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
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: '8D83f7Kyv8icL5vwBbhaT6r2j6A7pp9_Cxd4Wvn7XOM'
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
    short_name: 'Arise SCN',
    // eslint-disable-next-line prettier/prettier
    background_color: '#fcfeff'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.blue.darken3 },
  /*
   ** Global CSS
   */
  // TODO: Use @Mdi/js and use manual import
  css: ['@mdi/font/css/materialdesignicons.css'],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ['@/plugins/v-composition-api'],
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-webfontloader'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    [
      'storyblok-nuxt',
      {
        accessToken: 'bBST5VQ1LY5JjdkotXvAwAtt',
        cacheProvider: 'memory'
      }
    ],

    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-162414467-1'
      }
    ],

    /* make sure @nuxtjs/sitemap module is always at the bottom of the modules */
    '@nuxtjs/sitemap'
  ],

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken3,
          accent: '#151829'
        }
      }
    },

    customVariables: ['~/assets/styles/_variables.scss'],

    defaultAssets: false,

    treeShake: true
  },

  webfontloader: {
    google: {
      families: ['Open+Sans:400,600,700&display=swap'] // Loads Lato font with weights 400 and 700
    }
  },

  modern: 'client',

  sitemap: {
    hostname: 'https://www.ariseshinechritiannetwork.com',
    gzip: true
  },

  /*
   ** Build configuration
   */
  build: {
    loaders: {
      scss: {
        data: `
          @import "~/assets/styles/_variables.scss";
        `
      }
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
