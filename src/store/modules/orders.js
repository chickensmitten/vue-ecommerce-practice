import { firestoreAction } from 'vuexfire'
import { dbOrdersRef } from '../../firebase'

const state = {
  orders: [],
}

const mutations = {
  addOrder: (state, orders) => state.orders.push(orders)
}

const getters = {
  numberOfOrders: state => state.orders.length,
  getOrders: state => state.orders
}

const actions = {
  setOrdersRef: firestoreAction(context => {
    return context.bindFirestoreRef('orders', dbOrdersRef)
    // orders references the orders state above.
  })
}

export default {
  state,
  mutations,
  actions,
  getters
}