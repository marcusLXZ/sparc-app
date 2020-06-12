export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'SPARC Portal' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Asap:400,400i,500,600,700&display=swap'
      }
    ]
  },
  env: {
    portal_api: process.env.PORTAL_API_HOST || 'http://localhost:8000',
    crosscite_api_host:
      process.env.CROSSCITE_API_HOST || 'https://citation.crosscite.org',
    discover_api_host:
      process.env.BLACKFYNN_DISCOVER_API_HOST ||
      'https://api.blackfynn.io/discover',
    sparc_api_host: 'http://localhost:8000',
    ctf_event_id: 'event',
    ctf_news_id: 'news',
    ctf_resource_id: 'sparcPartners',
    ctf_resource_hero_id: '3ImGx7UyDXPwM3oTag06nt',
    ctf_help_id: 'helpDocument',
    ctf_help_list_id: 'helpSection',
    ctf_help_aws_id: 'zQfzadwADutviJjT19hA5',
    ctf_about_page_id: '4VOSvJtgtFv1PS2lklMcnS',
    ctf_support_page_id: '59F0dM5goobqjw3TsqINRw',
    ctf_home_page_id: '4qJ9WUWXg09FAUvCnbGxBY',
    ctf_news_and_events_page_id: '4IoMamTLRlN3OpxT1zgnU',
    ctf_dataset_format_info_page_id: '3FXikFXC8shPRd8xZqhjVT',
    ctf_project_id: 'sparcAward',
    ctf_organ_id: 'organ',
    ctf_filter_id: '6bya4tyw8399',
    ctf_filters_dataset_id: '7fL88ABgKSB2tPJmysn2V',
    ctf_filters_project_id: 'YVan5NSd4bgj2Q5WZdOVw',
    ctf_filters_organ_id: '5Hhlb7Lf4yijMQUSBai1fh',
    ctf_filters_image_id: '4R4zfdND13xLLGU9nPpNCD',
    ctf_filters_simulation_id: '6qMQRugMyzeaUrTIPQDdF1',
    ctf_footer_copy_id: 'wpik0A2sDOy9IQEoKpkKG',
    ctf_terms_id: '6XCER8v1TVVCoZdaBWg66t',
    ctf_privacy_policy_id: '2p44GCn1rrWUETwTRF2ElS',
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_API_HOST: process.env.CTF_API_HOST,
    BL_SERVER_URL: 'https://sparc.biolucida.net/api/v1/',
    BL_SHARE_LINK_PREFIX: 'https://sparc.biolucida.net/image?c='
  },

  serverMiddleware: [
    // Will register redirect-ssl npm package
    'redirect-ssl'
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Customize router classes globally
   */
  router: {
    linkActiveClass: 'active-link'
  },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/bootstrap', '@/plugins/contentful'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-143804703-1'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    'cookie-universal-nuxt',
    '@miyaoka/nuxt-twitter-widgets-module'
  ],
  /*
   ** robots.txt
   */
  robots: [
    {
      // all environment
      UserAgent: '*',

      // disallow all in all environments except production
      Disallow: () => (process.env.DEPLOY_ENV !== 'production' ? '/' : [])
    }
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
