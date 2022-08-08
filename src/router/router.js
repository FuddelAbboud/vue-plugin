import Vue from 'vue'
import Router from 'vue-router'
import pages from '@/router/routes/index.js'

Vue.use(Router)

const router = new Router({
  mode: 'hash', // history mode causing bug on refresh must fix -- Japz
  base: '/',
  routes: pages,
})

export default router
