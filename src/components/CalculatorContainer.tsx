import React from 'react';
import {View} from 'react-native';

const CalculatorContainer = ({children, style}) => {
  return <View style={style}>{children}</View>;
};

export default CalculatorContainer;
