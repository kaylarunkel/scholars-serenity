import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';


export default function Activities() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Your mind deserves a break!</Text>
      <Link href="/grounding" style={styles.button}>
        <Text style={styles.buttonText}>5-4-3-2-1 Grounding</Text></Link>
      <Link href="/breathing" style={styles.button}>
        <Text style={styles.buttonText}>Box Breathing</Text></Link>
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

/*const [stage, setStage] = useState(1);

const [done, setDone] = useState(false);

const navigation = useNavigation();

type Sense = 'see' | 'touch' | 'hear' | 'smell' | 'taste';

const [activity, setActivity] = useState({
  see: ['', '', '', '', ''],
  touch: ['', '', '', ''],
  hear: ['', '', ''],
  smell: ['', ''],
  taste: ['']
});

const handleInputChange = (index: number, value: string, sense: Sense) => {
  setActivity(prevActivity => ({
    ...prevActivity,
    [sense]: prevActivity[sense].map((item, idx) => (idx === index ? value : item))
  }));
};

const handleNext = () => {
  // Handle what you want to do with the sounds here (e.g., save or display)
  if (stage < 5) {
    setStage(stage + 1);
  } else {
    setDone(true);
    console.log('5-4-3-2-1 Grounding Responses:', activity);
  }
};

const restart = () => {
  setStage(1);
  setDone(false);
  setActivity({
    see: ['', '', '', '', ''],
    touch: ['', '', '', ''],
    hear: ['', '', ''],
    smell: ['', ''],
    taste: ['']
  });
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>5-4-3-2-1 Grounding</Text>

    {done ? (
      <>
        <Text style={styles.motivation}>We are so proud of you for completing the 5-4-3-2-1 Grounding activity. Take a moment to feel proud of yourself, too!</Text>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Pressable style={styles.button} onPress={restart}>
            <Text style={styles.text}>Restart</Text>
          </Pressable>
        </View>
        <Link href="/guide" style={styles.button}>
          Return to Guide
        </Link>
      </>
    ) : (<>

      {stage == 1 && (<>
        <Text style={styles.prompt}>Find 5 things you can see and write them down:</Text>
        {activity.see.map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`See ${index + 1}`}
            value={activity.see[index]}
            onChangeText={value => handleInputChange(index, value, 'see')}
          />
        ))}
      </>
      )}

      {stage === 2 && (
        <>
          <Text style={styles.prompt}>Find 4 things you can touch and write them down:</Text>
          {activity.touch.map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder={`Touch ${index + 1}`}
              value={activity.touch[index]}
              onChangeText={value => handleInputChange(index, value, 'touch')}
            />
          ))}
        </>
      )}

      {stage === 3 && (
        <>
          <Text style={styles.prompt}>Find 3 things you can hear and write them down:</Text>
          {activity.hear.map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder={`Hear ${index + 1}`}
              value={activity.hear[index]}
              onChangeText={value => handleInputChange(index, value, 'hear')}
            />
          ))}
        </>
      )}

      {stage === 4 && (
        <>
          <Text style={styles.prompt}>Find 2 things you can smell and write them down:</Text>
          {activity.smell.map((_, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder={`Smell ${index + 1}`}
              value={activity.smell[index]}
              onChangeText={value => handleInputChange(index, value, 'smell')}
            />
          ))}
        </>
      )}

      {stage === 5 && (
        <>
          <Text style={styles.prompt}>Find 1 thing you can taste and write it down:</Text>
          <TextInput
            style={styles.input}
            placeholder="Taste 1"
            value={activity.taste[0]}
            onChangeText={value => handleInputChange(0, value, 'taste')}
          />
        </>
      )}

      <Button title={stage < 5 ? "Next" : "Done"} onPress={handleNext} color="#5ea3c0" />
    </>)}
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  justifyContent: 'center',
  backgroundColor: '#fdfce9',
  alignItems: 'center',
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#036da4',
  position: 'absolute',
  top: 40,
},
prompt: {
  fontSize: 18,
  marginBottom: 20,
  color: '#5ea3c0',
  position: 'absolute',
  top: 80,
},
input: {
  borderWidth: 1,
  borderColor: '#b9d9dc',
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  width: '60%',
  textAlign: 'left',
  color: '#d3d3d3',
},
motivation: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#036da4',
  textAlign: 'center',
  marginTop: 20,
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
}
}); */
