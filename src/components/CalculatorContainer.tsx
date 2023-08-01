import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import styles from '../theme/CalculatorScreen.styles';

interface Props {
  children: ReactNode;
}

const CalculatorContainer: React.FC<Props> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default CalculatorContainer;
