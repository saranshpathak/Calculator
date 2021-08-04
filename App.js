import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Calculator from './components/Calculator';

// or any pure javascript modules available in npm


export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white'
 
  }
});
