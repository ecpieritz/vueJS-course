import Vue from 'vue'
import axios from 'axios'


axios.defaults.baseURL = 'https://curso-vue-e9fc3-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})

