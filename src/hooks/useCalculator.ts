import {useState} from 'react';
const useCalculator = () => {
  const [result, setResult] = useState<string>('0');
  const [currentValue, setCurrentValue] = useState<string>('');
  const [currentOperation, setCurrentOperation] = useState<string>('');

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

  const add = () => {
    setCurrentValue(result);
    setResult('0');
    setCurrentOperation('+');
  };

  const subtract = () => {
    setCurrentValue(result);
    setResult('0');
    setCurrentOperation('-');
  };

  const multiply = () => {
    setCurrentValue(result);
    setResult('0');
    setCurrentOperation('*');
  };

  const division = () => {
    setCurrentValue(result);
    setResult('0');
    setCurrentOperation('/');
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
    setCurrentValue('');
  };

  const setResultOp = () => {
    const num1 = parseFloat(currentValue);
    const num2 = parseFloat(result);
    let newResult = 0;
    switch (currentOperation) {
      case '/':
        if (num2 === 0) {
          setResult('Error 🙄');
          setTimeout(() => {
            setResult('0');
          }, 1000);
        } else {
          newResult = num1 / num2;
          setResult(newResult.toString());
        }
        break;
      case '*':
        newResult = num1 * num2;
        setResult(newResult.toString());
        break;
      case '-':
        newResult = num1 - num2;
        setResult(newResult.toString());
        break;
      case '+':
        newResult = num1 + num2;
        setResult(newResult.toString());
        break;
      default:
        break;
    }
    setCurrentValue('');
    setCurrentOperation('');
  };

  return {
    result,
    addNumber,
    add,
    subtract,
    multiply,
    division,
    changeSignal,
    deleteLastChar,
    clear,
    currentValue,
    setResultOp,
  };
};

export default useCalculator;
