import Vue from 'vue'
import axios from 'axios'


//axios.defaults.baseURL = 'https://curso-vue-e9fc3-default-rtdb.firebaseio.com/'

Vue.use({
  install(Vue) {
    //Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-e9fc3-default-rtdb.firebaseio.com/'
    })
    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method)
      return config
    }, error => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use(answer =>{
      const array = []
      for(let key in answer.data){
        array.push({id: key, ...answer.data[key]})
      }
      answer.data = array
      return answer
    }, error => Promise.reject(error))
  }
})

