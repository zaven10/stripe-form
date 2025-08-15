// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig, type NuxtConfig } from 'nuxt/config'

import {
  buildConfig,
  cssConfig,
  devServerConfig,
  importsConfig,
  modulesConfig,
  viteConfig,
  componentsConfig,
  svgoConfig,
  runtimeConfig,
  stripeConfig,
  headConfig,
} from './configs'

export default defineNuxtConfig({
  app: {
    head: headConfig,
  },
  css: cssConfig,
  modules: modulesConfig,
  imports: importsConfig,
  devServer: devServerConfig,
  build: buildConfig,
  vite: viteConfig,
  components: componentsConfig,
  stripe: stripeConfig,
  runtimeConfig,
  devtools: {
    enabled: false,
  },
  svgo: svgoConfig,
} as NuxtConfig)
