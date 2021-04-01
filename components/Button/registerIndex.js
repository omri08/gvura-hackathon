import React from 'react';
import styles from './styles.js';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import textStyles from '../textStyles.js';

const StyledRegButton = (props) => {
  const { content, preeFunc } = props;

  let onPress = {};
  if (props.onPress) {
    onPress = props.onPress;
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.registerButton}>
        <Text style={textStyles.logIn}> {content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledRegButton;
