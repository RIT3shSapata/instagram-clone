import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDA-Ap4t4PgYgodWrhPCmiiNfaUWxTxJl0",
    authDomain: "instagram-clone-ff700.firebaseapp.com",
    databaseURL: "https://instagram-clone-ff700.firebaseio.com",
    projectId: "instagram-clone-ff700",
    storageBucket: "instagram-clone-ff700.appspot.com",
    messagingSenderId: "596490162516",
    appId: "1:596490162516:web:2f757010067f2e86e778c1",
    measurementId: "G-LRDGJLSK4Z"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};