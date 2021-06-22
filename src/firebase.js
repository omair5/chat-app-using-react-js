import firebase from 'firebase/app'
import "firebase/auth"

export const auth = firebase.initializeApp(
    {
        apiKey: "AIzaSyDg_IeZ2M70HQDV5CoGE2ufGcbDqhkzFU4",
        authDomain: "chatie-99059.firebaseapp.com",
        projectId: "chatie-99059",
        storageBucket: "chatie-99059.appspot.com",
        messagingSenderId: "369072344487",
        appId: "1:369072344487:web:7c12b68bdc642e690fba82"
      }
).auth()

