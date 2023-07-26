import React from 'react';
import { View, Text } from 'react-native';
import { styles, colors } from '../theme/CalculatorScreen.styles';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator from '../hooks/useCalculator';

function CalculatorScreen() {
  const {
    currentValue,
    firstNumber,
    concatValue,
    deleteValue,
    addOperator,
    calculate,
    changeSign,
    clear,
  } = useCalculator();

  return (
    <View style={styles.constainer}>
      <View style={styles.screenContainer}>
        {firstNumber !== '0' ? (
          <Text style={styles.firstNumber}>{firstNumber}</Text>
        ) : null}
        <Text style={styles.currentValue}>{currentValue}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <CalculatorButton
            children="AC"
            color={colors.lightGray}
            colorText={colors.dark}
            size={75}
            onPress={clear}
          />
          <CalculatorButton
            children="+/-"
            color={colors.lightGray}
            colorText={colors.dark}
            size={75}
            onPress={changeSign}
          />
          <CalculatorButton
            children="Del"
            color={colors.lightGray}
            colorText={colors.dark}
            size={75}
            onPress={() => deleteValue()}
          />
          <CalculatorButton
            children="÷"
            color={colors.orange}
            colorText={colors.white}
            size={75}
            onPress={() => addOperator('divide')}
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            children="7"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('7')}
          />
          <CalculatorButton
            children="8"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('8')}
          />
          <CalculatorButton
            children="9"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('9')}
          />
          <CalculatorButton
            children="x"
            color={colors.orange}
            colorText={colors.white}
            size={75}
            onPress={() => addOperator('multiply')}
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            children="4"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('4')}
          />
          <CalculatorButton
            children="5"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('5')}
          />
          <CalculatorButton
            children="6"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('6')}
          />
          <CalculatorButton
            children="-"
            color={colors.orange}
            colorText={colors.white}
            size={75}
            onPress={() => addOperator('substract')}
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            children="1"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('1')}
          />
          <CalculatorButton
            children="2"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('2')}
          />
          <CalculatorButton
            children="3"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('3')}
          />
          <CalculatorButton
            children="+"
            color={colors.orange}
            colorText={colors.white}
            size={75}
            onPress={() => addOperator('add')}
          />
        </View>

        <View style={styles.row}>
          <CalculatorButton
            children="0"
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('0')}
            double
          />
          <CalculatorButton
            children="."
            color={colors.darkGray}
            colorText={colors.white}
            size={75}
            onPress={() => concatValue('.')}
          />
          <CalculatorButton
            children="="
            color={colors.orange}
            colorText={colors.white}
            size={75}
            onPress={calculate}
          />
        </View>
      </View>
    </View>
  );
}

export default CalculatorScreen;
