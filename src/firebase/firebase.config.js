import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDkDkMJZt2mdau86ynBOEIraodPVlS3aHo",
    authDomain: "bar-reservations.firebaseapp.com",
    databaseURL: "https://bar-reservations.firebaseio.com",
    projectId: "bar-reservations",
    storageBucket: "bar-reservations.appspot.com",
    messagingSenderId: "596874445810",
    appId: "1:596874445810:web:6836457fd67e450a24616b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


