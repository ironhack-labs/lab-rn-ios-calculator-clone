import {useState, useRef} from 'react';

export function useCalculator() {
  const [expression, setExpression] = useState('');
  const [number, setNumber] = useState('');
  const [isNegative, setIsNegative] = useState(false);

  const expressionRef = useRef('');
  const operators = ['+', '-', '*', '/'];

  const handleClick = (text: string) => {
    if (text === '=') {
      try {
        setExpression(prev => prev + number);
        setExpression(prev => {
          expressionRef.current = eval(prev).toString();
          return '';
        });
        setNumber(() => expressionRef.current);
        setIsNegative(false);
      } catch (error) {
        setExpression('Error');
      }
    } else if (text === 'C') {
      setIsNegative(false);
      setExpression('');
      setNumber('');
    } else if (text === 'negative') {
      if (number !== '') {
        if (isNegative) {
          setNumber(prev => eval(prev + '*-1').toString());
        } else {
          setNumber(prev => '(' + eval(prev + '*-1').toString() + ')');
        }
        setIsNegative(prev => !prev);
      }
    } else if (text === 'del') {
      setNumber(prev => prev.slice(0, -1));
    } else {
      // Number or Operator
      if (operators.includes(text)) {
        setExpression(expression + number + text);
        setNumber('');
        setIsNegative(false);
      } else {
        setNumber(number + text);
      }
    }
  };

  return {
    expression,
    number,
    isNegative,
    handleClick,
  };
}
