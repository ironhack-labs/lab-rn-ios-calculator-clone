import React from 'react';
import {
  CalculatorDisplay,
  CalculatorButton,
  CalculatorContainer,
  CalculatorButtonsRow,
} from '../components';
import {useCalculator} from '../hooks';

const CalculatorScreen = () => {
  const [
    value,
    prevValue,
    {
      clearCalculator,
      addCalculatorValue,
      changeSignCalculatorValue,
      removeLastNumber,
      calculate,
      changeOperator,
    },
  ] = useCalculator();

  return (
    <CalculatorContainer>
      <CalculatorDisplay value={value} prevValue={prevValue} />
      <CalculatorButtonsRow>
        <CalculatorButton
          color="#9B9B9B"
          colorText="black"
          onPress={clearCalculator}>
          AC
        </CalculatorButton>
        <CalculatorButton
          color="#9B9B9B"
          colorText="black"
          onPress={changeSignCalculatorValue}>
          +/-
        </CalculatorButton>
        <CalculatorButton
          color="#9B9B9B"
          colorText="black"
          onPress={removeLastNumber}>
          del
        </CalculatorButton>
        <CalculatorButton
          color="#FF9427"
          onPress={() => changeOperator('Division')}>
          /
        </CalculatorButton>
      </CalculatorButtonsRow>

      <CalculatorButtonsRow>
        <CalculatorButton onPress={addCalculatorValue}>7</CalculatorButton>
        <CalculatorButton onPress={addCalculatorValue}>8</CalculatorButton>
        <CalculatorButton onPress={addCalculatorValue}>9</CalculatorButton>
        <CalculatorButton
          color="#FF9427"
          onPress={() => changeOperator('Multiplication')}>
          x
        </CalculatorButton>
      </CalculatorButtonsRow>

      <CalculatorButtonsRow>
        <CalculatorButton onPress={addCalculatorValue}>4</CalculatorButton>
        <CalculatorButton onPress={addCalculatorValue}>5</CalculatorButton>
        <CalculatorButton onPress={addCalculatorValue}>6</CalculatorButton>
        <CalculatorButton
          color="#FF9427"
          onPress={() => changeOperator('Subtraction')}>
          -
        </CalculatorButton>
      </CalculatorButtonsRow>

      <CalculatorButtonsRow>
        <CalculatorButton onPress={addCalculatorValue}>1</CalculatorButton>
        <CalculatorButton onPress={addCalculatorValue}>2</CalculatorButton>
        <CalculatorButton onPress={addCalculatorValue}>3</CalculatorButton>
        <CalculatorButton
          color="#FF9427"
          onPress={() => changeOperator('Addition')}>
          +
        </CalculatorButton>
      </CalculatorButtonsRow>

      <CalculatorButtonsRow>
        <CalculatorButton size="large" onPress={addCalculatorValue}>
          0
        </CalculatorButton>
        <CalculatorButton onPress={addCalculatorValue}>.</CalculatorButton>
        <CalculatorButton color="#FF9427" onPress={calculate}>
          =
        </CalculatorButton>
      </CalculatorButtonsRow>
    </CalculatorContainer>
  );
};

export default CalculatorScreen;
