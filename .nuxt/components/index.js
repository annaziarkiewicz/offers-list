export { default as Filters } from '../../components/filters.vue'
export { default as OfferDetails } from '../../components/offerDetails.vue'
export { default as OffersList } from '../../components/offersList.vue'
export { default as Pagination } from '../../components/pagination.vue'

export const LazyFilters = import('../../components/filters.vue' /* webpackChunkName: "components/filters" */).then(c => wrapFunctional(c.default || c))
export const LazyOfferDetails = import('../../components/offerDetails.vue' /* webpackChunkName: "components/offer-details" */).then(c => wrapFunctional(c.default || c))
export const LazyOffersList = import('../../components/offersList.vue' /* webpackChunkName: "components/offers-list" */).then(c => wrapFunctional(c.default || c))
export const LazyPagination = import('../../components/pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
