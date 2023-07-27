import {View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {calculatorStyles} from '../theme/CalculatorScreen.styles';

const CalculatorButtonsRow: FC<PropsWithChildren> = ({children}) => {
  return (
    <View style={calculatorStyles.calculatorButtonsRowContainer}>
      {children}
    </View>
  );
};

export default CalculatorButtonsRow;
