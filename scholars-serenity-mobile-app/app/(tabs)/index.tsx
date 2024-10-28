import { Text, View,  StyleSheet } from 'react-native';
//import { Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMsg1}>Scholar's</Text>
      <Text style={styles.welcomeMsg2}>Serenity</Text>
      <Ionicons name='book' size={100} color='#5ea3c0' style={styles.logo}></Ionicons>
      <Text style={styles.text}>Take a deep breath and stay awhile!</Text>
      </View>
  );
}

/* 
Color Palette: 
Bice blue: #036da4
Air Superiority Blue: #5ea3c0
Light Blue: #b9d9dc
Honeydew: #dbebe2
Ivory: #fdfce8
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfce8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeMsg1: {
    position: 'absolute',
    //fontWeight: 'bold',
    top: 40,
    fontSize: 60,
    color: '#036da4',
  },
  welcomeMsg2: {
    position: 'absolute',
    //fontWeight: 'bold',
    top: 87,
    fontSize: 60,
    color: '#036da4'
    //color: '#8bb4cf',
  },
  text: {
    color: '#8bb4cf',
  },
  button: {
    fontSize: 10,
    color: '#030303',
  },
  logo: {
    bottom : 220,
    left: 180
  }
});
