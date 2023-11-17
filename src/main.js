import './assets/main.css'
import ChartPlugin from './chartPlugin'

import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('EasyDataTable', Vue3EasyDataTable)

import { createPinia } from 'pinia'

app.use(ChartPlugin)
app.use(router)
ap.use(createPinia)

app.mount('#app')
