import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable, Animated, Easing } from 'react-native';

export default function Breathing() {

  const [stage, setStage] = useState('Inhale');
  const [timer, setTimer] = useState(4);
  const [breathing, setBreathing] = useState(false);
  const [dotPos] = useState(new Animated.Value(0));

  const start = () => {
    setStage('Inhale');
    setTimer(4);
    setBreathing(true);
    animateDot();
  }

  const animateDot = () => {
    dotPos.setValue(0);
    Animated.loop(
      Animated.timing(dotPos, {
        toValue: 1,
        duration: 16000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start()
  };

  const next = () => {
    switch (stage) {
      case 'Inhale':
        setStage('Hold In');
        //setTimer(4);
        break;
      case 'Hold In':
        setStage('Exhale');
        //setTimer(4);
        break;
      case 'Exhale':
        setStage('Hold Out');
        //setTimer(4);
        break;
      case 'Hold Out':
        animateDot();
        setStage('Inhale');
        //setTimer(4);
        break;
      //default:
      //  setStage('Inhale');
      //  break;
    }
    setTimer(4);
    //animateDot();
  }

  useEffect(() => {
    if (breathing && timer > 0) {
      const itvl = setInterval(() => setTimer((prevTimer) => prevTimer - 1), 1000);
      return () => clearInterval(itvl);
    } else if (breathing && timer == 0) {
      next();
    }
  }, [timer, breathing, stage]);

  const translateX = dotPos.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [-15, 285, 285, -15, -15],
  });

  const translateY = dotPos.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [-15, -15, 285, 285, -15],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Breathing</Text>
      <Text style={styles.stage}>{stage}</Text>
      <Text style={styles.timer}>{timer} seconds</Text>
      <View style={styles.box}>
        <Animated.View style={[styles.dot, { transform: [{ translateX }, { translateY }] }]} />
      </View>
      <Pressable style={styles.button} onPress={start}>
        <Text style={styles.text}>Start</Text>
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
  box: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: '#036da4',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#5ea3c0',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});