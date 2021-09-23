import axios from 'axios';

// const API_URL = 'https://www.tesla.com/inventory/api/v1/';

const query = {
  query: {
    model: 'ms',
    condition: 'new',
    options: {},
    arrangeby: 'Relevance',
    order: 'desc',
    market: 'US',
    language: 'en',
    super_region: 'north america'
  },
  offset: 0,
  count: 50,
  outsideOffset: 0,
  outsideSearch: true
}

export const getInventory = () => axios.get(`/teslaApi/inventory/api/v1/inventory-results?query=${JSON.stringify(query)}`)
// export const getInventory = () => axios.get(`/api/inventory`)
