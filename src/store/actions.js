import { firebaseAuth } from '../firebase';

export const signIn = async (context, user) => {
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

// signIn: async (context, user) => { is same as below
export const signOut = async ({ commit }) => {
  try {
    await firebaseAuth.signOut();
  } catch(error) {
    alert(`error signing out, ${error}`);
  }
  commit('userStatus', null)
}