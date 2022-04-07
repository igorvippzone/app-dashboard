import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/time-management',
    name: 'time-management',
    component: () => import('../views/TimeManagementView.vue')
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: () => import( '../views/InboxView.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/CalendarView.vue')
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import( '../views/AnalyticsView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
