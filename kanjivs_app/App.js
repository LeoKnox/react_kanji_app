import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const aboutapp = "learn and use kanji!"
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Kanji Challenge App</Text>
      <Text style={styles.newText}>{aboutapp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: "navy",
    fontSize: 30,
    fontStyle: "italic",
  },
  newText:{
    color: "red",
  }
});
