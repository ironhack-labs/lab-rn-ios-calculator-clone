import {useState} from 'react';
const useCalculator = () => {
  const [result, setResult] = useState<string>('0');

  const hasDot = (str: string): boolean => {
    return /\./.test(str);
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
  }

  const add = (value: number) => {
    // setResult(prevResult => prevResult + value);
  };

  const subtract = (value: number) => {
    // setResult(prevResult => prevResult - value);
  };

  const clear = () => {
    setResult('0');
  };

  return {
    result,
    addNumber,
    add,
    subtract,
    clear,
  };
};

export default useCalculator;
