import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CompanyDetail from '../views/CompanyDetail.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/company/:id', component: CompanyDetail },
  { path: '/company/:companyId/project/:projectId', component: ProjectDetail }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})
