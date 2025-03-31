import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupGuards } from './guards'

function recursiveLayouts(route) {
  if (route.children) {
    for (let i = 0; i < route.children.length; i++)
      route.children[i] = recursiveLayouts(route.children[i])
    
    return route
  }
  
  return setupLayouts([route])[0]
}

// http://localhost:5173/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash)
      return { el: to.hash, behavior: 'smooth', top: 60 }
    
    return { top: 0 }
  },
  extendRoutes: pages => [
    ...[{
      path: '/',
      name: 'index',
      redirect: to => {
        const userData = localStorage.getItem('user');
        if(userData)
          return {name: 'dashboard'}
        else
          return {name: 'login', query: to.query}
      },
    }],
    ...[...pages,...[
      {
        path: '/list-product',
        name: 'products',
        component: ()=> import('@/pages/product.vue'),
        // meta: {
        //   not_authenticated: false,
        // }
      },
      {
        path: '/roles-permissions',
        name: 'roles',
        component: ()=> import('@/pages/roles-permissions.vue'),
        // meta: {
        //   not_authenticated: false,
        // }
      },
    ]].map(route => recursiveLayouts(route)),
  ],
})

setupGuards(router)
export { router }
export default function (app) {
  app.use(router)
}
