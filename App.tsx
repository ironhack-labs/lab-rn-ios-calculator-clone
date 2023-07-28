import React from 'react';
import CalculatorScreen from './src/screens/CalculatorScreen';
import {Container, NativeBaseProvider} from 'native-base';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{backgroundColor: '#000000'}} />
      <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
      <CalculatorScreen />
    </NativeBaseProvider>
  );
};

export default App;
