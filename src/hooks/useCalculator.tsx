import { useRef, useState } from "react";

enum Operations {
  plus,
  substract,
  divide,
  multiply
};

export const useCalculator = () => {
  const [history, setHistory] = useState('0')
  const [digit, setDigit] = useState('0');
  const currentOperation = useRef<Operations>()

  const clean = () => {
    setDigit('0')
    setHistory('0')
  }

  const constructNumber = (num: string) => {
    if(digit.includes('.') && num === '.') return;
    if(digit.startsWith('-') || digit.startsWith('0')) {
      if(num === '.') setDigit(digit + num)
      else if (num === '0' && digit.includes('.')) {
        setDigit(digit + num)
      } else if(num !== '0' && !digit.includes('.')) {
        setDigit(num)
      } else if(num === '0' && digit.includes('.')) {
        setDigit(digit)
      }
    } else {
      setDigit(digit + num);
    }
  }

  const removeLastDigit = () => {
    let neg = '';
    let numTemp = digit;
    if(digit.includes('-')) {
      neg = '-';
      numTemp = digit.replace('-', '')
    }
    if(numTemp.length > 1) {
      setDigit(neg + numTemp.slice(0, -1));
    } else {
      setDigit('0')
    }
  }

  const updateHistory = () => {
    digit.endsWith('.') ? setHistory(digit.slice(0, -1)) : setHistory(digit)
    setDigit('0')
  }

  const posNegDispatch = () => {
    digit.includes('-') ? setDigit(digit.replace('-', '')) : setDigit('-' + digit)
  }

  const btnOperationDivide = () => {
    updateHistory();
    currentOperation.current = Operations.divide
  }

  const btnOperationMultiply = () => {
    updateHistory();
    currentOperation.current = Operations.multiply
  }

  const btnOperationSubstract = () => {
    updateHistory();
    currentOperation.current = Operations.substract
  }

  const btnOperationPlus = () => {
    updateHistory();
    currentOperation.current = Operations.plus
  }

  const calculate = () => {
    const firstNumber = Number(digit);
    const secondNumber = Number(history)
    switch(currentOperation.current) {
      case Operations.plus:
        setDigit(`${firstNumber + secondNumber}`)
        break;
      case Operations.substract:
        setDigit(`${secondNumber - firstNumber}`)
        break;
      case Operations.multiply:
        setDigit(`${firstNumber * secondNumber}`)
        break;
      case Operations.divide:
        if(firstNumber === 0 || secondNumber === 0) return;
        setDigit(`${secondNumber / firstNumber}`)
        break;
    }
    setHistory('0')
  }


  return {
    clean,
    constructNumber,
    removeLastDigit,
    posNegDispatch,
    btnOperationDivide,
    btnOperationMultiply,
    btnOperationSubstract,
    btnOperationPlus,
    calculate,
    history,
    digit
  }

}