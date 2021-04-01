import React from 'react';
import {logIn} from "../services/firebase"
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import backGroundImage from '../assets/images/logIn.png';
import Rect from '../assets/images/Rectangle.js';
import logo from '../assets/images/logo.png';
import Shadow from '../assets/images/Shadow.js';

import TextBox from '../components/TextBox/index';
import StyledButton from '../components/Button/loginIndex';

export default function LogInScreen( props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setLoading] = React.useState(false)

  const onPress = () => {
     setLoading(true)
  }

  React.useEffect(() => {
    async function loadData() {
      if(isLoading) {
        const data = await logIn(email,password)
         props.setData(data)
      }
    }

    loadData()
  },[isLoading])

  return (
    <ImageBackground source={backGroundImage} style={styles.container}>
      <Rect />
      <Image source={logo} style={styles.logo} />
      <Shadow style={styles.shadow} />

      {!isLoading ? (
        <View style={styles.form}>
          <View style={styles.inputs}>
            <TextBox onChangeText={(text) => setEmail(text)} content={'אימייל'} />
            <TextBox onChangeText={(text) => setPassword(text)} content={'סיסמא'} />
          </View>

          <View style={styles.buttonContainer}>
            <StyledButton
              onPress={() => onPress()}
              content={'התחברות'}
            ></StyledButton>
          </View>

          <View style={styles.register}>
            <Text style={(styles.register, { color: '#FFFFFF' })}>
              לא רשום?
            </Text>
            <Text
              onPress={() => navigation.navigate('Register')}
              style={styles.register}
            >
              פתח משתמש
            </Text>
          </View>
        </View>
      ) : (
        <View style={[styles.spinner]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </ImageBackground>
  );
}




const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  register: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#0048FC',
    textDecorationLine: 'underline',
    fontSize: 15,
  },

  spinner: {
    marginTop: 10,
  },

  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  shadow: {
    position: 'absolute',
    bottom: 0,
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
    alignItems: 'center',
  },
});
