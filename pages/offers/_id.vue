<template>
  <b-container>
    <b-row>
      <b-col>
        <filters/>
        <offersList :page="parseInt($route.params.id)"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import filters from '../../components/filters'
import offersList from '../../components/offersList'

export default {
  name: 'OffersPage',
  components: { filters, offersList }
}
</script>

<style lang="scss" scoped></style>
