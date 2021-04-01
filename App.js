import React from 'react';
import * as firebase from 'firebase';
import { View, LogBox } from 'react-native';
import apiKeys from './config/key';
import LogInScreen from './screens/LogInScreen';
import HomeScreen from './screens/Homepage/index';
import RegisterScreen from './screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);
  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys);
  }

  const [userData, setUserData] = React.useState({});

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {userData.uid ? (
          <HomeScreen userData={userData} />
        ) : (
          <LogInScreen userData={setUserData} />
        )}
      </View>
    </NavigationContainer>
  );
}
