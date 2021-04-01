import React from 'react';
import { Platform, View, Text, Switch, Alert } from 'react-native';
import LocationStyle from './LocationStyle';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { updateStatus } from '../../services/firebase';
const UserLocation = ({ userData }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const [location, setLocation] = React.useState();

  React.useEffect(() => {
    async function test() {
      if (location && isEnabled)
        await updateStatus(true, location, userData.uid);
    }
    test();
  }, [location]);

  const askPrem = async () => {
    await (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!',
        );
        return;
      }
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Why???');
        return;
      }

      let tempLocation = await Location.getCurrentPositionAsync({});
      setLocation(tempLocation);
    })();
  };

  const toggleSwitch = async () => {
    console.log(location);
    if (isEnabled) {
      setIsEnabled(false);
      await updateStatus(false, {}, userData.uid);
    } else {
      setIsEnabled(true);
      await askPrem();
    }
  };

  return (
    <View style={LocationStyle.swButton}>
      <Switch
        style={LocationStyle.switchButton}
        trackColor={{ false: '#f4f3f4', true: 'rgba(101, 152, 209, 100)' }}
        thumbColor={
          isEnabled ? 'rgba(18, 115, 222, 100)' : 'rgba(125, 148, 173, 100)'
        }
        ios_backgroundColor="rgba(160, 177, 190, 100)"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={LocationStyle.swText}>{isEnabled ? 'זמין' : 'לא זמין'}</Text>
    </View>
  );
};

export default UserLocation;
