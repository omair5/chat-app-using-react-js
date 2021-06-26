import firebase from 'firebase/app'
import "firebase/auth"

export const auth = firebase.initializeApp(
  {
    apiKey: "AIzaSyAOHI7VZJtryWjmrWmoZmF8ToojLCV2YrA",
    authDomain: "chatnow-app.firebaseapp.com",
    projectId: "chatnow-app",
    storageBucket: "chatnow-app.appspot.com",
    messagingSenderId: "665301919367",
    appId: "1:665301919367:web:b0e64f979689aa4b11fa22"
  }
).auth()