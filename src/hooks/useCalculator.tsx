import {useRef, useState} from 'react';

enum Operators {
  Add,
  Substract,
  Multiply,
  Divide,
}

export const useCalculator = () => {
  const [previousNumber, setpreviousNumber] = useState('0');
  const [number, setnumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setnumber('0');
    setpreviousNumber('0');
  };

  const makeNumber = (numberText: string) => {
    
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      
      if (numberText === '.') {
        setnumber(number + numberText);

        
      } else if (numberText === '0' && number.includes('.')) {
        setnumber(number + numberText);

        
      } else if (numberText !== '0' && !number.includes('.')) {
        setnumber(numberText);

        
      } else if (numberText === '0' && !number.includes('.')) {
        setnumber(number);
      } else {
        setnumber(number + numberText);
      }
    } else {
      setnumber(number + numberText);
    }
  };

  const positiveOrNegative = () => {
    if (number.includes('-')) {
      setnumber(number.replace('-', ''));
    } else {
      setnumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negativo = '-';
      numberTemp = number.substr(1);
    }

    if (numberTemp.length > 1) {
      setnumber(negativo + numberTemp.slice(0, -1));
    } else {
      setnumber('0');
    }
  };

  const changeNumForBefore = () => {
    if (number.endsWith('.')) {
      setpreviousNumber(number.slice(0, -1));
    } else {
      setpreviousNumber(number);
    }
    setnumber('0');
  };

  const btnDivide = () => {
    changeNumForBefore();
    lastOperation.current = Operators.Divide;
  };

  const btnMultiply = () => {
    changeNumForBefore();
    lastOperation.current = Operators.Multiply;
  };

  const btnSubstract = () => {
    changeNumForBefore();
    lastOperation.current = Operators.Substract;
  };

  const btnAdd = () => {
    changeNumForBefore();
    lastOperation.current = Operators.Add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.Add:
        setnumber(`${num1 + num2}`);
        break;

      case Operators.Substract:
        setnumber(`${num2 - num1}`);
        break;

      case Operators.Multiply:
        setnumber(`${num1 * num2}`);
        break;

      case Operators.Divide:
        setnumber(`${num2 / num1}`);
        break;
    }

    setpreviousNumber('0');
  };

  return {
    previousNumber,
    number,
    clean,
    positiveOrNegative,
    btnDelete,
    btnDivide,
    makeNumber,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculate,
  };
};
