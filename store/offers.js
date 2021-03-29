import api from '../services/api'

export const state = () => ({
  total: 0,
  currentPage: 1,
  nodes: [],
  filters: {
    minRooms: null,
    maxRooms: null,
    minPrice: null,
    maxPrice: null
  }
})

export const mutations = {
  changePage (state, page) {
    state.currentPage = page
  },
  reloadResults (state, results) {
    state.total = results.data.data.searchProperties.totalCount
    state.nodes = results.data.data.searchProperties.nodes
  },
  changeMinPrice (state, minPrice) {
    state.filters.minPrice = minPrice
  },
  changeMaxPrice (state, maxPrice) {
    state.filters.maxPrice = maxPrice
  },
  changeMinRooms (state, minRooms) {
    state.filters.minRooms = minRooms
  },
  changeMaxRooms (state, maxRooms) {
    state.filters.maxRooms = maxRooms
  }
}

export const getters = {
  getNodes (state) {
    return state.nodes
  },
  getTotal (state) {
    return state.total
  },
  getCurrentPage (state) {
    return state.currentPage
  },
  getMinRooms (state) {
    return state.filters.minRooms
  },
  getMaxRooms (state) {
    return state.filters.maxRooms
  },
  getMinPrice (state) {
    return state.filters.minPrice
  },
  getMaxPrice (state) {
    return state.filters.maxPrice
  }
}

export const actions = {
  async loadRecords (context) {
    const response = await api.getOffers(context.state.currentPage, context.state.filters)
    context.commit('reloadResults', response)
  },
  changePage (context, payload) {
    context.commit('changePage', payload)
  }
}
