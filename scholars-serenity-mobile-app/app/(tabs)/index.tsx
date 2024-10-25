import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMsg1}>Scholar's</Text>
      <Text style={styles.welcomeMsg2}>Serenity</Text>
      <Text style={styles.text}>Take a deep breath and stay awhile!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeMsg1: {
    position: 'absolute',
    top: 40,
    fontSize: 60,
    color: '#8bb4cf',
  },
  welcomeMsg2: {
    position: 'absolute',
    top: 87,
    fontSize: 60,
    color: '#8bb4cf',
  },
  text: {
    color: '#8bb4cf',
  },
  button: {
    fontSize: 10,
    color: '#030303',
  }
});
