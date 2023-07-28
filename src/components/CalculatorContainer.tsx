import {View} from 'react-native';

import {styles} from '../theme/CalculatorScreen.styles';

interface Props {
  children: React.ReactNode;
}

export const CalculatorContainer = ({children}: Props) => {
  return <View style={styles.buttonContainer}>{children}</View>;
};
