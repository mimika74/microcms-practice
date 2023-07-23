// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "○○株式会社",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rampart+One&dis"
        },
      ]
    }
  },
  runtimeConfig: {
    public: {
      formAction: process.env.NUXT_FORM_ACTION_KEY,
      formName: process.env.NUXT_FORM_NAME_KEY,
      formEmail: process.env.NUXT_FORM_EMAIL_KEY,
      formCompany: process.env.NUXT_FORM_COMPANY_KEY,
      formDetail: process.env.NUXT_FORM_DETAIL_KEY,
      formSelect: process.env.NUXT_FORM_SELECT_KEY,
      formPrivacy: process.env.NUXT_FORM_PRIVACY_KEY,
      firebaseConfig: {
        apiKey: process.env.NUXT_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_FIREBASE_APP_ID,
      },
    }
  },
  devtools: { enabled: true },
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.NUXT_MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.NUXT_MICROCMS_API_KEY,
  },
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    preset: "firebase",
  }
})
