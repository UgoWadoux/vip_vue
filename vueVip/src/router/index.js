import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path:'/clients',
      name:'clients',
      component : ()=> import('../views/ClientList.vue')
    },
    {
      path: '/inscription',
      name:'inscription',
      component:()=>import('../components/Inscription.vue')
    },
    {
      path:'/reservation',
      name:'reservation',
      component:()=>import('../views/ReservationList.vue')
    },
    {
      path:'/',
      name:'accueils',
      component:()=>import('../views/Accueil.vue')
    }
  ]
})

export default router
