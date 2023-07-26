import { useState } from 'react';

interface UseCalculator {
  currentValue: string;
  firstNumber: string;
  concatValue: (value: string) => void;
  deleteValue: () => void;
  addOperator: (operator: string) => void;
  calculate: () => void;
  changeSign: () => void;
  clear: () => void;
}

function useCalculator(): UseCalculator {
  const [currentValue, setCurrentValue] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  function concatValue(value: string) {
    if (currentValue === '0' && value === '.') {
      setCurrentValue(currentValue + value);
    }

    if (currentValue === '0' && parseFloat(value) > 0) {
      setCurrentValue(value);
    } else {
      setCurrentValue(currentValue + value);
    }
  }

  function deleteValue() {
    setCurrentValue(currentValue.length > 1 ? currentValue.slice(0, -1) : '0');
  }

  function addOperator(operator: string) {
    if (currentValue) {
      setFirstNumber(currentValue);
      setCurrentValue('0');
    }

    setOperation(operator);
  }

  function calculate() {
    if (firstNumber && currentValue) {
      const a = parseFloat(firstNumber);
      const b = parseFloat(currentValue);
      let result = 0;

      switch (operation) {
        case 'add':
          result = a + b;
          break;
        case 'substract':
          result = a - b;
          break;
        case 'multiply':
          result = a * b;
          break;
        case 'divide':
          result = b > 0 ? a / b : 0;
          break;
      }
      const resultString = Number.isInteger(result)
        ? `${result}`
        : `${result.toFixed(2)}`;
      setCurrentValue(resultString);
      setFirstNumber('0');
    }
  }

  function changeSign() {
    const value = parseFloat(currentValue);
    setCurrentValue(
      value > 0 ? `-${currentValue}` : `${currentValue.slice(1)}`,
    );
  }

  function clear() {
    setCurrentValue('0');
    setFirstNumber('0');
    setOperation('');
  }

  return {
    currentValue,
    firstNumber,
    concatValue,
    deleteValue,
    addOperator,
    calculate,
    changeSign,
    clear,
  };
}

export default useCalculator;
