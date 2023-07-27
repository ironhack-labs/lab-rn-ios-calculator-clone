import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/CalculatorScreen.styles';
import CalculatorContainer from '../components/CalculatorContainer';

const CalculatorScreen = ({number}) => {
  return (
    <View>
      <Text>{number}</Text>
      <CalculatorContainer>
        <Text>CalculatorContainer</Text>
      </CalculatorContainer>
    </View>
  );
};

export default CalculatorScreen;
