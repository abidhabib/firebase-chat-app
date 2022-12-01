import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsc89picK5Xn68cz8zDpHh6zM5ilz72hk",
    authDomain: "chat-ac540.firebaseapp.com",
    projectId: "chat-ac540",
    storageBucket: "chat-ac540.appspot.com",
    messagingSenderId: "956207308668",
    appId: "1:956207308668:web:47900814391616e8f50ef9",
    measurementId: "G-DX1M283NLD"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }