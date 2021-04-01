import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, TextInput } from 'react-native';
import styles from './styles';

const TextBox = (props) => {
  const { content } = props;
  let onChangeText = {};
  if (props.onChangeText) {
    onChangeText = props.onChangeText;
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textBox}
        placeholder={content}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        onChangeText={onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default TextBox;
