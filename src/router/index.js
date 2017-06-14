import Vue from 'vue'
import Router from 'vue-router'
import cinemaList from '@/components/cinemaList'
import cinemaInfo from '@/components/cinemaInfo'
import MoviInfo from '@/components/moviInfo'
import cinema from '@/components/cinema'
import List from '@/components/list'
Vue.use(Router)
export default new Router({
  routes: [
  	{
      path: '/',
      name: 'List',
      component: List
    },
  	{
      path: '/moviInfo',
      name: 'MoviInfo',
      component: MoviInfo
    },
    {
      path: '/cinemaList',
      name: 'cinemaList',
      component: cinemaList
    },
    {
    	path:'/cinemaInfo/:id',
    	name:'cinemaInfo',
    	component:cinemaInfo
    },
    {
    	path:'/cinema/',
    	name:'cinema',
    	component:cinema
    }
  ]
})
