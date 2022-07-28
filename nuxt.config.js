import colors from 'vuetify/es5/util/colors'
require('dotenv').config()
export default {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Presupuestos - Cotiza de la manera mas facil',
    title: 'compraVenta',
    meta: [{ 
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Presupuestos'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Presupuestos - Cotiza de la manera mas facil'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://compraventa.nyc3.digitaloceanspaces.com/upload/1b823a54a4c9c9c2dda24510e03f582d.png'
      },

      {
        hid: 'description',
        name: 'description',
        content: 'Presupuestos - Encontra todo lo que buscas'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }, {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles.scss'
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/currencyMixin.js",
    {
      src: '~/plugins/extras.js',
      ssr: false
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
  ],

  auth: {
    autoLogout: true,
    localStorage: false,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/local/",
            method: "post",
            propertyName: "jwt"
          },
          logout: false,
          user: {
            url: "/users/me/",
            method: "get",
            propertyName: false
          },
        },
        tokenRequired: true,
        tokenType: "Bearer"
      }
    },
    redirect: {
      login: "/account/login/success",
      logout: "/login",
      user: "/"
    }
  },
  axios: {
    baseURL: "https://app.presupuestos.uy/api" 
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#258ac4',
          accent: colors.grey.darken3,
          secondary: "#fdda61",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}