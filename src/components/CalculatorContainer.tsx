import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

type CalculatorContainerProps = PropsWithChildren<{}>;

import styles from '../theme/CalculatorContainer.styles';

const CalculatorContainer = ({children}: CalculatorContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default CalculatorContainer;
