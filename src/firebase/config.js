import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAjwwilN3bJAu-JxhLa6LdG-tbDiaGcV2A",
  authDomain: "dipto-firegram.firebaseapp.com",
  databaseURL: "https://dipto-firegram.firebaseio.com",
  projectId: "dipto-firegram",
  storageBucket: "dipto-firegram.appspot.com",
  messagingSenderId: "645223596925",
  appId: "1:645223596925:web:a75d591ddf15054ed08214"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
