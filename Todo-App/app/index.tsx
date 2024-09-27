import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormScreen from './FormScreen';

export default function Index() {
  return (
    <View style={styles.container}>
      <FormScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', // Same dark theme background as FormScreen
  },
});
