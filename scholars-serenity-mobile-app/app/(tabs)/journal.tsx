import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, Pressable, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface JournalEntry {
  title: string;
  entry: string;
}
const JournalInput = () => {
    const [inputValue, setInputValue] = useState<string>(''); // State for the current input
    const [savedEntries, setSavedEntries] = useState<JournalEntry[]>([]); // State for all saved entries
    const [titleValue, setTitleValue] = useState<string>('');
    const handleSave = () => {
        if (inputValue.trim() && titleValue.trim()) { // Only save if input is not empty
            setSavedEntries([...savedEntries, {title: titleValue, entry: inputValue}]); // Add new entry to the list
            setInputValue(''); // Clears the input field
            setTitleValue(''); // Clears title value
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
              <Text> Write about your favorite thing to do on a day off. Why is it your favorite?</Text>
              <Text> Describe someone in your life who you most appreciate.</Text>
              <Text> Write about something that made you smile recently.</Text>
              <br></br>
              <Pressable style={style.button}> Generate more</Pressable>
              <TextInput
                style={style.title}
                keyboardType='default'
                placeholder='Title'
                placeholderTextColor='gray'
                value={titleValue}
                onChangeText={setTitleValue}
              />
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
                      <Text style={style.savedText}><strong>{entry.title}</strong></Text>
                      <Text>{entry.entry}</Text>
                      </View>
                  ))}
              </ScrollView>
            </SafeAreaView>
    );
}; 

const style = StyleSheet.create({
    title: {
      paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        width: '90%', 
        height: 40, 
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 5,
    },
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
        backgroundColor: '#5ea3c0',
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
        backgroundColor: '#dbebe2',
    },
    savedText: {
        fontSize: 16,
        color: '#333',
    },
});

export default JournalInput;
