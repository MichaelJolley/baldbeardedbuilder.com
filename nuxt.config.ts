import { defineNuxtConfig } from 'nuxt3'

import colorMode from '@/modules/colorMode';
import tailwindcss from '@/modules/tailwindcss'

export default defineNuxtConfig({

  css: ["@/assets/scss/main.scss"],

  buildModules: [
    "@nuxtjs/tailwindcss"
  ],

  modules: [
    "@nuxtjs/color-mode"
  ],

  colorMode,
  tailwindcss,
});