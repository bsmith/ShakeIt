// import * as firebase from "firebase";
import { getApps, initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Our web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// let app;

// if (firebase.apps.length === 0) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
let app;

if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  // Initialize other firebase products here
}
// const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();
// const db2 = getFirestore(app);

// const auth = firebase.auth();
// const analytics = getAnalytics(app);

// export { app, db, auth };
export { db, auth };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// Initialize Firebase
