import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import Toaster from '@meforma/vue-toaster';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

  
const app = createApp(App)

app.use(router).use(Antd).use(Toaster)

app.mount('#app')
