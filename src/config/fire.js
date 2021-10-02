import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCKEEP66DuUrAE5lm-E6ozzlD3vdyDo1mY",
  authDomain: "mernstack4357.firebaseapp.com",
  databaseURL: "https://mernstack4357-default-rtdb.firebaseio.com",
  projectId: "mernstack4357",
  storageBucket: "mernstack4357.appspot.com",
  messagingSenderId: "450749239858",
  appId: "1:450749239858:web:a4ab82183fa8da59ae622b",
  measurementId: "G-0FJYZKXT7Q"
};
const fire =initializeApp(firebaseConfig);
const database =getDatabase(fire);
const db = getFirestore();
export default fire;
export {db,database};