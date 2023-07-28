import { Dimensions, StyleSheet } from 'react-native';

export const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: Math.floor(buttonWidth - 18),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
});

export default styles;
