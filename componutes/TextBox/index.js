import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, TextInput } from 'react-native';
import styles from './styles'


const TextBox = (props) => {
    const {content} =props;
    return(
        <View style={styles.container}>
            <TextInput
            style={styles.textBox}
            placeholder = {content}
             />
        </View>

    );
};

export default TextBox;
