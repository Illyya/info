import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'HomePageContent',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomePageContent.vue')
      },
      {
        path: '/website',
        name: 'Website',
        component: () => import(/* webpackChunkName: "about" */ '../views/Website.vue')
      },
      {
        path: '/applications',
        name: 'Applications',
        component: () => import(/* webpackChunkName: "about" */ '../views/Applications.vue')
      },
    ],
  },
  {
    path: '/customization',
    name: 'Сustomization',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Сustomization.vue'),
    children: [
      {
        path: 'group-of-users',
        name: 'GroupOfUsers',
        component: () => import(/* webpackChunkName: "about" */ '../views/GroupOfUsers.vue')
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "about" */ '../views/Users.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
