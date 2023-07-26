import { StyleSheet } from 'react-native';

const colors = {
  lightGray: 'rgb(165, 165, 165)',
  darkGray: 'rgb(51, 51, 51)',
  orange: 'rgb(255, 169, 12)',
  white: '#fff',
  dark: '#000',
};

const styles = StyleSheet.create({
  constainer: {},
  screenContainer: {
    backgroundColor: colors.dark,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    height: '25%',
  },
  firstNumber: {
    fontSize: 20,
    color: colors.white,
  },
  currentValue: {
    fontSize: 60,
    color: colors.white,
  },
  buttonsContainer: {
    backgroundColor: colors.dark,
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export { styles, colors };
