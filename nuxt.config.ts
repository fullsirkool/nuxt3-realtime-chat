// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/style.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      FIRE_BASE_API_KEY: process.env.FIRE_BASE_API_KEY,
      FIRE_BASE_AUTH_DOMAIN: process.env.FIRE_BASE_AUTH_DOMAIN,
      FIRE_BASE_DATABASE_URL: process.env.FIRE_BASE_DATABASE_URL,
      FIRE_BASE_PROJECT_ID: process.env.FIRE_BASE_PROJECT_ID,
      FIRE_BASE_STORAGE_BUCKET: process.env.FIRE_BASE_STORAGE_BUCKET,
      FIRE_BASE_MESSAGING_SENDER_ID: process.env.FIRE_BASE_MESSAGING_SENDER_ID,
      FIRE_BASE_APP_ID: process.env.FIRE_BASE_APP_ID,
      FIRE_BASE_MEASUREMENT_ID: process.env.FIRE_BASE_MEASUREMENT_ID,
    },
  }
})