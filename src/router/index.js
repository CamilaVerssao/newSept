import { createRouter, createWebHistory } from 'vue-router'

// sept
import HomeView from '../views/sept/HomeView.vue'
import HistoryView from '../views/sept/HistoryView.vue'
import DocentBodyView from '../views/sept/DocentBodyView.vue'
import SystemsView from '../views/sept/SystemsView.vue'
import ColegiadoView from '../views/sept/ColegiadoView.vue'
import BolsasView from '../views/sept/BolsasView.vue'
import pesquisaExtensaoView from '../views/sept/PesquisaExtensaoView.vue'
import mapView from '../views/sept/MapView.vue'
import contactView from '../views/sept/ContactView.vue'
import nteView from '../views/sept/NteView.vue'
import conselhoSetorialView from '../views/sept/ConselhoSetorialView.vue'

// tads
import aboutTadsView from '../views/tads/AboutTadsView.vue'
import tadsView from '../views/tads/TadsView.vue'
import tadsCoordenacao from '../views/tads/TadsCoordenacaoView.vue'
import tadsCorpoDocente from '../views/tads/TadsCorpoDocenteView.vue'

const routes = [
  // sept
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
  {
    path: '/nte',
    name: 'net',
    component: nteView
  },
  {
    path: '/conselho-setorial',
    name: 'conselhoSetorial',
    component: conselhoSetorialView
  },

  // tads
  {
    path: '/about-tads',
    name: 'aboutTads',
    component: aboutTadsView
  },
  {
    path: '/tads',
    name: 'tads',
    component: tadsView
  },
  {
    path: '/tads-coordenacao',
    name: 'tadsCoordenacao',
    component: tadsCoordenacao
  },
  {
    path: '/tads-corpo-docente',
    name: 'tadsCorpoDocente',
    component: tadsCorpoDocente
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
