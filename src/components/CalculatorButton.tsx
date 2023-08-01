import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native';

interface Props {
  color: string;
  colorText: string;
  size: number;
  onPress: (text: string) => void;
  children: React.ReactNode;
}

const CalculatorButton: React.FC<Props> = ({
  color,
  colorText,
  size,
  onPress,
  children,
}) => {
  const buttonSize = 60;
  const buttonStyles: ViewStyle = {
    width: size <= buttonSize ? buttonSize : 80,
    height: size <= buttonSize ? buttonSize : 80,
    borderRadius: size <= buttonSize ? buttonSize / 2 : 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color,
    backgroundColor: color,
  };

  const buttonTextStyles = {
    fontSize: size <= buttonSize ? 24 : 40,
    fontWeight: 'regular',
    color: colorText,
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles]}
      onPress={() => onPress(children as string)}>
      <Text style={[styles.buttonText, buttonTextStyles]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});

export default CalculatorButton;
