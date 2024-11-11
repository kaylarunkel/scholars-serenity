import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function Info() {

  const resources = [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "1-800-273-8255",
      link: "https://suicidepreventionlifeline.org/"
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      link: "https://www.crisistextline.org/"
    },
    {
      name: "SAMHSA’s National Helpline",
      phone: "1-800-662-HELP (4357)",
      link: "https://www.samhsa.gov/find-help/national-helpline"
    },
    {
      name: "Anxiety and Depression Association of America",
      link: "https://adaa.org/"
    },
    {
      name: "NAMI Helpline",
      phone: "1-800-950-NAMI (6264)",
      link: "https://www.nami.org/help"
    },
  ];

  const clickPhoneNumber = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const clickLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Mental Health Resources for Anxiety</Text>
      {resources.map((resource, index) => (
        <View key={index} style={styles.info}>
          <Text style={styles.name}>{resource.name}</Text>
          {resource.phone && (
            <TouchableOpacity onPress={() => clickPhoneNumber(resource.phone)}>
              <Text style={styles.phone}>{resource.phone}</Text>
            </TouchableOpacity>
          )}
          {resource.link && (
            <TouchableOpacity onPress={() => clickLink(resource.link)}>
              <Text style={styles.link}>Visit Website</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fdfce8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#036da4',
    marginBottom: 20,
  },
  info: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#dbebe2',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5ea3c0',
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    color: '#036da4',
    marginBottom: 5,
  },
  link: {
    fontSize: 16,
    color: '#5ea3c0'
  }


});