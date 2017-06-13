import Vue from 'vue'
import Router from 'vue-router'
import MoviInfo from '@/components/moviInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MoviInfo',
      component: MoviInfo
    }
  ]
})
