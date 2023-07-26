import {View} from 'react-native';
import React from 'react';
import {Calculator} from '../components';

import {calculatorScreenStyles} from './calculator-screen.styles';

export const CalculatorScreen = () => {
  return (
    <View style={calculatorScreenStyles.container}>
      <Calculator>
        <View style={calculatorScreenStyles.panel}>
          <Calculator.LastValue />
          <Calculator.Preview />
        </View>
        <View>
          <View style={calculatorScreenStyles.row}>
            <Calculator.Button value="AC" />
            <Calculator.Button value="+/-" />
            <Calculator.Button value="del" />
            <Calculator.Button value="/" />
          </View>
          <View style={calculatorScreenStyles.row}>
            <Calculator.Button value={7} />
            <Calculator.Button value={8} />
            <Calculator.Button value={9} />
            <Calculator.Button value="x" />
          </View>
          <View style={calculatorScreenStyles.row}>
            <Calculator.Button value={4} />
            <Calculator.Button value={5} />
            <Calculator.Button value={6} />
            <Calculator.Button value="-" />
          </View>
          <View style={calculatorScreenStyles.row}>
            <Calculator.Button value={1} />
            <Calculator.Button value={2} />
            <Calculator.Button value={3} />
            <Calculator.Button value="+" />
          </View>
          <View style={calculatorScreenStyles.row}>
            <Calculator.Button value={0} rowspan={2} />
            <Calculator.Button value="." />
            <Calculator.Button value="=" />
          </View>
        </View>
      </Calculator>
    </View>
  );
};
