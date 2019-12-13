// categoryRequests.js

import Repository from './repository'

export default {
  get() {
    return Repository.get(`categories`);
  },

  getWithMostProducts() {
    return Repository.get(`categoryWithMostProducts`);
  },
};