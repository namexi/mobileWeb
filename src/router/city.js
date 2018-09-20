import Vue from 'vue'
import Router from 'vue-router'
import Domestic from '@/pages/city/components/domestic.vue'
import Overseas from '@/pages/city/components/overseas.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {name: 'Domestic', path: '/domestic', component: Domestic},
    {name: 'Overseas', path: '/overseas', component: Overseas}
  ]
})
