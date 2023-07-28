import { View } from 'react-native';
import styles from '../theme/CalculatorContainer.styles';

interface CalculatorContainerProps {
  children: React.ReactNode;
}

const CalculatorContainer = ({children}: CalculatorContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default CalculatorContainer;
