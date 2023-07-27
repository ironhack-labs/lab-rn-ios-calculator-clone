import {ViewStyle, TextStyle} from 'react-native';

const CalculatorScreenStyles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  } as ViewStyle,
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  } as ViewStyle,
  text: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'right',
    paddingStart: 200,
  } as TextStyle,
};

export default CalculatorScreenStyles;
