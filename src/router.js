import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import KneeJoint from './views/Kneejoint/KneeJoint'
import HipJoint from './views/HipJoint'
import Followup from './views/Followup'
import Search from './views/Search'
import Login from './views/Login'
import Kneecase from './views/Kneejoint/Kneecase'
import Kneeupdate from './views/Kneejoint/Kneeupdate'
import Patientlogin from './views/Patient/Patientlogin'
import Patienthome from './views/Patient/Patienthome'
import KneeEvaluation from './views/KneeEvaluation'
import EvaluationSearch from './views/EvaluationSearch'
import Evaluationcase from './views/Evaluationcase'

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
      path: '/follow-up',
      name: 'Follow-up',
      component: Followup
    },
    {
      path: '/Kneejoint/knee-joint',
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
      name: '醫師登入',
      component: Login
    },
    {
      path: '/hip-joint',
      name: '創建hip',
      component: HipJoint
    },
    {
      path: '/Patient/Patienthome',
      name: '病人首頁',
      component: Patienthome
    },
    {
      path: '/Kneejoint/kneecase',
      name: '膝關節病例',
      component: Kneecase
    },
    {
      path: '/Kneejoint/kneeupdate',
      name: '更新膝關節病歷表',
      component: Kneeupdate
    },
    {
      path: '/Patient/PateintLogin',
      name: '訪客登入',
      component: Patientlogin
    },
    {
      path: '/KneeEvaluation',
      name: '膝關節評估創建',
      component: KneeEvaluation
    },
    {
      path: '/EvaluationSearch',
      name: '膝關節評估搜尋',
      component: EvaluationSearch
    },
    {
      path: '/Evaluationcase',
      name: '膝關節評估',
      component: Evaluationcase
    },
    
  ]
})
