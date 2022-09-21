import { createApp } from 'vue'
import './style.css'
import 'animate.css'
// import router from './router'
import Home from './Home.vue'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(Home).use(plugin, defaultConfig).mount('#app')


new Vue({
    router
})