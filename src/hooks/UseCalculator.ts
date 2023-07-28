import { useState } from 'react';

interface CalculatorFunctions {
  previousValue: string;
  currentValue: string;
  clear: () => void;
  deleteNumber: () => void;
  changeSign: () => void;
  addNumber: (value: string) => void;
  addDot: () => void;
  add: () => void;
  subtract: () => void;
  multiply: () => void;
  divide: () => void;
  calculateResult: () => void;
}

const UseCalculator = (): CalculatorFunctions => {
  const [previousValue, setPreviousValue] = useState('');
  const [currentValue, setCurrentValue] = useState('0');
  const [currentOperator, setCurrentOperator] = useState('');

  const clear = () => {
    setPreviousValue('');
    setCurrentValue('0');
    setCurrentOperator('');
  };

  const deleteNumber = () => {
    if (
      currentValue.length === 1 ||
      (currentValue.length === 2 && currentValue.startsWith('-'))
    ) {
      setCurrentValue('0');
    } else {
      setCurrentValue(currentValue.substring(0, currentValue.length - 1));
    }
  };

  const changeSign = () => {
    setCurrentValue(`${+currentValue * -1}`);
  };

  const addNumber = (value: string) => {
    if (currentValue === '0' || currentOperator === '=') {
      if (currentOperator === '=') {
        setCurrentOperator('');
      }
      setCurrentValue(`${value}`);
    } else {
      setCurrentValue(`${currentValue}${value}`);
    }
  };

  const performOperator = (operator: string) => {
    if (!previousValue) {
      if (operator === '=') {
        return;
      }
      setCurrentOperator(operator);
      setPreviousValue(currentValue);
      setCurrentValue('0');
    } else {
      const current = parseFloat(currentValue);
      const previous = parseFloat(previousValue);
      let result = 0;
      switch (currentOperator) {
        case '+':
          result = previous + current;
          if (operator === '=') {
            setCurrentValue(`${result}`);
            setPreviousValue('');
            setCurrentOperator(operator);
          } else {
            setCurrentValue('0');
            setCurrentOperator(operator);
            setPreviousValue(`${result}`);
          }
          break;
        case '-':
          result = previous - current;
          if (operator === '=') {
            setCurrentValue(`${result}`);
            setPreviousValue('');
            setCurrentOperator(operator);
          } else {
            setCurrentValue('0');
            setCurrentOperator(operator);
            setPreviousValue(`${result}`);
          }
          break;
        case '*':
          result = previous * current;
          if (operator === '=') {
            setCurrentValue(`${result}`);
            setPreviousValue('');
            setCurrentOperator(operator);
          } else {
            setCurrentValue('0');
            setCurrentOperator(operator);
            setPreviousValue(`${result}`);
          }
          break;
        case '/':
          if (current === 0) {
            setPreviousValue('');
            setCurrentValue('Error');
          } else {
            result = previous / current;
            if (operator === '=') {
              setCurrentValue(`${result}`);
              setPreviousValue('');
              setCurrentOperator(operator);
            } else {
              setCurrentValue('0');
              setCurrentOperator(operator);
              setPreviousValue(`${result}`);
            }
          }
          break;
        case '=':
          clear();
          break;
        default:
          break;
      }
    }
  };

  const addDot = () => {
    if (currentValue === '0') {
      setCurrentValue(`${currentValue}.`);
    } else {
      if (!currentValue.includes('.')) setCurrentValue(`${currentValue}.`);
    }
  };

  const add = () => {
    performOperator('+');
  };
  const subtract = () => {
    performOperator('-');
  };
  const multiply = () => {
    performOperator('*');
  };
  const divide = () => {
    performOperator('/');
  };
  const calculateResult = () => {
    performOperator('=');
  };

  return {
    previousValue,
    currentValue,
    clear,
    deleteNumber,
    changeSign,
    addNumber,
    addDot,
    add,
    subtract,
    multiply,
    divide,
    calculateResult,
  };
};

export default UseCalculator;
