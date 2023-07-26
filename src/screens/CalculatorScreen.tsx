import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import Button from '../components/Button';
import Display from '../components/DigitsDisplay';

// Utils
import { COLORS } from '../utils/colors';
import { add, subtract, multiply, divide } from '../utils/operations';

let num1: number;
let num2: number;

const CalculatorScreen = () => {
  const [display, setDisplay] = useState<number | string>(0);
  const [operation, setOperation] = useState<string>(''); 
  const [shouldConcatenateDigit, setShouldConcatenateDigit] = useState<boolean>(false);

  //Bonus Last Result <3
  const [lastResult, setLastResult] = useState<number | null>(null);

  const concatenateDigit = (digit: string) => {
    if (shouldConcatenateDigit) {
      setDisplay(prevDisplay => prevDisplay + digit);
    } else {
      setDisplay(digit);
      setShouldConcatenateDigit(true);
    }
  };

  const activateOperation = (op: string) => {
    num1 = Number(display);
    setShouldConcatenateDigit(false);
    setOperation(op);
  };

  const generateResult = () => {
    num2 = Number(display);

    let result: number;
    switch (operation) {
      case 'division':
        result = divide(num1, num2);
        break;
      case 'multiplication':
        result = multiply(num1, num2);
        break;
      case 'subtraction':
        result = subtract(num1, num2);
        break;
      case 'addition':
        result = add(num1, num2);
        break;
      default:
        return null;
    }

    setLastResult(result);
    setDisplay(+result.toFixed(5));
    setOperation('');
  };

  const cancelButton = () => {
    if (!shouldConcatenateDigit && display === 0) {
      setOperation('');
    }
    setDisplay(0);
    setShouldConcatenateDigit(false);
  };

  const addDot = () => {
    if (Math.round(display as number) === Number(display)) {
      setDisplay(prevDisplay => `${prevDisplay}.`);
      setShouldConcatenateDigit(true);
    }
  };

  const percentage = () => {
    const displayNumber = typeof display === 'number' ? display : Number(display);
    setDisplay(displayNumber / 100);
  };

  const invertSignal = () => {
    const displayNumber = typeof display === 'number' ? display : Number(display);
    setDisplay(displayNumber * -1);
  };

  return (
    <View style={styles.container}>
      {/* Mostrar el último resultado */}
      {lastResult !== null && (
        <View style={styles.lastResultContainer}>
          <Text style={styles.lastResultText}>{lastResult}</Text>
        </View>
      )}

      {/* Colocamos nuestro Display de números */}
      <Display display={display as string} />

      {/* Colocamos los botones de la calculadora */}
      <View style={styles.row}>
        {/* Botón "C" o "AC" para cancelar o reiniciar la operación */}
        <Button
          backgroundColor={COLORS.lightgray}
          color={COLORS.black}
          text={display ? 'C' : 'AC'}
          function={cancelButton}
        />
        {/* Botón "+/-" para cambiar el signo del número */}
        <Button
          backgroundColor={COLORS.lightgray}
          color={COLORS.black}
          text="+/-"
          function={invertSignal}
        />
        {/* Botón "%" para convertir el número en porcentaje */}
        <Button
          backgroundColor={COLORS.lightgray}
          color={COLORS.black}
          text="%"
          function={percentage}
        />
        {/* Botón "÷" para activar la operación de división */}
        <Button
          orange
          backgroundColor={operation === 'division' ? COLORS.white : COLORS.orange}
          color={operation === 'division' ? COLORS.orange : COLORS.white}
          text="÷"
          function={() => activateOperation('division')}
        />
      </View>
      <View style={styles.row}>
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="7"
          function={() => concatenateDigit('7')}
        />
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="8"
          function={() => concatenateDigit('8')}
        />
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="9"
          function={() => concatenateDigit('9')}
        />
        <Button
          backgroundColor={operation === 'multiplication' ? COLORS.white : COLORS.orange}
          color={operation === 'multiplication' ? COLORS.orange : COLORS.white}
          text="×"
          function={() => activateOperation('multiplication')}
        />
      </View>
      <View style={styles.row}>
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="4"
          function={() => concatenateDigit('4')}
        />
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="5"
          function={() => concatenateDigit('5')}
        />
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="6"
          function={() => concatenateDigit('6')}
        />
        <Button
          backgroundColor={operation === 'subtraction' ? COLORS.white : COLORS.orange}
          color={operation === 'subtraction' ? COLORS.orange : COLORS.white}
          text="−"
          function={() => activateOperation('subtraction')}
        />
      </View>
      <View style={styles.row}>
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="1"
          function={() => concatenateDigit('1')}
        />
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="2"
          function={() => concatenateDigit('2')}
        />
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="3"
          function={() => concatenateDigit('3')}
        />
        <Button
          backgroundColor={operation === 'addition' ? COLORS.white : COLORS.orange}
          color={operation === 'addition' ? COLORS.orange : COLORS.white}
          text="+"
          function={() => activateOperation('addition')}
        />
      </View>
      <View style={styles.row}>
        <Button
          special
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="0"
          function={() => concatenateDigit('0')}
        />
        <Button
          backgroundColor={COLORS.darkGray}
          color={COLORS.white}
          text="."
          function={() => addDot()}
        />
        <Button
          orange
          backgroundColor={COLORS.orange}
          color={COLORS.white}
          text="="
          function={() => generateResult()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    padding: 8,
    paddingBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 7,
  },
  lastResultContainer: {
    alignItems: 'flex-end',
    marginRight: 17,
    marginBottom: 5,
  },
  lastResultText: {
    fontSize: 30,
    color: '#ffffff75',
  },
});

export default CalculatorScreen;