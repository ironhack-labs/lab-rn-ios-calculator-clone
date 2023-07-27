import React from 'react';
import {View} from 'react-native';
import {styles} from '../theme/CalculatorContainer.styles';

const CalculatorContainer = ({children, style}) => {
  return <View style={style}>{children}</View>;
};

export default CalculatorContainer;
