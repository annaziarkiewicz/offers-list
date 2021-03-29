<template>
  <div class="pagination-container pt-4 pb-2 d-flex">
    <ul class="d-flex justify-content-center flex-wrap">
      <li v-if="currentPage > 4">
        <nuxt-link :to="`/offers/1`">1</nuxt-link>
      </li>
      <li v-if="currentPage > 4">...</li>
      <li v-for="page in pages" v-bind:key="page">
        <nuxt-link :to="`/offers/${page}`">{{ page }}</nuxt-link>
      </li>
      <li v-if="currentPage < total - 5">...</li>
      <li>
        <nuxt-link :to="`/offers/${total}`">{{ total }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'underscore'

export default {
  name: 'Pagination',

  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number
    }
  },

  computed: {
    pages() {
      const start =
        this.currentPage - 3 < this.total - 3
          ? this.currentPage - 3
          : this.currentPage - 3 - (this.total - this.currentPage)
      const stop = this.currentPage + 3 < 6 ? 6 : this.currentPage + 3

      return _.range(
        start > 1 ? start : 1,
        stop < this.total ? stop : this.total
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  width: 100%;
}
ul {
  width: 100%;
  padding: 0px;
  margin: 0px;
}
li {
  margin-bottom: 10px;
  list-style: none;
  font-size: 1.2em;
  line-height: 25px;
  color: #afafa8;
}
a {
  display: block;
  min-width: 25px;
  height: 25px;
  padding: 0px 5px;
  margin: 0px 5px;
  background: #e7e7e2;
  border-radius: 12px;
  text-align: center;
  color: #5a5a56;
  &:hover {
    text-decoration: none;
    background: #9ae0de;
    color: #ffffff;
  }
  &.nuxt-link-active {
    background: #e08da6;
    color: #ffffff;
  }
}
</style>
