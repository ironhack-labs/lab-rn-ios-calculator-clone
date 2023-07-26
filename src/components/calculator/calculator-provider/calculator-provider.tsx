import React, {ReactNode, createContext} from 'react';
import {useContextCalculator, ContextCalculator} from '../hooks';

export const CalculatorContext = createContext<ContextCalculator>({
  total: '0',
  currentValue: '',
  activeOperator: null,
  lastValue: null,
  pressDigit: () => null,
  deleteOperation: () => null,
  resetOperation: () => null,
  negateOperation: () => null,
  equalOperation: () => null,
  arithmeticOperation: () => null,
});

export const CalculatorProvider = ({children}: {children: ReactNode}) => {
  const state = useContextCalculator();

  return (
    <CalculatorContext.Provider value={state}>
      {children}
    </CalculatorContext.Provider>
  );
};
