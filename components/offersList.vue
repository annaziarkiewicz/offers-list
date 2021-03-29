<template>
  <b-container class="offers-container px-0">
    <b-row v-for="offer in getNodes" :key="offer.id">
      <b-col>
        <offerDetails :offer="offer"/>
      </b-col>
    </b-row>

    <b-row v-if="getNodes.length === 0">
      <b-col class="error py-4 text-center">
        Brak wyników spełniających kryteria wyszukiwania
      </b-col>
    </b-row>

    <b-row v-if="totalPages>1">
      <b-col>
        <pagination :total="totalPages" :current-page="getCurrentPage"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { NUMBER_OF_OFFERTS_PER_PAGE } from '../consts/offers'
import offerDetails from './offerDetails'
import pagination from './pagination'

export default {
  name: 'OffersList',
  components: { offerDetails, pagination },
  props: {
    page: { type: Number, default: 1 }
  },

  computed: {
    ...mapGetters('offers', ['getNodes', 'getTotal', 'getCurrentPage']),
    totalPages: {
      get () {
        return Math.ceil(this.getTotal / NUMBER_OF_OFFERTS_PER_PAGE)
      }
    }
  },

  mounted () {
    this.changePage(this.page)
    this.loadRecords()
  },

  methods: {
    ...mapActions('offers', ['loadRecords', 'changePage'])
  }
}
</script>

<style lang="scss" scoped>
.error {
  font-size: 1.6em;
}
</style>
