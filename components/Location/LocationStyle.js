import { StyleSheet } from 'react-native';
import { AppLoading } from "expo";

const LocationStyle = StyleSheet.create({
    swButton:{
      backgroundColor:'white',
      marginHorizontal: 75,
      paddingVertical: 10,
      borderRadius: 10,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    switchButton:{
      padding: 8,
    },
    swText:{
      paddingTop: 20,
      fontSize: 15,
    },
});

export default LocationStyle;

