import Vue from 'vue'
import Router from 'vue-router'
import cinemaList from '@/components/cinemaList'
import cinemaInfo from '@/components/cinemaInfo'
import MoviInfo from '@/components/moviInfo'
import cinema from '@/components/cinema'
import indexList from '@/components/indexList'
import Login from '@/components/login'
import Found from '@/components/found'
import Register from '@/components/register'
import Success from '@/components/success'
import jieSuan from '@/components/jieSuan'
Vue.use(Router)
export default new Router({
  routes: [
  	{
      path: '/',
      name: 'indexList',
      component: indexList
    },
  	{
      path: '/moviInfo/:id',
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
    },
    {
    	path:'/login',
    	name:'Login',
    	component:Login
    },
    {
      path: '/found',
      name: 'Found',
      component:Found
    },
    {
      path: '/register',
      name: 'Register',
      component:Register
    },
    {
      path: '/success/:name',
      name: 'Success',
      component:Success
    },
    	{
      path: '/jieSuan',
      name: 'jieSuan',
      component: jieSuan
    }
  ]
})
