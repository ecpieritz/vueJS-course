import Vue from "vue"
import Router from "vue-router"
import Start from "./components/Start"
import User from "./components/user/User"

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Start
  }, {
    path: '/user',
    component: User
  }]
})