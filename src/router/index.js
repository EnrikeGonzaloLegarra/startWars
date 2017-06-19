import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Characters from '@/components/Characters'
import Planets from '@/components/Planets'
import Vehicles from '@/components/Vehicles'
import Species from '@/components/Species'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path:'/characters',
      name: 'Characters',
      component: Characters
    }, {
      path:'/planets',
      name: 'Plantes',
      component: Planets
    }, {
      path:'/vehicles',
      name: 'Vehicles',
      component: Vehicles
    },{
      path:'/species',
      name: 'Species',
      component: Species
    }
  ]
})
