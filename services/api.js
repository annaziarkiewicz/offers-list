import axios from 'axios'
import { NUMBER_OF_OFFERTS_PER_PAGE } from '../consts/offers'

const BASE_URL = 'https://m.morizon.pl/api'

const createSearchParams = (page, filters) => {
  const filter = []

  if (filters) {
    if (filters.minRooms) {
      filter.push(`numberOfRoomsFrom: ${filters.minRooms}`)
    }
    if (filters.maxRooms) {
      filter.push(`numberOfRoomsTo: ${filters.maxRooms}`)
    }
    if (filters.minPrice) {
      filter.push(`priceFrom: "${filters.minPrice}"`)
    }
    if (filters.maxPrice) {
      filter.push(`priceTo: "${filters.maxPrice}"`)
    }
  }

  return `
    query{
      searchProperties(searchFilters: {${filter.join(',')}}, searchOrder: {
        sortKey: ADDED_AT
      }, numberOfResults: ${NUMBER_OF_OFFERTS_PER_PAGE}, pageNumber: ${page}){
      nodes {
          id
          locationShort
          numberOfRooms
          price {
            amount,
            currency
          }
          totalArea
          photo(configuration: CROP_144X100)
        }
        totalCount
        averagePriceM2 {
          amount
        }
        location {
          name
        }
      }
    }
`
}

export default {
  async getOffers (page, filters) {
    return await axios.post(BASE_URL, { query: createSearchParams(page, filters) })
  }
}
