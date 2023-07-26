import React, {FC} from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../theme/CalculatorScreen.styles';

interface CalculatorButtonProps {
  children: string;
  color: string;
  size: number;
  colorText: string;
  onPress: (dispatchedNumber: string) => void;
}

export const CalculatorButton:FC<CalculatorButtonProps> = ({children, color, size, colorText, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(children)}>
      <View style={{
        ...styles.button,
        backgroundColor: color,
        width: (children === '0' ? 180 : 80),
      }}>
        <Text style={{
          ...styles.textContentButton,
          color: colorText,
          fontSize: size,
          textAlign: (children === '0' ? 'left' : 'center'),
          paddingLeft: (children === '0' ? 30 : 10)
        }}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
};