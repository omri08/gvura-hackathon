import React from 'react';
import { StyleSheet,Text, View, ImageBackground, Image } from 'react-native';
import Rect from '../assets/images/Rectangle.js'
import logo from '../assets/images/logo.png'

import TextBox from '../componutes/TextBox/index'
import StyledRegButton from '../componutes/Button/registerIndex'


export default function RegisterScreen ()
{

    return (
        <ImageBackground 
        style = {styles.container}>
        <Rect />
        <Image source={logo} style={styles.logo}/>
        <View style={styles.textContainer}>
            <TextBox content="שם משתמש" reg={false}></TextBox>
            <TextBox content="אימייל"></TextBox>
            <TextBox content="סיסמא"></TextBox>
            <TextBox content="אימות סיסמא"></TextBox>
        </View>
        <View style={styles.buttonContainer}>
            <StyledRegButton content="הרשמה"></StyledRegButton>
        </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        position: 'absolute',
        top: "69%" ,
        width: '100%',
        right: '5%'
    },
    textContainer:{
        position: 'absolute',
        top: "30%",
        right: '15%',
        width: '100%'
        
    },
    logo: {
        position: 'absolute',
        height: 72.5,
        width: 222.5,
        alignSelf: 'center',
        top: 80,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    }, 
  });

