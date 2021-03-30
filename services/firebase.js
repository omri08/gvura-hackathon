import * as firebase from 'firebase';
import 'firebase/firestore';
import { Alert } from 'react-native';

export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection('users').doc(currentUser.uid).set({
      email: currentUser.email,
      lastName: lastName,
      firstName: firstName,
    });

    db.collection('profiles').doc(currentUser.uid).set({
      isAvailable: false,
      location: null,
      score: 0,
      preference: null,
    });
    Alert.alert('Registration complete');
  } catch (err) {
    Alert.alert('There is something wrong!!!!', err.message);
  }
}
