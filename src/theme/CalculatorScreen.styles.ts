import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  resultContainer: {
    flex: 3,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  previousText: {
    color: 'white',
    fontSize: 18,
  },
  resultText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  buttonContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    paddingBottom: 16,
    borderRadius: 20,
  },
  //Button Styles
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 128,
    margin: 4,
    paddingVertical: 16,
    backgroundColor: '#EFEFEF',
  },
  buttonText: {
    fontSize: 28,
    color: '#333',
  },
});
