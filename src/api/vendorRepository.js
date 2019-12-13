// vendorRequests.js

import Repository from './repository'

export default {
  get() {
    return Repository.get(`vendors`);
  },

  getWithMostProductsByCategory(categoryId) {
    return Repository.get(`vendorWithMostProducts/${categoryId}`);
  },
};