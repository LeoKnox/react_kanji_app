import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ListView from "./src/screens/components/list_view";

export default function App() {
  const aboutapp = "learn and use kanji!"
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Kanji Challenge App</Text>
      <Text style={styles.newText}>{aboutapp}</Text>
      <ListView />
    </SafeAreaView>
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
