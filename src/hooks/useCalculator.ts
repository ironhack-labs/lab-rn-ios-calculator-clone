import {useRef, useState} from 'react';
import {CalculatorOperations, useCalculatorActions} from '../types';

const useCalculator = (): [string, string, useCalculatorActions] => {
  const [prevValue, setPrevValue] = useState('0');
  const [value, setValue] = useState('0');
  const lastOperation = useRef<CalculatorOperations>();

  const clearCalculator = () => {
    setValue('0');
    setPrevValue('');
  };

  const addCalculatorValue = (newValue: string) => {
    if (value.includes('.') && newValue === '.') {
      return;
    }

    if (value.startsWith('0') || value.startsWith('-0')) {
      if (newValue === '.') {
        setValue(value + newValue);
      } else if (newValue === '0' && value.includes('.')) {
        setValue(value + newValue);
      } else if (newValue !== '0' && !value.includes('.')) {
        setValue(newValue);
      } else if (newValue === '0' && !value.includes('.')) {
        setValue(value);
      } else {
        setValue(value + newValue);
      }
    } else {
      setValue(value + newValue);
    }
  };

  const changeSignCalculatorValue = () => {
    const newValue = value.includes('-') ? value.replace('-', '') : `-${value}`;
    setValue(newValue);
  };

  const removeLastNumber = () => {
    const isNegative = value.startsWith('-');
    const newValue = isNegative
      ? value.slice(0, -1)
      : value.substring(1, value.length - 1);
    setValue(newValue.length > 1 ? newValue : '0');
  };

  const setValueIntoPrevValue = () => {
    if (value.endsWith('.')) {
      setPrevValue(value.slice(0, -1));
    } else {
      setPrevValue(value);
    }
    setValue('0');
  };

  const changeOperator = (operator: CalculatorOperations) => {
    setValueIntoPrevValue();
    lastOperation.current = operator;
  };

  const calculate = () => {
    const num1 = Number(value);
    const num2 = Number(prevValue);

    switch (lastOperation.current) {
      case 'Addition':
        setValue(`${num1 + num2}`);
        break;

      case 'Subtraction':
        setValue(`${num2 - num1}`);
        break;

      case 'Multiplication':
        setValue(`${num1 * num2}`);
        break;

      case 'Division':
        setValue(`${num2 / num1}`);
        break;
    }

    setPrevValue('0');
  };

  return [
    value,
    prevValue,
    {
      clearCalculator,
      addCalculatorValue,
      changeSignCalculatorValue,
      removeLastNumber,
      changeOperator,
      calculate,
    },
  ];
};

export default useCalculator;
