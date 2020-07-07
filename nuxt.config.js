
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo'
  ],
  apollo: {
        // optional
        watchLoading: '~/plugins/apollo-watch-loading-handler.js',
        // optional
        errorHandler: '~/plugins/apollo-error-handler.js',
    clientConfigs: {
      default: {
        // httpEndpoint: "https://www.orderchamp.test/api/internal/graphql"
        // httpEndpoint: "http://localhost:8080/graphql/",
        httpEndpoint: "https://rickandmortyapi.com/graphql/"
      }
    }
  },
  serverMiddleware: [
    '~/server/logger'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
