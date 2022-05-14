import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _24f3cbde = () => interopDefault(import('..\\pages\\aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _c7a54f22 = () => interopDefault(import('..\\pages\\afar\\index.vue' /* webpackChunkName: "pages/afar/index" */))
const _c77dad22 = () => interopDefault(import('..\\pages\\awash\\index.vue' /* webpackChunkName: "pages/awash/index" */))
const _81c2145e = () => interopDefault(import('..\\pages\\bishoftu\\index.vue' /* webpackChunkName: "pages/bishoftu/index" */))
const _8e7b59f4 = () => interopDefault(import('..\\pages\\book.vue' /* webpackChunkName: "pages/book" */))
const _a2da6ada = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _e7f33ae4 = () => interopDefault(import('..\\pages\\destinationboston.vue' /* webpackChunkName: "pages/destinationboston" */))
const _d62ac274 = () => interopDefault(import('..\\pages\\entoto\\index.vue' /* webpackChunkName: "pages/entoto/index" */))
const _2950f266 = () => interopDefault(import('..\\pages\\event.vue' /* webpackChunkName: "pages/event" */))
const _7d0af147 = () => interopDefault(import('..\\pages\\experience.vue' /* webpackChunkName: "pages/experience" */))
const _ef6c5346 = () => interopDefault(import('..\\pages\\giftcard.vue' /* webpackChunkName: "pages/giftcard" */))
const _bf978514 = () => interopDefault(import('..\\pages\\laketana\\index.vue' /* webpackChunkName: "pages/laketana/index" */))
const _6b6f66c6 = () => interopDefault(import('..\\pages\\ourstory.vue' /* webpackChunkName: "pages/ourstory" */))
const _06293fa2 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _0653994e = () => interopDefault(import('..\\pages\\waterpark\\index.vue' /* webpackChunkName: "pages/waterpark/index" */))
const _1434a3c2 = () => interopDefault(import('..\\pages\\wellness.vue' /* webpackChunkName: "pages/wellness" */))
const _6a45f5de = () => interopDefault(import('..\\pages\\afar\\acc.vue' /* webpackChunkName: "pages/afar/acc" */))
const _130f136c = () => interopDefault(import('..\\pages\\afar\\dining.vue' /* webpackChunkName: "pages/afar/dining" */))
const _63a30392 = () => interopDefault(import('..\\pages\\afar\\event.vue' /* webpackChunkName: "pages/afar/event" */))
const _626bd97a = () => interopDefault(import('..\\pages\\afar\\exp.vue' /* webpackChunkName: "pages/afar/exp" */))
const _96040ca2 = () => interopDefault(import('..\\pages\\afar\\gallery.vue' /* webpackChunkName: "pages/afar/gallery" */))
const _4843b1c1 = () => interopDefault(import('..\\pages\\afar\\well.vue' /* webpackChunkName: "pages/afar/well" */))
const _4f1a06de = () => interopDefault(import('..\\pages\\awash\\acc.vue' /* webpackChunkName: "pages/awash/acc" */))
const _1575626c = () => interopDefault(import('..\\pages\\awash\\dining.vue' /* webpackChunkName: "pages/awash/dining" */))
const _637b6192 = () => interopDefault(import('..\\pages\\awash\\event.vue' /* webpackChunkName: "pages/awash/event" */))
const _473fea7a = () => interopDefault(import('..\\pages\\awash\\exp.vue' /* webpackChunkName: "pages/awash/exp" */))
const _013ceaa2 = () => interopDefault(import('..\\pages\\awash\\gallery.vue' /* webpackChunkName: "pages/awash/gallery" */))
const _041c7e7e = () => interopDefault(import('..\\pages\\awash\\well.vue' /* webpackChunkName: "pages/awash/well" */))
const _1e6383c0 = () => interopDefault(import('..\\pages\\bishoftu\\acc.vue' /* webpackChunkName: "pages/bishoftu/acc" */))
const _4e51224a = () => interopDefault(import('..\\pages\\bishoftu\\dining.vue' /* webpackChunkName: "pages/bishoftu/dining" */))
const _1dbfc8ce = () => interopDefault(import('..\\pages\\bishoftu\\event.vue' /* webpackChunkName: "pages/bishoftu/event" */))
const _1689675c = () => interopDefault(import('..\\pages\\bishoftu\\exp.vue' /* webpackChunkName: "pages/bishoftu/exp" */))
const _3c0472de = () => interopDefault(import('..\\pages\\bishoftu\\gallery.vue' /* webpackChunkName: "pages/bishoftu/gallery" */))
const _17d7e01f = () => interopDefault(import('..\\pages\\bishoftu\\well.vue' /* webpackChunkName: "pages/bishoftu/well" */))
const _6ae0412a = () => interopDefault(import('..\\pages\\boston\\bostonaccommodation.vue' /* webpackChunkName: "pages/boston/bostonaccommodation" */))
const _4f6a2270 = () => interopDefault(import('..\\pages\\boston\\bostondining.vue' /* webpackChunkName: "pages/boston/bostondining" */))
const _1a737eb3 = () => interopDefault(import('..\\pages\\boston\\bostonevent.vue' /* webpackChunkName: "pages/boston/bostonevent" */))
const _e7680dbe = () => interopDefault(import('..\\pages\\boston\\bostonexperience.vue' /* webpackChunkName: "pages/boston/bostonexperience" */))
const _0404cb2b = () => interopDefault(import('..\\pages\\boston\\bostongallery.vue' /* webpackChunkName: "pages/boston/bostongallery" */))
const _3be9da1c = () => interopDefault(import('..\\pages\\boston\\bostonwellness.vue' /* webpackChunkName: "pages/boston/bostonwellness" */))
const _131aad82 = () => interopDefault(import('..\\pages\\destinationevent\\afar.vue' /* webpackChunkName: "pages/destinationevent/afar" */))
const _7ac81eb2 = () => interopDefault(import('..\\pages\\destinationevent\\awash.vue' /* webpackChunkName: "pages/destinationevent/awash" */))
const _05475466 = () => interopDefault(import('..\\pages\\destinationevent\\bishoftuevent.vue' /* webpackChunkName: "pages/destinationevent/bishoftuevent" */))
const _25aad3c8 = () => interopDefault(import('..\\pages\\destinationevent\\entoto.vue' /* webpackChunkName: "pages/destinationevent/entoto" */))
const _8e2d73ee = () => interopDefault(import('..\\pages\\destinationevent\\tana.vue' /* webpackChunkName: "pages/destinationevent/tana" */))
const _0b2718b0 = () => interopDefault(import('..\\pages\\destinationevent\\waterpark.vue' /* webpackChunkName: "pages/destinationevent/waterpark" */))
const _4d7ee5f5 = () => interopDefault(import('..\\pages\\entoto\\acc.vue' /* webpackChunkName: "pages/entoto/acc" */))
const _31fa97f5 = () => interopDefault(import('..\\pages\\entoto\\dining.vue' /* webpackChunkName: "pages/entoto/dining" */))
const _722876e4 = () => interopDefault(import('..\\pages\\entoto\\event.vue' /* webpackChunkName: "pages/entoto/event" */))
const _45a4c991 = () => interopDefault(import('..\\pages\\entoto\\exp.vue' /* webpackChunkName: "pages/entoto/exp" */))
const _73830646 = () => interopDefault(import('..\\pages\\entoto\\gallery.vue' /* webpackChunkName: "pages/entoto/gallery" */))
const _67ae76ec = () => interopDefault(import('..\\pages\\entoto\\well.vue' /* webpackChunkName: "pages/entoto/well" */))
const _99ff1eb6 = () => interopDefault(import('..\\pages\\laketana\\acc.vue' /* webpackChunkName: "pages/laketana/acc" */))
const _e0366176 = () => interopDefault(import('..\\pages\\laketana\\dining.vue' /* webpackChunkName: "pages/laketana/dining" */))
const _5b953984 = () => interopDefault(import('..\\pages\\laketana\\event.vue' /* webpackChunkName: "pages/laketana/event" */))
const _a9b3577e = () => interopDefault(import('..\\pages\\laketana\\exp.vue' /* webpackChunkName: "pages/laketana/exp" */))
const _5a408e14 = () => interopDefault(import('..\\pages\\laketana\\gallery.vue' /* webpackChunkName: "pages/laketana/gallery" */))
const _16d88fda = () => interopDefault(import('..\\pages\\laketana\\well.vue' /* webpackChunkName: "pages/laketana/well" */))
const _249e2326 = () => interopDefault(import('..\\pages\\waterpark\\dining.vue' /* webpackChunkName: "pages/waterpark/dining" */))
const _3854bf16 = () => interopDefault(import('..\\pages\\waterpark\\event.vue' /* webpackChunkName: "pages/waterpark/event" */))
const _c6ca73ce = () => interopDefault(import('..\\pages\\waterpark\\exp.vue' /* webpackChunkName: "pages/waterpark/exp" */))
const _2e977ece = () => interopDefault(import('..\\pages\\waterpark\\gallery.vue' /* webpackChunkName: "pages/waterpark/gallery" */))
const _8d533df6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _24f3cbde,
    name: "aboutus"
  }, {
    path: "/afar",
    component: _c7a54f22,
    name: "afar"
  }, {
    path: "/awash",
    component: _c77dad22,
    name: "awash"
  }, {
    path: "/bishoftu",
    component: _81c2145e,
    name: "bishoftu"
  }, {
    path: "/book",
    component: _8e7b59f4,
    name: "book"
  }, {
    path: "/contact",
    component: _a2da6ada,
    name: "contact"
  }, {
    path: "/destinationboston",
    component: _e7f33ae4,
    name: "destinationboston"
  }, {
    path: "/entoto",
    component: _d62ac274,
    name: "entoto"
  }, {
    path: "/event",
    component: _2950f266,
    name: "event"
  }, {
    path: "/experience",
    component: _7d0af147,
    name: "experience"
  }, {
    path: "/giftcard",
    component: _ef6c5346,
    name: "giftcard"
  }, {
    path: "/laketana",
    component: _bf978514,
    name: "laketana"
  }, {
    path: "/ourstory",
    component: _6b6f66c6,
    name: "ourstory"
  }, {
    path: "/test",
    component: _06293fa2,
    name: "test"
  }, {
    path: "/waterpark",
    component: _0653994e,
    name: "waterpark"
  }, {
    path: "/wellness",
    component: _1434a3c2,
    name: "wellness"
  }, {
    path: "/afar/acc",
    component: _6a45f5de,
    name: "afar-acc"
  }, {
    path: "/afar/dining",
    component: _130f136c,
    name: "afar-dining"
  }, {
    path: "/afar/event",
    component: _63a30392,
    name: "afar-event"
  }, {
    path: "/afar/exp",
    component: _626bd97a,
    name: "afar-exp"
  }, {
    path: "/afar/gallery",
    component: _96040ca2,
    name: "afar-gallery"
  }, {
    path: "/afar/well",
    component: _4843b1c1,
    name: "afar-well"
  }, {
    path: "/awash/acc",
    component: _4f1a06de,
    name: "awash-acc"
  }, {
    path: "/awash/dining",
    component: _1575626c,
    name: "awash-dining"
  }, {
    path: "/awash/event",
    component: _637b6192,
    name: "awash-event"
  }, {
    path: "/awash/exp",
    component: _473fea7a,
    name: "awash-exp"
  }, {
    path: "/awash/gallery",
    component: _013ceaa2,
    name: "awash-gallery"
  }, {
    path: "/awash/well",
    component: _041c7e7e,
    name: "awash-well"
  }, {
    path: "/bishoftu/acc",
    component: _1e6383c0,
    name: "bishoftu-acc"
  }, {
    path: "/bishoftu/dining",
    component: _4e51224a,
    name: "bishoftu-dining"
  }, {
    path: "/bishoftu/event",
    component: _1dbfc8ce,
    name: "bishoftu-event"
  }, {
    path: "/bishoftu/exp",
    component: _1689675c,
    name: "bishoftu-exp"
  }, {
    path: "/bishoftu/gallery",
    component: _3c0472de,
    name: "bishoftu-gallery"
  }, {
    path: "/bishoftu/well",
    component: _17d7e01f,
    name: "bishoftu-well"
  }, {
    path: "/boston/bostonaccommodation",
    component: _6ae0412a,
    name: "boston-bostonaccommodation"
  }, {
    path: "/boston/bostondining",
    component: _4f6a2270,
    name: "boston-bostondining"
  }, {
    path: "/boston/bostonevent",
    component: _1a737eb3,
    name: "boston-bostonevent"
  }, {
    path: "/boston/bostonexperience",
    component: _e7680dbe,
    name: "boston-bostonexperience"
  }, {
    path: "/boston/bostongallery",
    component: _0404cb2b,
    name: "boston-bostongallery"
  }, {
    path: "/boston/bostonwellness",
    component: _3be9da1c,
    name: "boston-bostonwellness"
  }, {
    path: "/destinationevent/afar",
    component: _131aad82,
    name: "destinationevent-afar"
  }, {
    path: "/destinationevent/awash",
    component: _7ac81eb2,
    name: "destinationevent-awash"
  }, {
    path: "/destinationevent/bishoftuevent",
    component: _05475466,
    name: "destinationevent-bishoftuevent"
  }, {
    path: "/destinationevent/entoto",
    component: _25aad3c8,
    name: "destinationevent-entoto"
  }, {
    path: "/destinationevent/tana",
    component: _8e2d73ee,
    name: "destinationevent-tana"
  }, {
    path: "/destinationevent/waterpark",
    component: _0b2718b0,
    name: "destinationevent-waterpark"
  }, {
    path: "/entoto/acc",
    component: _4d7ee5f5,
    name: "entoto-acc"
  }, {
    path: "/entoto/dining",
    component: _31fa97f5,
    name: "entoto-dining"
  }, {
    path: "/entoto/event",
    component: _722876e4,
    name: "entoto-event"
  }, {
    path: "/entoto/exp",
    component: _45a4c991,
    name: "entoto-exp"
  }, {
    path: "/entoto/gallery",
    component: _73830646,
    name: "entoto-gallery"
  }, {
    path: "/entoto/well",
    component: _67ae76ec,
    name: "entoto-well"
  }, {
    path: "/laketana/acc",
    component: _99ff1eb6,
    name: "laketana-acc"
  }, {
    path: "/laketana/dining",
    component: _e0366176,
    name: "laketana-dining"
  }, {
    path: "/laketana/event",
    component: _5b953984,
    name: "laketana-event"
  }, {
    path: "/laketana/exp",
    component: _a9b3577e,
    name: "laketana-exp"
  }, {
    path: "/laketana/gallery",
    component: _5a408e14,
    name: "laketana-gallery"
  }, {
    path: "/laketana/well",
    component: _16d88fda,
    name: "laketana-well"
  }, {
    path: "/waterpark/dining",
    component: _249e2326,
    name: "waterpark-dining"
  }, {
    path: "/waterpark/event",
    component: _3854bf16,
    name: "waterpark-event"
  }, {
    path: "/waterpark/exp",
    component: _c6ca73ce,
    name: "waterpark-exp"
  }, {
    path: "/waterpark/gallery",
    component: _2e977ece,
    name: "waterpark-gallery"
  }, {
    path: "/",
    component: _8d533df6,
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
