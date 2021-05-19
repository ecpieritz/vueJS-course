import Vue from "vue"
import Router from "vue-router"
import Home from "./components/Home"

import User from "./components/user/User"
import UserList from "./components/user/UserList"
import UserEdit from "./components/user/UserEdit"
import UserDetail from "./components/user/UserDetail"

Vue.use(Router)

export default new Router({
  routes: [{
    name: 'home',
    path: '/',
    component: Home
  }, {
    path: '/user',
    component: User,
    props: true,
    children: [
      {path: '', component: UserList},
      {path: ':id', component: UserDetail, props: true},
      {path: ':id/edit', component: UserEdit, props: true, name: 'editUser'}
    ]
  }]
})