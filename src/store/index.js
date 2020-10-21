import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    element: {}
  },
  mutations: {
    clickElement: (state, element) => {
      state.element = element
    }
  },
  actions: {
  },
  modules: {
  }
})
