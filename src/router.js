import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import KneeJoint from './views/KneeJoint'
import OKS from './views/OKS'
import HipJoint from './views/HipJoint'
import Fullowup from './views/Fullowup'
import Search from './views/Search'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首頁',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/knee-joint',
      name: '人工膝關節置換術中測量',
      component: KneeJoint
    },
    
    {
      path: '/hip-joint',
      name: '人工髖關節置換術中測量',
      component: HipJoint
    },
    {
      path: '/oks',
      name: '牛津膝蓋評分',
      component: OKS
    },
    {
      path: '/fullow-up',
      name: 'Fullow-up',
      component: Fullowup
    },
    {
      path: '/knee-joint',
      name: '創建knee',
      component: KneeJoint
    },
     {
      path: '/search',
      name: '查詢',
      component: Search
    },
    {
      path: '/',
      name: '登入',
      component: Login
    },
    {
      path: '/hip-joint',
      name: '創建hip',
      component: HipJoint
    },
  ]
})
