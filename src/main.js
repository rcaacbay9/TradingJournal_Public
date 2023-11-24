import './assets/main.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import ChartPlugin from './chartPlugin'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueSweetalert2 from 'vue-sweetalert2';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueSweetalert2)
app.component('EasyDataTable', Vue3EasyDataTable)
app.use(ChartPlugin)
app.use(router)


app.mount('#app')
