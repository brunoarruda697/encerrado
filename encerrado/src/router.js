import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from './views/Home.vue'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})
