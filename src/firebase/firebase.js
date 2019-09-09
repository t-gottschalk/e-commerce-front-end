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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('Error creating user', error.message);
		}
	}

	return userRef;
	// console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// query for database
firestore.collection('users').doc('d0nkURt1PTRSbwOCoIfH').collection('cartItems').doc('MXv7vqYLn50krIZHyTsS');

firestore.doc('/users/d0nkURt1PTRSbwOCoIfH/cartItems/MXv7vqYLn50krIZHyTsS');
firestore.collection('/users/d0nkURt1PTRSbwOCoIfH/cartItems');


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
