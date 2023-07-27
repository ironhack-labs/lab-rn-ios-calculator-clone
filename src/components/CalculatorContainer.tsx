import {View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {calculatorStyles} from '../theme/CalculatorScreen.styles';

const CalculatorContainer: FC<PropsWithChildren> = ({children}) => {
  return <View style={calculatorStyles.calculatorContainer}>{children}</View>;
};

export default CalculatorContainer;
