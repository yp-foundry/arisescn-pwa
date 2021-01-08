export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Arise, Shine Christian Network',
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
    ]
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  manifest: {
    name: 'Arise, Shine Christian Network',
    lang: 'en',
    // eslint-disable-next-line prettier/prettier
    short_name: 'Arise SCN',
    // eslint-disable-next-line prettier/prettier
    background_color: '#f5f7fa'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1E88E5' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/v-composition-api', '@/plugins/vue-observe-visibility'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/composition-api
    '@nuxtjs/composition-api',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://go.nuxtjs.dev/svg
    '@nuxtjs/svg',
    // [
    //   'storyblok-nuxt',
    //   {
    //     accessToken: 'bBST5VQ1LY5JjdkotXvAwAtt',
    //     cacheProvider: 'memory'
    //   }
    // ],

    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-162414467-1'
      }
    ],

    /* make sure @nuxtjs/sitemap module is always at the bottom of the modules */
    '@nuxtjs/sitemap'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  pwa: {
    meta: {
      name: 'Arise, Shine Christian Network',
      nativeUI: true
    }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/styles/_variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#1E88E5',
          secondary: '#252840',
          tertiary: '#0a0b0f',
          accent: '#FF8F00'
        }
      },

      options: {
        customProperties: true
      }
    },

    defaultAssets: false,

    icons: {
      iconfont: 'mdiSvg'
    },

    treeShake: true
  },

  sitemap: {
    hostname: 'https://www.ariseshinechritiannetwork.com',
    gzip: true
  },

  modern: 'client',

  // Build Configuration (https://go.nuxtjs.dev/config-build)

  build: {
    // loaders: {
    //   scss: {
    //     prependData: `
    //       @import "~/assets/styles/_variables.scss";
    //     `
    //   }
    // }
  },

  generate: {
    // FIXME: we use till @nuxtjs/composition-api issue with
    // static generation is fixed
    interval: 2000
  }
}
