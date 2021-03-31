import React from 'react';
import * as firebase from 'firebase';
import { Alert } from 'react-native';
import apiKeys from './config/key';
import { logIn, registration } from './services/firebase';
import { AuthContext } from './context';
import LogInScreen from './screens/LogInScreen';

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys);
  }

  const [userData, setUserData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: async (email, password) => {
        try {
          setIsLoading(true);
          const data = await logIn(email, password);
          setUserData(data);
          setIsLoading(false);
        } catch (error) {
          Alert.alert(error);
          setIsLoading(false);
        }
      },
      signUp: async (email, password, name) => {
        try {
          setIsLoading(true);
          const data = await registration(email, password, name);
          setUserData(data);
          setIsLoading(false);
        } catch (error) {
          Alert.alert(error);
          setIsLoading(false);
        }
      },
    };
  }, [setUserData, setIsLoading]);

  return (
    <AuthContext.Provider value={{ authContext, userData, isLoading }}>
      <LogInScreen />
    </AuthContext.Provider>
  );
}
