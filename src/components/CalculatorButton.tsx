import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

import {
  buttonHeight,
  commonGap,
  globalStyles,
  lightGray,
  orange,
} from '../theme/global.styles';

type TypeColorButton = 'dark-gray' | 'gray' | 'orange';

type TypeColorTextButton = 'light' | 'dark';

type TypeSizeButton = 'normal' | 'large';

type CalculatorButtonProps = {
  children: string;
  onPress: () => void;
  colorText?: TypeColorTextButton;
  color?: TypeColorButton;
  size?: TypeSizeButton;
};

const CalculatorButton = ({
  children,
  onPress,
  colorText = 'light',
  color = 'dark-gray',
  size = 'normal',
}: CalculatorButtonProps) => {
  const getButtonStyles = (): ViewStyle => {
    switch (color) {
      case 'gray':
        return {
          ...(size === 'normal' ? styles.container : styles.largeContainer),
          backgroundColor: lightGray,
        };
      case 'orange':
        return {
          ...(size === 'normal' ? styles.container : styles.largeContainer),
          backgroundColor: orange,
        };
      default:
        return {
          ...(size === 'normal' ? styles.container : styles.largeContainer),
        };
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={getButtonStyles()}>
        <Text
          style={{
            ...styles.text,
            ...(colorText === 'light' ? {color: 'white'} : {color: 'black'}),
          }}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalculatorButton;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.button,
    width: buttonHeight,
  },
  largeContainer: {
    ...globalStyles.button,
    width: buttonHeight * 2 + commonGap,
    alignItems: 'flex-start',
  },
  text: {
    ...globalStyles.buttonText,
  },
});
