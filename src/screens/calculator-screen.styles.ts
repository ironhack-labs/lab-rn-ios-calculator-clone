import {StyleSheet} from 'react-native';
import {COLORS} from '../themes';

export const calculatorScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: COLORS.black,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  panel: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingTop: 10,
  },
});
