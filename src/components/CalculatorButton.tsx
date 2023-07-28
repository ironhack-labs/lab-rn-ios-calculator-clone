import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import styles, { screen } from '../theme/CalculatorButton.styles';

interface Props {
  color: string;
  colorText: string;
  size: number;
  sizeBtn?: string;
  onPress: () => void;
  children: React.ReactNode;
}

const CalculatorButton = ({
  color,
  colorText,
  size,
  sizeBtn,
  onPress,
  children,
}: Props) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: color,
    minWidth: 70,
  };

  const textStyle: TextStyle = {
    color: colorText,
    fontSize: size,
  };

  if (sizeBtn === 'double') {
    buttonStyle.minWidth = (screen.width / 4) * 2 - 38;
    buttonStyle.flex = 0;
    buttonStyle.justifyContent = 'flex-start';
    buttonStyle.paddingRight = "25%";
  }

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, styles.button]}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
