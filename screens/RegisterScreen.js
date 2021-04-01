import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Rect from '../assets/images/Rectangle.js';
import logo from '../assets/images/logo.png';

import TextBox from '../components/TextBox/index';
import StyledRegButton from '../components/Button/registerIndex';
import { registration } from '../services/firebase';
export default function RegisterScreen({ userData }) {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const register = async () => {
    setIsLoading(true);
    if (email && name && password && password == password2) {
      const data = await registration(email, password, name);
      console.log(data);
      userData(data);
    }
    setIsLoading(false);
  };

  return (
    <ImageBackground style={styles.container}>
      <Rect />
      <Image source={logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <TextBox
          onChangeText={(text) => setName(text)}
          content="שם מלא"
          reg={false}
        ></TextBox>
        <TextBox
          onChangeText={(text) => setEmail(text)}
          content="אימייל"
        ></TextBox>
        <TextBox
          onChangeText={(text) => setPassword(text)}
          content="סיסמא"
        ></TextBox>
        <TextBox
          onChangeText={(text) => setPassword2(text)}
          content="אימות סיסמא"
        ></TextBox>
      </View>

      <View style={styles.buttonContainer}>
        <StyledRegButton onPress={() => register()} content="הרשמה" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  textContainer: {},
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
    alignItems: 'center',
  },
});
