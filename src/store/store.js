import Vue from 'vue'
import Vuex from 'vuex'
// using * to import all content of the new file
import * as actions from './actions'
import * as getters from './getters'
// import * as mutations from './mutations'
import menu from './modules/menu'
import users from './modules/users'
import orders from './modules/orders'
import { vuexfireMutations } from 'vuexfire'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    menu,
    orders,
    users
  },
  getters,
  mutations: vuexfireMutations,
  actions
});