import {StyleSheet} from 'react-native';
import {COLORS} from '../../../themes';

export const calculatorButtonStyles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
  digit: {
    backgroundColor: COLORS.grayStrong,
    color: COLORS.white,
  },
  operation: {
    backgroundColor: COLORS.orange,
    color: COLORS.white,
  },
  other: {
    backgroundColor: COLORS.grayLight,
    color: COLORS.black,
  },
});
