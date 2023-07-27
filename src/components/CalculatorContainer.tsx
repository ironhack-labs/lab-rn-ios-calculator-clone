import React, {ReactNode} from 'react';
import {View} from 'react-native';

type TypeButtons = {
  children: ReactNode;
  style: object;
};

const CalculatorContainer = ({children, style}: TypeButtons) => {
  return <View style={style}>{children}</View>;
};

export default CalculatorContainer;
