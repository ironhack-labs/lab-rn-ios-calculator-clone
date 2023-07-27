import React from 'react';
import {View, Text} from 'react-native';
import CalculatorContainer from '../components/CalculatorContainer';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator from '../hooks/useCalculator';
import styles from '../theme/CalculatorScreen.styles';

interface Props {
  initialNumber?: number;
}

const CalculatorScreen: React.FC<Props> = ({}) => {
  const {
    calculatorNumber,
    handleClear,
    handleAddNumber,
    handleToggleSign,
    handleOperation,
  } = useCalculator();

  return (
    <CalculatorContainer>
      <Text style={styles.text}>{calculatorNumber}</Text>

      <View style={styles.row}>
        <CalculatorButton
          color={'#D4D4D2'}
          colorText="#000"
          size={100}
          onPress={() => handleClear()}>
          AC
        </CalculatorButton>
        <CalculatorButton
          color={'#D4D4D2'}
          colorText="#000"
          size={100}
          onPress={() => handleToggleSign()}>
          +/-
        </CalculatorButton>
        <CalculatorButton
          color={'#D4D4D2'}
          colorText="#000"
          size={100}
          onPress={() => handleOperation('%')}>
          %
        </CalculatorButton>
        <CalculatorButton
          color="#ff9500"
          colorText="#fff"
          size={100}
          onPress={() => handleOperation('/')}>
          /
        </CalculatorButton>
      </View>
      <View style={styles.row}>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('7')}>
          7
        </CalculatorButton>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('8')}>
          8
        </CalculatorButton>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('9')}>
          9
        </CalculatorButton>
        <CalculatorButton
          color="#ff9500"
          colorText="#fff"
          size={100}
          onPress={() => handleOperation('*')}>
          *
        </CalculatorButton>
      </View>
      <View style={styles.row}>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('4')}>
          4
        </CalculatorButton>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('5')}>
          5
        </CalculatorButton>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('6')}>
          6
        </CalculatorButton>
        <CalculatorButton
          color="#ff9500"
          colorText="#fff"
          size={100}
          onPress={() => handleOperation('-')}>
          -
        </CalculatorButton>
      </View>
      <View style={styles.row}>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('1')}>
          1
        </CalculatorButton>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('2')}>
          2
        </CalculatorButton>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('3')}>
          3
        </CalculatorButton>
        <CalculatorButton
          color="#ff9500"
          colorText="#fff"
          size={100}
          onPress={() => handleOperation('+')}>
          +
        </CalculatorButton>
      </View>
      <View style={styles.row}>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('0')}>
          0
        </CalculatorButton>
        <CalculatorButton
          color="#1C1C1C"
          colorText="#fff"
          size={100}
          onPress={() => handleAddNumber('.')}>
          .
        </CalculatorButton>
        <CalculatorButton
          color="#ff9500"
          colorText="#fff"
          size={100}
          onPress={() => handleOperation('=')}>
          =
        </CalculatorButton>
      </View>
    </CalculatorContainer>
  );
};

export default CalculatorScreen;
