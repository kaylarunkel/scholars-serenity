import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Activities() {
  /*return (
    <View style={styles.container}>
      <Text style={styles.text}>Mindfulness</Text>
    </View>
  );*/

  /*const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7b9d7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#000000',
    },
  });*/

  const [sounds, setSounds] = useState({
    sound1: '',
    sound2: '',
    sound3: '',
    sound4: '',
    sound5: ''
  });

  const handleInputChange = (name: string, value: string) => {
    setSounds(prevSounds => ({
      ...prevSounds,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle what you want to do with the sounds here (e.g., save or display)
    console.log('User heard:', sounds);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>5-4-3-2-1</Text>
      <Text style={styles.prompt}>Find 5 things you can hear and write them down:</Text>

      <TextInput
        style={styles.input}
        placeholder="Sound 1"
        value={sounds.sound1}
        onChangeText={value => handleInputChange('sound1', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sound 2"
        value={sounds.sound2}
        onChangeText={value => handleInputChange('sound2', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sound 3"
        value={sounds.sound3}
        onChangeText={value => handleInputChange('sound3', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sound 4"
        value={sounds.sound4}
        onChangeText={value => handleInputChange('sound4', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sound 5"
        value={sounds.sound5}
        onChangeText={value => handleInputChange('sound5', value)}
      />

      <Button title="Next" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  prompt: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  }
});