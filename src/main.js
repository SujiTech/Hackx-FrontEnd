import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Login from './pages/login'
import Register from './pages/register'

import Index from "./pages/index.vue"
import Profile from "./pages/profile.vue"
import Project from "./pages/project.vue"

import NavBar from './components/bar.vue'

Vue.use(VueRouter)
const router = new VueRouter()

new Vue({
  el: 'body',
  components: { Login, Register, App, NavBar }
})


router.map({
  '/profile': {
    component: Profile
  },
  '/project': {
    component: Project
  },
  '/': {
    component: Index
  }
})

router.start(App, '#app-page')