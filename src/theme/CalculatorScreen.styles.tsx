import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#202A25',
  },
  resultOperations: {
    fontSize: 60,
    color: '#FEFEFE',
    textAlign: 'right',
    marginBottom: 15
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  mainContainer: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'flex-end'
  },
  resultHistory: {
    fontSize: 30,
    color: 'rgba(255, 255, 255, 0.5)',
    textAlign: 'right'
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  textContentButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 10,
    fontWeight: 'bold'
  }
})