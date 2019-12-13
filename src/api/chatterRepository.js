// chatter.js

import Repository from './repository'

export default {
  getMostActiveUser() {
    return Repository.get(`mostActiveUser`);
  },

  getLeastActiveUser() {
    return Repository.get(`leastActiveUser`);
  },

  getMostActiveChatter() {
    return Repository.get(`mostActiveChatter`);
  },

  getMostOppChatter() {
    return Repository.get(`mostActiveOppChatter`);
  },

  getMostActiveCaseChatter() {
    return Repository.get(`mostActiveCaseChatter`);
  }
};