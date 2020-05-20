import { firebaseAuth } from '../firebase';
// signIn: async (context, user) => { is same as below
export const signOut = async ({ commit }) => {
  try {
    await firebaseAuth.signOut();
  } catch(error) {
    alert(`error signing out, ${error}`);
  }
  commit('userStatus', null)
}