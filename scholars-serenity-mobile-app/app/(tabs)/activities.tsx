import { Text, View, StyleSheet } from 'react-native';

export default function Activities() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mindfulness</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b9d7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
});