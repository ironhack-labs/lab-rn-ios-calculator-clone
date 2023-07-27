import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {CalculatorButtonStyles} from '../theme';

const {width} = Dimensions.get('window');
const buttonWidth = width / 4;

type CalculatorButtonProps = {
  children: string;
  color: string;
  colorText: string;
  size?: 's' | 'l';
  onPress: () => void;
  isLarge?: boolean;
};

export const CalculatorButton = ({
  children,
  color,
  colorText,
  onPress,
  isLarge,
}: CalculatorButtonProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: isLarge ? buttonWidth * 2 : buttonWidth,
            height: buttonWidth,
            justifyContent: 'center',
            padding: 4,
          }}>
          <View
            style={[
              CalculatorButtonStyles.buttonContainer,
              {backgroundColor: color},
            ]}>
            <Text
              style={[
                CalculatorButtonStyles.label,
                {
                  color: colorText,
                  margin: 24,
                  textAlign: isLarge ? 'left' : 'center',
                },
              ]}>
              {children}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
