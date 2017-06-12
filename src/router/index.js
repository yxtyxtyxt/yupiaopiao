import Vue from 'vue'
import Router from 'vue-router'
import cinema from '@/components/cinema'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cinema',
      component: cinema
    }
  ]
})
