import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el){
		//não precisa manter o binding e o vnode como parâmetros se não for usar
		el.style.backgroundColor = "magenta"
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
