import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const JournalInput = () => {
    return (
        <SafeAreaView
            style={{
              paddingTop: 20,
              flex: 1, 
              borderBottomColor: 'transparent',
              borderBottomWidth: 1,
              alignItems: 'center'
              }}>
              <TextInput
              style={style.input}
              keyboardType='default'
              placeholder='Start typing here...'
              placeholderTextColor='gray'
              multiline={true}
              />
              <Pressable style={style.button}>
                <Text style={style.text}>Save</Text>
              </Pressable>
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
  elevation: 3
},
text: {
  fontSize: 16,
  lineHeight: 21,
  letterSpacing: 0.25,
  color: 'white',
}
});

export default JournalInput;

