import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import apiKeys from './config/key';
import { registration } from './services/firebase';

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(apiKeys);
  }

  return (
    <View style={styles.container}>
      <Text
        onPress={() =>
          registration('omrimalka08@gmail.com', '123456', 'malka', 'omri')
        }
      >
        Hello Hackathon
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
