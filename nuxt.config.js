export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontendWebshophf3',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
  ],


  auth: {
    strategies: {
      cookie: {
        cookie: {
          // (optional) If set we check this cookie existence for loggedIn check
          name: 'XSRF-TOKEN',
        },
        endpoints: {
          // (optional) If set, we send a get request to this endpoint before login
          csrf: {
            url: ''
          }
        }
      },
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': { target: 'https://hf3.binau.dev/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
