import Vue from 'vue'
import Router from 'vue-router'
import menu from './menu'

Vue.use(Router)

var router = new Router({
  routes: [
    ...menu
  ]
})

export default router
