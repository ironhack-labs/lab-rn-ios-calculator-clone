import { Dimensions, StyleSheet } from 'react-native';

const screen = Dimensions.get('window');

// Most rows have 4 buttons with a margin on either side
const buttonWidth = screen.width / 4 - 5 * 2;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#333333',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 100,
    height: buttonWidth,
  },
  btnText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
  },
  btnDouble: {
    alignItems: 'flex-start',
    flex: 0,
    width: buttonWidth * 2 + 5 * 2,
    paddingLeft: buttonWidth / 2 - 5 * 1.5,
  },
});

export default styles;
