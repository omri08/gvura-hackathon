import React from 'react';
import * as firebase from 'firebase';
import { Alert, Text, View, LogBox } from 'react-native';
import apiKeys from './config/key';
import { logIn, registration } from './services/firebase';
import { AuthContext } from './context';
import LogInScreen from './screens/LogInScreen';
import HomeScreen from './screens/Homepage/index';
export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);
  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys);
  }

  const [userData, setUserData] = React.useState({});

  return (
    <View style={{ flex: 1 }}>
      {userData.uid ? (
        <HomeScreen userData={userData} />
      ) : (
        <LogInScreen setData={setUserData} />
      )}
    </View>
  );
}
