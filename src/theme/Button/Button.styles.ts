import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#333333',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});
