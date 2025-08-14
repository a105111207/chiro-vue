import './assets/main.css';
import 'v-calendar/style.css';

import { createApp } from 'vue';
import { setupCalendar, Calendar } from 'v-calendar';
import App from './App.vue';
import router from './router';
import Home from './views/Home.vue';

const app = createApp(App);
app.component('Home', Home)
app.component('VCalendar', Calendar)

app.use(router)
app.use(setupCalendar, {})

app.mount('#app')
