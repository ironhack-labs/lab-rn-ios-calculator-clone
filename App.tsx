import React from 'react';
import CalculatorScreen from './src/screens/CalculatorScreen';
import { SafeAreaView, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <CalculatorScreen />
    </SafeAreaView>
  )
};

export default App;
