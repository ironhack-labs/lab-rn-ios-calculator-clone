import {useState} from 'react';
const useCalculator = () => {
  const [result, setResult] = useState<string>('0');
  const [currentValue, setCurrentValue] = useState(0);

  const hasDot = (str: string): boolean => {
    return /\./.test(str);
  };

  const hasMinus = (str: string): boolean => {
    return /-/.test(str);
  };

  const addNumber = (value: string) => {
    if (result === '0') {
      setResult(value);
    } else {
      if (value === '.' && hasDot(result)) {
        return;
      }
      setResult(prevResult => prevResult + value);
    }
  };

  const add = (value: string) => {
    // setResult(prevResult => prevResult + value);
  };

  const subtract = (value: string) => {
    // setResult(prevResult => prevResult - value);
  };

  const deleteLastChar = () => {
    const nextResult = result.slice(0, -1);
    if (nextResult === '') {
      setResult('0');
    } else {
      setResult(nextResult);
    }
  };

  const changeSignal = () => {
    if (!hasMinus(result)) {
      setResult(prevResult => '-' + prevResult);
    } else {
      setResult(prevResult => prevResult.replace('-', ''));
    }
  };

  const clear = () => {
    setResult('0');
  };

  return {
    result,
    addNumber,
    add,
    subtract,
    changeSignal,
    deleteLastChar,
    clear,
    currentValue,
  };
};

export default useCalculator;
