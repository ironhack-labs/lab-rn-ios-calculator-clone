import {useState} from 'react';
const useCalculator = () => {
  const [result, setResult] = useState<string>('0');

  const hasDot = (str: string): boolean => {
    return /\./.test(str);
  };

  const hasMinus = (str: string): boolean => {
    return /\-/.test(str);
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

  const add = (value: number) => {
    // setResult(prevResult => prevResult + value);
  };

  const subtract = (value: number) => {
    // setResult(prevResult => prevResult - value);
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
    clear,
  };
};

export default useCalculator;
