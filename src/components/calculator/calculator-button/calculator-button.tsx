import {TouchableOpacity, Text} from 'react-native';
import React, {useContext} from 'react';
import {CalculatorContext} from '../calculator-provider';

import {calculatorButtonStyles} from './calculator-button.styles';

type CalculatorButtonSymbol =
  | '.'
  | '='
  | '+'
  | 'x'
  | '÷'
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
  arithmeticOperation: calculatorButtonStyles.operation,
  other: calculatorButtonStyles.other,
};

const getButtonMode = (value: string) => {
  if (/^\d+|\.$/.test(value)) {
    return 'digit';
  }
  if (/^[-+x=÷]$/.test(value)) {
    return 'arithmeticOperation';
  }

  return 'other';
};

export const CalculatorButton = ({value, rowspan}: CalculatorButtonProps) => {
  const {
    pressDigit,
    currentValue,
    activeOperator,
    deleteOperation,
    resetOperation,
    negateOperation,
    equalOperation,
    arithmeticOperation,
  } = useContext(CalculatorContext);

  const buttonMode = getButtonMode(value.toString());
  const buttonActive = value === activeOperator && !currentValue;

  const handleOnPress = () => {
    if (typeof value === 'number' || value === '.') {
      return pressDigit(`${value}`);
    }

    switch (value) {
      case '+':
      case '-':
      case '÷':
      case 'x':
        return arithmeticOperation(value);
      case '+/-':
        return negateOperation();
      case '=':
        return equalOperation();
      case 'AC':
        return resetOperation();
      case 'del':
        return deleteOperation();
      default:
        return;
    }
  };

  return (
    <TouchableOpacity
      style={[
        calculatorButtonStyles.button,
        buttonModeMapper[buttonMode],
        rowspan && {
          width: calculatorButtonStyles.button.width * rowspan,
        },
        buttonActive && calculatorButtonStyles.buttonActive,
      ]}
      onPress={handleOnPress}
      activeOpacity={0.5}>
      <Text
        style={[
          calculatorButtonStyles.buttonText,
          buttonModeMapper[buttonMode],
          buttonActive && calculatorButtonStyles.buttonActive,
        ]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};
