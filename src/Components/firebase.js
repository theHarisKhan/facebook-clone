import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBsx1P9bBygn3eiZ4ErLD7958kC4aivMGE",
    authDomain: "facebook-clone-21c6c.firebaseapp.com",
    databaseURL: "https://facebook-clone-21c6c.firebaseio.com",
    projectId: "facebook-clone-21c6c",
    storageBucket: "facebook-clone-21c6c.appspot.com",
    messagingSenderId: "12147001456",
    appId: "1:12147001456:web:215565ca0b44fe2b5eccb5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider} 
export default db