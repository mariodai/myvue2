import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import createStore from 'vuex'

createApp(App).mount('#app')

const initAxios = axios.create({
    timeout:18000
})
initAxios.interceptors.request.use((config)=> {
    return config
})
export default createStore({
    state: {
        num:111
    }
})