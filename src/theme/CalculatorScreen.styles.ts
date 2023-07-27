import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width - 80;

export const styles = StyleSheet.create({
  containerCalculator: {
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  containerButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: WIDTH / 4,
    height: WIDTH / 4,
    borderRadius: WIDTH / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonLarge: {
    alignItems: 'flex-start',
    paddingLeft: (WIDTH / 8) - 10,
    width: WIDTH / 2 + 20,
    height: WIDTH / 4,
  },
  result: {
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 90,
  },
  currentValue: {
    color: 'white',
  },
});
