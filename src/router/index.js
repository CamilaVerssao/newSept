import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import DocentBodyView from '../views/DocentBodyView.vue'
import SystemsView from '../views/SystemsView.vue'
import ColegiadoView from '../views/ColegiadoView.vue'
import BolsasView from '../views/BolsasView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/docent-body',
    name: 'docentBody',
    component: DocentBodyView
  },
  {
    path: '/systems',
    name: 'systems',
    component: SystemsView
  },
  {
    path: '/colegiado',
    name: 'colegiado',
    component: ColegiadoView
  },
  {
    path: '/bolsas',
    name: 'bolsas',
    component: BolsasView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
