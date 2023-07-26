import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import CalculatorScreen from './src/components/screens/CalculatorScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CalculatorScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
