import React from 'react';
import {SafeAreaView} from 'react-native';

import ButtonsFile from '../components/ButtonsFile';
import CalculatorButton from '../components/CalculatorButton';
import CalculatorContainer from '../components/CalculatorContainer';
import CalculatorValue from '../components/CalculatorValue';

import styles from '../theme/CalculatorScreen.styles';
import useCalculator, {Operators} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    prevResult,
    value,
    input,
    pop,
    clear,
    switchSign,
    handleOperator,
    calculate,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      <CalculatorValue prevResult={prevResult} value={value} />
      <CalculatorContainer>
        <ButtonsFile>
          <CalculatorButton
            color="gray"
            colorText="dark"
            onPress={clear}
            children="AC"
          />
          <CalculatorButton
            color="gray"
            colorText="dark"
            onPress={switchSign}
            children="+/-"
          />
          <CalculatorButton
            color="gray"
            colorText="dark"
            onPress={pop}
            children="del"
          />
          <CalculatorButton
            color="orange"
            onPress={() => handleOperator(Operators.divide)}
            children="÷"
          />
        </ButtonsFile>

        <ButtonsFile>
          <CalculatorButton onPress={() => input('7')} children="7" />
          <CalculatorButton onPress={() => input('8')} children="8" />
          <CalculatorButton onPress={() => input('9')} children="9" />
          <CalculatorButton
            color="orange"
            onPress={() => handleOperator(Operators.multiply)}
            children="x"
          />
        </ButtonsFile>

        <ButtonsFile>
          <CalculatorButton onPress={() => input('4')} children="4" />
          <CalculatorButton onPress={() => input('5')} children="5" />
          <CalculatorButton onPress={() => input('6')} children="6" />
          <CalculatorButton
            color="orange"
            onPress={() => handleOperator(Operators.subtract)}
            children="-"
          />
        </ButtonsFile>

        <ButtonsFile>
          <CalculatorButton onPress={() => input('1')} children="1" />
          <CalculatorButton onPress={() => input('2')} children="2" />
          <CalculatorButton onPress={() => input('3')} children="3" />
          <CalculatorButton
            color="orange"
            onPress={() => handleOperator(Operators.add)}
            children="+"
          />
        </ButtonsFile>

        <ButtonsFile>
          <CalculatorButton
            onPress={() => input('0')}
            size="large"
            children="0"
          />
          <CalculatorButton onPress={() => input('.')} children="." />
          <CalculatorButton color="orange" onPress={calculate} children="=" />
        </ButtonsFile>
      </CalculatorContainer>
    </SafeAreaView>
  );
};

export default CalculatorScreen;
