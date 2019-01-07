import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    listItems: []
  },
  mutations: {
      SET_ITEMS (state, listItems) {
          state.listItems = listItems
      }
  },
  actions: {
      loadItems ({ commit }) {
          axios
              .get('http://localhost:4000/results')
              .then(r => r.data)
              .then(listItems => {
                  commit('SET_ITEMS', listItems)
              })
      }
  }
})
