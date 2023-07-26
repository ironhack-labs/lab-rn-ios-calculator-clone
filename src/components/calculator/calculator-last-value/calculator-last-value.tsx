import {Text} from 'react-native';
import React, {useContext} from 'react';
import {CalculatorContext} from '../calculator-provider';

import {calculatorLastValueStyles} from './calculator-last-value.styles';

export const CalculatorLastValue = () => {
  const {lastValue} = useContext(CalculatorContext);

  return <Text style={calculatorLastValueStyles.text}>{lastValue}</Text>;
};
