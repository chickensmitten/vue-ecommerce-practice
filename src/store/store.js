import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseAuth } from '../firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menuItems: {
      1: {
        'name': 'Margheritaaaa',
        'description': 'A delicious tomato based pizza topped with mozzarella',
        'options': [{
          'size': 9,
          'price': 6.95
        }, {
          'size': 12,
          'price': 10.95
        }]
      },
      2: {
        'name': 'Pepperoni',
        'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
        'options': [{
          'size': 9,
          'price': 7.95
        }, {
          'size': 12,
          'price': 12.95
        }]
      },
      3: {
        'name': 'Ham and Pineapple',
        'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
        'options': [{
          'size': 9,
          'price': 7.95
        }, {
          'size': 12,
          'price': 12.95
        }]
      }
    },
    orders: [],
    currentUser: null
  },
  getters: {
    getMenuItems: state => state.menuItems,
    numberOfOrders: state => state.orders.length,
    currentUser: state => state.currentUser
  },
  mutations: {
    addOrder: (state, orders) => state.orders.push(orders),
    userStatus: (state, user) => {
      // if (user) {
      //   state.currentUser = user
      // } else {
      //   state.currentUser =
      // }
      user === null ? state.currentUser = null : state.currentUser = user.email
    }
  },
  actions: {
    signIn: async (context, user) => {
      try {
        const userData = await firebaseAuth.signInWithEmailAndPassword(
          user.email,
          user.password
        );
        // context.getters
        // context.state
        context.commit('userStatus', userData.user)
      } catch(error) {
        const errorCode = error.code
        const errorMessage = error.message
        if(errorCode === 'auth/wrong-password') {
          alert('Wrong Password')
        } else {
          alert(errorMessage);
        }
      }      
    },
    // signIn: async (context, user) => { is same as below
    signOut: async ({ commit }) => {
      try {
        await firebaseAuth.signOut();
      } catch(error) {
        alert(`error signing out, ${error}`);
      }
      commit('userStatus', null)
    }
  }
});