import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './screens/LogInScreen'
import RegisterScreen from './screens/RegisterScreen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    
    <Stack.Screen name='LogIn' component={LogInScreen}/>
    <Stack.Screen name='Register' component={RegisterScreen}/>
   
    </Stack.Navigator> 
    
  </NavigationContainer>
    // <View style={styles.container}>
    //   <LogInScreen/>
    //   {/* <RegisterScreen/> */}
    //   <StatusBar style="auto"/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
});
