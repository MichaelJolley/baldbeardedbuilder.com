import { defineNuxtConfig } from 'nuxt3'

export default {
  target: 'static',
  ssr: false,
  dev: true,

  router: {
    trailingSlash: true
  },
  
  modules: [
    '@nuxtjs/color-mode',
  ],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    },
  },
}
