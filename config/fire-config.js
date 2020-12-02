import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDpFEHIGX79aiXaYOojKV-aUBBo44-0Ubk",
    authDomain: "gbstore-c1898.firebaseapp.com",
    databaseURL: "https://gbstore-c1898.firebaseio.com",
    projectId: "gbstore-c1898",
    storageBucket: "gbstore-c1898.appspot.com",
    messagingSenderId: "797397405244",
    appId: "1:797397405244:web:4580447042433393243d39"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}

const fire = firebase;
export default fire;