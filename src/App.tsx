import React from 'react';
import {CalculatorScreen} from './screens';
import {SafeAreaView, StatusBar} from 'react-native';
import {appStyles} from './theme/App.styles';

const App = () => {
  return (
    <SafeAreaView style={appStyles.appContainer}>
      <StatusBar barStyle={'light-content'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
