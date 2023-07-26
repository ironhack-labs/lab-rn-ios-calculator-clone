import {TouchableOpacity, Text} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {CalculatorContext} from '../calculator-provider';

import {calculatorButtonStyles} from './calculator-button.styles';

type CalculatorButtonSymbol =
  | '.'
  | '='
  | '+'
  | 'x'
  | '/'
  | '-'
  | 'AC'
  | 'del'
  | '+/-';

type CalculatorButtonProps = {
  value: number | CalculatorButtonSymbol;
  rowspan?: number;
};

const buttonModeMapper = {
  digit: calculatorButtonStyles.digit,
  operation: calculatorButtonStyles.operation,
  other: calculatorButtonStyles.other,
};

const getButtonMode = (value: string) => {
  if (/^\d+|\.$/.test(value)) {
    return 'digit';
  }
  if (/^[-+x=/]$/.test(value)) {
    return 'operation';
  }

  return 'other';
};

// TODO: refactor button and splice for operation buttons
export const CalculatorButton = ({value, rowspan}: CalculatorButtonProps) => {
  const {pressDigit, operation} = useContext(CalculatorContext);

  const buttonMode = getButtonMode(value.toString());

  const handleOnPress = useCallback(() => {
    if (buttonMode === 'digit') {
      return pressDigit(`${value}`);
    }
    if (buttonMode === 'operation') {
      return operation(`${value}`);
    }
  }, [pressDigit, value, buttonMode, operation]);

  return (
    <TouchableOpacity
      style={[
        calculatorButtonStyles.button,
        buttonModeMapper[buttonMode],
        rowspan && {
          width: calculatorButtonStyles.button.width * rowspan,
        },
      ]}
      onPress={handleOnPress}
      activeOpacity={0.5}>
      <Text
        style={[
          calculatorButtonStyles.buttonText,
          buttonModeMapper[buttonMode],
        ]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};
