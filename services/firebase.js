import * as firebase from 'firebase';
import 'firebase/firestore';

export async function registration(email, password, name) {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
  const currentUser = firebase.auth().currentUser;

  const db = firebase.firestore();
  db.collection('users').doc(currentUser.uid).set({
    email: currentUser.email,
    name,
  });

  db.collection('profiles').doc(currentUser.uid).set({
    isAvailable: false,
    location: null,
    score: 0,
    preference: null,
    name,
  });
  return {
    uid: currentUser.uid,
    isAvailable: false,
    location: null,
    score: 0,
    preference: null,
    name,
  };
}

export async function logIn(email, password) {
  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  const userRef = firebase.firestore().collection('profiles').doc(user.uid);
  let userData = await userRef.get();
  userData = userData.data();
  return { ...userData, uid: user.uid };
}

export async function updateStatus(isAvailable, location, uid) {
  try {
    if (isAvailable) {
      const { latitude, longitude } = location.coords;
      const geoPoint = new firebase.firestore.GeoPoint(
        Number(latitude),
        Number(longitude),
      );
      await firebase.firestore().collection('profiles').doc(uid).update({
        location: geoPoint,
        isAvailable,
      });
    } else {
      await firebase.firestore().collection('profiles').doc(uid).update({
        isAvailable,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
