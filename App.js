import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Usar 100% da tela
    backgroundColor: '#cfcfcf',
    paddingTop: 80,
  },
});
