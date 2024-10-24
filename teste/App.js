import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [message, setMessage] = useState("Hello, World!");

  const changeMessage = () => {
    setMessage("Helloooooo!!");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{message}</Text>
      <TouchableOpacity style={styles.button} onPress={changeMessage}>
        <Text style={styles.buttonText}>Hello?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#61dafb',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#61dafb',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: '#282c34',
    fontWeight: 'bold',
  },
});
