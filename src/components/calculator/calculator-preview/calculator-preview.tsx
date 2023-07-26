import {Text} from 'react-native';
import React, {useContext} from 'react';
import {CalculatorContext} from '../calculator-provider';
import {calculatorPreviewStyles} from './calculator-preview.styles';

export const CalculatorPreview = () => {
  const {currentValue, total} = useContext(CalculatorContext);

  return (
    <Text style={calculatorPreviewStyles.text}>
      {!currentValue ? total : currentValue}
    </Text>
  );
};
