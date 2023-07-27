import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import { CalculatorContainerStyles } from '../theme';

export const CalculatorContainer = ({children}: PropsWithChildren) => {
  return <View style={CalculatorContainerStyles.container}>{children}</View>;
};
