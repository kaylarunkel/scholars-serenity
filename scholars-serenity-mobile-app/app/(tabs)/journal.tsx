import React from 'react';
import { View, Text,TextInput } from 'react-native';

const JournalInput = () => {
    const [value, onChangeText] = React.useState('Start Typing here');
    return (
        <View
            style={{
                backgroundColor: value,
                borderBottomColor: 'transparent',
                borderBottomWidth: 1,
              }}>
              <TextInput
                editable={true}
                multiline={true}
                numberOfLines={Infinity}
                onChangeText={text => onChangeText(text)}
                value={value}
                style={{padding: 10}}
              />
            </View>
    );
};

export default JournalInput;
