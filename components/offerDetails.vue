<template>
  <div class="offer-container py-4 d-flex">
    <div class="offer-photo mr-4 d-flex align-items-center">
      <img :src="offer.photo ? offer.photo : require('@/assets/no-photo.png')"/>
    </div>
    <div class="offer-details d-flex flex-column justify-content-center">
      <div class="offer-location">
        {{ offer.locationShort.join(' / ') }}
      </div>
      <div class="offer-rooms" v-if="offer.numberOfRooms">
        Liczba pokoi: <b>{{ offer.numberOfRooms }}</b>
      </div>
      <div class="offer-area" v-if="offer.totalArea">
        Powierzchnia: <b>{{ parseInt(offer.totalArea) }}m<sup>2</sup></b>
      </div>
      <div class="offer-price">
        {{ parseInt(offer.price.amount) }} {{ offer.price.currency }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferDetails',

  props: {
    offer: { type: Object, required: true }
  },
}
</script>

<style lang="scss" scoped>
.offer-container {
  border-bottom: 1px solid #afafa8;
}
img {
  width: 144px;
  border: 10px solid #e7e7e2;
}
.offer-details {
  color: #5a5a56;
}
.offer-location {
  font-size: 2.4em;
}
.offer-rooms,
.offer-area {
  font-size: 1.2em;
}
.offer-price {
  font-size: 2em;
  font-weight: bold;
  color: #e08da6;
}

@media (max-width: 479px) {
  img {
    width: 100px;
    border-width: 5px;
  }
  .offer-details {
    font-size: 0.8em;
  }
}
</style>
