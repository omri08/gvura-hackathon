import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Pressable } from 'react-native';
import styles from './styles'

const StyledButton = (props) => {
    const {content} =props;
    return(
        <View style={styles.container}>
            <Pressable
            style={styles.logInButton}
             />
            {/* <Text>HI</Text> */}
        </View>

    );
};

export default StyledButton;