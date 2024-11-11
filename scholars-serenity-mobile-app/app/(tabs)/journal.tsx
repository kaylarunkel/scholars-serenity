import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, Pressable, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

interface JournalEntry {
  title: string;
  entry: string;
}

const JournalInput = () => {
    const [inputValue, setInputValue] = useState<string>(''); // State for the current input
    const [savedEntries, setSavedEntries] = useState<JournalEntry[]>([]); // State for all saved entries
    const [titleValue, setTitleValue] = useState<string>('');
    const [currentPrompt, setCurrentPrompt] = useState(''); // State for the current prompt
    
    const prompts = [
        'Write about your favorite thing to do on a day off. Why is this your favorite?',
        'Describe someone in your life who you most appreciate.',
        'Write about something that made you smile recently.',
        'What is one kind or supportive thing you can say to yourself?',
        "How did I win today?",
        "What do I really need in this moment?",
        "How am I really feeling today?",
        "What is making me feel anxious today?",
        "What am I grateful for today?"
    ];

    // Generate random prompt from list
    const generatePrompt = () => {
        const randomIndex = Math.floor(Math.random() * prompts.length);
        setCurrentPrompt(prompts[randomIndex]);
    };

    const handleSave = () => {
        if (inputValue.trim() && titleValue.trim()) {
            setSavedEntries([...savedEntries, { title: titleValue, entry: inputValue }]);
            setInputValue('');
            setTitleValue('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.promptText}>{currentPrompt}</Text>
            <Pressable style={styles.button} onPress={generatePrompt}>
                <Text><Ionicons name="refresh" color='white'></Ionicons></Text>
            </Pressable>

            <TextInput
                style={styles.title}
                placeholder='Title'
                placeholderTextColor='gray'
                value={titleValue}
                onChangeText={setTitleValue}
            />
            <TextInput
                style={styles.input}
                placeholder='Start typing here...'
                placeholderTextColor='gray'
                multiline={true}
                value={inputValue}
                onChangeText={setInputValue}
            />
            <Pressable style={styles.button} onPress={handleSave}>
                <Text style={styles.text}>Save</Text>
            </Pressable>

            <ScrollView style={styles.entriesContainer}>
                {savedEntries.map((entry, index) => (
                    <View key={index} style={styles.savedBox}>
                        <Text style={styles.savedText}><strong>{entry.title}</strong></Text>
                        <Text>{entry.entry}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fdfce8'
    },
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
        color: 'white',
    },
    promptText: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        color: '#036da4',
        fontWeight: 700,
    },
    entriesContainer: {
        width: '90%',
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
