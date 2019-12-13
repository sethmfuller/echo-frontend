// cooRequests.js

import Repository from './repository'

export default {
  get() {
    return Repository.get(`coo`);
  },
};