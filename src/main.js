import './assets/main.css'
import ChartPlugin from './chartPlugin'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.component('EasyDataTable', Vue3EasyDataTable)
app.use(ChartPlugin)
app.use(router)


app.mount('#app')
