import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfaSh4d__ZLy3RErl6Lkg8xk9Fh6G_Kno",
  authDomain: "bkknest-checkbkkworksdemo.firebaseapp.com",
  databaseURL: "https://bkknest-checkbkkworksdemo.firebaseio.com",
  projectId: "bkknest-checkbkkworksdemo",
  storageBucket: "bkknest-checkbkkworksdemo.appspot.com",
  messagingSenderId: "532480093014",
  appId: "1:532480093014:web:a59dc36ace75c81e4ec4f7",
  measurementId: "G-3BE57PYMP8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase