import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import Vant from 'vant';
import 'vant/lib/index.css';
import "amfe-flexible";
import store from "@/store";

createApp(App)
    .use(Vant)
    .use(router)
    .use(store)
    .mount('#app')

