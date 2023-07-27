import {StyleSheet} from 'react-native';

export const calculatorStyles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  displayValuesContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  displayValueText: {
    fontSize: 60,
    color: 'white',
  },
  displayPrevValueText: {
    fontSize: 40,
    color: '#FFFFFF50',
  },

  calculatorButton: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  calculatorButtonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
  },
  calculatorButtonsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
