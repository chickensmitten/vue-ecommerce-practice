export const addOrder = (state, orders) => state.orders.push(orders)
export const userStatus =  (state, user) => {
  // if (user) {
  //   state.currentUser = user
  // } else {
  //   state.currentUser =
  // }
  user === null ? state.currentUser = null : state.currentUser = user.email
}