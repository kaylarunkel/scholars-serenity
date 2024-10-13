import { Text, View, StyleSheet } from 'react-native';

export default function GuideScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guide screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4c2c2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
});
