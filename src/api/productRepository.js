// productRequests.js

import Repository from './repository'

export default {
  getByCategoryAndCOO(categoryId, COOId) {
    return Repository.get(`partsByCategoryAndCoo/${categoryId}/${COOId}`);
  },

  getByCountry(COOId) {
    return Repository.get(`partsByCountry/${COOId}`);
  },

  getByCategory(categoryId) {
    return Repository.get(`partsByCategory/${categoryId}`);
  },

  getCountByCountry(COOId) {
    return Repository.get(`countryWiseProductsCount/${COOId}`);
  },
};