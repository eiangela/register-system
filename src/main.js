import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

//router
import router from './route/router';

//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App)
    .use(vuetify)
    .use(router)
    .use(pinia)
    .mount('#app');