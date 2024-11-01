import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function GuideScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Whatever you need, we are here for you!</Text>
      <Link href="/activities" style={styles.button}>
        <Text style={styles.buttonText}>Mindfulness</Text></Link>
      <Link href="/journal" style={styles.button}>
        <Text style={styles.buttonText}>Journal</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfce9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
  button: {
    backgroundColor: '#dbebe2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#b9d9dc'
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
