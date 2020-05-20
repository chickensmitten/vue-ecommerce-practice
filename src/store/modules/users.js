import { firebaseAuth } from '../../firebase';

const state = {
  currentUser: null
}

const mutations = {
  userStatus:  (state, user) => {
    // if (user) {
    //   state.currentUser = user
    // } else {
    //   state.currentUser =
    // }
    user === null ? state.currentUser = null : state.currentUser = user.email
  }
}

const getters = {
  currentUser: state => state.currentUser
}

const actions = {
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
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}