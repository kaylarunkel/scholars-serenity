import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Scholar's Serenity</Text>
      <Link href="/guide" style={styles.button}>
        Continue to guide
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4c2c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000000',
  },
});

