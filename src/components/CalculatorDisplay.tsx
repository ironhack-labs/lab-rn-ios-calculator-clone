import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {calculatorStyles} from '../theme/CalculatorScreen.styles';

type CalculatorDisplayProps = {
  value: string;
  prevValue?: string;
};

const CalculatorDisplay: FC<CalculatorDisplayProps> = ({value, prevValue}) => {
  return (
    <View style={calculatorStyles.displayValuesContainer}>
      <Text
        style={calculatorStyles.displayPrevValueText}
        adjustsFontSizeToFit
        numberOfLines={1}>
        {prevValue}
      </Text>
      <Text
        style={calculatorStyles.displayValueText}
        adjustsFontSizeToFit
        numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

export default CalculatorDisplay;
