import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import City from '@/pages/city/city.vue'
// import Tab1 from '@/pages/city/components/tab1.vue'
// import Tab2 from '@/pages/city/components/tab2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path: '/city', name: 'City', component: City}
    // {name: 'Tab1', path: '/tab1', component: Tab1},
    // {name: 'Tab2', path: '/tab2', component: Tab2}
  ]
})
