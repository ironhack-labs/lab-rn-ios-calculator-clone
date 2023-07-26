import {useState} from 'react';

export type ContextCalculator = {
  total: string;
  currentValue: string;
  lastValue: string;
  currentOperation: string;
  operation: (operatorSymbol: string) => void;
  pressDigit: (digit: string) => void;
};

export const useContextCalculator = function () {
  const [state, setState] = useState<ContextCalculator>({
    total: null,
    currentValue: '0',
    lastValue: null,
    currentOperation: null,
    pressDigit: (digit: string) => {
      // TODO: add logic for digit
      setState(prevState => {
        let currentValue = `${prevState.currentValue}${digit}`;

        if (prevState.currentValue === '0') {
          currentValue = digit;
        }

        return {
          ...prevState,
          currentValue,
        };
      });
    },
    operation: () => {
      // TODO: add logic for operation
      setState(prevState => {
        const total = `${+prevState.total + +prevState.currentValue}`;

        return {
          ...prevState,
          lastValue: prevState.currentValue,
          total,
          currentValue: `${total}`,
        };
      });
    },
  });

  return state;
};
