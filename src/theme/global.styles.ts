import {StyleSheet} from 'react-native';

export const darkGray = '#2c2c2c';
export const lightGray = '#9b9b9b';
export const orange = '#fc921f';

export const buttonHeight = 70;
export const commonGap = 20;

export const globalStyles = StyleSheet.create({
  button: {
    height: buttonHeight,
    backgroundColor: darkGray,
    borderRadius: buttonHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonText: {
    fontSize: 20,
  },
});
