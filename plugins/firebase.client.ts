import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"
export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.FIRE_BASE_API_KEY,
        authDomain: config.FIRE_BASE_AUTH_DOMAIN,
        projectId: config.FIRE_BASE_PROJECT_ID,
        storageBucket: config.FIRE_BASE_STORAGE_BUCKET,
        messagingSenderId: config.FIRE_BASE_MESSAGING_SENDER_ID,
        appId: config.FIRE_BASE_APP_ID,
        measurementId: config.FIRE_BASE_MEASUREMENT_ID
    };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})