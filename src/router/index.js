import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import DocentBodyView from '../views/DocentBodyView.vue'
import SystemsView from '../views/SystemsView.vue'
import ColegiadoView from '../views/ColegiadoView.vue'
import BolsasView from '../views/BolsasView.vue'
import pesquisaExtensaoView from '../views/PesquisaExtensaoView.vue'
import mapView from '../views/MapView.vue'
import contactView from '../views/ContactView.vue'

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
  {
    path: '/pesquisa-extensao',
    name: 'pesquisaExtensao',
    component: pesquisaExtensaoView
  },
  {
    path: '/map',
    name: 'map',
    component: mapView
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
