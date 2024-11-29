// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    blueprint: md3,
    // ... your configuration
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            background: '#c62828',
            sea: '#00074b',
            sand: '#c5975c',
          },
        },
        light: {
          colors: {
            background: '#c62828',
            sea: '#00074b',
            sand: '#c5975c',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})

