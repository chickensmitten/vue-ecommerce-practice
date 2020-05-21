import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "pizza-planet-478b2.firebaseapp.com",
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: "pizza-planet-478b2",
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: "244574836601",
  appId: process.env.VUE_APP_ID
}

firebase.initializeApp(config)
const db = firebase.firestore()
export const firebaseAuth = firebase.auth()
export const dbMenuRef = db.collection('menu')
// references menu at the database
export const dbOrdersRef = db.collection('orders')