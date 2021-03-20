import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberOfVisitsMainPage: 0,
    numberOfVisitsWebsite: 0,
    numberOfVisitsApplications: 0,
    numberOfVisitsGroupOfUsers: 0,
    numberOfVisitsUsers: 0,
  },
  mutations: {
    increaseCounter(state, numberOfVisits) {
      state[numberOfVisits]++
    }
  },
  actions: {
  },
  modules: {
  }
})
