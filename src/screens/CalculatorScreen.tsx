import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../theme/CalculatorScreen.styles';
import {CalculatorButton} from '../components/CalculatorButton';

import {useCalculator} from '../hooks/useCalculator';
import {CalculatorContainer} from '../components/CalculatorContainer';

export const CalculatorScreen = () => {
  const {
    previousNumber,
    number,
    clean,
    positiveOrNegative,
    btnDelete,
    btnDivide,
    makeNumber,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculate,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.background}>
      <CalculatorContainer>
        <View>
          {previousNumber !== '0' && (
            <Text style={styles.resultSmall}>{previousNumber}</Text>
          )}
        </View>

        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
          {number}
        </Text>

        {/* Fila de botones */}
        <View style={styles.row}>
          <CalculatorButton texto="C" color="#9B9B9B" accion={clean} />
          <CalculatorButton
            texto="+/-"
            color="#9B9B9B"
            accion={positiveOrNegative}
          />
          <CalculatorButton texto="del" color="#9B9B9B" accion={btnDelete} />
          <CalculatorButton texto="/" color="#FF9427" accion={btnDivide} />
        </View>

        {/* Fila de botones */}
        <View style={styles.row}>
          <CalculatorButton texto="7" accion={makeNumber} />
          <CalculatorButton texto="8" accion={makeNumber} />
          <CalculatorButton texto="9" accion={makeNumber} />
          <CalculatorButton texto="X" color="#FF9427" accion={btnMultiply} />
        </View>

        {/* Fila de botones */}
        <View style={styles.row}>
          <CalculatorButton texto="4" accion={makeNumber} />
          <CalculatorButton texto="5" accion={makeNumber} />
          <CalculatorButton texto="6" accion={makeNumber} />
          <CalculatorButton texto="-" color="#FF9427" accion={btnSubstract} />
        </View>

        {/* Fila de botones */}
        <View style={styles.row}>
          <CalculatorButton texto="1" accion={makeNumber} />
          <CalculatorButton texto="2" accion={makeNumber} />
          <CalculatorButton texto="3" accion={makeNumber} />
          <CalculatorButton texto="+" color="#FF9427" accion={btnAdd} />
        </View>

        {/* Fila de botones */}
        <View style={styles.row}>
          <CalculatorButton texto="0" accion={makeNumber} ancho />
          <CalculatorButton texto="." accion={makeNumber} />
          <CalculatorButton texto="=" color="#FF9427" accion={calculate} />
        </View>
      </CalculatorContainer>
    </SafeAreaView>
  );
};
