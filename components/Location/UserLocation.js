import React from 'react';
import { View, Text, Switch } from 'react-native';
import LocationStyle from './LocationStyle';

const UserLocation = () => {

    return(
        <View style={LocationStyle.swButton}>
            <Switch style={LocationStyle.switchButton}
            trackColor={{ false:  "#f4f3f4", true: "rgba(101, 152, 209, 100)" }}
            thumbColor={isEnabled ? "rgba(18, 115, 222, 100)" : "rgba(125, 148, 173, 100)"}
            ios_backgroundColor="rgba(160, 177, 190, 100)"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
            <Text style={LocationStyle.swText}>{isEnabled ? "זמין" : "לא זמין"}</Text>
        </View> 

);
};

export default UserLocation;