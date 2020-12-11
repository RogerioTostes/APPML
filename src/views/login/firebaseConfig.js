
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyCOcJELEV03Z_D0SNummSRXWQWo0LL9jvo",
    authDomain: "appml-f9af5.firebaseapp.com",
    databaseURL: "https://appml-f9af5.firebaseio.com",
    projectId: "appml-f9af5",
    storageBucket: "appml-f9af5.appspot.com",
    messagingSenderId: "460855135835",
    appId: "1:460855135835:web:5e43a8dd5790f4b955f97e"
  };
  firebase.initializeApp(firebaseConfig);

  firebase.firestore();

  export default firebase;
