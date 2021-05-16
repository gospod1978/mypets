import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAg9HcYt6NPXidw6vY_0rRcqzrjZNGok7k",
    authDomain: "mypets-d0913.firebaseapp.com",
    projectId: "mypets-d0913",
    storageBucket: "mypets-d0913.appspot.com",
    messagingSenderId: "363579513473",
    appId: "1:363579513473:web:a60090d381b1f20d094b80"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase

export const auth = firebase.auth()