import firebase from 'firebase';

const  config = {
  apiKey: "AIzaSyDAw2n2qtVLOuQOqLi3Lb8WDe36J46SANM",
  authDomain: "duee-site.firebaseapp.com",
  databaseURL: "https://duee-site.firebaseio.com",
  projectId: "duee-site",
  storageBucket: "duee-site.appspot.com",
  messagingSenderId: "84661138996",
  appId: "1:84661138996:web:dafd0359a41cb228"
};

// Initialize Firebase
export const firebaseImpl = firebase.initializeApp(config);
export const db = firebase.firestore();