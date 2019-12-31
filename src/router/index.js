import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/'
import Home from '../views/Home.vue'
import Books from '@/views/Books.vue'
import Words from '@/views/Words.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import Profile from '@/views/Profile.vue'
import Logout from '@/views/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/words',
    name: 'words',
    component: Words
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: AuthGuard
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function AuthGuard (from, to, next) {
  if(Store.getters.isUserAuthenticated)
      next()
  else
    next('/signin')
}