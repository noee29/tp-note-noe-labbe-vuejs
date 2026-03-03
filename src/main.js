import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// TODO : Importer et configurer le router

const app = createApp(App)

app.use(createPinia())
// TODO : Ajouter le router a l'application
app.use(router)

app.mount('#app')
