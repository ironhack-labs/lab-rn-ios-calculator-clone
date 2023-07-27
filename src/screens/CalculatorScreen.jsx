import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/CalculatorScreen.styles';

const CalculatorScreen = ({number}) => {
  return (
    <View>
      <Text>{number}</Text>
    </View>
  );
};

export default CalculatorScreen;
