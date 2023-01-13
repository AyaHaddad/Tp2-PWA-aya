import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5eeab1f5 = () => interopDefault(import('../pages/category/index.vue' /* webpackChunkName: "pages/category/index" */))
const _17482c70 = () => interopDefault(import('../pages/quizHome.vue' /* webpackChunkName: "pages/quizHome" */))
const _456abd20 = () => interopDefault(import('../pages/category/_slug/index.vue' /* webpackChunkName: "pages/category/_slug/index" */))
const _20f23fd8 = () => interopDefault(import('../pages/category/_slug/_id.vue' /* webpackChunkName: "pages/category/_slug/_id" */))
const _bee010e4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category",
    component: _5eeab1f5,
    name: "category"
  }, {
    path: "/quizHome",
    component: _17482c70,
    name: "quizHome"
  }, {
    path: "/category/:slug",
    component: _456abd20,
    name: "category-slug"
  }, {
    path: "/category/:slug/:id",
    component: _20f23fd8,
    name: "category-slug-id"
  }, {
    path: "/",
    component: _bee010e4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
