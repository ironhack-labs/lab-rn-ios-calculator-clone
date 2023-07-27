import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const CalculatorButton = ({
  children,
  color,
  colorText,
  size,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(children)} activeOpacity={0.7}>
      <View style={[style, color && {backgroundColor: color}]}>
        <Text style={{color: colorText, fontSize: size}}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
