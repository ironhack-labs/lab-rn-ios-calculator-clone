import {Text, TouchableOpacity} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {calculatorStyles} from '../theme/CalculatorScreen.styles';

type CalculatorButtonProps = {
  size?: 'small' | 'large';
  color?: string;
  colorText?: string;
  onPress?: (value: string) => void;
} & PropsWithChildren;

const CalculatorButton: FC<CalculatorButtonProps> = ({
  children,
  size = 'small',
  color = '#2D2D2D',
  colorText = 'white',
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress(children as string)}
      activeOpacity={0.7}
      style={[
        calculatorStyles.calculatorButton,
        {backgroundColor: color, width: size === 'large' ? 180 : 80},
      ]}>
      <Text style={[calculatorStyles.calculatorButtonText, {color: colorText}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
