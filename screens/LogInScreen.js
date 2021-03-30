import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, ImageBackground } from 'react-native';
import logo from '../assets/images/logIn.png'
import TextBox from '../componutes/TextBox/index'
export default function LogInScreen ()
{
    return (
    <View style={styles.homeContainer}>
        <ImageBackground
            source={logo}
            style={styles.image}
            />
    <View style={styles.buttonContainer}>
        <TextBox content={'Email'}> </TextBox>
        <TextBox content={'Password'}></TextBox>
    </View>

    </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
      width: '100%',
      height: Dimensions.get('window').height,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonContainer:{
        position: 'absolute',
        top: "50%",
        width: '100%'
        
    }
  });

