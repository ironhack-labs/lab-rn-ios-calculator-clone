import { useState } from 'react';

type OperatorT = { [key: string]: (a: number, b: number) => number };

const operations: OperatorT = {
  '/': (a: number, b: number) => a / b,
  '*': (a: number, b: number) => a * b,
  '-': (a: number, b: number) => a - b,
  '+': (a: number, b: number) => a + b,
  '=': (a: number, b: number) => b,
};

const useCalculator = () => {
  const [value, setValue] = useState<string>('0');
  const [prevValue, setPrevValue] = useState<string | null>(null);
  const [currentOperator, setCurrentOperator] = useState<string | null>(null);

  const insertDot = () => {
    if (value === '0') {
      setValue('0.');
    } else {
      if (!value.includes('.')) setValue(`${value}.`);
    }
  };

  const handleNumber = (number: number) => {
    if (currentOperator && value !== '0') {
      execOperation();
    } else {
      setValue(value === '0' ? String(number) : value + number);
    }
  };

  const handleResult = () => {
    if (currentOperator && prevValue) {
      const result = operations[currentOperator](
        parseFloat(prevValue),
        parseFloat(value),
      );

      setValue(String(result));
      setCurrentOperator(null);
      setPrevValue(null);
    }
  };

  const execOperation = () => {
    if (currentOperator && prevValue) {
      const result = operations[currentOperator](
        parseFloat(prevValue),
        parseFloat(value),
      );

      setValue('0');
      setPrevValue(String(result));
    }
  };

  const handleOperation = (operator: string) => {
    setPrevValue(value);
    setCurrentOperator(operator);
    setValue('0');

    if (prevValue !== '0' && operator && value !== '') {
      execOperation();
    }
  };

  const handleToggleNegative = () => {
    if (Number(value) > 0) {
      setValue(`-${value}`);
    } else {
      setValue(value.slice(1));
    }
  };

  const clear = () => {
    setValue('0');
    setPrevValue(null);
    setCurrentOperator(null);
  };

  const deleteLast = () => {
    const newValue =
      value.length > 1 ? value.substring(0, value.length - 1) : '0';

    setValue(newValue);
  };

  return {
    clear,
    value,
    prevValue,
    insertDot,
    deleteLast,
    handleResult,
    handleNumber,
    handleOperation,
    handleToggleNegative,
  };
};

export default useCalculator;
