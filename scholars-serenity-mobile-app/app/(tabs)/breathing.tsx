import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

export default function Breathing() {

  const [stage, setStage] = useState('Inhale');
  const [timer, setTimer] = useState(4);
  const [breathing, setBreathing] = useState(true);

  const start = () => {
    setStage('Inhale');
    setTimer(4);
    setBreathing(true);
  }

  useEffect(() => {
    if (breathing && timer > 0) {
      const itvl = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(itvl);
    } else if (breathing && timer == 0) {
      switch (stage) {
        case 'Inhale':
          setStage('Hold In');
          setTimer(4);
          break;
        case 'Hold In':
          setStage('Exhale');
          setTimer(4);
          break;
        case 'Exhale':
          setStage('Hold Out');
          setTimer(4);
          break;
        case 'Hold Out':
          setStage('Inhale');
          setTimer(4);
          break;
        default:
          setBreathing(false);
          break;
      }
    }
  }, [timer, breathing, stage]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Breathing</Text>
      <Text style={styles.stage}>{stage}</Text>
      <Text style={styles.timer}>{timer} seconds</Text>
      <Pressable style={styles.button} onPress={start}>
        <Text style={styles.text}>Restart</Text>
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfce8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#036da4',
    paddingBottom: 15,
  },
  stage: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5ea3c0',
    marginBottom: 10,
  },
  timer: {
    fontSize: 60,
    color: '#b9d9dc',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#dbebe2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    //marginTop: 10,
    //marginBottom: 20,
    alignItems: 'center',
    color: '#036da4',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#b9d9dc'
  },
  text: {
    color: '#036da4',
    fontWeight: 'bold',
  },
});