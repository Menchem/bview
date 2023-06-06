export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Menchem | Blog',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'web' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type:'text/css', href: '/css/code.css'},
      { rel: 'stylesheet', type:'text/css', href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css'},
        
    ],
    script: [
      {src: '/js/polyfills.js'},
      {src: '/js/url-search-params-polyfill.js'},
      {src: '/js/bideo.js'},
      {src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
  ],

  //加载进度条颜色
  loading: {color: '#09fd38'},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:8081/',
      pathRewrite: { 
        '^/api/': '/',
        changeOrigin: true
      }
    } 
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    compact: false,
    transpile: ['js-base64', 'ansi-regex', 'strip-ansi'],
    extend(config, { isDev }) {
      if (isDev) {
        config.devtool = 'sourcemap';
        //config.devtool = false;
      }else{
        config.devtool = false;
      }
    },
  }
}
