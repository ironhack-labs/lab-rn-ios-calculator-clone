import {useState, useRef} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
  percentage,
}

export const useOperator = () => {
  const [numbers, setNumbers] = useState('0');
  const [anotherNumbers, setAnotherNumbers] = useState('0');

  const lastOperation = useRef<Operators>();

  const handlerCleanInput = () => {
    setNumbers('0');
    setAnotherNumbers('0');
  };

  const handlerNumbers = (numberText: string) => {
    if (numbers.includes('.') && numberText === '.') {
      return;
    }

    if (numbers.startsWith('0') || numbers.startsWith('-0')) {
      if (numberText === '.') {
        setNumbers(numbers + numberText);
      } else if (numberText === '0' && numbers.includes('.')) {
        setNumbers(numbers + numberText);
      } else if (numberText !== '0' && !numbers.includes('.')) {
        setNumbers(numberText);
      } else if (numberText === '0' && !numbers.includes('.')) {
        setNumbers(numbers);
      } else {
        setNumbers(numbers + numberText);
      }
    } else {
      setNumbers(numbers + numberText);
    }
  };

  const handlerPositiveNegative = () => {
    if (numbers.includes('-')) {
      setNumbers(numbers.replace('-', ''));
    } else {
      setNumbers('-' + numbers);
    }
  };

  const ChangeNumberXPrevious = () => {
    if (numbers.endsWith('.')) {
      setAnotherNumbers(numbers.slice(0, -1));
    } else {
      setAnotherNumbers(numbers);
    }
    setNumbers('0');
  };

  const handlerDivide = () => {
    ChangeNumberXPrevious();
    lastOperation.current = Operators.divide;
  };

  const handlerMultiply = () => {
    ChangeNumberXPrevious();
    lastOperation.current = Operators.multiply;
  };

  const handlerSubtract = () => {
    ChangeNumberXPrevious();
    lastOperation.current = Operators.subtract;
  };

  const handlerAdd = () => {
    ChangeNumberXPrevious();
    lastOperation.current = Operators.add;
  };

  const handlerPercentage = () => {
    ChangeNumberXPrevious();
    lastOperation.current = Operators.percentage;
  };

  const calculate = () => {
    const num1 = Number(numbers);
    const num2 = Number(anotherNumbers);

    switch (lastOperation.current) {
      case Operators.add:
        setNumbers(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumbers(`${num1 - num2}`);
        break;
      case Operators.divide:
        setNumbers(`${num1 / num2}`);
        break;
      case Operators.multiply:
        setNumbers(`${num1 * num2}`);
        break;
      case Operators.percentage:
        setNumbers(`${(num1 * num2) / 100}`);
        break;
    }
    setAnotherNumbers('0');
  };
  return {
    anotherNumbers,
    numbers,
    handlerCleanInput,
    handlerPositiveNegative,
    handlerPercentage,
    handlerDivide,
    handlerNumbers,
    handlerMultiply,
    handlerSubtract,
    handlerAdd,
    calculate,
  };
};
