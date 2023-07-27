import React, {ReactNode} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

type TypeButton = {
  children: ReactNode;
  color: string;
  colorText: string;
  size: number;
  onPress: Function;
  style: object;
};

const CalculatorButton = ({
  children,
  color,
  colorText,
  size,
  onPress,
  style,
}: TypeButton) => {
  return (
    <TouchableOpacity onPress={() => onPress(children)} activeOpacity={0.7}>
      <View style={[style, color ? {backgroundColor: color} : {}]}>
        <Text style={{color: colorText, fontSize: size}}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
