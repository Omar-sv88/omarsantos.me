export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Omar Santos - Full Stack Developer',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Soy un Full Stack Developer que vive en León.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg-sprite',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  buildDir: 'dist',
  image: {
    domains: ['https://picsum.photos'],
  },
  svgSprite: {
    input: '~/assets/logos/',
  },
  sitemap: {
    hostname: 'https://omarsantos.me',
    gzip: true,
  },
  builds: [
    {
      src: 'nuxt.config.js',
      use: '@nuxtjs/now-builder',
      config: {
        serverFiles: ['./dist/dist/sitemap-routes.json'],
      },
    },
  ],
}
