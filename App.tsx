import React from 'react';
import { CalculatorScreen } from './src/screens';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/CalculatorScreen.styles';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar 
        backgroundColor="#202A25"
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  )
};

export default App;
