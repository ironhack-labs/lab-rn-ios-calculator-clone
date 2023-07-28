import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../theme/CalculatorScreen.styles';

interface Props {
  children: string;
  color: string;
  colorText: string;
  size: number;
  onPress: () => void;
}

export const CalculatorButton = ({
  children,
  color,
  colorText,
  size,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: colorText, fontSize: size}]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
