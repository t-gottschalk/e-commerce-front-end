import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBG5zz-Xc54ZER3UUoGy9-dnhORvFuKHfw",
  authDomain: "e-commerce-project-db-97411.firebaseapp.com",
  databaseURL: "https://e-commerce-project-db-97411.firebaseio.com",
  projectId: "e-commerce-project-db-97411",
  storageBucket: "",
  messagingSenderId: "519010091196",
  appId: "1:519010091196:web:0ecf37ddca96f5864e90b9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
