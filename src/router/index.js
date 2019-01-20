import Vue from 'vue'
import Router from 'vue-router'
// import Download from '@/components/Download'
import passwordLogin from '@/components/passwordLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // component: Download
      component: passwordLogin
    }

  ]
})
