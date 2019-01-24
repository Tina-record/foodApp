import Vue from 'vue'
import Router from 'vue-router'
// import Download from '@/components/Download'
import passwordLogin from '@/components/passwordLogin'
import address from '@/components/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/passwordLogin',
      // component: Download
      component: passwordLogin
      
    },{
      path:'/',
      component:address
    }

  ]
})
