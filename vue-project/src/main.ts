import './assets/main.css'
import './index.css'
import VueSplide from '@splidejs/vue-splide';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(MotionPlugin)
app.use(createPinia())
app.use( VueSplide );
app.use(router)
app.mount('#app')
