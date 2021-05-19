import Vue from "vue"
import Router from "vue-router"
import Home from "./components/Home"
import Menu from "./components/template/Menu"

//import User from "./components/user/User"
//import UserList from "./components/user/UserList"
//import UserEdit from "./components/user/UserEdit"
//import UserDetail from "./components/user/UserDetail"

Vue.use(Router)

//carregando as rotas tardiamente (ideal para grandes app)
const User = ()=> import('./components/user/User')
const UserList = ()=> import('./components/user/UserList')
const UserEdit = ()=> import('./components/user/UserEdit')
const UserDetail = ()=> import('./components/user/UserDetail')

const router = new Router({
  routes: [{
    name: 'home',
    path: '/',
    //component: Home
    components: {
      default: Home,
      menu: Menu
    }
  }, {
    path: '/user',
    //component: User,
    components:{
      default: User,
      menu: Menu,
      menuBtm: Menu
    },
    props: true,
    children: [
      {path: '', component: UserList},
      {path: ':id', component: UserDetail, props: true, beforeEnter: (to, from, next)=>{
        console.log('antes da rota -> usuario detalhe')
        next()
      }},
      {path: ':id/edit', component: UserEdit, props: true, name: 'editUser'}
    ]
  },{
    path: '*',
    redirect: '/'
  }
]
})

router.beforeEach((to, from, next) => {
  console.log('antes das rotas -> global')
  next()
  
})

export default router