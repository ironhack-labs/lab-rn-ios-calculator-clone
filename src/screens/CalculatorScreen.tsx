import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from '../theme/CalculatorScreen.styles';
import CalculatorContainer from '../components/CalculatorContainer';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {

  const calculator = useCalculator();

  return (
    <SafeAreaView>
      <View style={styles.containerCalculator}>
        <Text style={styles.result}>{calculator.result}</Text>
        <CalculatorContainer style={styles.containerButtons}>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#A5A5A5"
            colorText="black"
            onPress={() => calculator.clear()}>
            AC
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#A5A5A5"
            colorText="black"
            onPress={() => calculator.changeSignal()}>
            +/-
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#A5A5A5"
            colorText="black">
            del
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#F1A43C"
            colorText="white">
            ÷
          </CalculatorButton>
        </CalculatorContainer>
        <CalculatorContainer style={styles.containerButtons}>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            7
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            8
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            9
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#F1A43C"
            colorText="white">
            ×
          </CalculatorButton>
        </CalculatorContainer>
        <CalculatorContainer style={styles.containerButtons}>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            4
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            5
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            6
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#F1A43C"
            colorText="white">
            −
          </CalculatorButton>
        </CalculatorContainer>
        <CalculatorContainer style={styles.containerButtons}>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            1
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            2
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            3
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#F1A43C"
            colorText="white">
            +
          </CalculatorButton>
        </CalculatorContainer>
        <CalculatorContainer style={styles.containerButtons}>
          <CalculatorButton
            size={30}
            style={[styles.button, styles.buttonLarge]}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            0
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#333333"
            onPress={calculator.addNumber}
            colorText="white">
            .
          </CalculatorButton>
          <CalculatorButton
            size={30}
            style={styles.button}
            color="#F1A43C"
            colorText="white">
            =
          </CalculatorButton>
        </CalculatorContainer>
      </View>
    </SafeAreaView>
  );
};

export default CalculatorScreen;
