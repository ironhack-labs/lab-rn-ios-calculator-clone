import { ReactNode } from 'react';
import { View } from 'react-native';
import styles from '../theme/CalculatorContainer.styles';

type PropsT = {
  children: ReactNode;
};

const CalculatorContainer = (props: PropsT): JSX.Element => {
  return <View style={styles.container}>{props.children}</View>;
};

export default CalculatorContainer;
