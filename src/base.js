import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBNeH2Gfq58RGMiPQprpCcLUYttZC7PKNk',
  authDomain: 'planeat-f9522.firebaseapp.com',
  databaseURL: 'https://planeat-f9522.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
