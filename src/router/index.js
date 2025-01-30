import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/voter-registration',
    name: 'voter-registration',
    component: () => import('../views/VoterRegistrationView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/election-results',
    name: 'election-results',
    component: () => import('../views/ElectionResultsView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/task-management',
    name: 'task-management',
    component: () => import('../views/TaskManagementView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = store.getters['auth/isAuthenticated']

  if (requiresAuth && !isAuthenticated) {
    next('/')
  } else if (to.name === 'login' && isAuthenticated) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
