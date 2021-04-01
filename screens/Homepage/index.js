import React, { useState } from 'react';
import Rect from '../../assets/images/Rectangle.js';
import logo from '../../assets/images/logo.png';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Switch,
  Alert,
} from 'react-native';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import UserLocation from '../../components/Location/UserLocation';

const Homepage = ({ userData }) => {
  const displayName = `שלום ${userData.name}`;

  return (
    <View style={styles.container}>
      <Rect style={{ position: 'absolute' }} />
      <Entypo style={styles.menuIcon} name="menu" size={30} color="white" />
      <ScrollView>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{displayName}</Text>
        </View>
        <UserLocation userData={userData} />

        <View style={styles.moreDetails}>
          <Text style={styles.moreDetailsText}>
            כאשר אתה לא זמין לא תקבל עדכונים על התנדבויות
          </Text>
        </View>

        <View style={styles.coinsTitle}>
          <Text style={styles.boldText}>מטבעות גבורה</Text>
        </View>

        <View style={styles.coinStatus}>
          <MaterialCommunityIcons
            name="cash-usd"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <MaterialCommunityIcons
            name="cash-usd"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <MaterialCommunityIcons
            name="cash-usd"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <MaterialCommunityIcons
            name="cash-usd-outline"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <MaterialCommunityIcons
            name="cash-usd-outline"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <Text style={styles.coinDescription1}>מטבעות שצברת</Text>
        </View>
        <View style={styles.coinStatus}>
          <Ionicons name="ios-time" size={24} color="rgba(252, 185, 0, 100)" />
          <Ionicons name="ios-time" size={24} color="rgba(252, 185, 0, 100)" />
          <Ionicons name="ios-time" size={24} color="rgba(252, 185, 0, 100)" />
          <Ionicons name="ios-time" size={24} color="rgba(252, 185, 0, 100)" />
          <Ionicons
            name="ios-time-outline"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <Text style={styles.coinDescription}>שעות זמינות מצטברות</Text>
        </View>
        <View style={styles.coinStatus}>
          <Ionicons name="timer" size={24} color="rgba(252, 185, 0, 100)" />
          <Ionicons
            name="timer-outline"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <Ionicons
            name="timer-outline"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <Ionicons
            name="timer-outline"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <Ionicons
            name="timer-outline"
            size={24}
            color="rgba(252, 185, 0, 100)"
          />
          <Text style={styles.coinDescription}>זמינות עד למטבע הבא</Text>
        </View>
      </View>
    </View>
  );
};

export default Homepage;
