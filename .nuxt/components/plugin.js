import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Filters: () => import('../../components/filters.vue' /* webpackChunkName: "components/filters" */).then(c => wrapFunctional(c.default || c)),
  OfferDetails: () => import('../../components/offerDetails.vue' /* webpackChunkName: "components/offer-details" */).then(c => wrapFunctional(c.default || c)),
  OffersList: () => import('../../components/offersList.vue' /* webpackChunkName: "components/offers-list" */).then(c => wrapFunctional(c.default || c)),
  Pagination: () => import('../../components/pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
