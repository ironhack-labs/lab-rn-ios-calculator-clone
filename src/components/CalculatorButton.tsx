import {
  TouchableOpacity,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import styles from '../theme/CalculatorButton.styles';

export type CalculatorButtonT = {
  text: string;
  size?: string;
  onPress: () => void;
  color?: StyleProp<ViewStyle>;
  colorText?: StyleProp<TextStyle>;
};

const CalculatorButton = (props: CalculatorButtonT) => {
  const { text, color, colorText, size, onPress } = props;
  const buttonStyles: StyleProp<ViewStyle> = color
    ? [styles.btn, color]
    : [styles.btn];

  if (colorText) buttonStyles.push(colorText);
  if (size) buttonStyles.push(styles.btnDouble);

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
