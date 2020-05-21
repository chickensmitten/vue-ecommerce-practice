import { firestoreAction } from 'vuexfire'
import { dbOrdersRef } from '../../firebase'

const state = {
  orders: [],
}

const mutations = {
  // addOrder: (state, orders) => state.orders.push(orders)
}

const getters = {
  numberOfOrders: state => state.orders.length,
  getOrders: state => state.orders
}

const actions = {
  setOrdersRef: firestoreAction(context => {
    return context.bindFirestoreRef('orders', dbOrdersRef.orderBy('createAt'))
    // orders references the orders state above.
  }),
  addNewOrder: async(context, order) => {
    try {
      await dbOrdersRef.add(order)
    } catch(error) {
      alert('Sorry, there was a problem placing your order, please try again.')
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}