import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeMsg1}>Scholar's</Text>
          <Text style={styles.welcomeMsg2}>Serenity</Text>
        </View>
        <Ionicons name='book' size={80} color='#5ea3c0' style={styles.logo} />
      </View>
      <Text style={styles.text}>Take a deep breath and stay awhile!</Text>
      {/*<Text style={styles.text}>Whatever you need, we are here for you!</Text> */}
      <Link href='/activities' style={styles.button}>
        <Text style={styles.buttonText}>Mindfulness</Text></Link>
      <Link href="/journal" style={styles.button}>
        <Text style={styles.buttonText}>Journal</Text></Link>
    </View>
  );
}

//Color Palette: 
//Bice blue: #036da4
//Air Superiority Blue: #5ea3c0
//Light Blue: #b9d9dc
//Honeydew: #dbebe2
//Ivory: #fdfce8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfce8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 5,
  },
  textContainer: {
    alignItems: 'flex-end', 
    marginRight: 0,
  },
  welcomeMsg1: {
    fontSize: 60,  
    color: '#036da4',
    textAlign: 'right',
  },
  welcomeMsg2: {
    fontSize: 60, 
    color: '#036da4',
    textAlign: 'right',
  },
  text: {
    fontSize: 18,
    color: '#b9d9dc',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#dbebe2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    //borderWidth: 2,
    //borderColor: '#b9d9dc'
  },
  buttonText: {
    color: '#036da4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#036da4',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40
  }
});
