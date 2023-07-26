import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

type CalculatorValueProps = {
  prevResult: string;
  value: string;
};

const CalculatorValue = ({prevResult, value}: CalculatorValueProps) => {
  return (
    <View style={styles.container}>
      {!!prevResult && <Text style={styles.prevResult}>{prevResult}</Text>}
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default CalculatorValue;

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height / 3,
    justifyContent: 'flex-end',
  },
  prevResult: {
    fontSize: 25,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
  },
  value: {
    fontSize: 45,
    color: 'white',
    textAlign: 'right',
  },
});
