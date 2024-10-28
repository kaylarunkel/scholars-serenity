/*import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const JournalInput = () => {
  const [inputValue, setInputValue] = useState(''); //state for input
  const [savedText, setSavedText] = useState(''); //state for saved text

  const handleSave = () => {
    setSavedText(inputValue); //save the input value
    setInputValue(''); //clear the input field
  }
    return (
        <SafeAreaView
            style={{
              paddingTop: 20,
              flex: 1, 
              borderBottomColor: 'transparent',
              borderBottomWidth: 1,
              alignItems: 'center',
              backgroundColor: '#fdfce8'
              }}>
              <TextInput
              style={style.input}
              keyboardType='default'
              placeholder='Start typing here...'
              placeholderTextColor='gray'
              multiline={true}
              value={inputValue}
              onChangeText={setInputValue}
              />
              <Pressable style={style.button} onPress={handleSave}>
                <Text style={style.text}>Save</Text>
              </Pressable>
              {savedText ? ( // Conditionally render the saved text
                  <View style={style.savedBox}>
                      <Text style={style.savedText}>{savedText}</Text>
                  </View>
              ) : null}
            </SafeAreaView>
    );
}; 


const style = StyleSheet.create({
input: {
  paddingTop: 10,
  paddingBottom: 10,
  paddingHorizontal: 10,
  width: 500,
  height: 400,
  borderRadius: 5,
  borderWidth: 1,
},
button: {
  backgroundColor: '#8bbcdf',
  paddingVertical: 10,
  paddingHorizontal: 32,
  borderRadius: 4,
  elevation: 3,
  marginBottom: 10
},
text: {
  fontSize: 16,
  lineHeight: 21,
  letterSpacing: 0.25,
  color: 'white',
},
savedBox: {
  borderWidth: 1,
  borderColor: '#8bbcdf',
  borderRadius: 5,
  padding: 10,
  marginTop: 10,
  backgroundColor: '#e1f5fe',
  width: '90%', // Adjust width to match input
},
savedText: {
  fontSize: 16,
  color: '#333',
},
});

export default JournalInput;
*/
import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, Pressable, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const JournalInput = () => {
    const [inputValue, setInputValue] = useState(''); // State for the current input
    const [savedEntries, setSavedEntries] = useState<string[]>([]); // State for all saved entries

    const handleSave = () => {
        if (inputValue.trim()) { // Only save if input is not empty
            setSavedEntries([...savedEntries, inputValue]); // Add new entry to the list
            setInputValue(''); // Clear the input field
        }
    };

    return (
        <SafeAreaView
            style={{
              paddingTop: 20,
              flex: 1, 
              borderBottomColor: 'transparent',
              borderBottomWidth: 1,
              alignItems: 'center',
              backgroundColor: '#fdfce8'
            }}>
              <TextInput
                  style={style.input}
                  keyboardType='default'
                  placeholder='Start typing here...'
                  placeholderTextColor='gray'
                  multiline={true}
                  value={inputValue}
                  onChangeText={setInputValue}
              />
              <Pressable style={style.button} onPress={handleSave}>
                  <Text style={style.text}>Save</Text>
              </Pressable>

              <ScrollView style={style.entriesContainer}>
                  {savedEntries.map((entry, index) => (
                      <View key={index} style={style.savedBox}>
                          <Text style={style.savedText}>{entry}</Text>
                      </View>
                  ))}
              </ScrollView>
            </SafeAreaView>
    );
}; 

const style = StyleSheet.create({
    input: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        width: '90%', 
        height: 100, 
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#8bbcdf',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
    entriesContainer: {
        width: '90%', // Match width of input
    },
    savedBox: {
        borderWidth: 1,
        borderColor: '#8bbcdf',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#e1f5fe',
    },
    savedText: {
        fontSize: 16,
        color: '#333',
    },
});

export default JournalInput;
