/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {buttonStyles} from '../theme/Button/Button.styles';

type Color = 'rgb(255, 169, 12)' | 'rgb(165, 165, 165)' | 'rgb(51, 51, 51)';

interface Props {
  text: string;
  color: Color;
  width?: boolean;
  action: (numberText: string) => void;
}

export const ButtonCalculator = ({
  text,
  color,
  width = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={[
          buttonStyles.button,
          {backgroundColor: color},
          {width: width === true ? 180 : 80},
        ]}>
        <Text
          style={[
            buttonStyles.textButton,
            {color: color === 'rgb(165, 165, 165)' ? 'black' : 'white'},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
