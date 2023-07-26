import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  children: string;
  color: string;
  colorText: string;
  size: number;
  double?: boolean;
}

function CalculatorButton(props: Props) {
  const { children, color, colorText, size, double, onPress } = props;
  const buttonStyles = [
    styles.container,
    {
      width: double ? (size + 5) * 2 : size,
      height: size,
      borderRadius: size / 2,
      margin: 5,
      backgroundColor: color,
    },
  ];
  const textStyle = [styles.text, { color: colorText }];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default CalculatorButton;
