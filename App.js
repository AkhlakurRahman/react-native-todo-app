import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const statusbar =
    Platform.OS === 'android' ? (
      <View style={styles.statusbar}></View>
    ) : (
      <View></View>
    );
  return (
    <View style={styles.container}>
      {statusbar}
      <Header title='Todo App' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusbar: {
    backgroundColor: '#5580A6',
    height: 20
  }
});
