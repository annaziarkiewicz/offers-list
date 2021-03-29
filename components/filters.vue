<template>
  <b-container class="filters-container px-0 pt-4">
    <b-row>
      <b-col cols="12" md="5" class="pb-4 d-flex flex-wrap">
        <label>Cena mieszkania</label>
        <div class="filter-from mr-2">
          <span class="prepend-input">od</span>
          <input v-model="minPrice" type="number" />
        </div>
        <div class="filter-to ml-2">
          <span class="prepend-input">do</span>
          <input v-model="maxPrice" type="number" />
        </div>
      </b-col>

      <b-col cols="12" md="5" class="pb-4 d-flex flex-wrap">
        <label>Liczba pokoi</label>
        <div class="filter-from mr-2">
          <span class="prepend-input">od</span>
          <input v-model="minRooms" type="number" />
        </div>
        <div class="filter-to ml-2">
          <span class="prepend-input">do</span>
          <input v-model="maxRooms" type="number" />
        </div>
      </b-col>

      <b-col cols="12" md="2" class="pb-4 d-flex align-items-end">
        <b-button block @click="search">Szukaj</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Filters',

  computed: {
    ...mapGetters('offers', [
      'getMinPrice',
      'getMaxPrice',
      'getMinRooms',
      'getMaxRooms'
    ]),
    minPrice: {
      set(value) {
        this.$store.commit('offers/changeMinPrice', value)
      },
      get() {
        return this.getMinPrice
      }
    },
    maxPrice: {
      set(value) {
        this.$store.commit('offers/changeMaxPrice', value)
      },
      get() {
        return this.getMaxPrice
      }
    },
    minRooms: {
      set(value) {
        this.$store.commit('offers/changeMinRooms', value)
      },
      get() {
        return this.getMinRooms
      }
    },
    maxRooms: {
      set(value) {
        this.$store.commit('offers/changeMaxRooms', value)
      },
      get() {
        return this.getMaxRooms
      }
    }
  },
  methods: {
    ...mapActions('offers', ['loadRecords', 'changePage']),
    search() {
      this.changePage(1)
      this.loadRecords()
    }
  }
};
</script>

<style lang="scss" scoped>
.filters-container {
  border-bottom: 1px solid #afafa8;
}
label {
  width: 100%;
  font-size: 1.2em;
}
.filter-from,
.filter-to {
  display: flex;
  width: calc(50% - 0.5rem);
  font-size: 1.2em;
  line-height: 30px;
}
.prepend-input {
  width: 36px;
  height: 32px;
  padding-left: 10px;
  border: 1px solid #afafa8;
  border-right: 0px;
  border-radius: 16px 0px 0px 16px;
}
input {
  width: calc(100% - 36px);
  height: 32px;
  padding: 0px 10px;
  border: 1px solid #afafa8;
  border-radius: 0px 16px 16px 0px;
}
.actionx {
  display: flex;
  align-items: flex-end;
}
button {
  height: 32px;
  background: #80c4c2;
  border: 0px;
  border-radius: 16px;
  font-size: 1.2em;
  color: #ffffff;
  font-weight: bold;
  &:hover {
    background: #9ae0de;
  }
}
</style>
