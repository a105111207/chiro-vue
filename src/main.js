import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Home from './views/Home.vue'

const app = createApp(App)
app.component('Home', Home)

app.use(router)

app.mount('#app')
